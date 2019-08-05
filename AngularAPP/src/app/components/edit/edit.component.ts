import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroesService) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.heroService.getHeroById(id).subscribe(
      data => { this.hero = data; console.log("GET Heroes OK") }, // si el servidor retorno data, ejecuta una funcion
      err => console.log("GET Hero ERR", err), // si el servidor retorno error, ejecuta una funcion
      () => console.log("GET Hero finish") // cuando termina el request, ejecuta una funcion
    );
  }
  goBack(): void {
    this.location.back();
  }
  votePlus() {
    this.hero.likes++
  }
  voteLess() {
    this.hero.likes--
  }
}
