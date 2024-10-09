import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {  }

  getPokemons(limit: number = 151): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon?limit=${limit}`);
  }

  getPokemon(nameOrId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon/${nameOrId}`);
  }
}
