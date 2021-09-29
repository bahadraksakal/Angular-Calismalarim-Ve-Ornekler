import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddForms1Component } from './productsbody/product-add-forms1/product-add-forms1.component';
import { ProductsbodyComponent } from './productsbody/productsbody.component';
import { ProductAddForm2Component } from './productsbody/product-add-form2/product-add-form2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path: 'products',component: ProductsbodyComponent}, // products yazarsm urlde .. componentini getir
  {path: '',redirectTo: 'products',pathMatch:'full'}, // bişey yazsam url ye products yazmışım gibi davran
  //pathMatch:'full'  biz url ye ne yazarsak yazalım en son default olarak boş url döner , path mach ile sadece boş yazıyı belirttik
  {path:'products/category/:categoryId',component: ProductsbodyComponent},
  {path: 'product-add-1',component: ProductAddForms1Component,canActivate:[LoginGuard]},
  {path: 'product-add-2',component: ProductAddForm2Component,canActivate:[LoginGuard]},
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
