import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Http, Headers, RequestOptions } from '@angular/http';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import { pendofData } from '../../providers/filters/pendof';
import { comdofData } from '../../providers/filters/comdof';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {

  private data: any = [];
  private pet: string = "outstanding";
  private penDOF: any = [];
  private penDOFilt: any = [];
  private comDOF: any = [];
  private comDOFilt: any = [];
  private authToken: any;
  private messagee: any;
  private noticount: any;
  profilepicURl = ApicallfunProvider.profilepicURl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private http: Http, private api: ApicallfunProvider, private filterp: pendofData, private filterc: comdofData) {
  }

  ionViewWillEnter() {
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
      this.getpoList();
      this.getcomList();
  }
  ionViewWillLeave() {
    clearTimeout(this.messagee);
  }
  ionViewDidEnter() {
    this.recallagain();
    this.getnotifcount();
  }

// Notifications Count

recallagain() {
  this.messagee = setTimeout(() => {
    this.recallagain();
    this.getnotifcount();
  }, 5000);
}

async getnotifcount(){
  if (this.authToken != null || this.authToken != undefined) { 
  let noticounts = await this.api.getnotificount(this.authToken);
  this.noticount = noticounts.data[0].count
  if(this.noticount == '1'){

  }
  else if(this.noticount == '0'){
    
  }else{

  }
  }
}

// Get Pending DOF Info Api
async getpoList() {    
  if (this.authToken != null || this.authToken != undefined) {  
  this.data = await this.api.getpendof(this.authToken);
    console.log(this.data);
    if(this.data.status == '1'){
      this.penDOF = this.data.data[0];
      this.penDOFilt = this.data.data[0];
    }
    else if(this.data.status == '0'){
      
    }
    else{

    }
  }
  else{
    alert("Don't have Auth key");
  }
}

// Get Complete DOF Info Api
async getcomList() {    
  if (this.authToken != null || this.authToken != undefined) {  
  this.data = await this.api.getcomdof(this.authToken);
    console.log(this.data);
    if(this.data.status == '1'){
      this.comDOF = this.data.data[0];
      this.comDOFilt = this.data.data[0];
    }
    else if(this.data.status == '0'){
      
    }
    else{

    }
  }
  else{
    alert("Don't have Auth key");
  }
}

  orderpage(id, dof_no){
    console.log(dof_no);
    this.navCtrl.push("OrderPage", {
      dofID: id,
      dof_no: dof_no
    });
  }
  getpenItems(item){
    console.log(item);
    this.penDOF = this.filterp.filterItems(item, this.penDOFilt);
    console.log(this.penDOF);
  }
  getcomItems(item){
    console.log(item);
    this.comDOF = this.filterc.filterItems(item, this.comDOFilt);
    console.log(this.comDOF);
  }

  notification(){
    this.navCtrl.push("NotificationPage")
  }

}
