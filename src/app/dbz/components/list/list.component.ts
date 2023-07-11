import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter()

  onDeletedCharacter(id?: string): void {
    if ( !id ) return;
    console.log(id);
    this.onDeleted.emit(id)
  }

}
