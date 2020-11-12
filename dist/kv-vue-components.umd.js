(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kv-vue-components"] = factory();
	else
		root["kv-vue-components"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.7.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "kvButton", function() { return /* reexport */ kvButton; });
__webpack_require__.d(__webpack_exports__, "kvLabeledInput", function() { return /* reexport */ kvLabeledInput; });
__webpack_require__.d(__webpack_exports__, "kvHeading", function() { return /* reexport */ kvHeading; });
__webpack_require__.d(__webpack_exports__, "kvLoader", function() { return /* reexport */ kvLoader; });
__webpack_require__.d(__webpack_exports__, "kvUpdateNotice", function() { return /* reexport */ kvUpdateNotice; });
__webpack_require__.d(__webpack_exports__, "kvSideHeader", function() { return /* reexport */ kvSideHeader; });
__webpack_require__.d(__webpack_exports__, "kvSideContent", function() { return /* reexport */ kvSideContent; });
__webpack_require__.d(__webpack_exports__, "kvSideToggle", function() { return /* reexport */ kvSideToggle; });
__webpack_require__.d(__webpack_exports__, "kvAccentMark", function() { return /* reexport */ kvAccentMark; });
__webpack_require__.d(__webpack_exports__, "kvccLogo", function() { return /* reexport */ kvccLogo; });
__webpack_require__.d(__webpack_exports__, "kvLogo", function() { return /* reexport */ kvLogo; });
__webpack_require__.d(__webpack_exports__, "kvLogoStacked", function() { return /* reexport */ kvLogoStacked; });
__webpack_require__.d(__webpack_exports__, "kvSimplePagination", function() { return /* reexport */ kvSimplePagination; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvButton.vue?vue&type=template&id=c3b3ba52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"leading-none\n                rounded\n                cursor-pointer\n                shadow-sm\n                transition-all duration-300 ease-in-out\n                hover:shadow-outline focus:shadow-outline\n                font-medium",class:[_vm.buttonSize, _vm.buttonColor],style:(_vm.styling),attrs:{"type":_vm.type}},[_c('span',[_vm._v(_vm._s(_vm.text))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvButton.vue?vue&type=template&id=c3b3ba52&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvButton.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var kvButtonvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: String,
      validator: function validator(value) {
        return ["button", "submit", "reset"].includes(value);
      }
    },
    text: String,
    size: String,
    color: String
  },
  data: function data() {
    return {
      styling: {
        textShadow: '0 0 0.125rem black'
      }
    };
  },
  computed: {
    buttonSize: function buttonSize() {
      switch (this.size) {
        case 'tiny':
          return ['px-2', 'py-2', 'text-xs'];

        case 'small':
          return ['px-3', 'py-2', 'text-sm'];

        case 'large':
          return ['px-5', 'py-4', 'text-lg'];

        case 'huge':
          return ['px-6', 'py-5', 'text-xl'];

        default:
          return ['px-4', 'py-3', 'text-base'];
      }
    },
    buttonColor: function buttonColor() {
      switch (this.color) {
        case 'red':
          return ['text-white', 'bg-red-700', 'hover:bg-red-800', 'focus:bg-red-800'];

        case 'green':
          return ['text-white', 'bg-green-700', 'hover:bg-green-800', 'focus:bg-green-800'];

        default:
          return ['text-white', 'bg-blue-700', 'hover:bg-blue-800', 'focus:bg-blue-800'];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/kvButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvButtonvue_type_script_lang_js_ = (kvButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/kvButton.vue





/* normalize component */

var component = normalizeComponent(
  components_kvButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvLabeledInput.vue?vue&type=template&id=635716ad&
var kvLabeledInputvue_type_template_id_635716ad_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_c('label',{staticClass:"absolute top-0 left-0\n           mb-1 ml-3 mt-2\n           text-gray-800\n           text-xs font-thin\n           pointer-events-none",attrs:{"for":_vm.id}},[_vm._v(_vm._s(_vm.label))]),((_vm.type)==='checkbox'&&(['text', 'search', 'datalist', 'password'].includes(_vm.type)))?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.input),expression:"input"}],class:_vm.classes,attrs:{"id":_vm.id,"name":_vm.id,"list":_vm.list_id,"required":_vm.required,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.input)?_vm._i(_vm.input,null)>-1:(_vm.input)},on:{"input":_vm.updateParentModel,"paste":_vm.updateParentModel,"change":function($event){var $$a=_vm.input,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.input=$$a.concat([$$v]))}else{$$i>-1&&(_vm.input=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.input=$$c}}}}):((_vm.type)==='radio'&&(['text', 'search', 'datalist', 'password'].includes(_vm.type)))?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.input),expression:"input"}],class:_vm.classes,attrs:{"id":_vm.id,"name":_vm.id,"list":_vm.list_id,"required":_vm.required,"type":"radio"},domProps:{"checked":_vm._q(_vm.input,null)},on:{"input":_vm.updateParentModel,"paste":_vm.updateParentModel,"change":function($event){_vm.input=null}}}):(['text', 'search', 'datalist', 'password'].includes(_vm.type))?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.input),expression:"input"}],class:_vm.classes,attrs:{"id":_vm.id,"name":_vm.id,"list":_vm.list_id,"required":_vm.required,"type":_vm.type},domProps:{"value":(_vm.input)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.input=$event.target.value},_vm.updateParentModel],"paste":_vm.updateParentModel}}):_vm._e(),(_vm.type === 'select')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.input),expression:"input"}],class:_vm.classes,attrs:{"id":_vm.id,"name":_vm.id},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.input=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.updateParentModel]}},[_vm._t("default")],2):_vm._e()])}
var kvLabeledInputvue_type_template_id_635716ad_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvLabeledInput.vue?vue&type=template&id=635716ad&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvLabeledInput.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var kvLabeledInputvue_type_script_lang_js_ = ({
  props: {
    label: String,
    type: {
      type: String,
      // TODO: show/hide button for password inputs
      default: 'text',
      validation: function validation(value) {
        return ['text', 'search', 'select', 'password'].includes(value);
      }
    },
    id: String,
    model: null,
    required: Boolean,
    list_id: String
  },
  watch: {
    // Watch the model for changes from the parent to update the local input model value.
    model: function model(value) {
      this.input = value;
    }
  },
  data: function data() {
    return {
      input: null,
      classes: ['appearance-none', 'px-3', 'pb-2', 'pt-6', 'bg-white', 'hover:bg-white', 'focus:bg-white', 'border', 'border-gray-500', 'hover:border-blue-700', 'focus:border-blue-700', 'shadow-sm', 'rounded', 'focus:shadow-outline', 'outline-none', 'w-full', 'transition-all', 'duration-300', 'ease-in-out'],
      styling: {
        transition: 'all 0.25s ease'
      }
    };
  },
  methods: {
    updateParentModel: function updateParentModel() {
      this.$emit('update:model', this.input);
    }
  }
});
// CONCATENATED MODULE: ./src/components/kvLabeledInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvLabeledInputvue_type_script_lang_js_ = (kvLabeledInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/kvLabeledInput.vue





/* normalize component */

var kvLabeledInput_component = normalizeComponent(
  components_kvLabeledInputvue_type_script_lang_js_,
  kvLabeledInputvue_type_template_id_635716ad_render,
  kvLabeledInputvue_type_template_id_635716ad_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvLabeledInput = (kvLabeledInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvHeading.vue?vue&type=template&id=40513079&
var kvHeadingvue_type_template_id_40513079_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.type,{tag:"component",staticClass:"font-bold",class:_vm.getFontSize},[_vm._v(_vm._s(_vm.text))])}
var kvHeadingvue_type_template_id_40513079_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvHeading.vue?vue&type=template&id=40513079&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvHeading.vue?vue&type=script&lang=js&

//
//
//
//
/* harmony default export */ var kvHeadingvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: String,
      validator: function validator(value) {
        var validHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        return validHeadings.includes(value);
      }
    },
    text: String
  },
  computed: {
    getFontSize: function getFontSize() {
      switch (this.type) {
        case 'h1':
          return ['text-3xl'];

        case 'h2':
          return ['text-2xl'];

        case 'h3':
          return ['text-xl'];

        case 'h4':
          return ['text-lg'];

        case 'h5':
          return ['text-base'];

        case 'h6':
          return ['text-sm'];

        default:
          return ['text-base'];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/kvHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvHeadingvue_type_script_lang_js_ = (kvHeadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/kvHeading.vue





/* normalize component */

var kvHeading_component = normalizeComponent(
  components_kvHeadingvue_type_script_lang_js_,
  kvHeadingvue_type_template_id_40513079_render,
  kvHeadingvue_type_template_id_40513079_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvHeading = (kvHeading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvLoader.vue?vue&type=template&id=0436d947&
var kvLoadervue_type_template_id_0436d947_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inline-flex justify-center items-center"},[_c('div',{ref:"icon",staticClass:"h-6 w-6\n            rounded-full\n            border-4 border-blue-700\n            mr-2",style:(_vm.iconStyling),attrs:{"aria-hidden":"true"}}),_c('div',[_vm._v(_vm._s(_vm.text))])])}
var kvLoadervue_type_template_id_0436d947_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvLoader.vue?vue&type=template&id=0436d947&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvLoader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var kvLoadervue_type_script_lang_js_ = ({
  props: {
    text: String
  },
  data: function data() {
    return {
      iconStyling: {
        borderTopColor: '#63b3ed',
        filter: 'drop-shadow(0 0 0.0625rem #63b3ed)'
      },
      rotationValue: 0,
      interval: null
    };
  },
  methods: {
    // Due to the necessity to import a separate stylesheet for styling exports, animations seem to need to be done in JavaScript.
    // If you can find a workaround or modify the config to allow an easy CSS animation, please do!
    // https://cli.vuejs.org/guide/css.html
    animateIcon: function animateIcon() {
      var nextRotationValue = this.rotationValue >= 360 ? this.rotationValue = 0 : this.rotationValue++;
      this.$refs.icon.style.transform = 'rotate(' + nextRotationValue + 'deg)';
    }
  },
  mounted: function mounted() {
    this.interval = window.setInterval(this.animateIcon, 5);
  },
  beforeDestroy: function beforeDestroy() {
    window.clearInterval(this.interval);
  }
});
// CONCATENATED MODULE: ./src/components/kvLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvLoadervue_type_script_lang_js_ = (kvLoadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/kvLoader.vue





/* normalize component */

var kvLoader_component = normalizeComponent(
  components_kvLoadervue_type_script_lang_js_,
  kvLoadervue_type_template_id_0436d947_render,
  kvLoadervue_type_template_id_0436d947_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvLoader = (kvLoader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvUpdateNotice.vue?vue&type=template&id=c018a710&
var kvUpdateNoticevue_type_template_id_c018a710_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.update)?_c('div',{staticClass:"fixed bottom-0 right-0\n     flex flex-col justify-center items-center\n     text-sm text-center\n     mr-4 mb-4 p-4\n     bg-white\n     z-50\n     w-40\n     transition-all duration-300 ease-in-out\n     shadow\n     rounded-lg"},[_c('div',{staticClass:"mb-4 font-thin"},[_vm._v("A new version of this application is ready!")]),_c('span',{on:{"click":_vm.refresh}},[_c('kv-button',{attrs:{"text":"Update","color":"green","type":"button"}})],1)]):_vm._e()}
var kvUpdateNoticevue_type_template_id_c018a710_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvUpdateNotice.vue?vue&type=template&id=c018a710&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvUpdateNotice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var kvUpdateNoticevue_type_script_lang_js_ = ({
  components: {
    kvButton: kvButton
  },
  data: function data() {
    return {
      // Is the service worker refreshing?
      refreshing: false,
      // Is a new service worker registered?
      registration: null,
      // Does the application have an update ready?
      update: false
    };
  },
  methods: {
    showUpdateNotice: function showUpdateNotice(event) {
      this.registration = event.detail;
      this.update = true;
    },
    refresh: function refresh() {
      // Hide the update notice.
      this.update = false; // If there is a new registration and it it waiting, we have to tell the service worker to skip waiting.

      if (!this.registration || !this.registration.waiting) return;
      this.registration.waiting.postMessage('skipWaiting');
    }
  },
  created: function created() {
    var _this = this;

    // When this component is mounted we will listen for the custom event to be fired to show the update notice.
    document.addEventListener('swUpdated', this.showUpdateNotice, {
      once: true
    }); // Add a controllerchange listener to the service worker to actually trigger a page refresh for new content.

    navigator.serviceWorker.addEventListener('controllerchange', function () {
      // Prevent triggering a refresh multiple times.
      if (_this.refreshing) return;
      _this.refreshing = true;
      window.location.reload();
    });
  }
});
// CONCATENATED MODULE: ./src/components/kvUpdateNotice.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvUpdateNoticevue_type_script_lang_js_ = (kvUpdateNoticevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/kvUpdateNotice.vue





/* normalize component */

var kvUpdateNotice_component = normalizeComponent(
  components_kvUpdateNoticevue_type_script_lang_js_,
  kvUpdateNoticevue_type_template_id_c018a710_render,
  kvUpdateNoticevue_type_template_id_c018a710_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvUpdateNotice = (kvUpdateNotice_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvSideHeader.vue?vue&type=template&id=01658e8c&
var kvSideHeadervue_type_template_id_01658e8c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"fixed top-0 left-0 bottom-0\n    inline-flex flex-col justify-start items-center\n    bg-gray-100\n    z-40\n    shadow\n    p-4\n    transition-all duration-300 ease-in-out\n    overflow-auto\n    w-64",style:(_vm.header_visible ? null : _vm.header_hidden_styling)},[_c('div',{staticClass:"w-full flex flex-col justify-center items-center mb-2"},[_c('kv-logo',{staticClass:"w-48 ml-2"}),_c('div',{staticClass:"text-blue-700 font-medium"},[_vm._v(_vm._s(_vm.name))])],1),_vm._t("default")],2)}
var kvSideHeadervue_type_template_id_01658e8c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvSideHeader.vue?vue&type=template&id=01658e8c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logos/kvLogo.vue?vue&type=template&id=e52d7a70&
var kvLogovue_type_template_id_e52d7a70_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"enable-background":"new 0 0 500 45.5"},attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 500 45.5","xml:space":"preserve"}},[_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M28.2,45.5L14.4,21.3L4.8,32.8v12.7H0V0h4.8v26.1L26,0h5.9L17.6,17.5l16.4,28H28.2z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M56.1,45.2v-3c-1.2,1.2-2.5,2.1-3.9,2.6s-3.1,0.7-5.2,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.7-1.3-4-2.6s-1.9-3.3-1.9-6     c0-2.8,0.9-5,2.8-6.6c1.9-1.6,4.5-2.4,8-2.4H56v-3c0-2.3-0.6-4.1-1.9-5.2c-1.2-1.1-3.3-1.7-6.1-1.7c-2.1,0-3.7,0.3-4.7,0.8     c-1.1,0.5-2.1,1.4-3.1,2.8L37,18c1.4-1.8,2.9-3,4.6-3.7c1.7-0.7,3.9-1,6.5-1c8.4,0,12.6,3.5,12.6,10.5v21.3h-4.6V45.2z      M56.1,30.6h-8.8c-4.7,0-7,1.9-7,5.5s2.4,5.4,7.2,5.4c1.6,0,3-0.1,4-0.4c1.1-0.3,2.1-0.9,3.1-1.8c1-1,1.5-2.7,1.5-5.3V30.6z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M75.8,45.5c-2.6,0-4.6-0.8-6-2.3c-1.3-1.5-2-3.5-2-6.1V0h4.6v36.9c0,1.6,0.3,2.7,0.9,3.5c0.6,0.7,1.7,1.1,3.3,1.1h2.5v4     H75.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M100.9,45.2v-3c-1.2,1.2-2.5,2.1-3.9,2.6s-3.1,0.7-5.2,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.7-1.3-4-2.6s-1.9-3.3-1.9-6     c0-2.8,0.9-5,2.8-6.6s4.5-2.4,8-2.4h9.4v-3c0-2.3-0.6-4.1-1.9-5.2c-1.2-1.1-3.3-1.7-6.1-1.7c-2.1,0-3.6,0.3-4.7,0.8     S86,19.6,85,21l-3.2-3c1.4-1.8,2.9-3,4.6-3.7s3.9-1,6.5-1c8.4,0,12.6,3.5,12.6,10.5v21.3h-4.6V45.2z M100.9,30.6h-8.8     c-4.7,0-7,1.9-7,5.5s2.4,5.4,7.2,5.4c1.6,0,3-0.1,4-0.4c1.1-0.3,2.1-0.9,3.1-1.8c1-1,1.5-2.7,1.5-5.3     C100.9,34,100.9,30.6,100.9,30.6z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M153.1,45.5V26.1c0-2.7-0.7-4.8-2-6.2c-1.4-1.4-3.3-2.1-5.7-2.1c-2.3,0-4.2,0.7-5.7,2.1c-1.4,1.4-2.2,3.3-2.2,5.7v19.9     H133V26.1c0-2.7-0.7-4.8-2-6.2c-1.4-1.4-3.3-2.1-5.7-2.1c-2.4,0-4.3,0.7-5.7,2.2c-1.4,1.4-2.1,3.5-2.1,6.2v19.4h-4.6V14h4.6v3.4     c2.2-2.6,5.2-3.8,8.9-3.8c4.5,0,7.7,1.7,9.6,5.2c2.5-3.5,5.9-5.2,10.3-5.2c1.7,0,3.2,0.3,4.6,0.8c1.4,0.5,2.9,1.5,4.5,3.1     s2.4,4.2,2.4,7.8v20.1L153.1,45.5L153.1,45.5z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M182.8,45.2v-3c-1.2,1.2-2.5,2.1-3.9,2.6s-3.1,0.7-5.2,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.7-1.3-4-2.6s-1.9-3.3-1.9-6     c0-2.8,0.9-5,2.8-6.6c1.9-1.6,4.5-2.4,8-2.4h9.4v-3c0-2.3-0.6-4.1-1.9-5.2c-1.2-1.1-3.3-1.7-6.1-1.7c-2.1,0-3.7,0.3-4.7,0.8     c-1.1,0.5-2.1,1.4-3.1,2.8l-3.3-2.9c1.4-1.8,2.9-3,4.6-3.7c1.7-0.7,3.9-1,6.5-1c8.4,0,12.6,3.5,12.6,10.5v21.3H182.8z      M182.8,30.6H174c-4.7,0-7,1.9-7,5.5s2.4,5.4,7.2,5.4c1.6,0,2.9-0.1,4-0.4c1.1-0.3,2.1-0.9,3.1-1.8c1-1,1.5-2.7,1.5-5.3V30.6z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M192.2,45.5v-4l17.5-23.4h-16.5V14H215v3.9l-17.5,23.5H215v4.1H192.2z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M240.4,41.9c-1.1,1.1-2.5,2-3.9,2.6c-1.5,0.6-3.2,0.9-5.1,0.9c-1.9,0-3.6-0.3-5-0.9c-1.5-0.6-2.9-1.6-4.2-2.9     c-1.3-1.3-2.2-3-2.8-5c-0.5-2-0.8-4.4-0.8-7.2s0.3-5.2,0.8-7.2s1.5-3.7,2.8-5s2.7-2.3,4.2-2.9c1.5-0.6,3.2-0.9,5.1-0.9     c1.9,0,3.5,0.3,5,0.9c1.5,0.6,2.9,1.6,4.2,2.9s2.2,3,2.8,5c0.5,2,0.8,4.4,0.8,7.2s-0.3,5.2-0.8,7.2     C242.9,38.6,241.9,40.4,240.4,41.9z M237.1,19.7c-1.5-1.5-3.4-2.3-5.7-2.3s-4,0.6-5.3,1.9s-2.1,2.8-2.4,4.4     c-0.3,1.7-0.5,3.6-0.5,5.6c0,2.3,0.2,4.2,0.5,5.8c0.3,1.5,1.1,3,2.4,4.3c1.3,1.3,3.1,1.9,5.3,1.9c2.3,0,4.1-0.6,5.4-1.9     c1.3-1.3,2.1-2.7,2.4-4.3c0.3-1.6,0.5-3.5,0.5-5.8c0-2.2-0.2-4.1-0.5-5.7C238.8,22.1,238.1,20.7,237.1,19.7z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M270.3,41.9c-1.1,1.1-2.4,2-3.9,2.6s-3.1,0.9-5.1,0.9c-1.9,0-3.6-0.3-5-0.9c-1.5-0.6-2.9-1.6-4.2-2.9     c-1.3-1.3-2.2-3-2.8-5c-0.5-2-0.8-4.4-0.8-7.2s0.3-5.2,0.8-7.2s1.5-3.7,2.8-5s2.7-2.3,4.2-2.9c1.5-0.6,3.2-0.9,5.1-0.9     s3.5,0.3,5,0.9c1.5,0.6,2.9,1.6,4.2,2.9c1.3,1.3,2.2,3,2.8,5c0.5,2,0.8,4.4,0.8,7.2s-0.3,5.2-0.8,7.2     C272.8,38.6,271.8,40.4,270.3,41.9z M267.1,19.7c-1.5-1.5-3.4-2.3-5.7-2.3c-2.3,0-4,0.6-5.3,1.9c-1.3,1.3-2.1,2.8-2.4,4.4     c-0.3,1.7-0.5,3.6-0.5,5.6c0,2.3,0.2,4.2,0.5,5.8c0.3,1.5,1.1,3,2.4,4.3s3.1,1.9,5.3,1.9c2.3,0,4.1-0.6,5.4-1.9     c1.3-1.3,2.1-2.7,2.4-4.3s0.5-3.5,0.5-5.8c0-2.2-0.2-4.1-0.5-5.7C268.8,22.1,268.1,20.7,267.1,19.7z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M294,45.5h-6.6L272.4,0h9.2l9.1,29.6L299.8,0h9.2L294,45.5z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M334.2,45.5l-2.7-8.1h-16.1l-2.7,8.1h-9.2L320,0h7l16.6,45.5H334.2z M323.7,13.4L318,29.9h11.3L323.7,13.4z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M346.6,45.5V0h8.9v37.6H376v7.9H346.6z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M380.7,45.5V0h8.9v37.6h20.6v7.9H380.7z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M414.8,45.5V0h29.9v7.9h-21.1v10.6h17.9v7.9h-17.9v11.1h21.1v7.9L414.8,45.5L414.8,45.5z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M468.2,26.8v18.7h-8.8V26.8L445.7,0h9.6l8.5,18.3L472.2,0h9.6L468.2,26.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M488.3,0.8H486V0h5.6v0.8h-2.3v6.7h-1L488.3,0.8L488.3,0.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M498.9,4.2c-0.1-1.1-0.1-2.3-0.1-3.3l0,0c-0.3,0.9-0.6,1.8-1,2.9l-1.3,3.7h-0.7l-1.2-3.6c-0.4-1.1-0.7-2-0.9-2.9l0,0   c0,0.9-0.1,2.2-0.1,3.3l-0.2,3.2h-0.9l0.5-7.6h1.2l1.3,3.7c0.3,0.9,0.6,1.8,0.8,2.5l0,0c0.2-0.8,0.5-1.6,0.8-2.5l1.3-3.7h1.2   l0.5,7.6h-1L498.9,4.2z"}})])}
var kvLogovue_type_template_id_e52d7a70_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Logos/kvLogo.vue?vue&type=template&id=e52d7a70&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logos/kvLogo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var kvLogovue_type_script_lang_js_ = ({
  props: {
    mono: String
  },
  computed: {
    kalamazooFill: function kalamazooFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#ffffff";

          case 'black':
            return "#000000";
        }
      }

      return "#000000";
    },
    valleyFill: function valleyFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#ffffff";

          case 'black':
            return "#000000";
        }
      }

      return "#2b6cb0";
    }
  }
});
// CONCATENATED MODULE: ./src/components/Logos/kvLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Logos_kvLogovue_type_script_lang_js_ = (kvLogovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Logos/kvLogo.vue





/* normalize component */

var kvLogo_component = normalizeComponent(
  Logos_kvLogovue_type_script_lang_js_,
  kvLogovue_type_template_id_e52d7a70_render,
  kvLogovue_type_template_id_e52d7a70_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvLogo = (kvLogo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvSideHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var kvSideHeadervue_type_script_lang_js_ = ({
  components: {
    KvLogo: kvLogo
  },
  props: {
    name: String,
    button: Boolean
  },
  data: function data() {
    return {
      // Logo Fill Color
      fillColor: '#2b6cb0',
      // Form Display & Swipe Handling
      header_visible: true,
      x_down: null,
      y_down: null,
      header_hidden_styling: {
        left: '-16rem'
      }
    };
  },
  methods: {
    handleTouchStart: function handleTouchStart(e) {
      var firstTouch = e.touches[0];
      this.x_down = firstTouch.clientX;
      this.y_down = firstTouch.clientY;
    },
    handleTouchMove: function handleTouchMove(e) {
      if (!this.x_down || !this.y_down) {
        return;
      }

      var xUp = e.touches[0].clientX;
      var yUp = e.touches[0].clientY;
      var xDiff = this.x_down - xUp;
      var yDiff = this.y_down - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        this.header_visible = xDiff <= 0;
      }

      this.x_down = null;
      this.y_down = null;
    },
    toggle: function toggle() {
      this.header_visible = !this.header_visible;
    },
    hide: function hide() {
      this.header_visible = false;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
    document.addEventListener('touchstart', this.handleTouchStart, false);
    document.addEventListener('touchmove', this.handleTouchMove, false); // Listen for the event to toggle the header when the user clicks a toggle button.

    this.$root.$on('toggleKvSideHeader', function () {
      _this.toggle();
    }); // Listen for the event to close the header when the user touches content.

    this.$root.$on('closeKvSideHeader', function () {
      _this.hide();
    });
  },
  beforeDestroy: function beforeDestroy() {
    // Remove the touch event listeners before this component is destroyed.
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchmove', this.handleTouchMove);
  }
});
// CONCATENATED MODULE: ./src/components/kvSideHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvSideHeadervue_type_script_lang_js_ = (kvSideHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/kvSideHeader.vue





/* normalize component */

var kvSideHeader_component = normalizeComponent(
  components_kvSideHeadervue_type_script_lang_js_,
  kvSideHeadervue_type_template_id_01658e8c_render,
  kvSideHeadervue_type_template_id_01658e8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvSideHeader = (kvSideHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvSideContent.vue?vue&type=template&id=72a54888&
var kvSideContentvue_type_template_id_72a54888_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-4 lg:ml-64",on:{"touchstart":_vm.closeKvSideHeader}},[_vm._t("default")],2)}
var kvSideContentvue_type_template_id_72a54888_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvSideContent.vue?vue&type=template&id=72a54888&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvSideContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var kvSideContentvue_type_script_lang_js_ = ({
  methods: {
    closeKvSideHeader: function closeKvSideHeader() {
      // Emit an event to the root to close the side header when touched.
      this.$root.$emit('closeKvSideHeader');
    }
  }
});
// CONCATENATED MODULE: ./src/components/kvSideContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvSideContentvue_type_script_lang_js_ = (kvSideContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/kvSideContent.vue





/* normalize component */

var kvSideContent_component = normalizeComponent(
  components_kvSideContentvue_type_script_lang_js_,
  kvSideContentvue_type_template_id_72a54888_render,
  kvSideContentvue_type_template_id_72a54888_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvSideContent = (kvSideContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvSideToggle.vue?vue&type=template&id=9bbd4fdc&
var kvSideTogglevue_type_template_id_9bbd4fdc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fixed top-0 left-0 m-3\n                flex justify-center items-center\n                text-lg\n                w-10 h-10\n                z-30\n                rounded-full\n                shadow\n                cursor-pointer\n                border border-gray-400\n                bg-gray-100",attrs:{"aria-hidden":"true","title":"Show or Hide the Site Header"},on:{"click":_vm.toggleKvSideHeader}},[_vm._t("default")],2)}
var kvSideTogglevue_type_template_id_9bbd4fdc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvSideToggle.vue?vue&type=template&id=9bbd4fdc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvSideToggle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var kvSideTogglevue_type_script_lang_js_ = ({
  methods: {
    toggleKvSideHeader: function toggleKvSideHeader() {
      // Emit an event to the root to close the side header when touched.
      this.$root.$emit('toggleKvSideHeader');
    }
  }
});
// CONCATENATED MODULE: ./src/components/kvSideToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvSideTogglevue_type_script_lang_js_ = (kvSideTogglevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/kvSideToggle.vue





/* normalize component */

var kvSideToggle_component = normalizeComponent(
  components_kvSideTogglevue_type_script_lang_js_,
  kvSideTogglevue_type_template_id_9bbd4fdc_render,
  kvSideTogglevue_type_template_id_9bbd4fdc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvSideToggle = (kvSideToggle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logos/kvAccentMark.vue?vue&type=template&id=33679c79&
var kvAccentMarkvue_type_template_id_33679c79_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"enable-background":"new 0 0 500 500"},attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 500 500","xml:space":"preserve"}},[_c('circle',{attrs:{"fill":_vm.kalamazooFill,"cx":"250","cy":"250","r":"250"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M381.3,423.7c-96,72.6-232.5,53.5-305-42.4c-72.5-96-53.5-232.6,42.5-305.1c95.9-72.5,232.6-53.5,305.1,42.6     C496.3,214.7,477.3,351.3,381.3,423.7z"}}),_c('path',{attrs:{"fill":_vm.kvFill,"d":"M119.6,194c0-9.3,7.4-16.7,16.7-16.7S153,184.7,153,194v51l61.6-61.2c4.1-4.1,8.2-6.5,14.1-6.5      c9.3,0,15.4,7.2,15.4,15.4c0,5.1-2.4,9.1-6,12.5l-42.7,39.9l46.7,58.6c2.6,3.3,4.5,6.7,4.5,11.7c0,9.3-7.2,16.3-17,16.3      c-6.5,0-10.4-3.3-14-8.1l-43.3-56.8L153,284.6V315c0,9.3-7.3,16.7-16.7,16.7c-9.3,0-16.7-7.4-16.7-16.7      C119.6,315,119.6,194,119.6,194z"}}),_c('path',{attrs:{"fill":_vm.kvFill,"d":"M303.7,319.6l-49.2-117.7c-1.1-2.6-1.9-5.2-1.9-8c0-9.3,7.4-16.5,16.7-16.5c8.6,0,14.3,5,16.9,11.7      l37.9,98.2l38.4-99.3c2.2-5.4,8-10.6,16-10.6c9.2,0,16.6,6.9,16.6,16.1c0,2.6-0.9,5.4-1.7,7.3l-49.7,118.8      c-3.4,8.3-9.8,13.2-18.8,13.2h-2.2C313.5,332.8,307.2,327.8,303.7,319.6z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M435.7,456.8l-8.3-0.2l0.1-3l20.2,0.4l-0.1,3l-8.3-0.2l-0.5,24.2l-3.6-0.1L435.7,456.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M473.3,469.9c-0.1-3.8-0.3-8.4-0.2-11.8H473c-1,3.1-2.2,6.5-3.7,10.3l-5.1,13.1l-2.7-0.1l-4.2-13.1    c-1.2-3.9-2.2-7.4-2.9-10.7h-0.1c-0.2,3.4-0.4,7.9-0.8,12l-1,11.7l-3.4-0.1l2.5-27.2l4.5,0.1l4.4,13.3c1.1,3.4,1.9,6.4,2.6,9.2    h0.1c0.8-2.7,1.8-5.7,3.1-9.1l5.1-13.1l4.5,0.1l1.1,27.3l-3.5-0.1L473.3,469.9z"}})])}
var kvAccentMarkvue_type_template_id_33679c79_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Logos/kvAccentMark.vue?vue&type=template&id=33679c79&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logos/kvAccentMark.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var kvAccentMarkvue_type_script_lang_js_ = ({
  props: {
    mono: String
  },
  computed: {
    kalamazooFill: function kalamazooFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#ffffff";

          case 'black':
            return "#000000";
        }
      }

      return "#000000";
    },
    valleyFill: function valleyFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#000000";

          case 'black':
            return "#ffffff";
        }
      }

      return "#2b6cb0";
    },
    kvFill: function kvFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#ffffff";

          case 'black':
            return "#000000";
        }
      }

      return "#ffffff";
    }
  }
});
// CONCATENATED MODULE: ./src/components/Logos/kvAccentMark.vue?vue&type=script&lang=js&
 /* harmony default export */ var Logos_kvAccentMarkvue_type_script_lang_js_ = (kvAccentMarkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Logos/kvAccentMark.vue





/* normalize component */

var kvAccentMark_component = normalizeComponent(
  Logos_kvAccentMarkvue_type_script_lang_js_,
  kvAccentMarkvue_type_template_id_33679c79_render,
  kvAccentMarkvue_type_template_id_33679c79_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvAccentMark = (kvAccentMark_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logos/kvccLogo.vue?vue&type=template&id=e2ad11e8&
var kvccLogovue_type_template_id_e2ad11e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"enable-background":"new 0 0 500 80.6"},attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 500 80.6","xml:space":"preserve"}},[_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M28.1,46.9L14.4,22.7L4.8,34.2v12.7H0V1.6h4.8v26l21.1-26h5.9L17.6,19l16.3,27.9H28.1z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M55.9,46.9v-3c-1.2,1.2-2.5,2.1-3.9,2.6s-3.1,0.7-5.1,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.6-1.3-3.9-2.6      c-1.3-1.3-1.9-3.3-1.9-6c0-2.8,0.9-5,2.8-6.6c1.9-1.6,4.5-2.4,8-2.4H56v-3c0-2.3-0.6-4-1.8-5.2c-1.2-1.1-3.3-1.7-6.1-1.7      c-2.1,0-3.6,0.3-4.7,0.8c-1.1,0.5-2.1,1.4-3.1,2.8L37,19.8c1.4-1.8,2.9-3,4.6-3.7c1.7-0.7,3.8-1,6.5-1c8.4,0,12.5,3.5,12.5,10.5      v21.3C60.6,46.9,55.9,46.9,55.9,46.9z M55.9,32.4h-8.8c-4.7,0-7,1.8-7,5.5c0,3.6,2.4,5.3,7.2,5.3c1.6,0,2.9-0.1,4-0.4      c1.1-0.3,2.1-0.9,3.1-1.8c1-0.9,1.5-2.7,1.5-5.3V32.4z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M75.6,46.9c-2.6,0-4.6-0.7-5.9-2.3c-1.3-1.5-2-3.5-2-6.1v-37h4.6v36.8c0,1.6,0.3,2.7,0.9,3.5c0.6,0.7,1.7,1.1,3.3,1.1      H79v3.9L75.6,46.9L75.6,46.9z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M100.5,46.9v-3c-1.2,1.2-2.5,2.1-3.9,2.6s-3.1,0.7-5.1,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.7-1.3-3.9-2.6      c-1.3-1.3-1.9-3.3-1.9-6c0-2.8,0.9-5,2.8-6.6s4.5-2.4,8-2.4h9.4v-3c0-2.3-0.6-4-1.9-5.2c-1.2-1.1-3.3-1.7-6.1-1.7      c-2.1,0-3.6,0.3-4.7,0.8s-2.1,1.4-3.1,2.8l-3.2-2.9c1.4-1.8,2.9-3,4.5-3.7c1.7-0.7,3.9-1,6.5-1c8.3,0,12.5,3.5,12.5,10.5v21.3      H100.5z M100.5,32.4h-8.8c-4.7,0-7,1.8-7,5.5c0,3.6,2.4,5.3,7.2,5.3c1.6,0,2.9-0.1,4-0.4C97,42.6,98,42,99,41.1s1.5-2.7,1.5-5.3      V32.4z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M152.6,46.9V27.6c0-2.7-0.7-4.8-2-6.2c-1.4-1.4-3.2-2.1-5.7-2.1c-2.3,0-4.2,0.7-5.7,2.1c-1.4,1.4-2.2,3.3-2.2,5.7v19.8      h-4.6V27.6c0-2.7-0.7-4.8-2-6.2c-1.4-1.4-3.2-2.1-5.7-2.1s-4.3,0.7-5.7,2.2c-1.4,1.4-2.1,3.5-2.1,6.2V47h-4.6V15.6h4.6V19      c2.2-2.5,5.2-3.8,8.8-3.8c4.4,0,7.6,1.7,9.6,5.2c2.5-3.5,5.9-5.2,10.3-5.2c1.6,0,3.2,0.3,4.5,0.8c1.4,0.5,2.9,1.5,4.5,3.1      s2.4,4.1,2.4,7.8V47L152.6,46.9L152.6,46.9z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M182.2,46.9v-3c-1.2,1.2-2.5,2.1-3.9,2.6c-1.3,0.5-3.1,0.7-5.1,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.7-1.3-4-2.6      s-1.9-3.3-1.9-6c0-2.8,0.9-5,2.8-6.6c1.9-1.6,4.5-2.4,8-2.4h9.4v-3c0-2.3-0.6-4-1.9-5.2c-1.2-1.1-3.3-1.7-6.1-1.7      c-2.1,0-3.6,0.3-4.7,0.8c-1.1,0.5-2.1,1.4-3.1,2.8l-3.2-2.9c1.3-1.8,2.9-3,4.5-3.7c1.7-0.7,3.8-1,6.5-1      c8.3,0,12.5,3.5,12.5,10.5v21.3H182.2z M182.2,32.4h-8.8c-4.7,0-7,1.8-7,5.5c0,3.6,2.4,5.3,7.2,5.3c1.6,0,2.9-0.1,4-0.4      c1.1-0.3,2.1-0.9,3.1-1.8c1-0.9,1.5-2.7,1.5-5.3V32.4z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M191.5,46.9v-4l17.4-23.3h-16.4v-4.1h21.7v3.9l-17.5,23.4h17.5v4.1H191.5z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M239.5,43.6c-1.1,1.1-2.4,2-3.9,2.6c-1.4,0.6-3.1,0.9-5,0.9s-3.5-0.3-5-0.9c-1.5-0.6-2.9-1.6-4.2-2.9      c-1.3-1.3-2.2-3-2.8-5c-0.5-2-0.8-4.4-0.8-7.2s0.3-5.1,0.8-7.2c0.5-2,1.4-3.7,2.8-5c1.3-1.3,2.7-2.3,4.2-2.9s3.1-0.9,5.1-0.9      c1.9,0,3.5,0.3,5,0.9c1.5,0.6,2.9,1.6,4.2,2.9s2.2,3,2.8,5c0.5,2,0.8,4.4,0.8,7.2s-0.3,5.1-0.8,7.1      C242,40.3,240.9,42.1,239.5,43.6z M236.2,21.5c-1.5-1.5-3.4-2.3-5.7-2.3s-4,0.6-5.3,1.9s-2.1,2.7-2.4,4.4      c-0.3,1.7-0.5,3.5-0.5,5.6c0,2.3,0.2,4.2,0.5,5.8c0.3,1.5,1.1,3,2.4,4.3c1.3,1.3,3,1.9,5.3,1.9s4.1-0.6,5.3-1.9      c1.3-1.3,2.1-2.7,2.4-4.3c0.3-1.6,0.5-3.5,0.5-5.8c0-2.2-0.1-4.1-0.5-5.7C237.9,23.9,237.2,22.6,236.2,21.5z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M269.3,43.6c-1.1,1.1-2.4,2-3.9,2.6s-3.1,0.9-5,0.9s-3.5-0.3-5-0.9c-1.5-0.6-2.9-1.6-4.2-2.9c-1.3-1.3-2.2-3-2.8-5      c-0.5-2-0.8-4.4-0.8-7.2s0.3-5.1,0.8-7.2c0.5-2,1.4-3.7,2.8-5c1.3-1.3,2.7-2.3,4.2-2.9s3.2-0.9,5.1-0.9s3.5,0.3,5,0.9      c1.5,0.6,2.9,1.6,4.2,2.9c1.3,1.3,2.2,3,2.8,5c0.5,2,0.8,4.4,0.8,7.2s-0.3,5.1-0.8,7.1C271.8,40.3,270.8,42.1,269.3,43.6z       M266.1,21.5c-1.5-1.5-3.4-2.3-5.7-2.3c-2.3,0-4,0.6-5.3,1.9s-2.1,2.7-2.4,4.4c-0.3,1.7-0.5,3.5-0.5,5.6c0,2.3,0.2,4.2,0.5,5.8      c0.3,1.5,1.1,3,2.4,4.3c1.3,1.3,3.1,1.9,5.3,1.9c2.3,0,4.1-0.6,5.3-1.9c1.3-1.3,2.1-2.7,2.4-4.3s0.5-3.5,0.5-5.8      c0-2.2-0.2-4.1-0.5-5.7C267.8,23.9,267.1,22.6,266.1,21.5z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M218,68.8L218,68.8c0-4.2,3.2-7.7,7.5-7.7c2.4,0,4.1,0.9,5.4,2.1c0.2,0.2,0.3,0.4,0.3,0.8c0,0.6-0.5,1-1.1,1      c-0.3,0-0.5-0.1-0.7-0.2c-1.1-1-2.2-1.8-4-1.8c-3,0-5.2,2.5-5.2,5.7l0,0c0,3.2,2.3,5.7,5.4,5.7c1.7,0,3-0.8,4.1-1.8      c0.1-0.1,0.3-0.3,0.6-0.3c0.5,0,1,0.5,1,1c0,0.3-0.1,0.5-0.3,0.7c-1.4,1.4-3,2.3-5.5,2.3C221.2,76.3,218,72.8,218,68.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M232.6,68.8L232.6,68.8c0-4.2,3.2-7.7,7.6-7.7c4.4,0,7.6,3.4,7.6,7.6l0,0c0,4.1-3.2,7.6-7.7,7.6      C235.8,76.3,232.6,72.9,232.6,68.8z M245.6,68.8L245.6,68.8c0-3.2-2.3-5.8-5.4-5.8c-3.1,0-5.3,2.6-5.3,5.7l0,0      c0,3.1,2.3,5.7,5.4,5.7S245.6,71.8,245.6,68.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M250.6,62.4c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1v1.5c1-1.4,2.3-2.8,4.7-2.8c2.4,0,3.9,1.3,4.7,2.9      c1-1.6,2.6-2.9,5.1-2.9c3.4,0,5.4,2.3,5.4,5.9v8c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-7.6c0-2.8-1.4-4.4-3.8-4.4      c-2.2,0-4,1.6-4,4.5V75c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-7.6c0-2.7-1.4-4.3-3.7-4.3c-2.3,0-4.1,1.9-4.1,4.6V75      c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1V62.4H250.6z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M276.3,62.4c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1v1.5c0.9-1.4,2.3-2.8,4.7-2.8c2.4,0,3.9,1.3,4.7,2.9      c1-1.6,2.6-2.9,5.1-2.9c3.4,0,5.4,2.3,5.4,5.9v8c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-7.6c0-2.8-1.4-4.4-3.8-4.4      c-2.2,0-4,1.6-4,4.5V75c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-7.6c0-2.7-1.4-4.3-3.7-4.3c-2.3,0-4.1,1.9-4.1,4.6V75      c0,0.6-0.4,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1V62.4H276.3z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M314.5,75c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-1.6c-1,1.6-2.5,2.9-5,2.9c-3.5,0-5.6-2.4-5.6-5.9v-8.1      c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1v7.6c0,2.7,1.5,4.4,4,4.4s4.4-1.8,4.4-4.6v-7.4c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1      V75z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M318.2,62.4c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1V64c1-1.6,2.5-2.8,5-2.8c3.5,0,5.6,2.4,5.6,5.9V75      c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-7.6c0-2.7-1.5-4.4-4.1-4.4c-2.5,0-4.4,1.8-4.4,4.6V75c0,0.6-0.5,1.1-1.1,1.1      s-1.1-0.5-1.1-1.1V62.4H318.2z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M334.5,56.8c0-0.7,0.6-1.2,1.2-1.2c0.8,0,1.3,0.4,1.3,1.2v0.4c0,0.7-0.6,1.1-1.3,1.1c-0.7,0-1.2-0.5-1.2-1.1V56.8z       M334.7,62.4c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1V75c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1V62.4z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M341.5,72.1v-8.8h-1.2c-0.5,0-1-0.4-1-1c0-0.5,0.5-1,1-1h1.2V58c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1v3.4h3.8      c0.5,0,1,0.4,1,1c0,0.5-0.4,1-1,1h-3.8v8.5c0,1.8,1,2.4,2.5,2.4c0.8,0,1.2-0.2,1.3-0.2c0.5,0,0.9,0.4,0.9,0.9      c0,0.4-0.3,0.7-0.6,0.9c-0.6,0.2-1.3,0.4-2.1,0.4C343.3,76.2,341.5,75.1,341.5,72.1z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M350.8,80.2c-0.3-0.1-0.7-0.4-0.7-0.9s0.5-0.9,0.9-0.9c0.2,0,0.4,0.1,0.6,0.1c0.4,0.2,0.8,0.3,1.6,0.3      c1.4,0,2.2-0.8,3-2.6l0.1-0.2l-6.1-12.9c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.6,0.5-1.1,1.1-1.1s0.9,0.4,1.1,0.8l5.1,11.5l4.5-11.5      c0.2-0.4,0.5-0.8,1-0.8c0.6,0,1.1,0.5,1.1,1.1c0,0.2-0.1,0.4-0.1,0.5L358,76.5c-1.3,3-2.7,4.1-4.9,4.1      C352.2,80.6,351.5,80.4,350.8,80.2z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M372.9,68.8L372.9,68.8c0-4.2,3.2-7.7,7.5-7.7c2.4,0,4.1,0.9,5.4,2.1c0.2,0.2,0.4,0.4,0.4,0.8c0,0.6-0.5,1-1.1,1      c-0.3,0-0.5-0.1-0.7-0.2c-1-1-2.3-1.8-4-1.8c-3,0-5.2,2.5-5.2,5.7l0,0c0,3.2,2.3,5.7,5.4,5.7c1.7,0,3-0.8,4.1-1.8      c0.2-0.1,0.3-0.3,0.6-0.3c0.5,0,1,0.5,1,1c0,0.3-0.1,0.5-0.3,0.7c-1.4,1.4-3,2.3-5.5,2.3C376.1,76.3,372.9,72.8,372.9,68.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M387.5,68.8L387.5,68.8c0-4.2,3.2-7.7,7.6-7.7s7.6,3.4,7.6,7.6l0,0c0,4.1-3.2,7.6-7.6,7.6S387.5,72.9,387.5,68.8z       M400.5,68.8L400.5,68.8c0-3.2-2.3-5.8-5.4-5.8c-3.2,0-5.3,2.6-5.3,5.7l0,0c0,3.1,2.3,5.7,5.4,5.7      C398.2,74.4,400.5,71.8,400.5,68.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M405.7,56.3c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1V75c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1V56.3z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M412,56.3c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1V75c0,0.6-0.5,1.1-1.1,1.1S412,75.6,412,75V56.3z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M424.4,76.3c-4,0-7.3-3.1-7.3-7.6v-0.1c0-4.2,3-7.6,7-7.6c4.3,0,6.8,3.5,6.8,7.4c0,0.6-0.5,1-1,1h-10.5      c0.3,3.2,2.5,4.9,5.1,4.9c1.8,0,3.1-0.7,4.2-1.7c0.2-0.1,0.4-0.2,0.6-0.2c0.5,0,0.9,0.4,0.9,0.9c0,0.2-0.1,0.5-0.3,0.7      C428.6,75.5,426.9,76.3,424.4,76.3z M428.7,67.9c-0.2-2.7-1.8-5-4.7-5c-2.5,0-4.5,2.1-4.7,5H428.7z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M434,78.8c-0.4-0.2-0.6-0.5-0.6-0.9c0-0.5,0.5-1,1-1c0.2,0,0.4,0.1,0.5,0.1c1.5,1,3.3,1.6,5.2,1.6      c3.2,0,5.3-1.8,5.3-5.2v-1.7c-1.3,1.7-3,3.1-5.7,3.1c-3.5,0-6.9-2.6-6.9-6.8l0,0c0-4.3,3.4-6.9,6.9-6.9c2.7,0,4.5,1.4,5.7,2.9      v-1.7c0-0.6,0.4-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1v11.1c0,2.3-0.7,4-1.9,5.2c-1.3,1.3-3.2,1.9-5.6,1.9      C437.9,80.5,435.8,80,434,78.8z M445.4,68L445.4,68c0-3-2.6-5-5.4-5c-2.7,0-5.1,1.9-5.1,4.9l0,0c0,2.9,2.3,5,5.1,5      C442.8,72.9,445.4,70.9,445.4,68z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M457.6,76.3c-4,0-7.3-3.1-7.3-7.6v-0.1c0-4.2,3-7.6,7-7.6c4.3,0,6.8,3.5,6.8,7.4c0,0.6-0.5,1-1,1h-10.5      c0.3,3.2,2.5,4.9,5.1,4.9c1.8,0,3.1-0.7,4.2-1.7c0.2-0.1,0.4-0.2,0.6-0.2c0.5,0,0.9,0.4,0.9,0.9c0,0.2-0.1,0.5-0.3,0.7      C461.7,75.5,460.1,76.3,457.6,76.3z M461.9,67.9c-0.2-2.7-1.7-5-4.7-5c-2.5,0-4.5,2.1-4.7,5H461.9z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M291.1,45.3h-6.6L269.5,0h9.2l9.1,29.5L296.9,0h9.2L291.1,45.3z"}}),_c('path',{staticClass:"st0",attrs:{"fill":_vm.valleyFill,"d":"M331.1,45.3l-2.7-8.1h-16.1l-2.7,8.1h-9.2L316.9,0h6.9l16.5,45.3H331.1z M320.6,13.3l-5.7,16.5h11.2    L320.6,13.3z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M343.4,45.3V0h8.8v37.4h20.5v7.9C372.7,45.3,343.4,45.3,343.4,45.3z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M377.4,45.3V0h8.8v37.4h20.5v7.9C406.7,45.3,377.4,45.3,377.4,45.3z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M411.3,45.3V0h29.8v7.9h-21v10.6H438v7.9h-17.9v11.1h21v7.9h-29.8L411.3,45.3L411.3,45.3z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M464.5,26.7v18.6h-8.7V26.7L442.2,0h9.6l8.5,18.2L468.5,0h9.6L464.5,26.7z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M486.2,1h-2.7V0h6.6v1h-2.7v8h-1.2L486.2,1L486.2,1z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M498.6,5c-0.1-1.2-0.1-2.8-0.1-3.9l0,0c-0.3,1-0.7,2.2-1.1,3.4l-1.6,4.3h-0.9l-1.5-4.3c-0.4-1.3-0.8-2.4-1-3.5l0,0    c0,1.1-0.1,2.6-0.2,4L492,8.9h-1.1l0.6-8.9h1.5l1.5,4.3c0.4,1.1,0.7,2.1,0.9,3l0,0c0.2-0.9,0.6-1.9,1-3L498,0h1.5l0.6,8.9H499    L498.6,5z"}})])}
var kvccLogovue_type_template_id_e2ad11e8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Logos/kvccLogo.vue?vue&type=template&id=e2ad11e8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logos/kvccLogo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var kvccLogovue_type_script_lang_js_ = ({
  props: {
    mono: String
  },
  computed: {
    kalamazooFill: function kalamazooFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#ffffff";

          case 'black':
            return "#000000";
        }
      }

      return "#000000";
    },
    valleyFill: function valleyFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#ffffff";

          case 'black':
            return "#000000";
        }
      }

      return "#2b6cb0";
    }
  }
});
// CONCATENATED MODULE: ./src/components/Logos/kvccLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Logos_kvccLogovue_type_script_lang_js_ = (kvccLogovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Logos/kvccLogo.vue





/* normalize component */

var kvccLogo_component = normalizeComponent(
  Logos_kvccLogovue_type_script_lang_js_,
  kvccLogovue_type_template_id_e2ad11e8_render,
  kvccLogovue_type_template_id_e2ad11e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvccLogo = (kvccLogo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logos/kvLogoStacked.vue?vue&type=template&id=1d52a8f6&
var kvLogoStackedvue_type_template_id_1d52a8f6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"enable-background":"new 0 0 500 196.1"},attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 500 196.1","xml:space":"preserve"}},[_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M49.1,79.2L25.1,37L8.4,57v22.1H0V0h8.4v45.4L45.3,0h10.3L30.7,30.5l28.4,48.7H49.1z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M97.6,79.1v-5.2c-2.2,2.1-4.4,3.6-6.8,4.5s-5.4,1.3-9,1.3c-3.8,0-6.9-0.4-9.2-1.1c-2.3-0.7-4.6-2.2-6.9-4.5     c-2.3-2.3-3.4-5.8-3.4-10.4c0-4.9,1.6-8.7,4.9-11.5s7.9-4.2,14-4.2h16.4v-5.2c0-4.1-1.1-7.1-3.3-9.1c-2.2-2-5.7-2.9-10.6-2.9     c-3.6,0-6.3,0.4-8.3,1.3C73.5,33,71.7,34.6,70,37l-5.7-5c2.4-3.1,5-5.2,7.9-6.4c2.9-1.1,6.7-1.7,11.4-1.7     c14.6,0,21.8,6.1,21.8,18.2v37.1L97.6,79.1C97.6,79.2,97.6,79.1,97.6,79.1z M97.6,53.8H82.3c-8.1,0-12.2,3.2-12.2,9.7     c0,6.2,4.2,9.3,12.5,9.3c2.8,0,5.1-0.2,7-0.7c1.8-0.4,3.6-1.5,5.4-3.2c1.7-1.7,2.6-4.7,2.6-9.3C97.6,59.6,97.6,53.8,97.6,53.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M132,79.1c-4.6,0-8.1-1.3-10.4-3.9s-3.5-6.2-3.5-10.6V0h8v64.2c0,2.8,0.5,4.8,1.6,6.1c1.1,1.3,3,1.9,5.7,1.9h4.3v6.9H132     z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M175.6,79.1v-5.2c-2.1,2.1-4.4,3.6-6.8,4.5c-2.4,0.9-5.4,1.3-9,1.3c-3.9,0-7-0.4-9.3-1.1s-4.6-2.2-6.9-4.5     c-2.2-2.3-3.4-5.8-3.4-10.4c0-4.9,1.6-8.7,4.9-11.5c3.3-2.8,7.9-4.2,14-4.2h16.4v-5.2c0-4.1-1.1-7.1-3.3-9.1     c-2.1-2-5.7-2.9-10.6-2.9c-3.6,0-6.4,0.4-8.3,1.3c-1.9,0.9-3.7,2.5-5.4,4.9l-5.6-5c2.3-3.1,5-5.2,7.9-6.4     c2.9-1.1,6.7-1.7,11.4-1.7c14.6,0,21.9,6.1,21.9,18.2v37.1h-7.9L175.6,79.1L175.6,79.1z M175.6,53.8h-15.3     c-8.1,0-12.2,3.2-12.2,9.7c0,6.2,4.2,9.3,12.6,9.3c2.8,0,5.1-0.2,7-0.7c1.9-0.4,3.7-1.5,5.4-3.2c1.8-1.7,2.6-4.7,2.6-9.3v-5.8     L175.6,53.8L175.6,53.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M266.5,79.1V45.4c0-4.7-1.2-8.4-3.6-10.9s-5.6-3.7-9.9-3.7c-4.1,0-7.4,1.2-9.9,3.7c-2.5,2.4-3.7,5.8-3.7,10v34.6h-8V45.4     c0-4.7-1.2-8.4-3.6-10.9c-2.3-2.5-5.6-3.7-9.9-3.7c-4.2,0-7.5,1.3-10,3.8s-3.7,6.1-3.7,10.8v33.7h-8V24.4h8v6     c3.9-4.4,9.1-6.7,15.5-6.7c7.8,0,13.3,3,16.7,9.1c4.3-6.1,10.3-9.1,18-9.1c2.9,0,5.5,0.4,7.9,1.3s5,2.7,7.8,5.4s4.2,7.3,4.2,13.6     v35L266.5,79.1L266.5,79.1z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M318.2,79.1v-5.2c-2.1,2.1-4.4,3.6-6.8,4.5s-5.4,1.3-9,1.3c-3.8,0-6.9-0.4-9.2-1.1c-2.3-0.7-4.7-2.2-6.9-4.5     c-2.2-2.3-3.4-5.8-3.4-10.4c0-4.9,1.6-8.7,4.9-11.5s7.9-4.2,14-4.2h16.4v-5.2c0-4.1-1.1-7.1-3.3-9.1c-2.1-2-5.7-2.9-10.6-2.9     c-3.6,0-6.3,0.4-8.3,1.3c-1.9,0.9-3.7,2.5-5.4,4.9l-5.7-5c2.3-3.1,5-5.2,7.9-6.4c3-1.1,6.7-1.7,11.4-1.7     c14.6,0,21.9,6.1,21.9,18.2v37.1h-7.9V79.1z M318.2,53.8h-15.4c-8.1,0-12.2,3.2-12.2,9.7c0,6.2,4.2,9.3,12.5,9.3     c2.8,0,5.1-0.2,7-0.7c1.8-0.4,3.6-1.5,5.4-3.2c1.7-1.7,2.6-4.7,2.6-9.3v-5.8L318.2,53.8L318.2,53.8z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M334.5,79.1l-0.1-6.9l30.4-40.7h-28.7v-7.1h38v6.8L343.6,72h30.5v7.1H334.5z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M418.3,73.5c-2,2-4.3,3.5-6.8,4.6s-5.5,1.6-8.8,1.6s-6.2-0.5-8.8-1.6c-2.6-1.1-5-2.8-7.3-5.1c-2.3-2.3-3.9-5.2-4.8-8.7     s-1.4-7.6-1.4-12.6c0-4.8,0.5-9,1.4-12.5s2.5-6.5,4.8-8.8s4.7-4,7.3-5.1c2.5-1.1,5.5-1.6,8.8-1.6c3.2,0,6.2,0.5,8.7,1.6     c2.6,1.1,5,2.8,7.3,5.1s3.9,5.2,4.8,8.7c0.9,3.4,1.4,7.6,1.4,12.6c0,4.8-0.4,9-1.4,12.5C422.6,67.7,420.9,70.8,418.3,73.5z      M412.6,34.9c-2.7-2.7-6-4-10-4c-3.9,0-7,1.1-9.2,3.3s-3.6,4.8-4.2,7.7s-0.9,6.2-0.9,9.8c0,4,0.3,7.3,0.8,10     c0.6,2.7,2,5.2,4.2,7.4c2.3,2.3,5.4,3.4,9.3,3.4c4,0,7.1-1.1,9.3-3.3c2.2-2.2,3.6-4.7,4.2-7.5c0.5-2.8,0.8-6.1,0.8-10     s-0.3-7.2-0.8-10C415.5,38.9,414.4,36.6,412.6,34.9z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M470.4,73.5c-2,2-4.3,3.5-6.8,4.6s-5.5,1.6-8.8,1.6s-6.2-0.5-8.8-1.6c-2.6-1.1-5-2.8-7.3-5.1c-2.3-2.3-3.9-5.2-4.8-8.7     s-1.4-7.6-1.4-12.6c0-4.8,0.5-9,1.4-12.5s2.5-6.5,4.8-8.8s4.7-4,7.3-5.1c2.5-1.1,5.5-1.6,8.8-1.6s6.2,0.5,8.8,1.6     c2.6,1.1,5,2.8,7.3,5.1s3.9,5.2,4.9,8.7c0.9,3.4,1.4,7.6,1.4,12.6c0,4.8-0.5,9-1.4,12.5C474.8,67.7,473,70.8,470.4,73.5z      M464.8,34.9c-2.7-2.7-6-4-10-4c-3.9,0-7,1.1-9.2,3.3s-3.6,4.8-4.2,7.7s-0.9,6.2-0.9,9.8c0,4,0.3,7.3,0.9,10     c0.5,2.7,1.9,5.2,4.2,7.4c2.3,2.3,5.4,3.4,9.3,3.4c4,0,7.1-1.1,9.3-3.3c2.2-2.2,3.6-4.7,4.2-7.5c0.6-2.8,0.8-6.1,0.8-10     s-0.3-7.2-0.8-10C467.7,38.9,466.6,36.6,464.8,34.9z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M49,196.1H34L0,93.1h20.8l20.7,67.1l20.7-67.1h21L49,196.1z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M140.1,196.1l-6.1-18.3H97.5l-6.2,18.3h-21L107.7,93h15.8l37.6,103.1H140.1z M116.1,123.4l-13,37.4h25.6    L116.1,123.4z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M168,196.1v-103h20.1v85.1h46.7v17.9H168L168,196.1z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M245.3,196.1v-103h20.1v85.1h46.7v17.9H245.3L245.3,196.1z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M322.6,196.1v-103h67.8V111h-47.7v24.1h40.6V153h-40.6v25.1h47.7V196h-67.8L322.6,196.1L322.6,196.1z"}}),_c('path',{attrs:{"fill":_vm.valleyFill,"d":"M443.6,153.9v42.3h-19.9v-42.3l-30.9-60.8h21.8l19.2,41.5l19-41.5h21.8L443.6,153.9z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M483.9,94.2h-3.2v-1.1h7.7v1.1h-3.2v9.3h-1.4v-9.3H483.9z"}}),_c('path',{attrs:{"fill":_vm.kalamazooFill,"d":"M498.4,99c-0.1-1.5-0.2-3.2-0.2-4.5l0,0c-0.4,1.2-0.8,2.5-1.3,4l-1.8,5.1h-1l-1.7-5c-0.5-1.5-0.9-2.8-1.2-4.1l0,0    c0,1.3-0.1,3-0.2,4.6l-0.3,4.5h-1.3l0.7-10.4h1.7l1.8,5.1c0.4,1.3,0.8,2.4,1.1,3.5l0,0c0.3-1.1,0.7-2.2,1.1-3.5l1.9-5.1h1.7    l0.7,10.4h-1.3L498.4,99z"}})])}
var kvLogoStackedvue_type_template_id_1d52a8f6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Logos/kvLogoStacked.vue?vue&type=template&id=1d52a8f6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logos/kvLogoStacked.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var kvLogoStackedvue_type_script_lang_js_ = ({
  props: {
    mono: String
  },
  computed: {
    kalamazooFill: function kalamazooFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#ffffff";

          case 'black':
            return "#000000";
        }
      }

      return "#000000";
    },
    valleyFill: function valleyFill() {
      if (this.mono) {
        switch (this.mono) {
          case 'white':
            return "#ffffff";

          case 'black':
            return "#000000";
        }
      }

      return "#2b6cb0";
    }
  }
});
// CONCATENATED MODULE: ./src/components/Logos/kvLogoStacked.vue?vue&type=script&lang=js&
 /* harmony default export */ var Logos_kvLogoStackedvue_type_script_lang_js_ = (kvLogoStackedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Logos/kvLogoStacked.vue





/* normalize component */

var kvLogoStacked_component = normalizeComponent(
  Logos_kvLogoStackedvue_type_script_lang_js_,
  kvLogoStackedvue_type_template_id_1d52a8f6_render,
  kvLogoStackedvue_type_template_id_1d52a8f6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvLogoStacked = (kvLogoStacked_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19cba5dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvSimplePagination.vue?vue&type=template&id=1daf93da&
var kvSimplePaginationvue_type_template_id_1daf93da_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('span',{class:{'opacity-50 pointer-events-none': !_vm.hasPreviousPage},attrs:{"disabled":!_vm.hasPreviousPage},on:{"click":_vm.previousPage,"keypress":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.previousPage($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.previousPage($event)}]}},[_c('kv-button',{attrs:{"type":"button","size":"small","text":"Previous Page"}})],1),_c('span',{staticClass:"ml-2",class:{'opacity-50 pointer-events-none': !_vm.hasNextPage},attrs:{"disabled":!_vm.hasNextPage},on:{"click":_vm.nextPage,"keypress":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.nextPage($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.nextPage($event)}]}},[_c('kv-button',{attrs:{"type":"button","size":"small","text":"Next Page"}})],1)])}
var kvSimplePaginationvue_type_template_id_1daf93da_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/kvSimplePagination.vue?vue&type=template&id=1daf93da&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/kvSimplePagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var kvSimplePaginationvue_type_script_lang_js_ = ({
  components: {
    kvButton: kvButton
  },
  props: {
    hasPreviousPage: Boolean,
    hasNextPage: Boolean
  },
  methods: {
    // TODO: Window event handlers for left and right arrows.
    previousPage: function previousPage() {
      if (this.hasPreviousPage) {
        this.$emit('previousPage');
      }
    },
    nextPage: function nextPage() {
      if (this.hasNextPage) {
        this.$emit('nextPage');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/kvSimplePagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_kvSimplePaginationvue_type_script_lang_js_ = (kvSimplePaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/kvSimplePagination.vue





/* normalize component */

var kvSimplePagination_component = normalizeComponent(
  components_kvSimplePaginationvue_type_script_lang_js_,
  kvSimplePaginationvue_type_template_id_1daf93da_render,
  kvSimplePaginationvue_type_template_id_1daf93da_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kvSimplePagination = (kvSimplePagination_component.exports);
// CONCATENATED MODULE: ./src/main.js














// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=kv-vue-components.umd.js.map