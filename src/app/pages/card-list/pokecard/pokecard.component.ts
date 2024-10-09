import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrl: './pokecard.component.scss'
})
export class PokemoncardComponent {
  @Input() pokemon: any;
}
