import { Injectable } from '@angular/core';
import { ChatRoom } from '../model/chat-app';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatAppFacadeService{
  currentDocument = this.socket.fromEvent<ChatRoom>('document');
  documents = this.socket.fromEvent<string[]>('documents');

  constructor(private socket: Socket) { }

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument() {
    this.socket.emit('addDoc', { id: ChatAppFacadeService.docId(), doc: '' });
  }

  editDocument(document: ChatRoom) {
    this.socket.emit('editDoc', document);
  }

  private static docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
