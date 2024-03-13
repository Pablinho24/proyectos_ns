import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://10.171.68.198:8000/Oasis/api/1.0';


  constructor(private http: HttpClient) { }

  getPerfil(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/perfil`);
  }

  getPerfilById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/perfil/${id}/`);
  }

  addPerfil(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/perfil`, post);
  }

  updatePerfil(id: number, post: any): Observable<any> {
    console.log(`datos: ${post.nombre_cat} - ${post.desc}`)
    return this.http.put<any>(`${this.apiUrl}/perfil/${id}/`, post);
  }

  deletePerfil(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/perfil/${id}/`);
  }}