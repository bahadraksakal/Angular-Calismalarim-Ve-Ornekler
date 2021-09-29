import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private alertifyService: AlertifyService) { }
  loggedIn:boolean = false;
  login(user:User):boolean {

    if(user.userName=="bahadr" && user.password=="admin"){
      this.loggedIn = true;
      localStorage.setItem("isLogged","true");
      this.alertifyService.success("Giriş Başarılı");
      return true;
    }
    this.alertifyService.error("Kullanıcı Adı Veya Şifre Şifre Hatalı");
      return false;
  }
  isLoggedIn():boolean{
     return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
    this.alertifyService.warning("Çıkış Yapıldı");
  }
}
