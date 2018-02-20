import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Http, Headers, RequestOptions } from '@angular/http';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import { poData } from '../../providers/filters/po';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the OutstandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outstanding',
  templateUrl: 'outstanding.html',
})
export class OutstandingPage {
  
  private poList: any = [];
  private poListfiltr: any = [];
  private authToken: any;
  private data: any;
  private messagee: any;
  private noticount: any;
  profilepicURl = ApicallfunProvider.profilepicURl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private http: Http, private api: ApicallfunProvider, private filterp: poData) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad OutstandingPage');
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
      this.getpoList();
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

// Get All PO Info Api
async getpoList() {    
  if (this.authToken != null || this.authToken != undefined) {  
  this.data = await this.api.getallpo(this.authToken);
    console.log(this.data);
    if(this.data.status == '1'){
      this.poList = this.data.data[0];
      this.poListfiltr = this.data.data[0];
      for(var x=0; x<this.poList.length; x++){
        new Date(this.poList[x].delivery_date).getTime() 
        if(new Date().getTime() > new Date(this.poList[x].delivery_date).getTime()){
          this.poList[x].outdated = true;
        }
        if(this.poList[x].status==0){
          this.poList[x].stat = "Open";
        }
        else if(this.poList[x].status==1){
          this.poList[x].stat = "CANCELLED";
        }
        else if(this.poList[x].status==2){
          this.poList[x].stat = "PENDING";
        }
        else if(this.poList[x].status==3){
          this.poList[x].stat = "PARTIAL";
        }
        else if(this.poList[x].status==4){
          this.poList[x].stat = "PAID";
        }
        else if(this.poList[x].status==5){
          this.poList[x].stat = "COMPLETED";
        }
      }
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

orderpage(id, po_number){
  console.log(id);
  this.navCtrl.push("PorderPage", {
    dofID: id, 
    po_number: po_number
  });
}
getItems(item){
  console.log(item);
  this.poList = this.filterp.filterItems(item, this.poListfiltr);
  console.log(this.poList);
}

notification(){
  this.navCtrl.push("NotificationPage")
}

}
