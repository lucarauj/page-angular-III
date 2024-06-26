import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detalhes/:id', component: DetalhesComponent },
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
