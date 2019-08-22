import { Component, OnInit } from "@angular/core";
import { Hero } from "src/app/models/hero";
import { HeroesService } from "src/app/services/heroes.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  hero: Hero;
  title: string;
  edit: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroesService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.getHeroObservable(id);
      this.title = "Edit";
      this.edit = true;
    } else {
      this.title = "New";
      this.hero = new Hero();
      this.edit = false;
    }
    // this.getHeroPromise(id);
    // this.getHeroPromiseAsync(id)
  }
  save() {
    if (this.edit) {
      this.saveEdition();
    } else {
      this.saveNewHero();
    }
  }
  saveEdition() {
    this.heroService
      .updateHero(this.hero)
      .subscribe(data => console.log("update Data", data));
  }
  saveNewHero() {
    this.heroService
      .addHero(this.hero)
      .subscribe(data => console.log("New Hero Data", data));
  }

  // ! observable
  getHeroObservable(id: number): void {
    // this.heroService.getHeroById(id).subscribe( data => this.hero = data);
    this.heroService.getHeroById(id).subscribe(
      data => {
        this.hero = data;
        console.log("GET Heroes OK");
      }, // si el servidor retorno data, ejecuta una funcion
      err => console.log("GET Hero ERR", err), // si el servidor retorno error, ejecuta una funcion
      () => console.log("GET Hero finish") // cuando termina el request, ejecuta una funcion
    );
  }

  // ! promise
  // getHeroPromise(id: number): void {
  //   this.heroService
  //     .getHeroByIdPromise(id)
  //     .then(
  //       (data: string) => {
  //         console.log("GET Heroes OK"),
  //           this.messageService.add({ text: "promise ID" + id + " OK" });
  //       },
  //       (err: string) => {
  //         console.log(".then GET Hero ERR", err),
  //           this.messageService.add({
  //             text: "promise ID" + id + " Err: " + err
  //           });
  //       }
  //     )
  //     .catch((error: Error) => {
  //       console.log(".catch Error", error);
  //     });
  // }

  // ! promise & async
  // async hace que el await sea solo dentro de la funcion, implementar esta funcion no frena la ejecución
  // async getHeroPromiseAsync(id: number): Promise<void> {
  //   this.heroService.getHeroByIdPromise(id);
  //   try {
  //     // await va a pausar la ejecución hasta que tenga una respuesta.
  //     let data: string = await this.heroService.getHeroByIdPromise(id);
  //     console.log("async GET Heroes OK", data);
  //   } catch (error) {
  //     // los errores se manejan todos desde el catch
  //     console.log("async catch Error", error);
  //   }
  // }
  goBack(): void {
    this.location.back();
  }
  votePlus() {
    this.hero.likes++;
  }
  voteLess() {
    this.hero.likes--;
  }
}
