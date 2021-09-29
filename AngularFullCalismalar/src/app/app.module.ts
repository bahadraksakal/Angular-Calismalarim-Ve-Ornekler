import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductsbodyComponent } from './productsbody/productsbody.component';
import { ProductFilterPipe } from './productsbody/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { ProductAddForms1Component } from './productsbody/product-add-forms1/product-add-forms1.component';
import { ProductAddForm2Component } from './productsbody/product-add-form2/product-add-form2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';




//decator yani bir nevi meta-data kullanılır ve alttaki class için geçerli olur
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductsbodyComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForm2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

    //yeni modüller kullanmak istediğimiz zaman buaraya ekleyeceğiz
    //bu modüller yukarıda iki modül gibi angular ın kendi modülü de olmayabilir.
  ],
  providers: [AlertifyService], // buraya eklediğimiz service ler global sevislerdir
  bootstrap: [AppComponent] // teknoloji olan boostrap ile alaksı yoktur.
  //bulunduğumuz modülün başlangıç rootunu buraya yazarız.
  // bu uygulama bu companent ten başlar anlamına gelir.
})
//exportable-export dışardan erişilebilir demek. Java için public e karşılık gelir. bir class e erişebilmek için export etmeliyiz.
export class AppModule { } // yukarıda metadatası verilen modulde aslında bir class tır gördüğümüz üzere.
//uygulamanın ana modülü burası
//biz bir component tanımladığımızda o componentin burada olması gerekir.
//Angular modülü - modül componenti || sevisi tanır.
// declarations: [  AppComponent,  ProductComponent],    bu kısımda az önce oluşturudğum companenti görebiliyorum.
//fakat ProductComponent yukarıda yazabilmek için önce onu import etmemiz gerekiyor
//import { ProductComponent } from './product/product.component';
//bir doyada birden fazla class olabilir (tercih edilmez).
//'./product/product.component' bu dosyadan , -->  { ProductComponent } bu class ı import et.
