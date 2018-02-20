import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApicallProvider {
  static baseURl="http://173.255.247.199/eazypo/public/api/";


  static createdofidsURL= ApicallProvider.baseURl+'get-dof-user-id';
  static loginURL = ApicallProvider.baseURl+'login';
  static forgotpassURL = ApicallProvider.baseURl+'forgot-password-email';
  static pocountsURL = ApicallProvider.baseURl+'po_counts';
  static getusersURL = ApicallProvider.baseURl+'get_users';
  static getotherusersURL = ApicallProvider.baseURl+'get_users-by-id';
  static recentpoURL = ApicallProvider.baseURl+'recent_po';
  static getallpoURL = ApicallProvider.baseURl+'get-po-all';
  static dofpendingURL = ApicallProvider.baseURl+'dof_pending';
  static dofcompleteURL = ApicallProvider.baseURl+'dof_complete';
  static podetailURL = ApicallProvider.baseURl+'view-po';
  static dofdetailURL = ApicallProvider.baseURl+'view-dof';
  static chaproURL = ApicallProvider.baseURl+'change-setting';
  static changepassURL = ApicallProvider.baseURl+'change-password';
  static cngpostatusURL = ApicallProvider.baseURl+'change-po-status';
  static updatedofURL = ApicallProvider.baseURl+'update-dof';
  static getnotificatonsURL = ApicallProvider.baseURl+'get-notificatons';
  static getnotificountURL = ApicallProvider.baseURl+'count-notifications';
  static updatenotificationsreadURL = ApicallProvider.baseURl+'update-notifications-read';
  static getclientcompanynameURL = ApicallProvider.baseURl+'get-client-company-name';
}
