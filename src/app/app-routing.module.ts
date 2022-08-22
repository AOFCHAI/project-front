import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { HomeComponent } from './modules/home/home/home.component';
import { UserHomeComponent } from './modules/user/user-home/user-home.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'home', component: AdminHomeComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'user/home', component: UserHomeComponent },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
