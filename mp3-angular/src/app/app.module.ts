import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { UserActionComponent } from './components/user-action/user-action.component';
import { UserInformationComponent } from './components/user-information/user-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserActionComponent,
    UserInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
