import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatAppRoutingModule } from './chat-app-routing.module';
import { ChatAppBaseComponent } from './chat-app-base/chat-app-base.component';


@NgModule({
  declarations: [ChatAppBaseComponent],
  imports: [
    CommonModule,
    ChatAppRoutingModule
  ]
})
export class ChatAppModule { }
