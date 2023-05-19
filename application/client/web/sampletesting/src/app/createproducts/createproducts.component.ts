import { Component, OnInit } from '@angular/core';
import { CreateproductsService } from './createproducts.service';


@Component({
  selector: 'app-createproducts',
  templateUrl: './createproducts.component.html',
  styleUrls: ['./createproducts.component.scss'],
})

export class CreateproductsComponent implements OnInit {
    public products:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        qunatity: '',
        price: '',
        offer_price: '',
        description: '',
        prod_images: '',
        imagess: '',
        pros: '',
    }

    constructor (
        private createproductsService: CreateproductsService,
    ) { }

    ngOnInit() {
        this.products.created_by = sessionStorage.getItem('email') || ''; 
        
        
    
    }
    GpCreate() {
        this.createproductsService.GpCreate(this.products).subscribe((data:any) => {
            this.products.name = ''
 	 	this.products.qunatity = ''
 	 	this.products.price = ''
 	 	this.products.offer_price = ''
 	 	this.products.description = ''
 	 	this.products.prod_images = ''
 	 	this.products.imagess = ''
 	 	this.products.pros = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}