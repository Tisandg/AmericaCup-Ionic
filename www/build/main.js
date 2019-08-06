webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Match__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Team__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TeamDetail__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.isOpen = false;
        if (!this.isOpen) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]();
            this.storage.create({
                name: "americacup.db",
                location: "default"
            })
                .then(function (db) {
                _this.db = db;
                db.executeSql("CREATE TABLE IF NOT EXISTS team (\n                id INTEGER PRIMARY KEY,\n                name TEXT,\n                image TEXT,\n                group_id INTEGER,);", [])
                    .then(function () { return console.log('Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
                db.executeSql("CREATE TABLE IF NOT EXISTS team_detail (\n                id INTEGER PRIMARY KEY AUTOINCREMENT,\n                id_team INTEGER,\n                image TEXT,\n                matches INTEGER,\n                won INTEGER,\n                drawn INTEGER,\n                lost INTEGER,\n                points INTEGER\n            );", [])
                    .then(function () { return console.log('Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
                db.executeSql("CREATE TABLE IF NOT EXISTS match (\n              id INTEGER PRIMARY KEY,\n              id_team_a INTEGER,\n              id_team_b INTEGER,\n              name_team_a TEXT,\n              name_team_b TEXT,\n              image_team_a TEXT,\n              image_team_b TEXT,\n              score TEXT,\n              date TEXT,\n              favorite INTEGER,\n              status TEXT", [])
                    .then(function () { return console.log('Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
                _this.isOpen = true;
            }).catch(function (err) {
                console.log("error detected creating tables", err);
            });
        }
    } //End constructor
    DatabaseProvider.prototype.saveMatch = function (match) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "INSERT OR UPDATE INTO match(id, id_team_a, id_team_b, name_team_a, name_team_b,"
                + "image_team_a, image_team_b, score, date, status, favorite) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            _this.db.executeSql(sql, [match.id, match.idTeamA, match.idTeamB, match.nameTeamA, match.nameTeamB,
                match.imageTeamA, match.imageTeamB, match.score, match.date, match.status, 0]).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.saveTeams = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "INSERT OR UPDATE INTO team(id, name, image, group_id, favorite)"
                + "VALUES(?, ?, ?, ?, ?)";
            _this.db.executeSql(sql, [team.idTeam, team.name, team.image, team.group_id])
                .then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.saveTeamDetail = function (teamDetail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "INSERT OR UPDATE INTO team_detail(id, id_team,image, matches, won, drawn, lost, points)"
                + "VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
            _this.db.executeSql(sql, [teamDetail.id, teamDetail.idTeam, teamDetail.image, teamDetail.matches, teamDetail.won, teamDetail.drawn,
                teamDetail.lost, teamDetail.points])
                .then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getMatches = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM match", [])
                .then(function (data) {
                var arrayMatches = [];
                if (data.rows.lenght > 0) {
                    for (var i = 0; i < data.rows.lenght; i++) {
                        var match = new __WEBPACK_IMPORTED_MODULE_3__pages_Match__["a" /* Match */](data.rows.item(i).id, data.rows.item(i).id_team_a, data.rows.item(i).id_team_b, data.rows.item(i).name_team_a, data.rows.item(i).name_team_b, data.rows.item(i).score, data.rows.item(i).date, data.rows.item(i).status, data.rows.item(i).image_team_a, data.rows.item(i).image_team_b);
                        arrayMatches.push(match);
                    }
                }
                resolve(arrayMatches);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getTeams = function (idGroup) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM team WHERE id = ?", [idGroup])
                .then(function (data) {
                var arrayTeams = [];
                if (data.rows.lenght > 0) {
                    for (var i = 0; i < data.rows.lenght; i++) {
                        var team = new __WEBPACK_IMPORTED_MODULE_4__pages_Team__["a" /* Team */](data.rows.item(i).id, data.rows.item(i).name, data.rows.item(i).image, data.rows.item(i).group_id, data.rows.item(i).favorite);
                        arrayTeams.push(team);
                    }
                }
                resolve(arrayTeams);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.changeFavorite = function (idFavorite, valor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "UPDATE Team set favorite = ? WHERE id = ?";
            _this.db.executeSql(sql, [valor, idFavorite])
                .then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getFavoriteTeams = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM team WHERE favorite = ?", [1])
                .then(function (data) {
                var favorites = [];
                if (data.rows.lenght > 0) {
                    for (var i = 0; i < data.rows.lenght; i++) {
                        var team = new __WEBPACK_IMPORTED_MODULE_4__pages_Team__["a" /* Team */](data.rows.item(i).id, data.rows.item(i).name, data.rows.item(i).image, data.rows.item(i).group_id, data.rows.item(i).favorite);
                        favorites.push(team);
                    }
                }
                resolve(favorites);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getGroup = function (idGroup) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT team_detail.*,team.name FROM team_detail INNER JOIN team ON team_detail.id_team = team.id"
                + "WHERE team.group_id = ?", [idGroup])
                .then(function (data) {
                var teamGroup = [];
                if (data.rows.lenght > 0) {
                    for (var i = 0; i < data.rows.lenght; i++) {
                        var team = new __WEBPACK_IMPORTED_MODULE_5__pages_TeamDetail__["a" /* TeamDetail */](data.rows.item(i).id_team, data.rows.item(i).name, data.rows.item(i).image, data.rows.item(i).matches, data.rows.item(i).won, data.rows.item(i).drawn, data.rows.item(i).lost, data.rows.item(i).points);
                        team.id = data.rows.item(i).id;
                        teamGroup.push(team);
                    }
                }
                resolve(teamGroup);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstantsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AppConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppConstantsProvider = /** @class */ (function () {
    function AppConstantsProvider(http) {
        this.http = http;
        this.key = "vAE4U0iDSR3grkyB";
        this.secret = "FaaKCQX4eCxC6x7B8MG2MYFEPIUh2tSI";
        this.groupA = "https://livescore-api.com/api-client/scores/history.json?key=" + this.key + "&secret=" + this.secret + "&league=962";
        this.groupB = "https://livescore-api.com/api-client/scores/history.json?key=" + this.key + "&secret=" + this.secret + "&league=961";
        this.groupC = "https://livescore-api.com/api-client/scores/history.json?key=" + this.key + "&secret=" + this.secret + "&league=960";
    }
    AppConstantsProvider.prototype.getGroupA = function () {
        return this.groupA;
    };
    AppConstantsProvider.prototype.getGroupB = function () {
        return this.groupB;
    };
    AppConstantsProvider.prototype.getGroupC = function () {
        return this.groupC;
    };
    AppConstantsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AppConstantsProvider);
    return AppConstantsProvider;
}());

//# sourceMappingURL=app-constants.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/copa-america/copa-america.module": [
		286,
		3
	],
	"../pages/favorites/favorites.module": [
		284,
		2
	],
	"../pages/groups/groups.module": [
		285,
		1
	],
	"../pages/matches/matches.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetail; });
var TeamDetail = /** @class */ (function () {
    function TeamDetail(idTeam, name, image, matches, won, drawn, lost, points) {
        this.idTeam = idTeam;
        this.name = name;
        this.image = image;
        this.matches = matches;
        this.won = won;
        this.drawn = drawn;
        this.lost = lost;
        this.points = points;
    }
    return TeamDetail;
}());

//# sourceMappingURL=TeamDetail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_constants_app_constants__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_live_score_api_live_score_api__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups/groups.module#GroupsPageModule', name: 'GroupsPage', segment: 'groups', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/copa-america/copa-america.module#CopaAmericaPageModule', name: 'CopaAmericaPage', segment: 'copa-america', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/matches/matches.module#MatchesPageModule', name: 'MatchesPage', segment: 'matches', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_app_constants_app_constants__["a" /* AppConstantsProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_live_score_api_live_score_api__["a" /* LiveScoreApiProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Match; });
var Match = /** @class */ (function () {
    function Match(id, idTeamA, idTeamB, nameTeamA, nameTeamB, score, date, status, imageA, imageB) {
        this.id = id;
        this.idTeamA = idTeamA;
        this.idTeamB = idTeamB;
        this.nameTeamA = nameTeamA;
        this.nameTeamB = nameTeamB;
        this.score = score;
        this.date = date;
        this.status = status;
        this.imageTeamA = imageA;
        this.imageTeamB = imageB;
    }
    return Match;
}());

//# sourceMappingURL=Match.js.map

/***/ }),

/***/ 262:
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

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dataService, sqlite) {
        this.dataService = dataService;
        this.sqlite = sqlite;
        this.rootPage = "CopaAmericaPage";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ASUS\Desktop\AmericaCup-Ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\ASUS\Desktop\AmericaCup-Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveScoreApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants_app_constants__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LiveScoreApiProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LiveScoreApiProvider = /** @class */ (function () {
    function LiveScoreApiProvider(http, constantVar) {
        this.http = http;
        this.constantVar = constantVar; //Setup the local constantVar variable
        this.groupA = constantVar.getGroupA();
        this.groupB = constantVar.getGroupB();
        this.groupC = constantVar.getGroupC();
    }
    LiveScoreApiProvider.prototype.getGroupA = function () {
        return this.http.get(this.groupA);
    };
    LiveScoreApiProvider.prototype.getGroupB = function () {
        return this.http.get(this.groupB);
    };
    LiveScoreApiProvider.prototype.getGroupC = function () {
        return this.http.get(this.groupC);
    };
    LiveScoreApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__app_constants_app_constants__["a" /* AppConstantsProvider */]])
    ], LiveScoreApiProvider);
    return LiveScoreApiProvider;
}());

//# sourceMappingURL=live-score-api.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map