import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../productsbody/product';
import { tap, catchError } from 'rxjs/operators';

@Injectable(
  // {providedIn: 'root'} global olmasın çünkü sayfa yenilendiğinde yeni ürün eklenmiş olabilir
)
export class DbProductService {

  constructor(private http: HttpClient) { }

  getPlus<T>(path: string): Observable<T[]> {
    return this.http.get<T[]>(path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));
  }
  path: string = "http://localhost:3000/products";
  getproducts(categoryId: number): Observable<Product[]> {
    //alert(categoryId);
    return this.http.get<Product[]>(categoryId ? this.path + "?categoryId=" + categoryId : this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errormessage: string = "";
    if (err.error instanceof ErrorEvent) {
      errormessage = "Bir hata oluştu:  " + err.error.message;
    } else {
      errormessage = "Sistemsel bir hata oluştu";
    }
    return throwError(errormessage);
  }
  addProduct(product: Product): Observable<Product> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOption).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  
}
