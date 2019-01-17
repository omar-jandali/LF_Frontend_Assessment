/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('this is a test');\n$('#content').html();\nvar $content = $('#content');\n\nimages = [{\n    id: 1,\n    image: 'http://via.placeholder.com/500x500',\n    title: 'Vega',\n    caption: 'Vega is one of the leading global plant-based nutrition companies.'\n}, {\n    id: 2,\n    image: 'http://via.placeholder.com/500x500',\n    title: 'EightSleep',\n    caption: 'Eight has developed the world\\'s first smart mattress.'\n}, {\n    id: 3,\n    image: 'http://via.placeholder.com/500x500',\n    title: 'The Hundereds.com',\n    caption: 'The Hundereds Shopify Plus eCommerse site features a 100% custom and seamless Wordpress integraion.'\n}, {\n    id: 4,\n    image: 'http://via.placeholder.com/500x500',\n    title: 'PRG Nation',\n    caption: 'InnerSelf Technologies hopes to create4 a PRG Nation, built around their new bio-stimulant and monitoring system.'\n}, {\n    id: 5,\n    image: 'http://via.placeholder.com/500x500',\n    title: 'Qualo.com',\n    caption: 'Immerseive, highly-branded, and customer-focused shopping experience. '\n}];\n\nvar counter = 0;\n\nfunction renderWindow() {\n    $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter].image + ');\"><p id=\"title\"> ' + images[counter].title + ' </p><p id=\"caption\"> ' + images[counter].caption + ' </p></div>');\n    $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter + 1].image + ')\"><p id=\"title\"> ' + images[counter + 1].title + ' </p><p id=\"caption\"> ' + images[counter + 1].caption + ' </p></div>');\n}\n\nfunction nextItem() {\n    counter++;\n    $content.empty();\n    if (counter <= 3) {\n        $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter].image + ');\"><p id=\"title\"> ' + images[counter].title + ' </p><p id=\"caption\"> ' + images[counter].caption + ' </p></div>');\n        $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter + 1].image + ')\"><p id=\"title\"> ' + images[counter + 1].title + ' </p><p id=\"caption\"> ' + images[counter + 1].caption + ' </p></div>');\n    }\n    if (counter > 3) {\n        counter = 0;\n        $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter].image + ');\"><p id=\"title\"> ' + images[counter].title + ' </p><p id=\"caption\"> ' + images[counter].caption + ' </p></div>');\n        $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter + 1].image + ')\"><p id=\"title\"> ' + images[counter + 1].title + ' </p><p id=\"caption\"> ' + images[counter + 1].caption + ' </p></div>');\n    }\n}\n\nfunction previousItem() {\n    counter--;\n    $content.empty();\n    if (counter >= 0) {\n        $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter].image + ');\"><p id=\"title\"> ' + images[counter].title + ' </p><p id=\"caption\"> ' + images[counter].caption + ' </p></div>');\n        $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter + 1].image + ')\"><p id=\"title\"> ' + images[counter + 1].title + ' </p><p id=\"caption\"> ' + images[counter + 1].caption + ' </p></div>');\n    }\n    if (counter < 0) {\n        counter = 3;\n        $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter].image + ');\"><p id=\"title\"> ' + images[counter].title + ' </p><p id=\"caption\"> ' + images[counter].caption + ' </p></div>');\n        $content.append('<div id=\"item\" style=\"background-image: url(' + images[counter + 1].image + ')\"><p id=\"title\"> ' + images[counter + 1].title + ' </p><p id=\"caption\"> ' + images[counter + 1].caption + ' </p></div>');\n    }\n}\n\nrenderWindow();\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ });