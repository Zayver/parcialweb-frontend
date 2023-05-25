import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { BookService } from './service/book.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    InputTextModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
