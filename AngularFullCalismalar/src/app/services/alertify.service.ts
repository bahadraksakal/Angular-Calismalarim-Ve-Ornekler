import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})  //app.module providers içine yazınca buna gerek kalmaz.  servis her yerden erişilebilir olur
export class AlertifyService {

  constructor() { }
  success(message:string){
    alertify.success(message);
  }
  error(message:string){
    alertify.error(message);
  }
  warning(message:string){
    alertify.warning(message);
  }
}
