import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; // FormGroup -> Classe que apresenta os campos do formulario

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  // form -> variavel utilizada no form da pagina HTML
  form : FormGroup = new FormGroup({

    // description -> Variavel igual a criada na APi e que serve como referencia na pagina HTML para capturar a descrição digitada na tela.
    description : new FormControl('') // O valor inicial e uma String vazia, FormControl-> Objeto JavaScript.
  })

  submit(){
    console.log(this.form.value)
  }
}
