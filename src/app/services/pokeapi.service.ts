import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface PokemonListResponse {
  results: { name: string; url: string }[];
}

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`<span class="math-inline">\{this\.apiUrl\}?limit\=</span>{limit}&offset=${offset}`);
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
