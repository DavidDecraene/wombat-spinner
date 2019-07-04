import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { SpinnerModule } from 'wombat-spinner';
import { FormsModule } from '@angular/forms';

export const routes = [];

@NgModule({
  declarations: [
    AppComponent, TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
