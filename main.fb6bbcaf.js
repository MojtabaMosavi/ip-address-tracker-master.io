// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomInt = exports.validateResponse = exports.logError = exports.jsonify = exports.logData = void 0;

// log the date 
var logData = function logData(data) {
  return console.log(data);
}; // convet the data to json format 


exports.logData = logData;

var jsonify = function jsonify(data) {
  return data.json();
}; // log error 


exports.jsonify = jsonify;

var logError = function logError(error) {
  console.log("Looks like something went wrong " + error);
}; // check the status of response 


exports.logError = logError;

var validateResponse = function validateResponse(response) {
  if (!response.ok) {
    new Error(response.statusText);
  } else {
    return response;
  }
}; // return a random integer 


exports.validateResponse = validateResponse;

var randomInt = function randomInt() {
  return Math.ceil(Math.random() * 10);
};

exports.randomInt = randomInt;
},{}],"js/Infolist.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*----------------------------------------*\
  #infoList
\*----------------------------------------*/
var InfoList = /*#__PURE__*/function () {
  function InfoList() {
    _classCallCheck(this, InfoList);

    if (this._validateDomNodes()) {
      return;
    } else {
      return;
    }
  } // validating dom nodes 


  _createClass(InfoList, [{
    key: "_validateDomNodes",
    value: function _validateDomNodes() {
      this.ipTrackerInfoList = document.querySelector(".ip-tracker__info");
      this.ipTrackerIpAddress = this.ipTrackerInfoList.querySelector(".ip-tracker__ip-address");
      this.ipTrackerLocation = this.ipTrackerInfoList.querySelector(".ip-tracker__location");
      this.ipTrackerTimeZone = this.ipTrackerInfoList.querySelector(".ip-tracker__timezone");
      this.ipTrackerIspProvider = this.ipTrackerInfoList.querySelector(".ip-tracker__isp-provider");

      if (this.ipTrackerInfoList && this.ipTrackerIpAddress && this.ipTrackerLocation && this.ipTrackerTimeZone && this.ipTrackerIspProvider) {
        return true;
      } else {
        throw new Error("Required dom nodes are not defined");
      }
    }
  }, {
    key: "updateDomNodes",
    value: function updateDomNodes(_ref) {
      var ip = _ref.ip,
          isp = _ref.isp,
          country = _ref.country,
          city = _ref.city,
          region = _ref.region,
          longitude = _ref.longitude,
          latitude = _ref.latitude,
          timezone = _ref.timezone;
      this.ipTrackerIpAddress.textContent = ip;
      this.ipTrackerLocation.textContent = "".concat(city, ", ").concat(region, " 11111");
      this.ipTrackerTimeZone.textContent = "UTC".concat(timezone);
      this.ipTrackerIspProvider.textContent = isp;
    }
  }]);

  return InfoList;
}();

exports.default = InfoList;
},{}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/path-browserify/index.js":[function(require,module,exports) {
var process = require("process");
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

},{"process":"../node_modules/process/browser.js"}],"../node_modules/dotenv/lib/main.js":[function(require,module,exports) {
var process = require("process");
'use strict';

const fs = require('fs');

const path = require('path');
/*
 * Parses a string or buffer into an object
 * @param {(string|Buffer)} src - source to be parsed
 * @returns {Object} keys and values from src
*/


function parse(src) {
  const obj = {}; // convert Buffers before splitting into lines and processing

  src.toString().split('\n').forEach(function (line) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/); // matched?

    if (keyValueArr != null) {
      const key = keyValueArr[1]; // default undefined or missing values to empty string

      let value = keyValueArr[2] || ''; // expand newlines in quoted values

      const len = value ? value.length : 0;

      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, '\n');
      } // remove any surrounding quotes and extra spaces


      value = value.replace(/(^['"]|['"]$)/g, '').trim();
      obj[key] = value;
    }
  });
  return obj;
}
/*
 * Main entry point into dotenv. Allows configuration before loading .env
 * @param {Object} options - options for parsing .env file
 * @param {string} [options.path=.env] - path to .env file
 * @param {string} [options.encoding=utf8] - encoding of .env file
 * @returns {Object} parsed object or error
*/


function config(options) {
  let dotenvPath = path.resolve(process.cwd(), '.env');
  let encoding = 'utf8';

  if (options) {
    if (options.path) {
      dotenvPath = options.path;
    }

    if (options.encoding) {
      encoding = options.encoding;
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(dotenvPath, {
      encoding: encoding
    }));
    Object.keys(parsed).forEach(function (key) {
      if (!process.env.hasOwnProperty(key)) {
        process.env[key] = parsed[key];
      }
    });
    return {
      parsed: parsed
    };
  } catch (e) {
    return {
      error: e
    };
  }
}

module.exports.config = config;
module.exports.load = config;
module.exports.parse = parse;
},{"fs":"../node_modules/parcel-bundler/src/builtins/_empty.js","path":"../node_modules/path-browserify/index.js","process":"../node_modules/process/browser.js"}],"js/searchForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

var _Infolist = _interopRequireDefault(require("./Infolist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dotenv = require("dotenv").config();
/*----------------------------------------*\
  #search-bar 
\*----------------------------------------*/


var SearchForm = /*#__PURE__*/function () {
  function SearchForm() {
    _classCallCheck(this, SearchForm);

    this._loading = true;
    this.inforList = new _Infolist.default(); // initilizing dom nodes 

    if (this._validateDomNodes()) {
      this._render();
    } else {
      return;
    }
  }

  _createClass(SearchForm, [{
    key: "_validateDomNodes",
    value: function _validateDomNodes() {
      // dom caching search form 
      this.ipTracker = document.querySelector(".ip-tracker-wrapper");
      this.ipTrackerForm = this.ipTracker.querySelector(".ip-tracker__form");
      this.ipTrackerBtn = this.ipTracker.querySelector(".ip-tracker__btn");
      this.ipTrackerInput = this.ipTracker.querySelector(".ip-tracker__input");
      this.ipTrackerInfoListWrapper = this.ipTracker.querySelector(".ip-tracker__info-wrapper");
      this.ipTrackerInfoList = this.ipTracker.querySelector(".ip-tracker__info");
      this.ipTrackerLoader = this.ipTracker.querySelector(".loader");

      if (this.ipTracker && this.ipTrackerForm && this.ipTrackerBtn && this.ipTrackerInfoListWrapper && this.ipTrackerInput && this.ipTrackerLoader && this.ipTrackerInfoList) {
        return true;
      } else {
        throw Error("required dom nodes are not available.");
      }
    } // bind events 

  }, {
    key: "_bindEnvents",
    value: function _bindEnvents() {
      var _this = this;

      this.ipTrackerBtn.addEventListener('click', function () {
        _this.ipTrackerBtn.classList.toggle("ip-tracker__btn--active");

        _this.ipTrackerForm.classList.toggle("ip-tracker__form--active");

        _this.ipTrackerInput.classList.toggle("ip-tracker__input--active");

        _this.ipTrackerInfoListWrapper.classList.toggle("ip-tracker__info-wrapper--active");

        _this.ipTrackerInfoList.classList.toggle("ip-tracker__info--active");

        _this.ipTrackerBtn.title = "open";
      }); // activates the loader

      this.ipTrackerLoader.classList.add("loader--active"); // form evaluation 

      this.ipTrackerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (_this.isValidIp(_this.ipTrackerInput.value)) {
          _this._updateState("https://geo.ipify.org/api/v1?apiKey=".concat("at_ECLl7Ced4VodU7ViC2JH6JFpnaNzx&ipAddress", "=\n                ").concat(_this.ipTrackerInput.value));
        }
      });
    }
  }, {
    key: "convertIpToG",
    value: function convertIpToG(ip) {
      return {
        "ip": ip.toString()
      };
    }
  }, {
    key: "isValidIp",
    value: function isValidIp(str) {
      var pattern = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]?|0)';
      var ipRegex = new RegExp("^".concat(pattern, "\\.").concat(pattern, "\\.").concat(pattern, "\\.").concat(pattern, "$"));
      return ipRegex.test(str);
    }
    /*
    * update the state by fetching the api with url 
    * remove the old map and creats a new one based on the new state
    * update the inforList object with new state
    */

  }, {
    key: "_updateState",
    value: function _updateState(url) {
      var _this2 = this;

      this._load();

      fetch(url).then(_utils.validateResponse).then(_utils.jsonify).then(function (data) {
        var ip = data.ip,
            isp = data.isp,
            _data$location = data.location,
            country = _data$location.country,
            city = _data$location.city,
            region = _data$location.region,
            timezone = _data$location.timezone,
            longitude = _data$location.lat,
            latitude = _data$location.lng;
        var state = {
          ip: ip,
          isp: isp,
          country: country,
          city: city,
          region: region,
          timezone: timezone,
          longitude: longitude,
          latitude: latitude
        };

        _this2.map.remove();

        _this2._endLoading();

        _this2.inforList.updateDomNodes(state);

        _this2._createMap(state);
      }).catch(_utils.logError);
    } // render method 

  }, {
    key: "_render",
    value: function _render() {
      this._bindEnvents();
    }
  }, {
    key: "_load",
    value: function _load() {
      this.ipTrackerLoader.classList.add("loader--active");
      this.ipTrackerInfoList.classList.remove("ip-tracker__info--active");
    }
  }, {
    key: "_endLoading",
    value: function _endLoading() {
      this.ipTrackerLoader.classList.remove("loader--active");
      this.ipTrackerInfoList.classList.add("ip-tracker__info--active");
    } // creating the map 

  }, {
    key: "_createMap",
    value: function _createMap(_ref) {
      var longitude = _ref.longitude,
          latitude = _ref.latitude;
      // map configurations 
      this.map = L.map('ip-tracker__map', {
        zoom: 14,
        center: [latitude, longitude],
        worldCopyJump: true
      });
      this.map.setView([(0, _utils.randomInt)(), (0, _utils.randomInt)()]);
      this.map.flyTo([longitude, latitude]); // location icon 

      var location = L.icon({
        iconUrl: './icon-location.svg',
        iconSize: [47, 55],
        iconAnchor: [longitude, latitude],
        popupAnchor: [-30, 20],
        className: location,
        inertia: true,
        worldCopyJump: true
      });
      L.marker([longitude, latitude], {
        icon: location,
        alt: "loaction"
      }).addTo(this.map).bindPopup("we are here"); // binding a popup to the icon 
      // layer 

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{map}', {
        map: 'bar',
        zoom: 12,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    } // updating the map 

  }, {
    key: "update",
    value: function update(state) {
      this._endLoading();

      this._createMap(state);

      this.inforList.updateDomNodes(state);
    }
  }]);

  return SearchForm;
}();

exports.default = SearchForm;
},{"./utils":"js/utils.js","./Infolist":"js/Infolist.js","dotenv":"../node_modules/dotenv/lib/main.js"}],"js/Observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*----------------------------------------*\
  #Observer
\*----------------------------------------*/
var Observer = /*#__PURE__*/function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.observers = new Set();
  }

  _createClass(Observer, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (typeof observer.update === "function") {
        this.observers.add(observer);
      } else {
        throw new Error(" oberver.update is not defined");
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(observer) {
      this.observers.delete(observer);
    }
  }, {
    key: "notify",
    value: function notify(state) {
      this.observers.forEach(function (observer) {
        return observer.update(state);
      });
    }
  }]);

  return Observer;
}();

exports.default = Observer;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _searchForm = _interopRequireDefault(require("./searchForm.js"));

var _Observer = _interopRequireDefault(require("./Observer.js"));

var _Infolist = _interopRequireDefault(require("./Infolist.js"));

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotenv = require("dotenv").config();

var App = function () {
  document.addEventListener("DOMContentLoaded", function () {
    // variables
    var url = "https://geo.ipify.org/api/v1?apiKey=".concat("at_ECLl7Ced4VodU7ViC2JH6JFpnaNzx"); // observers 

    var searchForm = new _searchForm.default(); // subscribing 

    var observer = new _Observer.default();
    observer.subscribe(searchForm);
    var testData = {
      city: "Södermalm",
      country: "SE",
      ip: "82.183.60.238",
      isp: "Ownit Broadband AB",
      latitude: 18.07577,
      longitude: 59.31278,
      region: "Stockholm County",
      timezone: "+02:00"
    };

    function _init() {
      /*  _getData(); */
      observer.notify(testData);
    }

    _init(); // api call 


    function _getData() {
      fetch("https://geo.ipify.org/api/v1?apiKey=at_ECLl7Ced4VodU7ViC2JH6JFpnaNzx").then(_utils.validateResponse).then(_utils.jsonify).then(function (data) {
        var ip = data.ip,
            isp = data.isp,
            _data$location = data.location,
            country = _data$location.country,
            city = _data$location.city,
            region = _data$location.region,
            timezone = _data$location.timezone,
            longitude = _data$location.lat,
            latitude = _data$location.lng;
        observer.notify({
          ip: ip,
          isp: isp,
          country: country,
          city: city,
          region: region,
          timezone: timezone,
          longitude: longitude,
          latitude: latitude
        });
      }).catch(_utils.logError);
    }
  });
}();
},{"./searchForm.js":"js/searchForm.js","./Observer.js":"js/Observer.js","./Infolist.js":"js/Infolist.js","./utils.js":"js/utils.js","dotenv":"../node_modules/dotenv/lib/main.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65252" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map