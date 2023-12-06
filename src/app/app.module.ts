import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { PipeComponent } from './pipe/pipe.component';
import { CrudFacComponent } from './crud-fac/crud-fac.component';
import { CrudStuComponent } from './crud-stu/crud-stu.component';
import { CrudLaptopComponent } from './crud-laptop/crud-laptop.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    TodoComponent,
    PipeComponent,
    CrudFacComponent,
    CrudStuComponent,
    CrudLaptopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
