webpackJsonp([1],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups__ = __webpack_require__(289);
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TeamDetail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(201);
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
    function GroupsPage(navCtrl, navParams, database, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.storage = storage;
        this.groupA = [];
        this.groupB = [];
        this.groupC = [];
        this.getInfoGroup(1);
        this.getInfoGroup(2);
        this.getInfoGroup(3);
    }
    GroupsPage.prototype.getInfoGroup = function (idGroup) {
        var _this = this;
        //get group info
        var key = "group-" + idGroup;
        this.storage.get(key).then(function (val) {
            //Obtenemos los id's de los equipos
            console.log("Resultado: " + val);
            var dividido = val.split(",");
            var equiposGrupo;
            for (var _i = 0, dividido_1 = dividido; _i < dividido_1.length; _i++) {
                var id = dividido_1[_i];
                //Buscar los detail de cada equipo
                _this.storage.get("detail-" + id).then(function (valDetail) {
                    var divididoDetail = valDetail.split(",");
                    var newTeamDeatil = new __WEBPACK_IMPORTED_MODULE_3__TeamDetail__["a" /* TeamDetail */](Number(id), divididoDetail[0], divididoDetail[1], Number(divididoDetail[2]), Number(divididoDetail[3]), Number(divididoDetail[4]), Number(divididoDetail[5]), Number(divididoDetail[6]));
                    if (idGroup == 1) {
                        _this.groupA.push(newTeamDeatil);
                    }
                    if (idGroup == 2) {
                        _this.groupB.push(newTeamDeatil);
                    }
                    if (idGroup == 3) {
                        _this.groupC.push(newTeamDeatil);
                    }
                });
            }
        });
    };
    GroupsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupsPage');
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"C:\Users\ASUS\Desktop\AmericaCup-Ionic\src\pages\groups\groups.html"*/'<!--\n\n  Generated template for the GroupsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Groups</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-label>Group A</ion-label>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-label>#</ion-label>\n\n        <ion-label>Teams</ion-label>\n\n        <ion-label>M</ion-label>\n\n        <ion-label>W</ion-label>\n\n        <ion-label>D</ion-label>\n\n        <ion-label>L</ion-label>\n\n        <ion-label>Pts</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngFor="let team of groupA; index as i" detail>\n\n        <ion-label>{{i+1}}</ion-label>\n\n        <ion-label>\n\n            <ion-thumbnail>\n\n              <ion-img [src]="team.image" width="48" height="48"></ion-img>\n\n            </ion-thumbnail>\n\n            {{team.name}}\n\n        </ion-label>\n\n        <ion-label>{{team.matches}}</ion-label>\n\n        <ion-label>{{team.won}}</ion-label>\n\n        <ion-label>{{team.drawn}}</ion-label>\n\n        <ion-label>{{team.lost}}</ion-label>\n\n        <ion-label>{{team.points}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-label>Group B</ion-label>\n\n  <ion-list>\n\n      <ion-item>\n\n          <ion-label>#</ion-label>\n\n          <ion-label>Teams</ion-label>\n\n          <ion-label>M</ion-label>\n\n          <ion-label>W</ion-label>\n\n          <ion-label>D</ion-label>\n\n          <ion-label>L</ion-label>\n\n          <ion-label>Pts</ion-label>\n\n      </ion-item>\n\n      <ion-item *ngFor="let team of groupB; index as i" detail>\n\n          <ion-label>{{i+1}}</ion-label>\n\n          <ion-label>\n\n              <ion-thumbnail>\n\n                <ion-img [src]="team.image" width="48" height="48"></ion-img>\n\n              </ion-thumbnail>\n\n              {{team.name}}\n\n          </ion-label>\n\n          <ion-label>{{team.matches}}</ion-label>\n\n          <ion-label>{{team.won}}</ion-label>\n\n          <ion-label>{{team.drawn}}</ion-label>\n\n          <ion-label>{{team.lost}}</ion-label>\n\n          <ion-label>{{team.points}}</ion-label>\n\n      </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-label>Group C</ion-label>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-label>#</ion-label>\n\n        <ion-label>Teams</ion-label>\n\n        <ion-label>M</ion-label>\n\n        <ion-label>W</ion-label>\n\n        <ion-label>D</ion-label>\n\n        <ion-label>L</ion-label>\n\n        <ion-label>Pts</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngFor="let team of groupC; index as i" detail>\n\n        <ion-label>{{i+1}}</ion-label>\n\n        <ion-label>\n\n            <ion-thumbnail>\n\n              <ion-img [src]="team.image" width="48" height="48"></ion-img>\n\n            </ion-thumbnail>\n\n            {{team.name}}\n\n        </ion-label>\n\n        <ion-label>{{team.matches}}</ion-label>\n\n        <ion-label>{{team.won}}</ion-label>\n\n        <ion-label>{{team.drawn}}</ion-label>\n\n        <ion-label>{{team.lost}}</ion-label>\n\n        <ion-label>{{team.points}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Desktop\AmericaCup-Ionic\src\pages\groups\groups.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], GroupsPage);
    return GroupsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=groups.js.map

/***/ })

});
//# sourceMappingURL=1.js.map