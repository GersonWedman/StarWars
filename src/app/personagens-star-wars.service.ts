import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../environments/environments'

@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {

  private url = "http://localhost:3000/personagens";
  //private urlEnv = API_PATH;

  constructor(private _httpClient: HttpClient) { }

  



}
