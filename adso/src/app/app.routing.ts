import { HomeComponent } from "./components/home/home"; 
import { TiendaComponent } from "./components/tienda/tienda";
import { PerfilComponent } from "./components/perfil/perfil";
import { RegistrarseComponent } from "./components/registrarse/registrarse";
import { LoginComponent } from "./components/login/login";
import { EventosComponent } from "./components/eventos/eventos";





export const appRoutes: any = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "registrarse", component: RegistrarseComponent},
  { path: "login", component: LoginComponent},
  { path: "eventos", component: EventosComponent},


];
export const appComponents: any = [
  HomeComponent,
  TiendaComponent,
  PerfilComponent,
  RegistrarseComponent,
  LoginComponent,
  EventosComponent,
  
];
