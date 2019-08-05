import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

import { HEROES } from '../../services/mock-heros';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  heroes: Hero[] = []//= HEROES;
  selectedHero: Hero //= this.heroes[0];

  constructor(private heroService: HeroesService) { }
  getHeroes(): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.heroes =   this.heroService.getHeroes()
  }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
