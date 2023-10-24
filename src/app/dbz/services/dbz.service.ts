
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 500
    },{
      id: uuid(),
      name:'Goku',
      power:10000
    },{
      id: uuid(),
      name:'Vegeta',
      power:9000
    }
  ];

  addCharacter(character: Character):void{

    const newCharacter: Character = { id:uuid(), ...character};


    this.characters.push(newCharacter);
  }

  // TODO: crear el metodo que elimine con el metodo splice el indice
  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !== id);
  }
  constructor() { }

}
