import { HomeComponent } from "./components/home/home"; 
import { TiendaComponent } from "./components/tienda/tienda";
import { PerfilComponent } from "./components/perfil/perfil";
import { LoginComponent } from "./components/login/login";




export const appRoutes: any = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "login", component: LoginComponent },



];
export const appComponents: any = [
  HomeComponent,
  TiendaComponent,
  PerfilComponent,
  LoginComponent,
];
