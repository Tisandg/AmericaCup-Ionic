webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups__ = __webpack_require__(287);
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(199);
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
    function GroupsPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.getInfoGroup(1);
        this.getInfoGroup(2);
        this.getInfoGroup(3);
    }
    GroupsPage.prototype.getInfoGroup = function (idGroup) {
        var _this = this;
        //get group info
        this.database.getGroup(1).then(function (data) {
            console.log(data);
            if (idGroup == 1) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var teamA = data_1[_i];
                    _this.groupA.push(teamA);
                }
            }
            if (idGroup == 2) {
                for (var _a = 0, data_2 = data; _a < data_2.length; _a++) {
                    var teamB = data_2[_a];
                    _this.groupB.push(teamB);
                }
            }
            if (idGroup == 3) {
                for (var _b = 0, data_3 = data; _b < data_3.length; _b++) {
                    var teamC = data_3[_b];
                    _this.groupC.push(teamC);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    GroupsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupsPage');
    };
    GroupsPage.prototype.addGroupA = function (team) {
        this.groupA.push(team);
    };
    GroupsPage.prototype.addGroupB = function (team) {
        this.groupB.push(team);
    };
    GroupsPage.prototype.addGroupC = function (team) {
        this.groupC.push(team);
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"C:\Users\ASUS\Desktop\AmericaCup-Ionic\src\pages\groups\groups.html"*/'<!--\n\n  Generated template for the GroupsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Groups</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-label>Group A</ion-label>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-label>#</ion-label>\n\n        <ion-label>Teams</ion-label>\n\n        <ion-label>M</ion-label>\n\n        <ion-label>W</ion-label>\n\n        <ion-label>D</ion-label>\n\n        <ion-label>L</ion-label>\n\n        <ion-label>Pts</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngFor="let team of groupA; index as i" detail>\n\n        <ion-label>{{i+1}}</ion-label>\n\n        <ion-label>\n\n            <ion-thumbnail>\n\n              <ion-img [src]="team.image" width="48" height="48"></ion-img>\n\n            </ion-thumbnail>\n\n            {{team.name}}\n\n        </ion-label>\n\n        <ion-label>{{team.matches}}</ion-label>\n\n        <ion-label>{{team.won}}</ion-label>\n\n        <ion-label>{{team.drawn}}</ion-label>\n\n        <ion-label>{{team.lost}}</ion-label>\n\n        <ion-label>{{team.points}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-label>Group B</ion-label>\n\n  <ion-list>\n\n      <ion-item>\n\n          <ion-label>#</ion-label>\n\n          <ion-label>Teams</ion-label>\n\n          <ion-label>M</ion-label>\n\n          <ion-label>W</ion-label>\n\n          <ion-label>D</ion-label>\n\n          <ion-label>L</ion-label>\n\n          <ion-label>Pts</ion-label>\n\n      </ion-item>\n\n      <ion-item *ngFor="let team of groupB; index as i" detail>\n\n          <ion-label>{{i+1}}</ion-label>\n\n          <ion-label>\n\n              <ion-thumbnail>\n\n                <ion-img [src]="team.image" width="48" height="48"></ion-img>\n\n              </ion-thumbnail>\n\n              {{team.name}}\n\n          </ion-label>\n\n          <ion-label>{{team.matches}}</ion-label>\n\n          <ion-label>{{team.won}}</ion-label>\n\n          <ion-label>{{team.drawn}}</ion-label>\n\n          <ion-label>{{team.lost}}</ion-label>\n\n          <ion-label>{{team.points}}</ion-label>\n\n      </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-label>Group C</ion-label>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-label>#</ion-label>\n\n        <ion-label>Teams</ion-label>\n\n        <ion-label>M</ion-label>\n\n        <ion-label>W</ion-label>\n\n        <ion-label>D</ion-label>\n\n        <ion-label>L</ion-label>\n\n        <ion-label>Pts</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngFor="let team of groupC; index as i" detail>\n\n        <ion-label>{{i+1}}</ion-label>\n\n        <ion-label>\n\n            <ion-thumbnail>\n\n              <ion-img [src]="team.image" width="48" height="48"></ion-img>\n\n            </ion-thumbnail>\n\n            {{team.name}}\n\n        </ion-label>\n\n        <ion-label>{{team.matches}}</ion-label>\n\n        <ion-label>{{team.won}}</ion-label>\n\n        <ion-label>{{team.drawn}}</ion-label>\n\n        <ion-label>{{team.lost}}</ion-label>\n\n        <ion-label>{{team.points}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Desktop\AmericaCup-Ionic\src\pages\groups\groups.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _c || Object])
    ], GroupsPage);
    return GroupsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=groups.js.map

/***/ })

});
//# sourceMappingURL=1.js.map