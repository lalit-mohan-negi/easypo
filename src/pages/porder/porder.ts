import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Http, Headers, RequestOptions } from '@angular/http';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the PorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-porder',
  templateUrl: 'porder.html',
})
export class PorderPage {
  private data: any = [];
  private dofDetail: any = {};
  private dofDetails: any = {};
  private order: string = "bill";
  private POid: any;
  private authToken: any;
  private actionactive: any= false;
  private action: any;
  private po_number: any;
  private messagee: any;
  private noticount: any;
  private completed_btn:boolean;
  private canceled_btn:boolean;
  private download:boolean;
  private dofAttachmentsURl = ApicallfunProvider.dofAttachmentsURl;
  profilepicURl = ApicallfunProvider.profilepicURl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private http: Http, private api: ApicallfunProvider, public alertCtrl: AlertController, private iab: InAppBrowser) {    
    this.POid = navParams.get("dofID");
    this.po_number = navParams.get("po_number");
    console.log(this.POid);
  }


  ionViewWillEnter() {
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
      console.log(this.POid);
      this.getpoList(this.POid);
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
    
  }
  else{

  }
  }
}

// Open Attachment
openattachment(file: string){
  
  console.log(file);
  const options: InAppBrowserOptions = {
    zoom: 'no'
  }
  const browser = this.iab.create(this.dofAttachmentsURl+file, '_system', options);

}

// Get Pending DOF Detail Info Api
async getpoList(id) {    
  if (this.authToken != null || this.authToken != undefined) {  
  this.data = await this.api.getpodet(this.authToken, id);
    console.log(this.data);
    if(this.data.status == '1'){
      this.dofDetail = this.data.data[0];
      this.dofDetails = this.data.data[0].po_get[0];
      this.actionactive = false;
      this.dofDetail.profileimg = this.data.profile
      this.po_number = this.dofDetail.po_number;
    console.log("status DEBU" + this.dofDetail.status );

    if(this.dofDetail.status == 2 || this.dofDetail.status == "2"){
      this.completed_btn = true;
      this.canceled_btn = true;
      this.download = true;
    } else if(this.dofDetail.status == 1 || this.dofDetail.status == "1") {
      this.completed_btn = false;
      this.canceled_btn = false;
      this.download = true;
    }else if(this.dofDetail.status == 5 || this.dofDetail.status == "5"){
      this.completed_btn = false;
      this.canceled_btn = false;
      this.download = true;
    }else{
      console.log("none");
    }
      
    }else if(this.data.status == '0'){
      
    }
    else{

    }
  }
  else{
    alert("Don't have Auth key");
  }
}

actionClick(id){
  this.actionactive=true;
}

changeStatusfinal(id, value){
  console.log(id);
  console.log(value);
  this.cangpostatus(id, value);
}

showConfirm(id) {
  let confirm = this.alertCtrl.create({
    title: 'Are you sure?',
    message: 'Do you want to Cancel this Purchased Order?',
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log('Disagree clicked');
        }
      },{
        text: 'Yes',
        handler: () => {
          console.log('Agree clicked');
          this.cancelled(id);
        }
      }
    ]
  });
  confirm.present();
}

cancelled(id){
  this.cangpostatus(id, "1");
}
// Change Status Api
async cangpostatus(id, status) {  
  id = id.toString();  
  if (this.authToken != null || this.authToken != undefined) {  
  this.data = await this.api.cngpostatus(this.authToken, id, status);
    console.log(this.data);
    if(this.data.status == '1'){
      this.getpoList(id);
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
acceptpocon(id){
  this.cangpostatus(id, "0");
}
acceptpo(id) {
  let confirm = this.alertCtrl.create({
    title: 'Are you sure?',
    message: 'Do you want to Accept this Purchased Order?',
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Agree clicked');
          this.acceptpocon(id);
        }
      }
    ]
  });
  confirm.present();
}

notification(){
  this.navCtrl.push("NotificationPage")
}


Canceled(id) {
  let confirm = this.alertCtrl.create({
    title: 'Are you sure?',
    message: 'Do you want to Cancel this Purchased Order?',
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log('Disagree clicked');
        }
      },{
        text: 'Yes',
        handler: () => {
          console.log('Agree clicked');
          this.completed_btn = false;
          this.canceled_btn = false;
          this.download = true;
          this.cangpostatus(id, "1");
        }
      }
    ]
  });
  confirm.present();
}


Completed(id){
  let confirm = this.alertCtrl.create({
    title: 'Are you sure?',
    message: 'Do you want to Accept this Purchased Order?',
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Agree clicked');
          this.completed_btn = false;
          this.canceled_btn = false;
          this.download = true;
          this.cangpostatus(id, "5");
        }
      }
    ]
  });
  confirm.present();
}

}
