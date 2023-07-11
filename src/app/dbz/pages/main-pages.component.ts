import { Character } from './../interfaces/character.interfaces';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dbz-main-name',
  templateUrl: './main-pages-component.html'
})

export class MainPagesComponent {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 25000
  }];

  onNewChacarter(character: Character): void {
    this.characters.push(character)
  }

  onDeletedCharacter(index: number): void {
    this.characters.splice(index, 1)
  }

}
