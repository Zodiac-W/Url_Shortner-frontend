import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UrlShortenComponent } from './url-shorten/url-shorten.component';
import { UserUrlsComponent } from './user-urls/user-urls.component';
import { UrlVisitsComponent } from './url-visits/url-visits.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, LoginComponent, SignupComponent, UrlShortenComponent, UserUrlsComponent, UrlVisitsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
