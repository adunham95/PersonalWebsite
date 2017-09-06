webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*MAIN COLORS*/\r\n/*7CFEF0*/\r\n/*45BFE9*/\r\n/*A2ABAB*/\r\n/*003459*/\r\n/*33658A*/\r\n\r\n/*NAVBAR STUFF*/\r\n\r\n\r\n\r\na, .item {\r\n  display: block;\r\n  color: white;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n}\r\n\r\na.home {\r\n  background-color: #00A7E1;\r\n}\r\na.about {\r\n  background-color: #2B6240;\r\n}\r\na.projects {\r\n  background-color: #654597;\r\n}\r\na.blog {\r\n  background-color: #7E6551;\r\n}\r\n\r\n.navBar{\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  background: #5F6B6F;\r\n  color: white;\r\n  z-index: 2;\r\n}\r\n\r\n#navigation {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.content {\r\n  margin-top: 30px;\r\n}\r\n\r\n.close {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n\r\n  a, .item {\r\n    line-height: 25px;\r\n    vertical-align: middle;\r\n    height: 25px;\r\n  }\r\n\r\n  .tricon {\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n\r\n  .navBar {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n  .item {\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    font-size: 25px;\r\n  }\r\n\r\n  #navigation {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n  }\r\n\r\n  #navigation {\r\n    height: 0;\r\n    width: 100%;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #5F6B6F; /* Black fallback color */\r\n    background-color: rgba(95,107,111, 0.9);/* Black w/opacity */\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */\r\n    color: white;\r\n  }\r\n\r\n  a{\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-size: 45pt;\r\n  }\r\n\r\n  .close {\r\n    display: inherit;\r\n  }\r\n\r\n  div.close {\r\n    font-size: 50pt;\r\n    text-align: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n  }\r\n\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-content\">\r\n\r\n  <nav-bar></nav-bar>\r\n\r\n  <div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Adrian Dunham';
    }
    /* Open */
    AppComponent.prototype.openNav = function () {
        document.getElementById("navigation").style.height = "100%";
    };
    /* Close */
    AppComponent.prototype.closeNav = function () {
        document.getElementById("navigation").style.height = "0%";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/views/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_no_page_no_page_component__ = __webpack_require__("../../../../../src/app/views/no-page/no-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_about_page_about_page_component__ = __webpack_require__("../../../../../src/app/views/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_blog_page_blog_page_component__ = __webpack_require__("../../../../../src/app/views/blog-page/blog-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_project_page_project_page_component__ = __webpack_require__("../../../../../src/app/views/project-page/project-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_element_block_element_block_component__ = __webpack_require__("../../../../../src/app/components/element-block/element-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_element_contact_element_contact_component__ = __webpack_require__("../../../../../src/app/components/element-contact/element-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_project_card_project_card_component__ = __webpack_require__("../../../../../src/app/components/project-card/project-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_blog_card_blog_card_component__ = __webpack_require__("../../../../../src/app/components/blog-card/blog-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_blog_create_blog_create_component__ = __webpack_require__("../../../../../src/app/components/blog-create/blog-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_dashboard_page_dashboard_page_component__ = __webpack_require__("../../../../../src/app/views/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/views/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dashboard_display_dashboard_display_component__ = __webpack_require__("../../../../../src/app/components/dashboard-display/dashboard-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_blog_edit_blog_edit_component__ = __webpack_require__("../../../../../src/app/components/blog-edit/blog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_truncate_pipe__ = __webpack_require__("../../../../../src/app/pipes/truncate.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Routing

//Services




//Components

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__views_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_14__views_about_page_about_page_component__["a" /* AboutPageComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_15__views_blog_page_blog_page_component__["a" /* BlogPageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_23__views_login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_16__views_project_page_project_page_component__["a" /* ProjectPageComponent */] },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_22__views_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_25__components_dashboard_display_dashboard_display_component__["a" /* DashboardDisplayComponent */] },
            { path: 'newpost', component: __WEBPACK_IMPORTED_MODULE_21__components_blog_create_blog_create_component__["a" /* BlogCreateComponent */] },
            { path: 'editpost', component: __WEBPACK_IMPORTED_MODULE_26__components_blog_edit_blog_edit_component__["a" /* BlogEditComponent */] },
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_13__views_no_page_no_page_component__["a" /* NoPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__views_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__views_no_page_no_page_component__["a" /* NoPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__views_about_page_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__views_blog_page_blog_page_component__["a" /* BlogPageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__views_project_page_project_page_component__["a" /* ProjectPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_element_block_element_block_component__["a" /* ElementBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_element_contact_element_contact_component__["a" /* ElementContactComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_project_card_project_card_component__["a" /* ProjectCardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_blog_card_blog_card_component__["a" /* BlogCardComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_blog_create_blog_create_component__["a" /* BlogCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_22__views_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__views_login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_dashboard_display_dashboard_display_component__["a" /* DashboardDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_blog_edit_blog_edit_component__["a" /* BlogEditComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_truncate_pipe__["a" /* TruncatePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_10__services_validate_service__["a" /* ValidateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog-card/blog-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.link {\r\n  border: solid 1px black;\r\n  background: #654597;\r\n  color: white;\r\n  padding: 5px;\r\n  margin: 5px 0;\r\n}\r\n\r\nh2, h3, p {\r\n  margin:5px 0;\r\n}\r\n\r\na:link {\r\n  text-decoration: none;\r\n}\r\n\r\n.blog-card {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n  .blog-card {\r\n    border: 1px white solid;\r\n    background: lightgray;\r\n    margin: 10px 0 10px 10px;\r\n    padding: 10px 10px 15px 10px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  .actions {\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n\r\n  .link {\r\n    width: inherit;\r\n    margin: 5px;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n  .actions {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .link {\r\n    width: inherit;\r\n    text-align: center;\r\n  }\r\n\r\n  .blog-card {\r\n    border: 1px white solid;\r\n    background: lightgray;\r\n    margin: 10px 0;\r\n    padding: 10px 10px 15px 10px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog-card/blog-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-card\">\r\n  <h2>{{blog.title}}</h2>\r\n  <h3>{{blog.author}} | {{blog.date | date}}</h3>\r\n  <p>\r\n    {{blog.body}}\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog-card/blog-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogCardComponent = (function () {
    function BlogCardComponent() {
    }
    BlogCardComponent.prototype.ngOnInit = function () {
    };
    return BlogCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('blog'),
    __metadata("design:type", Object)
], BlogCardComponent.prototype, "blog", void 0);
BlogCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-card',
        template: __webpack_require__("../../../../../src/app/components/blog-card/blog-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog-card/blog-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogCardComponent);

//# sourceMappingURL=blog-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog-create/blog-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content{\r\n  padding: 20px;\r\n}\r\n\r\n.input-section {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 5px;\r\n}\r\n\r\nh1, h2 {\r\n  margin: 5px;\r\n}\r\n.submit-button{\r\n  border: none;\r\n  background-color: #228B22;\r\n  color: white;\r\n  padding: 10px;\r\n}\r\n.submit-button:hover{\r\n  background-color: #2B6240;\r\n}\r\n\r\n.alert-success {\r\n  background-color: lightgreen;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.alert-error {\r\n  background-color: lightcoral;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n  .submit-button {\r\n    width: 25%;\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog-create/blog-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <flash-messages></flash-messages>\r\n  <h2 class=\"page-header\">New Blog Post</h2>\r\n  <form (submit)=\"newPostSubmit()\">\r\n    <div class=\"input-section\">\r\n      <label>Title</label>\r\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"half\">\r\n    </div>\r\n    <div class=\"input-section\">\r\n      <label>Author</label>\r\n      <input type=\"text\" [(ngModel)]=\"author\" name=\"author\" class=\"half\">\r\n    </div>\r\n    <div class=\"input-section\">\r\n      <label>Body</label>\r\n      <textarea style=\"height: 100px\" [(ngModel)]=\"content\" name=\"content\"></textarea>\r\n    </div>\r\n    <div class=\"input-section\">\r\n      <input type=\"submit\" value=\"Add Post\" class=\"submit-button\">\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog-create/blog-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogCreateComponent = (function () {
    function BlogCreateComponent(blogService, flashMessage) {
        this.blogService = blogService;
        this.flashMessage = flashMessage;
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
        var user = this.getUser();
        this.author = user.name;
    };
    BlogCreateComponent.prototype.newPostSubmit = function () {
        var _this = this;
        var post = {
            title: this.title,
            author: this.author,
            body: this.content
        };
        this.blogService.savePost(post).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('This message has been added to drafts', { cssClass: 'alert-success', timeout: 5000 });
                _this.title = "";
                _this.author = "";
                _this.content = "";
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-error', timeout: 5000 });
            }
        });
    };
    BlogCreateComponent.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return user;
    };
    return BlogCreateComponent;
}());
BlogCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-create',
        template: __webpack_require__("../../../../../src/app/components/blog-create/blog-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog-create/blog-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], BlogCreateComponent);

var _a, _b;
//# sourceMappingURL=blog-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog-edit/blog-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-card {\r\n  padding-top: 10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n}\r\n\r\nh1, h2, h3 {\r\n  margin: 0;\r\n}\r\n\r\n.post-card-item {\r\n  padding: 5px 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog-edit/blog-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <select [(ngModel)]=\"selectedPost\">\r\n    <option *ngFor=\"let post of posts\" [ngValue]=\"post\">{{post.title}}</option>\r\n  </select>\r\n  <div *ngIf=\"selectedPost\" class=\"post-card\">\r\n    <h3 class=\"post-card-item\">Edit {{selectedPost.title}}</h3>\r\n    <label class=\"post-card-item\">Title</label>\r\n    <input [(ngModel)]=\"selectedPost.title\" class=\"post-card-item\">\r\n    <div class=\"post-card-item\">\r\n      <label>In Production</label>\r\n      <input type=\"checkbox\" [(ngModel)]=\"selectedPost.production\">\r\n    </div>\r\n    <label class=\"post-card-item\">Blog Body</label>\r\n    <textarea style=\"height: 100px\"  [(ngModel)]=\"selectedPost.body\" class=\"post-card-item\"></textarea>\r\n    <div class=\"actions post-card-item\">\r\n      <button (click)=\"delete(selectedPost._id)\">Delete</button>\r\n      <button (click)=\"update()\">Update</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog-edit/blog-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogEditComponent = (function () {
    function BlogEditComponent(blogService) {
        this.blogService = blogService;
    }
    BlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.getAllPosts().subscribe(function (posts) {
            console.log(posts);
            _this.posts = posts.posts.reverse();
            console.log(_this.posts);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    BlogEditComponent.prototype.delete = function (id) {
        this.blogService.deletePosts(id).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    BlogEditComponent.prototype.update = function () {
        console.log(this.selectedPost);
        this.blogService.updatePost(this.selectedPost._id, this.selectedPost.title, this.selectedPost.production, this.selectedPost.body).subscribe(function (data) {
            console.log(data);
        });
    };
    return BlogEditComponent;
}());
BlogEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-edit',
        template: __webpack_require__("../../../../../src/app/components/blog-edit/blog-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog-edit/blog-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], BlogEditComponent);

var _a;
//# sourceMappingURL=blog-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard-display/dashboard-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard-display/dashboard-display.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard-display works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard-display/dashboard-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDisplayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardDisplayComponent = (function () {
    function DashboardDisplayComponent() {
    }
    DashboardDisplayComponent.prototype.ngOnInit = function () {
    };
    return DashboardDisplayComponent;
}());
DashboardDisplayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-display',
        template: __webpack_require__("../../../../../src/app/components/dashboard-display/dashboard-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard-display/dashboard-display.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardDisplayComponent);

//# sourceMappingURL=dashboard-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/element-block/element-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".element {\r\n  min-height: 100px;\r\n  max-height: 100px;\r\n  min-width: 100px;\r\n  max-width: 100px;\r\n  border: solid black;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.element-name {\r\n  font-size: 45px;\r\n  font-family: serif;\r\n  color: white;\r\n}\r\n\r\n.element-title {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  font-size: 15px;\r\n  color: white;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/element-block/element-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"element\" [ngStyle]=\"{ 'background-color': elementColor }\">\r\n  <span class=\"element-title\">{{elementTitle}}</span>\r\n  <span class=\"element-name\">{{elementName}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/element-block/element-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementBlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementBlockComponent = (function () {
    function ElementBlockComponent() {
    }
    ElementBlockComponent.prototype.ngOnInit = function () {
    };
    return ElementBlockComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
    __metadata("design:type", String)
], ElementBlockComponent.prototype, "elementName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('color'),
    __metadata("design:type", String)
], ElementBlockComponent.prototype, "elementColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], ElementBlockComponent.prototype, "elementTitle", void 0);
ElementBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'element-block',
        template: __webpack_require__("../../../../../src/app/components/element-block/element-block.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/element-block/element-block.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ElementBlockComponent);

//# sourceMappingURL=element-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/element-contact/element-contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n\r\n.contact-elementRow {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  width: 100%;\r\n}\r\n\r\na:link {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n@media screen and (min-width: 650px) {\r\n\r\n  .hidden{\r\n    display: none;\r\n  }\r\n\r\n  .contact-elementRow {\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .container {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .element-content {\r\n    margin: 0;\r\n  }\r\n\r\n  .title {\r\n    text-align: center;\r\n    margin: 10px;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/element-contact/element-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <element-block class=\"hidden\" name=\"Cm\" color=\"#33658A\"></element-block>\r\n\r\n  <h1 class=\"title hidden\">Contact Me</h1>\r\n\r\n  <div class=\"contact-elementRow\">\r\n    <a href=\"https://www.linkedin.com/in/adrian-dunham-2521488a\">\r\n      <element-block name=\"Li\" color=\"#0077b5\" title=\"LinkedIn\"></element-block>\r\n    </a>\r\n    <a href=\"mailto:adunham95@gmail.com?Subject=Website%20Email\">\r\n      <element-block name=\"Em\" color=\"#dd4b39\" title=\"Email\"></element-block>\r\n    </a>\r\n    <a href=\"http://www.github.com/adunham95\">\r\n      <element-block name=\"Gh\" color=\"#24292E\" title=\"GitHub\"></element-block>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/element-contact/element-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementContactComponent = (function () {
    function ElementContactComponent() {
    }
    ElementContactComponent.prototype.ngOnInit = function () {
    };
    return ElementContactComponent;
}());
ElementContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'element-contact',
        template: __webpack_require__("../../../../../src/app/components/element-contact/element-contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/element-contact/element-contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ElementContactComponent);

//# sourceMappingURL=element-contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a, .item {\r\n  display: block;\r\n  color: white;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n}\r\n\r\na.homeActive, .home:hover {\r\n  background-color: #00A7E1;\r\n}\r\na.aboutActive, .about:hover {\r\n  background-color: #2B6240;\r\n}\r\na.projectsActive, .projects:hover {\r\n  background-color: #654597;\r\n}\r\na.blogActive, .blog:hover {\r\n  background-color: #7E6551;\r\n}\r\n\r\na.dashboardActive, .dashboard:hover {\r\n  background-color: #0000cc;\r\n}\r\n\r\n.logout:hover {\r\n  background-color: #dd4b39;\r\n}\r\n\r\n\r\n\r\n.navBar{\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  background: #5F6B6F;\r\n  color: white;\r\n  z-index: 2;\r\n}\r\n\r\n#navigation {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.content {\r\n  margin-top: 30px;\r\n}\r\n\r\n.close {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n\r\n  a, .item {\r\n    line-height: 25px;\r\n    vertical-align: middle;\r\n    height: 25px;\r\n  }\r\n\r\n  /*Hides the menu button on non mobile*/\r\n  .tricon {\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n\r\n  /*Puts the menu icon on the right of screen on mobile*/\r\n  .tricon{\r\n    float: right;\r\n  }\r\n\r\n  .navBar {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n  .item {\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    font-size: 25px;\r\n  }\r\n\r\n  #navigation {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n  }\r\n\r\n  #navigation {\r\n    height: 0;\r\n    width: 100%;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #5F6B6F; /* Black fallback color for browsers that dont user RGBA*/\r\n    background-color: rgba(95,107,111, 0.9);/* Black w/opacity */\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */\r\n    color: white;\r\n  }\r\n\r\n  a{\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-size: 45pt;\r\n  }\r\n\r\n  .close {\r\n    display: inherit;\r\n  }\r\n\r\n  div.close {\r\n    font-size: 50pt;\r\n    text-align: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n  }\r\n\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\r\n  <div class=\"item\" (click)=\"openNav()\">{{title}} <span class=\"tricon\"> &#9776;</span> </div>\r\n  <div id=\"navigation\">\r\n    <div class=\"close\" (click)=\"closeNav()\">\r\n      &times;\r\n    </div>\r\n    <a routerLink=\"/\" (click)=\"closeNav()\" routerLinkActive=\"homeActive\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"home\">\r\n      <element-block name=\"H\" color=\"#00A7E1\" class=\"close\"></element-block>\r\n      Home\r\n    </a>\r\n    <a routerLink=\"/about\" (click)=\"closeNav()\" routerLinkActive=\"aboutActive\" class=\"about\">\r\n      <element-block name=\"Am\" color=\"#2B6240\" class=\"close\"></element-block>\r\n      About\r\n    </a>\r\n    <a routerLink=\"/project\" (click)=\"closeNav()\" routerLinkActive=\"projectsActive\" class=\"projects\">\r\n      <element-block name=\"Pr\" color=\"#654597\" class=\"close\"></element-block>\r\n      Projects\r\n    </a>\r\n    <a routerLink=\"/blog\" (click)=\"closeNav()\" routerLinkActive=\"blogActive\" class=\"blog\">\r\n      <element-block name=\"Bg\" color=\"#7E6551\" class=\"close\"></element-block>\r\n      Blog\r\n    </a>\r\n    <a routerLink=\"/dashboard\" *ngIf=\"authService.loggedIn()\" (click)=\"closeNav()\" routerLinkActive=\"dashboardActive\" class=\"dashboard\">\r\n      <element-block name=\"Db\" color=\"#0000cc\" class=\"close\"></element-block>\r\n      Dashboard\r\n    </a>\r\n    <a routerLink=\"/\" *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" class=\"logout\">\r\n      <element-block name=\"Lg\" color=\"#b32d00\" class=\"close\"></element-block>\r\n      Logout\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(authService) {
        this.authService = authService;
        this.title = 'Adrian Dunham';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    /* Open */
    NavBarComponent.prototype.openNav = function () {
        document.getElementById("navigation").style.height = "100%";
    };
    /* Close */
    NavBarComponent.prototype.closeNav = function () {
        document.getElementById("navigation").style.height = "0%";
    };
    NavBarComponent.prototype.onLogoutClick = function () {
        document.getElementById("navigation").style.height = "0%";
        this.authService.logout();
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nav-bar',
        template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavBarComponent);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-card/project-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.link {\r\n  border: solid 1px black;\r\n  background: #654597;\r\n  color: white;\r\n  padding: 5px;\r\n  margin: 5px 0;\r\n}\r\n\r\nh2, h3, p {\r\n  margin:5px 0;\r\n}\r\n\r\na:link {\r\n  text-decoration: none;\r\n}\r\n\r\n.project-card {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n  .project-card {\r\n    border: 1px white solid;\r\n    background: lightgray;\r\n    margin: 10px 0 10px 10px;\r\n    padding: 10px 10px 15px 10px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  .actions {\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n\r\n  .link {\r\n    width: inherit;\r\n    margin: 5px;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n  .actions {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .link {\r\n    width: inherit;\r\n    text-align: center;\r\n  }\r\n\r\n  .project-card {\r\n    border: 1px white solid;\r\n    background: lightgray;\r\n    margin: 10px 0;\r\n    padding: 10px 10px 15px 10px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-card/project-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"project-card\">\r\n  <h2>{{project.name}}</h2>\r\n  <h3>{{project.role}}</h3>\r\n  <p>{{project.descriptionShort}}</p>\r\n  <div class=\"actions\">\r\n    <a [href]=project.githubURL class=\"link\">GitHub</a>\r\n    <a [href]=project.website class=\"link\">Project</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/project-card/project-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectCardComponent = (function () {
    function ProjectCardComponent() {
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
    };
    return ProjectCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('project'),
    __metadata("design:type", Object)
], ProjectCardComponent.prototype, "project", void 0);
ProjectCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'project-card',
        template: __webpack_require__("../../../../../src/app/components/project-card/project-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-card/project-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectCardComponent);

//# sourceMappingURL=project-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/truncate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);

//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isProd = true;
    }
    AuthService.prototype.getEndpoint = function (ep) {
        if (this.isProd) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    ;
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var endPoint = this.getEndpoint('users/register');
        return this.http.post(endPoint, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var endPoint = this.getEndpoint('users/authentication');
        return this.http.post(endPoint, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var endPoint = this.getEndpoint('users/profile');
        return this.http.get(endPoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        this.isProd = true;
    }
    BlogService.prototype.getEndpoint = function (ep) {
        if (this.isProd) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    ;
    BlogService.prototype.savePost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var endPoint = this.getEndpoint('posts/savepost');
        return this.http.post(endPoint, post, { headers: headers }).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getAllPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var endPoint = this.getEndpoint('posts/getposts/all');
        return this.http.get(endPoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getPublishedPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var endPoint = this.getEndpoint('posts/getposts/published');
        return this.http.get(endPoint, { headers: headers }).map(function (res) { return res.json(); });
    };
    BlogService.prototype.deletePosts = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var endPoint = this.getEndpoint('posts/deletepost');
        return this.http.post(endPoint, { _id: id }, { headers: headers }).map(function (res) { return res.json(); });
    };
    BlogService.prototype.updatePost = function (id, title, isProduction, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var endPoint = this.getEndpoint('posts/updatepost');
        return this.http.post(endPoint, { id: id, title: title, production: isProduction, body: body }, { headers: headers }).map(function (res) { return res.json(); });
    };
    return BlogService;
}());
BlogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BlogService);

var _a;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/resume.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeService = (function () {
    function ResumeService() {
    }
    ResumeService.prototype.getResume = function () {
        this.resume = {
            "about": {
                "name": "Adrian Dunham",
                "email": "adunham95@gmail.com",
                "phone": "828-398-9038",
                "website": "adriandunham.com",
                "aboutMe": "I am a recent graduate of WCU looking for a job as a front end developer. After writing my first line of HTML and getting 'HELLO WORLD' on the screen I was hooked. I continued to learn HTML, CSS, JavaScript writing basic websites to more advanced single pages app. I still have that passion for turning words on the screen on masterpieces on the screen. After building a basic personal website. I have rewritten it multiple times, making it more modern and adding more technology. My most recent project was taking static designs from a designer and converting it to a WordPress template using VueJS and the WordPress API. I am currently looking for a job as front-end web developer interested in challenges. If you have a challenge for me to tackle contact me at adunham95@gmail.com",
                "tagLine": "Im Adrian and I am a front end devloper",
                "accomplishments": [
                    {
                        "date": "May 2017",
                        "title": "Graduated College"
                    },
                    {
                        "date": "October 2016",
                        "title": "Released First Hybrid App on the Google Play store"
                    },
                    {
                        "date": "August 2015",
                        "title": "Published my first website"
                    }
                ]
            },
            "education": [
                {
                    "school": "Western Carolina University",
                    "schoolLocation": "Cullowhee,NC",
                    "degree": "BS in Business Administration",
                    "major": "Computer Information Systems",
                    "graduation": "May 2017"
                }
            ],
            "experience": [
                {
                    "companyName": "DamGap Studios",
                    "location": "Freelance",
                    "positions": [
                        {
                            "roleName": "Freelance Web Developer",
                            "time": "May 2017-Current",
                            "duties": ['null']
                        }
                    ]
                },
                {
                    "companyName": "Western Carolina University",
                    "location": "Cullowhee, NC",
                    "positions": [
                        {
                            "roleName": "Desktop Service Technician",
                            "time": "May 2015-May 2017",
                            "duties": [
                                "Hardware Repairs and Dell laptops and desktops, Assist students and staff in basic and advanced computer troubleshooting, virus removal, performance issues, and hardware issues",
                                "Performing system re-imaging using SCCM",
                                "Experience with the the Cherwell Customer Service Management"
                            ]
                        },
                        {
                            "roleName": "Student Help Desk Assistant",
                            "time": "January 2014-April 2015",
                            "duties": [
                                "Assisting students in basic computer troubleshooting including virus removal, wireless issues, performance issues",
                                "Software support with Windows 7, 8, 8.1, 10 and Mac OS X",
                                "Experience with the the Cherwell Customer Service Management"
                            ]
                        }
                    ]
                },
                {
                    "companyName": "Asheville City Schools",
                    "location": "Asheville, NC",
                    "positions": [
                        {
                            "roleName": "Helpdesk IT Support Technician",
                            "time": " June–August 2012, June-August 2013",
                            "duties": [
                                "Provided hardware and software support for approx.700 students and faculty using MS Windows XP,7, MS Office 2007, and various software products",
                                "Resolved all common and uncommon computer problems including viruses, slow performance, errors, software installation and configuration, wireless networks, and peripheral problems",
                                "Provided a timely resolution for all technical support and technology issues",
                                "Resourceful in handling competing priorities in a fast-paced environment."
                            ]
                        },
                        {
                            "roleName": "IT Intern",
                            "time": "January 2013- June 2013",
                            "duties": [
                                "Provided technical support for MS Windows 7, MS Office 2007, 2010",
                                "Hands on support and repair of Dell and Lenovo desktops",
                                "Deployed and creating images using Dell Kace Box",
                                "Assisting in providing technical support for a Windows Enterprise environment"
                            ]
                        }
                    ]
                }
            ],
            "projects": [
                {
                    "name": "Ashely T Lee",
                    "role": "Co-Developer",
                    "dateComplete": "July 2017",
                    "descriptionShort": "A Wordpress theme using VueJS",
                    "githubURL": "https://github.com/DamGapStudios/AshleyTLee.com",
                    "website": "http://www.ashleytlee.com/",
                    "imageURL": "../../assets/mockup/AshleyTLee_dell-xps15-front.png",
                    "technology": [
                        "VueJS", "HTML", "Wordpress"
                    ]
                },
                {
                    "name": "Travel Julia's Way",
                    "role": "Co-Developer",
                    "dateComplete": "April 2017",
                    "descriptionShort": "A Wordpress site built using the Twig Templateing Language",
                    "githubURL": "https://github.com/AmGarera/Traveljuliasway.com",
                    "website": "http://www.traveljuliasway.com",
                    "imageURL": "../../assets/mockup/TravelJuliasWay_dell-xps15-front.png",
                    "technology": [
                        "HTML", "Wordpress", "Twig", "HTML5"
                    ]
                },
                {
                    "name": "TreeApp Beta",
                    "role": "Lead Developer",
                    "dateComplete": "ay 2017",
                    "descriptionShort": "Capstone Project to build an app to display trees around Western Carolina University’s campus using the user's geolocation",
                    "githubURL": "https://github.com/adunham95/TreeApp-Capstone",
                    "website": "https://play.google.com/store/apps/details?id=com.damgap.treeapp",
                    "technology": [
                        "Ionic", "AngularJS 2", "CordovaPhoneGap"
                    ]
                },
                {
                    "name": "AtomBrew",
                    "role": "Co-Developer",
                    "dateComplete": "October 2017",
                    "descriptionShort": "A brewery Android app based on the BreweryDB. A hybrid Mobile App using AngularJS & Ionic Framework",
                    "githubURL": "https://github.com/AmGarera/IonBrew",
                    "website": "https://play.google.com/store/apps/details?id=com.DamGap.atombrew433336",
                    "technology": [
                        "Ionic", "AngularJS 1", "CordovaPhoneGap"
                    ]
                },
                {
                    "name": "Reems Creek Community Website",
                    "role": "Lead Developer",
                    "dateComplete": "April 2015",
                    "descriptionShort": "A community website for the members of Reems Creek Community",
                    "githubURL": "",
                    "website": "http://www.reemscreekcommunity.org/",
                    "technology": [
                        "Wordpress"
                    ]
                }
            ],
            "knowledge": {
                "webDevelopment": ["HTML", "CSS", "JavaScript", "Angular JS", "VueJS", "Wordpress"],
                "os": ["Windows 7", "Windows 8", "Windows 8.1", "Windows 10", "Mac OS X", "Android"],
                "imaging": ["Dell’s Kace Box", "SCCM", "Casper Imaging"],
                "programs": ["Cherwell Service Management", "Visual Studio 2015", "WebStorm", "PHPStorm", "IntelliJ IDEA"]
            },
            "skills": [
                "System deployment using Scripted Installation",
                "Proficient in computer repair and administrative organizing",
                "Problem solving skills",
                "Effective interpersonal communication skills",
                "Ingenuity and innovation in all aspects of the job"
            ],
            "contact": [
                {
                    "source": "Github",
                    "url": "github.com/adunham95"
                },
                {
                    "source": "Linkedin",
                    "url": "https://www.linkedin.com/in/adrian-dunham-2521488a"
                }
            ],
        };
        return this.resume;
    };
    ResumeService.prototype.getBlog = function () {
        this.blog = [
            {
                "id": 1,
                "title": "What I learned in a year",
                "author": "Adrian Dunham",
                "date": "TBD 2017",
                "content": "I have some text here"
            },
            {
                "id": 2,
                "title": "Why I do this",
                "author": "Adrian Dunham",
                "date": "August 8 2017",
                "content": "I have some text here"
            }
        ];
        return this.blog;
    };
    return ResumeService;
}());
ResumeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ResumeService);

//# sourceMappingURL=resume.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/views/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu);", ""]);

// module
exports.push([module.i, ".main-content {\r\n  padding: 20px;\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.element {\r\n  height: 100px;\r\n  min-width: 100px;\r\n  border: solid black;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.element-title {\r\n  font-size: 45px;\r\n  font-family: serif;\r\n}\r\n\r\n.element-content {\r\n  margin: 20px;\r\n}\r\n\r\n.linkedIn {\r\n  background: #0077b5;\r\n  color: white;\r\n}\r\n\r\n.email {\r\n  background: #dd4b39;\r\n  color: white;\r\n}\r\n\r\n.gitHub {\r\n  background: #24292E;\r\n  color: white;\r\n}\r\n\r\n.contact-elementRow {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  width: 100%;\r\n}\r\n\r\n.contact {\r\n}\r\n\r\n\r\n@media screen and (max-width: 426px) {\r\n\r\n  h1.title {\r\n    margin: 33px 10px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n  .container {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .element {\r\n    max-width: 100px;\r\n  }\r\n\r\n  .element-content {\r\n    margin: 0;\r\n  }\r\n\r\n  .title {\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <div class=\"container\">\r\n    <element-block name='Am' color=\"#2B6240\"></element-block>\r\n\r\n    <div class=\"element-content\">\r\n      <h1 class=\"title\">About Me</h1>\r\n\r\n      <p>\r\n        {{ myResume.about.aboutMe}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"container\">\r\n    <element-block name=\"Mi\" color=\"#85BDA6\"></element-block>\r\n\r\n    <div class=\"element-content\">\r\n      <h1 class=\"title\">Milestones</h1>\r\n\r\n      <ul>\r\n        <li *ngFor=\"let item of myResume.about.accomplishments\">\r\n          <h3>{{item.title}}</h3>\r\n          <time>{{item.date}}</time>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <element-contact></element-contact>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resume_service__ = __webpack_require__("../../../../../src/app/services/resume.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


__WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */];
var AboutPageComponent = (function () {
    function AboutPageComponent(resume) {
        this.resume = resume;
    }
    AboutPageComponent.prototype.getMyResume = function () {
        console.log('Running getMyResume');
        this.myResume = this.resume.getResume();
    };
    AboutPageComponent.prototype.ngOnInit = function () {
        this.getMyResume();
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about-page',
        template: __webpack_require__("../../../../../src/app/views/about-page/about-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/about-page/about-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */]) === "function" && _a || Object])
], AboutPageComponent);

var _a;
//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/blog-page/blog-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu);", ""]);

// module
exports.push([module.i, ".main-content {\r\n  padding: 20px;\r\n  color: black;\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.post-card {\r\n  margin: 10px 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/blog-page/blog-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <blog-card [blog]=\"post\" *ngFor=\"let post of posts\"></blog-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/blog-page/blog-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogPageComponent = (function () {
    function BlogPageComponent(blogService) {
        this.blogService = blogService;
    }
    BlogPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.getPublishedPosts().subscribe(function (posts) {
            console.log(posts);
            _this.posts = posts.posts.reverse();
            console.log(_this.posts);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return BlogPageComponent;
}());
BlogPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-page',
        template: __webpack_require__("../../../../../src/app/views/blog-page/blog-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/blog-page/blog-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], BlogPageComponent);

var _a;
//# sourceMappingURL=blog-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboard-page/dashboard-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import url('https://fonts.googleapis.com/css?family=Ubuntu');*/\r\n\r\n.main-content {\r\n  padding-top: 10px;\r\n  color: black;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n/*.dashView {*/\r\n  /*background-color: lightblue;*/\r\n  /*height: auto;*/\r\n/*}*/\r\n\r\n/*.dashNav {*/\r\n  /*background-color: lightgreen;*/\r\n/*}*/\r\n\r\n.link {\r\n  text-decoration: none;\r\n  color: white;\r\n  border: none;\r\n  padding: 10px;\r\n}\r\n\r\n@media screen and (min-width: 427px) {\r\n\r\n  .dashNav{\r\n    width: 25%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n  }\r\n\r\n  .link {\r\n    width: auto;\r\n    margin: 0;\r\n    padding: 20px;\r\n  }\r\n  .link:hover{\r\n    background-color: #228B22;\r\n  }\r\n\r\n  .dashView{\r\n    width: 75%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .linkActive {\r\n    border-left: solid darkgreen 5px;\r\n    background-color: green;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n\r\n  .main-content {\r\n    padding-top:19px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  .dashNav {\r\n    height: 40px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-bottom: solid grey;\r\n  }\r\n\r\n  .link {\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n  }\r\n\r\n  .linkActive {\r\n    background-color: green;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard-page/dashboard-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <div class=\"dashNav\">\r\n    <a routerLink=\"/dashboard/\" (click)=\"closeNav()\" routerLinkActive=\"linkActive\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"link\">Dashboard</a>\r\n    <a routerLink=\"/dashboard/newpost\" (click)=\"closeNav()\" routerLinkActive=\"linkActive\" class=\"link\">New Post</a>\r\n    <a routerLink=\"/dashboard/editpost\" (click)=\"closeNav()\" routerLinkActive=\"linkActive\" class=\"link\">Edit Post</a>\r\n  </div>\r\n  <div class=\"dashView\">\r\n     <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboard-page/dashboard-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardPageComponent = (function () {
    function DashboardPageComponent() {
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
    };
    return DashboardPageComponent;
}());
DashboardPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-page',
        template: __webpack_require__("../../../../../src/app/views/dashboard-page/dashboard-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/dashboard-page/dashboard-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardPageComponent);

//# sourceMappingURL=dashboard-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu);", ""]);

// module
exports.push([module.i, ".main-content {\r\n  font-family: 'Ubuntu', sans-serif;\r\n  padding: 20px;\r\n}\r\n\r\n.container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.element-content {\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 427px) {\r\n  h1.title {\r\n    margin: 33px 10px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n  .container {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .element-content {\r\n    margin: 0;\r\n  }\r\n\r\n  .title {\r\n    text-align: center;\r\n    margin: 10px;\r\n  }\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <h1>{{ myResume.about.tagLine}}</h1>\r\n\r\n  <p>\r\n    Currently I am job searching for a Front End Developer position.\r\n  </p>\r\n\r\n\r\n  <div class=\"project-container container\">\r\n    <element-block name=\"Pr\" color=\"#654597\"></element-block>\r\n\r\n    <div class=\"element-content\">\r\n      <h1 class=\"title\">Latest Project</h1>\r\n\r\n      <project-card [project]=\"item\" *ngFor=\"let item of myResume.projects | slice:0:1; let i=index\"></project-card>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"blog-container container\">\r\n    <element-block name=\"Bg\" color=\"#7E6551\" class=\"close\"></element-block>\r\n    <div class=\"element-content\">\r\n      <h1 class=\"title\">Recent Posts</h1>\r\n    </div>\r\n      <div *ngFor=\"let item of myBlog | slice:0:1; let i=index\">{{item.title}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resume_service__ = __webpack_require__("../../../../../src/app/services/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = (function () {
    function HomePageComponent(resume, blogService) {
        this.resume = resume;
        this.blogService = blogService;
    }
    HomePageComponent.prototype.getMyResume = function () {
        this.myResume = this.resume.getResume();
    };
    HomePageComponent.prototype.getMyBlog = function () {
        var _this = this;
        this.blogService.getPublishedPosts().subscribe(function (posts) {
            console.log(posts);
            _this.myBlog = posts.posts;
            console.log(_this.myBlog);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HomePageComponent.prototype.ngOnInit = function () {
        this.getMyResume();
        this.getMyBlog();
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/views/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/home-page/home-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]) === "function" && _b || Object])
], HomePageComponent);

var _a, _b;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu);", ""]);

// module
exports.push([module.i, ".main-content {\r\n  font-family: 'Ubuntu', sans-serif;\r\n  padding: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"password\"] {\r\n  border: none;\r\n}\r\n\r\n.header {\r\n  color: white;\r\n}\r\n\r\n.button-login {\r\n  background-color: #228B22;\r\n  color: white;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 10px;\r\n}\r\n\r\n.login, .register {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n@media screen and (min-width: 427px) {\r\n\r\n  .main-content {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 600px;\r\n  }\r\n\r\n  .login, .register {\r\n    margin: 10px;\r\n  }\r\n  .form-group {\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%\r\n  }\r\n\r\n  input {\r\n    width: 100%;\r\n    margin: 10px 0;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n  .main-content {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 900px;\r\n  }\r\n\r\n  .form-group {\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%\r\n  }\r\n\r\n  input {\r\n    width: 100%;\r\n    margin: 10px 0;\r\n  }\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"login\">\r\n    <element-block name=\"Li\" color=\"#228B22\"></element-block>\r\n    <h2 class=\"header\">Login page</h2>\r\n    <flash-messages></flash-messages>\r\n    <form (submit)=\"onLoginSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label class=\"header\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"header\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n      </div>\r\n      <input type=\"submit\" class=\"button button-login\" value=\"Login\">\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"register\">\r\n    <element-block name=\"Re\" color=\"#\"></element-block>\r\n    <h2 class=\"header\">Register</h2>\r\n\r\n    <form (submit)=\"onRegisterUser()\">\r\n      <div class=\"form-group\">\r\n        <label class=\"header\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usernameRegister\" name=\"username\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"header\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"passwordRegister\" name=\"password\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"header\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nameRegister\" name=\"password\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"header\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"emailRegister\" name=\"password\">\r\n      </div>\r\n      <input type=\"submit\" class=\"button button-register\" value=\"Register\">\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPageComponent = (function () {
    function LoginPageComponent(router, flashMessage, authService, validateService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.validateService = validateService;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-error', timeout: 10000000 });
            }
        });
    };
    LoginPageComponent.prototype.onRegisterUser = function () {
        var _this = this;
        var user = {
            name: this.nameRegister,
            email: this.emailRegister,
            username: this.usernameRegister,
            password: this.passwordRegister
        };
        // Required Feild
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-error', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-error', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.passwordRegister = '';
                _this.emailRegister = '';
                _this.nameRegister = '';
                _this.usernameRegister = '';
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-error', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/views/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object])
], LoginPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/no-page/no-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content {\r\n  padding: 20px;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1024px) {\r\n\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n  .main-content {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .element {\r\n    max-width: 100px;\r\n  }\r\n\r\n  .element-content {\r\n    margin: 0;\r\n  }\r\n\r\n  .title {\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/no-page/no-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <element-block name=\"Na\" color=\"#8D1501\"></element-block>\r\n  <h1>Page not found</h1>\r\n  <p>Error 404</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/no-page/no-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoPageComponent = (function () {
    function NoPageComponent() {
    }
    NoPageComponent.prototype.ngOnInit = function () {
    };
    return NoPageComponent;
}());
NoPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-no-page',
        template: __webpack_require__("../../../../../src/app/views/no-page/no-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/no-page/no-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NoPageComponent);

//# sourceMappingURL=no-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/project-page/project-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content {\r\n  padding: 20px;\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.element-content {\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n\r\n  h1.title {\r\n    margin: 33px 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n  .container {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .element-content {\r\n    margin: 0;\r\n  }\r\n\r\n  .title {\r\n    text-align: center;\r\n    margin: 10px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project-page/project-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n  <div class=\"container\">\r\n    <element-block name=\"Pr\" color=\"#654597\"></element-block>\r\n\r\n    <div class=\"element-content\">\r\n      <h1 class=\"title\">Projects</h1>\r\n\r\n      <project-card [project]=\"item\" *ngFor=\"let item of myResume.projects\"></project-card>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n <element-contact></element-contact>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project-page/project-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resume_service__ = __webpack_require__("../../../../../src/app/services/resume.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectPageComponent = (function () {
    function ProjectPageComponent(resume) {
        this.resume = resume;
    }
    ProjectPageComponent.prototype.getMyResume = function () {
        console.log('Running getMyResume');
        this.myResume = this.resume.getResume();
    };
    ProjectPageComponent.prototype.ngOnInit = function () {
        this.getMyResume();
    };
    return ProjectPageComponent;
}());
ProjectPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-page',
        template: __webpack_require__("../../../../../src/app/views/project-page/project-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/project-page/project-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */]) === "function" && _a || Object])
], ProjectPageComponent);

var _a;
//# sourceMappingURL=project-page.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map