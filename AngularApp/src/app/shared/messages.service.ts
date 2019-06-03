import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Message } from './message.model';

@Injectable()
export class MessageService {
  selectedMessage: Message;
  messages: Message[];
  readonly baseURL = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) { }

  postMessage(msg: Message) {
    return this.http.post(this.baseURL, msg);
  }

  getMessageList() {
    return this.http.get(this.baseURL);
  }

  putMessage(msg: Message) {
    return this.http.put(this.baseURL + `/${msg._id}`, msg);
  }

  deleteMessage(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
