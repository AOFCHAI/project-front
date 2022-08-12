import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAdnimComponent } from './register-adnim/register-adnim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAdnimComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    HomeRoutingModule
    
  ]
})
export class HomeModule { }
