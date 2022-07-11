import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from './modules/core/core.component';
import { SideMenuComponent } from './modules/side-menu/side-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SidebarButtonComponent } from './modules/side-menu/sidebar-button/sidebar-button.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { OverviewComponent } from './modules/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    SideMenuComponent,
    SidebarButtonComponent,
    ProjectsComponent,
    OverviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
