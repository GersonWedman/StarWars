import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from '../environments/environments'
import { PersonagemClass } from './personagem-class';
import { IPersonagem } from './star-wars';

@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {

  private url = "http://localhost:3000/personagens";
  //private url = API_PATH;

  constructor(private _httpClient: HttpClient) { }

  public getPersonagens(): Observable<PersonagemClass[]>{

    return this._httpClient.get<PersonagemClass[]>(`${API_PATH}`);
   
  }


//VERIFICAR COMO CORRIGIR ESTE CÓDIGO
  // public getPersonagemInterface(): Promise<IPersonagem[]> {
  //   return this._httpClient.get<IPersonagem[]>(`${API_PATH}`).toPromise();
  // }

}
