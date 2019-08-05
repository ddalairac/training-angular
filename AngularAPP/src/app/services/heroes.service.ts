import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros'
import { Hero } from '../models/hero';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>('http://localhost:3000/heros')
  }

  getHeroById(id: number): Observable<Hero> {
    // return of(HEROES.find((hero) => { return hero.id === id }));
    return this.http.get<Hero>(`http://localhost:3000/heros/${id}`)
  }
}