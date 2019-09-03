import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInformationComponent } from './components/user-information/user-information.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { RegisterComponent } from './components/user-register/register.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'homemp3',
    pathMatch: 'full',
  },
  {
    path: 'homemp3',
    component: ParentComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'userinfo',
        component: UserInformationComponent,
      }
    ]
  },
{
    path: 'register',
    component: RegisterComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
