import { Injectable } from '@angular/core';
import { Personagem } from './personagem';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private url = 'http://localhost:3000/personagens';

  constructor(private _httpCliente: HttpClient){}

  public getPersonagens(): Observable<Personagem[]> {
    return this._httpCliente.get<Personagem[]>(this.url);
    
  
  
  }
}
