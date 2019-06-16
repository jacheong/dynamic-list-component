import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouteResolverService } from './services/route-resolver.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      data: RouteResolverService
    }
  },
  {
    path: 'basic',
    component: HomeComponent,
    resolve: {
      data: RouteResolverService
    }
  },
  {
    path: 'action',
    component: HomeComponent,
    resolve: {
      data: RouteResolverService
    }
  },
  {
    path: 'selection',
    component: HomeComponent,
    resolve: {
      data: RouteResolverService
    }
  },
  {
    path: 'avatar',
    component: HomeComponent,
    resolve: {
      data: RouteResolverService
    }
  },
  {
    path: 'icon',
    component: HomeComponent,
    resolve: {
      data: RouteResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }