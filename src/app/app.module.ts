import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home-service.service';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [HomeService],
})
export class AppModule { }