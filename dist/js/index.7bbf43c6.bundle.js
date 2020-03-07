/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([77,0,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./src/components/NameForm/index.js



class NameForm_NameForm extends react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      essayValue: '',
      selectValue: 'c',
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value.toUpperCase()
    });
  }

  handleChange1(event) {
    this.setState({
      essayValue: event.target.value.toUpperCase()
    });
  }

  handleChange2(event) {
    this.setState({
      selectValue: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return react_default.a.createElement("form", {
      onSubmit: event => this.handleSubmit(event)
    }, react_default.a.createElement("label", null, "\u540D\u5B57:", react_default.a.createElement("input", {
      type: "text",
      value: this.state.inputValue,
      onChange: event => this.handleChange(event)
    })), react_default.a.createElement("div", null, this.state.inputValue), react_default.a.createElement("br", null), react_default.a.createElement("label", null, "\u6587\u7AE0:", react_default.a.createElement("textarea", {
      value: this.state.essayValue,
      onChange: this.handleChange1
    })), react_default.a.createElement("br", null), react_default.a.createElement("label", null, "select\u6846:", react_default.a.createElement("select", {
      value: this.state.selectValue,
      onChange: this.handleChange2
    }, react_default.a.createElement("option", {
      value: "a"
    }, "A"), react_default.a.createElement("option", {
      value: "b"
    }, "B"), react_default.a.createElement("option", {
      value: "c"
    }, "C"), react_default.a.createElement("option", {
      value: "d"
    }, "D"))), react_default.a.createElement("br", null), react_default.a.createElement("label", null, "\u53C2\u4E0E\uFF1A", react_default.a.createElement("input", {
      name: "isGoing",
      type: "checkbox",
      checked: this.state.isGoing,
      onChange: this.handleInputChange
    })), react_default.a.createElement("br", null), react_default.a.createElement("label", null, "\u6765\u5BBE\u4EBA\u6570\uFF1A", react_default.a.createElement("input", {
      type: "number",
      name: "numberOfGuests",
      value: this.state.numberOfGuests,
      onChange: this.handleInputChange
    })), react_default.a.createElement("br", null), react_default.a.createElement("input", {
      type: "submit",
      value: "\u63D0\u4EA4"
    }));
  }

}

/* harmony default export */ var components_NameForm = (NameForm_NameForm);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(29);

// EXTERNAL MODULE: ./src/components/waterfall/index.css
var waterfall = __webpack_require__(74);

// CONCATENATED MODULE: ./src/components/waterfall/index.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class waterfall_Box extends react_default.a.Component {
  constructor(props) {
    super(props);

    this.saveRef = ref => {
      this.refDom = ref;
    };

    this.state = {
      left: 0
    };
  }

  render() {
    return react_default.a.createElement("div", {
      ref: this.saveRef,
      className: "box",
      style: {
        background: this.props.color,
        height: this.props.height,
        top: this.props.top,
        left: this.props.left
      }
    }, this.props.index);
  }

}

class waterfall_Waterfall extends react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "resize", () => this.setState({
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }));

    this.state = {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    };
  } // resize = () => forceUpdate()


  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    var gap = 20;
    var arr = new Array(90).fill();
    var array = [];
    const boxes = arr.map((item, index) => {
      let height = Math.floor(Math.random() * 301 + 150);
      arr[index] = height;
      let color = '#' + (Math.random() * 0xffffff << 0).toString(16);
      let pageWidth = this.state.width;
      let columns = parseInt(pageWidth / 300);
      gap = (pageWidth - columns * 300) / columns;

      if (index < columns) {
        array.push(height);
        return react_default.a.createElement(waterfall_Box, {
          key: index,
          color: color,
          height: height,
          index: index + 1,
          top: 0,
          left: (300 + gap) * index
        });
      } else {
        let minHeight = Math.min(...array);
        let minHeightIndex = array.indexOf(minHeight);
        let tmpBox = react_default.a.createElement(waterfall_Box, {
          key: index,
          color: color,
          height: height,
          index: index + 1,
          top: array[minHeightIndex] + gap,
          left: (300 + gap) * minHeightIndex
        });
        array[minHeightIndex] = array[minHeightIndex] + height + gap;
        return tmpBox;
      }
    });
    return react_default.a.createElement("div", {
      id: "container"
    }, boxes);
  }

}

/* harmony default export */ var components_waterfall = (waterfall_Waterfall);
// EXTERNAL MODULE: ./src/components/Magnifier/index.css
var components_Magnifier = __webpack_require__(75);

// CONCATENATED MODULE: ./src/components/Magnifier/index.js
function Magnifier_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Magnifier_Magnifier extends react_default.a.Component {
  constructor(props) {
    super(props);

    Magnifier_defineProperty(this, "handleMouseMove", event => {
      let left = event.clientX - this.refs.demo.offsetLeft - this.small.offsetLeft - this.mask.offsetWidth / 2;
      let top = event.clientY - this.refs.demo.offsetTop - this.small.offsetTop - this.mask.offsetHeight / 2;

      if (left < 0) {
        left = 0;
      } else if (left > this.small.offsetWidth - this.mask.offsetWidth) {
        left = this.small.offsetWidth - this.mask.offsetWidth;
      }

      if (top < 0) {
        top = 0;
      } else if (top > this.small.offsetHeight - this.mask.offsetHeight) {
        top = this.small.offsetHeight - this.mask.offsetHeight;
      }

      this.setState({
        mask: {
          left: left,
          top: top
        },
        rate: this.refs.bigImg.offsetWidth / this.small.offsetWidth
      });
    });

    this.state = {
      isShow: false,
      mask: {
        left: 0,
        top: 0
      },
      rate: 1
    };
  }

  handleMouseOver() {
    this.setState({
      isShow: true,
      mask: {
        left: 0,
        top: 0
      }
    });
  }

  handleMouseOut() {
    this.setState({
      isShow: false
    });
  }

  render() {
    return react_default.a.createElement("div", {
      id: "demo",
      ref: "demo"
    }, react_default.a.createElement("div", {
      id: "small-box",
      ref: r => this.small = r,
      onMouseOver: () => this.handleMouseOver(),
      onMouseOut: () => this.handleMouseOut(),
      onMouseMove: this.handleMouseMove
    }, react_default.a.createElement("div", {
      className: "mask",
      style: {
        display: this.state.isShow == true ? 'block' : 'none',
        left: this.state.mask.left,
        top: this.state.mask.top
      },
      ref: r => this.mask = r
    }), react_default.a.createElement("img", {
      src: "/img/small.jpg",
      alt: ""
    })), react_default.a.createElement("div", {
      id: "big-box",
      style: {
        display: this.state.isShow == true ? 'block' : 'none'
      },
      ref: r => this.big = r
    }, react_default.a.createElement("img", {
      ref: "bigImg",
      src: "/img/big.png",
      style: {
        left: this.state.mask.left * -this.state.rate,
        top: this.state.mask.top * -this.state.rate
      },
      alt: ""
    })));
  }

}

/* harmony default export */ var src_components_Magnifier = (Magnifier_Magnifier);
// EXTERNAL MODULE: ./src/components/Game/index.css
var components_Game = __webpack_require__(76);

// CONCATENATED MODULE: ./src/components/Game/index.js





function Square(props) {
  return react_default.a.createElement("button", {
    className: "square",
    onClick: props.onClick
  }, props.value);
}

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < lines.length; ++i) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

class Game_Board extends react_default.a.Component {
  renderSquare(i) {
    return react_default.a.createElement(Square, {
      value: this.props.squares[i],
      onClick: () => this.props.onClick(i)
    });
  }

  render() {
    return react_default.a.createElement("div", null, react_default.a.createElement("div", {
      className: "board-row"
    }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), react_default.a.createElement("div", {
      className: "board-row"
    }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), react_default.a.createElement("div", {
      className: "board-row"
    }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
  }

}

class Game_Game extends react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? '跳转到' + move : '跳到游戏开始';
      return react_default.a.createElement("li", {
        key: move
      }, react_default.a.createElement("button", {
        onClick: () => this.jumpTo(move)
      }, desc));
    });
    let status;

    if (winner) {
      status = 'Winner:' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return react_default.a.createElement("div", {
      className: "game"
    }, react_default.a.createElement("div", {
      className: "game-board"
    }, react_default.a.createElement(Game_Board, {
      squares: current.squares,
      onClick: i => this.handleClick(i)
    })), react_default.a.createElement("div", {
      className: "game-info"
    }, react_default.a.createElement("div", null, status), react_default.a.createElement("ol", null, moves)));
  }

}

/* harmony default export */ var src_components_Game = (Game_Game);
// CONCATENATED MODULE: ./src/index.js





 // -------------------------------------

react_dom_default.a.render( // <Game />,
react_default.a.createElement(src_components_Magnifier, null), document.getElementById('root'));

/***/ })

/******/ });