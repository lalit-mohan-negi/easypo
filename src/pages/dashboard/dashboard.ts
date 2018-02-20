import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Http, Headers, RequestOptions } from '@angular/http';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import { Storage } from '@ionic/storage';
import { SlicePipe, DatePipe } from '@angular/common';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  private data: any = {};
  private pocount: any = {};
  private recentpo: any = [];
  private userInfo: any;
  private authToken: any;
  private currentDate: any;
  private messagee: any;
  private noticount: any;
  placeholder = './assets/easypo/Ripple.svg';
  profilepicURl = ApicallfunProvider.profilepicURl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private http: Http, private api: ApicallfunProvider, public datepipe: DatePipe) {  
    if(localStorage.getItem('gotnotification')){
      this.navCtrl.push("NotificationPage");
    }
  }

  ionViewWillEnter() {
    console.log(this.profilepicURl = this.profilepicURl);
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
      this.getUser();
      this.getPOcount();
      this.getRecentPO();
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
  console.log(this.noticount = noticounts.data[0].count);
  if(this.noticount == '1'){

  }
  else if(this.noticount == '0'){
    
  }
  else{

  }
  }
}

// User Info Api
  async getUser() {  
    if (this.authToken != null || this.authToken != undefined) { 
    this.data = this.authToken;  
    this.userInfo = await this.api.getusers(this.data);
      console.log(this.userInfo);
      if(this.userInfo.status == '1'){
        this.data = this.userInfo.data[0];
        this.data.profile_img = this.data.user_meta.profile_img;
        console.log(this.data.profile_img)
        console.log(JSON.parse(this.data.permissions))
        localStorage.setItem('easypoUser', JSON.stringify(this.data));
      }
      else if(this.userInfo.status == '0'){
        
      }
      else{

      }
    }
    else{
      console.log("Don't have Auth key");
    }
  }
// PO Count Api
  async getPOcount() {    
    if (this.authToken != null || this.authToken != undefined) { 
    this.data = this.authToken;  
    let POcount = await this.api.pocounts(this.data);
      console.log(POcount);
      if(POcount.status == '1'){
        this.pocount = POcount.data[0];
      }
      else if(POcount.status == '0'){
        
      }
      else{
        
      }
    }
    else{
      console.log("Don't have Auth key");
    }
  }
  // Recent PO Api
    async getRecentPO() {    
      if (this.authToken != null || this.authToken != undefined) { 
      this.data = this.authToken;  
      let recentPO = await this.api.recentpo(this.data);
        console.log(recentPO);
        if(recentPO.status == '1'){
          this.recentpo = recentPO.data[0];   
        }
        else if(recentPO.status == '0'){
          
        }
        else{
          
        }
      }
      else{
        console.log("Don't have Auth key");
      }
    }

  notification(){
    this.navCtrl.push("NotificationPage");
  }

  onLoaded(isFallback: boolean) {
    console.log(isFallback);
  }

// Open PO Api

orderpage(id, po_number){
  console.log(id);
  this.navCtrl.push("PorderPage", {
    dofID: id, 
    po_number: po_number
  });
}


}
