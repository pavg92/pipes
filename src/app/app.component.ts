import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uso de pipes de Angular';
  nombre = 'Pedro angel Velazquez garCia';
  saldo = 123.345;
  hoy = new Date();

  cursos = [
    {nombre: 'HTML5', dias: 5 , calificacion: 90},
    {nombre: 'javaScript', dias: 10, calificacion: 100},
    {nombre: 'CSS3', dias: 3, calificacion: 100}
  ]

}
