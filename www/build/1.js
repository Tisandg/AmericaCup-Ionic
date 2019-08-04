webpackJsonp([1],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupsPageModule = /** @class */ (function () {
    function GroupsPageModule() {
    }
    GroupsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__groups__["a" /* GroupsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groups__["a" /* GroupsPage */]),
            ],
        })
    ], GroupsPageModule);
    return GroupsPageModule;
}());

//# sourceMappingURL=groups.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupsA = [
            {
                imageFlag: "",
                name: "Teams",
                m: "M",
                w: "W",
                d: "E",
                l: "L",
                pts: "Pts"
            },
            {
                imageFlag: "assets/imgs/Flags2/Brasil1.png",
                name: "Brasil",
                m: "3",
                w: "2",
                d: "1",
                l: "0",
                pts: "7"
            },
            {
                imageFlag: "assets/imgs/Flags2/Venezuela1.png",
                name: "Venezuela",
                m: "3",
                w: "1",
                d: "2",
                l: "0",
                pts: "5"
            },
            {
                imageFlag: "assets/imgs/Flags2/Peru1.png",
                name: "Peru",
                m: "3",
                w: "1",
                d: "1",
                l: "1",
                pts: "4"
            },
            {
                imageFlag: "assets/imgs/Flags2/Bolivia1.png",
                name: "Bolivia",
                m: "3",
                w: "0",
                d: "0",
                l: "3",
                pts: "0"
            }
        ];
        this.groupsB = [
            {
                imageFlag: "",
                name: "Teams",
                m: "M",
                w: "W",
                d: "E",
                l: "L",
                pts: "Pts"
            },
            {
                imageFlag: "assets/imgs/Flags2/Colombia1.png",
                name: "Colombia",
                m: "3",
                w: "3",
                d: "0",
                l: "0",
                pts: "9"
            },
            {
                imageFlag: "assets/imgs/Flags2/Argentina1.png",
                name: "Argentina",
                m: "3",
                w: "1",
                d: "1",
                l: "1",
                pts: "4"
            },
            {
                imageFlag: "assets/imgs/Flags2/Paraguay1.png",
                name: "Paraguay",
                m: "3",
                w: "0",
                d: "2",
                l: "1",
                pts: "2"
            },
            {
                imageFlag: "assets/imgs/Flags2/Catar1.png",
                name: "Catar",
                m: "3",
                w: "0",
                d: "1",
                l: "2",
                pts: "1"
            }
        ];
        this.groupsC = [
            {
                imageFlag: "",
                name: "Teams",
                m: "M",
                w: "W",
                d: "E",
                l: "L",
                pts: "Pts"
            },
            {
                imageFlag: "assets/imgs/Flags2/Uruguay1.png",
                name: "Uruguay",
                m: "3",
                w: "2",
                d: "1",
                l: "0",
                pts: "7"
            },
            {
                imageFlag: "assets/imgs/Flags2/Chile1.png",
                name: "Chile",
                m: "3",
                w: "2",
                d: "0",
                l: "1",
                pts: "6"
            },
            {
                imageFlag: "assets/imgs/Flags2/Japon1.png",
                name: "Japan",
                m: "3",
                w: "0",
                d: "2",
                l: "1",
                pts: "2"
            },
            {
                imageFlag: "assets/imgs/Flags2/Ecuador1.png",
                name: "Ecuador",
                m: "3",
                w: "0",
                d: "1",
                l: "2",
                pts: "1"
            }
        ];
    }
    GroupsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupsPage');
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"C:\Users\User\Documents\IonicProjects\AmericaCup-Ionic\src\pages\groups\groups.html"*/'<!--\n\n  Generated template for the GroupsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Groups</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-label>Group A</ion-label>\n\n  <ion-list>\n\n    <ion-item *ngFor="let groupA of groupsA" detail>\n\n\n\n        <ion-label>\n\n            <ion-thumbnail>\n\n              <ion-img [src]="groupA.imageFlag" width="48" height="48"></ion-img>\n\n            </ion-thumbnail>\n\n        </ion-label>\n\n        <ion-label>{{groupA.name}}</ion-label>\n\n        <ion-label>{{groupA.m}}</ion-label>\n\n        <ion-label>{{groupA.w}}</ion-label>\n\n        <ion-label>{{groupA.d}}</ion-label>\n\n        <ion-label>{{groupA.l}}</ion-label>\n\n        <ion-label>{{groupA.pts}}</ion-label>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-label>Group B</ion-label>\n\n  <ion-list>\n\n    <ion-item *ngFor="let groupB of groupsB" detail>\n\n\n\n        <ion-label>\n\n            <ion-thumbnail>\n\n              <ion-img [src]="groupB.imageFlag" width="48" height="48"></ion-img>\n\n            </ion-thumbnail>\n\n        </ion-label>\n\n        <ion-label>{{groupB.name}}</ion-label>\n\n        <ion-label>{{groupB.m}}</ion-label>\n\n        <ion-label>{{groupB.w}}</ion-label>\n\n        <ion-label>{{groupB.d}}</ion-label>\n\n        <ion-label>{{groupB.l}}</ion-label>\n\n        <ion-label>{{groupB.pts}}</ion-label>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-label>Group C</ion-label>\n\n  <ion-list>\n\n    <ion-item *ngFor="let groupC of groupsC" detail>\n\n\n\n        <ion-label>\n\n            <ion-thumbnail>\n\n              <ion-img [src]="groupC.imageFlag" width="48" height="48"></ion-img>\n\n            </ion-thumbnail>\n\n        </ion-label>\n\n        <ion-label>{{groupC.name}}</ion-label>\n\n        <ion-label>{{groupC.m}}</ion-label>\n\n        <ion-label>{{groupCw}}</ion-label>\n\n        <ion-label>{{groupC.d}}</ion-label>\n\n        <ion-label>{{groupC.l}}</ion-label>\n\n        <ion-label>{{groupC.pts}}</ion-label>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Documents\IonicProjects\AmericaCup-Ionic\src\pages\groups\groups.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GroupsPage);
    return GroupsPage;
}());

//# sourceMappingURL=groups.js.map

/***/ })

});
//# sourceMappingURL=1.js.map