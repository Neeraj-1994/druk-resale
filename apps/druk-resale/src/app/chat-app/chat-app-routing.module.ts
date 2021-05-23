import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatAppBaseComponent } from '@druk-resale/apps/chat-app/chat-app-base/chat-app-base.component';
import { ChatAppComponent, FeatureChatAppModule } from '../../../../../libs/feature/chat-app/src';

const routes: Routes = [
  {
    path: '',
    component: ChatAppBaseComponent,
    children: [
      {
        path: '',
        component: ChatAppComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FeatureChatAppModule],
  exports: [RouterModule]
})
export class ChatAppRoutingModule { }
