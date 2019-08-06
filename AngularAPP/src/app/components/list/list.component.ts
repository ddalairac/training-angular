import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

import { HEROES } from '../../services/mock-heros';
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';
import { ErrorTracker } from 'src/app/models/error-tracker';

@Component({
  selector: 'app-heroes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  heroes: Hero[] 
  selectedHero: Hero

  constructor(private heroService: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }
  /**
   * Get Heros, hace el request de data al servidor
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (data:Hero[]) => { // si el servidor retorno data, ejecuta una funcion
        this.heroes = data
        this.selectedHero = this.heroes[0],
        console.log("GET Heroes OK") 
      },
      (err:ErrorTracker) => console.log("GET Heroes ERR", err), // si el servidor retorno error, ejecuta una funcion
      () => console.log("GET Heroes finish") // cuando termina el request, ejecuta una funcion
    );
  }

  /**
   * On click event, Setea el selectedHero
   * @param hero seleccionado 
   */
  onClickSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
