import { Component, OnInit } from '@angular/core';
import { ChatAppFacadeService } from '../../services/chat-app-facade.service';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { ChatRoom } from '../../model/chat-app';

@Component({
  selector: 'chat-app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit {
  document: ChatRoom;
  private _docSub: Subscription;

  constructor(private chatAppFacadeService: ChatAppFacadeService) { }

  ngOnInit(): void {
    this._docSub = this.chatAppFacadeService.currentDocument.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started' })
    ).subscribe(document => this.document = document);
  }

  ngOnDestroy(): void {
    this._docSub.unsubscribe();
  }

  editDoc(): void {
    this.chatAppFacadeService.editDocument(this.document);
  }
}
