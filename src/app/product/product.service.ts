import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl) { }

  getProducts(): Observable<Product[]> {
    // if(seoUrl){
    //   return this.http.get<Product[]>(this.apiUrl+"/products/"+seoUrl);
    // }else{
    //   return this.http.get<Product[]>(this.apiUrl+"/products");
    // }
    return this.http.get<Product[]>(this.apiUrl+"/products");
      
  }

}
