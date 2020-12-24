import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer.component';
import { HeaderComponent } from './shared/layout/header.component';
//import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module'
// import { ApiService } from './shared/services/api.service'
// import { UserService } from './shared/services/user.service'

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
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
