import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { QuestionsFormComponent } from './components/questions-form/questions-form.component';
import { QuestionsFieldComponent } from './components/questions-form/questions-field/questions-field.component';
import {FieldControlService} from './questions/field-control.service';
import {QuestionsService} from './providers/questions.service';
import {HttpClientModule} from '@angular/common/http';
import { PageComponent } from './components/questions/page/page.component';
import {LanguageService} from './providers/language.service';
import {DataService} from './providers/data.service';
import { HomePageComponent } from './new-comp/pages/home-page/home-page.component';
import { MainWrapperComponent } from './new-comp/main-wrapper/main-wrapper.component';
import { QPage1Component } from './new-comp/pages/q-page-1/q-page-1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsFormComponent,
    QuestionsFieldComponent,
    PageComponent,
    HomePageComponent,
    MainWrapperComponent,
    QPage1Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ElectronService, FieldControlService, QuestionsService, LanguageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
