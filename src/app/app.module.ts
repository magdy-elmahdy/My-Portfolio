import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { FooterComponent } from './components/footer/footer.component';

export function playerFactory(){
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LottieModule.forRoot({player:playerFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
