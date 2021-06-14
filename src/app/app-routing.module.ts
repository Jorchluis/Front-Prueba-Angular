import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //{ path: '', redirectTo:'/login',pathMatch:'full'},
  { path: '', redirectTo:'/inicio',pathMatch:'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'add', component: AgregarComponent},
  { path: 'edit/:id', component: ModificarComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
