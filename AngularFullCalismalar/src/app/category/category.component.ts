import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import {HttpClient} from '@angular/common/http';
import { DbProductService } from '../services/db-product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [DbProductService]
})
export class CategoryComponent implements OnInit {

  constructor(private http: HttpClient, private dbProductService: DbProductService) { }
  title="Kategori Listesi";
  // categories:Category[]=[
  //   {id:1,name:"Elektronik"},
  //   {id:2,name:"Bilgisayar"},
  //   {id:3,name:"İletişim"},
  //   {id:4,name:"Müzik"},
  //   {id:5,name:"Ev Eşyaları"},
  //   {id:6,name:"Evcil Hayvan Yemleri"},
  //   {id:7,name:"Medic"},
  // ];
  categories!:Category[]; // hiçbir zaman kullanılmayabilir yani var olmayabilir bunu ünlem ile gösteririz.
  path: string="http://localhost:3000/categoryies";

  ngOnInit(): void {
    //program ilk açıldığında on init çalışır ilk açılışta ürünleri listelemek için kullanacağım
    // this.http.get<Category[]>("http://localhost:3000/products").subscribe(data => {
    //     this.categories=data;
    // });
    let observe:Observable<Category[]>=this.dbProductService.getPlus<Category>(this.path);
    observe.subscribe(data=> {
      this.categories=data;
    });

  }

}
