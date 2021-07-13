parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MgTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomInt=exports.validateResponse=exports.logError=exports.jsonify=exports.logData=void 0;var o=function(o){return console.log(o)};exports.logData=o;var r=function(o){return o.json()};exports.jsonify=r;var e=function(o){console.log("Looks like something went wrong "+o)};exports.logError=e;var t=function(o){if(o.ok)return o;new Error(o.statusText)};exports.validateResponse=t;var n=function(){return Math.ceil(10*Math.random())};exports.randomInt=n;
},{}],"eKL4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./utils");function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}var o=function(){function e(){r(this,e),this.loading=!0,this._validateDomNodes()&&this._render()}return i(e,[{key:"_validateDomNodes",value:function(){if(this.ipTracker=document.querySelector(".ip-tracker-wrapper"),this.ipTrackerForm=this.ipTracker.querySelector(".ip-tracker__form"),this.ipTrackerBtn=this.ipTracker.querySelector(".ip-tracker__btn"),this.ipTrackerInput=this.ipTracker.querySelector(".ip-tracker__input"),this.ipTrackerInfoList=this.ipTracker.querySelector(".ip-tracker__info-wrapper"),this.ipTrackerLoader=this.ipTracker.querySelector(".loader"),this.ipTracker&&this.ipTrackerForm&&this.ipTrackerBtn&&this.ipTrackerInfoList&&this.ipTrackerInput)return!0;throw Error("required dom nodes are not available.")}},{key:"_bindEnvents",value:function(){var e=this;this.ipTrackerBtn.addEventListener("click",function(){e.ipTrackerBtn.classList.toggle("ip-tracker__btn--active"),e.ipTrackerForm.classList.toggle("ip-tracker__form--active"),e.ipTrackerInput.classList.toggle("ip-tracker__input--active"),e.ipTrackerInfoList.classList.toggle("ip-tracker__info-wrapper--active")})}},{key:"_loading",value:function(){for(;!this.loading;)console.log("not loaded")}},{key:"_render",value:function(){this._bindEnvents()}},{key:"_createMap",value:function(e){var r=e.longitude,t=void 0===r?12:r,i=e.latitude,o=void 0===i?13:i,a=L.map("ip-tracker__map",{zoom:14,center:[t,o],worldCopyJump:!0}),n=L.icon({iconUrl:"./icon-location.svg",iconSize:[47,55],iconAnchor:[t,o],popupAnchor:[-30,20],className:n,inertia:!0,worldCopyJump:!0});L.marker([t,o],{icon:n,alt:"loaction"}).addTo(a).bindPopup("we are here"),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{map}",{map:"bar",zoom:12,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a)}},{key:"update",value:function(e){for(;!e;)console.log("not defined");console.log("loaded")}}]),e}();exports.default=o;
},{"./utils":"MgTz"}],"Ku2V":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function t(){e(this,t),this.observers=new Set}return r(t,[{key:"subscribe",value:function(e){if("function"!=typeof e.update)throw new Error(" oberver.update is not defined");this.observers.add(e)}},{key:"unsubscribe",value:function(e){this.observers.delete(e)}},{key:"notify",value:function(e){this.observers.forEach(function(t){return t.update(e)})}}]),t}();exports.default=n;
},{}],"NODN":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function r(){e(this,r),this._validateDomNodes()}return t(r,[{key:"_validateDomNodes",value:function(){if(this.ipTrackerInfoList=document.querySelector(".ip-tracker__info"),this.ipTrackerIpAddress=this.ipTrackerInfoList.querySelector(".ip-tracker__ip-address"),this.ipTrackerLocation=this.ipTrackerInfoList.querySelector(".ip-tracker__location"),this.ipTrackerTimeZone=this.ipTrackerInfoList.querySelector(".ip-tracker__timezone"),this.ipTrackerIspProvider=this.ipTrackerInfoList.querySelector(".ip-tracker__isp-provider"),this.ipTrackerInfoList&&this.ipTrackerIpAddress&&this.ipTrackerLocation&&this.ipTrackerTimeZone&&this.ipTrackerIspProvider)return!0;throw new Error("Required dom nodes are not defined")}},{key:"_updateDomNodes",value:function(e){var r=e.ip,t=e.isp,i=e.country,o=(e.city,e.region,e.longitude,e.latitude,e.timezone);this.ipTrackerIpAddress.textContent=r,this.ipTrackerLocation.textContent=i,this.ipTrackerTimeZone.textContent=o,this.ipTrackerIspProvider.textContent=t}},{key:"_render",value:function(e){this._updateDomNodes(e)}},{key:"update",value:function(e){this._render(e)}}]),r}();exports.default=i;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=n(require("./searchForm.js")),t=n(require("./Observer.js")),r=n(require("./Infolist.js")),i=require("./utils.js");function n(e){return e&&e.__esModule?e:{default:e}}var u=void document.addEventListener("DOMContentLoaded",function(){var i=new e.default,n=new r.default,u=new t.default;u.subscribe(i),u.subscribe(n);var o={city:"Södermalm",country:"SE",ip:"82.183.60.238",isp:"Ownit Broadband AB",latitude:18.07577,longitude:59.31278,region:"Stockholm County",timezone:"+02:00"};setTimeout(function(){u.notify(o)},4e3)});
},{"./searchForm.js":"eKL4","./Observer.js":"Ku2V","./Infolist.js":"NODN","./utils.js":"MgTz"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.29ed264d.js.map