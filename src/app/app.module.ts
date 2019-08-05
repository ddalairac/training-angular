import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HeroDetailComponent } from './components/list/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/share/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Page404Component } from './components/page404/page404.component';
import { NavComponent } from './components/nav/nav.component';
import { EditComponent } from './components/edit/edit.component';
import { MessageService } from './services/message.service';
import { messageServiceFactory } from './services/message.factory';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    Page404Component,
    NavComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MessageService
    //{provide: MessageService, useClass:MessageService}, 
    //! seria lo mismo
    // {provide: MessageService, useClass:MessageServiceV2} 
    //! podria ser otra clase con la misma interface (implements)
    // {provide: MessageService, useExisting:MessageService}, 
    //! podria creao otra clase con la misma interface y asignarle el token
    // {provide: MessageService, useValue:{
    //   messages:["bla bla"],
    //   add:(mes: string)=>{console.log("harcode Value",mes)}
    // }}
    //! valores harcodeados
    // {provide: MessageService, useFactory:messageServiceFactory}, 
    //! crear la instancia del servicio desde una funcion
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
