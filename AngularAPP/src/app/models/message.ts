import { timer } from 'rxjs';

export class Message {
    text: string
    type?: eMtype
    temp?: boolean
    time?: number


}

export enum eMtype {
    Success = "success",
    warn = "warn",
    danger = "danger",
    info = "info"
}
