import { Component, OnInit } from '@angular/core';
import { UpdeleteproductsService } from './updeleteproducts.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updeleteproducts',
  templateUrl: './updeleteproducts.component.html',
  styleUrls: ['./updeleteproducts.component.scss'],
})

export class UpdeleteproductsComponent implements OnInit {
    queryId: any;
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
        private updeleteproductsService: UpdeleteproductsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.products.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params['id'];
            });
        
        this.GpGetEntityById();
    
    }
    GpDelete() {
        this.updeleteproductsService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updeleteproductsService.GpUpdate(this.products).subscribe((data:any) => {
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
    GpGetEntityById() {
        this.updeleteproductsService.GpGetEntityById(this.queryId).subscribe((data:any) => {
            this.products = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}