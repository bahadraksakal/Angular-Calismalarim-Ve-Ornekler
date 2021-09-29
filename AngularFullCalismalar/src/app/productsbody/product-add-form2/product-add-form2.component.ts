import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/category/Category';
import { Product } from '../product';
import { DbProductService } from 'src/app/services/db-product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css'],
  providers: [CategoriesService,DbProductService]
})
export class ProductAddForm2Component implements OnInit {

  constructor(private formBuilder: FormBuilder,private categoryService: CategoriesService,private dbproductService: DbProductService,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategoryies().subscribe(data =>{
      this.categories= data;
    })
   }
  categories: Category[]=[]; // illa ! ile bu attriubute olmaya bilir dememe gerek yok
  productAddForm!: FormGroup;
  model!:Product;
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      imageURL: ["", Validators.required],
      description: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  add(){
    if(this.productAddForm.valid){
        this.model=Object.assign({},this.productAddForm.value)
        this.dbproductService.addProduct(this.model).subscribe(data => {
          this.alertifyService.success(data.name + " başarıyla Eklendi.")
        });
    }else{
       this.alertifyService.error("form da hata var :"+this.model.name+" :"+this.model.price+" :"+this.model.imageURL+" :"+this.model.description+" :"+this.model.categoryId+" :"+this.model.id);
    }
  }
}
