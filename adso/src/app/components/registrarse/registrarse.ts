import { Component, OnInit} from '@angular/core'
import { Router } from "@angular/router"; 
import { EventData, Span } from '@nativescript/core';




@Component({
  selector: 'registrarse',
  templateUrl: './registrarse.html',
})
export class RegistrarseComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}
export function onLinkTap(args:EventData) {
    const span = args.object as Span;
    alert("Alerta")
}
