import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the ChangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepass',
  templateUrl: 'changepass.html',
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity:0}), //style only for transition transition (after transiton it removes)
        animate(500, style({opacity:1})) // the new state of the transition(after transiton it removes)
      ]),
      transition('* => void', [
        animate(500, style({opacity:0})) // the new state of the transition(after transiton it removes)
      ])
    ])
  ]
})
export class ChangepassPage {

  private auth : any;
  private cform : any;
  private changed : any;
  private authToken: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private fb: FormBuilder, private nativePageTransitions: NativePageTransitions, private api: ApicallfunProvider, private storage:Storage, private toast: Toast) {

    this.cform = fb.group({
        "opassword": new FormControl("", Validators.required),
        "password": new FormControl("", Validators.required),
        "cpassword": new FormControl("", Validators.required),
      }, {validator: this.matchingPasswords('password', 'cpassword')
    });

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ChangepassPage');
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
  }

  showToast(msg){
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      })
  }

  async changepcall(){
    console.log(this.cform);

    if (this.authToken != null || this.authToken != undefined) { 
      this.auth = this.authToken;  
        if (this.cform.valid) {
          this.changed = await this.api.changepass(this.auth, this.cform.value.password, this.cform.value.opassword, this.cform.value.cpassword );
          console.log(this.changed);
          if(this.changed.status == "1"){
            alert(this.changed.data[0]);
            this.cform.reset()
          }
          else if(this.changed.status == "0"){
            alert("Please enter valid old password.");
          }
          else{
            alert("Password Change Error");
          }
        }
        else if(this.cform.invalid){
          console.log(this.cform)
          if(this.cform.value.password==undefined){
            this.showToast("Password required");
          }
          else if(this.cform.value.opassword==undefined){
            this.showToast("Old Password required");
          }
          else if(this.cform.value.cpassword==undefined){
            this.showToast("Confirm Password required");
          }
          else if(this.cform.value.password.length<6){
            this.showToast("Enter at least 6 characters");
          }
          else{
          }
        }
      }
  }

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value || passwordConfirmationInput.value !== passwordInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
    }
  }


}
