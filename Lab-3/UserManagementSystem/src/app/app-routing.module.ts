import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserAddComponent} from './user-add/user-add.component';
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {BooksComponent} from './books/books.component'
import {EnrollmentsComponent} from './enrollments/enrollments.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserLoginComponent,
    data: {title: 'login'}
  },
  {
    path: 'books/:id',
    component: BooksComponent,
    data: {title: 'Books'}
 
  },
  {
    path: 'user-add',
    component: UserAddComponent,
    data: {title: 'Sign Up'}
  },
  {
    path: 'my-enrollments/:id',
    component: EnrollmentsComponent,
    data: {title: 'Sign Up'}
  },
  {
    path: 'user-template/:id',
    component: UserAddComponent,
    data: {title: 'Sign Up'}
  },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    data: {title: 'User Profile'} 
  },
 /* {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
