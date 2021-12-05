import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'product',
    loadChildren: () => import('../e-commerce/e-commerce.module').then(m => m.ECommerceModule)
  },
  {
    path: 'post',
    loadChildren: () => import('../ad-post/ad-post.module').then(m => m.AdPostModule)
  },
  {
    path: '404',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '404' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CoreModule { }
