import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from 'src/app/services/message.service';

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
    private heroService: HeroesService,
    private messageService: MessageService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
    this.getHeroPromise(id);
  }
  getHero(id:number): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.heroService.getHeroById(id).subscribe(
      data => { this.hero = data; console.log("GET Heroes OK") }, // si el servidor retorno data, ejecuta una funcion
      err => console.log("GET Hero ERR", err), // si el servidor retorno error, ejecuta una funcion
      () => console.log("GET Hero finish") // cuando termina el request, ejecuta una funcion
    );
  }

  getHeroPromise(id:number): void {
    this.heroService.getHeroByIdPromise(id)
      .then(
        (data: string) => { console.log("GET Heroes OK"),   this.messageService.add({text:"promise ID"+id+" OK"});},
        (err: string) => { console.log("GET Hero ERR", err),this.messageService.add({text:"promise ID"+id+" Err: "+err}); }
      )
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
