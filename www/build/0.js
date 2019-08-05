webpackJsonp([0],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesPageModule", function() { return MatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matches__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchesPageModule = /** @class */ (function () {
    function MatchesPageModule() {
    }
    MatchesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__matches__["a" /* MatchesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__matches__["a" /* MatchesPage */]),
            ],
        })
    ], MatchesPageModule);
    return MatchesPageModule;
}());

//# sourceMappingURL=matches.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_constants_app_constants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Match__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Team__ = __webpack_require__(287);
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
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchesPage = /** @class */ (function () {
    function MatchesPage(navCtrl, navParams, http, appConstants, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.database = database;
        this.matches = [];
        this.teams = [];
        this.teamsId = [];
        this.appConstants = appConstants;
        this.getMatches(1);
        this.getMatches(2);
        this.getMatches(3);
        this.mostrarMatches();
    }
    MatchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchesPage');
    };
    MatchesPage.prototype.getMatches = function (groupId) {
        var _this = this;
        var url = 'https://cors-anywhere.herokuapp.com/';
        if (groupId == 1) {
            url = url + this.appConstants.getGroupA();
        }
        if (groupId == 2) {
            url = url + this.appConstants.getGroupB();
        }
        if (groupId == 3) {
            url = url + this.appConstants.getGroupC();
        }
        //let url = 'https://cors-anywhere.herokuapp.com/'+this.appConstants.getGroupA();
        var data = this.http.get(url);
        data.subscribe(function (result) {
            for (var _i = 0, _a = result.data.match; _i < _a.length; _i++) {
                var item = _a[_i];
                console.log(item);
                var imageA = "assets/imgs/Flags/" + item.home_name.toLowerCase() + ".png";
                var imageB = "assets/imgs/Flags/" + item.away_name.toLowerCase() + ".png";
                var newMatch = new __WEBPACK_IMPORTED_MODULE_5__Match__["a" /* Match */](item.id, item.home_id, item.away_id, item.home_name, item.away_name, item.score, item.date, item.status, imageA, imageB);
                _this.matches.push(newMatch);
                //save matches
                _this.database.saveMatch(newMatch).then(function (data) {
                    console.log(data);
                }, function (error) {
                    console.log(error);
                });
                console.log(newMatch);
                //Agregar equipos
                if (_this.teamsId.indexOf(item.home_id) == -1) {
                    //Agregarlo
                    var newTeam = new __WEBPACK_IMPORTED_MODULE_6__Team__["a" /* Team */](item.home_id, item.home_name, imageA, groupId, 0);
                    _this.teams.push(newTeam);
                    _this.teamsId.push(item.home_id);
                }
                if (_this.teamsId.indexOf(item.away_id) == -1) {
                    //Agregarlo
                    var newTeam = new __WEBPACK_IMPORTED_MODULE_6__Team__["a" /* Team */](item.away_id, item.away_name, imageB, groupId, 0);
                    _this.teams.push(newTeam);
                    _this.teamsId.push(item.away_id);
                }
            }
        });
    };
    MatchesPage.prototype.mostrarMatches = function () {
        console.log("Imprimiendo!!!!!!!!!!");
        this.database.getMatches().then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    MatchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matches',template:/*ion-inline-start:"C:\Users\ASUS\Desktop\AmericaCup-Ionic\src\pages\matches\matches.html"*/'<!--\n\n  Generated template for the MatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Matches</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let match of matches" detail>\n\n          <ion-label>\n\n              {{match.nameTeamA}}\n\n          </ion-label>\n\n          <ion-label>\n\n              <ion-thumbnail>\n\n                <ion-img [src]="match.imageTeamA"></ion-img>\n\n              </ion-thumbnail>\n\n          </ion-label>\n\n          <ion-label>\n\n              {{match.score}}\n\n          </ion-label>\n\n          <ion-label>\n\n              <ion-thumbnail>\n\n                <ion-img [src]="match.imageTeamB"></ion-img>\n\n              </ion-thumbnail>\n\n          </ion-label>\n\n          <ion-label>\n\n              {{match.nameTeamB}}\n\n          </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Desktop\AmericaCup-Ionic\src\pages\matches\matches.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app_constants_app_constants__["a" /* AppConstantsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app_constants_app_constants__["a" /* AppConstantsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _e || Object])
    ], MatchesPage);
    return MatchesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=matches.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(id, name, image, group_id, favorite) {
        this.idTeam = id;
        this.name = name;
        this.image = image;
        this.group_id = group_id;
        this.favorite = favorite;
    }
    return Team;
}());

//# sourceMappingURL=Team.js.map

/***/ })

});
//# sourceMappingURL=0.js.map