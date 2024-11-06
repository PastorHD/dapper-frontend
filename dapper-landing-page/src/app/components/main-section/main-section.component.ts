import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-section',
  standalone: true,  // Standlone
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'] 
})

export class MainSectionComponent {
  /*
  email: string = '';

  constructor(private http: HttpClient) {} // Inyecta HttpClient aquí

  sendEmail() {
    
    const url = 'http://localhost:3000/send-email';
    const body = { email: this.email };

    this.http.post(url, body)
      .subscribe(
        response => {
          console.log('Correo enviado correctamente', response);
        },
        error => {
          console.error('Error al enviar el correo', error);
        }
      );
  
      
  }
  */
}
