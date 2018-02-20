import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer} from '@ionic-native/file-transfer';
import { Crop } from '@ionic-native/crop';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ApicallProvider } from '../providers/api/api';
import { ApicallfunProvider } from '../providers/apicall/apicall';
import { ParallaxHeader } from '../providers/parallax/parallax';
import { pendofData } from '../providers/filters/pendof';
import { comdofData } from '../providers/filters/comdof';
import { poData } from '../providers/filters/po';
import { Network } from '@ionic-native/network';
import { IonicStorageModule } from '@ionic/storage';
import { InputTrimModule } from 'ng2-trim-directive';
import { SlicePipe, DatePipe } from '@angular/common';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';
import { Toast } from '@ionic-native/toast';
import { FileChooser } from '@ionic-native/file-chooser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { FCM } from '@ionic-native/fcm';


// import { Transfer } from '@ionic-native/transfer';


@NgModule({
  declarations: [
    MyApp,
    ParallaxHeader,
  ],
  imports: [
    FormsModule, 
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTrimModule,
    Ng2ImgFallbackModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    ApicallProvider,
    ApicallfunProvider,
    pendofData,
    comdofData,
    poData,
    Network,
    DatePipe,
    SlicePipe,
    Camera,
    File,
    // FCM,
    FilePath,
    Crop,
    Toast ,
    FileTransfer,
    FileChooser ,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
