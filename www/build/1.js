webpackJsonp([1],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorderPageModule", function() { return PorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__porder__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PorderPageModule = (function () {
    function PorderPageModule() {
    }
    PorderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__porder__["a" /* PorderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__porder__["a" /* PorderPage */]),
            ],
        })
    ], PorderPageModule);
    return PorderPageModule;
}());

//# sourceMappingURL=porder.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(209);
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







/**
 * Generated class for the PorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PorderPage = (function () {
    function PorderPage(navCtrl, navParams, storage, http, api, alertCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.data = [];
        this.dofDetail = {};
        this.dofDetails = {};
        this.order = "bill";
        this.actionactive = false;
        this.dofAttachmentsURl = __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallfunProvider */].dofAttachmentsURl;
        this.profilepicURl = __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallfunProvider */].profilepicURl;
        this.POid = navParams.get("dofID");
        this.po_number = navParams.get("po_number");
        console.log(this.POid);
    }
    PorderPage.prototype.ionViewWillEnter = function () {
        var authtoken = localStorage.getItem('authtoken');
        this.authToken = authtoken;
        console.log(this.POid);
        this.getpoList(this.POid);
    };
    PorderPage.prototype.ionViewWillLeave = function () {
        clearTimeout(this.messagee);
    };
    PorderPage.prototype.ionViewDidEnter = function () {
        this.recallagain();
        this.getnotifcount();
    };
    // Notifications Count
    PorderPage.prototype.recallagain = function () {
        var _this = this;
        this.messagee = setTimeout(function () {
            _this.recallagain();
            _this.getnotifcount();
        }, 5000);
    };
    PorderPage.prototype.getnotifcount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var noticounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.authToken != null || this.authToken != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.getnotificount(this.authToken)];
                    case 1:
                        noticounts = _a.sent();
                        this.noticount = noticounts.data[0].count;
                        if (this.noticount == '1') {
                        }
                        else if (this.noticount == '0') {
                        }
                        else {
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // Open Attachment
    PorderPage.prototype.openattachment = function (file) {
        console.log(file);
        var options = {
            zoom: 'no'
        };
        var browser = this.iab.create(this.dofAttachmentsURl + file, '_system', options);
    };
    // Get Pending DOF Detail Info Api
    PorderPage.prototype.getpoList = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.authToken != null || this.authToken != undefined)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.api.getpodet(this.authToken, id)];
                    case 1:
                        _a.data = _b.sent();
                        console.log(this.data);
                        if (this.data.status == '1') {
                            this.dofDetail = this.data.data[0];
                            this.dofDetails = this.data.data[0].po_get[0];
                            this.actionactive = false;
                            this.dofDetail.profileimg = this.data.profile;
                            this.po_number = this.dofDetail.po_number;
                            console.log("status DEBU" + this.dofDetail.status);
                            if (this.dofDetail.status == 2 || this.dofDetail.status == "2") {
                                this.completed_btn = true;
                                this.canceled_btn = true;
                                this.download = true;
                            }
                            else if (this.dofDetail.status == 1 || this.dofDetail.status == "1") {
                                this.completed_btn = false;
                                this.canceled_btn = false;
                                this.download = true;
                            }
                            else if (this.dofDetail.status == 5 || this.dofDetail.status == "5") {
                                this.completed_btn = false;
                                this.canceled_btn = false;
                                this.download = true;
                            }
                            else {
                                console.log("none");
                            }
                        }
                        else if (this.data.status == '0') {
                        }
                        else {
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
    PorderPage.prototype.actionClick = function (id) {
        this.actionactive = true;
    };
    PorderPage.prototype.changeStatusfinal = function (id, value) {
        console.log(id);
        console.log(value);
        this.cangpostatus(id, value);
    };
    PorderPage.prototype.showConfirm = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Do you want to Cancel this Purchased Order?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.cancelled(id);
                    }
                }
            ]
        });
        confirm.present();
    };
    PorderPage.prototype.cancelled = function (id) {
        this.cangpostatus(id, "1");
    };
    // Change Status Api
    PorderPage.prototype.cangpostatus = function (id, status) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = id.toString();
                        if (!(this.authToken != null || this.authToken != undefined)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.api.cngpostatus(this.authToken, id, status)];
                    case 1:
                        _a.data = _b.sent();
                        console.log(this.data);
                        if (this.data.status == '1') {
                            this.getpoList(id);
                        }
                        else if (this.data.status == '0') {
                        }
                        else {
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
    PorderPage.prototype.acceptpocon = function (id) {
        this.cangpostatus(id, "0");
    };
    PorderPage.prototype.acceptpo = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Do you want to Accept this Purchased Order?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.acceptpocon(id);
                    }
                }
            ]
        });
        confirm.present();
    };
    PorderPage.prototype.notification = function () {
        this.navCtrl.push("NotificationPage");
    };
    PorderPage.prototype.Canceled = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Do you want to Cancel this Purchased Order?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.completed_btn = false;
                        _this.canceled_btn = false;
                        _this.download = true;
                        _this.cangpostatus(id, "1");
                    }
                }
            ]
        });
        confirm.present();
    };
    PorderPage.prototype.Completed = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Do you want to Accept this Purchased Order?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.completed_btn = false;
                        _this.canceled_btn = false;
                        _this.download = true;
                        _this.cangpostatus(id, "5");
                    }
                }
            ]
        });
        confirm.present();
    };
    PorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-porder',template:/*ion-inline-start:"/Users/apple/Desktop/easypo/src/pages/porder/porder.html"*/'<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>ORDER#{{po_number}}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only  class="options-button" (click)="notification()"><ion-icon name="ios-notifications-outline"></ion-icon></button>\n      <ion-badge item-end class="notificationbadge" *ngIf="noticount>0" >{{noticount}}</ion-badge>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <p class="orderfrst">PURCHASED BY:</p>\n\n    <ion-row  align-items-center> \n      <ion-col col-3 class="rcntfst">\n        <img class="recentimg" *ngIf="dofDetail.profileimg" src="{{profilepicURl}}{{dofDetail.profileimg}}">\n        <img class="recentimg" *ngIf="!dofDetail.profileimg" src="./assets/easypo/profile1.png">\n      </ion-col>\n      <ion-col>\n        <h6 class="rcntth">\n          {{dofDetail.purchaser_name}}\n        </h6>\n        <h6 class="rcnth">\n          PO#\n          <span>\n            {{dofDetail.po_number}}\n          </span>\n        </h6>\n        <h6 class="rcntth">\n          {{dofDetails.cost}} USD\n        </h6>\n      </ion-col>\n      <ion-col col-3>   \n        <p class="rcntthrd1">\n          <span>\n            Delivery Date:\n          </span>\n          {{dofDetail.delivery_date}}\n        </p>  \n        <button ion-button class="rcntbtnop" *ngIf="dofDetail.status==\'0\'">\n          OPEN\n        </button>\n        <button ion-button class="rcntbtnca" *ngIf="dofDetail.status==\'1\'">\n          CANCELLED\n        </button>\n        <button ion-button class="rcntbtnP" *ngIf="dofDetail.status==\'2\'">\n          PENDING\n        </button>\n        <button ion-button class="rcntbtnpa" *ngIf="dofDetail.status==\'3\'">\n          PARTIAL\n        </button>\n        <button ion-button class="rcntbtn" *ngIf="dofDetail.status==\'4\'">\n          PAID\n        </button>\n        <button ion-button class="rcntbtnco" *ngIf="dofDetail.status==\'5\'">\n          COMPLETED\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <p class="orderfrst">VENDOR: {{dofDetail.vendor_name}}</p>\n\n  </div>\n\n  <div>\n    <div class="orderpdd">\n      <ion-segment class="segmentout" [(ngModel)]="order">\n        <ion-segment-button value="bill">\n          BILL TO\n        </ion-segment-button>\n        <ion-segment-button value="ship">\n          SHIP TO\n        </ion-segment-button>\n        <ion-segment-button value="sales">\n          VENDOR\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="order" class="orderpdd1"> \n      <ion-list *ngSwitchCase="\'bill\'">\n        <ion-item class="orderitem">\n          <ion-row>\n            <ion-col>\n              <p *ngIf="dofDetails.bill_to_facility_name">{{dofDetails.bill_to_facility_name}}</p>\n              <p *ngIf="dofDetails.bill_to_phone">{{dofDetails.bill_to_phone}}</p>\n            </ion-col>\n            <ion-col>\n              <p *ngIf="dofDetails.bill_to_address">{{dofDetails.bill_to_address}}</p>\n              <p *ngIf="dofDetails.bill_to_state">{{dofDetails.bill_to_state}}</p>\n              <p *ngIf="dofDetails.bill_to_zipcode">{{dofDetails.bill_to_zipcode}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'ship\'">\n        <ion-item class="orderitem">\n          <ion-row>\n            <ion-col>\n              <p *ngIf="dofDetails.ship_to_attention">{{dofDetails.ship_to_attention}}</p>\n              <p *ngIf="dofDetails.ship_to_phone">{{dofDetails.ship_to_phone}}</p>\n            </ion-col>\n            <ion-col>\n              <p *ngIf="dofDetails.ship_to_address">{{dofDetails.ship_to_address}}</p>\n              <p *ngIf="dofDetails.ship_to_state">{{dofDetails.ship_to_state}}</p>\n              <p *ngIf="dofDetails.ship_to_zipcode">{{dofDetails.ship_to_zipcode}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'sales\'">\n        <ion-item class="orderitem">\n          <ion-row>\n            <ion-col>\n              <p *ngIf="dofDetails.vendor_email">{{dofDetails.vendor_email}}</p>\n              <p *ngIf="dofDetails.vendor_phone">{{dofDetails.vendor_phone}}</p>\n            </ion-col>\n            <ion-col>\n              <p *ngIf="dofDetails.vendor_address">{{dofDetails.vendor_address}}</p>\n              <p *ngIf="dofDetails.vendor_state">{{dofDetails.vendor_state}}</p>\n              <p *ngIf="dofDetails.vendor_city">{{dofDetails.vendor_city}}</p>\n              <p *ngIf="dofDetails.vendor_zipcode">{{dofDetails.vendor_zipcode}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>  \n\n  </div>    \n\n  <div>\n    <p class="orderfrst">Delivery Order Item:</p>\n    <ion-list>\n      <ion-list-header>\n        <ion-row>\n          <ion-col col-2 class="orderfrsthead">\n            ITEM\n          </ion-col>\n          <ion-col col-2 class="orderfrsthead">\n            LOT#\n          </ion-col>\n          <ion-col col-1 class="orderfrsthead">\n            QTY\n          </ion-col>\n          <ion-col col-3 class="orderfrsthead">\n            UNIT PRICE\n          </ion-col>\n          <ion-col col-4 class="orderfrsthead">\n            TOTAL COST(USD)\n          </ion-col>\n        </ion-row>\n      </ion-list-header>\n      <ion-item class="orderfrsthd" *ngFor="let poList of dofDetail.product_dof">\n        <ion-row>\n          <ion-col col-2>\n            {{poList.item}}\n          </ion-col>\n          <ion-col col-2>\n            {{poList.lot}}\n          </ion-col>\n          <ion-col col-1>\n            {{poList.quantity}}\n          </ion-col>\n          <ion-col col-3>\n            {{poList.unit_price}} USD\n          </ion-col>\n          <ion-col col-4>\n            {{poList.total_cost}} USD\n          </ion-col>\n        </ion-row>\n        <ion-row class="ordrrow">\n          <ion-col>\n            <span class="ordrdes">Description: </span>{{poList.description}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n    \n  <div *ngIf="dofDetails.notes!=null||dofDetails.notes!=\'\'" [hidden]="dofDetails.notes==null||dofDetails.notes==\'\'">\n      <ion-list>\n        <p class="orderfrst">Rep Notes:</p>\n        <ion-list>\n          <p>{{dofDetails.notes}}</p>\n        </ion-list>\n      </ion-list>\n    </div>\n    <button ion-button type="button" class="attachmentbtn" *ngIf="dofDetails.attachment" [hidden]="!dofDetails.attachment" (click)="openattachment(dofDetails.attachment)">Attachment</button>\n\n  <div *ngIf="dofDetail.comment" [hidden]="!dofDetail.comment">\n    <p class="orderfrst">Comment:</p>\n    <p>{{dofDetail.comment}}</p>\n  </div>\n\n  <div>\n    <ion-list>\n      <ion-list-header class="orderdeader1">\n        <ion-row>\n          <ion-col class="orderfrsthead">\n            <p>Subtotal:</p>\n            <p>Processing Fee:</p>\n            <p>Shipping and Handling:</p>\n          </ion-col>\n          <ion-col col-2 class="orderfrsthead1">\n            <p *ngIf="dofDetails.cost>=0">{{dofDetails.cost - dofDetails.processing_fee - dofDetails.shipping}}</p>\n            <p *ngIf="dofDetails.processing_fee>=0">{{dofDetails.processing_fee}}</p>\n            <p *ngIf="dofDetails.shipping>=0">{{dofDetails.shipping}}</p>\n          </ion-col>\n          <ion-col col-2 class="orderfrsthead1">\n            <p>USD</p>\n            <p>USD</p>\n            <p>USD</p>\n          </ion-col>\n        </ion-row>\n      </ion-list-header>\n      <ion-item class="orderfrsthd orderdeader1">\n        <ion-row>\n          <ion-col class="orderfrsthead">\n            <p>Total Cost:</p>\n          </ion-col>\n          <ion-col col-2 class="orderfrsthead1">\n            <p *ngIf="dofDetails.cost">{{dofDetails.cost}}</p>\n          </ion-col>\n          <ion-col col-2 class="orderfrsthead1">\n            <p>USD</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!-- <ion-row [hidden]="dofDetail.status==1">\n    <ion-col class="colorderbutton" [hidden]="dofDetail.status==4">\n      <ion-select [(ngModel)]="action" *ngIf="actionactive" [hidden]="!actionactive" placeholder="Select Status"  (ionChange)="changeStatusfinal(dofDetail.id, c.value)" #c >\n        <ion-option value="3">Partial</ion-option>\n        <ion-option value="5">Complete</ion-option>\n        <ion-option value="4">Paid</ion-option>\n      </ion-select>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- <ion-row *ngIf="dofDetail.status!=undefined ">\n    <ion-col class="colorderbutton" *ngIf="dofDetail.status==2" [hidden]="dofDetail.status!=2">\n      <button ion-button class="orderbutton accept" (click)="acceptpo(dofDetail.id)">Accept</button>\n    </ion-col>\n    <ion-col class="colorderbutton" *ngIf="dofDetail.status!=2" [hidden]="dofDetail.status==4||dofDetail.status==1">\n      <button ion-button class="orderbutton cancel" (click)="actionClick(dofDetail.id)">Action</button>\n    </ion-col>\n    <ion-col class="colorderbutton" *ngIf="dofDetail.status==2" [hidden]="dofDetail.status!=2">\n      <button ion-button class="orderbutton revise" (click)="showConfirm(dofDetail.id)">Decline</button>\n    </ion-col>\n  </ion-row> -->\n\n\n  <ion-row class="custom-row">\n    <ion-col col-6>\n      <button *ngIf="canceled_btn" ion-button (click)="Canceled(dofDetail.id)">Canceled</button>\n    </ion-col>\n    <ion-col col-6>\n      <button *ngIf="completed_btn" ion-button (click)="Completed(dofDetail.id)">Completed</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="custom-row">\n    <ion-col>\n      <button *ngIf="download" ion-button (click)="download()">Download</button>\n    </ion-col>\n  </ion-row>\n\n  \n\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/easypo/src/pages/porder/porder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallfunProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PorderPage);
    return PorderPage;
}());

//# sourceMappingURL=porder.js.map

/***/ })

});
//# sourceMappingURL=1.js.map