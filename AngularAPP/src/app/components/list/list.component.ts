import { Component, OnInit } from "@angular/core";
import { Hero } from "../../models/hero";

import { HEROES } from "../../services/mock-heros";
import { HeroesService } from "src/app/services/heroes.service";
import { Observable } from "rxjs";
import { ErrorTracker } from "src/app/models/error-tracker";

@Component({
  selector: "app-heroes",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  private heroes: Hero[];
  private selectedHero: Hero;

  constructor(private heroService: HeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  /**
   * Get Heros, hace el request de data al servidor por medio del servicio HeroesService
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      // ? si el servidor retorno data, ejecuta una funcion
      (data: Hero[]) => {
        this.heroes = data;
        (this.selectedHero = this.heroes[0]), console.log("GET Heroes OK");
      },
      // ? si el servidor retorno error, ejecuta una funcion
      (err: ErrorTracker) => {
        console.log("GET Heroes ERR", err);
      },
      // ? cuando termina el request, ejecuta una funcion
      () => console.log("GET Heroes finish")
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
