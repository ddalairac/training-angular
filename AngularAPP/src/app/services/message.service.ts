import { Injectable } from '@angular/core';
import { Message, eMtype } from '../models/message';

@Injectable()
export class MessageService {

  constructor() { }
  private messages: Message[] = [];

  add(message: Message) {
    let today = new Date();
    let date = + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    message.text = message.text + " (" + date + "  " + time + ")"

    if (!message.temp) { message.temp = true }
    if (!message.type) { message.type = eMtype.info }
    if (!message.time) { message.time = 4000 }

    if (message.temp) {
      setTimeout(() => {
        this.destroyTimer(message)
      }, message.time);
    }
    this.messages.push(message);
  }
  public removeIndex(index) {
    this.messages.splice(index, 1)
  }
  removeAll() {
    this.messages = [];
  }
  private destroyTimer(message: Message){
    let index = this.messages.findIndex(m =>{ if(message == m) return true })
    this.removeIndex(index)
  }
}
