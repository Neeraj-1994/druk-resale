import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';
import { ChatListComponent } from './components/chat-list/chat-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule
  ],
  declarations: [
    ChatAppComponent,
    ChatListComponent
  ],
  exports: [
    ChatAppComponent,
    ChatListComponent
  ]
})
export class FeatureChatAppModule {}
