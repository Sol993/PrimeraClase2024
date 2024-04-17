import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from "../bienvenido/bienvenido.component";
import { CommonModule } from '@angular/common';
import { ErrorComponent } from "../error/error.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, BienvenidoComponent, CommonModule, ErrorComponent]
})
export class LoginComponent {
  usuario:Usuario = new Usuario();
  mostrarBienvenido:boolean = false;
  mostrarError:boolean = false;

  validarUsuario(){
    if ( this.usuario.nombre=="Solange" && this.usuario.clave == "12344"){
      this.mostrarBienvenido=true;
      this.mostrarError=false;
    } else {
      this.mostrarError=true;
      this.mostrarBienvenido=false;
    }
    const usuarioString= JSON.stringify(this.usuario);
    localStorage.setItem("usuario",usuarioString)
  }
  
  limpiar(){
    this.usuario.nombre = "";
    this.usuario.clave = "" ;
  }
  

}
