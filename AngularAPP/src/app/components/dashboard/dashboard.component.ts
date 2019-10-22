import { Component, OnInit } from "@angular/core";
import { Hero } from "src/app/models/hero";
import { HeroesService } from "src/app/services/heroes.service";
import { Router } from "@angular/router";
import { ErrorTracker } from "src/app/models/error-tracker";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.getHeros();
  }
  getHeros() {
    this.heroService
      .getHeroes()
      .subscribe((data: Hero[]) => (this.heroes = data));
  }
  onClickGoto(id) {
    console.log("edit/" + id);
    this.router.navigateByUrl("edit/" + id);
  }

  onClickDelete(id: number): void {
    console.log("delete click");
    this.heroService.deleteHeroById(id).subscribe(
      (data: void) => {
        console.log("delete id", id);
        this.getHeros();
        // this.router.navigateByUrl("list/");
      },
      (err: ErrorTracker) => {
        console.log("Delete Heroes ERR", err);
      }
    );
  }
}
