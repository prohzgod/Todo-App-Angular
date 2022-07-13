import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from './modules/core/core.component';
import { SideMenuComponent } from './modules/side-menu/side-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarButtonComponent } from './modules/side-menu/sidebar-button/sidebar-button.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './modules/shared/todo-list/todo-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TodoComponent } from './modules/shared/todo/todo.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    SideMenuComponent,
    SidebarButtonComponent,
    ProjectsComponent,
    OverviewComponent,
    HeaderComponent,
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
