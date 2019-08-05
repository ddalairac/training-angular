import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heros'
import { Hero } from '../models/hero';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private messageService: MessageService) { }
  
  // getHeroes(): Observable<Hero[]>  {
  getHeroes(): Hero[] {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return HEROES;
  }

  // getHeroById(id:number): Observable<Hero>{
  getHeroById(id:number): Hero{
    // return of (HEROES.find((hero) => {return hero.id === id}));
    let hero = HEROES.find((hero) => { return hero.id == id });
    return hero
  }
}
