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

module.exports = "<div class=\"my-content\">\r\n\r\n  <div class=\"navBar\">\r\n    <div class=\"item\" (click)=\"openNav()\">{{title}} <span class=\"tricon\"> &#9776;</span> </div>\r\n    <div id=\"navigation\">\r\n      <div class=\"close\" (click)=\"closeNav()\">\r\n        &times;\r\n      </div>\r\n      <a routerLink=\"/\" (click)=\"closeNav()\" routerLinkActive=\"home\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <element-block name=\"H\" color=\"#00A7E1\" class=\"close\"></element-block>\r\n        Home\r\n      </a>\r\n      <a routerLink=\"/about\" (click)=\"closeNav()\" routerLinkActive=\"about\">\r\n        <element-block name=\"Am\" color=\"#2B6240\" class=\"close\"></element-block>\r\n        About\r\n      </a>\r\n      <a routerLink=\"/project\" (click)=\"closeNav()\" routerLinkActive=\"projects\">\r\n        <element-block name=\"Pr\" color=\"#654597\" class=\"close\"></element-block>\r\n        Projects\r\n      </a>\r\n      <a routerLink=\"/blog\" (click)=\"closeNav()\" routerLinkActive=\"blog\">\r\n        <element-block name=\"Bg\" color=\"#7E6551\" class=\"close\"></element-block>\r\n        Blog\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
    AppComponent.prototype.expand = function () {
        console.log("Expanded");
        document.getElementById('navigation').setAttribute("style", "height: 100%, visibility: visible");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/views/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_no_page_no_page_component__ = __webpack_require__("../../../../../src/app/views/no-page/no-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_about_page_about_page_component__ = __webpack_require__("../../../../../src/app/views/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_blog_page_blog_page_component__ = __webpack_require__("../../../../../src/app/views/blog-page/blog-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_project_page_project_page_component__ = __webpack_require__("../../../../../src/app/views/project-page/project-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_element_block_element_block_component__ = __webpack_require__("../../../../../src/app/components/element-block/element-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_element_contact_element_contact_component__ = __webpack_require__("../../../../../src/app/components/element-contact/element-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_construction_page_construction_page_component__ = __webpack_require__("../../../../../src/app/views/construction-page/construction-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_project_card_project_card_component__ = __webpack_require__("../../../../../src/app/components/project-card/project-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_blog_card_blog_card_component__ = __webpack_require__("../../../../../src/app/components/blog-card/blog-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_blog_create_blog_create_component__ = __webpack_require__("../../../../../src/app/components/blog-create/blog-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_newpost_page_newpost_page_component__ = __webpack_require__("../../../../../src/app/views/newpost-page/newpost-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_dashboard_page_dashboard_page_component__ = __webpack_require__("../../../../../src/app/views/dashboard-page/dashboard-page.component.ts");
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__views_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__views_about_page_about_page_component__["a" /* AboutPageComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_12__views_blog_page_blog_page_component__["a" /* BlogPageComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_21__views_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */] },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_13__views_project_page_project_page_component__["a" /* ProjectPageComponent */] },
    { path: 'construction', component: __WEBPACK_IMPORTED_MODULE_16__views_construction_page_construction_page_component__["a" /* ConstructionPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__views_no_page_no_page_component__["a" /* NoPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__views_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__views_no_page_no_page_component__["a" /* NoPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__views_about_page_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__views_blog_page_blog_page_component__["a" /* BlogPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__views_project_page_project_page_component__["a" /* ProjectPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_element_block_element_block_component__["a" /* ElementBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_element_contact_element_contact_component__["a" /* ElementContactComponent */],
            __WEBPACK_IMPORTED_MODULE_16__views_construction_page_construction_page_component__["a" /* ConstructionPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_project_card_project_card_component__["a" /* ProjectCardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_blog_card_blog_card_component__["a" /* BlogCardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_blog_create_blog_create_component__["a" /* BlogCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__views_newpost_page_newpost_page_component__["a" /* NewpostPageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__views_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_blog_service__["a" /* BlogService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog-card/blog-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.link {\r\n  border: solid 1px black;\r\n  background: #654597;\r\n  color: white;\r\n  padding: 5px;\r\n  margin: 5px 0;\r\n}\r\n\r\nh2, h3, p {\r\n  margin:5px 0;\r\n}\r\n\r\na:link {\r\n  text-decoration: none;\r\n}\r\n\r\n.blog-card {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n  .blog-card {\r\n    border: 1px white solid;\r\n    background: lightgray;\r\n    margin: 10px 0 10px 10px;\r\n    padding: 10px 10px 15px 10px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  .actions {\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n\r\n  .link {\r\n    width: inherit;\r\n    margin: 5px;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n  .actions {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .link {\r\n    width: inherit;\r\n    text-align: center;\r\n  }\r\n\r\n  .blog-card {\r\n    border: 1px white solid;\r\n    background: lightgray;\r\n    margin: 10px 0;\r\n    padding: 10px 10px 15px 10px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog-card/blog-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-card\">\n  <h2>{{blog.title}}</h2>\n  <h3>{{blog.author}} | {{blog.date}}</h3>\n  <p>\n    {{blog.content}}\n  </p>\n</div>\n"

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog-create/blog-create.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blog-create/blog-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function BlogCreateComponent() {
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
    };
    return BlogCreateComponent;
}());
BlogCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-create',
        template: __webpack_require__("../../../../../src/app/components/blog-create/blog-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog-create/blog-create.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogCreateComponent);

//# sourceMappingURL=blog-create.component.js.map

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

module.exports = "<div class=\"element\" [ngStyle]=\"{ 'background-color': elementColor }\">\n  <span class=\"element-title\">{{elementTitle}}</span>\n  <span class=\"element-name\">{{elementName}}</span>\n</div>\n"

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

module.exports = "<div class=\"container\">\n  <element-block class=\"hidden\" name=\"Cm\" color=\"#33658A\"></element-block>\n\n  <h1 class=\"title hidden\">Contact Me</h1>\n\n  <div class=\"contact-elementRow\">\n    <a href=\"https://www.linkedin.com/in/adrian-dunham-2521488a\">\n      <element-block name=\"Li\" color=\"#0077b5\" title=\"LinkedIn\"></element-block>\n    </a>\n    <a href=\"mailto:adunham95@gmail.com?Subject=Website%20Email\">\n      <element-block name=\"Em\" color=\"#dd4b39\" title=\"Email\"></element-block>\n    </a>\n    <a href=\"http://www.github.com/adunham95\">\n      <element-block name=\"Gh\" color=\"#24292E\" title=\"GitHub\"></element-block>\n    </a>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"project-card\">\n  <h2>{{project.name}}</h2>\n  <h3>{{project.role}}</h3>\n  <p>{{project.descriptionShort}}</p>\n  <div class=\"actions\">\n    <a [href]=project.githubURL class=\"link\">GitHub</a>\n    <a [href]=project.website class=\"link\">Project</a>\n  </div>\n</div>\n"

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
    }
    BlogService.prototype.savePost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/posts/savepost', post, { headers: headers }).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/posts/getposts', { headers: headers }).map(function (res) { return res.json(); });
    };
    BlogService.prototype.deletePosts = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/posts/deletepost', { _id: id }, { headers: headers }).map(function (res) { return res.json(); });
    };
    return BlogService;
}());
BlogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
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

module.exports = "<div class=\"main-content\">\n\n  <div *ngFor=\"let post of posts\" class=\"post-card\">\n    <h2>{{post.title}}</h2>\n    <h3>{{post.author}}</h3>\n    <p>{{post.body}}</p>\n  </div>\n</div>\n"

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
        this.blogService.getPosts().subscribe(function (posts) {
            console.log(posts);
            _this.posts = posts.posts;
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

/***/ "../../../../../src/app/views/construction-page/construction-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\nh2, element-block {\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/construction-page/construction-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <element-block name=\"Cn\" color=\"#ffcc00\"></element-block>\n  <h2>This Site Is Under Construction</h2>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/construction-page/construction-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstructionPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstructionPageComponent = (function () {
    function ConstructionPageComponent() {
    }
    ConstructionPageComponent.prototype.ngOnInit = function () {
    };
    return ConstructionPageComponent;
}());
ConstructionPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-construction-page',
        template: __webpack_require__("../../../../../src/app/views/construction-page/construction-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/construction-page/construction-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConstructionPageComponent);

//# sourceMappingURL=construction-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboard-page/dashboard-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import url('https://fonts.googleapis.com/css?family=Ubuntu');*/\r\n\r\n.main-content {\r\n  padding: 20px;\r\n  color: black;\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\nbutton {\r\n  width: 100%;\r\n  color: white;\r\n  border: none;\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.delete {\r\n  background: darkred;\r\n}\r\n\r\n.edit {\r\n  background: orange;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard-page/dashboard-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <flash-messages></flash-messages>\n  <h2 class=\"page-header\">New Blog Post</h2>\n  <form (submit)=\"newPostSubmit()\">\n    <div class=\"input-section left\">\n      <label>Title</label>\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"half\">\n    </div>\n    <div class=\"input-section right\">\n      <label>Author</label>\n      <input type=\"text\" [(ngModel)]=\"author\" name=\"author\" class=\"half\">\n    </div>\n    <div class=\"input-section\">\n      <label>Body</label>\n      <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"content\" name=\"content\"></textarea>\n    </div>\n    <input type=\"submit\" value=\"New Post\" class=\"submit-button\">\n  </form>\n\n  <div class=\"recent posts\">\n    <div *ngFor=\"let post of posts\" class=\"post-card\">\n      <h2>{{post.title}}</h2>\n      <h3>{{post.author}}</h3>\n      <textarea [value]=\"post.body\" style=\"width: 100%;\" rows=\"10\" cols=\"50\">\n\n      </textarea>\n      <div class=\"actions\">\n        <button (click)=\"delete(post._id)\" class=\"delete\">Delete</button>\n        <button (click)=\"edit(post._id)\" class=\"edit\">Edit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboard-page/dashboard-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
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
    function DashboardPageComponent(blogService, flashMessage) {
        this.blogService = blogService;
        this.flashMessage = flashMessage;
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    DashboardPageComponent.prototype.delete = function (id) {
        var _this = this;
        this.blogService.deletePosts(id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { timeout: 5000 });
                _this.getPosts();
            }
            else {
                _this.flashMessage.show(data.msg, { timeout: 5000 });
            }
        });
    };
    DashboardPageComponent.prototype.edit = function (id) {
        console.log("EDIT");
    };
    DashboardPageComponent.prototype.newPostSubmit = function () {
        var _this = this;
        var post = {
            title: this.title,
            author: this.author,
            body: this.content
        };
        this.blogService.savePost(post).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { timeout: 5000 });
                _this.title = "";
                _this.author = "";
                _this.content = "";
                _this.getPosts();
            }
            else {
                _this.flashMessage.show(data.msg, { timeout: 5000 });
            }
        });
    };
    DashboardPageComponent.prototype.getPosts = function () {
        var _this = this;
        this.blogService.getPosts().subscribe(function (posts) {
            console.log(posts);
            _this.posts = posts.posts;
            console.log(_this.posts);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return DashboardPageComponent;
}());
DashboardPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-page',
        template: __webpack_require__("../../../../../src/app/views/dashboard-page/dashboard-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/dashboard-page/dashboard-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DashboardPageComponent);

var _a, _b;
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

module.exports = "<div class=\"main-content\">\n\n  <h1>{{ myResume.about.tagLine}}</h1>\n\n  <p>\n    Currently I am job searching for a Front End Developer position.\n  </p>\n\n\n  <div class=\"project-container container\">\n    <element-block name=\"Pr\" color=\"#654597\"></element-block>\n\n    <div class=\"element-content\">\n      <h1 class=\"title\">Latest Project</h1>\n\n      <project-card [project]=\"item\" *ngFor=\"let item of myResume.projects | slice:0:1; let i=index\"></project-card>\n\n    </div>\n  </div>\n\n  <!--<div class=\"blog-container container\">-->\n    <!--<element-block name=\"Bg\" color=\"#7E6551\" class=\"close\"></element-block>-->\n    <!--<h1>Recent Posts</h1>-->\n    <!--<div class=\"blog\">-->\n      <!--<h2>Coming Soon!</h2>-->\n      <!--&lt;!&ndash;<blog-card [blog]=\"item\" *ngFor=\"let item of myBlog | slice:0:1; let i=index\"></blog-card>&ndash;&gt;-->\n    <!--</div>-->\n  <!--</div>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resume_service__ = __webpack_require__("../../../../../src/app/services/resume.service.ts");
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
    function HomePageComponent(resume) {
        this.resume = resume;
    }
    HomePageComponent.prototype.getMyResume = function () {
        this.myResume = this.resume.getResume();
    };
    HomePageComponent.prototype.getMyBlog = function () {
        this.myBlog = this.resume.getBlog();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resume_service__["a" /* ResumeService */]) === "function" && _a || Object])
], HomePageComponent);

var _a;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/newpost-page/newpost-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu);", ""]);

// module
exports.push([module.i, ".main-content {\r\n  padding: 20px;\r\n  color: black;\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.input-section {\r\n  margin: 5px 0;\r\n}\r\n\r\n.submit-button {\r\n  background: transparent;\r\n  border: solid white 2px;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n\r\n  .right{\r\n    float: right;\r\n\r\n  }\r\n\r\n  .left{\r\n    float: left;\r\n  }\r\n\r\n  .half{\r\n    width: 50%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 426px) {\r\n\r\n  form, .input-section {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/newpost-page/newpost-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <flash-messages></flash-messages>\n  <h2 class=\"page-header\">New Blog Post</h2>\n  <form (submit)=\"newPostSubmit()\">\n    <div class=\"input-section left\">\n      <label>Title</label>\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"half\">\n    </div>\n    <div class=\"input-section right\">\n      <label>Author</label>\n      <input type=\"text\" [(ngModel)]=\"author\" name=\"author\" class=\"half\">\n    </div>\n    <div class=\"input-section\">\n      <label>Body</label>\n      <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"body\" name=\"body\"></textarea>\n    </div>\n    <input type=\"submit\" value=\"New Post\" class=\"submit-button\">\n  </form>\n\n  <div class=\"recent-posts\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/newpost-page/newpost-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpostPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewpostPageComponent = (function () {
    function NewpostPageComponent(blogService, flashMessage) {
        this.blogService = blogService;
        this.flashMessage = flashMessage;
    }
    NewpostPageComponent.prototype.ngOnInit = function () {
        this.getMyBlog();
    };
    NewpostPageComponent.prototype.newPostSubmit = function () {
        var _this = this;
        var post = {
            title: this.title,
            author: this.author,
            body: this.body
        };
        this.blogService.savePost(post).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Added post', { timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Error adding post', { timeout: 5000 });
            }
        });
    };
    NewpostPageComponent.prototype.getMyBlog = function () {
        var _this = this;
        this.blogService.getPosts().subscribe(function (posts) {
            console.log(posts);
            _this.posts = posts.posts;
            console.log(_this.posts);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return NewpostPageComponent;
}());
NewpostPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-newpost-page',
        template: __webpack_require__("../../../../../src/app/views/newpost-page/newpost-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/newpost-page/newpost-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], NewpostPageComponent);

var _a, _b;
//# sourceMappingURL=newpost-page.component.js.map

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

module.exports = "<div class=\"main-content\">\n  <element-block name=\"Na\" color=\"#8D1501\"></element-block>\n  <h1>Page not found</h1>\n  <p>Error 404</p>\n</div>\n"

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

module.exports = "<div class=\"main-content\">\n\n  <div class=\"container\">\n    <element-block name=\"Pr\" color=\"#654597\"></element-block>\n\n    <div class=\"element-content\">\n      <h1 class=\"title\">Projects</h1>\n\n      <project-card [project]=\"item\" *ngFor=\"let item of myResume.projects\"></project-card>\n\n    </div>\n  </div>\n\n\n <element-contact></element-contact>\n\n\n</div>\n"

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