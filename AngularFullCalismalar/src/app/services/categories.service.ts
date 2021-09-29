import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from '../category/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  path: string="http://localhost:3000/categoryies";
  getCategoryies(id?:number):Observable<Category[]>{
    //alert(categoryId);
    return this.http.get<Category[]>(id? this.path+"?id="+id:this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err:HttpErrorResponse){
    let errormessage:string = "";
    if(err.error instanceof ErrorEvent){
        errormessage="Bir hata oluştu:  "+err.error.message;
     }else{
      errormessage="Sistemsel bir hata oluştu";
     }
     return throwError(errormessage);
  }
}
