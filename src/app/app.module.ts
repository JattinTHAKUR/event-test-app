import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FleetIssuesComponent } from './fleet-issues/fleet-issues.component';

@NgModule({
  declarations: [
    FleetIssuesComponent
  ],
  imports: [
    BrowserModule
    // Add other modules if needed
  ],
  bootstrap: [FleetIssuesComponent]
})
export class AppModule { }
