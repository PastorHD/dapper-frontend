import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  sendWelcomeEmail(email: string): Observable<any> {
    return this.http.post(this.apiUrl, { email });
  }
}
