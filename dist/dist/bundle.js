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

/***/ "./assets/JS/animation/buttons.js":
/*!****************************************!*\
  !*** ./assets/JS/animation/buttons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonsAnimation\": () => (/* binding */ buttonsAnimation)\n/* harmony export */ });\n\n//animating instructions buttons\nconst buttonsAnimation = $(document).ready(function(){\n    $(\"#how-to-use-text, #description-text\").hide();//text has to be hidden\n    $(\"#how-to-use, #description\").click(function(){\n        $(this).next().animate({//setting animation\n            height: 'toggle'\n        });\n    });\n});\n\n\n\n\n//# sourceURL=webpack://app/./assets/JS/animation/buttons.js?");

/***/ }),

/***/ "./assets/JS/components/search-bar.js":
/*!********************************************!*\
  !*** ./assets/JS/components/search-bar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchBar\": () => (/* binding */ searchBar)\n/* harmony export */ });\n//It's a global variable to keep track of the setTimeout call that is created when the input event fires\nlet inputTimeout;\nlet categoriesUl;\n\n\nconst searchBar = $(document).ready( function(){\n    $(\"input\").on(\"input\", function(){\n    \n        // to ensure that a new timeout will be set each time the input event is triggered\n        clearTimeout(inputTimeout);\n        \n        //runs 0.5s later user finishes typing\n        inputTimeout = setTimeout(function() {\n           \n            let cityInput = document.getElementById('input').value;\n            let formattedCityInput = cityInput.toLowerCase().split(\" \").join(\"-\");\n            \n            //conditions which prevent API call\n            if($(`ul.city-${formattedCityInput}`).length){//if ul exists, its lenght will be greater than 0\n                return;\n            }\n    \n            //condition has to be declared here to not run error either\n            if (!formattedCityInput) {//user deleted or clicked x\n                if (categoriesUl) {\n                    categoriesUl.remove();//to remove what user requested\n                }\n                return;\n            }\n            \n           \n            $.getJSON(`https://api.teleport.org/api/urban_areas/slug:${formattedCityInput}/scores/`, function(data){\n    \n                //will store items of the loop below\n                const items = []; \n    \n                $.each(data.categories, function(key, val) {\n                    items.push(\"<li><strong>\" + val.name + \"</strong>\" + \": \" + val.score_out_of_10 + \"</li>\");\n                });\n    \n                categoriesUl = $(\"<ul/>\", {\n                    \"class\": `list city-${formattedCityInput}`,\n                    html: `<h2> ${cityInput} </h2>` + `<li> ${data.summary} </li>` + items.join(\"\")\n                }).appendTo(\"#categories\");//selected div (*)\n            \n            }).fail(function(){\n                \n                const error = $(\"<p/>\", {\n                    \"class\": \"text-danger\",//boostrap info\n                    \"html\": \"City not available\"\n                }).appendTo('#label');\n    \n                setTimeout(function(){\n                    error.remove()\n                }, 2000);\n                \n                console.error(\"city not available or city name misspelled\");\n            });\n        }, 500);\n    })\n});\n\n//# sourceURL=webpack://app/./assets/JS/components/search-bar.js?");

/***/ }),

/***/ "./assets/JS/script.js":
/*!*****************************!*\
  !*** ./assets/JS/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/search-bar */ \"./assets/JS/components/search-bar.js\");\n/* harmony import */ var _animation_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/buttons */ \"./assets/JS/animation/buttons.js\");\n\n\n\n\n\n//# sourceURL=webpack://app/./assets/JS/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/JS/script.js");
/******/ 	
/******/ })()
;