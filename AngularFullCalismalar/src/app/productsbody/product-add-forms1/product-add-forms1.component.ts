import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category/Category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { DbProductService } from 'src/app/services/db-product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoriesService,DbProductService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private activetedRoute: ActivatedRoute,
    private dbproductService: DbProductService,
    private alertifyService: AlertifyService) {}

  model: Product = new Product();
  categories!: Category[];
  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      this.categoriesService.getCategoryies(params["id"]).subscribe(data => {
        this.categories = data;
      });
    })
  }
  add(form: NgForm) {
    this.dbproductService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(data.name + " başarıyla Eklendi.")
    });
  }

}
