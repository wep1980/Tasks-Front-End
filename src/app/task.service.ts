import { Injectable } from '@angular/core'; // Ja injeta na aplicação sem precisar instanciar
import { Tasks } from './tasks'; // Importe do objeto Task
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Classe de serviço - RESPONSAVEL POR FAZER A COMUNICAÇÃO COM A APi

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiURL : string = 'http://localhost:8080/api/tasks';

  
  constructor(
    private http: HttpClient
  ) { }

  /**
   *  task -> Passando o obj Task (JSON) como parametro.
   * No angular as chamadas são assincronas, a requisição e feita no servidor e o Observable fica
   * observando esperando a resposta da requisição
   */ 
  salvar(task: Tasks) : Observable<Tasks>{
     return this.http.post<Tasks>(this.apiURL, task)
  }


  listar() : Observable<Tasks[]> {

    return this.http.get<Tasks[]>(this.apiURL);
  }
}
