import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros'
import { Hero } from '../models/hero';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES;
  }
}
