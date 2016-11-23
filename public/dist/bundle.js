/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _hello = __webpack_require__(3);
	
	document.addEventListener('DOMContentLoaded', function () {
	    (0, _hello.sayHello)();
	});
	console.log(_hello.message);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sayHello = sayHello;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import jQuery from 'jquery';
	var message = exports.message = '<h1>Hello, World</h1>';
	
	function sayHello() {
	    var div = document.createElement('div');
	    document.body.appendChild(div);
	    // jQuery('div').text('Opi');
	    div.setAttribute('id', 'main');
	    div.innerHTML = message;
	}
	
	var Programmer =
	// public String name;
	// public String language;
	
	function Programmer(name, language) {
	    _classCallCheck(this, Programmer);
	
	    this.name = name;
	    this.language = language;
	};
	
	var olli = new Programmer('Olli', 'JavaScript');
	console.log(olli.name);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjRhMDA4YzIxNDNkMjJmNzYxZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNheUhlbGxvIiwibWVzc2FnZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJQcm9ncmFtbWVyIiwibmFtZSIsImxhbmd1YWdlIiwib2xsaSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSx3Qjs7Ozs7Ozs7QUNBQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFFQUEsVUFBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQ7QUFDSCxFQUZEO0FBR0FDLFNBQVFDLEdBQVIsaUI7Ozs7Ozs7Ozs7O1NDRmdCQyxRLEdBQUFBLFE7Ozs7QUFIaEI7QUFDTyxLQUFNQyw0QkFBVSx1QkFBaEI7O0FBRUEsVUFBU0QsUUFBVCxHQUFvQjtBQUN2QixTQUFNRSxNQUFNTixTQUFTTyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQVAsY0FBU1EsSUFBVCxDQUFjQyxXQUFkLENBQTBCSCxHQUExQjtBQUNBO0FBQ0FBLFNBQUlJLFlBQUosQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkI7QUFDQUosU0FBSUssU0FBSixHQUFnQk4sT0FBaEI7QUFDSDs7S0FFS08sVTtBQUNGO0FBQ0E7O0FBRUEscUJBQVlDLElBQVosRUFBa0JDLFFBQWxCLEVBQTRCO0FBQUE7O0FBQ3hCLFVBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0gsRTs7QUFHTCxLQUFNQyxPQUFPLElBQUlILFVBQUosQ0FBZSxNQUFmLEVBQXVCLFlBQXZCLENBQWI7QUFDQVYsU0FBUUMsR0FBUixDQUFZWSxLQUFLRixJQUFqQixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjRhMDA4YzIxNDNkMjJmNzYxZmMiLCJpbXBvcnQgJy4vZm9sZGVyJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiaW1wb3J0ICcuLi9pbml0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9sZGVyL2luZGV4LmpzIiwiaW1wb3J0IHtzYXlIZWxsbywgbWVzc2FnZX0gZnJvbSAnLi9oZWxsbyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgc2F5SGVsbG8oKTtcbn0pO1xuY29uc29sZS5sb2cobWVzc2FnZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0LmpzIiwiLy8gaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2UgPSAnPGgxPkhlbGxvLCBXb3JsZDwvaDE+JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAvLyBqUXVlcnkoJ2RpdicpLnRleHQoJ09waScpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcbn1cblxuY2xhc3MgUHJvZ3JhbW1lciB7XG4gICAgLy8gcHVibGljIFN0cmluZyBuYW1lO1xuICAgIC8vIHB1YmxpYyBTdHJpbmcgbGFuZ3VhZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsYW5ndWFnZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxufVxuXG5jb25zdCBvbGxpID0gbmV3IFByb2dyYW1tZXIoJ09sbGknLCAnSmF2YVNjcmlwdCcpO1xuY29uc29sZS5sb2cob2xsaS5uYW1lKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbGxvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==