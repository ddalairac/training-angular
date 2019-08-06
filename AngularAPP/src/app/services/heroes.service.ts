import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros'
import { Hero } from '../models/hero';
import { MessageService } from './message.service';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorTracker } from '../models/error-tracker';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getHeroes(): Observable<Hero[] | ErrorTracker> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>('http://localhost:3000/heros') 
      .pipe(
        catchError(this.handleError)
      )
  }
  private handleError(error:HttpErrorResponse):Observable<ErrorTracker>{
    let dataError = new ErrorTracker()
    
    if(error.status == 0){
      dataError.number = error.status
      dataError.message = error.statusText
      dataError.friendlyMessage = "Ups! Ocurrio un error recibiendo data"
    } else {
      dataError.number = null
      dataError.message = "No"
      dataError.friendlyMessage = "Ups! algo paso, no contacte al admin porque tampoco sabe"
    }
    return throwError (dataError)
  }

  getHeroById(id: number): Observable<Hero> {
    // return of(HEROES.find((hero) => { return hero.id === id }));
    return this.http.get<Hero>(`http://localhost:3000/heros/${id}`)
  }
}