"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/restricted";
exports.ids = ["pages/api/restricted"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n  // Configure one or more authentication providers\n  providers: [next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n    clientId: \"104d4933241dfca234fc\",\n    clientSecret: \"eae950bb07fa3855cda8828e7f9a3069001d1623\"\n  }) // ...add more providers here\n  ],\n  callbacks: {\n    async jwt({\n      token,\n      account\n    }) {\n      // Persist the OAuth access_token to the token right after signin\n      if (account) {\n        token.accessToken = account.access_token;\n      }\n\n      return token;\n    },\n\n    async session({\n      session,\n      token,\n      user\n    }) {\n      // Send properties to the client, like an access_token from a provider.\n      session.accessToken = token.accessToken;\n      return session;\n    }\n\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxXQUFXLEdBQUc7QUFDekI7QUFDQUMsRUFBQUEsU0FBUyxFQUFFLENBQ1RGLGlFQUFjLENBQUM7QUFDYkcsSUFBQUEsUUFBUSxFQUFFLHNCQURHO0FBRWJDLElBQUFBLFlBQVksRUFBRTtBQUZELEdBQUQsQ0FETCxDQUtUO0FBTFMsR0FGYztBQVMzQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1QsVUFBTUMsR0FBTixDQUFVO0FBQUVDLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVCxLQUFWLEVBQThCO0FBQzVCO0FBQ0EsVUFBSUEsT0FBSixFQUFhO0FBQ1hELFFBQUFBLEtBQUssQ0FBQ0UsV0FBTixHQUFvQkQsT0FBTyxDQUFDRSxZQUE1QjtBQUNEOztBQUNELGFBQU9ILEtBQVA7QUFDRCxLQVBROztBQVFULFVBQU1JLE9BQU4sQ0FBYztBQUFFQSxNQUFBQSxPQUFGO0FBQVdKLE1BQUFBLEtBQVg7QUFBa0JLLE1BQUFBO0FBQWxCLEtBQWQsRUFBd0M7QUFDdEM7QUFDQUQsTUFBQUEsT0FBTyxDQUFDRixXQUFSLEdBQXNCRixLQUFLLENBQUNFLFdBQTVCO0FBQ0EsYUFBT0UsT0FBUDtBQUNEOztBQVpRO0FBVGdCLENBQXBCO0FBeUJQLGlFQUFlWixnREFBUSxDQUFDRSxXQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVzc2diLmRldi8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IFwiMTA0ZDQ5MzMyNDFkZmNhMjM0ZmNcIixcclxuICAgICAgY2xpZW50U2VjcmV0OiBcImVhZTk1MGJiMDdmYTM4NTVjZGE4ODI4ZTdmOWEzMDY5MDAxZDE2MjNcIixcclxuICAgIH0pLFxyXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICBdLFxyXG5jYWxsYmFja3M6IHtcclxuICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCB9KSB7XHJcbiAgICAvLyBQZXJzaXN0IHRoZSBPQXV0aCBhY2Nlc3NfdG9rZW4gdG8gdGhlIHRva2VuIHJpZ2h0IGFmdGVyIHNpZ25pblxyXG4gICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuXHJcbiAgfSxcclxuICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGZyb20gYSBwcm92aWRlci5cclxuICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxyXG4gICAgcmV0dXJuIHNlc3Npb25cclxuICB9XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJzZXNzaW9uIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "./pages/api/restricted.js":
/*!*********************************!*\
  !*** ./pages/api/restricted.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/[...nextauth] */ \"./pages/api/auth/[...nextauth].js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n  if (session) {\n    res.send({\n      content: \"This is protected content. You can access this content because you are signed in.\"\n    });\n  } else {\n    res.send({\n      error: \"You must be signed in to view the protected content on this page.\"\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVzdHJpY3RlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlLE9BQU9FLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNQyxPQUFPLEdBQUcsTUFBTUosZ0VBQWdCLENBQUNFLEdBQUQsRUFBTUMsR0FBTixFQUFXRix3REFBWCxDQUF0Qzs7QUFFQSxNQUFJRyxPQUFKLEVBQWE7QUFDWEQsSUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVM7QUFDUEMsTUFBQUEsT0FBTyxFQUNMO0FBRkssS0FBVDtBQUlELEdBTEQsTUFLTztBQUNMSCxJQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBUztBQUNQRSxNQUFBQSxLQUFLLEVBQUU7QUFEQSxLQUFUO0FBR0Q7QUFDRixDQWJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVzc2diLmRldi8uL3BhZ2VzL2FwaS9yZXN0cmljdGVkLmpzPzhlNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiXHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4vYXV0aC9bLi4ubmV4dGF1dGhdXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucylcclxuXHJcbiAgaWYgKHNlc3Npb24pIHtcclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgY29udGVudDpcclxuICAgICAgICBcIlRoaXMgaXMgcHJvdGVjdGVkIGNvbnRlbnQuIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29udGVudCBiZWNhdXNlIHlvdSBhcmUgc2lnbmVkIGluLlwiLFxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNlbmQoe1xyXG4gICAgICBlcnJvcjogXCJZb3UgbXVzdCBiZSBzaWduZWQgaW4gdG8gdmlldyB0aGUgcHJvdGVjdGVkIGNvbnRlbnQgb24gdGhpcyBwYWdlLlwiLFxyXG4gICAgfSlcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInNlbmQiLCJjb250ZW50IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/restricted.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/restricted.js"));
module.exports = __webpack_exports__;

})();