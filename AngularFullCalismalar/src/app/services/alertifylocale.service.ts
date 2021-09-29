import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable() // sadece ınjectable ve modules ın iindeki providerse yazmadık şuan bu local bir servis
//local servisler her bir component için ayrı ayrı oluşturulur mesela kullanıcaya özel bir data tutuluyorsa
//bu data her bir class ta ayı durmalıdır o zaman biz servisimizi lokal yapaarız
//global servisle  runtime da bir kere oluşur ve hep aynı nesne çalışır.
//bu yapı dependeny injecition dur. sistem oto olarak önce locale ye bakar eğer lokalde tanımlı ise  yap
// const onu yeniden oluşturulur
// eğer localede servis yoksa  o zaman global tanımlanmıştır ve  sistem oto olarak var olan servisi kullanır.
export class AlertifylocaleService {

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
