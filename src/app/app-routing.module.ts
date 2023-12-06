import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { PipeComponent } from './pipe/pipe.component';
import { CrudFacComponent } from './crud-fac/crud-fac.component';
import { CrudStuComponent } from './crud-stu/crud-stu.component';
import { CrudLaptopComponent } from './crud-laptop/crud-laptop.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'todo', component: TodoComponent},
  {path:'pipe', component: PipeComponent},
  {path:'crudFac', component: CrudFacComponent},
  {path:'crudStu', component: CrudStuComponent},
  {path:'crudLaptop', component: CrudLaptopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
