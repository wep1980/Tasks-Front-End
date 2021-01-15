import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; // FormGroup -> Classe que apresenta os campos do formulario
import { Tasks } from './tasks'; // importe do obj Task
import { TaskService } from './task.service'; // Importe do serviço que se conecta a APi


// CLASSE QUE FAZ A COMUNICAÇÃO ENTRE O TEMPLATE(PAGINA HTML) E OS DADOS MANIPULADOS AQUI DENTRO

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  tasks : Tasks[] = [] // Inicializando com array vazio

  // form -> variavel utilizada no form da pagina HTML
  form : FormGroup = new FormGroup({

    // description -> Variavel igual a criada na APi e que serve como referencia na pagina HTML para capturar a descrição digitada na tela.
    description : new FormControl('') // O valor inicial e uma String vazia, FormControl-> Objeto JavaScript.
  })

  constructor(
    private service : TaskService
  ){}

  /*
    ...this.form.value -> Tranforma o obj javaScript em obj Task
    subscribe() -> Trata o retorno da requisição
  */
  submit(){
   
    const tasks : Tasks = { ...this.form.value } // Cria uma task com os valores do formulario
    this.service.salvar(tasks) // Chama o metodo salvar do service
                .subscribe(savedTask => {
                  this.tasks.push(savedTask) // Adicionando a Task na lista de tasks
                  this.form.reset() // Limpa o formulario depois de salvar
                })
              }
}
