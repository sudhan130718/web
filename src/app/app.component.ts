import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/service/common.service';
import { ExcelService } from 'src/service/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title="Responsive";
  isMenuOpen = false;
  isDefaultBackground = true; // Set this variable based on your logic
  players!: any[];
  


  constructor(private dataService: CommonService,private excelService: ExcelService) {}

  ngOnInit() {
    debugger
    this.dataService.getPlayers().subscribe((data) => {
      this.players = data;
      console.log(this.players)
    });
   
  }
  exportToExcel(): void {
    this.excelService.exportToExcel(this.players, 'data_export');
  }

  async uploadModifiedExcel(event: any) {
    debugger

    const inputElement = event.target as HTMLInputElement;
  
    // Check if 'inputElement.files' is null or undefined
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
    
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        // Send the modified Excel file to the backend
        const formData = new FormData();
        formData.append('File', file);
  
        this.dataService.uploadExcelFile(formData).subscribe(response => {
          // Handle the response from the backend (e.g., success or error)
          console.log(response);
        });
      }
    } else {
      console.error('No file selected.');
    }
  }
  
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // Function to toggle the background color
  toggleBackgroundColor() {debugger
    this.isDefaultBackground = !this.isDefaultBackground;
  }

 
}