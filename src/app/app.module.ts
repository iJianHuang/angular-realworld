// app - once
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// app
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// shared
import { SharedModule } from './shared/shared.module'
import { MaterialModule } from './shared/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';

// feature
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer.component';
import { HeaderComponent } from './shared/layout/header.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,    
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
