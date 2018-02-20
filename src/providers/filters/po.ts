import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class poData {
 
    items: any;

    constructor(public http: Http) {

    } 

    filterItems(searchTerm, poFilt){
        console.log(searchTerm)
        console.log(poFilt)
        return poFilt.filter((item) => {
            return (item.purchaser_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||item.stat.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.vendor_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1  || item.po_number.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1   || item.dof_id.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) > -1  || item.cost.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) > -1 );
        });    
 
    }
 
}