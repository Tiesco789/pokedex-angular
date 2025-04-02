import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  currentPage = 1;
  itemsPerPage = 20;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemonList();
  }

  /**
   * Loads the list of Pokémon based on the current page and pagination settings.
   */
  loadPokemonList(): void {
    const offset = (this.currentPage - 1) * this.itemsPerPage;

    this.pokemonService.getPokemonList(this.itemsPerPage, offset).subscribe({
      next: response => {
        this.pokemons = [];
        response.results.forEach(pokemonData => this.loadPokemonDetails(pokemonData.url));
      },
      error: error => console.error('Error loading Pokémon list:', error)
    });
  }

  /**
   * Fetches detailed information about a Pokémon using its URL.
   * @param url - The API URL for the Pokémon details.
   */
  private loadPokemonDetails(url: string): void {
    this.pokemonService.getPokemonDetails(url).subscribe({
      next: pokemon => this.loadPokemonSpecies(pokemon),
      error: error => console.error('Error loading Pokémon details:', error)
    });
  }

  /**
   * Loads species information for a given Pokémon and retrieves its evolution chain if available.
   * @param pokemon - The Pokémon object containing its basic details.
   */
  private loadPokemonSpecies(pokemon: any): void {
    this.pokemonService.getPokemonSpecies(pokemon.id).subscribe({
      next: speciesData => {
        if (speciesData.evolution_chain?.url) {
          this.loadEvolutionChain(pokemon, speciesData.evolution_chain.url);
        } else {
          pokemon.evolutions = [];
          this.pokemons.push(pokemon);
        }
      },
      error: error => {
        console.error('Error loading species data:', error);
        pokemon.evolutions = [];
        this.pokemons.push(pokemon);
      }
    });
  }

  /**
   * Retrieves and processes the evolution chain for a given Pokémon.
   * @param pokemon - The Pokémon object whose evolution chain is being loaded.
   * @param url - The API URL for the Pokémon's evolution chain.
   */
  private loadEvolutionChain(pokemon: any, url: string): void {
    this.pokemonService.getEvolutionChain(url).subscribe({
      next: evolutionData => {
        pokemon.evolutions = this.extractEvolutionData(evolutionData);
        this.pokemons.push(pokemon);
      },
      error: error => {
        console.error('Error loading evolution chain:', error);
        pokemon.evolutions = [];
        this.pokemons.push(pokemon);
      }
    });
  }

  /**
   * Extracts evolution data from the provided evolution chain.
   * @param evolutionData - The evolution chain data.
   * @returns An array of objects containing Pokémon name and sprite URL.
   */
  extractEvolutionData(evolutionData: any): { name: string; sprite: string }[] {
    const evolutionChain: { name: string; sprite: string }[] = [];

  /**
   * Recursively processes the evolution chain to extract evolution details.
   * @param chain - The current evolution stage in the chain.
   */
    const processChain = (chain: any): void => {
      evolutionChain.push(this.createEvolutionEntry(chain.species));
      chain.evolves_to.forEach(processChain);
    };

    processChain(evolutionData.chain);
    return evolutionChain;
  }


  /**
   * Creates an entry for a Pokémon in the evolution chain.
   * @param species - The species data containing the Pokémon name and URL.
   * @returns An object with the Pokémon name and sprite URL.
   */
  private createEvolutionEntry(species: any): { name: string; sprite: string } {
    const pokemonId = this.extractPokemonId(species.url);
    return {
      name: species.name,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    };
  }

  extractPokemonId(url: string): number {
    const parts = url.split('/');
    return Number(parts[parts.length - 2]);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPokemonList();
  }
}
