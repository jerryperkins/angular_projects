import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CakeReactionsComponent } from './cake-reactions/cake-reactions.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component'

@NgModule({
  declarations: [
    AppComponent,
    CakeReactionsComponent,
    CakeDetailsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
