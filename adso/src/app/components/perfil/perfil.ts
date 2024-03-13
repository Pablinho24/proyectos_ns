import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { ApiService } from './api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Dialogs, Page } from '@nativescript/core'
import { EventData, Span} from '@nativescript/core';
import { dataDeserialize } from '@nativescript/core/utils';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent {
  perfil: any[];
  public constructor(private router: Router, private apiServices: ApiService, private page: Page){
    this.obtenerTodos();
    // Use the component constructor to inject providers.

  }

  public obtenerTodos(){
    this.apiServices.getPerfil().subscribe((data:any[])=>{
      console.log(data)
      this.perfil = data;
    });
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}
export function onLinkTap(args:EventData){
  const span = args.object as Span;
  alert("Alerta")
}
