import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { UserActionComponent } from './components/user-action/user-action.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { ParentComponent } from './components/parent/parent.component';
import { RegisterComponent } from './components/user-register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserActionComponent,
    UserInformationComponent,
    HomeComponent,
    ParentComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
