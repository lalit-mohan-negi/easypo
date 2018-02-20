import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApicallProvider } from '../../providers/api/api';

@Injectable()
export class ApicallfunProvider {
    static profilepicURl = "http://173.255.247.199/eazypo/public/uploads/images/";
    static dofAttachmentsURl = "http://173.255.247.199/eazypo/public/uploads/attachment/";
    static profileupURL = "http://173.255.247.199/eazypo/public/api/profile-update";
    static dofattachmentURL = "http://173.255.247.199/eazypo/public/api/dof-attachment";



    private loginURL = ApicallProvider.loginURL;
    private forgotpassURL = ApicallProvider.forgotpassURL;
    private getusersURL = ApicallProvider.getusersURL;
    private createdofidsURL = ApicallProvider.createdofidsURL;
    private getotherusersURL = ApicallProvider.getotherusersURL;
    private pocountsURL = ApicallProvider.pocountsURL;
    private recentpoURL = ApicallProvider.recentpoURL;
    private getallpoURL = ApicallProvider.getallpoURL;
    private dofpendingURL = ApicallProvider.dofpendingURL;
    private dofcompleteURL = ApicallProvider.dofcompleteURL;
    private podetailURL = ApicallProvider.podetailURL;
    private dofdetailURL = ApicallProvider.dofdetailURL;
    private chaproURL = ApicallProvider.chaproURL;
    private changepassURL = ApicallProvider.changepassURL;
    private cngpostatusURL = ApicallProvider.cngpostatusURL;
    private updatedofURL = ApicallProvider.updatedofURL;
    private getnotificatonsURL = ApicallProvider.getnotificatonsURL;
    private getnotificountURL = ApicallProvider.getnotificountURL;
    private updatenotificationsreadURL = ApicallProvider.updatenotificationsreadURL;
    private getclientcompanynameURL = ApicallProvider.getclientcompanynameURL;

    constructor(private http: Http){
    }

    async login(param): Promise<any> {
        console.log("Param " + JSON.stringify(param));
        let body = param;
        const response = await this.http.post(this.loginURL, body).toPromise();
        return response.json();
    }
    async forgotpass(param): Promise<any> {
        let body = param;
        const response = await this.http.post(this.forgotpassURL, body).toPromise();
        return response.json();
    }
    async createdofids(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.createdofidsURL, postParams, options).toPromise();
        return response.json();
    }
    async getusers(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.getusersURL, postParams, options).toPromise();
        return response.json();
    }
    async getotherusers(param, id): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.getotherusersURL + '/' + id, postParams, options).toPromise();
        return response.json();
    }
    async getclientcompany(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.getclientcompanynameURL, postParams, options).toPromise();
        return response.json();
    }
    async pocounts(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.pocountsURL, postParams, options).toPromise();
        return response.json();
    }
    async recentpo(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.recentpoURL, postParams, options).toPromise();
        return response.json();
    }
    async getallpo(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.getallpoURL, postParams, options).toPromise();
        return response.json();
    }
    async getpodet(param, id): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.podetailURL + '/' + id, postParams, options).toPromise();
        return response.json();
    }
    async getcomdof(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.dofcompleteURL, postParams, options).toPromise();
        return response.json();
    }
    async getpendof(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.dofpendingURL, postParams, options).toPromise();
        return response.json();
    }
    async getnotificount(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.getnotificountURL, postParams, options).toPromise();
        return response.json();
    }
    async chngnotificount(param, id, status): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
            id: id,
            status: status
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.updatenotificationsreadURL, postParams, options).toPromise();
        return response.json();
    }
    async getnotifications(param): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.getnotificatonsURL, postParams, options).toPromise();
        return response.json();
    }
    async getdofdet(param, id): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.dofdetailURL + '/' + id, postParams, options).toPromise();
        return response.json();
    }
    async updateprof(param, data): Promise<any> {
        console.log(data);
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            country: data.country,
            zipcode: data.zipcode,
            email_notify: data.email_notify,
            image: data.profile_img
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.chaproURL, postParams, options).toPromise();
        return response.json();
    }
    async changepass(param, pass, opass, cpass): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
            old_password: opass,
            password: pass,
            confirm_password: cpass
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.changepassURL, postParams, options).toPromise();
        return response.json();
    }
    async cngpostatus(param, po_id, status): Promise<any> {
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        let postParams = {
            Authorization: 'Bearer ' + param,
            po_id: po_id,
            status: status
        }
        const options = new RequestOptions({ headers: headers });
        const response = await this.http.post(this.cngpostatusURL, postParams, options).toPromise();
        return response.json();
    }
    async updatedof(param, data, productdof): Promise<any> {
        // console.log(data = productdof.value);
        console.log(data);
        if (data.restock_needed == true) {
            data.restock_needed = 1
        }
        else {
            data.restock_needed = 0
        }
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        const options = new RequestOptions({ headers: headers });
        let postParams = {
            Authorization: 'Bearer ' + param,
            id: data.id,
            dof_no: data.dof_no,
            client_id: data.client_id,
            vendor_id: data.vendor_id,
            sales_id: data.sales_id,
            status: data.status,
            created_at: data.created_at,
            updated_at: data.updated_at,
            vendor_company: data.vendor_company,
            vendor_address: data.vendor_address,
            vendor_city: data.vendor_city,
            vendor_state: data.vendor_state,
            vendor_zipcode: data.vendor_zipcode,
            vendor_phone: data.vendor_phone,
            vendor_fax: data.vendor_fax,
            vendor_email: data.vendor_email,
            bill_to_facility_contact_name: data.bill_to_facility_name,
            bill_to_select_facility__name: data.bill_to_select_facility__name,
            bill_to_facility_name: data.bill_to_facility_name,
            bill_to_email: data.bill_to_email,
            bill_to_phone: data.bill_to_phone,
            bill_to_address: data.bill_to_address,
            bill_to_state: data.bill_to_state,
            bill_to_zipcode: data.bill_to_zipcode,
            ship_to_attention: data.ship_to_attention,
            ship_to_phone: data.ship_to_phone,
            ship_to_address: data.ship_to_address,
            ship_to_city: data.ship_to_city,
            ship_to_state: data.ship_to_state,
            ship_to_zipcode: data.ship_to_zipcode,
            sales_agency: data.sales_agency,
            sales_rep: data.sales_rep,
            sales_territory: data.sales_territory,
            sales_phone: data.sales_phone,
            restock_needed: data.restock_needed,
            restock_attention: data.restock_attention,
            restock_address: data.restock_address,
            restock_city: data.restock_city,
            restock_state: data.restock_state,
            restock_zip: data.restock_zip,
            patient_identifier: data.patient_identifier,
            surgeon: data.surgeon,
            surgery_date: data.surgery_date,
            cost: data.cost,
            processing_fee: data.processing_fee,
            shipping: data.shipping,
            note: data.notes,
            attachment: data.attachment,
            product_dof: data.product_dof
        }
        console.log(postParams);
        const response = await this.http.post(this.updatedofURL, postParams, options).toPromise();
        return response.json();
    }



    async updatedofSecond(param, data, productdof, s_id, v_id): Promise<any> {
        console.log(data = productdof.value);
        console.log(data);
        if (data.restock_needed == true) {
            data.restock_needed = 1
        }
        else {
            data.restock_needed = 0
        }
        const headers = new Headers();
        headers.append("Authorization", 'Bearer ' + param);
        headers.append('Accept', 'application/json');
        const options = new RequestOptions({ headers: headers });
        let postParams = {
            Authorization: 'Bearer ' + param,
            // id: data.id,
            dof_no: data.dof_no,
            client_id: data.client_id,
            vendor_id: v_id,
            sales_id: s_id,
            status: data.status,
            created_at: data.created_at,
            updated_at: data.updated_at,
            vendor_company: data.vendor_company,
            vendor_address: data.vendor_address,
            vendor_city: data.vendor_city,
            vendor_state: data.vendor_state,
            vendor_zipcode: data.vendor_zipcode,
            vendor_phone: data.vendor_phone,
            vendor_fax: data.vendor_fax,
            vendor_email: data.vendor_email,
            bill_to_facility_contact_name: data.bill_to_facility_name,
            bill_to_select_facility__name: data.bill_to_select_facility__name,
            bill_to_facility_name: data.bill_to_facility_name,
            bill_to_email: data.bill_to_email,
            bill_to_phone: data.bill_to_phone,
            bill_to_address: data.bill_to_address,
            bill_to_state: data.bill_to_state,
            bill_to_zipcode: data.bill_to_zipcode,
            ship_to_attention: data.ship_to_attention,
            ship_to_phone: data.ship_to_phone,
            ship_to_address: data.ship_to_address,
            ship_to_city: data.ship_to_city,
            ship_to_state: data.ship_to_state,
            ship_to_zipcode: data.ship_to_zipcode,
            sales_agency: data.sales_agency,
            sales_rep: data.sales_rep,
            sales_territory: data.sales_territory,
            sales_phone: data.sales_phone,
            restock_needed: data.restock_needed,
            restock_attention: data.restock_attention,
            restock_address: data.restock_address,
            restock_city: data.restock_city,
            restock_state: data.restock_state,
            restock_zip: data.restock_zip,
            patient_identifier: data.patient_identifier,
            surgeon: data.surgeons_one,
            surgery_date: data.surgery_date,
            cost: data.cost,
            processing_fee: data.processing_fee,
            shipping: data.shipping,
            note: data.notess_one,
            attachment: data.attachment,
            product_dof: data.product_dof
        }
        console.log(postParams);
        const response = await this.http.post(this.updatedofURL, postParams, options).toPromise();
        return response.json();
    }

}