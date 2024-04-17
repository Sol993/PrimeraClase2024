import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule, RouterOutlet} from '@angular/router';
import { NuevoComponent } from './componentes/nuevo/nuevo.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./componentes/login/login.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, FormsModule, NuevoComponent, CommonModule, LoginComponent]
})

export class AppComponent {
  title:string = 'Mi nuevo titulo';
  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

/*
  title:string = 'Mi nuevo titulo';
  suma:number=0;
  nombre:string='Solange';
  edadUno:number=0;
  edadDos:number=0;
  total:number=0;
  promedio:number=0;
  
  calcular(){
    this.total=this.edadDos+ this.edadUno;
    this.promedio= this.total/2;
  }

  limpiar(){
    this.edadDos=0;
    this.edadUno=0;
    this.total=0;
    this.promedio=0;
  }

  sumar(){
    this.suma++;
  }
  */

}
