webpackJsonp([0],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesPageModule", function() { return MatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matches__ = __webpack_require__(283);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_constants_app_constants__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(49);
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
    /*matches: Array<any> =[
      {
        nameTeamA: "Colombia",
        nameTeamB: "Argentina",
        score: "2-0",
        imageTeamA: "assets/imgs/Flags/colombia.png",
        imageTeamB: "assets/imgs/Flags/argentina.png"
      },
      {
        nameTeamA: "Qatar",
        nameTeamB: "Colombia",
        score: "1-0",
        imageTeamA: "assets/imgs/Flags/qatar.png",
        imageTeamB: "assets/imgs/Flags/colombia.png"
      },
      {
        nameTeamA: "Paraguay",
        nameTeamB: "Colombia",
        score: "1-0",
        imageTeamA: "assets/imgs/Flags/paraguay.png",
        imageTeamB: "assets/imgs/Flags/colombia.png"
      }
    ];*/
    function MatchesPage(navCtrl, navParams, http, appConstants) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        //appConstants:AppConstantsProvider, LiveScoreApi: LiveScoreApiProvider) {
        this.appConstants = appConstants;
        //this.LiveScoreApi = LiveScoreApi;
        this.getMatchesA();
        //this.getMatchesB();
        //this.getMatchesC();
    }
    MatchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchesPage');
    };
    MatchesPage.prototype.getMatchesA = function () {
        var _this = this;
        var url = 'https://cors-anywhere.herokuapp.com/' + this.appConstants.getGroupA();
        var data = this.http.get(url);
        data.subscribe(function (result) {
            console.log(result.data.match);
            _this.matches = result.data.match;
            //this.matches = [this.matches, this.matchesA];
        });
    };
    MatchesPage.prototype.getMatchesB = function () {
        var _this = this;
        var url = 'https://cors-anywhere.herokuapp.com/' + this.appConstants.getGroupB();
        var data = this.http.get(url);
        data.subscribe(function (result) {
            console.log(result.data.match);
            _this.matches = result.data.match;
            //this.matches = [this.matches, this.matchesB];
        });
    };
    MatchesPage.prototype.getMatchesC = function () {
        var _this = this;
        var url = 'https://cors-anywhere.herokuapp.com/' + this.appConstants.getGroupC();
        var data = this.http.get(url);
        data.subscribe(function (result) {
            console.log(result.data.match);
            _this.matches = result.data.match;
            //this.matches = [this.matches, this.matchesC];
        });
    };
    MatchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matches',template:/*ion-inline-start:"D:\Development projects\Ionic\CopaAmerica\src\pages\matches\matches.html"*/'<!--\n  Generated template for the MatchesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Matches</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n      <ion-item *ngFor="let match of matches" detail>\n          <ion-label>\n              {{match.home_name}}\n          </ion-label>\n          <ion-label>\n              <ion-thumbnail>\n                <ion-img [src]="match.home_name"></ion-img>\n              </ion-thumbnail>\n          </ion-label>\n          <ion-label>\n              {{match.score}}\n          </ion-label>\n          <ion-label>\n              <ion-thumbnail>\n                <ion-img [src]="match.away_name"></ion-img>\n              </ion-thumbnail>\n          </ion-label>\n          <ion-label>\n              {{match.away_name}}\n          </ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Development projects\Ionic\CopaAmerica\src\pages\matches\matches.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app_constants_app_constants__["a" /* AppConstantsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app_constants_app_constants__["a" /* AppConstantsProvider */]) === "function" && _d || Object])
    ], MatchesPage);
    return MatchesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=matches.js.map

/***/ })

});
//# sourceMappingURL=0.js.map