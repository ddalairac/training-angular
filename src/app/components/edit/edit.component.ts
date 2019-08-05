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
    this.hero =   this.heroService.getHeroById(id)
  }
  goBack(): void {
    this.location.back();
  }
  votePlus(){
    this.hero.likes ++
  }
  voteLess(){
    this.hero.likes --
  }
}
