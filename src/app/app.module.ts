import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer.component';
import { HeaderComponent } from './shared/layout/header.component';
//import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    // ApiService,
    // UserService,
    BrowserModule,
    HttpClientModule,
    AuthModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
