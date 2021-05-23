import { Component, OnInit } from '@angular/core';
import { ChatAppFacadeService } from '../../services/chat-app-facade.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'chat-app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  constructor(private chatAppFacadeService: ChatAppFacadeService) { }

  ngOnInit(): void {
    this.documents = this.chatAppFacadeService.documents;
    this._docSub = this.chatAppFacadeService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
  }

  ngOnDestroy(): void {
    this._docSub.unsubscribe();
  }

  loadDoc(id: string): void {
    this.chatAppFacadeService.getDocument(id);
  }

  newDoc(): void {
    this.chatAppFacadeService.newDocument();
  }
}
