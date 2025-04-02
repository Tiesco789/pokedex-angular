import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

interface PokemonListResponse {
  results: { name: string; url: string }[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  height: number;
  weight: number;
  moves: { move: { name: string } }[];
  species: { url: string };  // Adicione esta propriedade
  evolutions?: { name: string; sprite: string }[];  // Torne opcional
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  getEvolutionChain(url: string): Observable<any> {
    // Just pass through the URL directly
    return this.http.get<any>(url);
  }

  getPokemonSpecies(id: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  }

}
