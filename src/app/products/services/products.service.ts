import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsModel} from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly url = '/api/product';

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<ProductsModel[]> {
    return this.httpClient.get<ProductsModel[]>(`${this.url}/`);
  }

  get(id: number): Observable<ProductsModel> {
    return this.httpClient.get<ProductsModel>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }

  deleteSelected(ids): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/delete-all`, {
      products: ids
    });
  }

  create(prod: ProductsModel): Observable<ProductsModel> {
    return this.httpClient.post<ProductsModel>(`${this.url}/`, prod);
  }
}
