import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventListComponent } from './event-list/event-list.component';
import { BrowserModule } from '@angular/platform-browser'

export const routes: Routes = [
  { path: 'events', component: EventListComponent }
];

