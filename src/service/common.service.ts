import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = 'http://localhost:8080/player/getAllPlayers'; // Replace with your API endpoint
  private apiUrlupdate = 'http://localhost:8080/player/uploadAndUpdatePlayers'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  uploadExcelFile(formData: FormData): Observable<any> {
    debugger
    const url = `${this.apiUrlupdate}`; // Replace with your backend API endpoint
    return this.http.post(url, formData);
  }
  
}
