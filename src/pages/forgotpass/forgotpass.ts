import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the ForgotpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html',
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
export class ForgotpassPage {

  private fform : any;
  private forgotp : any;
  private email : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private fb: FormBuilder, private nativePageTransitions: NativePageTransitions, private api: ApicallfunProvider, private toast: Toast) {
    this.menu = menu;
    this.fform = fb.group({
      email: ['', [Validators.required, isEmailValid('email')]]
    });
  }

  ionViewWillEnter() {
    console.log("Menu Disabled");
    this.menu.swipeEnable(false, 'myMenu');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpassPage');
  }

  async forgotpcall(){

    if (this.fform.valid) {
      console.log(this.email = this.fform.value.email);
      this.forgotp = await this.api.forgotpass(this.fform.value);
      console.log(this.forgotp);
      if(this.forgotp.status == "1"){
        alert(this.forgotp.data[0]);
        this.navCtrl.setRoot("LoginPage");
      }
      else if(this.forgotp.status == "0"){
        alert(this.forgotp.error[0]);
      }
      else{
        console.log("Login Error");
      }
    }
    else if(this.fform.invalid){
      console.log(this.fform)
      if(this.fform.value.email==undefined){
        this.showToast("Email required");
      }
      else{
      }
    }

  }

  showToast(msg){
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      })
  }

  // example of adding a transition when a page/modal closes
  ionViewWillLeave() {
    
    let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 500,
        slowdownfactor: 3,
        slidePixels: 20,
        iosdelay: 100,
        androiddelay: 150,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 60
      };
    
      this.nativePageTransitions.slide(options);
    }



}

function isEmailValid(control) {
  return control => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(control.value) ? null : { invalidEmail: true };
  }
}