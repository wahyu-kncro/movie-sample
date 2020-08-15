import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeModule } from '../views/home/home.module';
import { MoviesModule } from '../views/movies/movies.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../views/home/home.module').then(mod => HomeModule)
      },
      {
        path: 'movie',
        loadChildren: () => import('../views/movies/movies.module').then(mod => MoviesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
