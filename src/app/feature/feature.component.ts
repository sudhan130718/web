import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
  isSpecial: boolean = false;



  currentStyles: { [key: string]: string } = {
    'color':  'orange'    
  };
  getCssClasses() {
    this.currentStyles = {
    };
    this.isSpecial=!this.isSpecial;
    return {
      'special-class': this.isSpecial, // Apply 'special-class' if isSpecial is true
      'default-class': !this.isSpecial // Apply 'default-class' if isSpecial is false
    };
  }
}
