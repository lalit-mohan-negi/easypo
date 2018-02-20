import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';
import { ApicallfunProvider } from '../providers/apicall/apicall';
// import { FCM } from '@ionic-native/fcm';
import { Network } from '@ionic-native/network';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";
  // rootPage: any ="MytestpagePage";
  profilepicURl = ApicallfunProvider.profilepicURl;
  pages: Array<{title: string, component: any, icon: any}>;
  private data: any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private alertCtrl: AlertController, private storage:Storage, private network: Network, public toastCtrl: ToastController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'DASHBOARD ', component: "DashboardPage", icon: "ios-home" },
      { title: 'DELIVERY ORDER', component: "DeliveryPage", icon: "md-car" },
      { title: 'CREATE DOF', component: "CreatedfoPage", icon: "paper" },
      { title: 'PURCHASE ORDER', component: "OutstandingPage", icon: "md-cart" },
      { title: 'PROFILE', component: "ProfilePage", icon: "md-person" },
    ];

    console.log(this.profilepicURl = this.profilepicURl);
    this.loggedinuser();
    this.recall();

    platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        // fcm.getToken().then(token=>{
        //   // backend.registerToken(token);
        //   console.log(token);
        //   localStorage.setItem('device_token', token);
        // })
        
        // fcm.onNotification().subscribe(data=>{
        //   console.log("Got Data "+JSON.stringify(data));
        //   if(data.wasTapped){
        //     console.log("Received in background");
        //     localStorage.setItem('gotnotification', "true");
        //   } else {
        //     console.log("Received in foreground");
        //   };
        //   if(data.additionalData.coldstart){
        //     console.log("Received in background");
        //     localStorage.setItem('gotnotification', "true");
        //   }
        // })
        
        // fcm.onTokenRefresh().subscribe(token=>{
        //   // backend.registerToken(token);
        //   console.log(token);
        //   localStorage.setItem('device_token', token);
        // })
      }
    })
// watch network for a disconnect

let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  
  let confirm = this.alertCtrl.create({
    title: 'Lost Interenet Connection',
    message: 'Please Try Again Later!!!',
    buttons: [
      {
        text: 'Close',
        handler: () => {
          console.log('Close App');
          this.platform.exitApp();
        }
      }
    ]
  });
  confirm.present();

});

// watch network for a connection
let connectSubscription = this.network.onConnect().subscribe(() => {
  let toast = this.toastCtrl.create({
    message: "Got Internet Connection",
    duration: 3000,
    position: 'center'
  });
  // We just got a connection but we need to wait briefly
   // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.
    if (this.network.type === 'wifi') {
      window.location.reload();
      console.log('we got a wifi connection, woohoo!');
    }
}); 
  }

  loggedinuser(){
    if(localStorage.getItem('authtoken')){
      this.data = JSON.parse(localStorage.getItem('easypoUser'));
    }
  }

  recall(){
  setTimeout(() => {
    this.loggedinuser();
    this.recall();
  }, 3000);
}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  showConfirm(reportid) {
    let confirm = this.alertCtrl.create({
      title: '',
      message: 'Do you really want to Logout ?',
      buttons: [
        {
          text: 'Stay Here',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            console.log('Agree clicked');
            this.logoutuser();
          }
        }
      ]
    });
    confirm.present();
  }

  logoutuser() {

    localStorage.removeItem('authtoken');
    localStorage.removeItem('easypoUser');
      this.nav.setRoot('LoginPage').then(result=>{
        // first we find the index of the current view controller:
        const index = this.nav.getActive().index;
        // then we remove it from the navigation stack
        this.nav.remove(0, index);
        })
  }


}
