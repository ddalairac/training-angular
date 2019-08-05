import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages: string[] = [];

  add(message: string) {
    let today = new Date();
    let date = + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() ;
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.messages.push(message+ " ("+date+"  "+time+")");
  }
  clear() {
    this.messages = [];
  }
}
