import { DbzServices } from '../services/dbz.services';
import { Character } from './../interfaces/character.interfaces';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dbz-main-name',
  templateUrl: './main-pages-component.html'
})

export class MainPagesComponent {

  constructor(private dbzServices: DbzServices) { }

  get character(): Character[] {
    return [...this.dbzServices.characters]
  }

  onDeleteCharacter(id: string): void {
    this.dbzServices.deleteCharacterById(id)
  }

  onNewCharacter(character: Character): void {
    this.dbzServices.addChacarter(character)
  }

}
