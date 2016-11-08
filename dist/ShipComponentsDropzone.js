(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames")) : factory(root["React"], root["classnames"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * Drag & Drop Component
	 *
	 * @author       Sepand Assadi <sepand_assadi@playstation.sony.com>
	 * @file         Helper file for importing Buttons
	 * @example      import { UploadContainer } from 'ship-components-dropzone';
	 ******************************************************************************/
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UploadContainer = undefined;
	
	var _UploadContainer = __webpack_require__(7);
	
	var _UploadContainer2 = _interopRequireDefault(_UploadContainer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var UploadContainer = exports.UploadContainer = _UploadContainer2.default;exports.default = UploadContainer;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,d,y=t&s.G,h=t&s.P,v=y?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=y?o:o[n]||(o[n]={});y&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],d=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,d),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	   return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	   return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _createClass = function () {
	   function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	         var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	   }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	   };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _attrAccept = __webpack_require__(3);
	
	var _attrAccept2 = _interopRequireDefault(_attrAccept);
	
	var _dropcontainer = __webpack_require__(8);
	
	var _dropcontainer2 = _interopRequireDefault(_dropcontainer);
	
	var _UploadButton = __webpack_require__(6);
	
	var _UploadButton2 = _interopRequireDefault(_UploadButton);
	
	var _ImagePreview = __webpack_require__(5);
	
	var _ImagePreview2 = _interopRequireDefault(_ImagePreview);
	
	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	   if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	   }
	}
	
	function _possibleConstructorReturn(self, call) {
	   if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	   }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	   if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	   }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var DropContainer = function (_React$Component) {
	   _inherits(DropContainer, _React$Component);
	
	   /**
	      * Base Container
	      * @param  {Object} props
	   */
	   function DropContainer(props) {
	      _classCallCheck(this, DropContainer);
	
	      var _this = _possibleConstructorReturn(this, (DropContainer.__proto__ || Object.getPrototypeOf(DropContainer)).call(this, props));
	
	      _this.state = {
	         fileSrc: '',
	         dropzoneStyle: '',
	         isDragActive: false,
	         visibility: 'show'
	      };
	      _this.onDragOver = _this.onDragOver.bind(_this);
	      _this.onDrop = _this.onDrop.bind(_this);
	      _this.onDragLeave = _this.onDragLeave.bind(_this);
	      _this.onDragEnter = _this.onDragEnter.bind(_this);
	      _this.handleChange = _this.handleChange.bind(_this);
	      _this.handleInputButtonClick = _this.handleInputButtonClick.bind(_this);
	      return _this;
	   }
	
	   _createClass(DropContainer, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	         this.enterCounter = 0;
	      }
	
	      /**
	         * Handle the drag enter event
	         * @param  {Event]} event
	      */
	
	   }, {
	      key: 'onDragEnter',
	      value: function onDragEnter(event) {
	         event.preventDefault();
	
	         // Count the dropzone and any children that are entered.
	         ++this.enterCounter;
	
	         // This is tricky. During the drag even the dataTransfer.
	         // files is null But Chrome implements some drag store,
	         // which is accesible via dataTransfer.items
	         var dataTransferItems = this.extractData(event),
	
	
	         // Now we need to convert the DataTransferList to Array
	         fileFormat = this.fileFormatFinder(this.props.accept),
	
	
	         // Check to make sure file is valid based on
	         // user's file format input
	         isFileValid = this.validateFileFormat(Array.prototype.slice.call(dataTransferItems), fileFormat);
	
	         this.setState({
	            isDragActive: isFileValid,
	            dropzoneStyle: 'dragBorder',
	            visibility: 'hide'
	         });
	
	         // DropContainer turns green if valid format
	         // Otherwise turns red for warning
	         if (isFileValid) {
	            this.correctFormatBorderStyle();
	         } else {
	            this.incorrectFormatBorderStyle();
	         }
	      }
	
	      /**
	         * Handle the drag over event
	         * @param  {Event]} event
	      */
	
	   }, {
	      key: 'onDragOver',
	      value: function onDragOver(event) {
	         event.preventDefault();
	         event.stopPropagation();
	         event.dataTransfer.dropEffect = 'copy';
	         return false;
	      }
	
	      /**
	         * Handle the drag leave event
	      */
	
	   }, {
	      key: 'onDragLeave',
	      value: function onDragLeave(event) {
	         event.preventDefault();
	
	         // Only deactivate once the dropzone and all children was left.
	         if (--this.enterCounter > 0) {
	            return;
	         }
	
	         this.setState({
	            isDragActive: false,
	            isDragReject: false,
	            dropzoneStyle: '',
	            visibility: 'show'
	         });
	
	         if (this.state.imageFile) {
	            return;
	         }
	      }
	
	      /**
	         * Handle the drop event
	         * @param  {Event]} event
	      */
	
	   }, {
	      key: 'onDrop',
	      value: function onDrop(event) {
	         event.preventDefault();
	         this.setState({
	            isDragActive: false,
	            dropzoneStyle: '',
	            visibility: 'show'
	         });
	         // Call handleChange function
	         this.handleChange.call(this, event);
	      }
	
	      /**
	         * Handle Input Button Click
	         * @param  {Event]} event
	      */
	
	   }, {
	      key: 'handleInputButtonClick',
	      value: function handleInputButtonClick(event) {
	         this.handleChange(event);
	      }
	
	      /**
	         * Handle the file state
	         * If file is valid => create a URL obj
	         * And modify the state value so the
	         * parent (UploadContainer) can access it
	         * @param  {Event]} event
	      */
	
	   }, {
	      key: 'handleChange',
	      value: function handleChange(event) {
	         var e = event.nativeEvent,
	             dataTransferItems = this.extractData(event),
	             fileFormat = this.fileFormatFinder(this.props.accept),
	             isFileValid = this.validateFileFormat(Array.prototype.slice.call(dataTransferItems), fileFormat);
	
	         // Check to make sure the dropped file
	         // is in correct format - e.g image/*
	         if (isFileValid) {
	            var eventFile = e.dataTransfer || event.target;
	
	            if (eventFile) {
	               this.dragAndDropFileUrlGenerator(eventFile);
	            } else {
	               this.inputButtonFileUrlGenerator(eventFile);
	            }
	         }
	      }
	   }, {
	      key: 'dragAndDropFileUrlGenerator',
	      value: function dragAndDropFileUrlGenerator(eventFile) {
	         var file = eventFile.files[0],
	             uploadFile = void 0;
	
	         if ((typeof file === 'undefined' ? 'undefined' : _typeof(file)) !== undefined) {
	            uploadFile = URL.createObjectURL(file);
	
	            this.setState({
	               fileSrc: uploadFile
	            });
	         }
	      }
	   }, {
	      key: 'inputButtonFileUrlGenerator',
	      value: function inputButtonFileUrlGenerator(eventFile) {
	         var uploadFile = void 0;
	         if ((typeof eventFile === 'undefined' ? 'undefined' : _typeof(eventFile)) !== undefined) {
	            uploadFile = URL.createObjectURL(eventFile);
	
	            this.setState({
	               fileSrc: uploadFile
	            });
	         }
	      }
	
	      /**
	         * Handle file type validation
	         * make sure the file is an image
	         * @param  {Event]} event
	         * @return {object}
	      */
	
	   }, {
	      key: 'extractData',
	      value: function extractData(event) {
	         return event.dataTransfer && event.dataTransfer.items ? event.dataTransfer.items : [];
	      }
	   }, {
	      key: 'fileFormatFinder',
	      value: function fileFormatFinder(props) {
	         // const FILE_FORMATS = {
	         //    image: /\.jpg | \.jpeg | \.gif | \.png/,
	         //    text: /\.txt | \.doc | \.docs/,
	         //    zip: /\.zip | \.tar/,
	         //    video: /\.mov | \.mpeg | \.mpg | \.avi | \.mkv | \.wmv/,
	         //    music: /\.m1v | \.mp2 | \.mp3 | \.mpa | \.mpe | \.m3u/
	         // }
	         var FILE_FORMATS = {
	            image: 'image/*',
	            text: 'text/*',
	            pdf: 'application/pdf',
	            zip: 'application/zip',
	            video: 'video/*',
	            audio: 'audio/*',
	            app: 'application/*'
	         };
	         return FILE_FORMATS[props];
	      }
	
	      /**
	         * Handle file type validation
	         * make sure the file is an image
	         * @param  {Event]} event
	         * @return {bool}
	      */
	
	   }, {
	      key: 'validateFileFormat',
	      value: function validateFileFormat(file, fileFormat) {
	         return file.every(function (f) {
	            return (0, _attrAccept2.default)(f, fileFormat);
	         });
	      }
	
	      /**
	         * Handle border color
	         * if file type is correct
	         * make border GREEN
	      */
	
	   }, {
	      key: 'correctFormatBorderStyle',
	      value: function correctFormatBorderStyle() {
	         this.setState({
	            dropzoneStyle: 'correctFormat'
	         });
	      }
	
	      /**
	         * Handle border color
	         * if file type is incorrect
	         * make border RED
	      */
	
	   }, {
	      key: 'incorrectFormatBorderStyle',
	      value: function incorrectFormatBorderStyle() {
	         this.setState({ dropzoneStyle: 'incorrectFormat' });
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         // define styles
	         var _state = this.state;
	         var dropzoneStyle = _state.dropzoneStyle;
	         var visibility = _state.visibility;
	         var dropContainerStyle = (0, _classnames2.default)(_dropcontainer2.default.dropzoneContainer, _dropcontainer2.default[dropzoneStyle]);
	
	         return _react2.default.createElement('section', {
	            className: dropContainerStyle,
	            onDragOver: this.onDragOver,
	            onDragLeave: this.onDragLeave,
	            onDragStart: this.onDragStart,
	            onDragEnter: this.onDragEnter,
	            onClick: this.onClick,
	            onDrop: this.onDrop }, _react2.default.createElement('div', { className: _dropcontainer2.default[visibility] }, _react2.default.createElement(_ImagePreview2.default, { imgSrc: this.state.fileSrc }), _react2.default.createElement('form', null, _react2.default.createElement(_UploadButton2.default, {
	            ref: 'inputFile',
	            buttonStyle: this.props.buttonStyle,
	            buttonLabel: this.props.buttonText,
	            onChange: this.handleInputButtonClick
	         }))));
	      }
	   }]);
	
	   return DropContainer;
	}(_react2.default.Component);
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	
	exports.default = DropContainer;
	var string = _react2.default.PropTypes.string;
	
	DropContainer.propTypes = {
	   accept: string.isRequired,
	   buttonStyle: string,
	   buttonText: string
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _createClass = function () {
	   function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	         var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	   }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	   };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _imagepreview = __webpack_require__(9);
	
	var _imagepreview2 = _interopRequireDefault(_imagepreview);
	
	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	   if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	   }
	}
	
	function _possibleConstructorReturn(self, call) {
	   if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	   }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	   if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	   }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ImagePreview = function (_React$Component) {
	   _inherits(ImagePreview, _React$Component);
	
	   /**
	      * Image Placeholder
	      * @param  {Object} props
	   */
	   function ImagePreview(props) {
	      _classCallCheck(this, ImagePreview);
	
	      var _this = _possibleConstructorReturn(this, (ImagePreview.__proto__ || Object.getPrototypeOf(ImagePreview)).call(this, props));
	
	      _this.state = { isDragable: false };
	
	      _this.onMouseDownHandler = _this.onMouseDownHandler.bind(_this);
	      return _this;
	   }
	
	   /**
	      * Handle the mouse down event on image
	      * Will disable the drag out when image added
	      * @param  {Event]} event
	   */
	
	   _createClass(ImagePreview, [{
	      key: 'onMouseDownHandler',
	      value: function onMouseDownHandler(e) {
	         if (!this.state.isDragable) {
	            e.preventDefault();
	         }
	      }
	      /**
	         * Find out if image src is available
	         * If not hide the image area otherwise show the image
	         * @return {String}
	      */
	
	   }, {
	      key: 'toggleImage',
	      value: function toggleImage() {
	         var image = this.props.imgSrc,
	             imgShow = (0, _classnames2.default)(_imagepreview2.default.img, _imagepreview2.default.show),
	             imgHide = (0, _classnames2.default)(_imagepreview2.default.img, _imagepreview2.default.hide);
	         return image === '' ? imgHide : imgShow;
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         return _react2.default.createElement('img', {
	            src: this.props.imgSrc,
	            className: this.toggleImage(),
	            onMouseDown: this.onMouseDownHandler
	         });
	      }
	   }]);
	
	   return ImagePreview;
	}(_react2.default.Component);
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	
	exports.default = ImagePreview;
	var string = _react2.default.PropTypes.string;
	
	ImagePreview.propTypes = {
	   fileSrc: string
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _createClass = function () {
	   function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	         var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	   }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	   };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _uploadbutton = __webpack_require__(10);
	
	var _uploadbutton2 = _interopRequireDefault(_uploadbutton);
	
	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	   if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	   }
	}
	
	function _possibleConstructorReturn(self, call) {
	   if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	   }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	   if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	   }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var UploadButton = function (_React$Component) {
	   _inherits(UploadButton, _React$Component);
	
	   /**
	      * Base Button
	      * @param  {Object} props
	   */
	   function UploadButton(props) {
	      _classCallCheck(this, UploadButton);
	
	      var _this = _possibleConstructorReturn(this, (UploadButton.__proto__ || Object.getPrototypeOf(UploadButton)).call(this, props));
	
	      _this.state = { checkBoxState: false };
	
	      // bind events scope to UploadButton Component
	      _this.handleChange = _this.handleChange.bind(_this);
	      _this.onButtonClickHandler = _this.onButtonClickHandler.bind(_this);
	      return _this;
	   }
	
	   /**
	      * Handle the button text label after component rendered
	   */
	
	   _createClass(UploadButton, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {}
	
	      /**
	         * Handle the button state
	         * @param  {Event]} event
	      */
	
	   }, {
	      key: 'handleChange',
	      value: function handleChange(e) {
	
	         this.setState({
	            buttonLabel: e.target.value.split(/(\\|\/)/g).pop()
	         });
	         if (this.props.onChange) {
	            this.props.onChange(e);
	         }
	      }
	   }, {
	      key: 'onButtonClickHandler',
	      value: function onButtonClickHandler() {
	         this.setState({
	            checkBoxState: true
	         });
	
	         // Trigger file input click event
	         this.triggerInputButotn();
	
	         // Trigger checkbox back to be unchecked
	         var that = this;
	         setTimeout(function () {
	            that.setState({
	               checkBoxState: false
	            });
	         }, 2000);
	      }
	   }, {
	      key: 'triggerInputButotn',
	      value: function triggerInputButotn() {
	         this.refs.inputFileButton.click();
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
	         var buttonStyle = this.props.buttonStyle;
	
	         var uploadButtonContainer = (0, _classnames2.default)(_uploadbutton2.default.animationButton, _uploadbutton2.default.raised, _uploadbutton2.default.hoverable, _uploadbutton2.default[buttonStyle]);
	
	         return _react2.default.createElement('div', {
	            className: uploadButtonContainer,
	            onClick: this.onButtonClickHandler }, _react2.default.createElement('input', {
	            type: 'file',
	            ref: 'inputFileButton',
	            className: _uploadbutton2.default.inputHidden,
	            onChange: this.props.onChange
	         }), _react2.default.createElement('input', {
	            type: 'checkbox',
	            checked: this.state.checkBoxState,
	            className: _uploadbutton2.default.toggle,
	            ref: 'inputCheckbox'
	         }), _react2.default.createElement('div', {
	            className: _uploadbutton2.default.anim }), _react2.default.createElement('span', { className: _uploadbutton2.default.buttonTextSpan }, this.props.buttonLabel || 'Upload'));
	      }
	   }]);
	
	   return UploadButton;
	}(_react2.default.Component);
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	
	exports.default = UploadButton;
	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	
	UploadButton.propTypes = {
	   buttonLabel: string,
	   buttonStyle: string,
	   onChange: func
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DropContainer = __webpack_require__(4);
	
	var _DropContainer2 = _interopRequireDefault(_DropContainer);
	
	var _uploadcontainer = __webpack_require__(11);
	
	var _uploadcontainer2 = _interopRequireDefault(_uploadcontainer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var UploadContainer = function (_React$Component) {
	  _inherits(UploadContainer, _React$Component);
	
	  function UploadContainer() {
	    _classCallCheck(this, UploadContainer);
	
	    return _possibleConstructorReturn(this, (UploadContainer.__proto__ || Object.getPrototypeOf(UploadContainer)).apply(this, arguments));
	  }
	
	  _createClass(UploadContainer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('section', { className: _uploadcontainer2.default.uploadContainerWrapper }, _react2.default.createElement(_DropContainer2.default, {
	        accept: 'image',
	        buttonStyle: this.props.buttonStyle || 'default',
	        buttonText: this.props.buttonText,
	        backgroundColor: this.props.backgroundColor
	      }));
	    }
	  }]);
	
	  return UploadContainer;
	}(_react2.default.Component);
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	
	exports.default = UploadContainer;
	var string = _react2.default.PropTypes.string;
	
	UploadContainer.propTypes = {
	  buttonStyle: string,
	  buttonText: string
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"dropzoneContainer":"dropcontainer--dropzoneContainer","innerFlexContainer":"dropcontainer--innerFlexContainer","formWrapper":"dropcontainer--formWrapper","dragBorder":"dropcontainer--dragBorder","correctFormat":"dropcontainer--correctFormat","incorrectFormat":"dropcontainer--incorrectFormat","hide":"dropcontainer--hide","show":"dropcontainer--show"};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"img":"imagepreview--img","hide":"imagepreview--hide","show":"imagepreview--show"};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"uploadButtonContainer":"uploadbutton--uploadButtonContainer","inputHidden":"uploadbutton--inputHidden","buttonTextSpan":"uploadbutton--buttonTextSpan","toggle":"uploadbutton--toggle","animationButton":"uploadbutton--animationButton","raised":"uploadbutton--raised","anim":"uploadbutton--anim","hoverable":"uploadbutton--hoverable","anim-out":"uploadbutton--anim-out","anim-out-pseudo":"uploadbutton--anim-out-pseudo","default":"uploadbutton--default","primary-disabled":"uploadbutton--primary-disabled","primary-red":"uploadbutton--primary-red","primary-pink":"uploadbutton--primary-pink","primary-purple":"uploadbutton--primary-purple","primary-deepPurple":"uploadbutton--primary-deepPurple","primary-indigo":"uploadbutton--primary-indigo","primary-blue":"uploadbutton--primary-blue","primary-lightBlue":"uploadbutton--primary-lightBlue","primary-cyan":"uploadbutton--primary-cyan","primary-teal":"uploadbutton--primary-teal","primary-green":"uploadbutton--primary-green","primary-lightGreen":"uploadbutton--primary-lightGreen","primary-lime":"uploadbutton--primary-lime","primary-yellow":"uploadbutton--primary-yellow","primary-amber":"uploadbutton--primary-amber","primary-orange":"uploadbutton--primary-orange","primary-deepOrange":"uploadbutton--primary-deepOrange","primary-brown":"uploadbutton--primary-brown","primary-blueGrey":"uploadbutton--primary-blueGrey","primary-grey":"uploadbutton--primary-grey","primary-black":"uploadbutton--primary-black","primary-white":"uploadbutton--primary-white","secondary-red":"uploadbutton--secondary-red","secondary-pink":"uploadbutton--secondary-pink","secondary-purple":"uploadbutton--secondary-purple","secondary-deepPurple":"uploadbutton--secondary-deepPurple","secondary-indigo":"uploadbutton--secondary-indigo","secondary-blue":"uploadbutton--secondary-blue","secondary-lightBlue":"uploadbutton--secondary-lightBlue","secondary-cyan":"uploadbutton--secondary-cyan","secondary-teal":"uploadbutton--secondary-teal","secondary-green":"uploadbutton--secondary-green","secondary-lightGreen":"uploadbutton--secondary-lightGreen","secondary-lime":"uploadbutton--secondary-lime","secondary-yellow":"uploadbutton--secondary-yellow","secondary-amber":"uploadbutton--secondary-amber","secondary-orange":"uploadbutton--secondary-orange","secondary-deepOrange":"uploadbutton--secondary-deepOrange","secondary-brown":"uploadbutton--secondary-brown","secondary-blueGrey":"uploadbutton--secondary-blueGrey","secondary-grey":"uploadbutton--secondary-grey","anim-in":"uploadbutton--anim-in","anim-in-pseudo":"uploadbutton--anim-in-pseudo"};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"uploadContainerWrapper":"uploadcontainer--uploadContainerWrapper"};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ShipComponentsDropzone.js.map