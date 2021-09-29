import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFullCalismalar';
  firstname="BAHADR";
  secondname="AKSAKAL";
  // buaraya bizim işlem yapan fonksiyonlarımızda gelicek
  constructor(private accountService: AccountService){}

  isLoggedin():boolean{
     return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }
}
// çift kıvırcık parantezle html üzerinden burdaki title ye erişebiliriz
//export kelimesi public özelliği gösterir
//companent yapısı  ts+html+(varsa)css ten oluşur.
