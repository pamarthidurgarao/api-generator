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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_module__ = __webpack_require__("./src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_app_service__ = __webpack_require__("./src/app/service/app.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__service_app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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

/***/ "./src/app/dto/relationmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationModel; });
var RelationModel = /** @class */ (function () {
    function RelationModel() {
    }
    return RelationModel;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"loginBlock\">\n  <div class=\"login\">\n    <h1 class=\"mb-3 logoLogin\">API GENERATOR</h1>\n    <form class=\"floatingForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <div class=\"form-group position-relative\">\n        <input type=\"text\" class=\"form-control relative\" formControlName=\"userName\" required>\n        <label class=\"floating-label\">User Name<sup>*</sup></label>\n        <div *ngIf=\"loginForm.controls['userName'].errors && !loginForm.controls['userName'].pristine\" class=\"text-danger mt-1\">\n          <div [hidden]=\"!loginForm.controls['userName'].errors.required\">Name is required.</div>\n          <div [hidden]=\"!loginForm.controls['userName'].errors.pattern\">Pattern notmatch.</div>\n          <div [hidden]=\"!loginForm.controls['userName'].errors.minlength\">mininum length 4 charactors required.</div>\n        </div>        \n      </div>\n      <div class=\"form-group position-relative\">\n        <input type=\"password\" name=\"password\" class=\"form-control relative\" formControlName=\"password\" required=\"\">\n        <label class=\"floating-label\">Password<sup>*</sup></label>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">SIGNIN</button>\n      <a class=\"btn btn-primary\" routerLink=\"/signup\">SIGNUP</a>\n    </form>\n    <!-- <p>{{loginForm.value|json}}</p>\n    <p>{{loginForm.valid|json}}</p> -->\n\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function LoginComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            //userName: ['', Validators.required],
            userName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z]*$')
            ]),
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    LoginComponent.prototype.login = function () {
        this.loginModel = this.loginForm.value;
        if (this.loginModel.userName == 'user' && this.loginModel.password == 'user') {
            this.router.navigate(['user/ReportGeneratorView']);
        }
        else {
            console.log('error');
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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

module.exports = ".SignupBlock{\n    background:#000 url('background.08c474412481318ed530.jpg') no-repeat;\n    height: 100%;\n    width: 100%;\n    background-size: cover; padding:50px 0 25px 0;    \n}\n.SignupBlock .Signup{\n    max-width: 300px; background: #fff; padding: 20px 20px  25px 20px; width: 100%; margin: 0 auto;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"loginBlock\">\n  <div class=\"login\">\n    <h1 class=\"mb-3 logoLogin\">API GENERATOR</h1>\n    <form class=\"floatingForm\" [formGroup]=\"signUpForm\" (ngSubmit)=\"signup()\">\n      <div class=\"form-group position-relative\">\n        <input type=\"text\" class=\"form-control relative\" formControlName=\"UserName\" required=\"\">\n        <label class=\"floating-label\">User Name<sup>*</sup></label>\n      </div>\n      <div class=\"form-group position-relative\">\n        <input type=\"text\" class=\"form-control relative\" formControlName=\"Email\" required=\"\">\n        <label class=\"floating-label\">Email Address<sup>*</sup></label>\n      </div>\n      <div class=\"form-group position-relative\">\n        <input type=\"text\" class=\"form-control relative\" formControlName=\"Phone\" required=\"\">\n        <label class=\"floating-label\">Phone Number<sup>*</sup></label>\n      </div>\n      <div class=\"form-group position-relative\">\n        <input type=\"text\" class=\"form-control relative\" formControlName=\"Location\" required=\"\">\n        <label class=\"floating-label\">Location<sup>*</sup></label>\n      </div>\n      <div class=\"form-group position-relative\">\n        <input type=\"text\" class=\"form-control relative\" formControlName=\"Password\" required=\"\">\n        <label class=\"floating-label\">Password<sup>*</sup></label>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!signUpForm.valid\">Create Account</button>\n      <a class=\"btn btn-dark\" routerLink=\"/login\">back to login</a>\n      <!--<p>{{signUpForm.value|json}}</p>\n      <p>{{signUpForm.valid|json}}</p>-->\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function SignupComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fb.group({
            UserName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            Email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            Location: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            Password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    SignupComponent.prototype.signup = function () {
        this.router.navigate(['user/home']);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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

module.exports = "<section class=\"bg-white sections min-height500\">\n    <div class=\"title\">API Report Generator application</div>\n    <div class=\"content\">Sed pellentesque sem et posuere congue. Quisque finibus facilisis quam, quis feugiat tortor bibendum eget. Donec interdum\n        lectus id leo auctor vulputate. Maecenas viverra, arcu eget volutpat posuere dolor.</div>\n</section>"

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

module.exports = ".modal-lg{\n    max-width: 1200px;\n}\n.reports .edit{\nposition: absolute; top:0px; right:25px; cursor: pointer;\n}\n.reports .delete{\nposition: absolute; top:1px; right:5px; cursor: pointer;\n}\n.reports .card{\nmin-width: 250px;\n}\n.reports .card .table{\n    margin-top: 0.6rem; margin-bottom: 0;\n}\n.reports .card .table tr td{\n    padding:0rem 0.5rem 0.3rem 0.5rem;\n}\n.reports h3{\n        font-size: 16px;\n    text-transform: uppercase;\n    position: absolute;\n    left: 5px;\n    top: 2px;\n    margin: 0;\n}\n.reports .card-body{\n    padding: 1.4rem  0.35rem  0.35rem  0.35rem;\n}\n.reports .table-bordered td,.reports .table-bordered th {\n    border: 1px solid #f7f4f4;\n}\n.reports .table-bordered tr{\n    background: #f7f4f4;\n}\n.reports .table-bordered tr:nth-child(even){\n    background: #fff;\n}\n.AddDynamicColmn{\n        background: #f9f9f9;\n    padding: 0.5rem 0.5rem 0.5rem 0.5rem;\n    border: 1px solid #efefef;\n}\n.AddDynamicColmn .close{\n    position: absolute;\n    right: 12px;\n    top: -4px;\n    color: #F00;\n    font-size: 12px;\n    opacity: 1;\n    font-weight: bold;\n}\n.AddDynamicColmn .close:hover{\n    color: #000;\n}"

/***/ }),

/***/ "./src/app/user/report-generator-view/report-generator-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-white p-3 mb-3\">\n    <div class=\"row\">\n        <div class=\"col-6 form-inline\">\n            <label class=\"pr-2\">Application Name :</label>\n            <input type=\"text\" class=\"form-control mr-2\" [(ngModel)]=\"appModel.appName\" />\n        </div>\n        <div class=\"col-6 text-right\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"edit btn btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#edit\" (click)=\"addForm()\"\n                   title=\"Add Table\"><i class=\"fas fa-plus-square\"></i></button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"saveLocal()\" title=\"save Files\"><i class=\"far fa-save\"></i></button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\" data-toggle=\"modal\" data-target=\"#relationship\" title=\"Relationship\"><i class=\"fas fa-link\"></i></button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"build()\" title=\"Build\"><i class=\"fab fa-simplybuilt\"></i></button>\n                <a class=\"btn btn-outline-secondary\"  title=\"Download Files\" href=\"/api/download?fileName={{appModel.appName}}\"><i class=\"fas fa-download\"></i></a>\n            </div>\n        </div>\n    </div>\n\n</section>\n<section class=\"clearfix\">\n    <div class=\"reports\">\n        <!--Card Start-->\n        <div class=\"row mb-3\">\n            <div class=\"col-sm-4 pb-4\" *ngFor=\"let entity of appModel.entites\">\n                <div class=\"card position-relative rounded-0\">\n                    <div class=\"card-body\">\n                        <a class=\"edit\" title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" (click)=\"editForm(entity)\"><i class=\"far fa-edit\"></i></a>\n                        <a class=\"delete\" title=\"Delete\"><i class=\"far fa-window-close\"></i></a>\n                        <h3>{{entity.name}}</h3>\n                        <table class=\"table table-bordered\">\n                            <tr *ngFor=\"let column of entity.columns\">\n                                <td>{{column.name}}</td>\n                                <td>{{column.type}}</td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <!--Card end-->\n    </div>\n     <!-- <p>{{appModel|json}}</p>  -->\n</section>\n\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <form [formGroup]=\"entityForm\">\n            <div class=\"modal-content rounded-0\">\n                <div class=\"modal-header rounded-0\">\n                    {{formMode}} Table Details\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"form-inline mb-2\">\n                        <label class=\"mr-2\">Table Name:</label>\n                        <input type=\"text\" class=\"form-control mr-2\" id=\"exampleInputPassword1\" formControlName=\"name\" placeholder=\"Table Name\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addItem()\">Add Column</button>\n                    </div>\n                    <div class=\"position-relative my-2 AddDynamicColmn\" formArrayName=\"columns\" *ngFor=\"let column of entityForm.get('columns').controls; let col = index;\">\n                        <div class=\"row\" [formGroupName]=\"col\">\n                            <div class=\"col-sm-3\">\n                                <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"name\" placeholder=\"Column Name\">\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"type\" placeholder=\"Data Type\">\n                                        <option *ngFor=\"let dataType of dataTypes\" [value]=\"dataType\">{{dataType}}</option>\n                                    </select>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-inline mb-1 mt-1\">\n                                    <div class=\"form-check pr-4\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" formControlName=\"mandatory\">\n                                        <label class=\"form-check-label\" for=\"exampleCheck1\">Nullable</label>\n                                    </div>\n                                    <div class=\"form-check pr-4\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" formControlName=\"primary\">\n                                        <label class=\"form-check-label\" for=\"exampleCheck1\">Primary Key</label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" formControlName=\"autoGen\">\n                                        <label class=\"form-check-label\" for=\"exampleCheck1\">Auto Gene</label>\n                                    </div>\n                                    <a class=\"close\" (click)=\"remove(col)\"><i class=\"far fa-trash-alt\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <p>{{entityForm.value|json}}</p> -->\n                </div>\n                <div class=\"modal-footer rounded-0\">\n                    <button type=\"button\" #saveBtn class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"save()\">Save</button>\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">close</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"relationship\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <form [formGroup]=\"relationForm\">\n            <div class=\"modal-content rounded-0\">\n                <div class=\"modal-header rounded-0\">\n                    Relation Table Details\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"form-inline mb-2\">\n                        <label class=\"mr-2\">Relation Type:</label>\n                        <select class=\"form-control mr-2\" formControlName=\"type\">\n                            <option>ONETOONE</option>\n                            <option>ONETOMANY</option>\n                            <option>MANYTOONE</option>\n                            <option>MANYTOMANY</option>\n                        </select>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"position-relative my-2 AddDynamicColmn\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <select class=\"form-control mr-2\" formControlName=\"sourceTable\" (change)=\"sourceTableChange($event.target.value)\">\n                                            <option *ngFor=\"let table of appModel.entites\" [value]=\"table.name\">{{table.name}}</option>\n                                        </select>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <select class=\"form-control mr-2\" formControlName=\"sourceColumn\" >\n                                        <option *ngFor=\"let column of sourceColumns\" [value]=\"column\">{{column}}</option>\n                                       </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"position-relative my-2 AddDynamicColmn\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <select class=\"form-control mr-2\" formControlName=\"targetTable\" (change)=\"targetTableChange($event.target.value)\">\n                                            <option *ngFor=\"let table of appModel.entites\" [value]=\"table.name\">{{table.name}}</option>\n                                        </select>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <select class=\"form-control mr-2\" formControlName=\"targetColumn\">\n                                        <option *ngFor=\"let column of targetColumns\" [value]=\"column\">{{column}}</option>\n                                       </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer rounded-0\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"saveRelation()\">Save</button>\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">close</button>\n                </div>\n            </div>\n            <!-- <p>{{relationForm.value|json}}</p> -->\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/report-generator-view/report-generator-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportGeneratorViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dto_appmodel__ = __webpack_require__("./src/app/dto/appmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dto_relationmodel__ = __webpack_require__("./src/app/dto/relationmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_app_service__ = __webpack_require__("./src/app/service/app.service.ts");
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
        this.sourceColumns = [];
        this.targetColumns = [];
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
            columns: this.fb.array(this.formMode === 'Add' ? [this.createItem()] : [])
        });
        this.relationForm = this.fb.group({
            type: '',
            sourceTable: '',
            sourceColumn: '',
            targetTable: '',
            targetColumn: ''
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
        if (this.formMode === 'Edit') {
            this.appModel.entites = this.appModel.entites.filter(function (data) { return data.name !== _this.entityForm.value.name; });
        }
        var entity = this.entityForm.value;
        if (!entity.columns.relation || !entity.columns.relation.columnName) {
            entity.columns.forEach(function (column) {
                column.relation = { undefined: undefined };
            });
        }
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
    ReportGeneratorViewComponent.prototype.targetTableChange = function (targetTable) {
        var _this = this;
        this.targetColumns = [];
        this.appModel.entites.forEach(function (entity) {
            if (entity.name === targetTable) {
                entity.columns.forEach(function (column) {
                    _this.targetColumns.push(column.name);
                });
            }
        });
    };
    ReportGeneratorViewComponent.prototype.sourceTableChange = function (sourceTable) {
        var _this = this;
        this.sourceColumns = [];
        this.appModel.entites.forEach(function (entity) {
            if (entity.name === sourceTable) {
                entity.columns.forEach(function (column) {
                    _this.sourceColumns.push(column.name);
                });
            }
        });
    };
    ReportGeneratorViewComponent.prototype.saveRelation = function () {
        var relation = this.relationForm.value;
        this.appModel.entites.forEach(function (entity) {
            if (entity.name === relation.sourceTable) {
                entity.columns.forEach(function (column) {
                    if (column.name === relation.sourceColumn) {
                        var relationModel = new __WEBPACK_IMPORTED_MODULE_3__dto_relationmodel__["a" /* RelationModel */]();
                        relationModel.source = true;
                        relationModel.columnName = relation.targetColumn;
                        relationModel.relationType = relation.type;
                        relationModel.tableName = relation.targetTable;
                        column.relation = relationModel;
                    }
                });
            }
            else if (entity.name === relation.targetTable) {
                entity.columns.forEach(function (column) {
                    if (column.name === relation.targetColumn) {
                        var relationModel = new __WEBPACK_IMPORTED_MODULE_3__dto_relationmodel__["a" /* RelationModel */]();
                        relationModel.columnName = relation.targetColumn;
                        relationModel.source = false;
                        if (relation.type === 'ONETOMANY') {
                            var relationType = 'MANYTOONE';
                            relationModel.relationType = relationType;
                        }
                        else if (relation.type === 'MANYTOONE') {
                            var relationType = 'ONETOMANY';
                            relationModel.relationType = relationType;
                        }
                        else {
                            relationModel.relationType = relation.type;
                        }
                        relationModel.tableName = relation.sourceTable;
                        column.relation = relationModel;
                    }
                });
            }
        });
    };
    ReportGeneratorViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report-generator-view',
            template: __webpack_require__("./src/app/user/report-generator-view/report-generator-view.component.html"),
            styles: [__webpack_require__("./src/app/user/report-generator-view/report-generator-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__service_app_service__["a" /* AppService */]])
    ], ReportGeneratorViewComponent);
    return ReportGeneratorViewComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown.options .dropdown-menu{\n    margin-top: 12px;\n    border-radius: 0;\n}\n.dropdown.options .dropdown-menu a{\n    border-bottom: 1px solid #f4f4f2;\n}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Menu {{sideBar}}\">\n<header class=\"position-relative\">\n    <div class=\"container-fluid position-static\">\n        <div class=\"row m-0\">\n            <div class=\"col-6 p-0 position-static\">\n                <a class=\"settingBtn MenuBarBtn\" (click)=\"toggle()\"><i class=\"fas fa-cogs\"></i></a>\n                <span class=\"logo\">API Generator</span></div>\n            <div class=\"col-6 p-0 text-right\">\n                <div class=\"dropdown options\">\n                    <a class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{username}}</a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">Settings</a>\n                        <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                        <a class=\"dropdown-item border-0\" routerLink=\"/signin\">Logout</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n    <aside class=\"sidebar\">\n        <ul>\n            <li><a routerLink=\"/user/home\" routerLinkActive=\"active\">Home</a></li>\n            <li><a routerLink=\"/user/ReportGeneratorView\" routerLinkActive=\"active\">Create Report</a></li>\n        </ul>\n    </aside>\n    <main class=\"container-fluid py-3\">\n        <div class=\"body-content\">\n        <router-outlet></router-outlet>\n        </div>\n    </main>\n</div>"

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
        this.username = 'Tamarada';
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
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */], children: [
                            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
                            { path: 'ReportGeneratorView', component: __WEBPACK_IMPORTED_MODULE_5__report_generator_view_report_generator_view_component__["a" /* ReportGeneratorViewComponent */] }
                        ]
                    }
                ])
            ],
            providers: [],
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