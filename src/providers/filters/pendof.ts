import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class pendofData {
 
    items: any;

    constructor(public http: Http) {

    } 

    filterItems(searchTerm, penDOFilt){
        return penDOFilt.filter((item) => {
            return (item.bill_to_facility_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.sales_rep.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.dof_no.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.cost.toString().indexOf(searchTerm.toString().toLowerCase()) > -1 || item.sales_id.toString().indexOf(searchTerm.toString().toLowerCase()) > -1);
        });    
 
    }
 
}