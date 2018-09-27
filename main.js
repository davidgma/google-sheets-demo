(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<p>This is a simple demonstration of how to write Angular Typescript code to use the Google Sheets API. I wrote it because when I came to work out how to do this I found a lack of a good examples elsewhere.</p> \n<p>It's actually very simple to do - you don't need to use a secret key or an API key or pass authorisation tokens about in your code. Google's OAuth and API code handle all that for you seemlessly. This contrasts with Google's own documentation which, at the time of writing, only had examples that did pass an API key and an authorisation token in the code even though the same documentation says you shouldn't put an API key in browser code and even though it works without passing an authorisation token around in the code. I am unduly stupid though so perhaps I was missing something.</p>\n<p>The underlying code for this demonstration is free open source software issued under the MIT license and can be found on Github at <a href=\"https://github.com/davidgma/google-sheets-demo\">https://github.com/davidgma/google-sheets-demo</a>. That site also contains a readme file with information about some of the notable aspects of the code that I hope you will find helpful if you want to re-use the code in your own app.</p>\n<p>I have also put the same code into a Stackblitz demo in case you like to tinker. This is at <a href=\"https://stackblitz.com/edit/google-sheets-demo\">https://stackblitz.com/edit/google-sheets-demo</a></p>\n<p>My name is David Ma and I'm the oldest, fattest and most foolish man in the world.</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}()); // End of class AboutComponent



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false // <-- debugging purposes only
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".g-signin2 {\n    float: right;\n  }\n\n  .sign-out {\n    background-color: #4285f4;\n    color: white;\n    float: right;\n    font-size: 19px;\n  \n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Demonstration of Using Google Sheets API</h1>\n<div *ngIf=\"isSignedIn\">\n\t<button class=\"sign-out\" matTooltip=\"Sign out\" (click)=\"signOut()\">Sign out\n\t</button>\n</div>\n<div [style.display]=\"googleDisplay\">\n\t<div class=\"g-signin2\" data-onsuccess=\"onSignIn\" data-theme=\"dark\">\n\t</div>\n</div>\n<nav>\n\t<a routerLink=\"/simple\" routerLinkActive=\"active\">\n\t\tSimple Demo</a>\n\t<a routerLink=\"/hooks\" routerLinkActive=\"active\">\n\t\tHooks Demo</a>\n\t<a routerLink=\"/privacy\" routerLinkActive=\"active\">\n\t\tPrivacy Policy</a>\n\t<a routerLink=\"/about\" routerLinkActive=\"active\">\n\t\tAbout</a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-auth.service */ "./src/app/google-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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



var AppComponent = /** @class */ (function () {
    function AppComponent(gdata, cd) {
        var _this = this;
        this.gdata = gdata;
        this.cd = cd;
        this.isSignedIn = false;
        this.googleDisplay = "block";
        window.onSignIn = function (googleUser) { return _this.onSignIn(googleUser); };
    }
    AppComponent.prototype.onSignIn = function (googleUser) {
        this.gdata.onSignIn(googleUser);
        this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
    };
    AppComponent.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("calling gdata signout...");
                        return [4 /*yield*/, this.gdata.signOut()];
                    case 1:
                        _a.sent();
                        console.log("gdata signout finished");
                        this.isSignedIn = this.gdata.isSignedIn;
                        this.googleDisplay = this.gdata.googleDisplay;
                        this.cd.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_google_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-auth.service */ "./src/app/google-auth.service.ts");
/* harmony import */ var _js_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js-loader.service */ "./src/app/js-loader.service.ts");
/* harmony import */ var _simple_simple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./simple/simple.component */ "./src/app/simple/simple.component.ts");
/* harmony import */ var _hooks_hooks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/hooks.component */ "./src/app/hooks/hooks.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _simple_simple_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./simple/simple-routing.module */ "./src/app/simple/simple-routing.module.ts");
/* harmony import */ var _hooks_hooks_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hooks/hooks-routing.module */ "./src/app/hooks/hooks-routing.module.ts");
/* harmony import */ var _about_about_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _privacy_privacy_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./privacy/privacy-routing.module */ "./src/app/privacy/privacy-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _simple_simple_routing_module__WEBPACK_IMPORTED_MODULE_12__["SimpleRoutingModule"],
                _hooks_hooks_routing_module__WEBPACK_IMPORTED_MODULE_13__["HooksRoutingModule"],
                _privacy_privacy_routing_module__WEBPACK_IMPORTED_MODULE_15__["PrivacyRoutingModule"],
                _about_about_routing_module__WEBPACK_IMPORTED_MODULE_14__["AboutRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _simple_simple_component__WEBPACK_IMPORTED_MODULE_7__["SimpleComponent"],
                _hooks_hooks_component__WEBPACK_IMPORTED_MODULE_8__["HooksComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyComponent"],
                _not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            providers: [
                _js_loader_service__WEBPACK_IMPORTED_MODULE_6__["JsLoaderService"],
                _google_auth_service__WEBPACK_IMPORTED_MODULE_5__["GoogleAuthService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/google-auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/google-auth.service.ts ***!
  \****************************************/
/*! exports provided: GoogleAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthService", function() { return GoogleAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _js_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-loader.service */ "./src/app/js-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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


var GoogleAuthService = /** @class */ (function () {
    function GoogleAuthService(loader) {
        this.loader = loader;
        this.javascriptFile = "https://apis.google.com/js/platform.js";
        this.isSignedIn = false;
        this.googleDisplay = "block";
        this.signIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log("Loading the javascript API file.");
        this.loader.loadjs(this.javascriptFile).then(function () {
            // file loaded
        });
    }
    GoogleAuthService.prototype.onSignIn = function (googleUser) {
        this.googleUser = googleUser;
        console.log("signed in");
        this.isSignedIn = true;
        this.googleDisplay = "none";
        this.signIn.emit();
    };
    GoogleAuthService.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auth2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Signing out.');
                        auth2 = gapi.auth2.getAuthInstance();
                        return [4 /*yield*/, auth2.signOut().then(function () {
                                console.log("signed out");
                                _this.isSignedIn = false;
                                _this.googleDisplay = "block";
                                _this.signedOut.emit();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleAuthService.prototype.loadClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    gapi.load("client", function () {
                        resolve();
                    }, function (error) {
                        console.log("Error loading client: "
                            + JSON.stringify(error));
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    GoogleAuthService.prototype.loadSheetsAPI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4')
                        .then(function () {
                        resolve();
                    }, function (error) {
                        console.log("Error loading SheetsAPI: "
                            + JSON.stringify(error));
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    GoogleAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_js_loader_service__WEBPACK_IMPORTED_MODULE_1__["JsLoaderService"]])
    ], GoogleAuthService);
    return GoogleAuthService;
}());



/***/ }),

/***/ "./src/app/hooks/hooks-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/hooks/hooks-routing.module.ts ***!
  \***********************************************/
/*! exports provided: HooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HooksRoutingModule", function() { return HooksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hooks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks.component */ "./src/app/hooks/hooks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'hooks', component: _hooks_component__WEBPACK_IMPORTED_MODULE_2__["HooksComponent"] }
];
var HooksRoutingModule = /** @class */ (function () {
    function HooksRoutingModule() {
    }
    HooksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], HooksRoutingModule);
    return HooksRoutingModule;
}());



/***/ }),

/***/ "./src/app/hooks/hooks.component.css":
/*!*******************************************!*\
  !*** ./src/app/hooks/hooks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hooks/hooks.component.html":
/*!********************************************!*\
  !*** ./src/app/hooks/hooks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<section *ngFor=\"let line of output\">\n    {{ line }}\n</section>\n"

/***/ }),

/***/ "./src/app/hooks/hooks.component.ts":
/*!******************************************!*\
  !*** ./src/app/hooks/hooks.component.ts ***!
  \******************************************/
/*! exports provided: HooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HooksComponent", function() { return HooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-auth.service */ "./src/app/google-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HooksComponent = /** @class */ (function () {
    function HooksComponent(gdata) {
        var _this = this;
        this.gdata = gdata;
        this.output = new Array();
        this.output.push("Sign in to see what information it provides.");
        // Check whether it's already signed in, otherwise wait for it
        // to be.
        if (this.gdata.isSignedIn) {
            this.showData();
        }
        // Listen for the signin
        this.gdata.signIn.subscribe(function () {
            _this.showData();
        });
        // Listen for signout
        this.gdata.signedOut.subscribe(function () {
            _this.clearData();
        });
    }
    HooksComponent.prototype.ngOnInit = function () { };
    HooksComponent.prototype.showData = function () {
        // Useful data for your client-side scripts:
        var profile = this.gdata.googleUser.getBasicProfile();
        this.output.length = 0;
        this.output.push("Here are some of the data available from OAuth:");
        this.output.push("(But note that you don't need to code with any of it to access spreadsheets - Google handles it all for you.)");
        this.output.push("ID: " + profile.getId());
        // Don't send this directly to your server!
        this.output.push('Full Name: ' + profile.getName());
        this.output.push('Given Name: ' + profile.getGivenName());
        this.output.push('Family Name: ' + profile.getFamilyName());
        this.output.push("Image URL: " + profile.getImageUrl());
        this.output.push("Email: " + profile.getEmail());
        // The ID token you need to pass to your backend:
        var id_token = this.gdata.googleUser.getAuthResponse().id_token;
        this.output.push("ID Token: " + id_token);
    };
    HooksComponent.prototype.clearData = function () {
        this.output.length = 0;
        this.output.push("Sign in to see what information it provides.");
    };
    HooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hooks',
            template: __webpack_require__(/*! ./hooks.component.html */ "./src/app/hooks/hooks.component.html"),
            styles: [__webpack_require__(/*! ./hooks.component.css */ "./src/app/hooks/hooks.component.css")]
        }),
        __metadata("design:paramtypes", [_google_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAuthService"]])
    ], HooksComponent);
    return HooksComponent;
}()); // End of class HooksComponent



/***/ }),

/***/ "./src/app/js-loader.service.ts":
/*!**************************************!*\
  !*** ./src/app/js-loader.service.ts ***!
  \**************************************/
/*! exports provided: JsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsLoaderService", function() { return JsLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JsLoaderService = /** @class */ (function () {
    function JsLoaderService() {
    }
    JsLoaderService.prototype.loadjs = function (url) {
        var p = new Promise(function (resolve) {
            var node = document.createElement('script');
            node.src = url;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0]
                .appendChild(node);
            node.onload = function () {
                console.log("The javascript file " + url + " has been loaded.");
                resolve();
            };
        });
        return p;
    };
    JsLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JsLoaderService);
    return JsLoaderService;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/privacy/privacy-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/privacy/privacy-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PrivacyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyRoutingModule", function() { return PrivacyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy.component */ "./src/app/privacy/privacy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'privacy', component: _privacy_component__WEBPACK_IMPORTED_MODULE_2__["PrivacyComponent"] }
];
var PrivacyRoutingModule = /** @class */ (function () {
    function PrivacyRoutingModule() {
    }
    PrivacyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], PrivacyRoutingModule);
    return PrivacyRoutingModule;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.component.css":
/*!***********************************************!*\
  !*** ./src/app/privacy/privacy.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/privacy/privacy.component.html":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h2>Privacy policy.</h2>\n<p>\nThis privacy policy is a requirement for complying with the General Data Protection Regulation.\n</p>\n<p>\nThis web application ('app') is a simple demonstration of code to access data from a user's own Google Sheets spreadsheet using Google's Sheets API.\n</p>\n<ul>\n<li>It does not use cookies.</li>\n<li>Any data, personal or otherwise, that a user accesses while using the app is not stored in any permanent way or sent anywhere. When the web page is closed, the data is no longer held anywhere other than in the original locations from which the data was retrieved.</li>\n<li>No data, personal or otherwise, is used or processed in any way other than for the demonstration.</li>\n<li>The platform hosting this app may provide analytical data on the use of the website but this will not store any personal details.</li>\n<li>This is not a commercial site, provides no commercial services, receives no monetary compensation and has no interaction with third party commercial services.</li>\n<li>The software contained in the app is free open source software issued under the MIT license. See the LICENCE file in the source code for details.</li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.css */ "./src/app/privacy/privacy.component.css")]
        })
    ], PrivacyComponent);
    return PrivacyComponent;
}()); // End of class PrivacyComponent



/***/ }),

/***/ "./src/app/simple/simple-request.ts":
/*!******************************************!*\
  !*** ./src/app/simple/simple-request.ts ***!
  \******************************************/
/*! exports provided: SimpleRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRequest", function() { return SimpleRequest; });
var SimpleRequest = /** @class */ (function () {
    function SimpleRequest() {
    }
    return SimpleRequest;
}());



/***/ }),

/***/ "./src/app/simple/simple-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/simple/simple-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SimpleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRoutingModule", function() { return SimpleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple.component */ "./src/app/simple/simple.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'simple', component: _simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"] }
];
var SimpleRoutingModule = /** @class */ (function () {
    function SimpleRoutingModule() {
    }
    SimpleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], SimpleRoutingModule);
    return SimpleRoutingModule;
}());



/***/ }),

/***/ "./src/app/simple/simple.component.css":
/*!*********************************************!*\
  !*** ./src/app/simple/simple.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n "

/***/ }),

/***/ "./src/app/simple/simple.component.html":
/*!**********************************************!*\
  !*** ./src/app/simple/simple.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<form (ngSubmit)=\"onSubmit()\" #demoForm=\"ngForm\">\n\t<div class=\"form-group\">\n\t\t<label>Spreadsheet ID (the long text between the /d/ and the /edit/ in the address)</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"sheetId\" required [(ngModel)]=\"model.sheetId\" name=\"sheetId\" #sheetId=\"ngModel\">\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label>Range e.g. Sheet1!A1:C</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"range\" [(ngModel)]=\"model.range\" name=\"range\">\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n</form>\n<br>\n<pre>{{ output }}</pre>\n"

/***/ }),

/***/ "./src/app/simple/simple.component.ts":
/*!********************************************!*\
  !*** ./src/app/simple/simple.component.ts ***!
  \********************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _simple_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-request */ "./src/app/simple/simple-request.ts");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-auth.service */ "./src/app/google-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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




var SimpleComponent = /** @class */ (function () {
    function SimpleComponent(cd, gauth) {
        this.cd = cd;
        this.gauth = gauth;
        this.model = new _simple_request__WEBPACK_IMPORTED_MODULE_1__["SimpleRequest"]();
        this.output = "Enter a spreadsheet id and range then press submit";
    }
    SimpleComponent.prototype.ngOnInit = function () { };
    SimpleComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.output = "Processing submission...";
                        console.log(JSON.stringify(this.model));
                        return [4 /*yield*/, this.gauth.loadClient()];
                    case 1:
                        _a.sent();
                        console.log("client loaded");
                        return [4 /*yield*/, this.gauth.loadSheetsAPI()];
                    case 2:
                        _a.sent();
                        console.log("sheets v4 loaded");
                        gapi.client.sheets.spreadsheets.values.get({
                            spreadsheetId: this.model.sheetId,
                            range: this.model.range
                        }).then(function (response) {
                            console.log("Range retrieved: "
                                + response.result.values[0]);
                            _this.output = "Data found: \n";
                            for (var _i = 0, _a = response.result.values; _i < _a.length; _i++) {
                                var v = _a[_i];
                                _this.output += v + "\n";
                            }
                            _this.cd.detectChanges();
                        }, function (error) {
                            _this.output = "Error: \n";
                            _this.output += error.result.error.message + "\n";
                            _this.cd.detectChanges();
                        });
                        return [2 /*return*/];
                }
            });
        });
    }; // End of onSubmit method
    SimpleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple',
            template: __webpack_require__(/*! ./simple.component.html */ "./src/app/simple/simple.component.html"),
            styles: [__webpack_require__(/*! ./simple.component.css */ "./src/app/simple/simple.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _google_auth_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthService"]])
    ], SimpleComponent);
    return SimpleComponent;
}()); // End of class SimpleComponent



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/david/local/dev/google-sheets-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map