import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile' , component:ProfileComponent, canActivate:[AngularFireAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
