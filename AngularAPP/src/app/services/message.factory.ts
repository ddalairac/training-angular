import{ MessageService} from './message.service'

export function messageServiceFactory (){
    let messageService: MessageService = new MessageService() ;
    messageService.add({text:"Crear nuevo servicio de mensajes desde factory"});
    return messageService
}