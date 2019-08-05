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

  constructor(private heroService: HeroesService, private router: Router) { }
  ngOnInit() {
    this.getHeroes();
  }
  /**
   * Get Heros, hace el request de data al servidor
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      data => { // si el servidor retorno data, ejecuta una funcion
        this.heroes = data
        console.log("GET Heroes OK")
      },
      err => console.log("GET Heroes ERR", err), // si el servidor retorno error, ejecuta una funcion
      () => console.log("GET Heroes finish") // cuando termina el request, ejecuta una funcion
    );
  }
  
//  onClickGoto(id) {
//     console.log('edit/' + id)
//     this.router.navigateByUrl('edit', id)
//   }
}
