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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\n\n//animating instructions \n$(document).ready(function(){\n    $(\"#how-to-use-text, #description-text\").hide();//text has to be hidden\n    $(\"#how-to-use, #description\").click(function(){\n        $(this).next().animate({//setting animation\n            height: 'toggle'\n        });\n    });\n});\n\nlet test = \"ciao\";\n\n\n//# sourceURL=webpack://app/./assets/JS/animation/buttons.js?");

/***/ }),

/***/ "./assets/JS/script.js":
/*!*****************************!*\
  !*** ./assets/JS/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation/buttons */ \"./assets/JS/animation/buttons.js\");\n\n\n//It's a global variable to keep track of the setTimeout call that is created when the input event fires\nlet inputTimeout;\nlet createdUl;\n\n//API call triggers 0.5 seconds later user finishes typing\n$(\"input\").on(\"input\", function(){\n\n    // to ensure that a new timeout will be set each time the input event is triggered\n    clearTimeout(inputTimeout);\n    \n    inputTimeout = setTimeout(function() {\n        //1: getting input value\n        let input = document.getElementById('input').value;\n        //2: making it match the correct slug\n        let formattedInput = input.toLowerCase().split(\" \").join(\"-\");\n\n\n        if($(`ul.city-${formattedInput}`).length){//if ul exists, its lenght will be greater than 0\n            return;\n        }\n\n        if (!formattedInput) {//user deleted or clicked x\n            if (createdUl) {\n                createdUl.remove();//to remove what user requested\n            }\n            return;\n        }\n\n        //3: API call\n        $.getJSON(`https://api.teleport.org/api/urban_areas/slug:${formattedInput}/scores/`, function(data){//success callback function\n\n          //action 1: will store items of the loop below\n        let items = []; \n        \n          //action 2: loop and push\n        $.each(data.categories, function(key, val) {\n            items.push(\"<li><strong>\" + val.name + \"</strong>\" + \": \" + val.score_out_of_10 + \"</li>\");\n        });\n\n\n          //action 3: creating ul, adding string of items to the innerHTML of ul and appending to selected div (*)\n        createdUl = $(\"<ul/>\", {\n            \"class\": `list city-${formattedInput}`,\n            html: `<h2> ${input} </h2>` + items.join(\"\")\n        }).appendTo(\"#categories\");//selected div (*)\n\n        //error handler function\n        }).fail(function(){\n            //fail action 1:\n            let error = $(\"<p/>\", {\n                \"class\": \"text-danger\",\n                \"html\": \"City not available\"\n            }).appendTo('#label');\n            //fail action 2:\n            setTimeout(function(){\n                error.remove()\n            }, 2000);\n            //fail action 3:\n            console.error(\"city not available!\");\n        });\n    }, 500);\n    \n});\n\nconsole.log(_animation_buttons__WEBPACK_IMPORTED_MODULE_0__.test);\n\n//# sourceURL=webpack://app/./assets/JS/script.js?");

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