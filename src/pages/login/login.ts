import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import {Storage} from '@ionic/storage';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
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

export class LoginPage implements OnInit{

  private form : any;
  submitAttempt: boolean = false;
  private loading: boolean = false;
  private logint: any;
  private email: any;
  private password: any;
  profile:any = {};

  ionViewWillEnter() {
    this.menu.swipeEnable(false, 'myMenu');
  }
  
  ionViewDidEnter(){
    console.log("Menu Disabled");
    this.profile = {}; 
  }
  ionViewDidLoad(){ 
    if(localStorage.getItem('authtoken') == null||localStorage.getItem('authtoken') == undefined){
      
    }
    else{
      this.navCtrl.setRoot("DashboardPage");
    }
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private nativePageTransitions: NativePageTransitions, private fb: FormBuilder, private http: Http, private api: ApicallfunProvider, private storage:Storage, private toast: Toast) {
    this.menu = menu;
    this.form = fb.group({
      email: ['', [Validators.required, isEmailValid('email')]],
      password: ['', Validators.required]
    });   
  }

  async ngOnInit() {

  }

  async logincall() {

    if (this.form.valid) {
    console.log("Device Token printed again "+this.form.value.device_token);
    console.log(this.form.value.device_token = localStorage.getItem('device_token'))
    if(this.form.value.device_token == null){
      console.log(this.form.value.device_token = "dgffgdfg3fdg54df6g54d6f5g4d6f5g4d")
    }
    console.log(this.email = this.form.value.email);
    console.log(this.password = this.form.value.password);
    console.log(this.form.value);
    this.logint = await this.api.login(this.form.value);
    console.log(this.logint);
    if(this.logint.status == "1"){
      localStorage.setItem('authtoken', this.logint.data[0].token)
          console.log('Stored item!')
          this.form.reset();
          this.navCtrl.setRoot("DashboardPage");
          console.log(this.logint);
    }
    else if(this.logint.status == "0"){
      if(this.logint.error[0].password==undefined){
        alert(this.logint.error[0]);
      }
      else{
        alert(this.logint.error[0].password[0]);
      }
    }
    else{
      console.log("Login Error");
    }
    }
    else if(this.form.invalid){
      console.log(this.form)
      if(this.form.value.email==undefined){
        this.showToast("Email required");
      }
      else if(this.form.value.password==undefined){
        this.showToast("Password required");
      }
      else if(this.form.value.email==undefined && this.form.value.password==undefined){
        this.showToast("Email and Password are required");
      }
      else{
      }
    }

  }

  forgotpass(){
    this.navCtrl.push("ForgotpassPage");
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
