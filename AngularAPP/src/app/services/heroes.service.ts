import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heros";
import { Hero } from "../models/hero";
import { MessageService } from "./message.service";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { ErrorTracker } from "../models/error-tracker";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  server: String = "http://localhost:3000";
  getHeroes(): Observable<Hero[] | ErrorTracker> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http
      .get<Hero[]>(this.server + "/heros")
      .pipe(catchError(this.handleError)); // catchError: intercepta los errores y ejecuta una funcion
  }
  private handleError(error: HttpErrorResponse): Observable<ErrorTracker> {
    let dataError = new ErrorTracker();

    if (error.status == 0) {
      dataError.number = error.status;
      dataError.message = error.statusText;
      dataError.friendlyMessage = "Ups! Ocurrio un error recibiendo data";
    } else {
      dataError.number = null;
      dataError.message = "No";
      dataError.friendlyMessage =
        "Ups! algo paso, no contacte al admin porque tampoco sabe";
    }
    // alert("Error: " + dataError.friendlyMessage);
    return throwError(dataError); // Envia al componente el objeto error modificado.
  }

  getHeroById(id: number): Observable<Hero> {
    // return of(HEROES.find((hero) => { return hero.id === id }));
    let getHeaders: HttpHeaders = new HttpHeaders({
      Accept: "application/json",
      Authorization: "my-token"
    });
    console.log("getHeaders ", getHeaders);
    return this.http
      .get<Hero>(`${this.server}/heros/${id}`, {
        headers: getHeaders
      })
      .pipe(
        map(data => data), // map: Applies a given project function to each value emitted by the source
        tap(data => console.log("tap", data)) // tap: Perform a side effect for every emission on the source Observable
      );
  }
  addHero(newhero: Hero): Observable<Hero> {
    return this.http.post<Hero>( // en exito por dafault/convencion, el response devuelve la data enviada
      this.server + "/heros", // Ruta de conexion
      newhero, // Data a transferir
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }) // Aviso que la data es un json
      }
    );
  }
  updateHero(updatehero: Hero): Observable<void> {
    return this.http.put<void>( // en exito no devuelve data
      `${this.server}/heros/${updatehero.id}`, // Ruta de coneccion
      updatehero, // Data a transferir
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }) // Aviso que la data es un json
      }
    );
  }
  deleteHeroById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.server}/heros/${id}`); // en exito no devuelve data
  }

  // Una promesa tiene una funcion como parametro
  getHeroByIdPromise(id: number): Promise<string> {
    return new Promise(
      // La funcion que usa la promesa tiene que tener 2 parametro que tienen que llamarse para dar el resultado: resolve y rejeted
      (resolve, reject) => {
        setTimeout(() => {
          if (id > 0) {
            resolve("ID > 0");
          } else {
            reject("ID debe ser mayor a 0");
          }
        }, 2000);
      }
    );
  }
}
