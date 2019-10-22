import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./components/list/list.component";
import { HeroDetailComponent } from "./components/list/hero-detail/hero-detail.component";
import { MessagesComponent } from "./components/share/messages/messages.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { Page404Component } from "./components/page404/page404.component";
import { NavComponent } from "./components/nav/nav.component";
import { EditComponent } from "./components/edit/edit.component";
import { MessageService } from "./services/message.service";
import { messageServiceFactory } from "./services/message.factory";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./services/interceptor.service";
import { LoaderComponent } from "./components/share/loader/loader.component";
import { LoaderService } from "./services/loader.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    Page404Component,
    NavComponent,
    EditComponent,
    LoaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    MessageService,
    //? seria lo mismo
    //{provide: MessageService, useClass:MessageService},

    //? podria ser otra clase con la misma interface (implements)
    // {provide: MessageService, useClass:MessageServiceV2}
    //? podria crear otra clase con la misma interface y asignarle el token
    // {provide: MessageService, useExisting:MessageService},
    //? valores harcodeados
    // {provide: MessageService, useValue:{
    //   messages:["bla bla"],
    //   add:(mes: string)=>{console.log("harcode Value",mes)}
    // }}
    //? crear la instancia del servicio desde una funcion
    // {provide: MessageService, useFactory:messageServiceFactory},
    //? interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true //  multi: true option provided tells Angular that you are providing multiple interceptors
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
