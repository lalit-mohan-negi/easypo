import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Http, Headers, RequestOptions } from '@angular/http';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ApicallfunProvider } from '../../providers/apicall/apicall';
import { Storage } from '@ionic/storage';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SERVER_TRANSITION_PROVIDERS } from '@angular/platform-browser/src/browser/server-transition';
import { Toast } from '@ionic-native/toast';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Crop } from '@ionic-native/crop';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  @ViewChild('myForm')
  private myForm: NgForm;

  private data: any = [];
  private dofDetail: any = {};
  private order: string = "bill";
  private DOFid: any;
  private authToken: any;
  private dof_no: any;
  private messagee: any;
  private noticount: any;
  private clients: any = [];
  private attachmentpath: any;
  private revice: any = false;
  private selectedbillfacilityname: any;
  private filechoosen: any = false;
  private updateformm : FormGroup;
  private dofattachmentURL = ApicallfunProvider.dofattachmentURL;
  private dofAttachmentsURl = ApicallfunProvider.dofAttachmentsURl;
  private count = 1;
  private myvalue: any;

  constructor(public navCtrl: NavController,private camera: Camera,public platform: Platform, private crop:Crop, public navParams: NavParams, private storage:Storage, private http: Http, private api: ApicallfunProvider, private fb: FormBuilder, private fileChooser: FileChooser, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, private transfer: FileTransfer, private iab: InAppBrowser, private toast: Toast) {
    this.DOFid = navParams.get("dofID");
    this.dof_no = navParams.get("dof_no");
    console.log(this.DOFid);
    console.log(this.dof_no);

  }

  ionViewWillEnter() {
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
      console.log(this.DOFid);
      this.getpoList(this.DOFid);
      // this.getclientcompanyn();
  }

  ionViewWillLeave() {
    clearTimeout(this.messagee);
  }

  ionViewDidEnter() {
    this.recallagain();
    this.getnotifcount();
    setTimeout(() => {
    this.calculateprice(0, 0);
    this.calculatepricet(0, 0);
  }, 8000);
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
  this.noticount = noticounts.data[0].count;
  if(this.noticount == '1'){

  }
  else if(this.noticount == '0'){
    
  }
  else{

  }
  }
}

  public today() {
    return new Date().toISOString().substring(0,10);
  }

  public removedoi(i: number) {
    this.dofDetail.product_dof.splice(i, 1);
    this.calculateprice(0, 0);
    this.calculatepricet(0, 0);
  } 

  public adddoi(){
    console.log(this.dofDetail.product_dof); 
    let product =  { dof_id: this.dofDetail.id,
                    description: "",
                    item: "",
                    lot: "",
                    quantity: "",
                    unit_price: "",
                    total_cost: "" }
    // this.dofDetail.product_dof.push(++this.count); 
    this.dofDetail.product_dof.push(product); 
    console.log(this.dofDetail.product_dof);                
    console.log(this.dofDetail);                

  }

  // Get clients name
  async getclientcompanyn(){
    if (this.authToken != null || this.authToken != undefined) { 
    let clientss = await this.api.getclientcompany(this.authToken);
    this.clients = clientss.data[0];
    console.log(this.clients);
    if(clientss.status == '1'){
      let selectedid = this.clients.find(x => x.id === this.dofDetail.client_id);
      this.dofDetail.bill_to_select_facility__name = selectedid.id;
      console.log(this.dofDetail.bill_to_select_facility__name);
    }
    else if(clientss.status == '0'){
      
    }else{
  
    }
    }
  }

  func(event){
    console.log(event);
    this.getotherUser(event);

  }

  calculateprice(value, i){
    console.log(value);
    console.log(i);
    var total = 0;
    console.log(this.dofDetail);
    console.log(this.dofDetail.product_dof);
    for(var x=0; x<this.dofDetail.product_dof.length; x++){
      if(x==i){
        this.dofDetail.product_dof[x].total_cost = parseInt(this.dofDetail.product_dof[x].quantity) * parseInt(this.dofDetail.product_dof[x].unit_price) 
        console.log(this.dofDetail.product_dof);
      }
    }

    for(var x=0; x<this.dofDetail.product_dof.length; x++){
      total = total + this.dofDetail.product_dof[x].total_cost
      console.log(this.dofDetail.sub_total = total);
    }
    this.calculatepricet(0, 0);
  }

  calculatepricet(value, i){
    console.log("Sub total "+this.dofDetail.sub_total);
    console.log("Processing Fee "+this.dofDetail.processing_fee);
    console.log("Shipping Fee "+this.dofDetail.shipping);
    this.dofDetail.cost = parseInt(this.dofDetail.sub_total) + parseInt(this.dofDetail.processing_fee) + parseInt(this.dofDetail.shipping)
    console.log("Total Cost "+this.dofDetail.cost)
  }

  calculatepricetpro(value, i){
    console.log("Sub total "+this.dofDetail.sub_total);
    console.log("Processing Fee "+value);
    console.log("Shipping Fee "+this.dofDetail.shipping);
    this.dofDetail.cost = parseInt(this.dofDetail.sub_total) + parseInt(value) + parseInt(this.dofDetail.shipping)
    console.log("Total Cost "+this.dofDetail.cost)
  }



  calculatepricetsh(value, i){
    console.log("Sub total "+this.dofDetail.sub_total);
    console.log("Processing Fee "+this.dofDetail.processing_fee);
    console.log("Shipping Fee "+value);
    this.dofDetail.cost = parseInt(this.dofDetail.sub_total) + parseInt(this.dofDetail.processing_fee) + parseInt(value)
    console.log("Total Cost "+this.dofDetail.cost)
  }

  changerep(value){
    //manually launch change detection
    if(value.length>500){
      this.showToast("Please enter no more than 500 characters.");
    }
    else{
      console.log("Ok")
    }
  }

  changereps(value){
    //manually launch change detection
    if(value.length>100){
      this.showToast("Please enter no more than 100 characters.");
    }else{
      console.log("Ok")
    }
  }

// Show Toast 
  showToast(msg){
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      })
  }

// User Info Api
async getotherUser(id) {  
  if (this.authToken != null || this.authToken != undefined) { 
  this.authToken = this.authToken;  
  let dataa = await this.api.getotherusers(this.authToken, id);
    console.log(dataa);
    if(dataa.status == 1||dataa.status == '1'||dataa.status == true){
      let data = dataa.data[0];
      this.dofDetail.bill_to_facility_name = data.first_name;
      this.dofDetail.bill_to_email = data.email;
      this.dofDetail.bill_to_phone = data.phone;
      this.dofDetail.bill_to_address = data.user_meta.address;
      this.dofDetail.bill_to_state = data.user_meta.state;
      this.dofDetail.bill_to_zipcode = data.user_meta.zipcode;
    }
    else if(dataa.status == '0'){
      
    }
    else{

    }
  }
  else{
    console.log("Don't have Auth key");
  }
}

// Get Pending DOF Detail Info Api
async getpoList(id) {    
  if (this.authToken != null || this.authToken != undefined) {  
  this.data = await this.api.getdofdet(this.authToken, id);
    console.log(this.data);
    if(this.data.status == '1'){
      this.dofDetail = this.data.data[0];
      this.dof_no = this.dofDetail.dof_no;
      if(this.dofDetail.restock_needed == 1){
        this.dofDetail.restock_needed = true;
      }
      else{
        this.dofDetail.restock_needed = false;
      }
      this.dofDetail.client_ids = this.dofDetail.client_id.toString();
      console.log(this.dofDetail.client_ids);
    }
    else if(this.data.status == '0'){
      
    }
    else{

    }
  }
  else{
    this.showToast("Don't have Auth key");
  }
}

chooseattachment(){
  this.fileChooser.open()
  .then(uri => {
    console.log(uri);
    this.filePath.resolveNativePath(uri)
  .then(filePath => {
    console.log(this.attachmentpath = filePath)
    var ext = filePath.substr(filePath.lastIndexOf('/') + 1);
    console.log(this.dofDetail.attachment = ext);
    this.filechoosen = true;
  })
  .catch(err => console.log(err));
  })
  .catch(e => console.log(e));
}

// Create a new name for the image
private createFileName(ext) {
  var d = new Date(),
    n = d.getTime(),
    newFileName = n + '.' + ext;
  return newFileName;
}

backhistory(){
    window.history.back();
  }

  
async updatedof(){
  console.log(this.dofDetail);
  if (this.myForm.valid) { 
    console.log(this.myForm);
    console.log(this.dofDetail);
 
    if (this.authToken != null || this.authToken != undefined) {

      if(this.filechoosen == true){
        this.uploadImage(this.dofDetail.attachment, this.attachmentpath);
      }
      else{
        let updatestat = await this.api.updatedof(this.authToken, this.dofDetail, this.myForm);
          console.log(updatestat);
          if(updatestat.status == '1'){
            console.log(updatestat);
            this.showToast(updatestat.data[0]);
            this.backhistory();
          }
          else if(updatestat.status == '0'){
            this.showToast(updatestat.data[0]);
          }
          else{
      
          }
      }

      }
      else{
        this.showToast("Don't have Auth key");
      }

  }
  else{
    console.log(this.updateformm)
  }

}

revisedof(){
  console.log(this.revice = true);
  this.getclientcompanyn();
}
// Get Pending DOF Detail Info Api
async updateDof(data, productdof) {    
  if (this.authToken != null || this.authToken != undefined) {  
  this.data = await this.api.updatedof(this.authToken, data, productdof);
    console.log(this.data);
    // if(this.data.status == '1'){3

    // }
    // else if(this.data.status == '0'){
      
    // }
    // else{

    // }
  }
  else{
    this.showToast("Don't have Auth key");
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

// Upload Attachment

public uploadImage(name, path) {
  console.log(name);
  console.log(path);
  // Destination URL
  var url = this.dofattachmentURL;
  console.log(url);
  // File for Upload
  var targetPath = path;
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
    
    this.updatedofp();

  }, err => {
    this.showToast('Error while uploading file.');
  });
}

notification(){
  this.navCtrl.push("NotificationPage")
}

async updatedofp(){
  let updatestat = await this.api.updatedof(this.authToken, this.dofDetail, this.myForm);
  console.log(updatestat);
  if(this.data.status == '1'){
    console.log(updatestat);
    this.showToast("Updated Successfully");
  }
  else if(this.data.status == '0'){
    this.showToast("Not Updated");
  }
  else{

  }
}


openActionBar(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Gallery',
          // role: 'destructive',
          handler: () => {
            this.chooseattachment();
            console.log('Destructive clicked');
          }
        },{
          text: 'camera',
          handler: () => {
            
            console.log('Archive clicked');
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
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
          console.log(filePath);
          console.log(imagePath);
          this.uploadImage(filePath, imagePath);
          this.crop.crop(filePath, {quality: 75})
          .then(
            newImage => {
              imagePath = newImage
              this.filePath.resolveNativePath(imagePath)
              .then(filePath => {
              let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
              let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
              console.log(correctPath);
              console.log(currentName);
              this.uploadImage(currentName, correctPath);
              this.dofDetail.attachment = currentName;
              this.attachmentpath = correctPath;

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
              console.log(correctPath);
              console.log(currentName);

              this.dofDetail.attachment = currentName ;
              this.attachmentpath = correctPath;
            })
          },
          error => console.error('Error cropping image', error)
        );
      }
    }, (err) => {
      // this.presentToast('No Image Selected.');
    });
  }
  


}
