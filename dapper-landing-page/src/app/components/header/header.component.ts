import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,  // Si quieres mantenerlo como standalone, déjalo; si no, puedes eliminar esta línea
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Asegúrate de que sea styleUrls y no styleUrl
})
export class HeaderComponent {}

