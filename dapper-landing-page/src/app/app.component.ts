import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  HeaderComponent, MainSectionComponent],  // Importa el componente standalone aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
