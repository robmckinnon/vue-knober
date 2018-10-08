(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-knober", [], factory);
	else if(typeof exports === 'object')
		exports["vue-knober"] = factory();
	else
		root["vue-knober"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/knober.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/knober.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-knober',
  data: function () {
    return {
      margin: 0,
      chassisSize: 0,
      knobSize: 0,
      ctx: null,
      initialAngle: -30,
      currentValue: this.value
    };
  },
  props: {
    size: {
      type: [String, Number],
      default: 250
    },
    value: {
      type: [String, Number],
      default: 0
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 255
    },
    primaryColor: {
      type: String,
      default: '#79bd9a'
    },
    diffColor: {
      type: String,
      default: '#cff0da'
    },
    quenchColor: {
      type: String,
      default: '#eee'
    }
  },
  computed: {
    range() {
      return this.max - this.min;
    }

  },

  created() {
    const size = Number(this.size);
    this.margin = size * .05;
    this.chassisSize = size / 2 - this.margin;
    this.knobSize = this.chassisSize * .4;
  },

  methods: {
    calculateRenderParams(x, y) {
      const size = this.size;
      const coorX = x - size / 2;
      const coorY = y - size / 2;
      const r = Math.sqrt(Math.pow(Math.abs(coorX), 2) + Math.pow(Math.abs(coorY), 2));
      let angle = Math.atan2(coorY, coorX) * 180 / Math.PI - 180;

      if (angle < -180) {
        angle = Math.abs(angle + 360);
      }

      return {
        r,
        angle,
        coorX,
        coorY
      };
    },

    move: lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function (config) {
      const {
        angle,
        r,
        coorX,
        coorY
      } = config;

      if (angle < -180) {
        angle = Math.abs(angle + 360);
      }

      if (r < this.chassisSize) {
        this.draw(angle, r, coorX, coorY);
      } else {
        this.draw();
      }
    }, 40, {
      'trailing': false
    }),

    calculateValue(angle) {
      const base = this.range / 240;
      let newVal;

      if (angle > 0) {
        newVal = base * (angle + 30);
      } else if (angle >= -30) {
        newVal = base * (30 + angle);
      } else if (angle <= -150) {
        newVal = base * (210 + angle + 180);
      }

      newVal = Number(newVal && newVal.toFixed(0));
      return newVal + Number(this.min);
    },

    press(config) {
      const {
        angle,
        r,
        coorX,
        coorY
      } = config;
      const val = this.calculateValue(angle);
      if (r > this.chassisSize) return;

      if (r <= this.knobSize) {
        this.currentValue > Number(this.min) ? this.currentValue = this.min : this.currentValue = this.max;
        return;
      }

      if (val) {
        this.initialAngle = angle;
        this.currentValue = Number(val);
      }
    },

    drawKnob(angle, r, coorX, coorY) {
      const self = this;
      const size = self.knobSize;
      const ctx = this.ctx;

      if (angle === undefined || angle < -30 && angle > -150) {
        angle = this.initialAngle;
      } else if (r > self.knobSize) {
        if (r >= self.knobSize && angle < 0) {
          if (angle <= -30 && angle >= -90) {
            angle = -30;
          } else if (angle > -150 && angle < -90) {
            angle = -150;
          }
        }
      }

      drawBackground();

      if (!r || r > this.knobSize) {
        drawTick();
      }

      drawSwitch();

      function drawBackground() {
        const blur = r < self.knobSize ? size * .2 : size * .5;
        const offset = r < self.knobSize ? size * .05 : size * .1;
        ctx.save();
        ctx.translate(self.size / 2, self.size / 2);
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2, true);
        ctx.shadowBlur = blur;
        ctx.shadowColor = '#aaa';
        ctx.shadowOffsetX = offset;
        ctx.shadowOffsetY = offset;
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }

      function drawTick() {
        ctx.save();
        ctx.translate(self.size / 2, self.size / 2);
        ctx.rotate(angle * Math.PI / 180);
        ctx.rotate(0);
        ctx.beginPath();
        ctx.moveTo(-size * .6, 0);
        ctx.lineTo(-size * .9, 0);
        ctx.lineWidth = self.size * .015;
        ctx.strokeStyle = self.primaryColor;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }

      function drawSwitch() {
        const switchSize = self.knobSize * .3;
        let color = self.quenchColor;

        if (r < self.knobSize) {
          if (self.currentValue > 0) {
            color = '#fe4365';
          } else {
            color = self.primaryColor;
          }
        }

        ctx.save();
        ctx.translate(self.size / 2, self.size / 2);
        ctx.rotate(-125 * Math.PI / 180);
        ctx.beginPath();
        ctx.arc(0, 0, self.knobSize * .3, 0, Math.PI * 2 - 5, true);
        ctx.lineWidth = switchSize * .2;
        ctx.strokeStyle = color;
        ctx.shadowBlur = switchSize * .3;
        ctx.shadowColor = color;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.translate(self.size / 2, self.size / 2);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -switchSize * 1.2);
        ctx.lineWidth = switchSize * .2;
        ctx.strokeStyle = color;
        ctx.shadowBlur = switchSize * .3;
        ctx.shadowColor = color;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    },

    drawDashboard(angle, r, coorX, coorY) {
      const self = this;
      const ctx = self.ctx;
      const size = self.size;
      const chassisSize = self.chassisSize;
      angle = angle + 30;

      if (angle < 0) {
        angle = 360 + angle;
      }

      drawChassis();
      drawTicks();

      function drawChassis() {
        ctx.save();
        ctx.translate(size / 2, size / 2);
        ctx.beginPath();
        ctx.arc(0, 0, chassisSize, 0, Math.PI * 2, true);
        ctx.shadowBlur = chassisSize * .16;
        ctx.shadowOffsetX = chassisSize * .03;
        ctx.shadowOffsetY = chassisSize * .03;
        ctx.shadowColor = '#ccc';
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }

      function drawTicks() {
        const gap = 240 / 30;
        ctx.save();
        ctx.translate(size / 2, size / 2);
        ctx.rotate(-30 * Math.PI / 180);
        let i = 0;

        while (i <= 30) {
          const start = -self.knobSize - chassisSize * .1;
          const end = i % 3 === 0 ? -chassisSize * .9 : -chassisSize * .75;
          const weight = i % 3 === 0 ? 2 : 1.5;

          const _angle = i * gap;

          let color = self.quenchColor;
          let shadowColor = '#fff';

          const setColor = (c, shadow) => () => {
            color = c;
            shadowColor = shadow;
          };

          const setDiffColor = setColor(self.diffColor, self.diffColor);
          const setPrimaryColor = setColor(self.primaryColor, self.primaryColor);

          if (angle) {
            if (r > self.knobSize) {
              let isCheck = false;
              let isDiff = false;

              if (angle > 240) {
                if (_angle <= self.initialAngle + 30 && self.currentValue > 0) {
                  setPrimaryColor();
                }
              } else {
                if (self.currentValue <= self.min) {
                  if (_angle < self.initialAngle + 30 && _angle < angle) {
                    setPrimaryColor();
                  } else if (_angle <= self.initialAngle + 30 || _angle <= angle) {
                    setDiffColor();
                  }
                } else {
                  if (_angle <= self.initialAngle + 30 && _angle <= angle) {
                    setPrimaryColor();
                  } else if (_angle <= self.initialAngle + 30 || _angle <= angle) {
                    setDiffColor();
                  }
                }
              }
            } else {
              if (_angle <= self.initialAngle + 30 && self.currentValue !== 0) {
                setDiffColor();
              }
            }
          } else {
            if (self.currentValue <= self.min) {
              if (_angle < self.initialAngle + 30) {
                setPrimaryColor();
              }
            } else {
              if (_angle <= self.initialAngle + 30) {
                setPrimaryColor();
              }
            }
          }

          ctx.rotate(i === 0 ? 0 : gap * Math.PI / 180);
          ctx.beginPath();
          ctx.moveTo(start, 0);
          ctx.lineTo(end, 0);
          ctx.lineWidth = weight;
          ctx.shadowBlur = chassisSize * .05;
          ctx.shadowColor = shadowColor;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.strokeStyle = color;
          ctx.stroke();
          ctx.closePath();
          i++;
        }

        ;
        ctx.restore();
      }
    },

    drawlabel(angle, r, coorX, coorY) {
      const ctx = this.ctx;
      let val = this.currentValue;

      if (angle && angle <= 240 && r > this.knobSize) {
        const _val = this.calculateValue(angle);

        _val && (val = _val);
      }

      ctx.save();
      ctx.translate(this.size / 2, this.size / 2 + this.chassisSize * .8);
      ctx.fillStyle = '#999';
      ctx.textAlign = 'center';
      ctx.font = `${this.chassisSize * .3}px Arial`;
      ctx.fillText(val, 0, 0);
      ctx.restore();
    },

    draw(angle, r, coorX, coorY) {
      this.ctx.clearRect(0, 0, this.size, this.size);
      this.drawDashboard(angle, r, coorX, coorY);
      this.drawKnob(angle, r, coorX, coorY);
      this.drawlabel(angle, r, coorX, coorY);
    },

    watchCurrentValueHandler(val) {
      const randerScale = 240;
      let angle = randerScale / this.range * (val - this.min) - 30;

      if (angle > 180) {
        angle -= 360;
      }

      this.initialAngle = angle;
      this.draw();
    }

  },

  mounted() {
    this.ctx = this.$el.getContext('2d');
    this.$el.addEventListener('mousemove', e => this.move(this.calculateRenderParams(e.offsetX, e.offsetY)), false);
    this.$el.addEventListener('mouseout', () => this.draw(), false);
    this.$el.addEventListener('click', e => this.press(this.calculateRenderParams(e.offsetX, e.offsetY)), false);
    this.$el.addEventListener('touchmove', e => {
      const {
        pageX,
        pageY
      } = e.changedTouches[0];
      this.move(this.calculateRenderParams(pageX, pageY));
    }, false);
    this.$el.addEventListener('touchend', e => {
      const {
        pageX,
        pageY
      } = e.changedTouches[0];
      this.press(this.calculateRenderParams(pageX, pageY));
    });
    this.$watch('currentValue', val => {
      this.$emit('input', val);
      const randerScale = 240;
      const angle = randerScale / this.range * (val - this.min) - 30;
      this.initialAngle = angle;
      this.draw();
    }, {
      immediate: true
    });
  }

});

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/knober.vue?vue&type=template&id=7e671886&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/knober.vue?vue&type=template&id=7e671886& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('canvas',{ref:"canvas",attrs:{"width":Number(this.size),"height":Number(this.size)}})}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knober_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knober.vue */ "./src/knober.vue");


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-knober', _knober_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (_knober_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/knober.vue":
/*!************************!*\
  !*** ./src/knober.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knober_vue_vue_type_template_id_7e671886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knober.vue?vue&type=template&id=7e671886& */ "./src/knober.vue?vue&type=template&id=7e671886&");
/* harmony import */ var _knober_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knober.vue?vue&type=script&lang=js& */ "./src/knober.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _knober_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _knober_vue_vue_type_template_id_7e671886___WEBPACK_IMPORTED_MODULE_0__["render"],
  _knober_vue_vue_type_template_id_7e671886___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "knober.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/knober.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./src/knober.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_knober_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1!../node_modules/vue-loader/lib??vue-loader-options!./knober.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/knober.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_knober_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/knober.vue?vue&type=template&id=7e671886&":
/*!*******************************************************!*\
  !*** ./src/knober.vue?vue&type=template&id=7e671886& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_knober_vue_vue_type_template_id_7e671886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./knober.vue?vue&type=template&id=7e671886& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/knober.vue?vue&type=template&id=7e671886&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_knober_vue_vue_type_template_id_7e671886___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_knober_vue_vue_type_template_id_7e671886___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=vue-knober.js.map