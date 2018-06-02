webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_module__ = __webpack_require__("./src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_app_service__ = __webpack_require__("./src/app/service/app.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__service_app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dto/appmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModel; });
var AppModel = /** @class */ (function () {
    function AppModel() {
    }
    return AppModel;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"loginBlock\">\r\n  <div class=\"login\">\r\n     <h1 class=\"mb-3 logoLogin\">API GENERATOR</h1>\r\n    <form class=\"floatingForm\">\r\n      <div class=\"form-group position-relative\">\r\n        <input type=\"text\" class=\"form-control relative\" required=\"\">\r\n        <label class=\"floating-label\">User Name<sup>*</sup></label>\r\n      </div>\r\n      <div class=\"form-group position-relative\">\r\n        <input type=\"text\" class=\"form-control relative\" required=\"\">\r\n        <label class=\"floating-label\">Password<sup>*</sup></label>\r\n      </div>\r\n      <a class=\"btn btn-primary\" routerLink=\"/user/home\">SIGNIN</a>\r\n      <a class=\"btn btn-primary\" routerLink=\"/signup\">SIGNUP</a>\r\n  </form>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = '/api/generate';
    }
    AppService.prototype.build = function (app) {
        debugger;
        this.http.post(this.url, app).subscribe(function (data) {
            debugger;
        });
    };
    AppService.prototype.download = function (app) {
        this.url = '/api/download?fileName=' + app;
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/zip;' });
        debugger;
        this.http.get(this.url, { headers: { 'Content-Type': 'application/json;' } }).subscribe(this.downloadFile);
    };
    AppService.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'zip' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    AppService.prototype.handleError = function (error) {
        debugger;
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".SignupBlock{\r\n    background:#000 url('background.08c474412481318ed530.jpg') no-repeat;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover; padding:50px 0 25px 0;    \r\n}\r\n.SignupBlock .Signup{\r\n    max-width: 300px; background: #fff; padding: 20px 20px  25px 20px; width: 100%; margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"loginBlock\">\r\n  <div class=\"login\">\r\n    <h1 class=\"mb-3 logoLogin\">API GENERATOR</h1>\r\n    <form class=\"floatingForm\">\r\n      <div class=\"form-group position-relative\">\r\n        <input type=\"text\" class=\"form-control relative\" required=\"\">\r\n        <label class=\"floating-label\">User Name<sup>*</sup></label>\r\n      </div>\r\n      <div class=\"form-group position-relative\">\r\n        <input type=\"text\" class=\"form-control relative\" required=\"\">\r\n        <label class=\"floating-label\">Email Address<sup>*</sup></label>\r\n      </div>\r\n      <div class=\"form-group position-relative\">\r\n        <input type=\"text\" class=\"form-control relative\" required=\"\">\r\n        <label class=\"floating-label\">Phone Number<sup>*</sup></label>\r\n      </div>\r\n      <div class=\"form-group position-relative\">\r\n        <input type=\"text\" class=\"form-control relative\" required=\"\">\r\n        <label class=\"floating-label\">Location<sup>*</sup></label>\r\n      </div>\r\n      <div class=\"form-group position-relative\">\r\n        <input type=\"text\" class=\"form-control relative\" required=\"\">\r\n        <label class=\"floating-label\">Password<sup>*</sup></label>\r\n      </div>\r\n      <a class=\"btn btn-primary\" routerLink=\"/user/home\">SIGNIN</a>\r\n      <a class=\"btn btn-primary\" routerLink=\"/signup\">SIGNUP</a>\r\n  </form>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-white sections min-height500\">\r\n    <div class=\"title\">Sed pellentesque sem </div>\r\n    <div class=\"content\">Sed pellentesque sem et posuere congue. Quisque finibus facilisis quam, quis feugiat tortor bibendum eget. Donec interdum\r\n        lectus id leo auctor vulputate. Maecenas viverra, arcu eget volutpat posuere dolor.</div>\r\n</section>"

/***/ }),

/***/ "./src/app/user/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/user/home/home.component.html"),
            styles: [__webpack_require__("./src/app/user/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/user/report-generator-view/report-generator-view.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-lg{\r\n    max-width: 1200px;\r\n}\r\n.reports .edit{\r\nposition: absolute; top:0px; right:25px; cursor: pointer;\r\n}\r\n.reports .delete{\r\nposition: absolute; top:1px; right:5px; cursor: pointer;\r\n}\r\n.reports .card{\r\nmin-width: 250px;\r\n}\r\n.reports .card .table{\r\n    margin-top: 0.6rem; margin-bottom: 0;\r\n}\r\n.reports .card .table tr td{\r\n    padding:0rem 0.5rem 0.3rem 0.5rem;\r\n}\r\n.reports h3{\r\n        font-size: 16px;\r\n    text-transform: uppercase;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 2px;\r\n    margin: 0;\r\n}\r\n.reports .card-body{\r\n    padding: 1.4rem  0.35rem  0.35rem  0.35rem;\r\n}\r\n.reports .table-bordered td,.reports .table-bordered th {\r\n    border: 1px solid #f7f4f4;\r\n}\r\n.reports .table-bordered tr{\r\n    background: #f7f4f4;\r\n}\r\n.reports .table-bordered tr:nth-child(even){\r\n    background: #fff;\r\n}\r\n.AddDynamicColmn{\r\n        background: #f9f9f9;\r\n    padding: 0.5rem 0.5rem 0.5rem 0.5rem;\r\n    border: 1px solid #efefef;\r\n}\r\n.AddDynamicColmn .close{\r\n    position: absolute;\r\n    right: 12px;\r\n    top: -4px;\r\n    color: #F00;\r\n    font-size: 12px;\r\n    opacity: 1;\r\n    font-weight: bold;\r\n}\r\n.AddDynamicColmn .close:hover{\r\n    color: #000;\r\n}"

/***/ }),

/***/ "./src/app/user/report-generator-view/report-generator-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-white p-3 mb-2\">\r\n    <div class=\"row\">\r\n        <div class=\"col-6 form-inline\">\r\n            <label class=\"pr-2\">Application Name :</label>\r\n            <input type=\"text\" class=\"form-control mr-2\" [(ngModel)]=\"appModel.appName\" />\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n            <div class=\"btn-group\">\r\n                <button type=\"button\" class=\"edit btn btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#edit\" (click)=\"addForm()\"><i class=\"fas fa-plus-square\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"saveLocal()\"><i class=\"far fa-save\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#relationship\"><i class=\"fas fa-link\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"build()\"><i class=\"fab fa-simplybuilt\"></i></button>\r\n                <a class=\"btn btn-outline-secondary\" href=\"/api/download?fileName={{appModel.appName}}\"><i class=\"fas fa-download\"></i></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n<section class=\"bg-white p-2\">\r\n    <div class=\"reports\">\r\n        <!--Card Start-->\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-sm-4 pb-4\" *ngFor=\"let entity of appModel.entites\">\r\n                <div class=\"card position-relative rounded-0\">\r\n                    <div class=\"card-body\">\r\n                        <a class=\"edit\" data-toggle=\"modal\" data-target=\"#edit\" (click)=\"editForm(entity)\"><i class=\"far fa-edit\"></i></a>\r\n                        <a class=\"delete\"><i class=\"far fa-window-close\"></i></a>\r\n                        <h3>{{entity.name}}</h3>\r\n                        <table class=\"table table-bordered\">\r\n                            <tr *ngFor=\"let column of entity.columns\">\r\n                                <td>{{column.name}}</td>\r\n                                <td>{{column.type}}</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!--Card end-->\r\n    </div>\r\n    <!-- <p>{{appModel|json}}</p> -->\r\n</section>\r\n\r\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <form [formGroup]=\"entityForm\">\r\n            <div class=\"modal-content rounded-0\">\r\n                <div class=\"modal-header rounded-0\">\r\n                    {{formMode}} Table Details\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"form-inline mb-2\">\r\n                        <label class=\"mr-2\">Table Name:</label>\r\n                        <input type=\"text\" class=\"form-control mr-2\" id=\"exampleInputPassword1\" formControlName=\"name\" placeholder=\"Table Name\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addItem()\">Add Column</button>\r\n                    </div>\r\n                    <div class=\"position-relative my-2 AddDynamicColmn\" formArrayName=\"columns\" *ngFor=\"let column of entityForm.get('columns').controls; let col = index;\">\r\n                        <div class=\"row\" [formGroupName]=\"col\">\r\n                            <div class=\"col-sm-3\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"name\" placeholder=\"Column Name\">\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"type\" placeholder=\"Data Type\">\r\n                                        <option *ngFor=\"let dataType of dataTypes\" [value]=\"dataType\">{{dataType}}</option>\r\n                                    </select>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-inline mb-1 mt-1\">\r\n                                    <div class=\"form-check pr-4\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" formControlName=\"mandatory\">\r\n                                        <label class=\"form-check-label\" for=\"exampleCheck1\">Nullable</label>\r\n                                    </div>\r\n                                    <div class=\"form-check pr-4\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" formControlName=\"primary\">\r\n                                        <label class=\"form-check-label\" for=\"exampleCheck1\">Primary Key</label>\r\n                                    </div>\r\n                                    <div class=\"form-check\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" formControlName=\"autoGen\">\r\n                                        <label class=\"form-check-label\" for=\"exampleCheck1\">Auto Gene</label>\r\n                                    </div>\r\n                                    <a class=\"close\" (click)=\"remove(col)\"><i class=\"far fa-trash-alt\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <p>{{entityForm.value|json}}</p> -->\r\n                </div>\r\n                <div class=\"modal-footer rounded-0\">\r\n                    <button type=\"button\" #saveBtn class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"save()\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">close</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"relationship\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <form [formGroup]=\"entityForm\">\r\n            <div class=\"modal-content rounded-0\">\r\n                <div class=\"modal-header rounded-0\">\r\n                    Relation Table Details\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"form-inline mb-2\">\r\n                        <label class=\"mr-2\">Table Name:</label>\r\n                        <select class=\"form-control mr-2\">\r\n                            <option>sdfsdf</option>\r\n                        </select>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addItem()\">Add Column</button>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"position-relative my-2 AddDynamicColmn\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <select class=\"form-control mr-2\">\r\n                            <option>sdfsdf</option>\r\n                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <select class=\"form-control mr-2\">\r\n                            <option>sdfsdf</option>\r\n                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n<div class=\"col-sm-6\">\r\n                            <div class=\"position-relative my-2 AddDynamicColmn\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <select class=\"form-control mr-2\">\r\n                            <option>sdfsdf</option>\r\n                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <select class=\"form-control mr-2\">\r\n                            <option>sdfsdf</option>\r\n                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"modal-footer rounded-0\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">close</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/report-generator-view/report-generator-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportGeneratorViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dto_appmodel__ = __webpack_require__("./src/app/dto/appmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_app_service__ = __webpack_require__("./src/app/service/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportGeneratorViewComponent = /** @class */ (function () {
    function ReportGeneratorViewComponent(fb, appService) {
        this.fb = fb;
        this.appService = appService;
        this.formMode = 'Add';
        this.columns = [];
        this.dataTypes = ['String', 'Integer', 'Long', 'Double', 'Date', 'LocalDate', 'LocalDateTime', 'Boolean'];
    }
    ReportGeneratorViewComponent.prototype.ngOnInit = function () {
        this.appModel = new __WEBPACK_IMPORTED_MODULE_2__dto_appmodel__["a" /* AppModel */]();
        this.appModel.entites = new Array();
        this.appModel.appName = '';
        this.appModel.packageName = '';
        if (localStorage.getItem('data')) {
            this.appModel = JSON.parse(localStorage.getItem('data'));
        }
        this.init();
    };
    ReportGeneratorViewComponent.prototype.init = function () {
        this.entityForm = this.fb.group({
            name: '',
            columns: this.fb.array(this.formMode == 'Add' ? [this.createItem()] : [])
        });
    };
    ReportGeneratorViewComponent.prototype.createItem = function () {
        return this.fb.group({
            name: '',
            type: '',
            mandatory: false,
            primary: false,
            unique: false,
            autoGen: false,
            relation: this.fb.group({
                columnName: '',
                tableName: '',
                relationType: ''
            })
        });
    };
    ReportGeneratorViewComponent.prototype.addItem = function () {
        var items = this.entityForm.get('columns');
        items.push(this.createItem());
        this.columns.push(this.createItem());
    };
    ReportGeneratorViewComponent.prototype.save = function () {
        var _this = this;
        if (this.formMode == 'Edit') {
            this.appModel.entites = this.appModel.entites.filter(function (data) { return data.name !== _this.entityForm.value.name; });
        }
        var entity = this.entityForm.value;
        if (!entity.columns.relation || !entity.columns.relation.columnName) {
            entity.columns.forEach(function (column) {
                column.relation = { undefined: undefined };
            });
        }
        debugger;
        this.appModel.entites.push(entity);
    };
    ReportGeneratorViewComponent.prototype.addForm = function () {
        this.formMode = 'Add';
        this.init();
    };
    ReportGeneratorViewComponent.prototype.editForm = function (entity) {
        this.formMode = 'Edit';
        this.init();
        this.populateForm(entity);
    };
    ReportGeneratorViewComponent.prototype.populateForm = function (entity) {
        var _this = this;
        this.entityForm.get('name').setValue(entity.name);
        var data = this.entityForm.controls.columns;
        entity.columns.forEach(function (column) {
            var col = _this.fb.group({
                name: column.name,
                type: column.type,
                mandatory: column.mandatory,
                primary: column.primary,
                unique: column.unique,
                autoGen: column.autoGen,
                relation: _this.fb.group(column.relation !== undefined ? {
                    columnName: column.relation.columnName,
                    tableName: column.relation.tableName,
                    relationType: column.relation.relationType
                } : {})
            });
            data.push(col);
        });
    };
    ReportGeneratorViewComponent.prototype.saveLocal = function () {
        debugger;
        this.appModel.packageName = 'com.' + this.appModel.appName;
        localStorage.setItem('data', JSON.stringify(this.appModel));
    };
    ReportGeneratorViewComponent.prototype.build = function () {
        this.appModel.packageName = 'com.' + this.appModel.appName;
        this.appService.build(this.appModel);
    };
    ReportGeneratorViewComponent.prototype.download = function () {
        this.appService.download(this.appModel.appName);
    };
    ReportGeneratorViewComponent.prototype.remove = function (index) {
        var items = this.entityForm.get('columns');
        items.removeAt(index);
    };
    ReportGeneratorViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report-generator-view',
            template: __webpack_require__("./src/app/user/report-generator-view/report-generator-view.component.html"),
            styles: [__webpack_require__("./src/app/user/report-generator-view/report-generator-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__service_app_service__["a" /* AppService */]])
    ], ReportGeneratorViewComponent);
    return ReportGeneratorViewComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown.options .dropdown-menu{\r\n    margin-top: 12px;\r\n    border-radius: 0;\r\n}\r\n.dropdown.options .dropdown-menu a{\r\n    border-bottom: 1px solid #f4f4f2;\r\n}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Menu {{sideBar}}\">\r\n<header class=\"position-relative\">\r\n    <div class=\"container-fluid position-static\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-6 p-0 position-static\">\r\n                <a class=\"settingBtn MenuBarBtn\" (click)=\"toggle()\"><i class=\"fas fa-cogs\"></i></a>\r\n                <span class=\"logo\">API Report Generator</span></div>\r\n            <div class=\"col-6 p-0 text-right\">\r\n                <div class=\"dropdown options\">\r\n                    <a class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Nagarjuna Tamrada</a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" href=\"#\">Settings</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Profile</a>\r\n                        <a class=\"dropdown-item border-0\" routerLink=\"/signin\">Logout</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n    <aside class=\"sidebar\">\r\n        <ul>\r\n            <li><a routerLink=\"/user/ReportGeneratorView\">Create Report</a></li>\r\n            <li><a routerLink=\"/user/ReportGeneratorView\">Entity</a></li>\r\n            <li><a routerLink=\"/user/ReportGeneratorView\">Relationship</a></li>\r\n            <li><a routerLink=\"/user/ReportGeneratorView\">tutorial</a></li>\r\n            <li><a routerLink=\"/user/ReportGeneratorView\">Help</a></li>\r\n            <li><a routerLink=\"/user/ReportGeneratorView\">Contact</a></li>\r\n        </ul>\r\n    </aside>\r\n    <main class=\"container-fluid py-3\">\r\n        <div class=\"body-content\">\r\n        <router-outlet></router-outlet>\r\n        </div>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.sideBar = 'active';
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.toggle = function () {
        if (this.sideBar) {
            this.sideBar = null;
        }
        else {
            this.sideBar = 'active';
        }
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/user/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_generator_view_report_generator_view_component__ = __webpack_require__("./src/app/user/report-generator-view/report-generator-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_component__ = __webpack_require__("./src/app/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */], children: [
                            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
                            { path: 'ReportGeneratorView', component: __WEBPACK_IMPORTED_MODULE_5__report_generator_view_report_generator_view_component__["a" /* ReportGeneratorViewComponent */] }
                        ]
                    }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_5__report_generator_view_report_generator_view_component__["a" /* ReportGeneratorViewComponent */], __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map