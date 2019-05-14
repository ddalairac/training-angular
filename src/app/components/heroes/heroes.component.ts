import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

import { HEROES } from '../../services/mock-heros';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[] = HEROES;
  
  selectedHero: Hero = this.heroes[0];
  constructor(private heroService: HeroesService) { 
    //this.heroes = this.heroService.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
