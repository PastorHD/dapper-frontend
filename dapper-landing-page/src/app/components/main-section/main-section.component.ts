import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-section',
  standalone: true,  // Standlone
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'] 
})
export class MainSectionComponent {
  email: string = '';

  constructor(private http: HttpClient) {}

  sendEmail() {
    if (this.email) {
      this.http.post('http://localhost:3000/send-email', { email: this.email })
        .subscribe(
          response => {
            console.log('Correo enviado correctamente', response);
            alert('Correo de bienvenida enviado');
          },
          error => {
            console.error('Error al enviar el correo', error);
            alert('Hubo un error al enviar el correo');
          }
        );
    } else {
      alert('Por favor, ingresa un correo electrónico');
    }
  }
}
