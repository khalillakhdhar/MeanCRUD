import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from '../shared/messages.service';
import { Message } from '../shared/message.model';
declare var M: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessageService]
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  	 this.resetForm();
    this.refreshMessageList();
     if(localStorage.length==0)
    {
 window.location.replace('auth');    }
  }
resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.messageService.selectedMessage = {
      _id: "",
      titre: "",
      text: "",
      telephone: "",
    }
  }

 refreshMessageList() {
    this.messageService.getMessageList().subscribe((res) => {
      this.messageService.messages = res as Message[];
    });
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.messageService.postMessage(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMessageList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.messageService.putMessage(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMessageList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
}
 onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.messageService.deleteMessage(_id).subscribe((res) => {
        this.refreshMessageList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  template1()
  {this.messageService.selectedMessage.text="perte de poste HT %POSTE%";

  }
  template2()
  {this.messageService.selectedMessage.text="perte de la  ligne entre  %POSTE1% et %POSTE2%";

  }
}
