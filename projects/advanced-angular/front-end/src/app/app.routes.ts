import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tasks } from './tasks/tasks';
import { AddTask } from './add-task/add-task';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'tasks', component: Tasks },
  { path: 'add-task', component: AddTask },
];
