/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nwindow.addEventListener('load', _routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.addEventListener('hashchange', _routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://js-spa-cientifico/./src/index.js?");

/***/ }),

/***/ "./src/pages/Character.js":
/*!********************************!*\
  !*** ./src/pages/Character.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\n\nconst Character = async () => {\n  const id = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const character = await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n  const view = `\n    <div class=\"Characters-inner\">\n      <article class=\"Characters-card\">\n        <img src=\"${character.image}\" alt=\"${character.name}\">\n        <h2>${character.name}</h2>\n      </article>\n      <article class=\"Characters-card\">\n        <h3>Episodes: <span>${character.episode.length}</span></h3>\n        <h3>Status: <span>${character.status}</span></h3>\n        <h3>Species: <span>${character.species}</span></h3>\n        <h3>Gender: <span>${character.gender}</span></h3>\n        <h3>Origin: <span>${character.origin.name}</span></h3>\n        <h3>Last Location: ${character.location.name}</h3>\n      </article>\n    </div>\n  `;\n  return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Character);\n\n//# sourceURL=webpack://js-spa-cientifico/./src/pages/Character.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error404 = () => {\n  const view = `\n      <div class=\"Error404\">\n        <h2>Error 404</h2>\n        <h3> \n        The server cannot find the requested resource. In the browser, \n        this means the URL is not recognized. In an API, this can also mean that \n        the endpoint is valid but the resource itself does not exist. Servers may also send \n        this response instead of 403 Forbidden to hide the existence of a resource \n        from an unauthorized client. This response code is probably the most well known \n        due to its frequent occurrence on the web.\n        </h3>\n      </div>\n    `;\n  return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n//# sourceURL=webpack://js-spa-cientifico/./src/pages/Error404.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\nconst Home = async () => {\n  const characters = await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const view = `\n    <div class=\"Characters\">\n      ${characters.results.map(character => `\n        <article class=\"Character-item\">\n          <a href=\"#/${character.id}/\">\n            <img src=\"${character.image}\" alt=\"${character.name}\">\n            <h2>${character.name}</h2>\n          </a>\n        </article>\n      `).join('')}\n    </div>\n  `;\n  return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://js-spa-cientifico/./src/pages/Home.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Character */ \"./src/pages/Character.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n\n\n\n\n\n\nconst routes = {\n  '/': _pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  '/:id': _pages_Character__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  '/contact': 'Contact'\n};\nconst router = async () => {\n  const header =  false || document.getElementById('header');\n  const content =  false || document.getElementById('content');\n  header.innerHTML = await (0,_templates_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  let route = await (0,_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(hash);\n  let render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  content.innerHTML = await render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://js-spa-cientifico/./src/routes/index.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = () => {\n  const view = `\n        <div class=\"Header-main\">\n            <div class=\"Header-logo\">\n                <h1>\n                    <a href=\"/\">\n                        100tifi.co\n                    </a>\n                </h1>\n            </div>\n            <div class=\"Header-nav\">\n            <a href=\"#/about\">\n                About\n            </a>\n            </div>\n        </div>\n    `;\n  return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://js-spa-cientifico/./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = 'https://rickandmortyapi.com/api/character/';\nconst getData = async id => {\n  const apiURl = id ? `${API}${id}` : API;\n  try {\n    const response = await fetch(apiURl);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log('Fetch Error', error);\n  }\n  ;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://js-spa-cientifico/./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n// location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/\n// .slice(1) corta la url y muestra a partir del primer elemento. En este Caso el resultado es /1/\n// .toLocaleLowerCase() convierte a minúscula la cadena\n// .split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]\n// [1] trae el primer elemento del split anterior que en este caso es 1 (representa la id 1)\n\n//# sourceURL=webpack://js-spa-cientifico/./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resolveRoutes = route => {\n  if (route.length <= 3) {\n    let validRoute = route === '/' ? route : '/:id';\n    return validRoute;\n  }\n  return `/${route}`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n//# sourceURL=webpack://js-spa-cientifico/./src/utils/resolveRoutes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;