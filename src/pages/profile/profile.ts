import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, ActionSheetController, Platform, ToastController } from 'ionic-angular';
import {Observable} from 'rxjs';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import { Storage } from '@ionic/storage';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Crop } from '@ionic-native/crop';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  private isInputDisabled:boolean=true;
  public data: any;
  public update: any;
  private authToken: any;
  private updatep: any;  
  private updateform : FormGroup;
  submitAttempt: boolean = false;
  profilepicURl = ApicallfunProvider.profilepicURl;
  profileupURL = ApicallfunProvider.profileupURL;
 
  results: any;
  storageDirectory: string ='';

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private http: Http, private api: ApicallfunProvider, private fb: FormBuilder, public actionSheetCtrl: ActionSheetController, private camera: Camera, public platform: Platform, private file: File, private filePath: FilePath, private crop: Crop, public toastCtrl: ToastController, private transfer: FileTransfer, private alertCtrl: AlertController) {
    this.data = JSON.parse(localStorage.getItem('easypoUser'));
    console.log(this.data);
    this.updateform = fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      email_notify: ['', Validators.required]
    });

 
    this.platform.ready().then(() => {
 
      file.listDir(file.externalDataDirectory, '').then((result)=>{
    console.log("External Dir created " + JSON.stringify(result));
      // file.listDir(path, dirName).then((result)=>{
      //   console.log("External Dir created " + JSON.stringify(result));
      // })
    })
//       // code to create a new directory

//       file.createDir(file.externalDataDirectory, 'newDir', true).then((result)=>{
//     console.log("Directory newDir created " + result);
      
//     // code to list the files and folder in the directory

//       file.listDir(file.externalDataDirectory,'').then((result)=>{
//     this.storageDirectory = file.externalDataDirectory;
//     console.log("this.storageDirectory containnig "+ this.storageDirectory);
//     console.log("listing taking place here " + file.externalDataDirectory);
//     console.log("listing taking place here " + JSON.stringify(file.externalDataDirectory));
//          this.results=result;
//        console.log("showing result content "+JSON.stringify(result));
     
//  // code to print the name of files and folder on console as well as on device screen		
     
//  for(let file of result){
//    if(file.isDirectory == true){
//    console.log("Code if its a folder");
//    let name=file.name; 
//    console.log("File name"+name);
//  }
//  else if(file.isFile == true){
//    console.log("Code if its a file");
//    let name=file.name; 
//    console.log("File name "+name);
//    let path=this.storageDirectory+name; 
//    console.log(path);
//      file.getMetadata(function (metadata) {
//      let size=metadata.size; 
//      console.log("File size"+size);
//      })
//  }
//  }
   
// /*result will have an array of file objects with 
// file details or if its a directory:  */
//    });
//  });
 
});

  }

  ionViewWillEnter() {
    console.log(this.profilepicURl = this.profilepicURl);
    this.data = JSON.parse(localStorage.getItem('easypoUser'));
    this.data.address = this.data.user_meta.address;
    this.data.city = this.data.user_meta.city;
    this.data.state = this.data.user_meta.state;
    this.data.country = this.data.user_meta.country;
    this.data.zipcode = this.data.user_meta.zipcode;
    this.data.email_notify = this.data.user_meta.email_notify;
    this.data.profile_img = this.data.user_meta.profile_img;
    if(this.data.email_notify == "1"){
      this.data.email_notify = true;
    }
    else{
      this.data.email_notify = false;
    }
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
      // console.log(this.authToken);
  }

  makedit() {
    if(this.isInputDisabled == true){
      //enable the button
      this.isInputDisabled=false; 
      }
    else if(this.isInputDisabled == false){
      //disable the button
      this.isInputDisabled=true;
      }
  }

  changepassword(){
    this.navCtrl.push("ChangepassPage");
  }

// Update Profile Info Api
async updateprofile() {  
  console.log(this.updateform);
  if (this.updateform.valid) {   
    this.updateform.value.profile_img = this.data.profile_img
    if(this.updateform.value.email_notify == true){
      this.updateform.value.email_notify = "1";
    }
    else{
      this.updateform.value.email_notify = "0";
    }
    if (this.authToken != null || this.authToken != undefined) {  
    this.update = await this.api.updateprof(this.authToken, this.updateform.value);
      console.log(this.update);
      if(this.update.status == '1'){
        alert(this.update.data[0])
        this.getUser();
        this.isInputDisabled = true;
      }
      else if(this.update.status == '0'){
        this.isInputDisabled = false;
      }
      else{
        this.isInputDisabled = false;
      }
    }
    else{
      alert("Don't have Auth key");
    }
  }
}

// User Info Api
async getUser() {  
  if (this.authToken != null || this.authToken != undefined) { 
  this.authToken = this.authToken;  
  this.data = await this.api.getusers(this.authToken);
    console.log(this.data);
    if(this.data.status == 1||this.data.status == '1'||this.data.status == true){
      this.data = this.data.data[0];
      localStorage.setItem('easypoUser', JSON.stringify(this.data));
      this.data.address = this.data.user_meta.address;
      this.data.city = this.data.user_meta.city;
      this.data.state = this.data.user_meta.state;
      this.data.country = this.data.user_meta.country;
      this.data.zipcode = this.data.user_meta.zipcode;
      this.data.email_notify = this.data.user_meta.email_notify;
      this.data.profile_img = this.data.user_meta.profile_img;
      if(this.data.email_notify == "1"){
        this.data.email_notify = true;
      }
      else{
        this.data.email_notify = false;
      }
    }
    else if(this.data.status == '0'){
      
    }
    else{

    }
  }
  else{
    console.log("Don't have Auth key");
  }
}

// Upload Image
public presentActionSheet() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Select Image Source',
    buttons: [
      {
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  });
  actionSheet.present();
}


public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true,
    targetWidth: 600,
    targetHeight: 600
  };

  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
      .then(filePath => {
        console.log(filePath, " filePath");
        console.log(imagePath, " imagePath");
        this.crop.crop(filePath, {quality: 75})
        .then(
          newImage => {
            imagePath = newImage
            this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            console.log(correctPath, " correctPath");
            console.log(currentName, " currentName");
            })
          },
          error => console.error('Error cropping image', error)
        );
      });
    } else {
      this.crop.crop(imagePath, {quality: 75})
      .then(
        newImage => {
          imagePath = newImage
          this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            console.log(imagePath = filePath);
            console.log(imagePath);
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            console.log(correctPath, " correctPath");
            console.log(currentName, " currentName");
          })
        },
        error => console.error('Error cropping image', error)
      );
    }
  }, (err) => {
    // this.presentToast('No Image Selected.');
  });
}

// Create a new name for the image
private createFileName() {
  var d = new Date(),
    n = d.getTime(),
    newFileName = n + ".jpg";
  return newFileName;
}

// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    console.log(newFileName, " newFileName");
    console.log(currentName, " currentName");
    console.log(namePath, " namePath");
    localStorage.setItem('imageName', newFileName )
    this.uploadImage(currentName, namePath)
  }, error => {
    this.presentToast('Error while storing file.');
  });
}

private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}

public uploadImage(name, path) {
  console.log(name);
  console.log(path);
  // Destination URL
  var url = this.profileupURL;
  console.log(url);
  // File for Upload
  var targetPath = path+name;
  console.log(targetPath);
  // File name only
  var filename = name;

  const fileTransfer: FileTransferObject = this.transfer.create();
  console.log(fileTransfer);
  
  fileTransfer.onProgress((progressEvent: ProgressEvent): void => {
    if (progressEvent.lengthComputable) {
      var per = Math.round((progressEvent.loaded / progressEvent.total) * 100);
      console.log("Progress: ", per);
    }
  });

  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params: { 'fileName': filename }
  };

  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
   console.log("Upload Result ", data.response);

    this.presentToast('Updated successfully!');
    this.updateproaftpic(filename);

  }, err => {
    this.presentToast('Error while uploading file.');
  });
}

async updateproaftpic(filename){
  this.data.profile_img = filename;
  if(this.data.email_notify == true){
    this.data.email_notify = "1";
  }
  else{
    this.data.email_notify = "0";
  }
  if (this.authToken != null || this.authToken != undefined) {  
  this.update = await this.api.updateprof(this.authToken, this.data);
    console.log("UPDATE PROFILE AFTER PIC", this.update);
    if(this.update.status == '1'){
      alert(this.update.data[0])
      this.getUser();
      this.isInputDisabled = true;
    }
    else if(this.update.status == '0'){
      this.isInputDisabled = false;
    }
    else{
      this.isInputDisabled = false;
    }
  }
  else{
    alert("Don't have Auth key");
  }
}

// Logout


showConfirm() {
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
    this.navCtrl.setRoot('LoginPage').then(result=>{
      // first we find the index of the current view controller:
      const index = this.navCtrl.getActive().index;
      // then we remove it from the navigation stack
      this.navCtrl.remove(0, index);
      })
}
}