import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Message, eMtype } from 'src/app/models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  
  constructor(public messageService: MessageService) {}

  ngOnInit() {
    let m:Message = {text: "Training Angular", type:eMtype.Success}
    this.messageService.add(m)
  }
  onClickClose(index){
    this.messageService.removeIndex(index)
  }
  onClickCloseAll(){
    this.messageService.removeAll()
  }


}
