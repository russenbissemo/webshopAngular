import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpCLient: HttpClient ) { }

  getAllProducts(limit = '12' , sort = 'desc' , category?: string): Observable<Array<Product>> {

    return this.httpCLient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${category ? '/category/' + category : ''}?sort=${sort}&limit=${limit}`
    );

  }
  getAllcategories(): Observable<Array<string>>{
    return this.httpCLient.get<Array<string>>(`${STORE_BASE_URL}/products/categories`)
  }
}
