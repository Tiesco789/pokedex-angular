import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: false,
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  searchText: string = '';
  searchResults: string[] = [];
  allPokemons: string[] = ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle', 'Jigglypuff']; // Example data

  constructor() { }

  onSearch() {
    if (this.searchText) {
      this.searchResults = this.allPokemons.filter(pokemon =>
        pokemon.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }
}
