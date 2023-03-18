(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Front\intend Projects\Projects\C V\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ "DPnb");




function HomeComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 80);
} }
function HomeComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 81);
} }
class HomeComponent {
    constructor() {
        this.isToggle = false;
        this.options = {
            path: 'assets/images/1.json'
        };
        this.options2 = {
            path: 'assets/images/3.json'
        };
        this.contact = {
            path: 'assets/images/7.json'
        };
    }
    darkMode() {
        $(".navbar").css("backgroundColor", "#093B5C");
        $(".theme-container").css("backgroundColor", "#066EAF");
        $(".navbar-nav a").css("color", "#FFF");
        $("#home").css("backgroundColor", "#031D2E");
        $("#home h1").css("color", "#FFF");
        $("#services").css("backgroundColor", "#072A41");
        $(".Bg_Main").css("backgroundColor", "#031D2E");
        $(".theme-container").css("backgroundColor", "#066EAF");
        $("#services h2").css("color", "#FFF");
        $(".font_h1").css("color", "#FFF");
        $(".font_h2").css("color", "#FFF");
        $("#principles").css("backgroundColor", "#031D2E");
        $("h5").css("color", "#FFF");
        $("footer").css("backgroundColor", "#072A41");
        $("#contact").css("backgroundColor", "#031D2E");
        $(".cus_label").css("color", "#FFF");
        $(".SocendBg").css("backgroundColor", "#072A41");
        $(".navbar-nav a").hover(function (e) {
            // over
            $(e.target).css("color", "#FF68B4");
        }, function () {
            // out
            $(".navbar-nav a").css("color", "#fff");
        });
    }
    lightMode() {
        $(".navbar").css("backgroundColor", "#FFF");
        $(".theme-container").css("backgroundColor", "#F6F7FA");
        $(".navbar-nav a").css("color", "#000");
        $("#home").css("backgroundColor", "#FFF");
        $("#home h1").css("color", "#333333");
        $("#services").css("backgroundColor", "#F6F7FA");
        $(".Bg_Main").css("backgroundColor", "#FFF");
        $("#services h2").css("color", "#333333");
        $(".font_h1").css("color", "#333333");
        $(".font_h2").css("color", "#333333");
        $("#principles").css("backgroundColor", "#FFF");
        $("h5").css("color", "#333333");
        $("footer").css("backgroundColor", "#FFF");
        $("#contact").css("backgroundColor", "#FFF");
        $(".cus_label").css("color", "#333333");
        $(".SocendBg").css("backgroundColor", "#F6F7FA");
        $(".navbar-nav a").hover(function (e) {
            // over
            $(e.target).css("color", "#FF68B4");
        }, function () {
            // out
            $(".navbar-nav a").css("color", "#000");
        });
    }
    toggleMode() {
        if (this.isToggle == false) {
            this.isToggle = true;
        }
        else {
            this.isToggle = false;
        }
    }
    inputt() {
        $("#contact input").css("border-color", "none");
        $("#contact input").css("backgroundColor", "none");
    }
    ngOnInit() {
        $(".navbar-nav a").click((e) => {
            let aHref = $(e.target).attr("href"); //about 
            let secOffset = $(aHref).offset().top;
            $("html , body").animate({ scrollTop: secOffset }, 1000);
        });
        $("#home a").click(() => {
            let aHref = $("#home a").attr("href"); //about 
            let secOffset = $(aHref).offset().top;
            $("html , body").animate({ scrollTop: secOffset }, 1000);
        });
        $(window).scroll(() => {
            let aboutOffset = $("#services").offset().top;
            let windowScroll = $(window).scrollTop();
            if (windowScroll > aboutOffset) {
                $("#btnUp").fadeIn(500);
            }
            else {
                $("#btnUp").fadeOut(500);
            }
        });
        $("#btnUp").click(() => {
            $("html , body").animate({ scrollTop: 0 }, 1000);
        });
        $(document).ready(function () {
            $(".spinner").fadeOut(2000, function () {
                $("#loading").slideUp(1500, function () {
                    $("body").css("overflow", "auto");
                    $("#loading").remove();
                });
            });
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 187, vars: 5, consts: [["id", "btnUp", 1, "bg-danger", "py-2", "px-3", "border-0", "rounded-circle", "text-white"], [1, "fas", "fa-chevron-up"], ["id", "loading", 1, "justify-content-center", "align-items-center"], [1, "spinner"], [1, "rect1"], [1, "rect2"], [1, "rect3"], [1, "rect4"], [1, "rect5"], [1, "navbar", "navbar-expand-lg", "fixed-top"], [1, "container", "d-flex"], ["href", "#home", 1, "navbar-brand"], ["src", "../../../assets/images/Logo.svg", "alt", "", 1, "logo"], [1, "navbar-toggler", 3, "click"], ["class", "fas fa-toggle-on fa-2x", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 4, "ngIf"], ["class", "fas fa-toggle-off fa-2x", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 4, "ngIf"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["aria-current", "page", "href", "#home", 1, "nav-link", "active"], ["aria-current", "page", "href", "#services", 1, "nav-link", "active"], ["aria-current", "page", "href", "#work", 1, "nav-link", "active"], ["aria-current", "page", "href", "#contact", 1, "nav-link", "active"], [1, "theme-container", "d-flex", "rounded-pill", "px-2", "py-1"], ["id", "light", 1, "mode", "rounded-circle", "p-2", "mx-1", 3, "click"], ["id", "dark", 1, "mode", "rounded-circle", "p-2", "mx-1", 3, "click"], ["id", "home"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "font_h1"], [1, "h4"], [1, "font_p", "text-muted", "mt-3", "col-10"], [1, "col-2"], ["href", "#work"], [1, "btn", "btn-danger", "w-50", "py-3"], [1, "h5", "float-left", "ml-2"], [1, "fas", "fa-arrow-down", "float-right", "fa-1x", "mr-2", "mt-2"], [1, "col-lg-6", "mt-5"], [3, "options"], ["id", "services", 1, "SocendBg"], [1, "font_h2", "text-center"], [1, "font_p", "text-center"], [1, "h5"], [1, "p-4", "custom_border", "Bg_Main", "mt-3"], [1, "fa", "fa-code", "fa-2x", "p-3", "custom_border25", "text-white", "my-2", "A"], [1, "my-3"], [1, "font_desc"], [1, "fas", "fa-cogs", "fa-2x", "p-3", "custom_border25", "text-white", "my-2", "B"], ["id", "principles"], [1, "col-lg-8"], [1, "font_h2"], [1, "font_p"], [1, "col-lg-6", "mt-1"], [1, "princ_item"], [1, "fas", "fa-magic", "A", "custom_border25", "p-3", "text-white", "fa-2x", "my-3"], [1, "mb-2", "font-weight-bold"], [1, "fas", "fa-rocket", "B", "custom_border25", "p-3", "text-white", "fa-2x", "my-3"], [1, "fas", "fa-handshake", "C", "custom_border25", "p-3", "text-white", "fa-2x", "my-3"], [1, "fas", "fa-magic", "D", "custom_border25", "p-3", "text-white", "fa-2x", "my-3"], [1, "col-lg-4", "pt-5", "mt-5"], ["id", "work", 1, "SocendBg"], [1, "text-center"], [1, "col-lg-6", "mt-2"], [1, "work_item", "custom_border", "Bg_Main", "p-2"], [1, "work-img"], ["src", "assets/images/21.png", "alt", "", 1, "img-fluid", "custom_border"], [1, "item_p", "ml-3", "mt-3"], [1, "mb-1", "font-weight-bold", "ml-3"], [1, "font_desc", "ml-3"], ["href", "https://sticky-note4-app.netlify.app", "target", "_blank", 1, "text-decoration-none", "ml-3", "item_p2"], ["src", "assets/images/22.png", "alt", "", 1, "img-fluid", "custom_border"], ["href", "https://trending-movies-app.netlify.app", "target", "_blank", 1, "text-decoration-none", "ml-3", "item_p2"], ["id", "contact"], [1, "col-md-6"], [1, "cus_label"], ["type", "text", "placeholder", "ex.Walter", 1, "cus_input", 3, "click"], ["type", "text", "placeholder", "ex.White", 1, "cus_input", 3, "click"], ["type", "text", "placeholder", "ex.jodi@gmail.com", 1, "cus_input", 3, "click"], ["type", "text", "placeholder", "Write your message here", "cols", "30", "rows", "2", 1, "cus_input"], [1, "btn", "btn-info", "mt-3", "py-2", "w-25", "float-right", "A"], ["data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "fas", "fa-toggle-on", "fa-2x"], ["data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "fas", "fa-toggle-off", "fa-2x"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_13_listener() { return ctx.toggleMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_i_14_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_i_15_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_27_listener() { return ctx.lightMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\uD83C\uDF1E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_30_listener() { return ctx.darkMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\uD83C\uDF11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Creative Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Designer & Front-End Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\uD83D\uDD2E \u2728");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hello, i'm Magdy and i'm a ui/ux designer and a front-end developer with the passion of creativity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ng-lottie", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "What I Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Design, development, and strategy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\uD83E\uDDD9\uD83C\uDFFB\u200D\u2642\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Front-end Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Being able to build the designs I produce means I can bring your idea to life. It also means I don't design anything that can't technically be created.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Back-end Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "There\u2019s no style without back-end here. I bring together form and the function to create something that looks good and performs brilliantly, and easy to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Principles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Create products your users will want to use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\uD83E\uDD19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Clean \u00AD\u2013 In thinking, in style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Clean code fuss-free interfaces and expert execution, design as it should be.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Effectiveness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Responsive is not only screen size. Leverage technology to help users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Clarity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Give users responses to the actions they take. avoid paradox of choice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Consistency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Re-use well-tested design patterns. Use ubiquitous language to create familiarity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "ng-lottie", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Download and review some of my work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\uD83C\uDFCB\uFE0F\u200D\u2642\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "FRONT-END");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Note - Online notes app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Have online notes to note your notes to remenber them in order to do , you can register now and have a free online notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "LIVE PREVIEW \uD83D\uDD25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "FRONT-END");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h5", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Movies - Trending movies app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Now you can see the trending Movies and Series and watch it in one website just sign up first and then you can wath what you want");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "LIVE PREVIEW \uD83D\uDD25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "section", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "ng-lottie", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Ready To Get Started?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Feel free to contact me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\uD83D\uDE03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "first Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_170_listener() { return ctx.inputt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_175_listener() { return ctx.inputt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_179_listener() { return ctx.inputt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "first Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "textarea", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.contact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_lottie__WEBPACK_IMPORTED_MODULE_2__["LottieComponent"]], styles: ["#loading[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #0097F7;\n  z-index: 99999;\n  display: flex;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px;\n}\n\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.spinner[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%] {\n  animation-delay: -1.1s;\n  margin: 0 2.5px 0 5px;\n}\n\n.spinner[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%] {\n  animation-delay: -1s;\n  margin: 0 2.5px 0 2.5px;\n}\n\n.spinner[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%] {\n  animation-delay: -0.9s;\n  margin: 0 5px 0 2.5px;\n}\n\n.spinner[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%] {\n  animation-delay: -0.8s;\n}\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}\n\n.navbar[_ngcontent-%COMP%] {\n  min-height: 15vh;\n  background-color: #FFF;\n  color: #000;\n  box-shadow: 0 6px 31px -2px rgba(66, 66, 66, 0.1);\n}\n\n.navbar-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #24C6F3;\n  cursor: pointer;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 23%;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  transition: 0.4s;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FF68B4;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  margin: 0 0.7rem;\n  font-weight: 700;\n  font-size: 0.83rem;\n  letter-spacing: 1px;\n  margin-top: 6px;\n}\n\n.theme-container[_ngcontent-%COMP%] {\n  background-color: #F6F7FA;\n}\n\n.mode[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  cursor: pointer;\n}\n\n.mode[_ngcontent-%COMP%]:hover {\n  background-color: #24C6F3;\n}\n\n#home[_ngcontent-%COMP%] {\n  padding: 30vh 0 15vh 0;\n}\n\n#home[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n\n#home[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(360deg);\n}\n\n#services[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  padding-top: 15vh;\n}\n\n.custom_border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.custom_border25[_ngcontent-%COMP%] {\n  border-radius: 25%;\n}\n\n.A[_ngcontent-%COMP%] {\n  background-color: #24C6F3;\n  box-shadow: 0 20px 20px rgba(13, 121, 221, 0.185);\n}\n\n.B[_ngcontent-%COMP%] {\n  background-color: #FF68B4;\n  box-shadow: 0 20px 20px rgba(221, 13, 169, 0.185);\n}\n\n.C[_ngcontent-%COMP%] {\n  background-color: #A250FF;\n  box-shadow: 0 20px 20px rgba(221, 13, 169, 0.185);\n}\n\n.D[_ngcontent-%COMP%] {\n  background-color: #25DFC6;\n  box-shadow: 0 20px 20px rgba(13, 121, 221, 0.185);\n}\n\n#work[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%], #principles[_ngcontent-%COMP%] {\n  padding: 15vh 0;\n}\n\n.item_p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.95rem;\n  letter-spacing: 1px;\n  color: #FF68B4;\n}\n\n.item_p2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  color: #0097F7;\n  cursor: pointer;\n  transition: 0.4s;\n}\n\n.item_p2[_ngcontent-%COMP%]:hover {\n  color: #FF68B4;\n}\n\n#contact[_ngcontent-%COMP%] {\n  padding-top: 20vh;\n}\n\n.cus_label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #333333;\n  display: block;\n  margin-bottom: 0.3rem;\n  margin-top: 1.5rem;\n}\n\n.cus_input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 2px solid #d3d3d3;\n  width: 100%;\n  transition: 0.5s;\n  padding: 12px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  background-color: transparent;\n  color: #333333;\n}\n\n.cus_input[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #0097F7;\n}\n\n#btnUp[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 15px;\n  bottom: 20px;\n  display: none;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFJQSxvREFBQTtBQUhKOztBQU1FO0VBRUUsc0JBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU1DO0VBRUcsb0JBQUE7RUFDQSx1QkFBQTtBQUhKOztBQU9FO0VBRUUsc0JBQUE7RUFDQSxxQkFBQTtBQUpKOztBQVNFO0VBRUUsc0JBQUE7QUFOSjs7QUFnQkU7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsOEJBQUE7RUFMSjtFQU1LO0lBQ0Qsb0JBQUE7SUFDQSw0QkFBQTtFQUpKO0FBQ0Y7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0FBTko7O0FBUUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUxKOztBQU9BO0VBQ0ksVUFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBSko7O0FBTUE7RUFDSSxjQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFISjs7QUFLQTtFQUNJLHlCQUFBO0FBRko7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBS0E7RUFDSSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0Esc0NBQUE7QUFISjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FBRko7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FBREo7O0FBTUE7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FBSEo7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBTUE7RUFDSSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlBO0VBQ0ksZ0NBQUE7QUFESjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBTkoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgICAgIC8vIExPT0RJTkcgU2NyZWVuXHJcbiNsb2FkaW5ne1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wIDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA5N0Y3O1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLnNwaW5uZXIgLnJlY3QyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICBtYXJnaW46MCAyLjVweCAwIDVweDtcclxuICB9XHJcbiAgXHJcbiAuc3Bpbm5lciAucmVjdDMge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgIG1hcmdpbjowIDIuNXB4IDAgMi41cHg7XHJcblxyXG4gIH1cclxuICBcclxuICAuc3Bpbm5lciAucmVjdDQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgIG1hcmdpbjowIDVweCAwIDIuNXB4O1xyXG5cclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyIC5yZWN0NSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG5cclxuXHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gICAgMCUsIDQwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KSB9ICBcclxuICAgIDIwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMS4wKSB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcclxuICAgIDAlLCA0MCUsIDEwMCUgeyBcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgfSAgMjAlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMS4wKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzdGFydCBuYXZiYXJcclxuLm5hdmJhcntcclxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDMxcHggLTJweCByZ2JhKDY2LCA2NiwgNjYsIDAuMSk7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyIGl7XHJcbiAgICBjb2xvcjojMjRDNkYzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2dve1xyXG4gICAgd2lkdGg6IDIzJTtcclxuXHJcbn1cclxuLm5hdmJhci1uYXYgYXtcclxuICAgIGNvbG9yOiMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOjAuNHNcclxufVxyXG4ubmF2YmFyLW5hdiBhOmhvdmVye1xyXG4gICAgY29sb3I6I0ZGNjhCNDtcclxuXHJcbn1cclxuLm5hdi1saW5re1xyXG4gICAgbWFyZ2luOiAwIDAuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDAuODNyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi50aGVtZS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZBO1xyXG59XHJcbi5tb2Rle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tb2RlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjRDNkYzO1xyXG59XHJcblxyXG5cclxuICAgICAgICAgICAgLy9IT01FXHJcbiNob21le1xyXG4gICAgcGFkZGluZzozMHZoIDAgMTV2aCAwO1xyXG59XHJcblxyXG4jaG9tZSBpe1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4jaG9tZSBidXR0b246aG92ZXIgaXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbn1cclxuXHJcbiAgICAgICAgICAgIC8vRW5kIEhPTUVcclxuXHJcbiAgICAgICAgICAgIC8vU3RhcnQgU2VydmljZXNcclxuI3NlcnZpY2Vze1xyXG4gICAgcGFkZGluZzo1cmVtIDA7XHJcbiAgICBwYWRkaW5nLXRvcDoxNXZoO1xyXG59XHJcbi5jdXN0b21fYm9yZGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxufVxyXG4uY3VzdG9tX2JvcmRlcjI1e1xyXG4gICAgYm9yZGVyLXJhZGl1czoyNSU7XHJcblxyXG59XHJcbi5Be1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0QzZGMztcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMTMsIDEyMSwgMjIxLCAwLjE4NSk7XHJcbn1cclxuLkJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2OEI0O1xyXG4gICAgYm94LXNoYWRvdzowIDIwcHggMjBweCByZ2JhKDIyMSwgMTMsIDE2OSwgMC4xODUpO1xyXG59XHJcblxyXG5cclxuICAgICAgICAgICAgLy9FbmQgU2VydmljZXNcclxuLkN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTI1MEZGO1xyXG4gICAgYm94LXNoYWRvdzowIDIwcHggMjBweCByZ2JhKDIyMSwgMTMsIDE2OSwgMC4xODUpO1xyXG59XHJcbi5Ee1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1REZDNjtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMTMsIDEyMSwgMjIxLCAwLjE4NSk7XHJcbn1cclxuICAgICAgICAgICAgICAgIC8vU3RhcnQgV29ya1xyXG4jd29yayAsI2NvbnRhY3QgLCAjcHJpbmNpcGxlc3tcclxuICAgIHBhZGRpbmc6MTV2aCAwO1xyXG59XHJcbi5pdGVtX3B7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjRkY2OEI0O1xyXG59XHJcbi5pdGVtX3Aye1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICMwMDk3Rjc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbn1cclxuLml0ZW1fcDI6aG92ZXJ7XHJcbiAgICBjb2xvcjogI0ZGNjhCNDtcclxuXHJcbn1cclxuICAgICAgICAgLy9FbmQgV29ya1xyXG5cclxuXHJcbiAgICAgICAgLy9TdGFydCBDb250YWN0XHJcbiNjb250YWN0e1xyXG4gICAgcGFkZGluZy10b3A6MjB2aDtcclxufVxyXG5cclxuLmN1c19sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTowLjg1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiMzMzMzMzM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgIG1hcmdpbi10b3A6MS41cmVtO1xyXG59XHJcbi5jdXNfaW5wdXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QzZDNkMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjowLjVzO1xyXG4gICAgcGFkZGluZzoxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjojMzMzMzMzOyAgXHJcbn1cclxuLmN1c19pbnB1dDpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA5N0Y3O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4gICAgICAgIC8vRW5kIENvbnRhY3RcclxuXHJcbiAgICAgICAgLy9CdG5VcFxyXG4jYnRuVXB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHJpZ2h0OjE1cHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgei1pbmRleDo5OTtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 26, vars: 0, consts: [[1, "py-4"], [1, "container"], [1, "d-flex", "justify-content-center"], [1, "w-cus", "mr-2", "pt-1"], ["src", "assets/images/magdy3.jpg", "alt", "Magdy Elmahdy", 1, "img-fluid", "rounded-circle"], [1, "font_p", "mb-1"], [1, "social-icon", "d-flex", "justify-content-center", "align-items-center", "mr-2"], ["href", "https://www.facebook.com/profile.php?id=100009527234946", "target", "_blank"], [1, "fab", "fa-facebook"], ["href", "https://www.instagram.com/magdy_elmahdy99/", "target", "_blank"], [1, "fab", "fa-instagram"], ["href", "https://github.com/magdy-elmahdy", "target", "_blank"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/magdy-elmahdy-583b72203/", "target", "_blank"], [1, "fab", "fa-linkedin"], [1, "text-center", "mt-3", "text-muted"], [1, "fas", "fa-copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "MAGDY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 2023 Magdy Elmahdy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".w-cus[_ngcontent-%COMP%] {\n  width: 3.2%;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 2px solid #0078ff;\n  border-radius: 50%;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  transition: 0.6s all;\n}\n\n@media all and (max-width: 600px) {\n  .w-cus[_ngcontent-%COMP%] {\n    width: 6%;\n  }\n}\n\n@media all and (min-width: 601px) and (max-width: 768px) {\n  .w-cus[_ngcontent-%COMP%] {\n    width: 5%;\n  }\n}\n\n@media all and (min-width: 769px) and (max-width: 992px) {\n  .w-cus[_ngcontent-%COMP%] {\n    width: 4%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0FBRUo7O0FBa0JRO0VBQ0k7SUFDSSxTQUFBO0VBZmQ7QUFDRjs7QUFrQlE7RUFDSTtJQUNJLFNBQUE7RUFoQmQ7QUFDRjs7QUFtQlE7RUFDSTtJQUNJLFNBQUE7RUFqQmQ7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudy1jdXN7XHJcbiAgICB3aWR0aDozLjIlO1xyXG59XHJcblxyXG4uc29jaWFsLWljb257XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OjIuNXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDc4ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc29jaWFsLWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogMC42cyBhbGw7XHJcbn1cclxuLy8gLnNvY2lhbC1pY29uOmhvdmVye1xyXG4gICAgXHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDc4ZmY7XHJcbi8vICAgICBib3JkZXItY29sb3I6ICNDREUxRjg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuLy8gLnNvY2lhbC1pY29uIGEgaXtcclxuLy8gICAgIHRyYW5zaXRpb246IDAuNnMgYWxsO1xyXG5cclxuLy8gfVxyXG4vLyAuc29jaWFsLWljb246aG92ZXIgLnNvY2lhbC1pY29uIGEgaXtcclxuLy8gICAgIGNvbG9yOiNmZmY7XHJcblxyXG4vLyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9SZXNwb25zaXZlXHJcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo2MDBweCl7IC8vc21cclxuICAgICAgICAgICAgLnctY3Vze1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NiU7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDo2MDFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpeyAvL21kXHJcbiAgICAgICAgICAgIC53LWN1c3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjUlO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjk5MnB4KXsgLy9sZ1xyXG4gICAgICAgICAgICAudy1jdXN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo0JTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'notesProject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lottie-web */ "lPHp");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");













function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_9___default.a;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieModule"].forRoot({ player: playerFactory })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieModule"].forRoot({ player: playerFactory })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map