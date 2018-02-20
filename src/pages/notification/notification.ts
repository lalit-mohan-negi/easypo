import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import {Storage} from '@ionic/storage';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition('void <=> *', animate('150ms ease-in'))
    ])
  ]
})
export class NotificationPage {

  private data: any;
  private authToken: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions, private fb: FormBuilder, private http: Http, private api: ApicallfunProvider, private storage:Storage, private toast: Toast) {
  }

  ionViewWillEnter() {
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
      this.getnotifications(this.authToken);
  }

  ionViewDidEnter(){
    localStorage.removeItem('gotnotification');
  }
  
    async getnotifications(params) {

      if (this.authToken != null || this.authToken != undefined) { 
      let notifications = await this.api.getnotifications(params);
      console.log(this.data = notifications.data[0]);
      }

    }
// Go to notification Page
    detailpg(id, type, number){
      this.readnotifi(id, 1);
      console.log(id);
      console.log(type);
      if(type=='po'){
        this.navCtrl.push("PorderPage", {
          dofID: number, 
          // po_number: number
        });
      }
      else if(type=='dof'){
        this.navCtrl.push("OrderPage", {
          dofID: number,
          // dof_no: number
        });
      }
    }
// Change Read Status
    async readnotifi(id, status){
      if (this.authToken != null || this.authToken != undefined) { 
      let notificationsrd = await this.api.chngnotificount(this.authToken, id, status);
      console.log(notificationsrd);
      }
    }
}
