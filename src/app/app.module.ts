import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SachinComponent } from './sachin/sachin.component';
import { GangulyComponent } from './ganguly/ganguly.component';

@NgModule({
  declarations: [
    AppComponent,
    SachinComponent,
    GangulyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
