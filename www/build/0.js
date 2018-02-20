webpackJsonp([0],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_apicall_apicall__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_crop__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, storage, http, api, fb, actionSheetCtrl, camera, platform, file, filePath, crop, toastCtrl, transfer, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.api = api;
        this.fb = fb;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.filePath = filePath;
        this.crop = crop;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.isInputDisabled = true;
        this.submitAttempt = false;
        this.profilepicURl = __WEBPACK_IMPORTED_MODULE_4__providers_apicall_apicall__["a" /* ApicallfunProvider */].profilepicURl;
        this.profileupURL = __WEBPACK_IMPORTED_MODULE_4__providers_apicall_apicall__["a" /* ApicallfunProvider */].profileupURL;
        this.storageDirectory = '';
        this.data = JSON.parse(localStorage.getItem('easypoUser'));
        console.log(this.data);
        this.updateform = fb.group({
            first_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            email_notify: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.platform.ready().then(function () {
            file.listDir(file.externalDataDirectory, '').then(function (result) {
                console.log("External Dir created " + JSON.stringify(result));
                // file.listDir(path, dirName).then((result)=>{
                //   console.log("External Dir created " + JSON.stringify(result));
                // })
            });
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
    ProfilePage.prototype.ionViewWillEnter = function () {
        console.log(this.profilepicURl = this.profilepicURl);
        this.data = JSON.parse(localStorage.getItem('easypoUser'));
        this.data.address = this.data.user_meta.address;
        this.data.city = this.data.user_meta.city;
        this.data.state = this.data.user_meta.state;
        this.data.country = this.data.user_meta.country;
        this.data.zipcode = this.data.user_meta.zipcode;
        this.data.email_notify = this.data.user_meta.email_notify;
        this.data.profile_img = this.data.user_meta.profile_img;
        if (this.data.email_notify == "1") {
            this.data.email_notify = true;
        }
        else {
            this.data.email_notify = false;
        }
        var authtoken = localStorage.getItem('authtoken');
        this.authToken = authtoken;
        // console.log(this.authToken);
    };
    ProfilePage.prototype.makedit = function () {
        if (this.isInputDisabled == true) {
            //enable the button
            this.isInputDisabled = false;
        }
        else if (this.isInputDisabled == false) {
            //disable the button
            this.isInputDisabled = true;
        }
    };
    ProfilePage.prototype.changepassword = function () {
        this.navCtrl.push("ChangepassPage");
    };
    // Update Profile Info Api
    ProfilePage.prototype.updateprofile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(this.updateform);
                        if (!this.updateform.valid) return [3 /*break*/, 3];
                        this.updateform.value.profile_img = this.data.profile_img;
                        if (this.updateform.value.email_notify == true) {
                            this.updateform.value.email_notify = "1";
                        }
                        else {
                            this.updateform.value.email_notify = "0";
                        }
                        if (!(this.authToken != null || this.authToken != undefined)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.api.updateprof(this.authToken, this.updateform.value)];
                    case 1:
                        _a.update = _b.sent();
                        console.log(this.update);
                        if (this.update.status == '1') {
                            alert(this.update.data[0]);
                            this.getUser();
                            this.isInputDisabled = true;
                        }
                        else if (this.update.status == '0') {
                            this.isInputDisabled = false;
                        }
                        else {
                            this.isInputDisabled = false;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        alert("Don't have Auth key");
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // User Info Api
    ProfilePage.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.authToken != null || this.authToken != undefined)) return [3 /*break*/, 2];
                        this.authToken = this.authToken;
                        _a = this;
                        return [4 /*yield*/, this.api.getusers(this.authToken)];
                    case 1:
                        _a.data = _b.sent();
                        console.log(this.data);
                        if (this.data.status == 1 || this.data.status == '1' || this.data.status == true) {
                            this.data = this.data.data[0];
                            localStorage.setItem('easypoUser', JSON.stringify(this.data));
                            this.data.address = this.data.user_meta.address;
                            this.data.city = this.data.user_meta.city;
                            this.data.state = this.data.user_meta.state;
                            this.data.country = this.data.user_meta.country;
                            this.data.zipcode = this.data.user_meta.zipcode;
                            this.data.email_notify = this.data.user_meta.email_notify;
                            this.data.profile_img = this.data.user_meta.profile_img;
                            if (this.data.email_notify == "1") {
                                this.data.email_notify = true;
                            }
                            else {
                                this.data.email_notify = false;
                            }
                        }
                        else if (this.data.status == '0') {
                        }
                        else {
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        console.log("Don't have Auth key");
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Upload Image
    ProfilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
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
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    console.log(filePath, " filePath");
                    console.log(imagePath, " imagePath");
                    _this.crop.crop(filePath, { quality: 75 })
                        .then(function (newImage) {
                        imagePath = newImage;
                        _this.filePath.resolveNativePath(imagePath)
                            .then(function (filePath) {
                            var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                            var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                            _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                            console.log(correctPath, " correctPath");
                            console.log(currentName, " currentName");
                        });
                    }, function (error) { return console.error('Error cropping image', error); });
                });
            }
            else {
                _this.crop.crop(imagePath, { quality: 75 })
                    .then(function (newImage) {
                    imagePath = newImage;
                    _this.filePath.resolveNativePath(imagePath)
                        .then(function (filePath) {
                        console.log(imagePath = filePath);
                        console.log(imagePath);
                        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                        _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                        console.log(correctPath, " correctPath");
                        console.log(currentName, " currentName");
                    });
                }, function (error) { return console.error('Error cropping image', error); });
            }
        }, function (err) {
            // this.presentToast('No Image Selected.');
        });
    };
    // Create a new name for the image
    ProfilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ProfilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            console.log(newFileName, " newFileName");
            console.log(currentName, " currentName");
            console.log(namePath, " namePath");
            localStorage.setItem('imageName', newFileName);
            _this.uploadImage(currentName, namePath);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ProfilePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ProfilePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ProfilePage.prototype.uploadImage = function (name, path) {
        var _this = this;
        console.log(name);
        console.log(path);
        // Destination URL
        var url = this.profileupURL;
        console.log(url);
        // File for Upload
        var targetPath = path + name;
        console.log(targetPath);
        // File name only
        var filename = name;
        var fileTransfer = this.transfer.create();
        console.log(fileTransfer);
        fileTransfer.onProgress(function (progressEvent) {
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
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            console.log("Upload Result ", data.response);
            _this.presentToast('Updated successfully!');
            _this.updateproaftpic(filename);
        }, function (err) {
            _this.presentToast('Error while uploading file.');
        });
    };
    ProfilePage.prototype.updateproaftpic = function (filename) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.data.profile_img = filename;
                        if (this.data.email_notify == true) {
                            this.data.email_notify = "1";
                        }
                        else {
                            this.data.email_notify = "0";
                        }
                        if (!(this.authToken != null || this.authToken != undefined)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.api.updateprof(this.authToken, this.data)];
                    case 1:
                        _a.update = _b.sent();
                        console.log("UPDATE PROFILE AFTER PIC", this.update);
                        if (this.update.status == '1') {
                            alert(this.update.data[0]);
                            this.getUser();
                            this.isInputDisabled = true;
                        }
                        else if (this.update.status == '0') {
                            this.isInputDisabled = false;
                        }
                        else {
                            this.isInputDisabled = false;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        alert("Don't have Auth key");
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Logout
    ProfilePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '',
            message: 'Do you really want to Logout ?',
            buttons: [
                {
                    text: 'Stay Here',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.logoutuser();
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilePage.prototype.logoutuser = function () {
        var _this = this;
        localStorage.removeItem('authtoken');
        localStorage.removeItem('easypoUser');
        this.navCtrl.setRoot('LoginPage').then(function (result) {
            // first we find the index of the current view controller:
            var index = _this.navCtrl.getActive().index;
            // then we remove it from the navigation stack
            _this.navCtrl.remove(0, index);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/apple/Desktop/easypo/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>PROFILE</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only *ngIf="isInputDisabled==true" [hidden]="isInputDisabled==false" (click)="makedit()"><ion-icon name="ios-create-outline"></ion-icon></button>\n      <!-- <a href="#"><label for="submit"> -->\n        <button ion-button icon-only *ngIf="isInputDisabled==false" [hidden]="isInputDisabled==true" (click)="updateprofile()"><ion-icon name="md-checkmark-circle-outline" ></ion-icon></button>\n      <!-- </label></a> -->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="profilebg">\n    <ion-row align-items-center>\n      <ion-col col-3>\n        <img *ngIf="data.user_meta.profile_img; else other" class="profileimg"  src="{{profilepicURl}}{{data.user_meta.profile_img}}" src-fallback="./assets/easypo/Ripple.svg" (loaded)="onLoaded($event)">\n        <ng-template #other>\n          <img class="profileimg" src="./assets/easypo/profile1.png" src-fallback="./assets/easypo/Ripple.svg" (loaded)="onLoaded($event)">\n        </ng-template>\n        <p class="edit" (click)="presentActionSheet()"><ion-icon ios="ios-create" md="md-create"></ion-icon>&nbsp;Edit Pic</p>\n      </ion-col>\n      <ion-col>\n        <h2>{{data.first_name}} {{data.last_name}}</h2>\n        <p class="profiledes">{{data.phone}} </p>\n        <p class="profiledes">{{data.email}} </p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-list *ngIf="isInputDisabled" [hidden]="!isInputDisabled">  \n    <ion-item>\n      <ion-label stacked>First Name</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="First Name" [(ngModel)]="data.first_name" disabled="{{isInputDisabled}}" ></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="Last Name" [(ngModel)]="data.last_name" disabled="{{isInputDisabled}}"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Phone Number</ion-label>\n      <ion-input class="inptfld" type="number" placeholder="Mobile Number" [(ngModel)]="data.phone" disabled="{{isInputDisabled}}" ></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Address</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="Address" [(ngModel)]="data.address" disabled="{{isInputDisabled}}" ></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>City</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="City" [(ngModel)]="data.city" disabled="{{isInputDisabled}}" ></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>State</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="State" [(ngModel)]="data.state" disabled="{{isInputDisabled}}" ></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Country</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="Country" [(ngModel)]="data.country" disabled="{{isInputDisabled}}" ></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Zipcode</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="Zipcode" [(ngModel)]="data.zipcode" disabled="{{isInputDisabled}}" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> Email Notification</ion-label>\n      <ion-toggle color="secondary" disabled="true" [(ngModel)]="data.email_notify"></ion-toggle>\n    </ion-item> \n      \n    <button ion-item (click)="changepassword()">\n      <ion-label> Change Password<ion-icon class="forwardarr" name="ios-arrow-forward"></ion-icon></ion-label>\n    </button> \n  </ion-list>\n\n  <ion-list *ngIf="!isInputDisabled" [hidden]="isInputDisabled">\n  <form [formGroup]="updateform" (ngSubmit)="updateprofile()" novalidate>   \n    <ion-item>\n      <ion-label stacked>First Name</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="First Name" [(ngModel)]="data.first_name" formControlName="first_name" required></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="Last Name" [(ngModel)]="data.last_name" formControlName="last_name" required></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Phone Number</ion-label>\n      <ion-input class="inptfld" type="text" maxlength="10" placeholder="Mobile Number" [(ngModel)]="data.phone"  formControlName="phone" required></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Address</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="Address" [(ngModel)]="data.address"  formControlName="address" required></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>City</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="City" [(ngModel)]="data.city"  formControlName="city" required></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>State</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="State" [(ngModel)]="data.state"  formControlName="state" required></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Country</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="Country" [(ngModel)]="data.country"  formControlName="country" required></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Zipcode</ion-label>\n      <ion-input class="inptfld" type="text" placeholder="Zipcode" [(ngModel)]="data.zipcode"  formControlName="zipcode" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> Email Notification</ion-label>\n      <ion-toggle color="secondary" [(ngModel)]="data.email_notify" formControlName="email_notify"></ion-toggle>\n    </ion-item>\n      \n    <button ion-item (click)="changepassword()">\n      <ion-label> Change Password<ion-icon class="forwardarr" name="ios-arrow-forward"></ion-icon></ion-label>\n    </button>\n    \n  </form>    \n  </ion-list>\n\n  <button ion-button class="sidemenulog" (click)="showConfirm()">\n    <ion-icon class="sidemenuiconl" name="ios-log-out-outline"></ion-icon>&nbsp;&nbsp;\n    LOGOUT\n  </button>\n  <br><br>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/easypo/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_apicall_apicall__["a" /* ApicallfunProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map