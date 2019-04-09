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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            declarations: []
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    /* getCustomers(): Observable<any> {
       return this.http.get(apiUrl, httpOptions).pipe(
         map(this.extractData),
         catchError(this.handleError));
     }*/
    ApiService.prototype.getUser = function (id) {
        var url = apiUrl + "/user/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.ValidateUser = function (uname, upwd) {
        var url = apiUrl + "/user/" + uname + "/" + upwd;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postUser = function (data) {
        var url = apiUrl + "/user";
        console.log('***');
        console.log(url);
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateUser = function (id, data) {
        var url = apiUrl + "/user/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteUser = function (id) {
        var url = apiUrl + "/user/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteBook = function (id) {
        var url = apiUrl + "/book/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateBook = function (id, data) {
        var url = apiUrl + "/book/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postBook = function (data) {
        var url = apiUrl + "/book";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBook = function (id) {
        var url = apiUrl + "/book/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBooks = function () {
        var url = apiUrl + "/book";
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getUserBook = function (uid, bid) {
        var url = apiUrl + "/uc/" + uid + "/" + bid;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postUserBook = function (data) {
        var url = apiUrl + "/uc";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getUserBooks = function (uid) {
        var url = apiUrl + "/uc/" + uid;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteUserBook = function (uid) {
        var url = apiUrl + "/uc/" + uid;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/user-add/user-add.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _enrollments_enrollments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enrollments/enrollments.component */ "./src/app/enrollments/enrollments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: '',
        component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"],
        data: { title: 'login' }
    },
    {
        path: 'books/:id',
        component: _books_books_component__WEBPACK_IMPORTED_MODULE_6__["BooksComponent"],
        data: { title: 'Books' }
    },
    {
        path: 'user-add',
        component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_3__["UserAddComponent"],
        data: { title: 'Sign Up' }
    },
    {
        path: 'my-enrollments/:id',
        component: _enrollments_enrollments_component__WEBPACK_IMPORTED_MODULE_7__["EnrollmentsComponent"],
        data: { title: 'Sign Up' }
    },
    {
        path: 'user-template/:id',
        component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_3__["UserAddComponent"],
        data: { title: 'Sign Up' }
    },
    {
        path: 'user-profile/:id',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
        data: { title: 'User Profile' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a center class=\"navbar-brand\" href=\"#\">Customer CRUD operations</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>-->\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var book = {};
        /*this.api.getBook('1')
            .subscribe(data => {
                console.log(data);
              if ( data.length === 0) {
    
                book['BookID'] = 1;
                book['name'] = 'Parallel Algorithms';
                book['Professor'] = 'Yijie Han';
                book['img'] = 'img';
                book['rating'] = '9.5/10';
                book['availability'] = '25';
                this.api.postBook(book)
                    .subscribe(res => {
    
                      this.router.navigate(['/user-profile', res._id]);
    
                    }, (err) => {
                      console.log(err);
                    });
              }
    
            });
        this.api.getBook('2')
            .subscribe(data => {
              if ( data.length === 0) {
    
                book['BookID'] = 2;
                book['name'] = 'Principles Of Big Data';
                book['Professor'] = 'Praveen Rao';
                book['img'] = 'img';
                book['rating'] = '9.5/10';
                book['availability'] = '25';
                this.api.postBook(book)
                    .subscribe(res => {
    
                      this.router.navigate(['/user-profile', res._id]);
    
                    }, (err) => {
                      console.log(err);
                    });
              }
    
            });
        this.api.getBook('3')
            .subscribe(data => {
              if ( data.length === 0) {
    
                book['BookID'] = 3;
                book['name'] = 'Formal Software Specification';
                book['Professor'] = 'Yijie Han';
                book['img'] = 'img';
                book['rating'] = '9.5/10';
                book['availability'] = '25';
                this.api.postBook(book)
                    .subscribe(res => {
    
                      this.router.navigate(['/user-profile', res._id]);
    
                    }, (err) => {
                      console.log(err);
                    });
              }
    
            });
        this.api.getBook('4')
            .subscribe(data => {
                console.log("*******************88");
                console.log(data);
              if ( data.length === 0) {
    
                book['BookID'] = 4;
                book['name'] = 'Cloud Computing';
                book['Professor'] = 'Choi';
                book['img'] = 'img';
                book['rating'] = '9.5/10';
                book['availability'] = '25';
                this.api.postBook(book)
                    .subscribe(res => {
    
                      this.router.navigate(['/user-profile', res._id]);
    
                    }, (err) => {
                      console.log(err);
                    });
              }
    
            });
          this.api.getBook('5')
              .subscribe(data => {
                  console.log("*******************88");
                  console.log(data);
                  if ( data.length === 0) {
    
                      book['BookID'] = 5;
                      book['name'] = 'Network Architecture';
                      book['Professor'] = 'Choi';
                      book['img'] = 'img';
                      book['rating'] = '9.5/10';
                      book['availability'] = '25';
                      this.api.postBook(book)
                          .subscribe(res => {
    
                              this.router.navigate(['/user-profile', res._id]);
    
                          }, (err) => {
                              console.log(err);
                          });
                  }
    
              });*/
        this.api.deleteBook('5caa9e284a67763f2cf983ca');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/user-add/user-add.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_template_user_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-template/user-template.component */ "./src/app/user-template/user-template.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _enrollments_enrollments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enrollments/enrollments.component */ "./src/app/enrollments/enrollments.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_6__["UserAddComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__["UserLoginComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _user_template_user_template_component__WEBPACK_IMPORTED_MODULE_11__["UserTemplateComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_12__["BooksComponent"],
                _enrollments_enrollments_component__WEBPACK_IMPORTED_MODULE_13__["EnrollmentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_9__["AngularMaterialModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:lightblue; min-height:730px;\">\n  <user-template></user-template>\n  <br>\n  <div class=\"container\" >\n\t  <div class=\"row\">\n\t  <h2 style=\"display:inline\" class=\"offset-3 col-5\">Courses</h2>\n\t  <a routerLink=\"\" class=\"lbutton btn btn-primary\" ><i style=\"font-size: 32px\" class=\"fa fa-lg fa-sign-out\"></i></a>\n\t  </div>\n\t  <div style=\"border: black;border-style: solid;background-color: white;margin-top: 2%;padding-top: 2%;padding-bottom: 1%;min-height: 600px\" class=\"offset-3 col-6\">\n    <div *ngFor=\"let book of books\" class=\"col-12\">\n\t<h3 style=\"color: darkorange;display: inline\">{{book.name}}</h3>\n\t\t<button (click)=\"getEnrolled(book.BookID,book.index)\"  *ngIf=\"!book.isEnrolled\" style=\"position: absolute;float: right;right: 0px\" class=\"col-2 lbutton btn btn-sm btn-success\">enroll</button>\n\t\t<span  *ngIf=\"book.isEnrolled\" style=\"position: absolute;float: right;right: 0px;color: green\" class=\"col-2\">enrolled</span>\n\n\t<div>\n\t\t<h5 style=\"display: inline\"> Professor:</h5> {{book.Professor}}\n\t</div>\n\t<div>\n\t\t<h5 style=\"display: inline\"> Availability: </h5>{{book.availability}}\n\t</div>\n\t\t<div> <h5 style=\"display: inline\" > Rating: </h5> {{book.rating}}\n\t</div>\n\t</div>\n  </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksComponent = /** @class */ (function () {
    function BooksComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.user_id = this.route.snapshot.params['id'];
        this.getBooks();
    };
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        this.api.getBooks()
            .subscribe(function (data) {
            console.log(data);
            _this.books = data;
            var _loop_1 = function (i) {
                _this.api.getUserBook(_this.user_id, _this.books[i].BookID)
                    .subscribe(function (res) {
                    if (res.length > 0) {
                        console.log('ressss');
                        console.log(res);
                        _this.books[i].isEnrolled = true;
                    }
                    else {
                        _this.books[i].isEnrolled = false;
                    }
                    _this.books[i].index = i;
                }, function (err) {
                    console.log(err);
                });
            };
            for (var i = 0; i < _this.books.length; i++) {
                _loop_1(i);
            }
        });
    };
    BooksComponent.prototype.getEnrolled = function (id, ind) {
        var _this = this;
        var userBook = {};
        userBook['uid'] = this.user_id;
        userBook['bid'] = id;
        this.api.postUserBook(userBook)
            .subscribe(function (res) {
            _this.books[ind].availability = _this.books[ind].availability - 1;
            _this.api.updateBook(_this.books[ind]._id, _this.books[ind])
                .subscribe(function (res1) {
                _this.books[ind].isEnrolled = true;
            }, function (err) {
                console.log(err);
            });
            _this.books[ind].isEnrolled = true;
        }, function (err) {
            console.log(err);
        });
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/enrollments/enrollments.component.css":
/*!*******************************************************!*\
  !*** ./src/app/enrollments/enrollments.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/enrollments/enrollments.component.html":
/*!********************************************************!*\
  !*** ./src/app/enrollments/enrollments.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:lightblue; min-height:730px;\">\n  <user-template></user-template>\n  <br>\n  <div class=\"container\" >\n\t  <div class=\"row\">\n\t  <h2 style=\"display:inline\" class=\"offset-3 col-5\">My Enrollments</h2>\n\t  <a routerLink=\"\" class=\"lbutton btn btn-primary\" ><i style=\"font-size: 32px\" class=\"fa fa-lg fa-sign-out\"></i></a>\n\t  </div>\n\t  <div style=\"border: black;border-style: solid;background-color: white;margin-top: 2%;padding-top: 2%;padding-bottom: 1%;min-height: 600px\" class=\"offset-3 col-6\">\n\n              <div *ngFor=\"let enrollment of my_enrollments\" class=\"col-12\" id=\"enrollment.BookID\">\n                  <h3 style=\"color: darkorange;display: inline\">{{enrollment.name}}</h3>\n                  <button (click)=\"delete(enrollment.BookID,enrollment.ind)\"  style=\"position: absolute;float: right;right: 0px\" class=\"col-2 lbutton btn btn-sm btn-danger\"><i class=\"fa fa-lg fa-trash\"></i></button>\n\n\n                  <div>\n                      <h5 style=\"display: inline\"> Professor:</h5> {{enrollment.Professor}}\n                  </div>\n                  <div>\n                      <h5 style=\"display: inline\"> Availability: </h5>{{enrollment.availability}}\n                  </div>\n                  <div> <h5 style=\"display: inline\" > Rating: </h5> {{enrollment.rating}}\n                  </div>\n              </div>\n  </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/enrollments/enrollments.component.ts":
/*!******************************************************!*\
  !*** ./src/app/enrollments/enrollments.component.ts ***!
  \******************************************************/
/*! exports provided: EnrollmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentsComponent", function() { return EnrollmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrollmentsComponent = /** @class */ (function () {
    function EnrollmentsComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.my_enrollments = [];
    }
    EnrollmentsComponent.prototype.ngOnInit = function () {
        this.user_id = this.route.snapshot.params['id'];
        this.getEnrollments();
    };
    EnrollmentsComponent.prototype.getEnrollments = function () {
        var _this = this;
        this.api.getUserBooks(this.user_id)
            .subscribe(function (data) {
            console.log(data);
            _this.enrollments = data;
            var _loop_1 = function (i) {
                _this.api.getBook(_this.enrollments[i].bid)
                    .subscribe(function (res) {
                    console.log(res);
                    res[0].ind = i;
                    _this.my_enrollments[i] = res[0];
                    console.log(_this.my_enrollments[i]);
                }, function (err) {
                    console.log(err);
                });
            };
            for (var i = 0; i < _this.enrollments.length; i++) {
                _loop_1(i);
            }
        });
    };
    EnrollmentsComponent.prototype.delete = function (id, ind) {
        var _this = this;
        this.api.getUserBook(this.user_id, id)
            .subscribe(function (data) {
            _this.api.deleteUserBook(data[0]._id)
                .subscribe(function (data) {
                _this.my_enrollments[ind].availability = _this.my_enrollments[ind].availability + 1;
                _this.api.updateBook(_this.my_enrollments[ind]._id, _this.my_enrollments[ind])
                    .subscribe(function (res1) {
                    _this.my_enrollments.splice(Number(ind), 1);
                    for (var j = Number(ind); j < _this.my_enrollments.length; j++) {
                        _this.my_enrollments[j].ind = j;
                    }
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    EnrollmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-enrollments',
            template: __webpack_require__(/*! ./enrollments.component.html */ "./src/app/enrollments/enrollments.component.html"),
            styles: [__webpack_require__(/*! ./enrollments.component.css */ "./src/app/enrollments/enrollments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EnrollmentsComponent);
    return EnrollmentsComponent;
}());



/***/ }),

/***/ "./src/app/user-add/user-add.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-add/user-add.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-add/user-add.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-add/user-add.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:lightblue; min-height:730px;\">\n<div class=\"container\"  >\n  <br>\n  <div class=\"row\">\n    <div class=\"offset-4 col-8\">\n      <img src=\"assets/user.png\" alt=\"MOOC\" style=\"width: 250\" height=\"200\">\n    </div>\n  </div>\n\n  <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" name=\"myForm\" method=\"get\"  style=\"background:white;margin-top: 2%; border-style: solid; padding-top: 5%;padding-bottom: 1%\" class=\"offset-3 col-6 lform\" >\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Name</strong></label><br>\n        <input  id=\"Name\" formControlName=\"Name\" type=\"text\" maxlength=\"50\" class=\"col-8 form-control\" placeholder=\"Enter the Name\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\">\n        <div *ngIf=\"submitted && f.Name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.Name.errors.required\">Name is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Username</strong></label><br>\n        <input  id=\"UName\" formControlName=\"UName\" type=\"text\" maxlength=\"50\" class=\"col-8 form-control\" placeholder=\"Enter the Username\" [ngClass]=\"{ 'is-invalid': submitted && f.UName.errors }\">\n        <div *ngIf=\"submitted && f.UName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.UName.errors.required\">UserName is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Password</strong></label><br>\n        <input  id=\"UPassword\" formControlName=\"UPassword\" type=\"password\" maxlength=\"20\" class=\"col-8 form-control\" placeholder=\"Enter the Password\" [ngClass]=\"{ 'is-invalid': submitted && f.UPassword.errors }\">\n        <div *ngIf=\"submitted && f.UPassword.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.UPassword.errors.required\">Password is required</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Gender</strong></label><br>\n        <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"col-1\"  checked value=\"F\">Female\n        <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"col-1\"  value=\"M\">Male\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Date Of Birth</strong></label><br>\n        <input  id=\"dob\" formControlName=\"dob\" type=\"date\" maxlength=\"50\" class=\"col-8 form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\">\n        <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.dob.errors.required\">Date Of Birth is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Email</strong></label><br>\n        <input  id=\"email\" formControlName=\"email\" type=\"text\" maxlength=\"100\" class=\"col-8 form-control\" placeholder=\"Enter the Email address\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"offset-3 col-4\">\n        <input type=\"submit\" value=\"Create Account\" class=\" col-12 lbutton btn btn-success\" style=\"margin-top: 4%\">\n      </div>\n    </div>\n\n  </form>\n\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-add/user-add.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-add/user-add.component.ts ***!
  \************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['F', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(UserAddComponent.prototype, "f", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // getter for form fields
    UserAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        var user = {};
        user['userID'] = 18;
        user['name'] = this.userForm.value.Name;
        user['gender'] = this.userForm.value.gender;
        user['birthday'] = this.userForm.value.dob;
        user['contact'] = this.userForm.value.email;
        user['username'] = this.userForm.value.UName;
        user['user_password'] = this.userForm.value.UPassword;
        user['email'] = this.userForm.value.email;
        this.api.postUser(user)
            .subscribe(function (res) {
            _this.router.navigate(['/user-profile', res._id]);
        }, function (err) {
            console.log(err);
        });
    };
    UserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/user-add/user-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/user-login/user-login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-login/user-login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-login/user-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a center class=\"navbar-brand\" href=\"#\">Customer CRUD operations</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>-->\n<div style=\"background:lightblue; min-height:730px\">\n<div class=\"container\"  >\n  <br>\n  <div class=\"row\">\n    <div class=\"offset-4 col-8\">\n      <img src=\"assets/user.png\" alt=\"MOOC\" style=\"width: 250\" height=\"200\">\n    </div>\n  </div>\n\n  <form  [formGroup]=\"UserForm\" (ngSubmit)=\"onSubmit()\" name=\"myForm\" method=\"get\"  style=\"background:white;margin-top: 2%; border-style: solid; padding-top: 5%;padding-bottom: 5%\" class=\"offset-3 col-6 lform\" >\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Username</strong></label><br>\n        <input  id=\"UName\" formControlName=\"UName\" type=\"text\" maxlength=\"50\" class=\"form-control col-8\" placeholder=\"Enter the Username\" [ngClass]=\"{ 'is-invalid': (submitted && f.UName.errors)|| login_error }\">\n        <div *ngIf=\"submitted && f.UName.errors\" class=\"invalid-feedback\" >\n          <div *ngIf=\"f.UName.errors != null && f.UName.errors.required\">UserName is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group offset-2 col-10\">\n        <label class=\"ast control-label\"><strong> Password</strong></label><br>\n        <input  id=\"UPassword\" formControlName=\"UPassword\" type=\"password\" maxlength=\"20\" class=\"form-control col-8\" placeholder=\"Enter the Password\" [ngClass]=\"{ 'is-invalid': (submitted && f.UPassword.errors)|| login_error }\">\n        <div *ngIf=\"submitted && f.UPassword.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.UPassword.errors != null && f.UPassword.errors.required\">Password is required</div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!(f.UPassword.errors!=null || f.UName.errors != null) && login_error\" id=\"error_div\" class=\"offset-2\" style=\"color: red\"> <b>invalid login credentials</b></div>\n\n    <div class=\"row\">\n      <div class=\"offset-2 col-10\">\n        <input type=\"submit\" value=\"Login\" class=\" col-3 lbutton btn btn-primary\" style=\"margin-top: 4%\">\n        <input type=\"button\" value=\"Sign Up\" (click)=\"onSignUp()\" class=\" offset-2 col-3 lbutton btn btn-success\" style=\"margin-top: 4%\">\n\n      </div>\n    </div>\n\n  </form>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.title = 'app';
        this.user = {};
        this.submitted = false;
        this.login_error = false;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.UserForm = this.formBuilder.group({
            UName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            UPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    Object.defineProperty(UserLoginComponent.prototype, "f", {
        get: function () {
            return this.UserForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.UserForm.invalid) {
            //document.getElementById("error_div").style.display="none";
            return;
        }
        this.api.ValidateUser(this.UserForm.value.UName, this.UserForm.value.UPassword).subscribe(function (data) {
            if (data.length > 0) {
                _this.router.navigate(['/user-profile', data[0]._id]);
            }
            else {
                _this.login_error = true;
                //document.getElementById("error_div").style.display="";
            }
        }, function (err) {
            console.log("error in login page");
        });
    };
    UserLoginComponent.prototype.onSignUp = function () {
        this.router.navigate(['/user-add']);
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.css */ "./src/app/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success-message\r\n{\r\n    position: absolute;\r\n    float:right;\r\n    top:4px;\r\n    right: 7px;\r\n    background: lime;\r\n    min-height:50px;\r\n    min-width:350px;\r\n    z-index:1;\r\n    color:black;\r\n    font-weight:bold;\r\n    padding-top:1%;\r\n    padding-left:15%;\r\n    font-size: 24px;\r\n    opacity: 0.5 ;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:lightblue; min-height:730px;\">\n  <user-template></user-template>\n  <br>\n  <div class=\"container\"  >\n    <div class=\"row\">\n    <h2 style=\"display:inline\" class=\"offset-3 col-5\">Profile</h2>\n      <a routerLink=\"\" class=\"lbutton btn btn-primary\" ><i style=\"font-size: 32px\" class=\"fa fa-lg fa-sign-out\"></i></a>\n    </div>\n    <form  [formGroup]=\"userForm\" id=\"userForm\"  name=\"myForm\"   style=\"background:white;margin-top: 2%; border-style: solid; padding-top: 2%;padding-bottom: 1%\" class=\"offset-3 col-6 lform\" >\n      <div id=\"message\" class=\"success-message\" style=\"display: none\">Data Saved</div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Name</strong></label><br>\n          <input  id=\"Name\"  formControlName=\"Name\" type=\"text\" maxlength=\"50\" class=\"ro col-8 form-control\" placeholder=\"Enter the Name\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\">\n          <div *ngIf=\"submitted && f.Name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Name.errors.required\">Name is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Username</strong></label><br>\n          <input  id=\"UName\"  formControlName=\"UName\" type=\"text\" maxlength=\"50\" class=\"ro col-8 form-control\" placeholder=\"Enter the Username\" [ngClass]=\"{ 'is-invalid': submitted && f.UName.errors }\">\n          <div *ngIf=\"submitted && f.UName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UName.errors.required\">UserName is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Password</strong></label><br>\n          <input  id=\"UPassword\"  formControlName=\"UPassword\" type=\"password\" maxlength=\"20\" class=\"ro col-8 form-control\" placeholder=\"Enter the Password\" [ngClass]=\"{ 'is-invalid': submitted && f.UPassword.errors }\">\n          <div *ngIf=\"submitted && f.UPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UPassword.errors.required\">Password is required</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Gender</strong></label><br>\n          <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"dis col-1\"  checked value=\"F\">Female\n          <input  id=\"gender\" name=\"gender\" formControlName=\"gender\" type=\"radio\" maxlength=\"50\" class=\"dis col-1\"  value=\"M\">Male\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Date Of Birth</strong></label><br>\n          <input  id=\"dob\" formControlName=\"dob\"  type=\"date\" maxlength=\"50\" class=\"ro col-8 form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\">\n          <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.dob.errors.required\">Date Of Birth is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group offset-2 col-10\">\n          <label class=\"ast control-label\"><strong> Email</strong></label><br>\n          <input  id=\"email\"  formControlName=\"email\" type=\"text\" maxlength=\"100\" class=\"ro col-8 form-control\" placeholder=\"Enter the Email address\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"offset-3 col-6\">\n          <button id=\"edit\" (click)=\"onEdit()\" class=\"col-4 lbutton btn btn-primary\" style=\"margin-top: 4%\"><i class=\"fa fa-lg fa-edit\"></i></button>\n          <button id=\"save\" (click)=\"onSave()\" class=\"col-4 lbutton btn btn-success\" style=\"margin-top: 4%\"><i class=\"fa fa-lg fa-save\"></i></button>\n          <button (click)=\"onDelete()\" class=\" offset-2 col-4 lbutton btn btn-success \" style=\"margin-top: 4%;background-color: red\"><i class=\"fa fa-lg fa-trash\"></i> </button>\n\n        </div>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.user = {};
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            UName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            UPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user_id = this.route.snapshot.params['id'];
        document.getElementById("save").style.display = "none";
        this.getUser(this.user_id);
    };
    Object.defineProperty(UserProfileComponent.prototype, "f", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserProfileComponent.prototype.getUser = function (id) {
        var _this = this;
        this.api.getUser(id)
            .subscribe(function (data) {
            _this.user = data;
            _this.userForm = _this.formBuilder.group({
                Name: [_this.user['name'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                UName: [_this.user['username'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                UPassword: [_this.user['user_password'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                dob: [_this.user['birthday'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email: [_this.user['email'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                gender: [_this.user['gender'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
            var f = document.getElementsByClassName("ro");
            for (var i = 0, fLen = f.length; i < fLen; i++) {
                f[i].setAttribute("readonly", "true"); //As @oldergod noted, the "O" must be upper case
            }
            f = document.getElementsByClassName("dis");
            for (var i = 0, fLen = f.length; i < fLen; i++) {
                f[i].setAttribute("disabled", "true");
            }
        });
    };
    UserProfileComponent.prototype.onDelete = function () {
        var _this = this;
        this.api.deleteUser(this.user_id)
            .subscribe(function (res) {
            _this.router.navigate(['']);
        }, function (err) {
            console.log(err);
        });
    };
    UserProfileComponent.prototype.onEdit = function () {
        var f = document.getElementsByClassName("ro");
        for (var i = 0, fLen = f.length; i < fLen; i++) {
            f[i].removeAttribute("readonly");
        }
        f = document.getElementsByClassName("dis");
        for (var i = 0, fLen = f.length; i < fLen; i++) {
            f[i].removeAttribute("disabled");
        }
        document.getElementById("save").style.display = "";
        document.getElementById("edit").style.display = "none";
    };
    UserProfileComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        var user = {};
        user['userID'] = 18;
        user['name'] = this.userForm.value.Name;
        user['gender'] = this.userForm.value.gender;
        user['birthday'] = this.userForm.value.dob;
        user['contact'] = this.userForm.value.email;
        user['username'] = this.userForm.value.UName;
        user['user_password'] = this.userForm.value.UPassword;
        user['email'] = this.userForm.value.email;
        this.api.updateUser(this.user_id, user)
            .subscribe(function (res) {
            _this.submitted = false;
            var f = document.getElementsByClassName("ro");
            console.log(f);
            for (var i = 0, fLen = f.length; i < fLen; i++) {
                console.log(f[i]);
                f[i].setAttribute("readonly", "true");
            }
            f = document.getElementsByClassName("dis");
            for (var i = 0, fLen = f.length; i < fLen; i++) {
                f[i].setAttribute("disabled", "true");
            }
            document.getElementById("save").style.display = "none";
            document.getElementById("edit").style.display = "";
        }, function (err) {
            console.log(err);
        });
        document.getElementById("message").style.display = "";
        setTimeout(function () {
            document.getElementById("message").style.display = "none";
        }, 5000);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-template/user-template.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-template/user-template.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: midnightblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-template/user-template.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-template/user-template.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"offset-3\" style=\"font-size: large;\">\n<a routerLink=\"['/user-profile',this.user_id]\" (click)=\"onProfile()\" style=\"margin-right: 2%;margin-left: 2%\">Profile</a>|\n<a  routerLink=\"['/books',this.user_id]\" (click)=\"onBooks()\" style=\"margin-right: 2%;margin-left: 2%\">Courses</a>|\n<a routerLink=\"['/my-enrollments', user_id]\" (click)=\"onEnrollments()\" style=\"margin-right: 2%;margin-left: 2%\">My Enrollments</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user-template/user-template.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-template/user-template.component.ts ***!
  \**********************************************************/
/*! exports provided: UserTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTemplateComponent", function() { return UserTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserTemplateComponent = /** @class */ (function () {
    function UserTemplateComponent(route, api, router, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    UserTemplateComponent.prototype.ngOnInit = function () {
        this.user_id = this.route.snapshot.params['id'];
    };
    UserTemplateComponent.prototype.onProfile = function () {
        this.router.navigate(['/user-profile', this.user_id]);
    };
    UserTemplateComponent.prototype.onBooks = function () {
        this.router.navigate(['/books', this.user_id]);
    };
    UserTemplateComponent.prototype.onEnrollments = function () {
        this.router.navigate(['/my-enrollments', this.user_id]);
    };
    UserTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-template',
            template: __webpack_require__(/*! ./user-template.component.html */ "./src/app/user-template/user-template.component.html"),
            styles: [__webpack_require__(/*! ./user-template.component.css */ "./src/app/user-template/user-template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserTemplateComponent);
    return UserTemplateComponent;
}());



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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\Aparna Manda\Desktop\Lab-3\UserManagementSystem\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map