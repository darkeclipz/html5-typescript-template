/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
var car_1 = __webpack_require__(665);
var App = /** @class */ (function () {
    function App() {
        var car = new car_1.Car("BMW", car_1.CarColor.Blue);
        car.info();
    }
    return App;
}());
__webpack_unused_export__ = App;
new App();


/***/ }),

/***/ 665:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CarColor = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(name, color) {
        this.name = name;
        this.color = color;
    }
    Car.prototype.info = function () {
        console.log("Car " + this.name + " is " + CarColor[this.color] + ".");
    };
    return Car;
}());
exports.Car = Car;
var CarColor;
(function (CarColor) {
    CarColor[CarColor["Red"] = 0] = "Red";
    CarColor[CarColor["Blue"] = 1] = "Blue";
    CarColor[CarColor["Green"] = 2] = "Green";
})(CarColor = exports.CarColor || (exports.CarColor = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(752);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map