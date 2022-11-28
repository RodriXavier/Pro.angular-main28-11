import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Marca } from '../Interfaces/Marcas';

@Injectable({
  providedIn: 'root'
})
export class MarcaSService {

  private url: string;
  private ApiUrl: string;

  constructor(private http: HttpClient) {
    this.url = environment.endpoint;
    this.ApiUrl = 'Marcas'
  }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.url}${this.ApiUrl}`)
  }

  deleteMarca(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${this.ApiUrl}${id}`);
  }

  AddMarca(producto: Marca): Observable<void> {
    return this.http.post<void>(`${this.url}${this.ApiUrl}`, producto);
  }

  getMarca(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.url}${this.ApiUrl}${id}`)
  }

  updateMarca(id: number, marca: Marca): Observable<void> {
    return this.http.put<void>(`${this.url}${this.ApiUrl}${id}`, marca);
  }
}
