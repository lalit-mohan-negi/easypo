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
import { ApicallProvider } from '../../providers/api/api';
import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';

@IonicPage()
@Component({
  selector: 'page-createdfo',
  templateUrl: 'createdfo.html',
})
export class CreatedfoPage {
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
  vendor_companys: any; 
  vendor_addresss: any;
  vendor_citys: any;
  vendor_states: any;
  vendor_phones: any;
  vendor_faxs: any;
  vendor_emails: any;
  sales_agencys: any;
  sales_reps: any;
  sales_territorys: any;
  sales_phones: any;
  restock_neededs: any;
  restock_attentions: any;
  restock_addresss: any;
  restock_citys: any;
  restock_states: any;
  restock_zips: any;
  bill_to_select_facility__names: any;
  bill_to_facility_names: any;
  bill_to_emails: any;
  bill_to_phones: any;
  bill_to_states: any;
  bill_to_zipcodes: any; 
  ship_to_attentions: any;
  ship_to_phones: any;
  ship_to_addresss: any;
  ship_to_citys: any;
  ship_to_states: any;
  ship_to_zipcodes: any;
  patient_identifiers: any;
  surgeons_one: any;
  surgery_dates: any;
  items: any;
  descriptions: any;
  bill_to_addresss:any;
  lots: any;
  quantitys: any;
  unit_prices: any;
  total_costs: any;
  notess_one: any;
  sub_totals: any;
  processing_fees: any;
  shipping:any;

  sales_id:any;
  vendor_id:any;

  product:any;
  salesagency:any ={};
  salsrap:any = {};
  
  // private devDetail:any = {};
  

  constructor(public platform: Platform, private crop:Crop,private apiservice: ApicallProvider,public navCtrl: NavController,private camera: Camera, public navParams: NavParams, private storage:Storage, private http: Http, private api: ApicallfunProvider, private fb: FormBuilder, private fileChooser: FileChooser, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, private transfer: FileTransfer, private iab: InAppBrowser, private toast: Toast) {
  this.salesagency = JSON.parse(localStorage.getItem("easypoUser"));
  this.salsrap = JSON.parse(localStorage.getItem("easypoUser"));
  // console.log("Devraj data" + JSON.parse(this.salesagency));
  console.log("devrajkgjkdgkjsdgkj" + JSON.stringify(this.salesagency));
  
    this.sales_agencys = this.salesagency.user_meta.company;
    this.sales_reps = this.salsrap.first_name;
    this.sales_territorys = "";
    this.sales_phones = this.salsrap.phone;
    this.restock_neededs = "";
    this.restock_attentions = "";
    this.restock_addresss = this.salesagency.user_meta.address;
    this.restock_citys = this.salesagency.user_meta.city;
    this.restock_states = this.salesagency.user_meta.state;
    this.restock_zips = this.salesagency.user_meta.zipcode;
 this.sendIds();
 
  }

async sendIds(){
  this.authToken = localStorage.getItem('authtoken');
  if (this.authToken != null || this.authToken != undefined) { 
  let getids = await this.api.createdofids(this.authToken);

    this.sales_id = getids.data[0].sales_id;
    this.vendor_id = getids.data[0].vendor_id;
  
  }
}

  async updatedoffff(){
    console.log(this.myForm);
    var authtoken = localStorage.getItem('authtoken');
    // if(this.myForm.valid){
      // if(this.authToken != null || this.authToken != undefined){
      //   if(this.filechoosen == true){

      //   }else{
          let updatestat = await this.api.updatedofSecond(this.authToken, "null", this.myForm,  this.sales_id,   this.vendor_id);
      //   }

      // }
      
    // }

    // if (this.myForm.valid) { 
    //   console.log(this.myForm);
  
  
    //   console.log(this.dofDetail);
   
    //   if (this.authToken != null || this.authToken != undefined) {
  
    //     if(this.filechoosen == true){
    //       this.uploadImage(this.dofDetail.attachment, this.attachmentpath);
    //     }
    //     else{
    //       let updatestat = await this.api.updatedof(this.authToken, this.dofDetail, this.myForm);
    //         console.log(updatestat);
    //         if(updatestat.status == '1'){
    //           console.log(updatestat);
    //           this.showToast(updatestat.data[0]);
    //           this.backhistory();
    //         }
    //         else if(updatestat.status == '0'){
    //           this.showToast(updatestat.data[0]);
    //         }
    //         else{
        
    //         }
    //     }
  
    //     }
    //     else{
    //       this.showToast("Don't have Auth key");
    //     }
  
    // }
    // else{
    //   console.log(this.updateformm)
    // }
  
  }







  ionViewWillEnter() {
    var authtoken = localStorage.getItem('authtoken');
      this.authToken = authtoken;
      console.log(this.DOFid);
      this.getclientcompanyn();



      console.log(this.dofDetail.product_dof = []); 
      this.product =  { 
        dof_id: "",
        description: "",
        item: "",
        lot: '',
        quantity: "",
        unit_price: "",
        total_cost: "" 
      }
      // this.dofDetail.product_dof.push(++this.count); 
      this.dofDetail.product_dof.push(this.product); 
      console.log(this.dofDetail.product_dof);                
      console.log(this.dofDetail); 
  }
  ionViewWillLeave() {
  }
  
  ionViewDidEnter() {
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
    this.product =  { 
      dof_id: "",
      description: "",
      item_name: "",
      lot: '',
      quantity: "",
      unit_price: "",
      total_cost: "" 
    }
    // this.dofDetail.product_dof.push(++this.count); 
    this.dofDetail.product_dof.push(this.product); 
    console.log("DEBU items"+this.dofDetail.product_dof);                
    console.log("DEBU items"+ this.dofDetail);                

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
      
    }
    else{
  
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
    }
    else{
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
      this.bill_to_facility_names = data.first_name;
      this.bill_to_emails = data.email;
      this.bill_to_phones = data.phone;
      this.bill_to_addresss = data.user_meta.address;
      this.bill_to_states = data.user_meta.state;
      this.bill_to_zipcodes = data.user_meta.zipcode;
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
  // console.log(this.dofDetail);
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


