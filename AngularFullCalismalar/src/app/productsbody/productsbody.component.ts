import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from '../services/alertify.service';
//import {HttpClient} from '@angular/common/http'; // bu bir services tir. bir instance oluşturmamız lazım
import {DbProductService} from '../services/db-product.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-productsbody', // bu tag i html nin içinde kullanırsam prodocut companentim html sayfasına basılıcak
  templateUrl: './productsbody.component.html', // template olarak ilgili html yi gösterdik
  styleUrls: ['./productsbody.component.css'], //array notasyonu ile yazılır araya virgül atıp birden fazla eklenebilir.
  providers: [DbProductService]
})
export class ProductsbodyComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private dbProductService: DbProductService,
    private activetedRoute: ActivatedRoute,) {

  }
  //private http:HttpClient,
  title = 'Ürün Listesi';
  filterTempText:string="";
  // products: Product[]= [{ id: 1, name: "Laptop", price: 12000, categoryId: 1, description: "Asus Zenbook1", imageURL: "https://media.istockphoto.com/photos/man-using-laptop-blank-screen-at-home-picture-id1302084694?s=612x612" },
  // { id: 2, name: "Mouse", price: 860, categoryId: 2, description: "Razer Mouse1", imageURL:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80" },
  // { id: 1, name: "Laptop", price: 12000, categoryId: 1, description: "Asus Zenbook2", imageURL:"https://media.istockphoto.com/photos/man-using-laptop-blank-screen-at-home-picture-id1302084694?s=612x612" },
  // { id: 2, name: "Mouse", price: 860, categoryId: 2, description: "Razer Mouse2", imageURL:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80cz" },
  // { id: 1, name: "Laptop", price: 12000, categoryId: 1, description: "Asus Zenbook3", imageURL:"https://media.istockphoto.com/photos/man-using-laptop-blank-screen-at-home-picture-id1302084694?s=612x612" },
  // ];
  products!:Product[];
  path: string="http://localhost:3000/products";
  ngOnInit(): void {
    //program ilk açıldığında on init çalışır ilk açılışta ürünleri listelemek için kullanacağım
    this.activetedRoute.params.subscribe(params =>{
      this.dbProductService.getproducts(params["categoryId"]).subscribe(data =>{
        this.products=data;
      });
    })

  }
  addToCard(product:Product){
    this.alertifyService.success(product.name+" added");
  }
  productsLength(products:Product[]):number{
    if(products){
      return products.length;
    }
    return 0;
  }
}
