import {
  require_react_dom
} from "./chunk-4VVCZ6SK.js";
import {
  clsx_m_default,
  init_clsx_m
} from "./chunk-4XWBUGSW.js";
import {
  require_react
} from "./chunk-4YX5GLBJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/react-toastify/dist/react-toastify.esm.js
var import_react = __toESM(require_react());
init_clsx_m();
var import_react_dom = __toESM(require_react_dom());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isNum(v) {
  return typeof v === "number" && !isNaN(v);
}
function isBool(v) {
  return typeof v === "boolean";
}
function isStr(v) {
  return typeof v === "string";
}
function isFn(v) {
  return typeof v === "function";
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function canBeRendered(content) {
  return (0, import_react.isValidElement)(content) || isStr(content) || isFn(content) || isNum(content);
}
var POSITION = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
};
var TYPE = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
};
function collapseToast(node, done, duration) {
  if (duration === void 0) {
    duration = 300;
  }
  var scrollHeight = node.scrollHeight, style = node.style;
  requestAnimationFrame(function() {
    style.minHeight = "initial";
    style.height = scrollHeight + "px";
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function() {
      style.height = "0";
      style.padding = "0";
      style.margin = "0";
      setTimeout(done, duration);
    });
  });
}
function cssTransition(_ref) {
  var enter = _ref.enter, exit = _ref.exit, _ref$appendPosition = _ref.appendPosition, appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition, _ref$collapse = _ref.collapse, collapse = _ref$collapse === void 0 ? true : _ref$collapse, _ref$collapseDuration = _ref.collapseDuration, collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  return function ToastTransition(_ref2) {
    var children = _ref2.children, position = _ref2.position, preventExitTransition = _ref2.preventExitTransition, done = _ref2.done, nodeRef = _ref2.nodeRef, isIn = _ref2.isIn;
    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var baseClassName = (0, import_react.useRef)();
    var animationStep = (0, import_react.useRef)(
      0
      /* Enter */
    );
    (0, import_react.useLayoutEffect)(function() {
      onEnter();
    }, []);
    (0, import_react.useEffect)(function() {
      if (!isIn)
        preventExitTransition ? onExited() : onExit();
    }, [isIn]);
    function onEnter() {
      var node = nodeRef.current;
      baseClassName.current = node.className;
      node.className += " " + enterClassName;
      node.addEventListener("animationend", onEntered);
    }
    function onEntered(e) {
      if (e.target !== nodeRef.current)
        return;
      var node = nodeRef.current;
      node.removeEventListener("animationend", onEntered);
      if (animationStep.current === 0) {
        node.className = baseClassName.current;
      }
    }
    function onExit() {
      animationStep.current = 1;
      var node = nodeRef.current;
      node.className += " " + exitClassName;
      node.addEventListener("animationend", onExited);
    }
    function onExited() {
      var node = nodeRef.current;
      node.removeEventListener("animationend", onExited);
      collapse ? collapseToast(node, done, collapseDuration) : done();
    }
    return import_react.default.createElement(import_react.default.Fragment, null, children);
  };
}
var eventManager = {
  list: /* @__PURE__ */ new Map(),
  emitQueue: /* @__PURE__ */ new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function(cb2) {
        return cb2 !== callback;
      });
      this.list.set(event, cb);
      return this;
    }
    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue["delete"](event);
    }
    return this;
  },
  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    this.list.has(event) && this.list.get(event).forEach(function(callback) {
      var timer = setTimeout(function() {
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);
      _this.emitQueue.get(event).push(timer);
    });
  }
};
function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }
  var ref = (0, import_react.useRef)(arg);
  (0, import_react.useEffect)(function() {
    if (refresh)
      ref.current = arg;
  });
  return ref.current;
}
function reducer(state, action) {
  switch (action.type) {
    case 0:
      return [].concat(state, [action.toastId]).filter(function(id) {
        return id !== action.staleId;
      });
    case 1:
      return isToastIdValid(action.toastId) ? state.filter(function(id) {
        return id !== action.toastId;
      }) : [];
  }
}
var _excluded = ["delay", "staleId"];
function useToastContainer(props) {
  var _useReducer = (0, import_react.useReducer)(function(x) {
    return x + 1;
  }, 0), forceUpdate = _useReducer[1];
  var _useReducer2 = (0, import_react.useReducer)(reducer, []), toast3 = _useReducer2[0], dispatch = _useReducer2[1];
  var containerRef = (0, import_react.useRef)(null);
  var toastCount = useKeeper(0);
  var queue2 = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props,
    containerId: null,
    isToastActive,
    getToast: function getToast2(id) {
      return collection[id] || null;
    }
  });
  (0, import_react.useEffect)(function() {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(
      3
      /* WillUnmount */
    ).on(
      0,
      buildToast
    ).on(
      1,
      function(toastId) {
        return containerRef.current && removeToast(toastId);
      }
    ).on(
      5,
      clearWaitingQueue
    ).emit(
      2,
      instance
    );
    return function() {
      return eventManager.emit(
        3,
        instance
      );
    };
  }, []);
  (0, import_react.useEffect)(function() {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast3.length;
    eventManager.emit(
      4,
      toast3.length,
      props.containerId
    );
  }, [toast3]);
  (0, import_react.useEffect)(function() {
    instance.props = props;
  });
  function isToastActive(id) {
    return toast3.indexOf(id) !== -1;
  }
  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var limit = instance.props.limit;
    if (limit && (!containerId || instance.containerId === containerId)) {
      toastCount -= queue2.length;
      queue2 = [];
    }
  }
  function removeToast(toastId) {
    dispatch({
      type: 1,
      toastId
    });
  }
  function dequeueToast() {
    var _queue$shift = queue2.shift(), toastContent = _queue$shift.toastContent, toastProps = _queue$shift.toastProps, staleId = _queue$shift.staleId;
    appendToast(toastContent, toastProps, staleId);
  }
  function isNotValid(_ref2) {
    var containerId = _ref2.containerId, toastId = _ref2.toastId, updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
  }
  function buildToast(content, _ref3) {
    var _options$icon;
    var delay = _ref3.delay, staleId = _ref3.staleId, options = _objectWithoutPropertiesLoose(_ref3, _excluded);
    if (!canBeRendered(content) || isNotValid(options))
      return;
    var toastId = options.toastId, updateId = options.updateId, data = options.data;
    var props2 = instance.props;
    var closeToast = function closeToast2() {
      return removeToast(toastId);
    };
    var isNotAnUpdate = options.updateId == null;
    if (isNotAnUpdate)
      toastCount++;
    var toastProps = {
      toastId,
      updateId,
      isLoading: options.isLoading,
      theme: options.theme || props2.theme,
      icon: (_options$icon = options.icon) != null ? _options$icon : props2.icon,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast,
      closeButton: options.closeButton,
      rtl: props2.rtl,
      position: options.position || props2.position,
      transition: options.transition || props2.transition,
      className: parseClassName(options.className || props2.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props2.bodyClassName),
      style: options.style || props2.toastStyle,
      bodyStyle: options.bodyStyle || props2.bodyStyle,
      onClick: options.onClick || props2.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props2.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props2.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props2.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props2.draggablePercent,
      draggableDirection: options.draggableDirection || props2.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props2.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props2.progressClassName),
      progressStyle: options.progressStyle || props2.progressStyle,
      autoClose: options.isLoading ? false : getAutoCloseDelay(options.autoClose, props2.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props2.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props2.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen))
      toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose))
      toastProps.onClose = options.onClose;
    if (toastProps.draggableDirection === "y" && toastProps.draggablePercent === 80) {
      toastProps.draggablePercent *= 1.5;
    }
    var closeButton = props2.closeButton;
    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props2.closeButton) ? props2.closeButton : true;
    }
    toastProps.closeButton = closeButton;
    var toastContent = content;
    if ((0, import_react.isValidElement)(content) && !isStr(content.type)) {
      toastContent = (0, import_react.cloneElement)(content, {
        closeToast,
        toastProps,
        data
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast,
        toastProps,
        data
      });
    }
    if (props2.limit && props2.limit > 0 && toastCount > props2.limit && isNotAnUpdate) {
      queue2.push({
        toastContent,
        toastProps,
        staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function() {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }
  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    if (staleId)
      delete collection[staleId];
    collection[toastId] = {
      content,
      props: toastProps
    };
    dispatch({
      type: 0,
      toastId,
      staleId
    });
  }
  function removeFromCollection(toastId) {
    delete collection[toastId];
    var queueLen = queue2.length;
    toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0)
      toastCount = 0;
    if (queueLen > 0) {
      var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;
      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;
        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    } else {
      forceUpdate();
    }
  }
  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);
    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }
    return Object.keys(toastToRender).map(function(p) {
      return cb(p, toastToRender[p]);
    });
  }
  return {
    getToastToRender,
    collection,
    containerRef,
    isToastActive
  };
}
function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function useToast(props) {
  var _useState = (0, import_react.useState)(true), isRunning = _useState[0], setIsRunning = _useState[1];
  var _useState2 = (0, import_react.useState)(false), preventExitTransition = _useState2[0], setPreventExitTransition = _useState2[1];
  var toastRef = (0, import_react.useRef)(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose, pauseOnHover = props.pauseOnHover, closeToast = props.closeToast, onClick = props.onClick, closeOnClick = props.closeOnClick;
  (0, import_react.useEffect)(function() {
    if (isFn(props.onOpen))
      props.onOpen((0, import_react.isValidElement)(props.children) && props.children.props);
    return function() {
      if (isFn(syncProps.onClose))
        syncProps.onClose((0, import_react.isValidElement)(syncProps.children) && syncProps.children.props);
    };
  }, []);
  (0, import_react.useEffect)(function() {
    props.draggable && bindDragEvents();
    return function() {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  (0, import_react.useEffect)(function() {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function() {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);
  function onDragStart(e) {
    if (props.draggable) {
      var toast3 = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast3.getBoundingClientRect();
      toast3.style.transition = "";
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);
      if (props.draggableDirection === "x") {
        drag.start = drag.x;
        drag.removalDistance = toast3.offsetWidth * (props.draggablePercent / 100);
      } else {
        drag.start = drag.y;
        drag.removalDistance = toast3.offsetHeight * (props.draggablePercent / 100);
      }
    }
  }
  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect, top = _drag$boundingRect.top, bottom = _drag$boundingRect.bottom, left = _drag$boundingRect.left, right = _drag$boundingRect.right;
      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }
  function playToast() {
    setIsRunning(true);
  }
  function pauseToast() {
    setIsRunning(false);
  }
  function bindFocusEvents() {
    if (!document.hasFocus())
      pauseToast();
    window.addEventListener("focus", playToast);
    window.addEventListener("blur", pauseToast);
  }
  function unbindFocusEvents() {
    window.removeEventListener("focus", playToast);
    window.removeEventListener("blur", pauseToast);
  }
  function bindDragEvents() {
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("touchmove", onDragMove);
    document.addEventListener("touchend", onDragEnd);
  }
  function unbindDragEvents() {
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
    document.removeEventListener("touchmove", onDragMove);
    document.removeEventListener("touchend", onDragEnd);
  }
  function onDragMove(e) {
    if (drag.canDrag) {
      e.preventDefault();
      var toast3 = toastRef.current;
      if (isRunning)
        pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);
      if (props.draggableDirection === "x") {
        drag.delta = drag.x - drag.start;
      } else {
        drag.delta = drag.y - drag.start;
      }
      if (drag.start !== drag.x)
        drag.canCloseOnClick = false;
      toast3.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast3.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }
  function onDragEnd() {
    var toast3 = toastRef.current;
    if (drag.canDrag) {
      drag.canDrag = false;
      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }
      toast3.style.transition = "transform 0.2s, opacity 0.2s";
      toast3.style.transform = "translate" + props.draggableDirection + "(0)";
      toast3.style.opacity = "1";
    }
  }
  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };
  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  }
  if (closeOnClick) {
    eventHandlers.onClick = function(e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }
  return {
    playToast,
    pauseToast,
    isRunning,
    preventExitTransition,
    toastRef,
    eventHandlers
  };
}
function CloseButton(_ref) {
  var closeToast = _ref.closeToast, theme = _ref.theme, _ref$ariaLabel = _ref.ariaLabel, ariaLabel = _ref$ariaLabel === void 0 ? "close" : _ref$ariaLabel;
  return (0, import_react.createElement)("button", {
    className: "Toastify__close-button Toastify__close-button--" + theme,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, (0, import_react.createElement)("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, (0, import_react.createElement)("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}
function ProgressBar(_ref) {
  var _cx, _animationEvent;
  var delay = _ref.delay, isRunning = _ref.isRunning, closeToast = _ref.closeToast, type = _ref.type, hide = _ref.hide, className = _ref.className, userStyle = _ref.style, controlledProgress = _ref.controlledProgress, progress = _ref.progress, rtl = _ref.rtl, isIn = _ref.isIn, theme = _ref.theme;
  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? "running" : "paused",
    opacity: hide ? 0 : 1
  });
  if (controlledProgress)
    style.transform = "scaleX(" + progress + ")";
  var defaultClassName = clsx_m_default("Toastify__progress-bar", controlledProgress ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--" + theme, "Toastify__progress-bar--" + type, (_cx = {}, _cx["Toastify__progress-bar--rtl"] = rtl, _cx));
  var classNames = isFn(className) ? className({
    rtl,
    type,
    defaultClassName
  }) : clsx_m_default(defaultClassName, className);
  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? "onTransitionEnd" : "onAnimationEnd"] = controlledProgress && progress < 1 ? null : function() {
    isIn && closeToast();
  }, _animationEvent);
  return (0, import_react.createElement)("div", Object.assign({
    role: "progressbar",
    "aria-hidden": hide ? "true" : "false",
    "aria-label": "notification timer",
    className: classNames,
    style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};
var _excluded$1 = ["theme", "type"];
var Svg = function Svg2(_ref) {
  var theme = _ref.theme, type = _ref.type, rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return import_react.default.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: theme === "colored" ? "currentColor" : "var(--toastify-icon-color-" + type + ")"
  }, rest));
};
function Warning(props) {
  return import_react.default.createElement(Svg, Object.assign({}, props), import_react.default.createElement("path", {
    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }));
}
function Info(props) {
  return import_react.default.createElement(Svg, Object.assign({}, props), import_react.default.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }));
}
function Success(props) {
  return import_react.default.createElement(Svg, Object.assign({}, props), import_react.default.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }));
}
function Error(props) {
  return import_react.default.createElement(Svg, Object.assign({}, props), import_react.default.createElement("path", {
    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }));
}
function Spinner() {
  return import_react.default.createElement("div", {
    className: "Toastify__spinner"
  });
}
var Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error,
  spinner: Spinner
};
var Toast = function Toast2(props) {
  var _cx, _cx2;
  var _useToast = useToast(props), isRunning = _useToast.isRunning, preventExitTransition = _useToast.preventExitTransition, toastRef = _useToast.toastRef, eventHandlers = _useToast.eventHandlers;
  var closeButton = props.closeButton, children = props.children, autoClose = props.autoClose, onClick = props.onClick, type = props.type, hideProgressBar = props.hideProgressBar, closeToast = props.closeToast, Transition = props.transition, position = props.position, className = props.className, style = props.style, bodyClassName = props.bodyClassName, bodyStyle = props.bodyStyle, progressClassName = props.progressClassName, progressStyle = props.progressStyle, updateId = props.updateId, role = props.role, progress = props.progress, rtl = props.rtl, toastId = props.toastId, deleteToast = props.deleteToast, isIn = props.isIn, isLoading = props.isLoading, icon = props.icon, theme = props.theme;
  var defaultClassName = clsx_m_default("Toastify__toast", "Toastify__toast-theme--" + theme, "Toastify__toast--" + type, (_cx = {}, _cx["Toastify__toast--rtl"] = rtl, _cx));
  var cssClasses = isFn(className) ? className({
    rtl,
    position,
    type,
    defaultClassName
  }) : clsx_m_default(defaultClassName, className);
  var isProgressControlled = !!progress;
  var maybeIcon = Icons[type];
  var iconProps = {
    theme,
    type
  };
  var Icon = maybeIcon && maybeIcon(iconProps);
  if (icon === false) {
    Icon = void 0;
  } else if (isFn(icon)) {
    Icon = icon(iconProps);
  } else if ((0, import_react.isValidElement)(icon)) {
    Icon = (0, import_react.cloneElement)(icon, iconProps);
  } else if (isStr(icon)) {
    Icon = icon;
  } else if (isLoading) {
    Icon = Icons.spinner();
  }
  function renderCloseButton(closeButton2) {
    if (!closeButton2)
      return;
    var props2 = {
      closeToast,
      type,
      theme
    };
    if (isFn(closeButton2))
      return closeButton2(props2);
    if ((0, import_react.isValidElement)(closeButton2))
      return (0, import_react.cloneElement)(closeButton2, props2);
  }
  return (0, import_react.createElement)(Transition, {
    isIn,
    done: deleteToast,
    position,
    preventExitTransition,
    nodeRef: toastRef
  }, (0, import_react.createElement)("div", Object.assign({
    id: toastId,
    onClick,
    className: cssClasses
  }, eventHandlers, {
    style,
    ref: toastRef
  }), (0, import_react.createElement)("div", Object.assign({}, isIn && {
    role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type
    }) : clsx_m_default("Toastify__toast-body", bodyClassName),
    style: bodyStyle
  }), Icon && (0, import_react.createElement)("div", {
    className: clsx_m_default("Toastify__toast-icon", (_cx2 = {}, _cx2["Toastify--animate-icon Toastify__zoom-enter"] = !isLoading, _cx2))
  }, Icon), (0, import_react.createElement)("div", null, children)), renderCloseButton(closeButton), (autoClose || isProgressControlled) && (0, import_react.createElement)(ProgressBar, Object.assign({}, updateId && !isProgressControlled ? {
    key: "pb-" + updateId
  } : {}, {
    rtl,
    theme,
    delay: autoClose,
    isRunning,
    isIn,
    closeToast,
    hide: hideProgressBar,
    type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress
  }))));
};
var Bounce = cssTransition({
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: true
});
var Slide = cssTransition({
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: true
});
var Zoom = cssTransition({
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
});
var Flip = cssTransition({
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
});
var ToastContainer = function ToastContainer2(props) {
  var _useToastContainer = useToastContainer(props), getToastToRender = _useToastContainer.getToastToRender, containerRef = _useToastContainer.containerRef, isToastActive = _useToastContainer.isToastActive;
  var className = props.className, style = props.style, rtl = props.rtl, containerId = props.containerId;
  function getClassName(position) {
    var _cx;
    var defaultClassName = clsx_m_default("Toastify__toast-container", "Toastify__toast-container--" + position, (_cx = {}, _cx["Toastify__toast-container--rtl"] = rtl, _cx));
    return isFn(className) ? className({
      position,
      rtl,
      defaultClassName
    }) : clsx_m_default(defaultClassName, parseClassName(className));
  }
  return (0, import_react.createElement)("div", {
    ref: containerRef,
    className: "Toastify",
    id: containerId
  }, getToastToRender(function(position, toastList) {
    var containerStyle = toastList.length === 0 ? _extends({}, style, {
      pointerEvents: "none"
    }) : _extends({}, style);
    return (0, import_react.createElement)("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map(function(_ref) {
      var content = _ref.content, toastProps = _ref.props;
      return (0, import_react.createElement)(Toast, Object.assign({}, toastProps, {
        isIn: isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5e3,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light"
};
var containers = /* @__PURE__ */ new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
function isAnyContainerMounted() {
  return containers.size > 0;
}
function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = containers.get(containerId || latestInstance);
  if (!container)
    return null;
  return container.getToast(toastId);
}
function generateToastId() {
  return Math.random().toString(36).substr(2, 9);
}
function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }
  return generateToastId();
}
function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(
      0,
      content,
      options
    );
  } else {
    queue.push({
      content,
      options
    });
    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement("div");
      document.body.appendChild(containerDomNode);
      (0, import_react_dom.render)((0, import_react.createElement)(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }
  return options.toastId;
}
function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}
var createToastByType = function createToastByType2(type) {
  return function(content, options) {
    return dispatchToast(content, mergeOptions(type, options));
  };
};
var toast = function toast2(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};
toast.loading = function(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, _extends({
    isLoading: true,
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    draggable: false
  }, options)));
};
function handlePromise(promise, _ref2, options) {
  var pending = _ref2.pending, error = _ref2.error, success = _ref2.success;
  var id = isStr(pending) ? toast.loading(pending, options) : toast.loading(pending.render, _extends({}, options, pending));
  var resetParams = {
    isLoading: null,
    autoClose: null,
    closeOnClick: null,
    closeButton: null,
    draggable: null
  };
  var resolver = function resolver2(type, input, result) {
    var params = isStr(input) ? {
      render: input
    } : input;
    toast.update(id, _extends({
      type
    }, resetParams, options, params, {
      data: result
    }));
    return result;
  };
  var p = isFn(promise) ? promise() : promise;
  p.then(function(result) {
    return resolver("success", success, result);
  })["catch"](function(err) {
    return resolver("error", error, err);
  });
  return p;
}
toast.promise = handlePromise;
toast.success = createToastByType(TYPE.SUCCESS);
toast.info = createToastByType(TYPE.INFO);
toast.error = createToastByType(TYPE.ERROR);
toast.warning = createToastByType(TYPE.WARNING);
toast.warn = toast.warning;
toast.dark = function(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, _extends({
    theme: "dark"
  }, options)));
};
toast.dismiss = function(id) {
  return eventManager.emit(
    1,
    id
  );
};
toast.clearWaitingQueue = function(params) {
  if (params === void 0) {
    params = {};
  }
  return eventManager.emit(
    5,
    params
  );
};
toast.isActive = function(id) {
  var isToastActive = false;
  containers.forEach(function(container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};
toast.update = function(toastId, options) {
  if (options === void 0) {
    options = {};
  }
  setTimeout(function() {
    var toast3 = getToast(toastId, options);
    if (toast3) {
      var oldOptions = toast3.props, oldContent = toast3.content;
      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });
      if (nextOptions.toastId !== toastId)
        nextOptions.staleId = toastId;
      var content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
toast.done = function(id) {
  toast.update(id, {
    progress: 1
  });
};
toast.onChange = function(callback) {
  if (isFn(callback)) {
    eventManager.on(
      4,
      callback
    );
  }
  return function() {
    isFn(callback) && eventManager.off(
      4,
      callback
    );
  };
};
toast.configure = function(config) {
  if (config === void 0) {
    config = {};
  }
  lazy = true;
  containerConfig = config;
};
toast.POSITION = POSITION;
toast.TYPE = TYPE;
eventManager.on(
  2,
  function(containerInstance) {
    latestInstance = containerInstance.containerId || containerInstance;
    containers.set(latestInstance, containerInstance);
    queue.forEach(function(item) {
      eventManager.emit(
        0,
        item.content,
        item.options
      );
    });
    queue = [];
  }
).on(
  3,
  function(containerInstance) {
    containers["delete"](containerInstance.containerId || containerInstance);
    if (containers.size === 0) {
      eventManager.off(
        0
        /* Show */
      ).off(
        1
        /* Clear */
      ).off(
        5
        /* ClearWaitingQueue */
      );
    }
    if (canUseDom && containerDomNode) {
      document.body.removeChild(containerDomNode);
    }
  }
);
export {
  Bounce,
  Flip,
  Icons,
  Slide,
  ToastContainer,
  Zoom,
  collapseToast,
  cssTransition,
  toast,
  useToast,
  useToastContainer
};
//# sourceMappingURL=react-toastify.js.map
