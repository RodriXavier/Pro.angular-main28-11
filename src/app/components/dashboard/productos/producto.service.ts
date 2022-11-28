import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../Interfaces/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private url: string;
  private ApiUrl: string;

  constructor(private http: HttpClient) {
    this.url = environment.endpoint;
    this.ApiUrl = 'productos'
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}${this.ApiUrl}`)
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${this.ApiUrl}${id}`);
  }

  addProducto(producto: Producto): Observable<void> {
    return this.http.post<void>(`${this.url}${this.ApiUrl}`, producto);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}${this.ApiUrl}${id}`)
  }

  updateProducto(id: number, producto: Producto): Observable<void> {
    return this.http.put<void>(`${this.url}${this.ApiUrl}${id}`, producto);
  }
}
