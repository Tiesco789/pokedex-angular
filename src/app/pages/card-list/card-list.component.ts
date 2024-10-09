import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit {
  pokemons: any[] = [];
  pokemonDetails: any[] = []; // Inicializar como array vazio

  constructor(private pokeApiService: PokeApiService) {  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokeApiService.getPokemons().subscribe(data => {
      data.results.forEach((pokemon: any) => {
        this.pokeApiService.getPokemon(pokemon.name).subscribe(details => {
          this.pokemonDetails.push(details); // Adicionar detalhes ao array global

          // Ordenar pelo ID a cada adição de Pokémon
          this.pokemons = this.pokemonDetails.sort((a, b) => a.id - b.id);
        });
      });
    });
  }
}
