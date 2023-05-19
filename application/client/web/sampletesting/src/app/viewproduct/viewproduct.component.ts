import { Component, OnInit } from '@angular/core';
import { ViewproductService } from './viewproduct.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss'],
})

export class ViewproductComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Price', field: 'price'  },{ headerName: 'Pros', field: 'pros'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number = 0;

    constructor (
        private viewproductService: ViewproductService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.products.created_by = sessionStorage.getItem('email') || ''; 
        
        
        this.GpGetAllValues();
    
    }
    GpGetAllValues() {
        this.viewproductService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updeleteproducts'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}