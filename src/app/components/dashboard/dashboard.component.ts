import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []//= HEROES;

  constructor(private heroService: HeroesService,private router: Router) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroes =   this.heroService.getHeroes()
  }
  goto(id){
    console.log('edit/'+id)
   this.router.navigateByUrl('edit',id)
  }
}
