import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})


  
export class BienvenidoComponent {
  ngOnInit(): void{
    const usuarioString = localStorage.getItem("usuario");
    console.log(usuarioString);
    }
}
