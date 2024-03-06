import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() //Propiedad para recibir del mundo exterior
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  // Emitir (onDelete = Index Value : number)
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    if(!id) return;
    console.log({id})
    this.onDelete.emit(id);
  }
}
