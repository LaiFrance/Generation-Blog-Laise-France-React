import {
  TransitionGroup_default,
  Transition_default
} from "./chunk-BDHFAHBJ.js";
import {
  HTMLElementType,
  ServerStyleSheets,
  StylesProvider,
  ThemeProvider_default,
  _arrayWithHoles,
  _classCallCheck,
  _createClass,
  _defineProperty,
  _iterableToArray,
  _nonIterableRest,
  _objectWithoutProperties,
  _slicedToArray,
  _toConsumableArray,
  _typeof,
  _unsupportedIterableToArray,
  alpha,
  blue_default,
  borders_default,
  chainPropTypes,
  common_default,
  compose_default,
  createGenerateClassName,
  createMuiStrictModeTheme,
  createMuiTheme,
  createStyles,
  createTheme_default,
  darken,
  decomposeColor,
  deepmerge,
  display_default,
  duration,
  easing,
  elementAcceptingRef_default,
  elementTypeAcceptingRef_default,
  emphasize,
  exactProp,
  fade,
  flexbox_default,
  getContrastRatio,
  getDisplayName,
  getLuminance,
  getThemeProps,
  green_default,
  grey_default,
  grid_default,
  hexToRgb,
  hslToRgb,
  indigo_default,
  jssPreset,
  keys,
  lighten,
  makeStyles_default,
  mergeClasses,
  orange_default,
  palette_default,
  pink_default,
  positions_default,
  recomposeColor,
  red_default,
  refType_default,
  responsiveFontSizes,
  rgbToHex,
  shadows_default,
  sizing_default,
  spacing_default,
  styleFunctionSx_default,
  styled_default,
  typography_default,
  useTheme,
  useTheme2,
  withStyles_default,
  withTheme_default,
  zIndex_default
} from "./chunk-3YUGE25R.js";
import {
  require_react_dom
} from "./chunk-4VVCZ6SK.js";
import {
  clsx_m_default,
  init_clsx_m
} from "./chunk-4XWBUGSW.js";
import {
  _extends,
  init_extends,
  require_hoist_non_react_statics_cjs,
  require_prop_types
} from "./chunk-VTW7HO3H.js";
import {
  require_react
} from "./chunk-4YX5GLBJ.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@material-ui/core/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/@material-ui/core/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment14 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment13(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment14;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment13;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/@material-ui/core/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/@material-ui/core/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/@material-ui/core/esm/colors/index.js
var colors_exports = {};
__export(colors_exports, {
  amber: () => amber_default,
  blue: () => blue_default,
  blueGrey: () => blueGrey_default,
  brown: () => brown_default,
  common: () => common_default,
  cyan: () => cyan_default,
  deepOrange: () => deepOrange_default,
  deepPurple: () => deepPurple_default,
  green: () => green_default,
  grey: () => grey_default,
  indigo: () => indigo_default,
  lightBlue: () => lightBlue_default,
  lightGreen: () => lightGreen_default,
  lime: () => lime_default,
  orange: () => orange_default,
  pink: () => pink_default,
  purple: () => purple_default,
  red: () => red_default,
  teal: () => teal_default,
  yellow: () => yellow_default
});

// node_modules/@material-ui/core/esm/colors/purple.js
var purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
};
var purple_default = purple;

// node_modules/@material-ui/core/esm/colors/deepPurple.js
var deepPurple = {
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#b39ddb",
  300: "#9575cd",
  400: "#7e57c2",
  500: "#673ab7",
  600: "#5e35b1",
  700: "#512da8",
  800: "#4527a0",
  900: "#311b92",
  A100: "#b388ff",
  A200: "#7c4dff",
  A400: "#651fff",
  A700: "#6200ea"
};
var deepPurple_default = deepPurple;

// node_modules/@material-ui/core/esm/colors/lightBlue.js
var lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
};
var lightBlue_default = lightBlue;

// node_modules/@material-ui/core/esm/colors/cyan.js
var cyan = {
  50: "#e0f7fa",
  100: "#b2ebf2",
  200: "#80deea",
  300: "#4dd0e1",
  400: "#26c6da",
  500: "#00bcd4",
  600: "#00acc1",
  700: "#0097a7",
  800: "#00838f",
  900: "#006064",
  A100: "#84ffff",
  A200: "#18ffff",
  A400: "#00e5ff",
  A700: "#00b8d4"
};
var cyan_default = cyan;

// node_modules/@material-ui/core/esm/colors/teal.js
var teal = {
  50: "#e0f2f1",
  100: "#b2dfdb",
  200: "#80cbc4",
  300: "#4db6ac",
  400: "#26a69a",
  500: "#009688",
  600: "#00897b",
  700: "#00796b",
  800: "#00695c",
  900: "#004d40",
  A100: "#a7ffeb",
  A200: "#64ffda",
  A400: "#1de9b6",
  A700: "#00bfa5"
};
var teal_default = teal;

// node_modules/@material-ui/core/esm/colors/lightGreen.js
var lightGreen = {
  50: "#f1f8e9",
  100: "#dcedc8",
  200: "#c5e1a5",
  300: "#aed581",
  400: "#9ccc65",
  500: "#8bc34a",
  600: "#7cb342",
  700: "#689f38",
  800: "#558b2f",
  900: "#33691e",
  A100: "#ccff90",
  A200: "#b2ff59",
  A400: "#76ff03",
  A700: "#64dd17"
};
var lightGreen_default = lightGreen;

// node_modules/@material-ui/core/esm/colors/lime.js
var lime = {
  50: "#f9fbe7",
  100: "#f0f4c3",
  200: "#e6ee9c",
  300: "#dce775",
  400: "#d4e157",
  500: "#cddc39",
  600: "#c0ca33",
  700: "#afb42b",
  800: "#9e9d24",
  900: "#827717",
  A100: "#f4ff81",
  A200: "#eeff41",
  A400: "#c6ff00",
  A700: "#aeea00"
};
var lime_default = lime;

// node_modules/@material-ui/core/esm/colors/yellow.js
var yellow = {
  50: "#fffde7",
  100: "#fff9c4",
  200: "#fff59d",
  300: "#fff176",
  400: "#ffee58",
  500: "#ffeb3b",
  600: "#fdd835",
  700: "#fbc02d",
  800: "#f9a825",
  900: "#f57f17",
  A100: "#ffff8d",
  A200: "#ffff00",
  A400: "#ffea00",
  A700: "#ffd600"
};
var yellow_default = yellow;

// node_modules/@material-ui/core/esm/colors/amber.js
var amber = {
  50: "#fff8e1",
  100: "#ffecb3",
  200: "#ffe082",
  300: "#ffd54f",
  400: "#ffca28",
  500: "#ffc107",
  600: "#ffb300",
  700: "#ffa000",
  800: "#ff8f00",
  900: "#ff6f00",
  A100: "#ffe57f",
  A200: "#ffd740",
  A400: "#ffc400",
  A700: "#ffab00"
};
var amber_default = amber;

// node_modules/@material-ui/core/esm/colors/deepOrange.js
var deepOrange = {
  50: "#fbe9e7",
  100: "#ffccbc",
  200: "#ffab91",
  300: "#ff8a65",
  400: "#ff7043",
  500: "#ff5722",
  600: "#f4511e",
  700: "#e64a19",
  800: "#d84315",
  900: "#bf360c",
  A100: "#ff9e80",
  A200: "#ff6e40",
  A400: "#ff3d00",
  A700: "#dd2c00"
};
var deepOrange_default = deepOrange;

// node_modules/@material-ui/core/esm/colors/brown.js
var brown = {
  50: "#efebe9",
  100: "#d7ccc8",
  200: "#bcaaa4",
  300: "#a1887f",
  400: "#8d6e63",
  500: "#795548",
  600: "#6d4c41",
  700: "#5d4037",
  800: "#4e342e",
  900: "#3e2723",
  A100: "#d7ccc8",
  A200: "#bcaaa4",
  A400: "#8d6e63",
  A700: "#5d4037"
};
var brown_default = brown;

// node_modules/@material-ui/core/esm/colors/blueGrey.js
var blueGrey = {
  50: "#eceff1",
  100: "#cfd8dc",
  200: "#b0bec5",
  300: "#90a4ae",
  400: "#78909c",
  500: "#607d8b",
  600: "#546e7a",
  700: "#455a64",
  800: "#37474f",
  900: "#263238",
  A100: "#cfd8dc",
  A200: "#b0bec5",
  A400: "#78909c",
  A700: "#455a64"
};
var blueGrey_default = blueGrey;

// node_modules/@material-ui/core/esm/utils/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? "Material-UI: capitalize(string) expects a string argument." : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// node_modules/@material-ui/core/esm/utils/createChainedFunction.js
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.reduce(function(acc, func) {
    if (func == null) {
      return acc;
    }
    if (true) {
      if (typeof func !== "function") {
        console.error("Material-UI: Invalid Argument Type, must only provide functions, undefined, or null.");
      }
    }
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function() {
  });
}

// node_modules/@material-ui/core/esm/utils/createSvgIcon.js
init_extends();
var import_react = __toESM(require_react());

// node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
var styles = function styles2(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create("fill", {
        duration: theme.transitions.duration.shorter
      })
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },
    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },
    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: "inherit"
    },
    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },
    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon = React.forwardRef(function SvgIcon2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "inherit" : _props$color, _props$component = props.component, Component6 = _props$component === void 0 ? "svg" : _props$component, _props$fontSize = props.fontSize, fontSize = _props$fontSize === void 0 ? "medium" : _props$fontSize, htmlColor = props.htmlColor, titleAccess = props.titleAccess, _props$viewBox = props.viewBox, viewBox = _props$viewBox === void 0 ? "0 0 24 24" : _props$viewBox, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);
  return React.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, color !== "inherit" && classes["color".concat(capitalize(color))], fontSize !== "default" && fontSize !== "medium" && classes["fontSize".concat(capitalize(fontSize))]),
    focusable: "false",
    viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, other), children, titleAccess ? React.createElement("title", null, titleAccess) : null);
});
true ? SvgIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: import_prop_types.default.oneOf(["action", "disabled", "error", "inherit", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: chainPropTypes(import_prop_types.default.oneOf(["default", "inherit", "large", "medium", "small"]), function(props) {
    var fontSize = props.fontSize;
    if (fontSize === "default") {
      throw new Error('Material-UI: `fontSize="default"` is deprecated. Use `fontSize="medium"` instead.');
    }
    return null;
  }),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types.default.string,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this property.
   */
  shapeRendering: import_prop_types.default.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: import_prop_types.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = withStyles_default(styles, {
  name: "MuiSvgIcon"
})(SvgIcon);

// node_modules/@material-ui/core/esm/utils/createSvgIcon.js
function createSvgIcon(path, displayName) {
  var Component6 = function Component7(props, ref) {
    return import_react.default.createElement(SvgIcon_default, _extends({
      ref
    }, props), path);
  };
  if (true) {
    Component6.displayName = "".concat(displayName, "Icon");
  }
  Component6.muiName = SvgIcon_default.muiName;
  return import_react.default.memo(import_react.default.forwardRef(Component6));
}

// node_modules/@material-ui/core/esm/utils/debounce.js
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 166;
  var timeout;
  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var that = this;
    var later = function later2() {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = function() {
    clearTimeout(timeout);
  };
  return debounced;
}

// node_modules/@material-ui/core/esm/utils/deprecatedPropType.js
function deprecatedPropType(validator, reason) {
  if (false) {
    return function() {
      return null;
    };
  }
  return function(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || "<<anonymous>>";
    var propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== "undefined") {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }
    return null;
  };
}

// node_modules/@material-ui/core/esm/utils/isMuiElement.js
var React3 = __toESM(require_react());
function isMuiElement(element, muiNames) {
  return React3.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

// node_modules/@material-ui/core/esm/utils/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/@material-ui/core/esm/utils/ownerWindow.js
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc.defaultView || window;
}

// node_modules/@material-ui/core/esm/utils/requirePropFactory.js
function requirePropFactory(componentNameInError) {
  if (false) {
    return function() {
      return null;
    };
  }
  var requireProp = function requireProp2(requiredProp) {
    return function(props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;
      if (typeof props[propName] !== "undefined" && !props[requiredProp]) {
        return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }
      return null;
    };
  };
  return requireProp;
}

// node_modules/@material-ui/core/esm/utils/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@material-ui/core/esm/utils/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  var propFullNameSafe = propFullName || propName;
  if (typeof props[propName] !== "undefined") {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }
  return null;
}

// node_modules/@material-ui/core/esm/utils/useControlled.js
var React4 = __toESM(require_react());
function useControlled(_ref6) {
  var controlled = _ref6.controlled, defaultProp = _ref6.default, name = _ref6.name, _ref$state = _ref6.state, state = _ref$state === void 0 ? "value" : _ref$state;
  var _React$useRef = React4.useRef(controlled !== void 0), isControlled = _React$useRef.current;
  var _React$useState = React4.useState(defaultProp), valueState = _React$useState[0], setValue = _React$useState[1];
  var value = isControlled ? controlled : valueState;
  if (true) {
    React4.useEffect(function() {
      if (isControlled !== (controlled !== void 0)) {
        console.error(["Material-UI: A component is changing the ".concat(isControlled ? "" : "un", "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? "un" : "", "controlled."), "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled ".concat(name, " ") + "element for the lifetime of the component.", "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [controlled]);
    var _React$useRef2 = React4.useRef(defaultProp), defaultValue = _React$useRef2.current;
    React4.useEffect(function() {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(["Material-UI: A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  var setValueIfUncontrolled = React4.useCallback(function(newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

// node_modules/@material-ui/core/esm/utils/useEventCallback.js
var React5 = __toESM(require_react());
var useEnhancedEffect = typeof window !== "undefined" ? React5.useLayoutEffect : React5.useEffect;
function useEventCallback(fn) {
  var ref = React5.useRef(fn);
  useEnhancedEffect(function() {
    ref.current = fn;
  });
  return React5.useCallback(function() {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

// node_modules/@material-ui/core/esm/utils/useForkRef.js
var React6 = __toESM(require_react());
function useForkRef(refA, refB) {
  return React6.useMemo(function() {
    if (refA == null && refB == null) {
      return null;
    }
    return function(refValue) {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// node_modules/@material-ui/core/esm/utils/unstable_useId.js
var React7 = __toESM(require_react());
function useId(idOverride) {
  var _React$useState = React7.useState(idOverride), defaultId = _React$useState[0], setDefaultId = _React$useState[1];
  var id = idOverride || defaultId;
  React7.useEffect(function() {
    if (defaultId == null) {
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}

// node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js
var React8 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node) {
  var type = node.type, tagName = node.tagName;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  var target = event.target;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function handleBlurVisible() {
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
    hadFocusVisibleRecently = false;
  }, 100);
}
function useIsFocusVisible() {
  var ref = React8.useCallback(function(instance) {
    var node = ReactDOM.findDOMNode(instance);
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  if (true) {
    React8.useDebugValue(isFocusVisible);
  }
  return {
    isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref
  };
}

// node_modules/@material-ui/core/esm/Accordion/Accordion.js
init_extends();

// node_modules/@babel/runtime/helpers/esm/toArray.js
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

// node_modules/@material-ui/core/esm/Accordion/Accordion.js
var React12 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types4 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Collapse/Collapse.js
init_extends();
var React9 = __toESM(require_react());
init_clsx_m();
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/transitions/utils.js
var reflow = function reflow2(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

// node_modules/@material-ui/core/esm/Collapse/Collapse.js
var styles3 = function styles4(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 0,
      overflow: "hidden",
      transition: theme.transitions.create("height")
    },
    /* Styles applied to the root element when the transition has entered. */
    entered: {
      height: "auto",
      overflow: "visible"
    },
    /* Styles applied to the root element when the transition has exited and `collapsedSize` != 0px. */
    hidden: {
      visibility: "hidden"
    },
    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: "flex"
    },
    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: "100%"
    }
  };
};
var Collapse = React9.forwardRef(function Collapse2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, collapsedHeight = props.collapsedHeight, _props$collapsedSize = props.collapsedSize, collapsedSizeProp = _props$collapsedSize === void 0 ? "0px" : _props$collapsedSize, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$disableStrictM = props.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style = props.style, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? duration.standard : _props$timeout, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition_default : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "classes", "className", "collapsedHeight", "collapsedSize", "component", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var theme = useTheme2();
  var timer = React9.useRef();
  var wrapperRef = React9.useRef(null);
  var autoTransitionDuration = React9.useRef();
  var collapsedSize = typeof (collapsedHeight || collapsedSizeProp) === "number" ? "".concat(collapsedHeight || collapsedSizeProp, "px") : collapsedHeight || collapsedSizeProp;
  React9.useEffect(function() {
    return function() {
      clearTimeout(timer.current);
    };
  }, []);
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = React9.useRef(null);
  var handleRef = useForkRef(ref, enableStrictModeCompat ? nodeRef : void 0);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref6 = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref24 = _slicedToArray(_ref6, 2), node = _ref24[0], isAppearing = _ref24[1];
        if (isAppearing === void 0) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    node.style.height = collapsedSize;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function(node, isAppearing) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    var _getTransitionProps = getTransitionProps({
      style,
      timeout
    }, {
      mode: "enter"
    }), transitionDuration = _getTransitionProps.duration;
    if (timeout === "auto") {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : "".concat(transitionDuration, "ms");
    }
    node.style.height = "".concat(wrapperHeight, "px");
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(function(node, isAppearing) {
    node.style.height = "auto";
    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  var handleExit = normalizedTransitionCallback(function(node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = "".concat(wrapperHeight, "px");
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var handleExiting = normalizedTransitionCallback(function(node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    var _getTransitionProps2 = getTransitionProps({
      style,
      timeout
    }, {
      mode: "exit"
    }), transitionDuration = _getTransitionProps2.duration;
    if (timeout === "auto") {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : "".concat(transitionDuration, "ms");
    }
    node.style.height = collapsedSize;
    if (onExiting) {
      onExiting(node);
    }
  });
  var addEndListener = function addEndListener2(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;
    if (timeout === "auto") {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };
  return React9.createElement(TransitionComponent, _extends({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    timeout: timeout === "auto" ? null : timeout
  }, other), function(state, childProps) {
    return React9.createElement(Component6, _extends({
      className: clsx_m_default(classes.root, classes.container, className, {
        "entered": classes.entered,
        "exited": !inProp && collapsedSize === "0px" && classes.hidden
      }[state]),
      style: _extends({
        minHeight: collapsedSize
      }, style),
      ref: handleRef
    }, childProps), React9.createElement("div", {
      className: classes.wrapper,
      ref: wrapperRef
    }, React9.createElement("div", {
      className: classes.wrapperInner
    }, children)));
  });
});
true ? Collapse.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content node to be collapsed.
   */
  children: import_prop_types2.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: chainPropTypes(import_prop_types2.default.object, function(props) {
    if (props.classes && props.classes.container) {
      throw new Error(["Material-UI: the classes.container key is deprecated.", "Use `classes.root` instead", "The name of the pseudo-class was changed for consistency."].join("\n"));
    }
    return null;
  }),
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The height of the container when collapsed.
   * @deprecated The prop was renamed to support the addition of horizontal orientation, use `collapsedSize` instead.
   */
  collapsedHeight: deprecatedPropType(import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]), "The prop was renamed to support the vertical orientation, use `collapsedSize` instead"),
  /**
   * The height of the container when collapsed.
   */
  collapsedSize: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the passed `Component`.
   */
  disableStrictModeCompat: import_prop_types2.default.bool,
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types2.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types2.default.func,
  /**
   * @ignore
   */
  style: import_prop_types2.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["auto"]), import_prop_types2.default.number, import_prop_types2.default.shape({
    appear: import_prop_types2.default.number,
    enter: import_prop_types2.default.number,
    exit: import_prop_types2.default.number
  })])
} : void 0;
Collapse.muiSupportAuto = true;
var Collapse_default = withStyles_default(styles3, {
  name: "MuiCollapse"
})(Collapse);

// node_modules/@material-ui/core/esm/Paper/Paper.js
init_extends();
var React10 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_clsx_m();
var styles5 = function styles6(theme) {
  var elevations = {};
  theme.shadows.forEach(function(shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return _extends({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create("box-shadow")
    },
    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = React10.forwardRef(function Paper2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$square = props.square, square = _props$square === void 0 ? false : _props$square, _props$elevation = props.elevation, elevation = _props$elevation === void 0 ? 1 : _props$elevation, _props$variant = props.variant, variant = _props$variant === void 0 ? "elevation" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation", "variant"]);
  return React10.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, variant === "outlined" ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref
  }, other));
});
true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types3.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types3.default.object,
  /**
   * @ignore
   */
  className: import_prop_types3.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types3.default.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: chainPropTypes(import_prop_types3.default.number, function(props) {
    var classes = props.classes, elevation = props.elevation;
    if (classes === void 0) {
      return null;
    }
    if (elevation != null && classes["elevation".concat(elevation)] === void 0) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   */
  square: import_prop_types3.default.bool,
  /**
   * The variant to use.
   */
  variant: import_prop_types3.default.oneOf(["elevation", "outlined"])
} : void 0;
var Paper_default = withStyles_default(styles5, {
  name: "MuiPaper"
})(Paper);

// node_modules/@material-ui/core/esm/Accordion/AccordionContext.js
var React11 = __toESM(require_react());
var AccordionContext = React11.createContext({});
if (true) {
  AccordionContext.displayName = "AccordionContext";
}
var AccordionContext_default = AccordionContext;

// node_modules/@material-ui/core/esm/Accordion/Accordion.js
var styles7 = function styles8(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      transition: theme.transitions.create(["margin"], transition),
      "&:before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(["opacity", "background-color"], transition)
      },
      "&:first-child": {
        "&:before": {
          display: "none"
        }
      },
      "&$expanded": {
        margin: "16px 0",
        "&:first-child": {
          marginTop: 0
        },
        "&:last-child": {
          marginBottom: 0
        },
        "&:before": {
          opacity: 0
        }
      },
      "&$expanded + &": {
        "&:before": {
          display: "none"
        }
      },
      "&$disabled": {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      "&:first-child": {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      "&:last-child": {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },
    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var Accordion = React12.forwardRef(function Accordion2(props, ref) {
  var childrenProp = props.children, classes = props.classes, className = props.className, _props$defaultExpande = props.defaultExpanded, defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, expandedProp = props.expanded, onChange = props.onChange, _props$square = props.square, square = _props$square === void 0 ? false : _props$square, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Collapse_default : _props$TransitionComp, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);
  var _useControlled = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "Accordion",
    state: "expanded"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), expanded = _useControlled2[0], setExpandedState = _useControlled2[1];
  var handleChange = React12.useCallback(function(event) {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  var _React$Children$toArr = React12.Children.toArray(childrenProp), _React$Children$toArr2 = _toArray(_React$Children$toArr), summary = _React$Children$toArr2[0], children = _React$Children$toArr2.slice(1);
  var contextValue = React12.useMemo(function() {
    return {
      expanded,
      disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return React12.createElement(Paper_default, _extends({
    className: clsx_m_default(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref,
    square
  }, other), React12.createElement(AccordionContext_default.Provider, {
    value: contextValue
  }, summary), React12.createElement(TransitionComponent, _extends({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), React12.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props["aria-controls"],
    role: "region"
  }, children)));
});
true ? Accordion.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the accordion.
   */
  children: chainPropTypes(import_prop_types4.default.node.isRequired, function(props) {
    var summary = React12.Children.toArray(props.children)[0];
    if ((0, import_react_is.isFragment)(summary)) {
      return new Error("Material-UI: The Accordion doesn't accept a Fragment as a child. Consider providing an array instead.");
    }
    if (!React12.isValidElement(summary)) {
      return new Error("Material-UI: Expected the first child of Accordion to be a valid element.");
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types4.default.object,
  /**
   * @ignore
   */
  className: import_prop_types4.default.string,
  /**
   * If `true`, expands the accordion by default.
   */
  defaultExpanded: import_prop_types4.default.bool,
  /**
   * If `true`, the accordion will be displayed in a disabled state.
   */
  disabled: import_prop_types4.default.bool,
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded: import_prop_types4.default.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: import_prop_types4.default.func,
  /**
   * If `true`, rounded corners are disabled.
   */
  square: import_prop_types4.default.bool,
  /**
   * The component used for the collapse effect.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: import_prop_types4.default.elementType,
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: import_prop_types4.default.object
} : void 0;
var Accordion_default = withStyles_default(styles7, {
  name: "MuiAccordion"
})(Accordion);

// node_modules/@material-ui/core/esm/AccordionActions/AccordionActions.js
init_extends();
var React13 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_clsx_m();
var styles9 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end"
  },
  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    "& > :not(:first-child)": {
      marginLeft: 8
    }
  }
};
var AccordionActions = React13.forwardRef(function AccordionActions2(props, ref) {
  var classes = props.classes, className = props.className, _props$disableSpacing = props.disableSpacing, disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing, other = _objectWithoutProperties(props, ["classes", "className", "disableSpacing"]);
  return React13.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, !disableSpacing && classes.spacing),
    ref
  }, other));
});
true ? AccordionActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types5.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types5.default.object,
  /**
   * @ignore
   */
  className: import_prop_types5.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: import_prop_types5.default.bool
} : void 0;
var AccordionActions_default = withStyles_default(styles9, {
  name: "MuiAccordionActions"
})(AccordionActions);

// node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
init_extends();
var React14 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_clsx_m();
var styles10 = function styles11(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails = React14.forwardRef(function AccordionDetails2(props, ref) {
  var classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["classes", "className"]);
  return React14.createElement("div", _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other));
});
true ? AccordionDetails.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the accordion details.
   */
  children: import_prop_types6.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types6.default.object,
  /**
   * @ignore
   */
  className: import_prop_types6.default.string
} : void 0;
var AccordionDetails_default = withStyles_default(styles10, {
  name: "MuiAccordionDetails"
})(AccordionDetails);

// node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
init_extends();
var React19 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js
init_extends();
var React17 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
var ReactDOM2 = __toESM(require_react_dom());
init_clsx_m();

// node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js
init_extends();
var React16 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/ButtonBase/Ripple.js
var React15 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_clsx_m();
var useEnhancedEffect2 = typeof window === "undefined" ? React15.useEffect : React15.useLayoutEffect;
function Ripple(props) {
  var classes = props.classes, _props$pulsate = props.pulsate, pulsate = _props$pulsate === void 0 ? false : _props$pulsate, rippleX = props.rippleX, rippleY = props.rippleY, rippleSize = props.rippleSize, inProp = props.in, _props$onExited = props.onExited, onExited = _props$onExited === void 0 ? function() {
  } : _props$onExited, timeout = props.timeout;
  var _React$useState = React15.useState(false), leaving = _React$useState[0], setLeaving = _React$useState[1];
  var rippleClassName = clsx_m_default(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx_m_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = useEventCallback(onExited);
  useEnhancedEffect2(function() {
    if (!inProp) {
      setLeaving(true);
      var timeoutId = setTimeout(handleExited, timeout);
      return function() {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [handleExited, inProp, timeout]);
  return React15.createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, React15.createElement("span", {
    className: childClassName
  }));
}
true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types7.default.object.isRequired,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: import_prop_types7.default.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: import_prop_types7.default.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: import_prop_types7.default.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: import_prop_types7.default.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: import_prop_types7.default.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: import_prop_types7.default.number,
  /**
   * exit delay
   */
  timeout: import_prop_types7.default.number.isRequired
} : void 0;
var Ripple_default = Ripple;

// node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js
var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles12 = function styles13(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit"
    },
    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      opacity: 0,
      position: "absolute"
    },
    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: "scale(1)",
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },
    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: "currentColor"
    },
    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: "absolute",
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    "@keyframes enter": {
      "0%": {
        transform: "scale(0)",
        opacity: 0.1
      },
      "100%": {
        transform: "scale(1)",
        opacity: 0.3
      }
    },
    "@keyframes exit": {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      }
    },
    "@keyframes pulsate": {
      "0%": {
        transform: "scale(1)"
      },
      "50%": {
        transform: "scale(0.92)"
      },
      "100%": {
        transform: "scale(1)"
      }
    }
  };
};
var TouchRipple = React16.forwardRef(function TouchRipple2(props, ref) {
  var _props$center = props.center, centerProp = _props$center === void 0 ? false : _props$center, classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["center", "classes", "className"]);
  var _React$useState = React16.useState([]), ripples = _React$useState[0], setRipples = _React$useState[1];
  var nextKey = React16.useRef(0);
  var rippleCallback = React16.useRef(null);
  React16.useEffect(function() {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  var ignoringMouseDown = React16.useRef(false);
  var startTimer = React16.useRef(null);
  var startTimerCommit = React16.useRef(null);
  var container = React16.useRef(null);
  React16.useEffect(function() {
    return function() {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = React16.useCallback(function(params) {
    var pulsate2 = params.pulsate, rippleX = params.rippleX, rippleY = params.rippleY, rippleSize = params.rippleSize, cb = params.cb;
    setRipples(function(oldRipples) {
      return [].concat(_toConsumableArray(oldRipples), [React16.createElement(Ripple_default, {
        key: nextKey.current,
        classes,
        timeout: DURATION,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = React16.useCallback(function() {
    var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : void 0;
    var _options$pulsate = options.pulsate, pulsate2 = _options$pulsate === void 0 ? false : _options$pulsate, _options$center = options.center, center = _options$center === void 0 ? centerProp || options.pulsate : _options$center, _options$fakeElement = options.fakeElement, fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;
    if (event.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    var rippleX;
    var rippleY;
    var rippleSize;
    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref6 = event.touches ? event.touches[0] : event, clientX = _ref6.clientX, clientY = _ref6.clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    }
    if (event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = function() {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.current = setTimeout(function() {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = React16.useCallback(function() {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = React16.useCallback(function(event, cb) {
    clearTimeout(startTimer.current);
    if (event.type === "touchend" && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function() {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples(function(oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  React16.useImperativeHandle(ref, function() {
    return {
      pulsate,
      start,
      stop
    };
  }, [pulsate, start, stop]);
  return React16.createElement("span", _extends({
    className: clsx_m_default(classes.root, className),
    ref: container
  }, other), React16.createElement(TransitionGroup_default, {
    component: null,
    exit: true
  }, ripples));
});
true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: import_prop_types8.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types8.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string
} : void 0;
var TouchRipple_default = withStyles_default(styles12, {
  flip: false,
  name: "MuiTouchRipple"
})(React16.memo(TouchRipple));

// node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js
var styles14 = {
  /* Styles applied to the root element. */
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    "-moz-appearance": "none",
    // Reset
    "-webkit-appearance": "none",
    // Reset
    textDecoration: "none",
    // So we take precedent over the style of a native <a /> element.
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    },
    "&$disabled": {
      pointerEvents: "none",
      // Disable link interactions
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  },
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {}
};
var ButtonBase = React17.forwardRef(function ButtonBase2(props, ref) {
  var action = props.action, buttonRefProp = props.buttonRef, _props$centerRipple = props.centerRipple, centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple, children = props.children, classes = props.classes, className = props.className, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableRipple = props.disableRipple, disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple, _props$disableTouchRi = props.disableTouchRipple, disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi, _props$focusRipple = props.focusRipple, focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple, focusVisibleClassName = props.focusVisibleClassName, onBlur = props.onBlur, onClick = props.onClick, onFocus = props.onFocus, onFocusVisible = props.onFocusVisible, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onMouseDown = props.onMouseDown, onMouseLeave = props.onMouseLeave, onMouseUp = props.onMouseUp, onTouchEnd = props.onTouchEnd, onTouchMove = props.onTouchMove, onTouchStart = props.onTouchStart, onDragLeave = props.onDragLeave, _props$tabIndex = props.tabIndex, tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex, TouchRippleProps = props.TouchRippleProps, _props$type = props.type, type = _props$type === void 0 ? "button" : _props$type, other = _objectWithoutProperties(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);
  var buttonRef = React17.useRef(null);
  function getButtonNode() {
    return ReactDOM2.findDOMNode(buttonRef.current);
  }
  var rippleRef = React17.useRef(null);
  var _React$useState = React17.useState(false), focusVisible = _React$useState[0], setFocusVisible = _React$useState[1];
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  React17.useImperativeHandle(action, function() {
    return {
      focusVisible: function focusVisible2() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  React17.useEffect(function() {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);
  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : disableTouchRipple;
    return useEventCallback(function(event) {
      if (eventCallback) {
        eventCallback(event);
      }
      var ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  var handleMouseDown = useRippleHandler("start", onMouseDown);
  var handleDragLeave = useRippleHandler("stop", onDragLeave);
  var handleMouseUp = useRippleHandler("stop", onMouseUp);
  var handleMouseLeave = useRippleHandler("stop", function(event) {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler("start", onTouchStart);
  var handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  var handleTouchMove = useRippleHandler("stop", onTouchMove);
  var handleBlur = useRippleHandler("stop", function(event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = useEventCallback(function(event) {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible2(event)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  var isNonNativeButton = function isNonNativeButton2() {
    var button = getButtonNode();
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  var keydownRef = React17.useRef(false);
  var handleKeyDown2 = useEventCallback(function(event) {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function() {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = useEventCallback(function(event) {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function() {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;
  if (ComponentProp === "button" && other.href) {
    ComponentProp = "a";
  }
  var buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== "a" || !other.href) {
      buttonProps.role = "button";
    }
    buttonProps["aria-disabled"] = disabled;
  }
  var handleUserRef = useForkRef(buttonRefProp, ref);
  var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  var handleRef = useForkRef(handleUserRef, handleOwnRef);
  var _React$useState2 = React17.useState(false), mountedState = _React$useState2[0], setMountedState = _React$useState2[1];
  React17.useEffect(function() {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;
  if (true) {
    React17.useEffect(function() {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(["Material-UI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
      }
    }, [enableTouchRipple]);
  }
  return React17.createElement(ComponentProp, _extends({
    className: clsx_m_default(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ? (
    /* TouchRipple is only needed client-side, x2 boost on the server. */
    React17.createElement(TouchRipple_default, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps))
  ) : null);
});
true ? ButtonBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType_default,
  /**
   * @ignore
   *
   * Use that prop to pass a ref to the native button component.
   * @deprecated Use `ref` instead.
   */
  buttonRef: deprecatedPropType(refType_default, "Use `ref` instead."),
  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: import_prop_types9.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types9.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types9.default.object,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef_default,
  /**
   * If `true`, the base button will be disabled.
   */
  disabled: import_prop_types9.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: import_prop_types9.default.bool,
  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: import_prop_types9.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   */
  focusRipple: import_prop_types9.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types9.default.string,
  /**
   * @ignore
   */
  href: import_prop_types9.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onDragLeave: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types9.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onMouseUp: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onTouchEnd: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onTouchMove: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onTouchStart: import_prop_types9.default.func,
  /**
   * @ignore
   */
  tabIndex: import_prop_types9.default.oneOfType([import_prop_types9.default.number, import_prop_types9.default.string]),
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types9.default.object,
  /**
   * @ignore
   */
  type: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["button", "reset", "submit"]), import_prop_types9.default.string])
} : void 0;
var ButtonBase_default = withStyles_default(styles14, {
  name: "MuiButtonBase"
})(ButtonBase);

// node_modules/@material-ui/core/esm/IconButton/IconButton.js
init_extends();
var React18 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
init_clsx_m();
var styles15 = function styles16(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: "50%",
      overflow: "visible",
      // Explicitly set the default value to solve a bug on IE 11.
      color: theme.palette.action.active,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        backgroundColor: "transparent",
        color: theme.palette.action.disabled
      }
    },
    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -12,
      "$sizeSmall&": {
        marginLeft: -3
      }
    },
    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -12,
      "$sizeSmall&": {
        marginRight: -3
      }
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit"
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },
    /* Styles applied to the children container element. */
    label: {
      width: "100%",
      display: "flex",
      alignItems: "inherit",
      justifyContent: "inherit"
    }
  };
};
var IconButton = React18.forwardRef(function IconButton2(props, ref) {
  var _props$edge = props.edge, edge = _props$edge === void 0 ? false : _props$edge, children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
  return React18.createElement(ButtonBase_default, _extends({
    className: clsx_m_default(classes.root, className, color !== "default" && classes["color".concat(capitalize(color))], disabled && classes.disabled, size === "small" && classes["size".concat(capitalize(size))], {
      "start": classes.edgeStart,
      "end": classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    ref
  }, other), React18.createElement("span", {
    className: classes.label
  }, children));
});
true ? IconButton.propTypes = {
  /**
   * The icon element.
   */
  children: chainPropTypes(import_prop_types10.default.node, function(props) {
    var found = React18.Children.toArray(props.children).some(function(child) {
      return React18.isValidElement(child) && child.props.onClick;
    });
    if (found) {
      return new Error(["Material-UI: You are providing an onClick event listener to a child of a button element.", "Firefox will never trigger the event.", "You should move the onClick listener to the parent button element.", "https://github.com/mui-org/material-ui/issues/13957"].join("\n"));
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types10.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types10.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types10.default.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: import_prop_types10.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: import_prop_types10.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: import_prop_types10.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   */
  edge: import_prop_types10.default.oneOf(["start", "end", false]),
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: import_prop_types10.default.oneOf(["small", "medium"])
} : void 0;
var IconButton_default = withStyles_default(styles15, {
  name: "MuiIconButton"
})(IconButton);

// node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var styles17 = function styles18(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      minHeight: 8 * 6,
      transition: theme.transitions.create(["min-height", "background-color"], transition),
      padding: theme.spacing(0, 2),
      "&:hover:not($disabled)": {
        cursor: "pointer"
      },
      "&$expanded": {
        minHeight: 64
      },
      "&$focused, &$focusVisible": {
        backgroundColor: theme.palette.action.focus
      },
      "&$disabled": {
        opacity: theme.palette.action.disabledOpacity
      }
    },
    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},
    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focused: {},
    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the children wrapper element. */
    content: {
      display: "flex",
      flexGrow: 1,
      transition: theme.transitions.create(["margin"], transition),
      margin: "12px 0",
      "&$expanded": {
        margin: "20px 0"
      }
    },
    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", transition),
      "&:hover": {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: "transparent"
      },
      "&$expanded": {
        transform: "rotate(180deg)"
      }
    }
  };
};
var AccordionSummary = React19.forwardRef(function AccordionSummary2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, expandIcon = props.expandIcon, focusVisibleClassName = props.focusVisibleClassName, _props$IconButtonProp = props.IconButtonProps, IconButtonProps = _props$IconButtonProp === void 0 ? {} : _props$IconButtonProp, onClick = props.onClick, other = _objectWithoutProperties(props, ["children", "classes", "className", "expandIcon", "focusVisibleClassName", "IconButtonProps", "onClick"]);
  var _React$useContext = React19.useContext(AccordionContext_default), _React$useContext$dis = _React$useContext.disabled, disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis, expanded = _React$useContext.expanded, toggle = _React$useContext.toggle;
  var handleChange = function handleChange2(event) {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  return React19.createElement(ButtonBase_default, _extends({
    focusRipple: false,
    disableRipple: true,
    disabled,
    component: "div",
    "aria-expanded": expanded,
    className: clsx_m_default(classes.root, className, disabled && classes.disabled, expanded && classes.expanded),
    focusVisibleClassName: clsx_m_default(classes.focusVisible, classes.focused, focusVisibleClassName),
    onClick: handleChange,
    ref
  }, other), React19.createElement("div", {
    className: clsx_m_default(classes.content, expanded && classes.expanded)
  }, children), expandIcon && React19.createElement(IconButton_default, _extends({
    className: clsx_m_default(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
true ? AccordionSummary.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the accordion summary.
   */
  children: import_prop_types11.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: chainPropTypes(import_prop_types11.default.object, function(props) {
    if (props.classes.focused !== void 0 && props.classes.focused.indexOf(" ") !== -1) {
      return new Error(["Material-UI: The `classes.focused` key is deprecated.", "Use `classes.focusVisible` instead.", "The name of the pseudo-class was changed for consistency."].join("\n"));
    }
    return null;
  }),
  /**
   * @ignore
   */
  className: import_prop_types11.default.string,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: import_prop_types11.default.node,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types11.default.string,
  /**
   * Props applied to the `IconButton` element wrapping the expand icon.
   */
  IconButtonProps: import_prop_types11.default.object,
  /**
   * @ignore
   */
  onClick: import_prop_types11.default.func
} : void 0;
var AccordionSummary_default = withStyles_default(styles17, {
  name: "MuiAccordionSummary"
})(AccordionSummary);

// node_modules/@material-ui/core/esm/AppBar/AppBar.js
init_extends();
var React20 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
init_clsx_m();
var styles19 = function styles20(theme) {
  var backgroundColorDefault = theme.palette.type === "light" ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },
    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: "fixed",
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute"
      }
    },
    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: "absolute",
      top: 0,
      left: "auto",
      right: 0
    },
    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: "sticky",
      top: 0,
      left: "auto",
      right: 0
    },
    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: "static"
    },
    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: "relative"
    },
    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit"
    },
    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: "transparent",
      color: "inherit"
    }
  };
};
var AppBar = React20.forwardRef(function AppBar2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$position = props.position, position = _props$position === void 0 ? "fixed" : _props$position, other = _objectWithoutProperties(props, ["classes", "className", "color", "position"]);
  return React20.createElement(Paper_default, _extends({
    square: true,
    component: "header",
    elevation: 4,
    className: clsx_m_default(classes.root, classes["position".concat(capitalize(position))], classes["color".concat(capitalize(color))], className, position === "fixed" && "mui-fixed"),
    ref
  }, other));
});
true ? AppBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types12.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types12.default.object,
  /**
   * @ignore
   */
  className: import_prop_types12.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types12.default.oneOf(["default", "inherit", "primary", "secondary", "transparent"]),
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: import_prop_types12.default.oneOf(["absolute", "fixed", "relative", "static", "sticky"])
} : void 0;
var AppBar_default = withStyles_default(styles19, {
  name: "MuiAppBar"
})(AppBar);

// node_modules/@material-ui/core/esm/Avatar/Avatar.js
init_extends();
var React22 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/internal/svg-icons/Person.js
var React21 = __toESM(require_react());
var Person_default = createSvgIcon(React21.createElement("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");

// node_modules/@material-ui/core/esm/Avatar/Avatar.js
var styles21 = function styles22(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none"
    },
    /* Styles applied to the root element if not `src` or `srcSet`. */
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    /* Styles applied to the root element if `variant="circle"`. */
    circle: {},
    /* Styles applied to the root element if `variant="circular"`. */
    circular: {},
    /* Styles applied to the root element if `variant="rounded"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    /* Styles applied to the root element if `variant="square"`. */
    square: {
      borderRadius: 0
    },
    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: "100%",
      height: "100%",
      textAlign: "center",
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: "cover",
      // Hide alt text.
      color: "transparent",
      // Hide the image broken icon, only works on Chrome.
      textIndent: 1e4
    },
    /* Styles applied to the fallback icon */
    fallback: {
      width: "75%",
      height: "75%"
    }
  };
};
function useLoaded(_ref6) {
  var src = _ref6.src, srcSet = _ref6.srcSet;
  var _React$useState = React22.useState(false), loaded = _React$useState[0], setLoaded = _React$useState[1];
  React22.useEffect(function() {
    if (!src && !srcSet) {
      return void 0;
    }
    setLoaded(false);
    var active = true;
    var image = new Image();
    image.src = src;
    image.srcSet = srcSet;
    image.onload = function() {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    };
    image.onerror = function() {
      if (!active) {
        return;
      }
      setLoaded("error");
    };
    return function() {
      active = false;
    };
  }, [src, srcSet]);
  return loaded;
}
var Avatar = React22.forwardRef(function Avatar2(props, ref) {
  var alt = props.alt, childrenProp = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, imgProps = props.imgProps, sizes = props.sizes, src = props.src, srcSet = props.srcSet, _props$variant = props.variant, variant = _props$variant === void 0 ? "circular" : _props$variant, other = _objectWithoutProperties(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);
  var children = null;
  var loaded = useLoaded({
    src,
    srcSet
  });
  var hasImg = src || srcSet;
  var hasImgNotFailing = hasImg && loaded !== "error";
  if (hasImgNotFailing) {
    children = React22.createElement("img", _extends({
      alt,
      src,
      srcSet,
      sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = React22.createElement(Person_default, {
      className: classes.fallback
    });
  }
  return React22.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, classes.system, classes[variant], className, !hasImgNotFailing && classes.colorDefault),
    ref
  }, other), children);
});
true ? Avatar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: import_prop_types13.default.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types13.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: chainPropTypes(import_prop_types13.default.object, function(props) {
    var classes = props.classes;
    if (classes == null) {
      return null;
    }
    if (classes.circle != null && // 2 classnames? one from withStyles the other must be custom
    classes.circle.split(" ").length > 1) {
      throw new Error("Material-UI: The `circle` class is deprecated. Use `circular` instead.");
    }
    return null;
  }),
  /**
   * @ignore
   */
  className: import_prop_types13.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types13.default.elementType,
  /**
   * Attributes applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   */
  imgProps: import_prop_types13.default.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: import_prop_types13.default.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: import_prop_types13.default.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: import_prop_types13.default.string,
  /**
   * The shape of the avatar.
   */
  variant: chainPropTypes(import_prop_types13.default.oneOf(["circle", "circular", "rounded", "square"]), function(props) {
    var variant = props.variant;
    if (variant === "circle") {
      throw new Error('Material-UI: `variant="circle"` is deprecated. Use `variant="circular"` instead.');
    }
    return null;
  })
} : void 0;
var Avatar_default = withStyles_default(styles21, {
  name: "MuiAvatar"
})(Avatar);

// node_modules/@material-ui/core/esm/Backdrop/Backdrop.js
init_extends();
var React24 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Fade/Fade.js
init_extends();
var React23 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
var styles23 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
var Fade = React23.forwardRef(function Fade2(props, ref) {
  var children = props.children, _props$disableStrictM = props.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style = props.style, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition_default : _props$TransitionComp, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout, other = _objectWithoutProperties(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);
  var theme = useTheme2();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = React23.useRef(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : void 0, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref6 = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref24 = _slicedToArray(_ref6, 2), node = _ref24[0], isAppearing = _ref24[1];
        if (isAppearing === void 0) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    reflow(node);
    var transitionProps = getTransitionProps({
      style,
      timeout
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node) {
    var transitionProps = getTransitionProps({
      style,
      timeout
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return React23.createElement(TransitionComponent, _extends({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout
  }, other), function(state, childProps) {
    return React23.cloneElement(children, _extends({
      style: _extends({
        opacity: 0,
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles23[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
true ? Fade.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: import_prop_types14.default.element,
  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: import_prop_types14.default.bool,
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types14.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types14.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types14.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types14.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types14.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types14.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types14.default.func,
  /**
   * @ignore
   */
  style: import_prop_types14.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.shape({
    appear: import_prop_types14.default.number,
    enter: import_prop_types14.default.number,
    exit: import_prop_types14.default.number
  })])
} : void 0;
var Fade_default = Fade;

// node_modules/@material-ui/core/esm/Backdrop/Backdrop.js
var styles24 = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  },
  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: "transparent"
  }
};
var Backdrop = React24.forwardRef(function Backdrop2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$invisible = props.invisible, invisible = _props$invisible === void 0 ? false : _props$invisible, open = props.open, transitionDuration = props.transitionDuration, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Fade_default : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);
  return React24.createElement(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other), React24.createElement("div", {
    className: clsx_m_default(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref
  }, children));
});
true ? Backdrop.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types15.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types15.default.object,
  /**
   * @ignore
   */
  className: import_prop_types15.default.string,
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: import_prop_types15.default.bool,
  /**
   * If `true`, the backdrop is open.
   */
  open: import_prop_types15.default.bool.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.shape({
    appear: import_prop_types15.default.number,
    enter: import_prop_types15.default.number,
    exit: import_prop_types15.default.number
  })])
} : void 0;
var Backdrop_default = withStyles_default(styles24, {
  name: "MuiBackdrop"
})(Backdrop);

// node_modules/@material-ui/core/esm/Badge/Badge.js
init_extends();
var React25 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
init_clsx_m();
var RADIUS_STANDARD = 10;
var RADIUS_DOT = 4;
var styles25 = function styles26(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      display: "inline-flex",
      // For correct alignment with the text.
      verticalAlign: "middle",
      flexShrink: 0
    },
    /* Styles applied to the badge `span` element. */
    badge: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      position: "absolute",
      boxSizing: "border-box",
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(12),
      minWidth: RADIUS_STANDARD * 2,
      lineHeight: 1,
      padding: "0 6px",
      height: RADIUS_STANDARD * 2,
      borderRadius: RADIUS_STANDARD,
      zIndex: 1,
      // Render the badge on top of potential ripples.
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    },
    /* Styles applied to the root element if `variant="dot"`. */
    dot: {
      borderRadius: RADIUS_DOT,
      height: RADIUS_DOT * 2,
      minWidth: RADIUS_DOT * 2,
      padding: 0
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangle"`. */
    anchorOriginTopRightRectangle: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      "&$invisible": {
        transform: "scale(0) translate(50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangular"`. */
    anchorOriginTopRightRectangular: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      "&$invisible": {
        transform: "scale(0) translate(50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangle"`. */
    anchorOriginBottomRightRectangle: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      "&$invisible": {
        transform: "scale(0) translate(50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangular"`. */
    anchorOriginBottomRightRectangular: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      "&$invisible": {
        transform: "scale(0) translate(50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangle"`. */
    anchorOriginTopLeftRectangle: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangular"`. */
    anchorOriginTopLeftRectangular: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangle"`. */
    anchorOriginBottomLeftRectangle: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangular"`. */
    anchorOriginBottomLeftRectangular: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="circle"`. */
    anchorOriginTopRightCircle: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      "&$invisible": {
        transform: "scale(0) translate(50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="circular"`. */
    anchorOriginTopRightCircular: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      "&$invisible": {
        transform: "scale(0) translate(50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circle"`. */
    anchorOriginBottomRightCircle: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      "&$invisible": {
        transform: "scale(0) translate(50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circular"`. */
    anchorOriginBottomRightCircular: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      "&$invisible": {
        transform: "scale(0) translate(50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="circle"`. */
    anchorOriginTopLeftCircle: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="circular"`. */
    anchorOriginTopLeftCircular: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circle"`. */
    anchorOriginBottomLeftCircle: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circular"`. */
    anchorOriginBottomLeftCircular: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, 50%)"
      }
    },
    /* Pseudo-class to the badge `span` element if `invisible={true}`. */
    invisible: {
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  };
};
var Badge = React25.forwardRef(function Badge2(props, ref) {
  var _props$anchorOrigin = props.anchorOrigin, anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: "top",
    horizontal: "right"
  } : _props$anchorOrigin, badgeContent = props.badgeContent, children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, ComponentProp = _props$component === void 0 ? "span" : _props$component, invisibleProp = props.invisible, _props$max = props.max, max = _props$max === void 0 ? 99 : _props$max, _props$overlap = props.overlap, overlap = _props$overlap === void 0 ? "rectangle" : _props$overlap, _props$showZero = props.showZero, showZero = _props$showZero === void 0 ? false : _props$showZero, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["anchorOrigin", "badgeContent", "children", "classes", "className", "color", "component", "invisible", "max", "overlap", "showZero", "variant"]);
  var invisible = invisibleProp;
  if (invisibleProp == null && (badgeContent === 0 && !showZero || badgeContent == null && variant !== "dot")) {
    invisible = true;
  }
  var displayValue = "";
  if (variant !== "dot") {
    displayValue = badgeContent > max ? "".concat(max, "+") : badgeContent;
  }
  return React25.createElement(ComponentProp, _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other), children, React25.createElement("span", {
    className: clsx_m_default(classes.badge, classes["".concat(anchorOrigin.horizontal).concat(capitalize(anchorOrigin.vertical), "}")], classes["anchorOrigin".concat(capitalize(anchorOrigin.vertical)).concat(capitalize(anchorOrigin.horizontal)).concat(capitalize(overlap))], color !== "default" && classes["color".concat(capitalize(color))], invisible && classes.invisible, variant === "dot" && classes.dot)
  }, displayValue));
});
true ? Badge.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The anchor of the badge.
   */
  anchorOrigin: import_prop_types16.default.shape({
    horizontal: import_prop_types16.default.oneOf(["left", "right"]).isRequired,
    vertical: import_prop_types16.default.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: import_prop_types16.default.node,
  /**
   * The badge will be added relative to this node.
   */
  children: import_prop_types16.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: chainPropTypes(import_prop_types16.default.object, function(props) {
    var classes = props.classes;
    if (classes == null) {
      return null;
    }
    [["anchorOriginTopRightRectangle", "anchorOriginTopRightRectangular"], ["anchorOriginBottomRightRectangle", "anchorOriginBottomRightRectangular"], ["anchorOriginTopLeftRectangle", "anchorOriginTopLeftRectangular"], ["anchorOriginBottomLeftRectangle", "anchorOriginBottomLeftRectangular"], ["anchorOriginTopRightCircle", "anchorOriginTopRightCircular"], ["anchorOriginBottomRightCircle", "anchorOriginBottomRightCircular"], ["anchorOriginTopLeftCircle", "anchorOriginTopLeftCircular"]].forEach(function(_ref6) {
      var _ref24 = _slicedToArray(_ref6, 2), deprecatedClassKey = _ref24[0], newClassKey = _ref24[1];
      if (classes[deprecatedClassKey] != null && // 2 classnames? one from withStyles the other must be custom
      classes[deprecatedClassKey].split(" ").length > 1) {
        throw new Error("Material-UI: The `".concat(deprecatedClassKey, "` class was deprecated. Use `").concat(newClassKey, "` instead."));
      }
    });
    return null;
  }),
  /**
   * @ignore
   */
  className: import_prop_types16.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types16.default.oneOf(["default", "error", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types16.default.elementType,
  /**
   * If `true`, the badge will be invisible.
   */
  invisible: import_prop_types16.default.bool,
  /**
   * Max count to show.
   */
  max: import_prop_types16.default.number,
  /**
   * Wrapped shape the badge should overlap.
   */
  overlap: chainPropTypes(import_prop_types16.default.oneOf(["circle", "rectangle", "circular", "rectangular"]), function(props) {
    var overlap = props.overlap;
    if (overlap === "rectangle") {
      throw new Error('Material-UI: `overlap="rectangle"` was deprecated. Use `overlap="rectangular"` instead.');
    }
    if (overlap === "circle") {
      throw new Error('Material-UI: `overlap="circle"` was deprecated. Use `overlap="circular"` instead.');
    }
    return null;
  }),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   */
  showZero: import_prop_types16.default.bool,
  /**
   * The variant to use.
   */
  variant: import_prop_types16.default.oneOf(["dot", "standard"])
} : void 0;
var Badge_default = withStyles_default(styles25, {
  name: "MuiBadge"
})(Badge);

// node_modules/@material-ui/core/esm/BottomNavigation/BottomNavigation.js
init_extends();
var React26 = __toESM(require_react());
var import_react_is2 = __toESM(require_react_is());
var import_prop_types17 = __toESM(require_prop_types());
init_clsx_m();
var styles27 = function styles28(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      justifyContent: "center",
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
};
var BottomNavigation = React26.forwardRef(function BottomNavigation2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, onChange = props.onChange, _props$showLabels = props.showLabels, showLabels = _props$showLabels === void 0 ? false : _props$showLabels, value = props.value, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "onChange", "showLabels", "value"]);
  return React26.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other), React26.Children.map(children, function(child, childIndex) {
    if (!React26.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is2.isFragment)(child)) {
        console.error(["Material-UI: The BottomNavigation component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    var childValue = child.props.value === void 0 ? childIndex : child.props.value;
    return React26.cloneElement(child, {
      selected: childValue === value,
      showLabel: child.props.showLabel !== void 0 ? child.props.showLabel : showLabels,
      value: childValue,
      onChange
    });
  }));
});
true ? BottomNavigation.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types17.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types17.default.object,
  /**
   * @ignore
   */
  className: import_prop_types17.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types17.default.elementType,
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {any} value We default to the index of the child.
   */
  onChange: import_prop_types17.default.func,
  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   */
  showLabels: import_prop_types17.default.bool,
  /**
   * The value of the currently selected `BottomNavigationAction`.
   */
  value: import_prop_types17.default.any
} : void 0;
var BottomNavigation_default = withStyles_default(styles27, {
  name: "MuiBottomNavigation"
})(BottomNavigation);

// node_modules/@material-ui/core/esm/BottomNavigationAction/BottomNavigationAction.js
init_extends();
var React27 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());
init_clsx_m();
var styles29 = function styles30(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      transition: theme.transitions.create(["color", "padding-top"], {
        duration: theme.transitions.duration.short
      }),
      padding: "6px 12px 8px",
      minWidth: 80,
      maxWidth: 168,
      color: theme.palette.text.secondary,
      flex: "1",
      "&$iconOnly": {
        paddingTop: 16
      },
      "&$selected": {
        paddingTop: 6,
        color: theme.palette.primary.main
      }
    },
    /* Pseudo-class applied to the root element if selected. */
    selected: {},
    /* Pseudo-class applied to the root element if `showLabel={false}` and not selected. */
    iconOnly: {},
    /* Styles applied to the span element that wraps the icon and label. */
    wrapper: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      flexDirection: "column"
    },
    /* Styles applied to the label's span element. */
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      opacity: 1,
      transition: "font-size 0.2s, opacity 0.2s",
      transitionDelay: "0.1s",
      "&$iconOnly": {
        opacity: 0,
        transitionDelay: "0s"
      },
      "&$selected": {
        fontSize: theme.typography.pxToRem(14)
      }
    }
  };
};
var BottomNavigationAction = React27.forwardRef(function BottomNavigationAction2(props, ref) {
  var classes = props.classes, className = props.className, icon = props.icon, label = props.label, onChange = props.onChange, onClick = props.onClick, selected = props.selected, showLabel = props.showLabel, value = props.value, other = _objectWithoutProperties(props, ["classes", "className", "icon", "label", "onChange", "onClick", "selected", "showLabel", "value"]);
  var handleChange = function handleChange2(event) {
    if (onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  return React27.createElement(ButtonBase_default, _extends({
    ref,
    className: clsx_m_default(classes.root, className, selected ? classes.selected : !showLabel && classes.iconOnly),
    focusRipple: true,
    onClick: handleChange
  }, other), React27.createElement("span", {
    className: classes.wrapper
  }, icon, React27.createElement("span", {
    className: clsx_m_default(classes.label, selected ? classes.selected : !showLabel && classes.iconOnly)
  }, label)));
});
true ? BottomNavigationAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types18.default.object,
  /**
   * @ignore
   */
  className: import_prop_types18.default.string,
  /**
   * The icon element.
   */
  icon: import_prop_types18.default.node,
  /**
   * The label element.
   */
  label: import_prop_types18.default.node,
  /**
   * @ignore
   */
  onChange: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types18.default.func,
  /**
   * @ignore
   */
  selected: import_prop_types18.default.bool,
  /**
   * If `true`, the `BottomNavigationAction` will show its label.
   * By default, only the selected `BottomNavigationAction`
   * inside `BottomNavigation` will show its label.
   */
  showLabel: import_prop_types18.default.bool,
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: import_prop_types18.default.any
} : void 0;
var BottomNavigationAction_default = withStyles_default(styles29, {
  name: "MuiBottomNavigationAction"
})(BottomNavigationAction);

// node_modules/@material-ui/core/esm/Box/Box.js
var styleFunction = styleFunctionSx_default(compose_default(borders_default, display_default, flexbox_default, grid_default, positions_default, palette_default, shadows_default, sizing_default, spacing_default, typography_default));
var Box = styled_default("div")(styleFunction, {
  name: "MuiBox"
});
var Box_default = Box;

// node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js
init_extends();
var React31 = __toESM(require_react());
var import_react_is3 = __toESM(require_react_is());
var import_prop_types21 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Typography/Typography.js
init_extends();
var React28 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
init_clsx_m();
var styles31 = function styles32(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },
    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,
    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,
    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,
    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,
    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,
    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,
    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,
    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,
    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,
    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,
    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,
    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,
    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,
    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: "absolute",
      height: 1,
      width: 1,
      overflow: "hidden"
    },
    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: "left"
    },
    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: "center"
    },
    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: "right"
    },
    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: "justify"
    },
    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: "0.35em"
    },
    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit"
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },
    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },
    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: "inline"
    },
    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: "block"
    }
  };
};
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p"
};
var Typography = React28.forwardRef(function Typography2(props, ref) {
  var _props$align = props.align, align = _props$align === void 0 ? "inherit" : _props$align, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "initial" : _props$color, component = props.component, _props$display = props.display, display = _props$display === void 0 ? "initial" : _props$display, _props$gutterBottom = props.gutterBottom, gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom, _props$noWrap = props.noWrap, noWrap = _props$noWrap === void 0 ? false : _props$noWrap, _props$paragraph = props.paragraph, paragraph = _props$paragraph === void 0 ? false : _props$paragraph, _props$variant = props.variant, variant = _props$variant === void 0 ? "body1" : _props$variant, _props$variantMapping = props.variantMapping, variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping, other = _objectWithoutProperties(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);
  var Component6 = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  return React28.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, variant !== "inherit" && classes[variant], color !== "initial" && classes["color".concat(capitalize(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== "inherit" && classes["align".concat(capitalize(align))], display !== "initial" && classes["display".concat(capitalize(display))]),
    ref
  }, other));
});
true ? Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: import_prop_types19.default.oneOf(["inherit", "left", "center", "right", "justify"]),
  /**
   * The content of the component.
   */
  children: import_prop_types19.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types19.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types19.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types19.default.oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   */
  component: import_prop_types19.default.elementType,
  /**
   * Controls the display type
   */
  display: import_prop_types19.default.oneOf(["initial", "block", "inline"]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: import_prop_types19.default.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: import_prop_types19.default.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: import_prop_types19.default.bool,
  /**
   * Applies the theme typography styles.
   */
  variant: import_prop_types19.default.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline", "srOnly", "inherit"]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping: import_prop_types19.default.object
} : void 0;
var Typography_default = withStyles_default(styles31, {
  name: "MuiTypography"
})(Typography);

// node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js
init_extends();
var React30 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js
var React29 = __toESM(require_react());
var MoreHoriz_default = createSvgIcon(React29.createElement("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz");

// node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js
var styles33 = function styles34(theme) {
  return {
    root: {
      display: "flex",
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[700],
      borderRadius: 2,
      cursor: "pointer",
      "&:hover, &:focus": {
        backgroundColor: theme.palette.grey[200]
      },
      "&:active": {
        boxShadow: theme.shadows[0],
        backgroundColor: emphasize(theme.palette.grey[200], 0.12)
      }
    },
    icon: {
      width: 24,
      height: 16
    }
  };
};
function BreadcrumbCollapsed(props) {
  var classes = props.classes, other = _objectWithoutProperties(props, ["classes"]);
  return React30.createElement(ButtonBase_default, _extends({
    component: "li",
    className: classes.root,
    focusRipple: true
  }, other), React30.createElement(MoreHoriz_default, {
    className: classes.icon
  }));
}
true ? BreadcrumbCollapsed.propTypes = {
  /**
   * @ignore
   */
  classes: import_prop_types20.default.object.isRequired
} : void 0;
var BreadcrumbCollapsed_default = withStyles_default(styles33, {
  name: "PrivateBreadcrumbCollapsed"
})(BreadcrumbCollapsed);

// node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js
var styles35 = {
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the ol element. */
  ol: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyle: "none"
  },
  /* Styles applied to the li element. */
  li: {},
  /* Styles applied to the separator element. */
  separator: {
    display: "flex",
    userSelect: "none",
    marginLeft: 8,
    marginRight: 8
  }
};
function insertSeparators(items, className, separator) {
  return items.reduce(function(acc, current, index) {
    if (index < items.length - 1) {
      acc = acc.concat(current, React31.createElement("li", {
        "aria-hidden": true,
        key: "separator-".concat(index),
        className
      }, separator));
    } else {
      acc.push(current);
    }
    return acc;
  }, []);
}
var Breadcrumbs = React31.forwardRef(function Breadcrumbs2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "nav" : _props$component, _props$expandText = props.expandText, expandText = _props$expandText === void 0 ? "Show path" : _props$expandText, _props$itemsAfterColl = props.itemsAfterCollapse, itemsAfterCollapse = _props$itemsAfterColl === void 0 ? 1 : _props$itemsAfterColl, _props$itemsBeforeCol = props.itemsBeforeCollapse, itemsBeforeCollapse = _props$itemsBeforeCol === void 0 ? 1 : _props$itemsBeforeCol, _props$maxItems = props.maxItems, maxItems = _props$maxItems === void 0 ? 8 : _props$maxItems, _props$separator = props.separator, separator = _props$separator === void 0 ? "/" : _props$separator, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"]);
  var _React$useState = React31.useState(false), expanded = _React$useState[0], setExpanded = _React$useState[1];
  var renderItemsBeforeAndAfter = function renderItemsBeforeAndAfter2(allItems2) {
    var handleClickExpand = function handleClickExpand2(event) {
      setExpanded(true);
      var focusable = event.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");
      if (focusable) {
        focusable.focus();
      }
    };
    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems2.length) {
      if (true) {
        console.error(["Material-UI: You have provided an invalid combination of props to the Breadcrumbs.", "itemsAfterCollapse={".concat(itemsAfterCollapse, "} + itemsBeforeCollapse={").concat(itemsBeforeCollapse, "} >= maxItems={").concat(maxItems, "}")].join("\n"));
      }
      return allItems2;
    }
    return [].concat(_toConsumableArray(allItems2.slice(0, itemsBeforeCollapse)), [React31.createElement(BreadcrumbCollapsed_default, {
      "aria-label": expandText,
      key: "ellipsis",
      onClick: handleClickExpand
    })], _toConsumableArray(allItems2.slice(allItems2.length - itemsAfterCollapse, allItems2.length)));
  };
  var allItems = React31.Children.toArray(children).filter(function(child) {
    if (true) {
      if ((0, import_react_is3.isFragment)(child)) {
        console.error(["Material-UI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    return React31.isValidElement(child);
  }).map(function(child, index) {
    return React31.createElement("li", {
      className: classes.li,
      key: "child-".concat(index)
    }, child);
  });
  return React31.createElement(Typography_default, _extends({
    ref,
    component: Component6,
    color: "textSecondary",
    className: clsx_m_default(classes.root, className)
  }, other), React31.createElement("ol", {
    className: classes.ol
  }, insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator)));
});
true ? Breadcrumbs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The breadcrumb children.
   */
  children: import_prop_types21.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types21.default.object,
  /**
   * @ignore
   */
  className: import_prop_types21.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types21.default.elementType,
  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  expandText: import_prop_types21.default.string,
  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   */
  itemsAfterCollapse: import_prop_types21.default.number,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   */
  itemsBeforeCollapse: import_prop_types21.default.number,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   */
  maxItems: import_prop_types21.default.number,
  /**
   * Custom separator node.
   */
  separator: import_prop_types21.default.node
} : void 0;
var Breadcrumbs_default = withStyles_default(styles35, {
  name: "MuiBreadcrumbs"
})(Breadcrumbs);

// node_modules/@material-ui/core/esm/Button/Button.js
init_extends();
var React32 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());
init_clsx_m();
var styles36 = function styles37(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, {
      boxSizing: "border-box",
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(["background-color", "box-shadow", "border"], {
        duration: theme.transitions.duration.short
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        },
        "&$disabled": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    }),
    /* Styles applied to the span element that wraps the children. */
    label: {
      width: "100%",
      // Ensure the correct width for iOS Safari
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit"
    },
    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: "6px 8px"
    },
    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: "5px 15px",
      border: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(alpha(theme.palette.primary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(alpha(theme.palette.secondary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },
    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      "&:hover": {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        "&$disabled": {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      "&$focusVisible": {
        boxShadow: theme.shadows[6]
      },
      "&:active": {
        boxShadow: theme.shadows[8]
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none"
      },
      "&$focusVisible": {
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none"
      },
      "&$disabled": {
        boxShadow: "none"
      }
    },
    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit",
      borderColor: "currentColor"
    },
    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: "4px 5px",
      fontSize: theme.typography.pxToRem(13)
    },
    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: "8px 11px",
      fontSize: theme.typography.pxToRem(15)
    },
    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: "3px 9px",
      fontSize: theme.typography.pxToRem(13)
    },
    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: "7px 21px",
      fontSize: theme.typography.pxToRem(15)
    },
    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: "4px 10px",
      fontSize: theme.typography.pxToRem(13)
    },
    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: "8px 22px",
      fontSize: theme.typography.pxToRem(15)
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},
    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: "100%"
    },
    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: "inherit",
      marginRight: 8,
      marginLeft: -4,
      "&$iconSizeSmall": {
        marginLeft: -2
      }
    },
    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: "inherit",
      marginRight: -4,
      marginLeft: 8,
      "&$iconSizeSmall": {
        marginRight: -2
      }
    },
    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: 18
      }
    },
    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      "& > *:first-child": {
        fontSize: 20
      }
    },
    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      "& > *:first-child": {
        fontSize: 22
      }
    }
  };
};
var Button = React32.forwardRef(function Button2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableElevati = props.disableElevation, disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, endIconProp = props.endIcon, focusVisibleClassName = props.focusVisibleClassName, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, startIconProp = props.startIcon, _props$type = props.type, type = _props$type === void 0 ? "button" : _props$type, _props$variant = props.variant, variant = _props$variant === void 0 ? "text" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);
  var startIcon = startIconProp && React32.createElement("span", {
    className: clsx_m_default(classes.startIcon, classes["iconSize".concat(capitalize(size))])
  }, startIconProp);
  var endIcon = endIconProp && React32.createElement("span", {
    className: clsx_m_default(classes.endIcon, classes["iconSize".concat(capitalize(size))])
  }, endIconProp);
  return React32.createElement(ButtonBase_default, _extends({
    className: clsx_m_default(classes.root, classes[variant], className, color === "inherit" ? classes.colorInherit : color !== "default" && classes["".concat(variant).concat(capitalize(color))], size !== "medium" && [classes["".concat(variant, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other), React32.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the button.
   */
  children: import_prop_types22.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types22.default.object,
  /**
   * @ignore
   */
  className: import_prop_types22.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types22.default.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types22.default.elementType,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: import_prop_types22.default.bool,
  /**
   * If `true`, no elevation is used.
   */
  disableElevation: import_prop_types22.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: import_prop_types22.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: import_prop_types22.default.bool,
  /**
   * Element placed after the children.
   */
  endIcon: import_prop_types22.default.node,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types22.default.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: import_prop_types22.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: import_prop_types22.default.string,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: import_prop_types22.default.oneOf(["large", "medium", "small"]),
  /**
   * Element placed before the children.
   */
  startIcon: import_prop_types22.default.node,
  /**
   * @ignore
   */
  type: import_prop_types22.default.oneOfType([import_prop_types22.default.oneOf(["button", "reset", "submit"]), import_prop_types22.default.string]),
  /**
   * The variant to use.
   */
  variant: import_prop_types22.default.oneOf(["contained", "outlined", "text"])
} : void 0;
var Button_default = withStyles_default(styles36, {
  name: "MuiButton"
})(Button);

// node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js
init_extends();
var React33 = __toESM(require_react());
var import_react_is4 = __toESM(require_react_is());
var import_prop_types23 = __toESM(require_prop_types());
init_clsx_m();
Button_default.styles;
var styles38 = function styles39(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "inline-flex",
      borderRadius: theme.shape.borderRadius
    },
    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      boxShadow: theme.shadows[2]
    },
    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: "none"
    },
    /* Pseudo-class applied to child elements if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: "100%"
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: "column"
    },
    /* Styles applied to the children. */
    grouped: {
      minWidth: 40
    },
    /* Styles applied to the children if `orientation="horizontal"`. */
    groupedHorizontal: {
      "&:not(:first-child)": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      "&:not(:last-child)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },
    /* Styles applied to the children if `orientation="vertical"`. */
    groupedVertical: {
      "&:not(:first-child)": {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      "&:not(:last-child)": {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    },
    /* Styles applied to the children if `variant="text"`. */
    groupedText: {},
    /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
    groupedTextHorizontal: {
      "&:not(:last-child)": {
        borderRight: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)")
      }
    },
    /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
    groupedTextVertical: {
      "&:not(:last-child)": {
        borderBottom: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)")
      }
    },
    /* Styles applied to the children if `variant="text"` and `color="primary"`. */
    groupedTextPrimary: {
      "&:not(:last-child)": {
        borderColor: alpha(theme.palette.primary.main, 0.5)
      }
    },
    /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
    groupedTextSecondary: {
      "&:not(:last-child)": {
        borderColor: alpha(theme.palette.secondary.main, 0.5)
      }
    },
    /* Styles applied to the children if `variant="outlined"`. */
    groupedOutlined: {},
    /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
    groupedOutlinedHorizontal: {
      "&:not(:first-child)": {
        marginLeft: -1
      },
      "&:not(:last-child)": {
        borderRightColor: "transparent"
      }
    },
    /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
    groupedOutlinedVertical: {
      "&:not(:first-child)": {
        marginTop: -1
      },
      "&:not(:last-child)": {
        borderBottomColor: "transparent"
      }
    },
    /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
    groupedOutlinedPrimary: {
      "&:hover": {
        borderColor: theme.palette.primary.main
      }
    },
    /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
    groupedOutlinedSecondary: {
      "&:hover": {
        borderColor: theme.palette.secondary.main
      }
    },
    /* Styles applied to the children if `variant="contained"`. */
    groupedContained: {
      boxShadow: "none"
    },
    /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
    groupedContainedHorizontal: {
      "&:not(:last-child)": {
        borderRight: "1px solid ".concat(theme.palette.grey[400]),
        "&$disabled": {
          borderRight: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },
    /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
    groupedContainedVertical: {
      "&:not(:last-child)": {
        borderBottom: "1px solid ".concat(theme.palette.grey[400]),
        "&$disabled": {
          borderBottom: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },
    /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
    groupedContainedPrimary: {
      "&:not(:last-child)": {
        borderColor: theme.palette.primary.dark
      }
    },
    /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
    groupedContainedSecondary: {
      "&:not(:last-child)": {
        borderColor: theme.palette.secondary.dark
      }
    }
  };
};
var ButtonGroup = React33.forwardRef(function ButtonGroup2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableElevati = props.disableElevation, disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, _props$disableRipple = props.disableRipple, disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, _props$variant = props.variant, variant = _props$variant === void 0 ? "outlined" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"]);
  var buttonClassName = clsx_m_default(classes.grouped, classes["grouped".concat(capitalize(orientation))], classes["grouped".concat(capitalize(variant))], classes["grouped".concat(capitalize(variant)).concat(capitalize(orientation))], classes["grouped".concat(capitalize(variant)).concat(color !== "default" ? capitalize(color) : "")], disabled && classes.disabled);
  return React33.createElement(Component6, _extends({
    role: "group",
    className: clsx_m_default(classes.root, className, fullWidth && classes.fullWidth, disableElevation && classes.disableElevation, variant === "contained" && classes.contained, orientation === "vertical" && classes.vertical),
    ref
  }, other), React33.Children.map(children, function(child) {
    if (!React33.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is4.isFragment)(child)) {
        console.error(["Material-UI: The ButtonGroup component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    return React33.cloneElement(child, {
      className: clsx_m_default(buttonClassName, child.props.className),
      color: child.props.color || color,
      disabled: child.props.disabled || disabled,
      disableElevation: child.props.disableElevation || disableElevation,
      disableFocusRipple,
      disableRipple,
      fullWidth,
      size: child.props.size || size,
      variant: child.props.variant || variant
    });
  }));
});
true ? ButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the button group.
   */
  children: import_prop_types23.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types23.default.object,
  /**
   * @ignore
   */
  className: import_prop_types23.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types23.default.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types23.default.elementType,
  /**
   * If `true`, the buttons will be disabled.
   */
  disabled: import_prop_types23.default.bool,
  /**
   * If `true`, no elevation is used.
   */
  disableElevation: import_prop_types23.default.bool,
  /**
   * If `true`, the button keyboard focus ripple will be disabled.
   */
  disableFocusRipple: import_prop_types23.default.bool,
  /**
   * If `true`, the button ripple effect will be disabled.
   */
  disableRipple: import_prop_types23.default.bool,
  /**
   * If `true`, the buttons will take up the full width of its container.
   */
  fullWidth: import_prop_types23.default.bool,
  /**
   * The group orientation (layout flow direction).
   */
  orientation: import_prop_types23.default.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: import_prop_types23.default.oneOf(["large", "medium", "small"]),
  /**
   * The variant to use.
   */
  variant: import_prop_types23.default.oneOf(["contained", "outlined", "text"])
} : void 0;
var ButtonGroup_default = withStyles_default(styles38, {
  name: "MuiButtonGroup"
})(ButtonGroup);

// node_modules/@material-ui/core/esm/Card/Card.js
init_extends();
var React34 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
init_clsx_m();
var styles40 = {
  /* Styles applied to the root element. */
  root: {
    overflow: "hidden"
  }
};
var Card = React34.forwardRef(function Card2(props, ref) {
  var classes = props.classes, className = props.className, _props$raised = props.raised, raised = _props$raised === void 0 ? false : _props$raised, other = _objectWithoutProperties(props, ["classes", "className", "raised"]);
  return React34.createElement(Paper_default, _extends({
    className: clsx_m_default(classes.root, className),
    elevation: raised ? 8 : 1,
    ref
  }, other));
});
true ? Card.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types24.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types24.default.object,
  /**
   * @ignore
   */
  className: import_prop_types24.default.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: import_prop_types24.default.bool
} : void 0;
var Card_default = withStyles_default(styles40, {
  name: "MuiCard"
})(Card);

// node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js
init_extends();
var React35 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
init_clsx_m();
var styles41 = function styles42(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "block",
      textAlign: "inherit",
      width: "100%",
      "&:hover $focusHighlight": {
        opacity: theme.palette.action.hoverOpacity
      },
      "&$focusVisible $focusHighlight": {
        opacity: 0.12
      }
    },
    /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
    focusVisible: {},
    /* Styles applied to the overlay that covers the action area when it is keyboard focused. */
    focusHighlight: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
      opacity: 0,
      backgroundColor: "currentcolor",
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.short
      })
    }
  };
};
var CardActionArea = React35.forwardRef(function CardActionArea2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, focusVisibleClassName = props.focusVisibleClassName, other = _objectWithoutProperties(props, ["children", "classes", "className", "focusVisibleClassName"]);
  return React35.createElement(ButtonBase_default, _extends({
    className: clsx_m_default(classes.root, className),
    focusVisibleClassName: clsx_m_default(focusVisibleClassName, classes.focusVisible),
    ref
  }, other), children, React35.createElement("span", {
    className: classes.focusHighlight
  }));
});
true ? CardActionArea.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types25.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types25.default.object,
  /**
   * @ignore
   */
  className: import_prop_types25.default.string,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types25.default.string
} : void 0;
var CardActionArea_default = withStyles_default(styles41, {
  name: "MuiCardActionArea"
})(CardActionArea);

// node_modules/@material-ui/core/esm/CardActions/CardActions.js
init_extends();
var React36 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
init_clsx_m();
var styles43 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center",
    padding: 8
  },
  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    "& > :not(:first-child)": {
      marginLeft: 8
    }
  }
};
var CardActions = React36.forwardRef(function CardActions2(props, ref) {
  var _props$disableSpacing = props.disableSpacing, disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing, classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["disableSpacing", "classes", "className"]);
  return React36.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, !disableSpacing && classes.spacing),
    ref
  }, other));
});
true ? CardActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types26.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types26.default.object,
  /**
   * @ignore
   */
  className: import_prop_types26.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: import_prop_types26.default.bool
} : void 0;
var CardActions_default = withStyles_default(styles43, {
  name: "MuiCardActions"
})(CardActions);

// node_modules/@material-ui/core/esm/CardContent/CardContent.js
init_extends();
var React37 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());
init_clsx_m();
var styles44 = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    "&:last-child": {
      paddingBottom: 24
    }
  }
};
var CardContent = React37.forwardRef(function CardContent2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, other = _objectWithoutProperties(props, ["classes", "className", "component"]);
  return React37.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other));
});
true ? CardContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types27.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types27.default.object,
  /**
   * @ignore
   */
  className: import_prop_types27.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types27.default.elementType
} : void 0;
var CardContent_default = withStyles_default(styles44, {
  name: "MuiCardContent"
})(CardContent);

// node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
init_extends();
var React38 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());
init_clsx_m();
var styles45 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center",
    padding: 16
  },
  /* Styles applied to the avatar element. */
  avatar: {
    flex: "0 0 auto",
    marginRight: 16
  },
  /* Styles applied to the action element. */
  action: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
    marginTop: -8,
    marginRight: -8
  },
  /* Styles applied to the content wrapper element. */
  content: {
    flex: "1 1 auto"
  },
  /* Styles applied to the title Typography element. */
  title: {},
  /* Styles applied to the subheader Typography element. */
  subheader: {}
};
var CardHeader = React38.forwardRef(function CardHeader2(props, ref) {
  var action = props.action, avatar = props.avatar, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$disableTypogra = props.disableTypography, disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra, subheaderProp = props.subheader, subheaderTypographyProps = props.subheaderTypographyProps, titleProp = props.title, titleTypographyProps = props.titleTypographyProps, other = _objectWithoutProperties(props, ["action", "avatar", "classes", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"]);
  var title = titleProp;
  if (title != null && title.type !== Typography_default && !disableTypography) {
    title = React38.createElement(Typography_default, _extends({
      variant: avatar ? "body2" : "h5",
      className: classes.title,
      component: "span",
      display: "block"
    }, titleTypographyProps), title);
  }
  var subheader = subheaderProp;
  if (subheader != null && subheader.type !== Typography_default && !disableTypography) {
    subheader = React38.createElement(Typography_default, _extends({
      variant: avatar ? "body2" : "body1",
      className: classes.subheader,
      color: "textSecondary",
      component: "span",
      display: "block"
    }, subheaderTypographyProps), subheader);
  }
  return React38.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other), avatar && React38.createElement("div", {
    className: classes.avatar
  }, avatar), React38.createElement("div", {
    className: classes.content
  }, title, subheader), action && React38.createElement("div", {
    className: classes.action
  }, action));
});
true ? CardHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display in the card header.
   */
  action: import_prop_types28.default.node,
  /**
   * The Avatar for the Card Header.
   */
  avatar: import_prop_types28.default.node,
  /**
   * @ignore
   */
  children: import_prop_types28.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types28.default.object,
  /**
   * @ignore
   */
  className: import_prop_types28.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types28.default.elementType,
  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   */
  disableTypography: import_prop_types28.default.bool,
  /**
   * The content of the component.
   */
  subheader: import_prop_types28.default.node,
  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: import_prop_types28.default.object,
  /**
   * The content of the Card Title.
   */
  title: import_prop_types28.default.node,
  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: import_prop_types28.default.object
} : void 0;
var CardHeader_default = withStyles_default(styles45, {
  name: "MuiCardHeader"
})(CardHeader);

// node_modules/@material-ui/core/esm/CardMedia/CardMedia.js
init_extends();
var React39 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
init_clsx_m();
var styles46 = {
  /* Styles applied to the root element. */
  root: {
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: "100%"
  },
  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};
var MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];
var CardMedia = React39.forwardRef(function CardMedia2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, image = props.image, src = props.src, style = props.style, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "image", "src", "style"]);
  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component6) !== -1;
  var composedStyle = !isMediaComponent && image ? _extends({
    backgroundImage: 'url("'.concat(image, '")')
  }, style) : style;
  return React39.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component6) !== -1 && classes.img),
    ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : void 0
  }, other), children);
});
true ? CardMedia.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: chainPropTypes(import_prop_types29.default.node, function(props) {
    if (!props.children && !props.image && !props.src && !props.component) {
      return new Error("Material-UI: Either `children`, `image`, `src` or `component` prop must be specified.");
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types29.default.object,
  /**
   * @ignore
   */
  className: import_prop_types29.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types29.default.elementType,
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: import_prop_types29.default.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: import_prop_types29.default.string,
  /**
   * @ignore
   */
  style: import_prop_types29.default.object
} : void 0;
var CardMedia_default = withStyles_default(styles46, {
  name: "MuiCardMedia"
})(CardMedia);

// node_modules/@material-ui/core/esm/Checkbox/Checkbox.js
init_extends();
var React46 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/internal/SwitchBase.js
init_extends();
var React42 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var React41 = __toESM(require_react());

// node_modules/@material-ui/core/esm/FormControl/FormControlContext.js
var React40 = __toESM(require_react());
var FormControlContext = React40.createContext();
if (true) {
  FormControlContext.displayName = "FormControlContext";
}
function useFormControl() {
  return React40.useContext(FormControlContext);
}
var FormControlContext_default = FormControlContext;

// node_modules/@material-ui/core/esm/FormControl/useFormControl.js
function useFormControl2() {
  return React41.useContext(FormControlContext_default);
}

// node_modules/@material-ui/core/esm/internal/SwitchBase.js
var styles47 = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
var SwitchBase = React42.forwardRef(function SwitchBase2(props, ref) {
  var autoFocus = props.autoFocus, checkedProp = props.checked, checkedIcon = props.checkedIcon, classes = props.classes, className = props.className, defaultChecked = props.defaultChecked, disabledProp = props.disabled, icon = props.icon, id = props.id, inputProps = props.inputProps, inputRef = props.inputRef, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, readOnly = props.readOnly, required = props.required, tabIndex = props.tabIndex, type = props.type, value = props.value, other = _objectWithoutProperties(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);
  var _useControlled = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), checked = _useControlled2[0], setCheckedState = _useControlled2[1];
  var muiFormControl = useFormControl2();
  var handleFocus = function handleFocus2(event) {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  var handleBlur = function handleBlur2(event) {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  var handleInputChange = function handleInputChange2(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  var disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  var hasLabelFor = type === "checkbox" || type === "radio";
  return React42.createElement(IconButton_default, _extends({
    component: "span",
    className: clsx_m_default(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref
  }, other), React42.createElement("input", _extends({
    autoFocus,
    checked: checkedProp,
    defaultChecked,
    className: classes.input,
    disabled,
    id: hasLabelFor && id,
    name,
    onChange: handleInputChange,
    readOnly,
    ref: inputRef,
    required,
    tabIndex,
    type,
    value
  }, inputProps)), checked ? checkedIcon : icon);
});
true ? SwitchBase.propTypes = {
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types30.default.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types30.default.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: import_prop_types30.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types30.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types30.default.string,
  /**
   * @ignore
   */
  defaultChecked: import_prop_types30.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: import_prop_types30.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: import_prop_types30.default.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types30.default.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types30.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /*
   * @ignore
   */
  name: import_prop_types30.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types30.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types30.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types30.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types30.default.bool,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types30.default.bool,
  /**
   * @ignore
   */
  tabIndex: import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string]),
  /**
   * The input component prop `type`.
   */
  type: import_prop_types30.default.string.isRequired,
  /**
   * The value of the component.
   */
  value: import_prop_types30.default.any
} : void 0;
var SwitchBase_default = withStyles_default(styles47, {
  name: "PrivateSwitchBase"
})(SwitchBase);

// node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js
var React43 = __toESM(require_react());
var CheckBoxOutlineBlank_default = createSvgIcon(React43.createElement("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank");

// node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js
var React44 = __toESM(require_react());
var CheckBox_default = createSvgIcon(React44.createElement("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox");

// node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js
var React45 = __toESM(require_react());
var IndeterminateCheckBox_default = createSvgIcon(React45.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");

// node_modules/@material-ui/core/esm/Checkbox/Checkbox.js
var styles48 = function styles49(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },
    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      "&$checked": {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      "&$checked": {
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = React46.createElement(CheckBox_default, null);
var defaultIcon = React46.createElement(CheckBoxOutlineBlank_default, null);
var defaultIndeterminateIcon = React46.createElement(IndeterminateCheckBox_default, null);
var Checkbox = React46.forwardRef(function Checkbox2(props, ref) {
  var _props$checkedIcon = props.checkedIcon, checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon, classes = props.classes, _props$color = props.color, color = _props$color === void 0 ? "secondary" : _props$color, _props$icon = props.icon, iconProp = _props$icon === void 0 ? defaultIcon : _props$icon, _props$indeterminate = props.indeterminate, indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate, _props$indeterminateI = props.indeterminateIcon, indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI, inputProps = props.inputProps, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);
  var icon = indeterminate ? indeterminateIconProp : iconProp;
  var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  return React46.createElement(SwitchBase_default, _extends({
    type: "checkbox",
    classes: {
      root: clsx_m_default(classes.root, classes["color".concat(capitalize(color))], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color,
    inputProps: _extends({
      "data-indeterminate": indeterminate
    }, inputProps),
    icon: React46.cloneElement(icon, {
      fontSize: icon.props.fontSize === void 0 && size === "small" ? size : icon.props.fontSize
    }),
    checkedIcon: React46.cloneElement(indeterminateIcon, {
      fontSize: indeterminateIcon.props.fontSize === void 0 && size === "small" ? size : indeterminateIcon.props.fontSize
    }),
    ref
  }, other));
});
true ? Checkbox.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types31.default.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: import_prop_types31.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types31.default.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types31.default.oneOf(["default", "primary", "secondary"]),
  /**
   * If `true`, the checkbox will be disabled.
   */
  disabled: import_prop_types31.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: import_prop_types31.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: import_prop_types31.default.node,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types31.default.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   */
  indeterminate: import_prop_types31.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: import_prop_types31.default.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types31.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types31.default.func,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types31.default.bool,
  /**
   * The size of the checkbox.
   * `small` is equivalent to the dense checkbox styling.
   */
  size: import_prop_types31.default.oneOf(["medium", "small"]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: import_prop_types31.default.any
} : void 0;
var Checkbox_default = withStyles_default(styles48, {
  name: "MuiCheckbox"
})(Checkbox);

// node_modules/@material-ui/core/esm/Chip/Chip.js
init_extends();
var React48 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js
var React47 = __toESM(require_react());
var Cancel_default = createSvgIcon(React47.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");

// node_modules/@material-ui/core/esm/Chip/Chip.js
var styles50 = function styles51(theme) {
  var backgroundColor = theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = alpha(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: "nowrap",
      transition: theme.transitions.create(["background-color", "box-shadow"]),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: "default",
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: "none",
      border: "none",
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: "middle",
      boxSizing: "border-box",
      "&$disabled": {
        opacity: 0.5,
        pointerEvents: "none"
      },
      "& $avatar": {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === "light" ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      "& $avatarColorPrimary": {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      "& $avatarColorSecondary": {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      "& $avatarSmall": {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.08)
      },
      "&:active": {
        boxShadow: theme.shadows[1]
      }
    },
    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      "&:hover, &:focus": {
        backgroundColor: emphasize(theme.palette.primary.main, 0.08)
      }
    },
    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      "&:hover, &:focus": {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.08)
      }
    },
    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      "&:focus": {
        backgroundColor: emphasize(backgroundColor, 0.08)
      }
    },
    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      "&:focus": {
        backgroundColor: emphasize(theme.palette.primary.main, 0.2)
      }
    },
    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      "&:focus": {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.2)
      }
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: "transparent",
      border: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
      "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
        backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      "& $avatar": {
        marginLeft: 4
      },
      "& $avatarSmall": {
        marginLeft: 2
      },
      "& $icon": {
        marginLeft: 4
      },
      "& $iconSmall": {
        marginLeft: 2
      },
      "& $deleteIcon": {
        marginRight: 5
      },
      "& $deleteIconSmall": {
        marginRight: 3
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove
    /* Styles applied to the `avatar` element. */
    avatar: {},
    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},
    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},
    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},
    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === "light" ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },
    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },
    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: "inherit"
    },
    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: "inherit"
    },
    /* Styles applied to the label `span` element. */
    label: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: "nowrap"
    },
    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },
    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: "transparent",
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: alpha(deleteIconColor, 0.4)
      }
    },
    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },
    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: alpha(theme.palette.primary.contrastText, 0.7),
      "&:hover, &:active": {
        color: theme.palette.primary.contrastText
      }
    },
    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: alpha(theme.palette.secondary.contrastText, 0.7),
      "&:hover, &:active": {
        color: theme.palette.secondary.contrastText
      }
    },
    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: alpha(theme.palette.primary.main, 0.7),
      "&:hover, &:active": {
        color: theme.palette.primary.main
      }
    },
    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: alpha(theme.palette.secondary.main, 0.7),
      "&:hover, &:active": {
        color: theme.palette.secondary.main
      }
    }
  };
};
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
var Chip = React48.forwardRef(function Chip2(props, ref) {
  var avatarProp = props.avatar, classes = props.classes, className = props.className, clickableProp = props.clickable, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, ComponentProp = props.component, deleteIconProp = props.deleteIcon, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, iconProp = props.icon, label = props.label, onClick = props.onClick, onDelete = props.onDelete, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, _props$variant = props.variant, variant = _props$variant === void 0 ? "default" : _props$variant, other = _objectWithoutProperties(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);
  var chipRef = React48.useRef(null);
  var handleRef = useForkRef(chipRef, ref);
  var handleDeleteIconClick = function handleDeleteIconClick2(event) {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  var handleKeyDown2 = function handleKeyDown3(event) {
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  var handleKeyUp = function handleKeyUp2(event) {
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === "Escape" && chipRef.current) {
        chipRef.current.blur();
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === "small";
  var Component6 = ComponentProp || (clickable ? ButtonBase_default : "div");
  var moreProps = Component6 === ButtonBase_default ? {
    component: "div"
  } : {};
  var deleteIcon = null;
  if (onDelete) {
    var customClasses = clsx_m_default(color !== "default" && (variant === "default" ? classes["deleteIconColor".concat(capitalize(color))] : classes["deleteIconOutlinedColor".concat(capitalize(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && React48.isValidElement(deleteIconProp) ? React48.cloneElement(deleteIconProp, {
      className: clsx_m_default(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : React48.createElement(Cancel_default, {
      className: clsx_m_default(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }
  var avatar = null;
  if (avatarProp && React48.isValidElement(avatarProp)) {
    avatar = React48.cloneElement(avatarProp, {
      className: clsx_m_default(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== "default" && classes["avatarColor".concat(capitalize(color))])
    });
  }
  var icon = null;
  if (iconProp && React48.isValidElement(iconProp)) {
    icon = React48.cloneElement(iconProp, {
      className: clsx_m_default(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== "default" && classes["iconColor".concat(capitalize(color))])
    });
  }
  if (true) {
    if (avatar && icon) {
      console.error("Material-UI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
    }
  }
  return React48.createElement(Component6, _extends({
    role: clickable || onDelete ? "button" : void 0,
    className: clsx_m_default(classes.root, className, color !== "default" && [classes["color".concat(capitalize(color))], clickable && classes["clickableColor".concat(capitalize(color))], onDelete && classes["deletableColor".concat(capitalize(color))]], variant !== "default" && [classes.outlined, {
      "primary": classes.outlinedPrimary,
      "secondary": classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : void 0,
    tabIndex: clickable || onDelete ? 0 : void 0,
    onClick,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, React48.createElement("span", {
    className: clsx_m_default(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
true ? Chip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Avatar element.
   */
  avatar: import_prop_types32.default.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types32.default.object,
  /**
   * @ignore
   */
  className: import_prop_types32.default.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If false, the chip will not be clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   */
  clickable: import_prop_types32.default.bool,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types32.default.oneOf(["default", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types32.default.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: import_prop_types32.default.element,
  /**
   * If `true`, the chip should be displayed in a disabled state.
   */
  disabled: import_prop_types32.default.bool,
  /**
   * Icon element.
   */
  icon: import_prop_types32.default.element,
  /**
   * The content of the label.
   */
  label: import_prop_types32.default.node,
  /**
   * @ignore
   */
  onClick: import_prop_types32.default.func,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: import_prop_types32.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types32.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types32.default.func,
  /**
   * The size of the chip.
   */
  size: import_prop_types32.default.oneOf(["medium", "small"]),
  /**
   * The variant to use.
   */
  variant: import_prop_types32.default.oneOf(["default", "outlined"])
} : void 0;
var Chip_default = withStyles_default(styles50, {
  name: "MuiChip"
})(Chip);

// node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
init_extends();
var React49 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());
init_clsx_m();
var SIZE = 44;
var styles52 = function styles53(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "inline-block"
    },
    /* Styles applied to the root element if `variant="static"`. */
    static: {
      transition: theme.transitions.create("transform")
    },
    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {
      animation: "$circular-rotate 1.4s linear infinite"
    },
    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {
      transition: theme.transitions.create("transform")
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    /* Styles applied to the `svg` element. */
    svg: {
      display: "block"
      // Keeps the progress centered
    },
    /* Styles applied to the `circle` svg path. */
    circle: {
      stroke: "currentColor"
      // Use butt to follow the specification, by chance, it's already the default CSS value.
      // strokeLinecap: 'butt',
    },
    /* Styles applied to the `circle` svg path if `variant="static"`. */
    circleStatic: {
      transition: theme.transitions.create("stroke-dashoffset")
    },
    /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
    circleIndeterminate: {
      animation: "$circular-dash 1.4s ease-in-out infinite",
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: "0px"
      // Add the unit to fix a Edge 16 and below bug.
    },
    /* Styles applied to the `circle` svg path if `variant="determinate"`. */
    circleDeterminate: {
      transition: theme.transitions.create("stroke-dashoffset")
    },
    "@keyframes circular-rotate": {
      "0%": {
        // Fix IE 11 wobbly
        transformOrigin: "50% 50%"
      },
      "100%": {
        transform: "rotate(360deg)"
      }
    },
    "@keyframes circular-dash": {
      "0%": {
        strokeDasharray: "1px, 200px",
        strokeDashoffset: "0px"
      },
      "50%": {
        strokeDasharray: "100px, 200px",
        strokeDashoffset: "-15px"
      },
      "100%": {
        strokeDasharray: "100px, 200px",
        strokeDashoffset: "-125px"
      }
    },
    /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
    circleDisableShrink: {
      animation: "none"
    }
  };
};
var CircularProgress = React49.forwardRef(function CircularProgress2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$disableShrink = props.disableShrink, disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink, _props$size = props.size, size = _props$size === void 0 ? 40 : _props$size, style = props.style, _props$thickness = props.thickness, thickness = _props$thickness === void 0 ? 3.6 : _props$thickness, _props$value = props.value, value = _props$value === void 0 ? 0 : _props$value, _props$variant = props.variant, variant = _props$variant === void 0 ? "indeterminate" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);
  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};
  if (variant === "determinate" || variant === "static") {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
    rootStyle.transform = "rotate(-90deg)";
  }
  return React49.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, color !== "inherit" && classes["color".concat(capitalize(color))], {
      "determinate": classes.determinate,
      "indeterminate": classes.indeterminate,
      "static": classes.static
    }[variant]),
    style: _extends({
      width: size,
      height: size
    }, rootStyle, style),
    ref,
    role: "progressbar"
  }, rootProps, other), React49.createElement("svg", {
    className: classes.svg,
    viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE)
  }, React49.createElement("circle", {
    className: clsx_m_default(classes.circle, disableShrink && classes.circleDisableShrink, {
      "determinate": classes.circleDeterminate,
      "indeterminate": classes.circleIndeterminate,
      "static": classes.circleStatic
    }[variant]),
    style: circleStyle,
    cx: SIZE,
    cy: SIZE,
    r: (SIZE - thickness) / 2,
    fill: "none",
    strokeWidth: thickness
  })));
});
true ? CircularProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types33.default.object,
  /**
   * @ignore
   */
  className: import_prop_types33.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types33.default.oneOf(["inherit", "primary", "secondary"]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   */
  disableShrink: chainPropTypes(import_prop_types33.default.bool, function(props) {
    if (props.disableShrink && props.variant && props.variant !== "indeterminate") {
      return new Error("Material-UI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
    }
    return null;
  }),
  /**
   * The size of the circle.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   */
  size: import_prop_types33.default.oneOfType([import_prop_types33.default.number, import_prop_types33.default.string]),
  /**
   * @ignore
   */
  style: import_prop_types33.default.object,
  /**
   * The thickness of the circle.
   */
  thickness: import_prop_types33.default.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: import_prop_types33.default.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant: chainPropTypes(import_prop_types33.default.oneOf(["determinate", "indeterminate", "static"]), function(props) {
    var variant = props.variant;
    if (variant === "static") {
      throw new Error('Material-UI: `variant="static"` was deprecated. Use `variant="determinate"` instead.');
    }
    return null;
  })
} : void 0;
var CircularProgress_default = withStyles_default(styles52, {
  name: "MuiCircularProgress",
  flip: false
})(CircularProgress);

// node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js
var React50 = __toESM(require_react());
var ReactDOM3 = __toESM(require_react_dom());
var import_prop_types34 = __toESM(require_prop_types());
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event) {
  return document.documentElement.clientWidth < event.clientX || document.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  var children = props.children, _props$disableReactTr = props.disableReactTree, disableReactTree = _props$disableReactTr === void 0 ? false : _props$disableReactTr, _props$mouseEvent = props.mouseEvent, mouseEvent = _props$mouseEvent === void 0 ? "onClick" : _props$mouseEvent, onClickAway = props.onClickAway, _props$touchEvent = props.touchEvent, touchEvent = _props$touchEvent === void 0 ? "onTouchEnd" : _props$touchEvent;
  var movedRef = React50.useRef(false);
  var nodeRef = React50.useRef(null);
  var activatedRef = React50.useRef(false);
  var syntheticEventRef = React50.useRef(false);
  React50.useEffect(function() {
    setTimeout(function() {
      activatedRef.current = true;
    }, 0);
    return function() {
      activatedRef.current = false;
    };
  }, []);
  var handleOwnRef = React50.useCallback(function(instance) {
    nodeRef.current = ReactDOM3.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  var handleClickAway = useEventCallback(function(event) {
    var insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    if (!activatedRef.current || !nodeRef.current || clickedRootScrollbar(event)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    var insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      var doc = ownerDocument(nodeRef.current);
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  var createHandleSynthetic = function createHandleSynthetic2(handlerName) {
    return function(event) {
      syntheticEventRef.current = true;
      var childrenPropsHandler = children.props[handlerName];
      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
  };
  var childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React50.useEffect(function() {
    if (touchEvent !== false) {
      var mappedTouchEvent = mapEventPropToEvent(touchEvent);
      var doc = ownerDocument(nodeRef.current);
      var handleTouchMove = function handleTouchMove2() {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return function() {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React50.useEffect(function() {
    if (mouseEvent !== false) {
      var mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      var doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return function() {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return React50.createElement(React50.Fragment, null, React50.cloneElement(children, childrenProps));
}
true ? ClickAwayListener.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   */
  disableReactTree: import_prop_types34.default.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   */
  mouseEvent: import_prop_types34.default.oneOf(["onClick", "onMouseDown", "onMouseUp", false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: import_prop_types34.default.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   */
  touchEvent: import_prop_types34.default.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (true) {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}
var ClickAwayListener_default = ClickAwayListener;

// node_modules/@material-ui/core/esm/Container/Container.js
init_extends();
var React51 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());
init_clsx_m();
var styles54 = function styles55(theme) {
  return {
    /* Styles applied to the root element. */
    root: _defineProperty({
      width: "100%",
      marginLeft: "auto",
      boxSizing: "border-box",
      marginRight: "auto",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: "block"
    }, theme.breakpoints.up("sm"), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),
    /* Styles applied to the root element if `disableGutters={true}`. */
    disableGutters: {
      paddingLeft: 0,
      paddingRight: 0
    },
    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce(function(acc, breakpoint) {
      var value = theme.breakpoints.values[breakpoint];
      if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
          maxWidth: value
        };
      }
      return acc;
    }, {}),
    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: _defineProperty({}, theme.breakpoints.up("xs"), {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }),
    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: _defineProperty({}, theme.breakpoints.up("sm"), {
      maxWidth: theme.breakpoints.values.sm
    }),
    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: _defineProperty({}, theme.breakpoints.up("md"), {
      maxWidth: theme.breakpoints.values.md
    }),
    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: _defineProperty({}, theme.breakpoints.up("lg"), {
      maxWidth: theme.breakpoints.values.lg
    }),
    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: _defineProperty({}, theme.breakpoints.up("xl"), {
      maxWidth: theme.breakpoints.values.xl
    })
  };
};
var Container = React51.forwardRef(function Container2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, _props$fixed = props.fixed, fixed = _props$fixed === void 0 ? false : _props$fixed, _props$maxWidth = props.maxWidth, maxWidth = _props$maxWidth === void 0 ? "lg" : _props$maxWidth, other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);
  return React51.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat(capitalize(String(maxWidth)))]),
    ref
  }, other));
});
true ? Container.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types35.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types35.default.object,
  /**
   * @ignore
   */
  className: import_prop_types35.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types35.default.elementType,
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: import_prop_types35.default.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   */
  fixed: import_prop_types35.default.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: import_prop_types35.default.oneOf(["lg", "md", "sm", "xl", "xs", false])
} : void 0;
var Container_default = withStyles_default(styles54, {
  name: "MuiContainer"
})(Container);

// node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
init_extends();
var React52 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());
var html = {
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box"
};
var body = function body2(theme) {
  return _extends({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    "@media print": {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var styles56 = function styles57(theme) {
  return {
    "@global": {
      html,
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: theme.typography.fontWeightBold
      },
      body: _extends({
        margin: 0
      }, body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        "&::backdrop": {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
function CssBaseline(props) {
  var _props$children = props.children, children = _props$children === void 0 ? null : _props$children, classes = props.classes;
  return React52.createElement(React52.Fragment, null, children);
}
true ? CssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: import_prop_types36.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types36.default.object
} : void 0;
if (true) {
  CssBaseline["propTypes"] = exactProp(CssBaseline.propTypes);
}
var CssBaseline_default = withStyles_default(styles56, {
  name: "MuiCssBaseline"
})(CssBaseline);

// node_modules/@material-ui/core/esm/Dialog/Dialog.js
init_extends();
var React57 = __toESM(require_react());
var import_prop_types41 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Modal/Modal.js
init_extends();
var React56 = __toESM(require_react());
var ReactDOM6 = __toESM(require_react_dom());
var import_prop_types40 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Portal/Portal.js
var React53 = __toESM(require_react());
var ReactDOM4 = __toESM(require_react_dom());
var import_prop_types37 = __toESM(require_prop_types());
function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return ReactDOM4.findDOMNode(container);
}
var useEnhancedEffect3 = typeof window !== "undefined" ? React53.useLayoutEffect : React53.useEffect;
var Portal = React53.forwardRef(function Portal2(props, ref) {
  var children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, onRendered = props.onRendered;
  var _React$useState = React53.useState(null), mountNode = _React$useState[0], setMountNode = _React$useState[1];
  var handleRef = useForkRef(React53.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect3(function() {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect3(function() {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return function() {
        setRef(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect3(function() {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);
  if (disablePortal) {
    if (React53.isValidElement(children)) {
      return React53.cloneElement(children, {
        ref: handleRef
      });
    }
    return children;
  }
  return mountNode ? ReactDOM4.createPortal(children, mountNode) : mountNode;
});
true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types37.default.node,
  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types37.default.oneOfType([HTMLElementType, import_prop_types37.default.instanceOf(React53.Component), import_prop_types37.default.func]),
  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: import_prop_types37.default.bool,
  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be removed in v5, the ref can be used instead.
   * @deprecated Use the ref instead.
   */
  onRendered: deprecatedPropType(import_prop_types37.default.func, "Use the ref instead.")
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
var Portal_default = Portal;

// node_modules/@material-ui/core/esm/utils/getScrollbarSize.js
function getScrollbarSize() {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.width = "99px";
  scrollDiv.style.height = "99px";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.overflow = "scroll";
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

// node_modules/@material-ui/core/esm/Modal/ModalManager.js
function isOverflowing(container) {
  var doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(doc).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(node, show) {
  if (show) {
    node.setAttribute("aria-hidden", "true");
  } else {
    node.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)["padding-right"], 10) || 0;
}
function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : void 0;
  var blacklist = [mountNode, currentNode].concat(_toConsumableArray(nodesToExclude));
  var blacklistTagNames = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(container.children, function(node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}
function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function(item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      var scrollbarSize = getScrollbarSize();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: "padding-right",
        el: container
      });
      container.style["padding-right"] = "".concat(getPaddingRight(container) + scrollbarSize, "px");
      fixedNodes = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedNodes, function(node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    }
    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === "HTML" && window.getComputedStyle(parent)["overflow-y"] === "scroll" ? parent : container;
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: "overflow",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  var restore = function restore2() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function(node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty("padding-right");
        }
      });
    }
    restoreStyle.forEach(function(_ref6) {
      var value = _ref6.value, el = _ref6.el, key = _ref6.key;
      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function(node) {
    if (node.getAttribute && node.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
var ModalManager = function() {
  function ModalManager2() {
    _classCallCheck(this, ModalManager2);
    this.modals = [];
    this.containers = [];
  }
  _createClass(ModalManager2, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);
      if (modalIndex !== -1) {
        return modalIndex;
      }
      modalIndex = this.modals.length;
      this.modals.push(modal);
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }
      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.container === container;
      });
      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }
      this.containers.push({
        modals: [modal],
        container,
        restore: null,
        hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);
      if (modalIndex === -1) {
        return modalIndex;
      }
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1);
      if (containerInfo.modals.length === 0) {
        if (containerInfo.restore) {
          containerInfo.restore();
        }
        if (modal.modalRef) {
          ariaHidden(modal.modalRef, true);
        }
        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1];
        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }
      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);
  return ModalManager2;
}();

// node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js
var React54 = __toESM(require_react());
var ReactDOM5 = __toESM(require_react_dom());
var import_prop_types38 = __toESM(require_prop_types());
function Unstable_TrapFocus(props) {
  var children = props.children, _props$disableAutoFoc = props.disableAutoFocus, disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$disableEnforce = props.disableEnforceFocus, disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce, _props$disableRestore = props.disableRestoreFocus, disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore, getDoc = props.getDoc, isEnabled = props.isEnabled, open = props.open;
  var ignoreNextEnforceFocus = React54.useRef();
  var sentinelStart = React54.useRef(null);
  var sentinelEnd = React54.useRef(null);
  var nodeToRestore = React54.useRef();
  var rootRef = React54.useRef(null);
  var handleOwnRef = React54.useCallback(function(instance) {
    rootRef.current = ReactDOM5.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  var prevOpenRef = React54.useRef();
  React54.useEffect(function() {
    prevOpenRef.current = open;
  }, [open]);
  if (!prevOpenRef.current && open && typeof window !== "undefined") {
    nodeToRestore.current = getDoc().activeElement;
  }
  React54.useEffect(function() {
    if (!open) {
      return;
    }
    var doc = ownerDocument(rootRef.current);
    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (true) {
          console.error(["Material-UI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", -1);
      }
      rootRef.current.focus();
    }
    var contain = function contain2() {
      var rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };
    var loopFocus = function loopFocus2(event) {
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      }
      if (doc.activeElement === rootRef.current) {
        ignoreNextEnforceFocus.current = true;
        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };
    doc.addEventListener("focus", contain, true);
    doc.addEventListener("keydown", loopFocus, true);
    var interval = setInterval(function() {
      contain();
    }, 50);
    return function() {
      clearInterval(interval);
      doc.removeEventListener("focus", contain, true);
      doc.removeEventListener("keydown", loopFocus, true);
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return React54.createElement(React54.Fragment, null, React54.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), React54.cloneElement(children, {
    ref: handleRef
  }), React54.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}
true ? Unstable_TrapFocus.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: import_prop_types38.default.node,
  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: import_prop_types38.default.bool,
  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: import_prop_types38.default.bool,
  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   */
  disableRestoreFocus: import_prop_types38.default.bool,
  /**
   * Return the document to consider.
   * We use it to implement the restore focus between different browser documents.
   */
  getDoc: import_prop_types38.default.func.isRequired,
  /**
   * Do we still want to enforce the focus?
   * This prop helps nesting TrapFocus elements.
   */
  isEnabled: import_prop_types38.default.func.isRequired,
  /**
   * If `true`, focus will be locked.
   */
  open: import_prop_types38.default.bool.isRequired
} : void 0;
if (true) {
  Unstable_TrapFocus["propTypes"] = exactProp(Unstable_TrapFocus.propTypes);
}
var Unstable_TrapFocus_default = Unstable_TrapFocus;

// node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js
init_extends();
var React55 = __toESM(require_react());
var import_prop_types39 = __toESM(require_prop_types());
var styles58 = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: "fixed",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  },
  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: "transparent"
  }
};
var SimpleBackdrop = React55.forwardRef(function SimpleBackdrop2(props, ref) {
  var _props$invisible = props.invisible, invisible = _props$invisible === void 0 ? false : _props$invisible, open = props.open, other = _objectWithoutProperties(props, ["invisible", "open"]);
  return open ? React55.createElement("div", _extends({
    "aria-hidden": true,
    ref
  }, other, {
    style: _extends({}, styles58.root, invisible ? styles58.invisible : {}, other.style)
  })) : null;
});
true ? SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: import_prop_types39.default.bool,
  /**
   * If `true`, the backdrop is open.
   */
  open: import_prop_types39.default.bool.isRequired
} : void 0;
var SimpleBackdrop_default = SimpleBackdrop;

// node_modules/@material-ui/core/esm/Modal/Modal.js
function getContainer2(container) {
  container = typeof container === "function" ? container() : container;
  return ReactDOM6.findDOMNode(container);
}
function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty("in") : false;
}
var defaultManager = new ModalManager();
var styles59 = function styles60(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "fixed",
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },
    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: "hidden"
    }
  };
};
var Modal = React56.forwardRef(function Modal2(inProps, ref) {
  var theme = useTheme();
  var props = getThemeProps({
    name: "MuiModal",
    props: _extends({}, inProps),
    theme
  });
  var _props$BackdropCompon = props.BackdropComponent, BackdropComponent = _props$BackdropCompon === void 0 ? SimpleBackdrop_default : _props$BackdropCompon, BackdropProps = props.BackdropProps, children = props.children, _props$closeAfterTran = props.closeAfterTransition, closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran, container = props.container, _props$disableAutoFoc = props.disableAutoFocus, disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$disableBackdro = props.disableBackdropClick, disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro, _props$disableEnforce = props.disableEnforceFocus, disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce, _props$disableEscapeK = props.disableEscapeKeyDown, disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, _props$disableRestore = props.disableRestoreFocus, disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore, _props$disableScrollL = props.disableScrollLock, disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL, _props$hideBackdrop = props.hideBackdrop, hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop, _props$keepMounted = props.keepMounted, keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted, _props$manager = props.manager, manager = _props$manager === void 0 ? defaultManager : _props$manager, onBackdropClick = props.onBackdropClick, onClose = props.onClose, onEscapeKeyDown = props.onEscapeKeyDown, onRendered = props.onRendered, open = props.open, other = _objectWithoutProperties(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);
  var _React$useState = React56.useState(true), exited = _React$useState[0], setExited = _React$useState[1];
  var modal = React56.useRef({});
  var mountNodeRef = React56.useRef(null);
  var modalRef = React56.useRef(null);
  var handleRef = useForkRef(modalRef, ref);
  var hasTransition = getHasTransition(props);
  var getDoc = function getDoc2() {
    return ownerDocument(mountNodeRef.current);
  };
  var getModal = function getModal2() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  var handleMounted = function handleMounted2() {
    manager.mount(getModal(), {
      disableScrollLock
    });
    modalRef.current.scrollTop = 0;
  };
  var handleOpen = useEventCallback(function() {
    var resolvedContainer = getContainer2(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = React56.useCallback(function() {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = useEventCallback(function(node) {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (onRendered) {
      onRendered();
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  var handleClose = React56.useCallback(function() {
    manager.remove(getModal());
  }, [manager]);
  React56.useEffect(function() {
    return function() {
      handleClose();
    };
  }, [handleClose]);
  React56.useEffect(function() {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  var handleExited = function handleExited2() {
    setExited(true);
    if (closeAfterTransition) {
      handleClose();
    }
  };
  var handleBackdropClick = function handleBackdropClick2(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (!disableBackdropClick && onClose) {
      onClose(event, "backdropClick");
    }
  };
  var handleKeyDown2 = function handleKeyDown3(event) {
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }
    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  var inlineStyle = styles59(theme || {
    zIndex: zIndex_default
  });
  var childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = children.props.tabIndex || "-1";
  }
  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }
  return React56.createElement(Portal_default, {
    ref: handlePortalRef,
    container,
    disablePortal
  }, React56.createElement("div", _extends({
    ref: handleRef,
    onKeyDown: handleKeyDown2,
    role: "presentation"
  }, other, {
    style: _extends({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : React56.createElement(BackdropComponent, _extends({
    open,
    onClick: handleBackdropClick
  }, BackdropProps)), React56.createElement(Unstable_TrapFocus_default, {
    disableEnforceFocus,
    disableAutoFocus,
    disableRestoreFocus,
    getDoc,
    isEnabled: isTopModal,
    open
  }, React56.cloneElement(children, childProps))));
});
true ? Modal.propTypes = {
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: import_prop_types40.default.elementType,
  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: import_prop_types40.default.object,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: import_prop_types40.default.bool,
  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types40.default.oneOfType([HTMLElementType, import_prop_types40.default.instanceOf(React56.Component), import_prop_types40.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: import_prop_types40.default.bool,
  /**
   * If `true`, clicking the backdrop will not fire `onClose`.
   */
  disableBackdropClick: deprecatedPropType(import_prop_types40.default.bool, "Use the onClose prop with the `reason` argument to filter the `backdropClick` events."),
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: import_prop_types40.default.bool,
  /**
   * If `true`, hitting escape will not fire `onClose`.
   */
  disableEscapeKeyDown: import_prop_types40.default.bool,
  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: import_prop_types40.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: import_prop_types40.default.bool,
  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: import_prop_types40.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: import_prop_types40.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: import_prop_types40.default.bool,
  /**
   * @ignore
   */
  manager: import_prop_types40.default.object,
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: deprecatedPropType(import_prop_types40.default.func, "Use the onClose prop with the `reason` argument to handle the `backdropClick` events."),
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types40.default.func,
  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: deprecatedPropType(import_prop_types40.default.func, "Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events."),
  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` prop took effect.
   *
   * This prop will be removed in v5, the ref can be used instead.
   */
  onRendered: deprecatedPropType(import_prop_types40.default.func, "Use the ref instead."),
  /**
   * If `true`, the modal is open.
   */
  open: import_prop_types40.default.bool.isRequired
} : void 0;
var Modal_default = Modal;

// node_modules/@material-ui/core/esm/Dialog/Dialog.js
var styles61 = function styles62(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      "@media print": {
        // Use !important to override the Modal inline-style.
        position: "absolute !important"
      }
    },
    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&:after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    },
    /* Styles applied to the container element. */
    container: {
      height: "100%",
      "@media print": {
        height: "auto"
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },
    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: "relative",
      overflowY: "auto",
      // Fix IE 11 issue, to remove at some point.
      "@media print": {
        overflowY: "visible",
        boxShadow: "none"
      }
    },
    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    },
    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "left"
      // 'initial' doesn't work on IE 11
    },
    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: "calc(100% - 64px)"
    },
    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      "&$paperScrollBody": _defineProperty({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      "&$paperScrollBody": _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      "&$paperScrollBody": _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      "&$paperScrollBody": _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      "&$paperScrollBody": _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: "calc(100% - 64px)"
    },
    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      "&$paperScrollBody": {
        margin: 0,
        maxWidth: "100%"
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
var Dialog = React57.forwardRef(function Dialog2(props, ref) {
  var BackdropProps = props.BackdropProps, children = props.children, classes = props.classes, className = props.className, _props$disableBackdro = props.disableBackdropClick, disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro, _props$disableEscapeK = props.disableEscapeKeyDown, disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK, _props$fullScreen = props.fullScreen, fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$maxWidth = props.maxWidth, maxWidth = _props$maxWidth === void 0 ? "sm" : _props$maxWidth, onBackdropClick = props.onBackdropClick, onClose = props.onClose, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onEscapeKeyDown = props.onEscapeKeyDown, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, open = props.open, _props$PaperComponent = props.PaperComponent, PaperComponent = _props$PaperComponent === void 0 ? Paper_default : _props$PaperComponent, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, _props$scroll = props.scroll, scroll = _props$scroll === void 0 ? "paper" : _props$scroll, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Fade_default : _props$TransitionComp, _props$transitionDura = props.transitionDuration, transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura, TransitionProps = props.TransitionProps, ariaDescribedby = props["aria-describedby"], ariaLabelledby = props["aria-labelledby"], other = _objectWithoutProperties(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);
  var mouseDownTarget = React57.useRef();
  var handleMouseDown = function handleMouseDown2(event) {
    mouseDownTarget.current = event.target;
  };
  var handleBackdropClick = function handleBackdropClick2(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (event.target !== mouseDownTarget.current) {
      return;
    }
    mouseDownTarget.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (!disableBackdropClick && onClose) {
      onClose(event, "backdropClick");
    }
  };
  return React57.createElement(Modal_default, _extends({
    className: clsx_m_default(classes.root, className),
    BackdropComponent: Backdrop_default,
    BackdropProps: _extends({
      transitionDuration
    }, BackdropProps),
    closeAfterTransition: true
  }, disableBackdropClick ? {
    disableBackdropClick
  } : {}, {
    disableEscapeKeyDown,
    onEscapeKeyDown,
    onClose,
    open,
    ref
  }, other), React57.createElement(TransitionComponent, _extends({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    role: "none presentation"
  }, TransitionProps), React57.createElement("div", {
    className: clsx_m_default(classes.container, classes["scroll".concat(capitalize(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, React57.createElement(PaperComponent, _extends({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: clsx_m_default(classes.paper, classes["paperScroll".concat(capitalize(scroll))], classes["paperWidth".concat(capitalize(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
true ? Dialog.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": import_prop_types41.default.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": import_prop_types41.default.string,
  /**
   * @ignore
   */
  BackdropProps: import_prop_types41.default.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: import_prop_types41.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types41.default.object,
  /**
   * @ignore
   */
  className: import_prop_types41.default.string,
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   * @deprecated Use the onClose prop with the `reason` argument to filter the `backdropClick` events.
   */
  disableBackdropClick: deprecatedPropType(import_prop_types41.default.bool, "Use the onClose prop with the `reason` argument to filter the `backdropClick` events."),
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: import_prop_types41.default.bool,
  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: import_prop_types41.default.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   */
  fullWidth: import_prop_types41.default.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: import_prop_types41.default.oneOf(["lg", "md", "sm", "xl", "xs", false]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the onClose prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: deprecatedPropType(import_prop_types41.default.func, "Use the onClose prop with the `reason` argument to handle the `backdropClick` events."),
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types41.default.func,
  /**
   * Callback fired before the dialog enters.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: deprecatedPropType(import_prop_types41.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the dialog has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: deprecatedPropType(import_prop_types41.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the dialog is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: deprecatedPropType(import_prop_types41.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   * @deprecated Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events.
   */
  onEscapeKeyDown: deprecatedPropType(import_prop_types41.default.func, "Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events."),
  /**
   * Callback fired before the dialog exits.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: deprecatedPropType(import_prop_types41.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the dialog has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: deprecatedPropType(import_prop_types41.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the dialog is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: deprecatedPropType(import_prop_types41.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * If `true`, the Dialog is open.
   */
  open: import_prop_types41.default.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   */
  PaperComponent: import_prop_types41.default.elementType,
  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: import_prop_types41.default.object,
  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: import_prop_types41.default.oneOf(["body", "paper"]),
  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: import_prop_types41.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.shape({
    appear: import_prop_types41.default.number,
    enter: import_prop_types41.default.number,
    exit: import_prop_types41.default.number
  })]),
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: import_prop_types41.default.object
} : void 0;
var Dialog_default = withStyles_default(styles61, {
  name: "MuiDialog"
})(Dialog);

// node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
init_extends();
var React58 = __toESM(require_react());
var import_prop_types42 = __toESM(require_prop_types());
init_clsx_m();
var styles63 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto"
  },
  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    "& > :not(:first-child)": {
      marginLeft: 8
    }
  }
};
var DialogActions = React58.forwardRef(function DialogActions2(props, ref) {
  var _props$disableSpacing = props.disableSpacing, disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing, classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["disableSpacing", "classes", "className"]);
  return React58.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, !disableSpacing && classes.spacing),
    ref
  }, other));
});
true ? DialogActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types42.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types42.default.object,
  /**
   * @ignore
   */
  className: import_prop_types42.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: import_prop_types42.default.bool
} : void 0;
var DialogActions_default = withStyles_default(styles63, {
  name: "MuiDialogActions"
})(DialogActions);

// node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
init_extends();
var React59 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());
init_clsx_m();
var styles64 = function styles65(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      // Add iOS momentum scrolling.
      overflowY: "auto",
      padding: "8px 24px",
      "&:first-child": {
        // dialog without title
        paddingTop: 20
      }
    },
    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: "16px 24px",
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent = React59.forwardRef(function DialogContent2(props, ref) {
  var classes = props.classes, className = props.className, _props$dividers = props.dividers, dividers = _props$dividers === void 0 ? false : _props$dividers, other = _objectWithoutProperties(props, ["classes", "className", "dividers"]);
  return React59.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, dividers && classes.dividers),
    ref
  }, other));
});
true ? DialogContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types43.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types43.default.object,
  /**
   * @ignore
   */
  className: import_prop_types43.default.string,
  /**
   * Display the top and bottom dividers.
   */
  dividers: import_prop_types43.default.bool
} : void 0;
var DialogContent_default = withStyles_default(styles64, {
  name: "MuiDialogContent"
})(DialogContent);

// node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
init_extends();
var React60 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());
var styles66 = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = React60.forwardRef(function DialogContentText2(props, ref) {
  return React60.createElement(Typography_default, _extends({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref
  }, props));
});
true ? DialogContentText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types44.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types44.default.object
} : void 0;
var DialogContentText_default = withStyles_default(styles66, {
  name: "MuiDialogContentText"
})(DialogContentText);

// node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
init_extends();
var React61 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());
init_clsx_m();
var styles67 = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: "16px 24px",
    flex: "0 0 auto"
  }
};
var DialogTitle = React61.forwardRef(function DialogTitle2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$disableTypogra = props.disableTypography, disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra, other = _objectWithoutProperties(props, ["children", "classes", "className", "disableTypography"]);
  return React61.createElement("div", _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other), disableTypography ? children : React61.createElement(Typography_default, {
    component: "h2",
    variant: "h6"
  }, children));
});
true ? DialogTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types45.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types45.default.object,
  /**
   * @ignore
   */
  className: import_prop_types45.default.string,
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: import_prop_types45.default.bool
} : void 0;
var DialogTitle_default = withStyles_default(styles67, {
  name: "MuiDialogTitle"
})(DialogTitle);

// node_modules/@material-ui/core/esm/Divider/Divider.js
init_extends();
var React62 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());
init_clsx_m();
var styles68 = function styles69(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: "none",
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },
    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    },
    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },
    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: alpha(theme.palette.divider, 0.08)
    },
    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: "100%",
      width: 1
    },
    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
      alignSelf: "stretch",
      height: "auto"
    }
  };
};
var Divider = React62.forwardRef(function Divider2(props, ref) {
  var _props$absolute = props.absolute, absolute = _props$absolute === void 0 ? false : _props$absolute, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "hr" : _props$component, _props$flexItem = props.flexItem, flexItem = _props$flexItem === void 0 ? false : _props$flexItem, _props$light = props.light, light = _props$light === void 0 ? false : _props$light, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, _props$role = props.role, role = _props$role === void 0 ? Component6 !== "hr" ? "separator" : void 0 : _props$role, _props$variant = props.variant, variant = _props$variant === void 0 ? "fullWidth" : _props$variant, other = _objectWithoutProperties(props, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);
  return React62.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, variant !== "fullWidth" && classes[variant], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, orientation === "vertical" && classes.vertical),
    role,
    ref
  }, other));
});
true ? Divider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Absolutely position the element.
   */
  absolute: import_prop_types46.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types46.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types46.default.object,
  /**
   * @ignore
   */
  className: import_prop_types46.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types46.default.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   */
  flexItem: import_prop_types46.default.bool,
  /**
   * If `true`, the divider will have a lighter color.
   */
  light: import_prop_types46.default.bool,
  /**
   * The divider orientation.
   */
  orientation: import_prop_types46.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types46.default.string,
  /**
   * The variant to use.
   */
  variant: import_prop_types46.default.oneOf(["fullWidth", "inset", "middle"])
} : void 0;
var Divider_default = withStyles_default(styles68, {
  name: "MuiDivider"
})(Divider);

// node_modules/@material-ui/core/esm/Drawer/Drawer.js
init_extends();
var React64 = __toESM(require_react());
var import_prop_types48 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Slide/Slide.js
init_extends();
var React63 = __toESM(require_react());
var import_prop_types47 = __toESM(require_prop_types());
var ReactDOM7 = __toESM(require_react_dom());
function getTranslateValue(direction, node) {
  var rect = node.getBoundingClientRect();
  var transform;
  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = window.getComputedStyle(node);
    transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
  }
  var offsetX = 0;
  var offsetY = 0;
  if (transform && transform !== "none" && typeof transform === "string") {
    var transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }
  if (direction === "left") {
    return "translateX(".concat(window.innerWidth, "px) translateX(").concat(offsetX - rect.left, "px)");
  }
  if (direction === "right") {
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  }
  if (direction === "up") {
    return "translateY(".concat(window.innerHeight, "px) translateY(").concat(offsetY - rect.top, "px)");
  }
  return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
}
function setTranslateValue(direction, node) {
  var transform = getTranslateValue(direction, node);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
var defaultTimeout2 = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
var Slide = React63.forwardRef(function Slide2(props, ref) {
  var children = props.children, _props$direction = props.direction, direction = _props$direction === void 0 ? "down" : _props$direction, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style = props.style, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? defaultTimeout2 : _props$timeout, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition_default : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "direction", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var theme = useTheme2();
  var childrenRef = React63.useRef(null);
  var handleOwnRef = React63.useCallback(function(instance) {
    childrenRef.current = ReactDOM7.findDOMNode(instance);
  }, []);
  var handleRefIntermediary = useForkRef(children.ref, handleOwnRef);
  var handleRef = useForkRef(handleRefIntermediary, ref);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(isAppearing) {
      if (callback) {
        if (isAppearing === void 0) {
          callback(childrenRef.current);
        } else {
          callback(childrenRef.current, isAppearing);
        }
      }
    };
  };
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    setTranslateValue(direction, node);
    reflow(node);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function(node, isAppearing) {
    var transitionProps = getTransitionProps({
      timeout,
      style
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", _extends({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.transition = theme.transitions.create("transform", _extends({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.webkitTransform = "none";
    node.style.transform = "none";
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node) {
    var transitionProps = getTransitionProps({
      timeout,
      style
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", _extends({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    node.style.transition = theme.transitions.create("transform", _extends({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    setTranslateValue(direction, node);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(function(node) {
    node.style.webkitTransition = "";
    node.style.transition = "";
    if (onExited) {
      onExited(node);
    }
  });
  var updatePosition = React63.useCallback(function() {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current);
    }
  }, [direction]);
  React63.useEffect(function() {
    if (inProp || direction === "down" || direction === "right") {
      return void 0;
    }
    var handleResize = debounce(function() {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current);
      }
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp]);
  React63.useEffect(function() {
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return React63.createElement(TransitionComponent, _extends({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    appear: true,
    in: inProp,
    timeout
  }, other), function(state, childProps) {
    return React63.cloneElement(children, _extends({
      ref: handleRef,
      style: _extends({
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, style, children.props.style)
    }, childProps));
  });
});
true ? Slide.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default,
  /**
   * Direction the child node will enter from.
   */
  direction: import_prop_types47.default.oneOf(["down", "left", "right", "up"]),
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: import_prop_types47.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types47.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types47.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types47.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types47.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types47.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types47.default.func,
  /**
   * @ignore
   */
  style: import_prop_types47.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: import_prop_types47.default.oneOfType([import_prop_types47.default.number, import_prop_types47.default.shape({
    appear: import_prop_types47.default.number,
    enter: import_prop_types47.default.number,
    exit: import_prop_types47.default.number
  })])
} : void 0;
var Slide_default = Slide;

// node_modules/@material-ui/core/esm/Drawer/Drawer.js
var styles70 = function styles71(theme) {
  return {
    /* Styles applied to the root element. */
    root: {},
    /* Styles applied to the root element if `variant="permanent or persistent"`. */
    docked: {
      flex: "0 0 auto"
    },
    /* Styles applied to the `Paper` component. */
    paper: {
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      flex: "1 0 auto",
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: "touch",
      // Add iOS momentum scrolling.
      // temporary style
      position: "fixed",
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 0
    },
    /* Styles applied to the `Paper` component if `anchor="left"`. */
    paperAnchorLeft: {
      left: 0,
      right: "auto"
    },
    /* Styles applied to the `Paper` component if `anchor="right"`. */
    paperAnchorRight: {
      left: "auto",
      right: 0
    },
    /* Styles applied to the `Paper` component if `anchor="top"`. */
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: "auto",
      right: 0,
      height: "auto",
      maxHeight: "100%"
    },
    /* Styles applied to the `Paper` component if `anchor="bottom"`. */
    paperAnchorBottom: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    },
    /* Styles applied to the `Paper` component if `anchor="left"` and `variant` is not "temporary". */
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    /* Styles applied to the `Paper` component if `anchor="top"` and `variant` is not "temporary". */
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    /* Styles applied to the `Paper` component if `anchor="right"` and `variant` is not "temporary". */
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },
    /* Styles applied to the `Paper` component if `anchor="bottom"` and `variant` is not "temporary". */
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },
    /* Styles applied to the `Modal` component. */
    modal: {}
  };
};
var oppositeDirection = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function isHorizontal(anchor) {
  return ["left", "right"].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
var defaultTransitionDuration2 = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
var Drawer = React64.forwardRef(function Drawer2(props, ref) {
  var _props$anchor = props.anchor, anchorProp = _props$anchor === void 0 ? "left" : _props$anchor, BackdropProps = props.BackdropProps, children = props.children, classes = props.classes, className = props.className, _props$elevation = props.elevation, elevation = _props$elevation === void 0 ? 16 : _props$elevation, _props$ModalProps = props.ModalProps;
  _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;
  var BackdropPropsProp = _props$ModalProps.BackdropProps, ModalProps = _objectWithoutProperties(_props$ModalProps, ["BackdropProps"]), onClose = props.onClose, _props$open = props.open, open = _props$open === void 0 ? false : _props$open, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, SlideProps = props.SlideProps, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Slide_default : _props$TransitionComp, _props$transitionDura = props.transitionDuration, transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration2 : _props$transitionDura, _props$variant = props.variant, variant = _props$variant === void 0 ? "temporary" : _props$variant, other = _objectWithoutProperties(props, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"]);
  var theme = useTheme2();
  var mounted = React64.useRef(false);
  React64.useEffect(function() {
    mounted.current = true;
  }, []);
  var anchor = getAnchor(theme, anchorProp);
  var drawer = React64.createElement(Paper_default, _extends({
    elevation: variant === "temporary" ? elevation : 0,
    square: true
  }, PaperProps, {
    className: clsx_m_default(classes.paper, classes["paperAnchor".concat(capitalize(anchor))], PaperProps.className, variant !== "temporary" && classes["paperAnchorDocked".concat(capitalize(anchor))])
  }), children);
  if (variant === "permanent") {
    return React64.createElement("div", _extends({
      className: clsx_m_default(classes.root, classes.docked, className),
      ref
    }, other), drawer);
  }
  var slidingDrawer = React64.createElement(TransitionComponent, _extends({
    in: open,
    direction: oppositeDirection[anchor],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps), drawer);
  if (variant === "persistent") {
    return React64.createElement("div", _extends({
      className: clsx_m_default(classes.root, classes.docked, className),
      ref
    }, other), slidingDrawer);
  }
  return React64.createElement(Modal_default, _extends({
    BackdropProps: _extends({}, BackdropProps, BackdropPropsProp, {
      transitionDuration
    }),
    BackdropComponent: Backdrop_default,
    className: clsx_m_default(classes.root, classes.modal, className),
    open,
    onClose,
    ref
  }, other, ModalProps), slidingDrawer);
});
true ? Drawer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Side from which the drawer will appear.
   */
  anchor: import_prop_types48.default.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: import_prop_types48.default.object,
  /**
   * The contents of the drawer.
   */
  children: import_prop_types48.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types48.default.object,
  /**
   * @ignore
   */
  className: import_prop_types48.default.string,
  /**
   * The elevation of the drawer.
   */
  elevation: import_prop_types48.default.number,
  /**
   * Props applied to the [`Modal`](/api/modal/) element.
   */
  ModalProps: import_prop_types48.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types48.default.func,
  /**
   * If `true`, the drawer is open.
   */
  open: import_prop_types48.default.bool,
  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: import_prop_types48.default.object,
  /**
   * Props applied to the [`Slide`](/api/slide/) element.
   */
  SlideProps: import_prop_types48.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: import_prop_types48.default.oneOfType([import_prop_types48.default.number, import_prop_types48.default.shape({
    appear: import_prop_types48.default.number,
    enter: import_prop_types48.default.number,
    exit: import_prop_types48.default.number
  })]),
  /**
   * The variant to use.
   */
  variant: import_prop_types48.default.oneOf(["permanent", "persistent", "temporary"])
} : void 0;
var Drawer_default = withStyles_default(styles70, {
  name: "MuiDrawer",
  flip: false
})(Drawer);

// node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanel.js
init_extends();
var React66 = __toESM(require_react());
var import_react_is5 = __toESM(require_react_is());
var import_prop_types49 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanelContext.js
var React65 = __toESM(require_react());
var ExpansionPanelContext = React65.createContext({});
if (true) {
  ExpansionPanelContext.displayName = "ExpansionPanelContext";
}
var ExpansionPanelContext_default = ExpansionPanelContext;

// node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanel.js
var styles72 = function styles73(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      transition: theme.transitions.create(["margin"], transition),
      "&:before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(["opacity", "background-color"], transition)
      },
      "&:first-child": {
        "&:before": {
          display: "none"
        }
      },
      "&$expanded": {
        margin: "16px 0",
        "&:first-child": {
          marginTop: 0
        },
        "&:last-child": {
          marginBottom: 0
        },
        "&:before": {
          opacity: 0
        }
      },
      "&$expanded + &": {
        "&:before": {
          display: "none"
        }
      },
      "&$disabled": {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      "&:first-child": {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      "&:last-child": {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },
    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var warnedOnce = false;
var ExpansionPanel = React66.forwardRef(function ExpansionPanel2(props, ref) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(["Material-UI: the ExpansionPanel component was renamed to Accordion to use a more common naming convention.", "", "You should use `import { Accordion } from '@material-ui/core'`", "or `import Accordion from '@material-ui/core/Accordion'`"].join("\n"));
    }
  }
  var childrenProp = props.children, classes = props.classes, className = props.className, _props$defaultExpande = props.defaultExpanded, defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, expandedProp = props.expanded, onChange = props.onChange, _props$square = props.square, square = _props$square === void 0 ? false : _props$square, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Collapse_default : _props$TransitionComp, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);
  var _useControlled = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "ExpansionPanel",
    state: "expanded"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), expanded = _useControlled2[0], setExpandedState = _useControlled2[1];
  var handleChange = React66.useCallback(function(event) {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  var _React$Children$toArr = React66.Children.toArray(childrenProp), _React$Children$toArr2 = _toArray(_React$Children$toArr), summary = _React$Children$toArr2[0], children = _React$Children$toArr2.slice(1);
  var contextValue = React66.useMemo(function() {
    return {
      expanded,
      disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return React66.createElement(Paper_default, _extends({
    className: clsx_m_default(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref,
    square
  }, other), React66.createElement(ExpansionPanelContext_default.Provider, {
    value: contextValue
  }, summary), React66.createElement(TransitionComponent, _extends({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), React66.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props["aria-controls"],
    role: "region"
  }, children)));
});
true ? ExpansionPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the expansion panel.
   */
  children: chainPropTypes(import_prop_types49.default.node.isRequired, function(props) {
    var summary = React66.Children.toArray(props.children)[0];
    if ((0, import_react_is5.isFragment)(summary)) {
      return new Error("Material-UI: The ExpansionPanel doesn't accept a Fragment as a child. Consider providing an array instead.");
    }
    if (!React66.isValidElement(summary)) {
      return new Error("Material-UI: Expected the first child of ExpansionPanel to be a valid element.");
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types49.default.object,
  /**
   * @ignore
   */
  className: import_prop_types49.default.string,
  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: import_prop_types49.default.bool,
  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: import_prop_types49.default.bool,
  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: import_prop_types49.default.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {boolean} expanded The `expanded` state of the panel.
   */
  onChange: import_prop_types49.default.func,
  /**
   * If `true`, rounded corners are disabled.
   */
  square: import_prop_types49.default.bool,
  /**
   * The component used for the collapse effect.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: import_prop_types49.default.elementType,
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: import_prop_types49.default.object
} : void 0;
var ExpansionPanel_default = withStyles_default(styles72, {
  name: "MuiExpansionPanel"
})(ExpansionPanel);

// node_modules/@material-ui/core/esm/ExpansionPanelActions/ExpansionPanelActions.js
init_extends();
var React67 = __toESM(require_react());
var import_prop_types50 = __toESM(require_prop_types());
init_clsx_m();
var styles74 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end"
  },
  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    "& > :not(:first-child)": {
      marginLeft: 8
    }
  }
};
var warnedOnce2 = false;
var ExpansionPanelActions = React67.forwardRef(function ExpansionPanelActions2(props, ref) {
  if (true) {
    if (!warnedOnce2) {
      warnedOnce2 = true;
      console.error(["Material-UI: the ExpansionPanelActions component was renamed to AccordionActions to use a more common naming convention.", "", "You should use `import { AccordionActions } from '@material-ui/core'`", "or `import AccordionActions from '@material-ui/core/AccordionActions'`"].join("\n"));
    }
  }
  var classes = props.classes, className = props.className, _props$disableSpacing = props.disableSpacing, disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing, other = _objectWithoutProperties(props, ["classes", "className", "disableSpacing"]);
  return React67.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, !disableSpacing && classes.spacing),
    ref
  }, other));
});
true ? ExpansionPanelActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types50.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types50.default.object,
  /**
   * @ignore
   */
  className: import_prop_types50.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: import_prop_types50.default.bool
} : void 0;
var ExpansionPanelActions_default = withStyles_default(styles74, {
  name: "MuiExpansionPanelActions"
})(ExpansionPanelActions);

// node_modules/@material-ui/core/esm/ExpansionPanelDetails/ExpansionPanelDetails.js
init_extends();
var React68 = __toESM(require_react());
var import_prop_types51 = __toESM(require_prop_types());
init_clsx_m();
var styles75 = function styles76(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var warnedOnce3 = false;
var ExpansionPanelDetails = React68.forwardRef(function ExpansionPanelDetails2(props, ref) {
  if (true) {
    if (!warnedOnce3) {
      warnedOnce3 = true;
      console.error(["Material-UI: the ExpansionPanelDetails component was renamed to AccordionDetails to use a more common naming convention.", "", "You should use `import { AccordionDetails } from '@material-ui/core'`", "or `import AccordionDetails from '@material-ui/core/AccordionActions'`"].join("\n"));
    }
  }
  var classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["classes", "className"]);
  return React68.createElement("div", _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other));
});
true ? ExpansionPanelDetails.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the expansion panel details.
   */
  children: import_prop_types51.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types51.default.object,
  /**
   * @ignore
   */
  className: import_prop_types51.default.string
} : void 0;
var ExpansionPanelDetails_default = withStyles_default(styles75, {
  name: "MuiExpansionPanelDetails"
})(ExpansionPanelDetails);

// node_modules/@material-ui/core/esm/ExpansionPanelSummary/ExpansionPanelSummary.js
init_extends();
var React69 = __toESM(require_react());
var import_prop_types52 = __toESM(require_prop_types());
init_clsx_m();
var styles77 = function styles78(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      minHeight: 8 * 6,
      transition: theme.transitions.create(["min-height", "background-color"], transition),
      padding: theme.spacing(0, 2),
      "&:hover:not($disabled)": {
        cursor: "pointer"
      },
      "&$expanded": {
        minHeight: 64
      },
      "&$focused": {
        backgroundColor: theme.palette.action.focus
      },
      "&$disabled": {
        opacity: theme.palette.action.disabledOpacity
      }
    },
    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},
    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the children wrapper element. */
    content: {
      display: "flex",
      flexGrow: 1,
      transition: theme.transitions.create(["margin"], transition),
      margin: "12px 0",
      "&$expanded": {
        margin: "20px 0"
      }
    },
    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", transition),
      "&:hover": {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: "transparent"
      },
      "&$expanded": {
        transform: "rotate(180deg)"
      }
    }
  };
};
var warnedOnce4 = false;
var ExpansionPanelSummary = React69.forwardRef(function ExpansionPanelSummary2(props, ref) {
  if (true) {
    if (!warnedOnce4) {
      warnedOnce4 = true;
      console.error(["Material-UI: the ExpansionPanelSummary component was renamed to AccordionSummary to use a more common naming convention.", "", "You should use `import { AccordionSummary } from '@material-ui/core'`", "or `import AccordionSummary from '@material-ui/core/AccordionSummary'`"].join("\n"));
    }
  }
  var children = props.children, classes = props.classes, className = props.className, expandIcon = props.expandIcon, IconButtonProps = props.IconButtonProps, onBlur = props.onBlur, onClick = props.onClick, onFocusVisible = props.onFocusVisible, other = _objectWithoutProperties(props, ["children", "classes", "className", "expandIcon", "IconButtonProps", "onBlur", "onClick", "onFocusVisible"]);
  var _React$useState = React69.useState(false), focusedState = _React$useState[0], setFocusedState = _React$useState[1];
  var handleFocusVisible = function handleFocusVisible2(event) {
    setFocusedState(true);
    if (onFocusVisible) {
      onFocusVisible(event);
    }
  };
  var handleBlur = function handleBlur2(event) {
    setFocusedState(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  var _React$useContext = React69.useContext(ExpansionPanelContext_default), _React$useContext$dis = _React$useContext.disabled, disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis, expanded = _React$useContext.expanded, toggle = _React$useContext.toggle;
  var handleChange = function handleChange2(event) {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  return React69.createElement(ButtonBase_default, _extends({
    focusRipple: false,
    disableRipple: true,
    disabled,
    component: "div",
    "aria-expanded": expanded,
    className: clsx_m_default(classes.root, className, disabled && classes.disabled, expanded && classes.expanded, focusedState && classes.focused),
    onFocusVisible: handleFocusVisible,
    onBlur: handleBlur,
    onClick: handleChange,
    ref
  }, other), React69.createElement("div", {
    className: clsx_m_default(classes.content, expanded && classes.expanded)
  }, children), expandIcon && React69.createElement(IconButton_default, _extends({
    className: clsx_m_default(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
true ? ExpansionPanelSummary.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the expansion panel summary.
   */
  children: import_prop_types52.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types52.default.object,
  /**
   * @ignore
   */
  className: import_prop_types52.default.string,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: import_prop_types52.default.node,
  /**
   * Props applied to the `IconButton` element wrapping the expand icon.
   */
  IconButtonProps: import_prop_types52.default.object,
  /**
   * @ignore
   */
  onBlur: import_prop_types52.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types52.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types52.default.func
} : void 0;
var ExpansionPanelSummary_default = withStyles_default(styles77, {
  name: "MuiExpansionPanelSummary"
})(ExpansionPanelSummary);

// node_modules/@material-ui/core/esm/Fab/Fab.js
init_extends();
var React70 = __toESM(require_react());
var import_prop_types53 = __toESM(require_prop_types());
init_clsx_m();
var styles79 = function styles80(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, {
      boxSizing: "border-box",
      minHeight: 36,
      transition: theme.transitions.create(["background-color", "box-shadow", "border"], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: "50%",
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      "&:active": {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      "&:hover": {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.grey[300]
        },
        "&$disabled": {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: "none"
      },
      "&$focusVisible": {
        boxShadow: theme.shadows[6]
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),
    /* Styles applied to the span element that wraps the children. */
    label: {
      width: "100%",
      // assure the correct width for iOS Safari
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit"
    },
    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: "0 16px",
      width: "auto",
      minHeight: "auto",
      minWidth: 48,
      height: 48,
      "&$sizeSmall": {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      "&$sizeMedium": {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },
    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit"
    },
    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },
    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab = React70.forwardRef(function Fab2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, focusVisibleClassName = props.focusVisibleClassName, _props$size = props.size, size = _props$size === void 0 ? "large" : _props$size, _props$variant = props.variant, variant = _props$variant === void 0 ? "circular" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);
  return React70.createElement(ButtonBase_default, _extends({
    className: clsx_m_default(classes.root, className, size !== "large" && classes["size".concat(capitalize(size))], disabled && classes.disabled, variant === "extended" && classes.extended, {
      "primary": classes.primary,
      "secondary": classes.secondary,
      "inherit": classes.colorInherit
    }[color]),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
    ref
  }, other), React70.createElement("span", {
    className: classes.label
  }, children));
});
true ? Fab.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the button.
   */
  children: import_prop_types53.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types53.default.object,
  /**
   * @ignore
   */
  className: import_prop_types53.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types53.default.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types53.default.elementType,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: import_prop_types53.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: import_prop_types53.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: import_prop_types53.default.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types53.default.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: import_prop_types53.default.string,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: import_prop_types53.default.oneOf(["large", "medium", "small"]),
  /**
   * The variant to use.
   * 'round' is deprecated, use 'circular' instead.
   */
  variant: chainPropTypes(import_prop_types53.default.oneOf(["extended", "circular", "round"]), function(props) {
    if (props.variant === "round") {
      throw new Error('Material-UI: variant="round" was renamed variant="circular" for consistency.');
    }
    return null;
  })
} : void 0;
var Fab_default = withStyles_default(styles79, {
  name: "MuiFab"
})(Fab);

// node_modules/@material-ui/core/esm/FilledInput/FilledInput.js
init_extends();
var React73 = __toESM(require_react());
var import_prop_types56 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/InputBase/InputBase.js
init_extends();
var React72 = __toESM(require_react());
var import_prop_types55 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/FormControl/formControlState.js
function formControlState(_ref6) {
  var props = _ref6.props, states = _ref6.states, muiFormControl = _ref6.muiFormControl;
  return states.reduce(function(acc, state) {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

// node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js
init_extends();
var React71 = __toESM(require_react());
var import_prop_types54 = __toESM(require_prop_types());
function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}
var useEnhancedEffect4 = typeof window !== "undefined" ? React71.useLayoutEffect : React71.useEffect;
var styles81 = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
var TextareaAutosize = React71.forwardRef(function TextareaAutosize2(props, ref) {
  var onChange = props.onChange, rows = props.rows, rowsMax = props.rowsMax, rowsMinProp = props.rowsMin, maxRowsProp = props.maxRows, _props$minRows = props.minRows, minRowsProp = _props$minRows === void 0 ? 1 : _props$minRows, style = props.style, value = props.value, other = _objectWithoutProperties(props, ["onChange", "rows", "rowsMax", "rowsMin", "maxRows", "minRows", "style", "value"]);
  var maxRows = maxRowsProp || rowsMax;
  var minRows = rows || rowsMinProp || minRowsProp;
  var _React$useRef = React71.useRef(value != null), isControlled = _React$useRef.current;
  var inputRef = React71.useRef(null);
  var handleRef = useForkRef(ref, inputRef);
  var shadowRef = React71.useRef(null);
  var renders = React71.useRef(0);
  var _React$useState = React71.useState({}), state = _React$useState[0], setState = _React$useState[1];
  var syncHeight = React71.useCallback(function() {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    var boxSizing = computedStyle["box-sizing"];
    var padding = getStyleValue(computedStyle, "padding-bottom") + getStyleValue(computedStyle, "padding-top");
    var border = getStyleValue(computedStyle, "border-bottom-width") + getStyleValue(computedStyle, "border-top-width");
    var innerHeight = inputShallow.scrollHeight - padding;
    inputShallow.value = "x";
    var singleRowHeight = inputShallow.scrollHeight - padding;
    var outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    var outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function(prevState) {
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow,
          outerHeightStyle
        };
      }
      if (true) {
        if (renders.current === 20) {
          console.error(["Material-UI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join("\n"));
        }
      }
      return prevState;
    });
  }, [maxRows, minRows, props.placeholder]);
  React71.useEffect(function() {
    var handleResize = debounce(function() {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect4(function() {
    syncHeight();
  });
  React71.useEffect(function() {
    renders.current = 0;
  }, [value]);
  var handleChange = function handleChange2(event) {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return React71.createElement(React71.Fragment, null, React71.createElement("textarea", _extends({
    value,
    onChange: handleChange,
    ref: handleRef,
    rows: minRows,
    style: _extends({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? "hidden" : null
    }, style)
  }, other)), React71.createElement("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: _extends({}, styles81.shadow, style)
  }));
});
true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: import_prop_types54.default.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types54.default.oneOfType([import_prop_types54.default.number, import_prop_types54.default.string]),
  /**
   * Minimum number of rows to display.
   */
  minRows: import_prop_types54.default.oneOfType([import_prop_types54.default.number, import_prop_types54.default.string]),
  /**
   * @ignore
   */
  onChange: import_prop_types54.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types54.default.string,
  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rows: deprecatedPropType(import_prop_types54.default.oneOfType([import_prop_types54.default.number, import_prop_types54.default.string]), "Use `minRows` instead."),
  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: deprecatedPropType(import_prop_types54.default.oneOfType([import_prop_types54.default.number, import_prop_types54.default.string]), "Use `maxRows` instead."),
  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rowsMin: deprecatedPropType(import_prop_types54.default.oneOfType([import_prop_types54.default.number, import_prop_types54.default.string]), "Use `minRows` instead."),
  /**
   * @ignore
   */
  style: import_prop_types54.default.object,
  /**
   * @ignore
   */
  value: import_prop_types54.default.oneOfType([import_prop_types54.default.arrayOf(import_prop_types54.default.string), import_prop_types54.default.number, import_prop_types54.default.string])
} : void 0;
var TextareaAutosize_default = TextareaAutosize;

// node_modules/@material-ui/core/esm/InputBase/utils.js
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}

// node_modules/@material-ui/core/esm/InputBase/InputBase.js
var styles82 = function styles83(theme) {
  var light = theme.palette.type === "light";
  var placeholder = {
    color: "currentColor",
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: "0 !important"
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    "@global": {
      "@keyframes mui-auto-fill": {},
      "@keyframes mui-auto-fill-cancel": {}
    },
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: "1.1876em",
      // Reset (19px), match the native input line-height
      boxSizing: "border-box",
      // Prevent padding issue with fullWidth.
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      "&$disabled": {
        color: theme.palette.text.disabled,
        cursor: "default"
      }
    }),
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},
    /* Styles applied to the root element if the component is focused. */
    focused: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},
    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      "&$marginDense": {
        paddingTop: 4 - 1
      }
    },
    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: "100%"
    },
    /* Styles applied to the `input` element. */
    input: {
      font: "inherit",
      letterSpacing: "inherit",
      color: "currentColor",
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: "content-box",
      background: "none",
      height: "1.1876em",
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: "transparent",
      display: "block",
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: "100%",
      // Fix IE 11 width issue
      animationName: "mui-auto-fill-cancel",
      animationDuration: "10ms",
      "&::-webkit-input-placeholder": placeholder,
      "&::-moz-placeholder": placeholder,
      // Firefox 19+
      "&:-ms-input-placeholder": placeholder,
      // IE 11
      "&::-ms-input-placeholder": placeholder,
      // Edge
      "&:focus": {
        outline: 0
      },
      // Reset Firefox invalid required input style
      "&:invalid": {
        boxShadow: "none"
      },
      "&::-webkit-search-decoration": {
        // Remove the padding when type=search.
        "-webkit-appearance": "none"
      },
      // Show and hide the placeholder logic
      "label[data-shrink=false] + $formControl &": {
        "&::-webkit-input-placeholder": placeholderHidden,
        "&::-moz-placeholder": placeholderHidden,
        // Firefox 19+
        "&:-ms-input-placeholder": placeholderHidden,
        // IE 11
        "&::-ms-input-placeholder": placeholderHidden,
        // Edge
        "&:focus::-webkit-input-placeholder": placeholderVisible,
        "&:focus::-moz-placeholder": placeholderVisible,
        // Firefox 19+
        "&:focus:-ms-input-placeholder": placeholderVisible,
        // IE 11
        "&:focus::-ms-input-placeholder": placeholderVisible
        // Edge
      },
      "&$disabled": {
        opacity: 1
        // Reset iOS opacity
      },
      "&:-webkit-autofill": {
        animationDuration: "5000s",
        animationName: "mui-auto-fill"
      }
    },
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: "auto",
      resize: "none",
      padding: 0
    },
    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      "-moz-appearance": "textfield",
      "-webkit-appearance": "textfield"
    },
    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},
    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},
    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect5 = typeof window === "undefined" ? React72.useEffect : React72.useLayoutEffect;
var InputBase = React72.forwardRef(function InputBase2(props, ref) {
  var ariaDescribedby = props["aria-describedby"], autoComplete = props.autoComplete, autoFocus = props.autoFocus, classes = props.classes, className = props.className, color = props.color, defaultValue = props.defaultValue, disabled = props.disabled, endAdornment = props.endAdornment, error = props.error, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, id = props.id, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$inputProps = props.inputProps, inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps, inputRefProp = props.inputRef, margin = props.margin, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onClick = props.onClick, onFocus = props.onFocus, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, placeholder = props.placeholder, readOnly = props.readOnly, renderSuffix = props.renderSuffix, rows = props.rows, rowsMax = props.rowsMax, rowsMin = props.rowsMin, maxRows = props.maxRows, minRows = props.minRows, startAdornment = props.startAdornment, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, valueProp = props.value, other = _objectWithoutProperties(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "maxRows", "minRows", "startAdornment", "type", "value"]);
  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  var _React$useRef = React72.useRef(value != null), isControlled = _React$useRef.current;
  var inputRef = React72.useRef();
  var handleInputRefWarning = React72.useCallback(function(instance) {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["Material-UI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `inputRef` prop.", "Make sure the `inputRef` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  var handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = useForkRef(inputRef, handleInputRefProp);
  var _React$useState = React72.useState(false), focused = _React$useState[0], setFocused = _React$useState[1];
  var muiFormControl = useFormControl();
  if (true) {
    React72.useEffect(function() {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }
      return void 0;
    }, [muiFormControl]);
  }
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "margin", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  React72.useEffect(function() {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = React72.useCallback(function(obj) {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect5(function() {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  var handleFocus = function handleFocus2(event) {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  var handleBlur = function handleBlur2(event) {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info." : formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    }
    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  };
  React72.useEffect(function() {
    checkDirty(inputRef.current);
  }, []);
  var handleClick = function handleClick2(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  var InputComponent = inputComponent;
  var inputProps = _extends({}, inputPropsProp, {
    ref: handleInputRef
  });
  if (typeof InputComponent !== "string") {
    inputProps = _extends({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !maxRows && !minRows && !rowsMax && !rowsMin) {
      InputComponent = "textarea";
    } else {
      inputProps = _extends({
        minRows: rows || minRows,
        rowsMax,
        maxRows
      }, inputProps);
      InputComponent = TextareaAutosize_default;
    }
  } else {
    inputProps = _extends({
      type
    }, inputProps);
  }
  var handleAutoFill = function handleAutoFill2(event) {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React72.useEffect(function() {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return React72.createElement("div", _extends({
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(fcs.color || "primary"))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === "dense" && classes.marginDense),
    onClick: handleClick,
    ref
  }, other), startAdornment, React72.createElement(FormControlContext_default.Provider, {
    value: null
  }, React72.createElement(InputComponent, _extends({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    defaultValue,
    disabled: fcs.disabled,
    id,
    onAnimationStart: handleAutoFill,
    name,
    placeholder,
    readOnly,
    required: fcs.required,
    rows,
    value,
    onKeyDown,
    onKeyUp
  }, inputProps, {
    className: clsx_m_default(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === "search" && classes.inputTypeSearch, fcs.margin === "dense" && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
    startAdornment
  })) : null);
});
true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types55.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types55.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types55.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types55.default.object,
  /**
   * @ignore
   */
  className: import_prop_types55.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types55.default.oneOf(["primary", "secondary"]),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types55.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types55.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types55.default.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: import_prop_types55.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types55.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types55.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: import_prop_types55.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types55.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types55.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: import_prop_types55.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types55.default.string,
  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: import_prop_types55.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types55.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types55.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types55.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types55.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types55.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types55.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types55.default.bool,
  /**
   * @ignore
   */
  renderSuffix: import_prop_types55.default.func,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types55.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rowsMin: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types55.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types55.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types55.default.any
} : void 0;
var InputBase_default = withStyles_default(styles82, {
  name: "MuiInputBase"
})(InputBase);

// node_modules/@material-ui/core/esm/FilledInput/FilledInput.js
var styles84 = function styles85(theme) {
  var light = theme.palette.type === "light";
  var bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  var backgroundColor = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)";
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: light ? "rgba(0, 0, 0, 0.13)" : "rgba(255, 255, 255, 0.13)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor
        }
      },
      "&$focused": {
        backgroundColor: light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)"
      },
      "&$disabled": {
        backgroundColor: light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"
      }
    },
    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      "&$underline:after": {
        borderBottomColor: theme.palette.secondary.main
      }
    },
    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      "&:after": {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: "absolute",
        right: 0,
        transform: "scaleX(0)",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: "none"
        // Transparent to the hover style.
      },
      "&$focused:after": {
        transform: "scaleX(1)"
      },
      "&$error:after": {
        borderBottomColor: theme.palette.error.main,
        transform: "scaleX(1)"
        // error is always underlined in red
      },
      "&:before": {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: "absolute",
        right: 0,
        transition: theme.transitions.create("border-bottom-color", {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: "none"
        // Transparent to the hover style.
      },
      "&:hover:before": {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      "&$disabled:before": {
        borderBottomStyle: "dotted"
      }
    },
    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },
    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "27px 12px 10px",
      "&$marginDense": {
        paddingTop: 23,
        paddingBottom: 6
      }
    },
    /* Styles applied to the `input` element. */
    input: {
      padding: "27px 12px 10px",
      "&:-webkit-autofill": {
        WebkitBoxShadow: theme.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.type === "light" ? null : "#fff",
        caretColor: theme.palette.type === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }
    },
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },
    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      "&$inputMarginDense": {
        paddingTop: 10,
        paddingBottom: 11
      }
    },
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },
    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },
    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = React73.forwardRef(function FilledInput2(props, ref) {
  var disableUnderline = props.disableUnderline, classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);
  return React73.createElement(InputBase_default, _extends({
    classes: _extends({}, classes, {
      root: clsx_m_default(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
true ? FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types56.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types56.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types56.default.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types56.default.oneOf(["primary", "secondary"]),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types56.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types56.default.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: import_prop_types56.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types56.default.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: import_prop_types56.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types56.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types56.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: import_prop_types56.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types56.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types56.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types56.default.oneOfType([import_prop_types56.default.number, import_prop_types56.default.string]),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: import_prop_types56.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types56.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types56.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types56.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types56.default.bool,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types56.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types56.default.oneOfType([import_prop_types56.default.number, import_prop_types56.default.string]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types56.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types56.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types56.default.any
} : void 0;
FilledInput.muiName = "Input";
var FilledInput_default = withStyles_default(styles84, {
  name: "MuiFilledInput"
})(FilledInput);

// node_modules/@material-ui/core/esm/FormControl/FormControl.js
init_extends();
var React74 = __toESM(require_react());
var import_prop_types57 = __toESM(require_prop_types());
init_clsx_m();
var styles86 = {
  /* Styles applied to the root element. */
  root: {
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top"
    // Fix alignment issue on Safari.
  },
  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },
  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },
  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: "100%"
  }
};
var FormControl = React74.forwardRef(function FormControl2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$error = props.error, error = _props$error === void 0 ? false : _props$error, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, visuallyFocused = props.focused, _props$hiddenLabel = props.hiddenLabel, hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel, _props$margin = props.margin, margin = _props$margin === void 0 ? "none" : _props$margin, _props$required = props.required, required = _props$required === void 0 ? false : _props$required, size = props.size, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);
  var _React$useState = React74.useState(function() {
    var initialAdornedStart = false;
    if (children) {
      React74.Children.forEach(children, function(child) {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        var input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  }), adornedStart = _React$useState[0], setAdornedStart = _React$useState[1];
  var _React$useState2 = React74.useState(function() {
    var initialFilled = false;
    if (children) {
      React74.Children.forEach(children, function(child) {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  }), filled = _React$useState2[0], setFilled = _React$useState2[1];
  var _React$useState3 = React74.useState(false), _focused = _React$useState3[0], setFocused = _React$useState3[1];
  var focused = visuallyFocused !== void 0 ? visuallyFocused : _focused;
  if (disabled && focused) {
    setFocused(false);
  }
  var registerEffect;
  if (true) {
    var registeredInput = React74.useRef(false);
    registerEffect = function registerEffect2() {
      if (registeredInput.current) {
        console.error(["Material-UI: There are multiple InputBase components inside a FormControl.", "This is not supported. It might cause infinite rendering loops.", "Only use one InputBase."].join("\n"));
      }
      registeredInput.current = true;
      return function() {
        registeredInput.current = false;
      };
    };
  }
  var onFilled = React74.useCallback(function() {
    setFilled(true);
  }, []);
  var onEmpty = React74.useCallback(function() {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart,
    setAdornedStart,
    color,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    margin: (size === "small" ? "dense" : void 0) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty,
    onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return React74.createElement(FormControlContext_default.Provider, {
    value: childContext
  }, React74.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, margin !== "none" && classes["margin".concat(capitalize(margin))], fullWidth && classes.fullWidth),
    ref
  }, other), children));
});
true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The contents of the form control.
   */
  children: import_prop_types57.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types57.default.object,
  /**
   * @ignore
   */
  className: import_prop_types57.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types57.default.oneOf(["primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types57.default.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: import_prop_types57.default.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: import_prop_types57.default.bool,
  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused: import_prop_types57.default.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: import_prop_types57.default.bool,
  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: import_prop_types57.default.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: import_prop_types57.default.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: import_prop_types57.default.bool,
  /**
   * The size of the text field.
   */
  size: import_prop_types57.default.oneOf(["medium", "small"]),
  /**
   * The variant to use.
   */
  variant: import_prop_types57.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var FormControl_default = withStyles_default(styles86, {
  name: "MuiFormControl"
})(FormControl);

// node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
init_extends();
var React75 = __toESM(require_react());
var import_prop_types58 = __toESM(require_prop_types());
init_clsx_m();
var styles87 = function styles88(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      // For correct alignment with the text.
      verticalAlign: "middle",
      WebkitTapHighlightColor: "transparent",
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      "&$disabled": {
        cursor: "default"
      }
    },
    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: "row-reverse",
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },
    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: "column-reverse",
      marginLeft: 16
    },
    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: "column",
      marginLeft: 16
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the label's Typography component. */
    label: {
      "&$disabled": {
        color: theme.palette.text.disabled
      }
    }
  };
};
var FormControlLabel = React75.forwardRef(function FormControlLabel2(props, ref) {
  var checked = props.checked, classes = props.classes, className = props.className, control = props.control, disabledProp = props.disabled, inputRef = props.inputRef, label = props.label, _props$labelPlacement = props.labelPlacement, labelPlacement = _props$labelPlacement === void 0 ? "end" : _props$labelPlacement, name = props.name, onChange = props.onChange, value = props.value, other = _objectWithoutProperties(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);
  var muiFormControl = useFormControl2();
  var disabled = disabledProp;
  if (typeof disabled === "undefined" && typeof control.props.disabled !== "undefined") {
    disabled = control.props.disabled;
  }
  if (typeof disabled === "undefined" && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  var controlProps = {
    disabled
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach(function(key) {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  return React75.createElement("label", _extends({
    className: clsx_m_default(classes.root, className, labelPlacement !== "end" && classes["labelPlacement".concat(capitalize(labelPlacement))], disabled && classes.disabled),
    ref
  }, other), React75.cloneElement(control, controlProps), React75.createElement(Typography_default, {
    component: "span",
    className: clsx_m_default(classes.label, disabled && classes.disabled)
  }, label));
});
true ? FormControlLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component appears selected.
   */
  checked: import_prop_types58.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types58.default.object,
  /**
   * @ignore
   */
  className: import_prop_types58.default.string,
  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: import_prop_types58.default.element.isRequired,
  /**
   * If `true`, the control will be disabled.
   */
  disabled: import_prop_types58.default.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The text to be used in an enclosing label element.
   */
  label: import_prop_types58.default.node,
  /**
   * The position of the label.
   */
  labelPlacement: import_prop_types58.default.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: import_prop_types58.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types58.default.func,
  /**
   * The value of the component.
   */
  value: import_prop_types58.default.any
} : void 0;
var FormControlLabel_default = withStyles_default(styles87, {
  name: "MuiFormControlLabel"
})(FormControlLabel);

// node_modules/@material-ui/core/esm/FormGroup/FormGroup.js
init_extends();
var React76 = __toESM(require_react());
var import_prop_types59 = __toESM(require_prop_types());
init_clsx_m();
var styles89 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: "row"
  }
};
var FormGroup = React76.forwardRef(function FormGroup2(props, ref) {
  var classes = props.classes, className = props.className, _props$row = props.row, row = _props$row === void 0 ? false : _props$row, other = _objectWithoutProperties(props, ["classes", "className", "row"]);
  return React76.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, row && classes.row),
    ref
  }, other));
});
true ? FormGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types59.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types59.default.object,
  /**
   * @ignore
   */
  className: import_prop_types59.default.string,
  /**
   * Display group of elements in a compact row.
   */
  row: import_prop_types59.default.bool
} : void 0;
var FormGroup_default = withStyles_default(styles89, {
  name: "MuiFormGroup"
})(FormGroup);

// node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js
init_extends();
var React77 = __toESM(require_react());
var import_prop_types60 = __toESM(require_prop_types());
init_clsx_m();
var styles90 = function styles91(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: "left",
      marginTop: 3,
      margin: 0,
      "&$disabled": {
        color: theme.palette.text.disabled
      },
      "&$error": {
        color: theme.palette.error.main
      }
    }),
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },
    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },
    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},
    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},
    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = React77.forwardRef(function FormHelperText2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "p" : _props$component, disabled = props.disabled, error = props.error, filled = props.filled, focused = props.focused, margin = props.margin, required = props.required, variant = props.variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);
  var muiFormControl = useFormControl2();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "margin", "disabled", "error", "filled", "focused", "required"]
  });
  return React77.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, (fcs.variant === "filled" || fcs.variant === "outlined") && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === "dense" && classes.marginDense),
    ref
  }, other), children === " " ? (
    // eslint-disable-next-line react/no-danger
    React77.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "&#8203;"
      }
    })
  ) : children);
});
true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: import_prop_types60.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types60.default.object,
  /**
   * @ignore
   */
  className: import_prop_types60.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types60.default.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: import_prop_types60.default.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: import_prop_types60.default.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: import_prop_types60.default.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: import_prop_types60.default.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types60.default.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: import_prop_types60.default.bool,
  /**
   * The variant to use.
   */
  variant: import_prop_types60.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var FormHelperText_default = withStyles_default(styles90, {
  name: "MuiFormHelperText"
})(FormHelperText);

// node_modules/@material-ui/core/esm/FormLabel/FormLabel.js
init_extends();
var React78 = __toESM(require_react());
var import_prop_types61 = __toESM(require_prop_types());
init_clsx_m();
var styles92 = function styles93(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      "&$focused": {
        color: theme.palette.primary.main
      },
      "&$disabled": {
        color: theme.palette.text.disabled
      },
      "&$error": {
        color: theme.palette.error.main
      }
    }),
    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      "&$focused": {
        color: theme.palette.secondary.main
      }
    },
    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},
    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},
    /* Styles applied to the asterisk element. */
    asterisk: {
      "&$error": {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = React78.forwardRef(function FormLabel2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, color = props.color, _props$component = props.component, Component6 = _props$component === void 0 ? "label" : _props$component, disabled = props.disabled, error = props.error, filled = props.filled, focused = props.focused, required = props.required, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);
  var muiFormControl = useFormControl2();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  return React78.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(fcs.color || "primary"))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref
  }, other), children, fcs.required && React78.createElement("span", {
    "aria-hidden": true,
    className: clsx_m_default(classes.asterisk, fcs.error && classes.error)
  }, " ", "*"));
});
true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types61.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types61.default.object,
  /**
   * @ignore
   */
  className: import_prop_types61.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types61.default.oneOf(["primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types61.default.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: import_prop_types61.default.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: import_prop_types61.default.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: import_prop_types61.default.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: import_prop_types61.default.bool,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: import_prop_types61.default.bool
} : void 0;
var FormLabel_default = withStyles_default(styles92, {
  name: "MuiFormLabel"
})(FormLabel);

// node_modules/@material-ui/core/esm/Grid/Grid.js
init_extends();
var React79 = __toESM(require_react());
var import_prop_types62 = __toESM(require_prop_types());
init_clsx_m();
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function generateGrid(globalStyles, theme, breakpoint) {
  var styles195 = {};
  GRID_SIZES.forEach(function(size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);
    if (size === true) {
      styles195[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
      return;
    }
    if (size === "auto") {
      styles195[key] = {
        flexBasis: "auto",
        flexGrow: 0,
        maxWidth: "none"
      };
      return;
    }
    var width = "".concat(Math.round(size / 12 * 1e8) / 1e6, "%");
    styles195[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  });
  if (breakpoint === "xs") {
    _extends(globalStyles, styles195);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles195;
  }
}
function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), "") || "px");
}
function generateGutter(theme, breakpoint) {
  var styles195 = {};
  SPACINGS.forEach(function(spacing) {
    var themeSpacing = theme.spacing(spacing);
    if (themeSpacing === 0) {
      return;
    }
    styles195["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      "& > $item": {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles195;
}
var styles94 = function styles95(theme) {
  return _extends({
    /* Styles applied to the root element. */
    root: {},
    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: "border-box",
      display: "flex",
      flexWrap: "wrap",
      width: "100%"
    },
    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: "border-box",
      margin: "0"
      // For instance, it's useful when used with a `figure` element.
    },
    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },
    /* Styles applied to the root element if `direction="column"`. */
    "direction-xs-column": {
      flexDirection: "column"
    },
    /* Styles applied to the root element if `direction="column-reverse"`. */
    "direction-xs-column-reverse": {
      flexDirection: "column-reverse"
    },
    /* Styles applied to the root element if `direction="row-reverse"`. */
    "direction-xs-row-reverse": {
      flexDirection: "row-reverse"
    },
    /* Styles applied to the root element if `wrap="nowrap"`. */
    "wrap-xs-nowrap": {
      flexWrap: "nowrap"
    },
    /* Styles applied to the root element if `wrap="reverse"`. */
    "wrap-xs-wrap-reverse": {
      flexWrap: "wrap-reverse"
    },
    /* Styles applied to the root element if `alignItems="center"`. */
    "align-items-xs-center": {
      alignItems: "center"
    },
    /* Styles applied to the root element if `alignItems="flex-start"`. */
    "align-items-xs-flex-start": {
      alignItems: "flex-start"
    },
    /* Styles applied to the root element if `alignItems="flex-end"`. */
    "align-items-xs-flex-end": {
      alignItems: "flex-end"
    },
    /* Styles applied to the root element if `alignItems="baseline"`. */
    "align-items-xs-baseline": {
      alignItems: "baseline"
    },
    /* Styles applied to the root element if `alignContent="center"`. */
    "align-content-xs-center": {
      alignContent: "center"
    },
    /* Styles applied to the root element if `alignContent="flex-start"`. */
    "align-content-xs-flex-start": {
      alignContent: "flex-start"
    },
    /* Styles applied to the root element if `alignContent="flex-end"`. */
    "align-content-xs-flex-end": {
      alignContent: "flex-end"
    },
    /* Styles applied to the root element if `alignContent="space-between"`. */
    "align-content-xs-space-between": {
      alignContent: "space-between"
    },
    /* Styles applied to the root element if `alignContent="space-around"`. */
    "align-content-xs-space-around": {
      alignContent: "space-around"
    },
    /* Styles applied to the root element if `justifyContent="center"`. */
    "justify-content-xs-center": {
      justifyContent: "center"
    },
    /* Styles applied to the root element if `justifyContent="flex-end"`. */
    "justify-content-xs-flex-end": {
      justifyContent: "flex-end"
    },
    /* Styles applied to the root element if `justifyContent="space-between"`. */
    "justify-content-xs-space-between": {
      justifyContent: "space-between"
    },
    /* Styles applied to the root element if `justifyContent="space-around"`. */
    "justify-content-xs-space-around": {
      justifyContent: "space-around"
    },
    /* Styles applied to the root element if `justifyContent="space-evenly"`. */
    "justify-content-xs-space-evenly": {
      justifyContent: "space-evenly"
    }
  }, generateGutter(theme, "xs"), theme.breakpoints.keys.reduce(function(accumulator, key) {
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = React79.forwardRef(function Grid2(props, ref) {
  var _props$alignContent = props.alignContent, alignContent = _props$alignContent === void 0 ? "stretch" : _props$alignContent, _props$alignItems = props.alignItems, alignItems = _props$alignItems === void 0 ? "stretch" : _props$alignItems, classes = props.classes, classNameProp = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$container = props.container, container = _props$container === void 0 ? false : _props$container, _props$direction = props.direction, direction = _props$direction === void 0 ? "row" : _props$direction, _props$item = props.item, item = _props$item === void 0 ? false : _props$item, justify = props.justify, _props$justifyContent = props.justifyContent, justifyContent = _props$justifyContent === void 0 ? "flex-start" : _props$justifyContent, _props$lg = props.lg, lg = _props$lg === void 0 ? false : _props$lg, _props$md = props.md, md = _props$md === void 0 ? false : _props$md, _props$sm = props.sm, sm = _props$sm === void 0 ? false : _props$sm, _props$spacing = props.spacing, spacing = _props$spacing === void 0 ? 0 : _props$spacing, _props$wrap = props.wrap, wrap = _props$wrap === void 0 ? "wrap" : _props$wrap, _props$xl = props.xl, xl = _props$xl === void 0 ? false : _props$xl, _props$xs = props.xs, xs = _props$xs === void 0 ? false : _props$xs, _props$zeroMinWidth = props.zeroMinWidth, zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth, other = _objectWithoutProperties(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "justifyContent", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);
  var className = clsx_m_default(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== "row" && classes["direction-xs-".concat(String(direction))], wrap !== "wrap" && classes["wrap-xs-".concat(String(wrap))], alignItems !== "stretch" && classes["align-items-xs-".concat(String(alignItems))], alignContent !== "stretch" && classes["align-content-xs-".concat(String(alignContent))], (justify || justifyContent) !== "flex-start" && classes["justify-content-xs-".concat(String(justify || justifyContent))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return React79.createElement(Component6, _extends({
    className,
    ref
  }, other));
});
true ? Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: import_prop_types62.default.oneOf(["stretch", "center", "flex-start", "flex-end", "space-between", "space-around"]),
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: import_prop_types62.default.oneOf(["flex-start", "center", "flex-end", "stretch", "baseline"]),
  /**
   * The content of the component.
   */
  children: import_prop_types62.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types62.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types62.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types62.default.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: import_prop_types62.default.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: import_prop_types62.default.oneOf(["row", "row-reverse", "column", "column-reverse"]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: import_prop_types62.default.bool,
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   * @deprecated Use `justifyContent` instead, the prop was renamed
   */
  justify: deprecatedPropType(import_prop_types62.default.oneOf(["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"]), "Use `justifyContent` instead, the prop was renamed."),
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justifyContent: import_prop_types62.default.oneOf(["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: import_prop_types62.default.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: import_prop_types62.default.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: import_prop_types62.default.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: import_prop_types62.default.oneOf(SPACINGS),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: import_prop_types62.default.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: import_prop_types62.default.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: import_prop_types62.default.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: import_prop_types62.default.bool
} : void 0;
var StyledGrid = withStyles_default(styles94, {
  name: "MuiGrid"
})(Grid);
if (true) {
  requireProp = requirePropFactory("Grid");
  StyledGrid.propTypes = _extends({}, StyledGrid.propTypes, {
    alignContent: requireProp("container"),
    alignItems: requireProp("container"),
    direction: requireProp("container"),
    justifyContent: requireProp("container"),
    lg: requireProp("item"),
    md: requireProp("item"),
    sm: requireProp("item"),
    spacing: requireProp("container"),
    wrap: requireProp("container"),
    xs: requireProp("item"),
    zeroMinWidth: requireProp("item")
  });
}
var requireProp;
var Grid_default = StyledGrid;

// node_modules/@material-ui/core/esm/GridList/GridList.js
init_extends();
var React80 = __toESM(require_react());
var import_react_is6 = __toESM(require_react_is());
var import_prop_types63 = __toESM(require_prop_types());
init_clsx_m();
var styles96 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflowY: "auto",
    listStyle: "none",
    padding: 0,
    WebkitOverflowScrolling: "touch"
    // Add iOS momentum scrolling.
  }
};
var warnedOnce5 = false;
var GridList = React80.forwardRef(function GridList2(props, ref) {
  if (true) {
    if (!warnedOnce5) {
      warnedOnce5 = true;
      console.error(["Material-UI: The GridList component was renamed to ImageList to align with the current Material Design naming.", "", "You should use `import { ImageList } from '@material-ui/core'`", "or `import ImageList from '@material-ui/core/ImageList'`."].join("\n"));
    }
  }
  var _props$cellHeight = props.cellHeight, cellHeight = _props$cellHeight === void 0 ? 180 : _props$cellHeight, children = props.children, classes = props.classes, className = props.className, _props$cols = props.cols, cols = _props$cols === void 0 ? 2 : _props$cols, _props$component = props.component, Component6 = _props$component === void 0 ? "ul" : _props$component, _props$spacing = props.spacing, spacing = _props$spacing === void 0 ? 4 : _props$spacing, style = props.style, other = _objectWithoutProperties(props, ["cellHeight", "children", "classes", "className", "cols", "component", "spacing", "style"]);
  return React80.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref,
    style: _extends({
      margin: -spacing / 2
    }, style)
  }, other), React80.Children.map(children, function(child) {
    if (!React80.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is6.isFragment)(child)) {
        console.error(["Material-UI: The GridList component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return React80.cloneElement(child, {
      style: _extends({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === "auto" ? "auto" : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
});
true ? GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: import_prop_types63.default.oneOfType([import_prop_types63.default.number, import_prop_types63.default.oneOf(["auto"])]),
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: import_prop_types63.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types63.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types63.default.string,
  /**
   * Number of columns.
   */
  cols: import_prop_types63.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types63.default.elementType,
  /**
   * Number of px for the spacing between tiles.
   */
  spacing: import_prop_types63.default.number,
  /**
   * @ignore
   */
  style: import_prop_types63.default.object
} : void 0;
var GridList_default = withStyles_default(styles96, {
  name: "MuiGridList"
})(GridList);

// node_modules/@material-ui/core/esm/GridListTile/GridListTile.js
init_extends();
var React81 = __toESM(require_react());
var import_prop_types64 = __toESM(require_prop_types());
init_clsx_m();
var styles97 = {
  /* Styles applied to the root element. */
  root: {
    boxSizing: "border-box",
    flexShrink: 0
  },
  /* Styles applied to the `div` element that wraps the children. */
  tile: {
    position: "relative",
    display: "block",
    // In case it's not rendered with a div.
    height: "100%",
    overflow: "hidden"
  },
  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullHeight: {
    height: "100%",
    transform: "translateX(-50%)",
    position: "relative",
    left: "50%"
  },
  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullWidth: {
    width: "100%",
    position: "relative",
    transform: "translateY(-50%)",
    top: "50%"
  }
};
var fit = function fit2(imgEl, classes) {
  if (!imgEl || !imgEl.complete) {
    return;
  }
  if (imgEl.width / imgEl.height > imgEl.parentElement.offsetWidth / imgEl.parentElement.offsetHeight) {
    var _imgEl$classList, _imgEl$classList2;
    (_imgEl$classList = imgEl.classList).remove.apply(_imgEl$classList, _toConsumableArray(classes.imgFullWidth.split(" ")));
    (_imgEl$classList2 = imgEl.classList).add.apply(_imgEl$classList2, _toConsumableArray(classes.imgFullHeight.split(" ")));
  } else {
    var _imgEl$classList3, _imgEl$classList4;
    (_imgEl$classList3 = imgEl.classList).remove.apply(_imgEl$classList3, _toConsumableArray(classes.imgFullHeight.split(" ")));
    (_imgEl$classList4 = imgEl.classList).add.apply(_imgEl$classList4, _toConsumableArray(classes.imgFullWidth.split(" ")));
  }
};
function ensureImageCover(imgEl, classes) {
  if (!imgEl) {
    return;
  }
  if (imgEl.complete) {
    fit(imgEl, classes);
  } else {
    imgEl.addEventListener("load", function() {
      fit(imgEl, classes);
    });
  }
}
var warnedOnce6 = false;
var GridListTile = React81.forwardRef(function GridListTile2(props, ref) {
  if (true) {
    if (!warnedOnce6) {
      warnedOnce6 = true;
      console.error(["Material-UI: The GridListTile component was renamed to ImageListItem to align with the current Material Design naming.", "", "You should use `import { ImageListItem } from '@material-ui/core'`", "or `import ImageListItem from '@material-ui/core/ImageListItem'`."].join("\n"));
    }
  }
  var children = props.children, classes = props.classes, className = props.className, _props$cols = props.cols, cols = _props$cols === void 0 ? 1 : _props$cols, _props$component = props.component, Component6 = _props$component === void 0 ? "li" : _props$component, _props$rows = props.rows, rows = _props$rows === void 0 ? 1 : _props$rows, other = _objectWithoutProperties(props, ["children", "classes", "className", "cols", "component", "rows"]);
  var imgRef = React81.useRef(null);
  React81.useEffect(function() {
    ensureImageCover(imgRef.current, classes);
  });
  React81.useEffect(function() {
    var handleResize = debounce(function() {
      fit(imgRef.current, classes);
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [classes]);
  return React81.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other), React81.createElement("div", {
    className: classes.tile
  }, React81.Children.map(children, function(child) {
    if (!React81.isValidElement(child)) {
      return null;
    }
    if (child.type === "img" || isMuiElement(child, ["Image"])) {
      return React81.cloneElement(child, {
        ref: imgRef
      });
    }
    return child;
  })));
});
true ? GridListTile.propTypes = {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
   */
  children: import_prop_types64.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types64.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types64.default.string,
  /**
   * Width of the tile in number of grid cells.
   */
  cols: import_prop_types64.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types64.default.elementType,
  /**
   * Height of the tile in number of grid cells.
   */
  rows: import_prop_types64.default.number
} : void 0;
var GridListTile_default = withStyles_default(styles97, {
  name: "MuiGridListTile"
})(GridListTile);

// node_modules/@material-ui/core/esm/GridListTileBar/GridListTileBar.js
init_extends();
var React82 = __toESM(require_react());
var import_prop_types65 = __toESM(require_prop_types());
init_clsx_m();
var styles98 = function styles99(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 48,
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily
    },
    /* Styles applied to the root element if `titlePosition="bottom"`. */
    titlePositionBottom: {
      bottom: 0
    },
    /* Styles applied to the root element if `titlePosition="top"`. */
    titlePositionTop: {
      top: 0
    },
    /* Styles applied to the root element if a `subtitle` is provided. */
    rootSubtitle: {
      height: 68
    },
    /* Styles applied to the title and subtitle container element. */
    titleWrap: {
      flexGrow: 1,
      marginLeft: 16,
      marginRight: 16,
      color: theme.palette.common.white,
      overflow: "hidden"
    },
    /* Styles applied to the container element if `actionPosition="left"`. */
    titleWrapActionPosLeft: {
      marginLeft: 0
    },
    /* Styles applied to the container element if `actionPosition="right"`. */
    titleWrapActionPosRight: {
      marginRight: 0
    },
    /* Styles applied to the title container element. */
    title: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: "24px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"
    },
    /* Styles applied to the subtitle container element. */
    subtitle: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1,
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"
    },
    /* Styles applied to the actionIcon if supplied. */
    actionIcon: {},
    /* Styles applied to the actionIcon if `actionPosition="left"`. */
    actionIconActionPosLeft: {
      order: -1
    }
  };
};
var warnedOnce7 = false;
var GridListTileBar = React82.forwardRef(function GridListTileBar2(props, ref) {
  if (true) {
    if (!warnedOnce7) {
      warnedOnce7 = true;
      console.error(["Material-UI: The GridListTileBar component was renamed to ImageListItemBar to align with the current Material Design naming.", "", "You should use `import { ImageListItemBar } from '@material-ui/core'`", "or `import ImageListItemBar from '@material-ui/core/ImageListItemBar'`."].join("\n"));
    }
  }
  var actionIcon = props.actionIcon, _props$actionPosition = props.actionPosition, actionPosition = _props$actionPosition === void 0 ? "right" : _props$actionPosition, classes = props.classes, className = props.className, subtitle = props.subtitle, title = props.title, _props$titlePosition = props.titlePosition, titlePosition = _props$titlePosition === void 0 ? "bottom" : _props$titlePosition, other = _objectWithoutProperties(props, ["actionIcon", "actionPosition", "classes", "className", "subtitle", "title", "titlePosition"]);
  var actionPos = actionIcon && actionPosition;
  return React82.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, titlePosition === "top" ? classes.titlePositionTop : classes.titlePositionBottom, subtitle && classes.rootSubtitle),
    ref
  }, other), React82.createElement("div", {
    className: clsx_m_default(classes.titleWrap, {
      "left": classes.titleWrapActionPosLeft,
      "right": classes.titleWrapActionPosRight
    }[actionPos])
  }, React82.createElement("div", {
    className: classes.title
  }, title), subtitle ? React82.createElement("div", {
    className: classes.subtitle
  }, subtitle) : null), actionIcon ? React82.createElement("div", {
    className: clsx_m_default(classes.actionIcon, actionPos === "left" && classes.actionIconActionPosLeft)
  }, actionIcon) : null);
});
true ? GridListTileBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: import_prop_types65.default.node,
  /**
   * Position of secondary action IconButton.
   */
  actionPosition: import_prop_types65.default.oneOf(["left", "right"]),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types65.default.object,
  /**
   * @ignore
   */
  className: import_prop_types65.default.string,
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle: import_prop_types65.default.node,
  /**
   * Title to be displayed on tile.
   */
  title: import_prop_types65.default.node,
  /**
   * Position of the title bar.
   */
  titlePosition: import_prop_types65.default.oneOf(["bottom", "top"])
} : void 0;
var GridListTileBar_default = withStyles_default(styles98, {
  name: "MuiGridListTileBar"
})(GridListTileBar);

// node_modules/@material-ui/core/esm/Grow/Grow.js
init_extends();
var React83 = __toESM(require_react());
var import_prop_types66 = __toESM(require_prop_types());
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}
var styles100 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var Grow = React83.forwardRef(function Grow2(props, ref) {
  var children = props.children, _props$disableStrictM = props.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style = props.style, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? "auto" : _props$timeout, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition_default : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var timer = React83.useRef();
  var autoTimeout = React83.useRef();
  var theme = useTheme2();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = React83.useRef(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : void 0, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref6 = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref24 = _slicedToArray(_ref6, 2), node = _ref24[0], isAppearing = _ref24[1];
        if (isAppearing === void 0) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    reflow(node);
    var _getTransitionProps = getTransitionProps({
      style,
      timeout
    }, {
      mode: "enter"
    }), transitionDuration = _getTransitionProps.duration, delay = _getTransitionProps.delay;
    var duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: duration2 * 0.666,
      delay
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node) {
    var _getTransitionProps2 = getTransitionProps({
      style,
      timeout
    }, {
      mode: "exit"
    }), transitionDuration = _getTransitionProps2.duration, delay = _getTransitionProps2.delay;
    var duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: duration2 * 0.666,
      delay: delay || duration2 * 0.333
    })].join(",");
    node.style.opacity = "0";
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var addEndListener = function addEndListener2(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;
    if (timeout === "auto") {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };
  React83.useEffect(function() {
    return function() {
      clearTimeout(timer.current);
    };
  }, []);
  return React83.createElement(TransitionComponent, _extends({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other), function(state, childProps) {
    return React83.cloneElement(children, _extends({
      style: _extends({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles100[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: import_prop_types66.default.element,
  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: import_prop_types66.default.bool,
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: import_prop_types66.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types66.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types66.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types66.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types66.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types66.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types66.default.func,
  /**
   * @ignore
   */
  style: import_prop_types66.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: import_prop_types66.default.oneOfType([import_prop_types66.default.oneOf(["auto"]), import_prop_types66.default.number, import_prop_types66.default.shape({
    appear: import_prop_types66.default.number,
    enter: import_prop_types66.default.number,
    exit: import_prop_types66.default.number
  })])
} : void 0;
Grow.muiSupportAuto = true;
var Grow_default = Grow;

// node_modules/@material-ui/core/esm/Hidden/Hidden.js
init_extends();
var React87 = __toESM(require_react());
var import_prop_types70 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Hidden/HiddenJs.js
var import_prop_types68 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/withWidth/withWidth.js
init_extends();
var React85 = __toESM(require_react());
var import_prop_types67 = __toESM(require_prop_types());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());

// node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
init_extends();
var React84 = __toESM(require_react());
function useMediaQuery(queryInput) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var theme = useTheme();
  var props = getThemeProps({
    theme,
    name: "MuiUseMediaQuery",
    props: {}
  });
  if (true) {
    if (typeof queryInput === "function" && theme === null) {
      console.error(["Material-UI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join("\n"));
    }
  }
  var query = typeof queryInput === "function" ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, "");
  var supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
  var _props$options = _extends({}, props, options), _props$options$defaul = _props$options.defaultMatches, defaultMatches = _props$options$defaul === void 0 ? false : _props$options$defaul, _props$options$matchM = _props$options.matchMedia, matchMedia = _props$options$matchM === void 0 ? supportMatchMedia ? window.matchMedia : null : _props$options$matchM, _props$options$noSsr = _props$options.noSsr, noSsr = _props$options$noSsr === void 0 ? false : _props$options$noSsr, _props$options$ssrMat = _props$options.ssrMatchMedia, ssrMatchMedia = _props$options$ssrMat === void 0 ? null : _props$options$ssrMat;
  var _React$useState = React84.useState(function() {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }
    return defaultMatches;
  }), match = _React$useState[0], setMatch = _React$useState[1];
  React84.useEffect(function() {
    var active = true;
    if (!supportMatchMedia) {
      return void 0;
    }
    var queryList = matchMedia(query);
    var updateMatch = function updateMatch2() {
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    queryList.addListener(updateMatch);
    return function() {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);
  if (true) {
    React84.useDebugValue({
      query,
      match
    });
  }
  return match;
}

// node_modules/@material-ui/core/esm/withWidth/withWidth.js
var isWidthUp = function isWidthUp2(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (inclusive) {
    return keys.indexOf(breakpoint) <= keys.indexOf(width);
  }
  return keys.indexOf(breakpoint) < keys.indexOf(width);
};
var isWidthDown = function isWidthDown2(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (inclusive) {
    return keys.indexOf(width) <= keys.indexOf(breakpoint);
  }
  return keys.indexOf(width) < keys.indexOf(breakpoint);
};
var useEnhancedEffect6 = typeof window === "undefined" ? React85.useEffect : React85.useLayoutEffect;
var withWidth = function withWidth2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return function(Component6) {
    var _options$withTheme = options.withTheme, withThemeOption = _options$withTheme === void 0 ? false : _options$withTheme, _options$noSSR = options.noSSR, noSSR = _options$noSSR === void 0 ? false : _options$noSSR, initialWidthOption = options.initialWidth;
    function WithWidth(props) {
      var contextTheme = useTheme2();
      var theme = props.theme || contextTheme;
      var _getThemeProps = getThemeProps({
        theme,
        name: "MuiWithWidth",
        props: _extends({}, props)
      }), initialWidth = _getThemeProps.initialWidth, width = _getThemeProps.width, other = _objectWithoutProperties(_getThemeProps, ["initialWidth", "width"]);
      var _React$useState = React85.useState(false), mountedState = _React$useState[0], setMountedState = _React$useState[1];
      useEnhancedEffect6(function() {
        setMountedState(true);
      }, []);
      var keys2 = theme.breakpoints.keys.slice().reverse();
      var widthComputed = keys2.reduce(function(output, key) {
        var matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null);
      var more = _extends({
        width: width || (mountedState || noSSR ? widthComputed : void 0) || initialWidth || initialWidthOption
      }, withThemeOption ? {
        theme
      } : {}, other);
      if (more.width === void 0) {
        return null;
      }
      return React85.createElement(Component6, more);
    }
    true ? WithWidth.propTypes = {
      /**
       * As `window.innerWidth` is unavailable on the server,
       * we default to rendering an empty component during the first mount.
       * You might want to use an heuristic to approximate
       * the screen width of the client browser screen width.
       *
       * For instance, you could be using the user-agent or the client-hints.
       * https://caniuse.com/#search=client%20hint
       */
      initialWidth: import_prop_types67.default.oneOf(["xs", "sm", "md", "lg", "xl"]),
      /**
       * @ignore
       */
      theme: import_prop_types67.default.object,
      /**
       * Bypass the width calculation logic.
       */
      width: import_prop_types67.default.oneOf(["xs", "sm", "md", "lg", "xl"])
    } : void 0;
    if (true) {
      WithWidth.displayName = "WithWidth(".concat(getDisplayName(Component6), ")");
    }
    (0, import_hoist_non_react_statics.default)(WithWidth, Component6);
    return WithWidth;
  };
};
var withWidth_default = withWidth;

// node_modules/@material-ui/core/esm/Hidden/HiddenJs.js
function HiddenJs(props) {
  var children = props.children, only = props.only, width = props.width;
  var theme = useTheme2();
  var visible = true;
  if (only) {
    if (Array.isArray(only)) {
      for (var i = 0; i < only.length; i += 1) {
        var breakpoint = only[i];
        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  }
  if (visible) {
    for (var _i = 0; _i < theme.breakpoints.keys.length; _i += 1) {
      var _breakpoint = theme.breakpoints.keys[_i];
      var breakpointUp = props["".concat(_breakpoint, "Up")];
      var breakpointDown = props["".concat(_breakpoint, "Down")];
      if (breakpointUp && isWidthUp(_breakpoint, width) || breakpointDown && isWidthDown(_breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }
  if (!visible) {
    return null;
  }
  return children;
}
HiddenJs.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types68.default.node,
  /**
   * @ignore
   */
  className: import_prop_types68.default.string,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: import_prop_types68.default.oneOf(["js", "css"]),
  /**
   * You can use this prop when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use an heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   */
  initialWidth: import_prop_types68.default.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /**
   * If `true`, screens this size and down will be hidden.
   */
  lgDown: import_prop_types68.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  lgUp: import_prop_types68.default.bool,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  mdDown: import_prop_types68.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  mdUp: import_prop_types68.default.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: import_prop_types68.default.oneOfType([import_prop_types68.default.oneOf(["xs", "sm", "md", "lg", "xl"]), import_prop_types68.default.arrayOf(import_prop_types68.default.oneOf(["xs", "sm", "md", "lg", "xl"]))]),
  /**
   * If `true`, screens this size and down will be hidden.
   */
  smDown: import_prop_types68.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  smUp: import_prop_types68.default.bool,
  /**
   * @ignore
   * width prop provided by withWidth decorator.
   */
  width: import_prop_types68.default.string.isRequired,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  xlDown: import_prop_types68.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  xlUp: import_prop_types68.default.bool,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  xsDown: import_prop_types68.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  xsUp: import_prop_types68.default.bool
};
if (true) {
  HiddenJs.propTypes = exactProp(HiddenJs.propTypes);
}
var HiddenJs_default = withWidth_default()(HiddenJs);

// node_modules/@material-ui/core/esm/Hidden/HiddenCss.js
var React86 = __toESM(require_react());
var import_prop_types69 = __toESM(require_prop_types());
var styles101 = function styles102(theme) {
  var hidden = {
    display: "none"
  };
  return theme.breakpoints.keys.reduce(function(acc, key) {
    acc["only".concat(capitalize(key))] = _defineProperty({}, theme.breakpoints.only(key), hidden);
    acc["".concat(key, "Up")] = _defineProperty({}, theme.breakpoints.up(key), hidden);
    acc["".concat(key, "Down")] = _defineProperty({}, theme.breakpoints.down(key), hidden);
    return acc;
  }, {});
};
function HiddenCss(props) {
  var children = props.children, classes = props.classes, className = props.className, only = props.only, other = _objectWithoutProperties(props, ["children", "classes", "className", "only"]);
  var theme = useTheme2();
  if (true) {
    var unknownProps = Object.keys(other).filter(function(propName) {
      var isUndeclaredBreakpoint = !theme.breakpoints.keys.some(function(breakpoint2) {
        return "".concat(breakpoint2, "Up") === propName || "".concat(breakpoint2, "Down") === propName;
      });
      return isUndeclaredBreakpoint;
    });
    if (unknownProps.length > 0) {
      console.error('Material-UI: Unsupported props received by `<Hidden implementation="css" />`: '.concat(unknownProps.join(", "), ". Did you forget to wrap this component in a ThemeProvider declaring these breakpoints?"));
    }
  }
  var clsx = [];
  if (className) {
    clsx.push(className);
  }
  for (var i = 0; i < theme.breakpoints.keys.length; i += 1) {
    var breakpoint = theme.breakpoints.keys[i];
    var breakpointUp = props["".concat(breakpoint, "Up")];
    var breakpointDown = props["".concat(breakpoint, "Down")];
    if (breakpointUp) {
      clsx.push(classes["".concat(breakpoint, "Up")]);
    }
    if (breakpointDown) {
      clsx.push(classes["".concat(breakpoint, "Down")]);
    }
  }
  if (only) {
    var onlyBreakpoints = Array.isArray(only) ? only : [only];
    onlyBreakpoints.forEach(function(breakpoint2) {
      clsx.push(classes["only".concat(capitalize(breakpoint2))]);
    });
  }
  return React86.createElement("div", {
    className: clsx.join(" ")
  }, children);
}
true ? HiddenCss.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types69.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types69.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types69.default.string,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: import_prop_types69.default.oneOf(["js", "css"]),
  /**
   * If `true`, screens this size and down will be hidden.
   */
  lgDown: import_prop_types69.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  lgUp: import_prop_types69.default.bool,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  mdDown: import_prop_types69.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  mdUp: import_prop_types69.default.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: import_prop_types69.default.oneOfType([import_prop_types69.default.oneOf(["xs", "sm", "md", "lg", "xl"]), import_prop_types69.default.arrayOf(import_prop_types69.default.oneOf(["xs", "sm", "md", "lg", "xl"]))]),
  /**
   * If `true`, screens this size and down will be hidden.
   */
  smDown: import_prop_types69.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  smUp: import_prop_types69.default.bool,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  xlDown: import_prop_types69.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  xlUp: import_prop_types69.default.bool,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  xsDown: import_prop_types69.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  xsUp: import_prop_types69.default.bool
} : void 0;
var HiddenCss_default = withStyles_default(styles101, {
  name: "PrivateHiddenCss"
})(HiddenCss);

// node_modules/@material-ui/core/esm/Hidden/Hidden.js
function Hidden(props) {
  var _props$implementation = props.implementation, implementation = _props$implementation === void 0 ? "js" : _props$implementation, _props$lgDown = props.lgDown, lgDown = _props$lgDown === void 0 ? false : _props$lgDown, _props$lgUp = props.lgUp, lgUp = _props$lgUp === void 0 ? false : _props$lgUp, _props$mdDown = props.mdDown, mdDown = _props$mdDown === void 0 ? false : _props$mdDown, _props$mdUp = props.mdUp, mdUp = _props$mdUp === void 0 ? false : _props$mdUp, _props$smDown = props.smDown, smDown = _props$smDown === void 0 ? false : _props$smDown, _props$smUp = props.smUp, smUp = _props$smUp === void 0 ? false : _props$smUp, _props$xlDown = props.xlDown, xlDown = _props$xlDown === void 0 ? false : _props$xlDown, _props$xlUp = props.xlUp, xlUp = _props$xlUp === void 0 ? false : _props$xlUp, _props$xsDown = props.xsDown, xsDown = _props$xsDown === void 0 ? false : _props$xsDown, _props$xsUp = props.xsUp, xsUp = _props$xsUp === void 0 ? false : _props$xsUp, other = _objectWithoutProperties(props, ["implementation", "lgDown", "lgUp", "mdDown", "mdUp", "smDown", "smUp", "xlDown", "xlUp", "xsDown", "xsUp"]);
  if (implementation === "js") {
    return React87.createElement(HiddenJs_default, _extends({
      lgDown,
      lgUp,
      mdDown,
      mdUp,
      smDown,
      smUp,
      xlDown,
      xlUp,
      xsDown,
      xsUp
    }, other));
  }
  return React87.createElement(HiddenCss_default, _extends({
    lgDown,
    lgUp,
    mdDown,
    mdUp,
    smDown,
    smUp,
    xlDown,
    xlUp,
    xsDown,
    xsUp
  }, other));
}
true ? Hidden.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types70.default.node,
  /**
   * @ignore
   */
  className: import_prop_types70.default.string,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: import_prop_types70.default.oneOf(["js", "css"]),
  /**
   * You can use this prop when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use an heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   */
  initialWidth: import_prop_types70.default.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /**
   * If `true`, screens this size and down will be hidden.
   */
  lgDown: import_prop_types70.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  lgUp: import_prop_types70.default.bool,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  mdDown: import_prop_types70.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  mdUp: import_prop_types70.default.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: import_prop_types70.default.oneOfType([import_prop_types70.default.oneOf(["xs", "sm", "md", "lg", "xl"]), import_prop_types70.default.arrayOf(import_prop_types70.default.oneOf(["xs", "sm", "md", "lg", "xl"]))]),
  /**
   * If `true`, screens this size and down will be hidden.
   */
  smDown: import_prop_types70.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  smUp: import_prop_types70.default.bool,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  xlDown: import_prop_types70.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  xlUp: import_prop_types70.default.bool,
  /**
   * If `true`, screens this size and down will be hidden.
   */
  xsDown: import_prop_types70.default.bool,
  /**
   * If `true`, screens this size and up will be hidden.
   */
  xsUp: import_prop_types70.default.bool
} : void 0;
var Hidden_default = Hidden;

// node_modules/@material-ui/core/esm/Icon/Icon.js
init_extends();
var React88 = __toESM(require_react());
var import_prop_types71 = __toESM(require_prop_types());
init_clsx_m();
var styles103 = function styles104(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: "none",
      fontSize: theme.typography.pxToRem(24),
      width: "1em",
      height: "1em",
      // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
      // To remove at some point.
      overflow: "hidden",
      flexShrink: 0
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },
    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },
    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: "inherit"
    },
    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },
    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(36)
    }
  };
};
var Icon = React88.forwardRef(function Icon2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "inherit" : _props$color, _props$component = props.component, Component6 = _props$component === void 0 ? "span" : _props$component, _props$fontSize = props.fontSize, fontSize = _props$fontSize === void 0 ? "medium" : _props$fontSize, other = _objectWithoutProperties(props, ["classes", "className", "color", "component", "fontSize"]);
  return React88.createElement(Component6, _extends({
    className: clsx_m_default("material-icons", classes.root, className, color !== "inherit" && classes["color".concat(capitalize(color))], fontSize !== "default" && fontSize !== "medium" && classes["fontSize".concat(capitalize(fontSize))]),
    "aria-hidden": true,
    ref
  }, other));
});
true ? Icon.propTypes = {
  /**
   * The name of the icon font ligature.
   */
  children: import_prop_types71.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types71.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types71.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types71.default.oneOf(["inherit", "primary", "secondary", "action", "error", "disabled"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types71.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: chainPropTypes(import_prop_types71.default.oneOf(["default", "inherit", "large", "medium", "small"]), function(props) {
    var fontSize = props.fontSize;
    if (fontSize === "default") {
      throw new Error('Material-UI: `fontSize="default"` is deprecated. Use `fontSize="medium"` instead.');
    }
    return null;
  })
} : void 0;
Icon.muiName = "Icon";
var Icon_default = withStyles_default(styles103, {
  name: "MuiIcon"
})(Icon);

// node_modules/@material-ui/core/esm/ImageList/ImageList.js
init_extends();
var React89 = __toESM(require_react());
var import_react_is7 = __toESM(require_react_is());
var import_prop_types72 = __toESM(require_prop_types());
init_clsx_m();
var styles105 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflowY: "auto",
    listStyle: "none",
    padding: 0,
    WebkitOverflowScrolling: "touch"
    // Add iOS momentum scrolling.
  }
};
var ImageList = React89.forwardRef(function ImageList2(props, ref) {
  var cellHeight = props.cellHeight, children = props.children, classes = props.classes, className = props.className, _props$cols = props.cols, cols = _props$cols === void 0 ? 2 : _props$cols, _props$component = props.component, Component6 = _props$component === void 0 ? "ul" : _props$component, _props$gap = props.gap, gapProp = _props$gap === void 0 ? 4 : _props$gap, _props$rowHeight = props.rowHeight, rowHeightProp = _props$rowHeight === void 0 ? 180 : _props$rowHeight, spacing = props.spacing, style = props.style, other = _objectWithoutProperties(props, ["cellHeight", "children", "classes", "className", "cols", "component", "gap", "rowHeight", "spacing", "style"]);
  var gap = spacing || gapProp;
  var rowHeight = cellHeight || rowHeightProp;
  return React89.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref,
    style: _extends({
      margin: -gap / 2
    }, style)
  }, other), React89.Children.map(children, function(child) {
    if (!React89.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is7.isFragment)(child)) {
        console.error(["Material-UI: The ImageList component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return React89.cloneElement(child, {
      style: _extends({
        width: "".concat(100 / cols * childCols, "%"),
        height: rowHeight === "auto" ? "auto" : rowHeight * childRows + gap,
        padding: gap / 2
      }, child.props.style)
    });
  }));
});
true ? ImageList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Cell height in `px`.
   * Set to `'auto'` to let the children determine the height.
   * @deprecated Use rowHeight instead.
   */
  cellHeight: deprecatedPropType(import_prop_types72.default.oneOfType([import_prop_types72.default.number, import_prop_types72.default.oneOf(["auto"])]), "Use the `rowHeight` prop instead."),
  /**
   * Items that will be in the image list.
   */
  children: import_prop_types72.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types72.default.object,
  /**
   * @ignore
   */
  className: import_prop_types72.default.string,
  /**
   * Number of columns.
   */
  cols: import_prop_types72.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types72.default.elementType,
  /**
   * The gap between items in `px`.
   */
  gap: import_prop_types72.default.number,
  /**
   * The height of one row in `px`.
   */
  rowHeight: import_prop_types72.default.oneOfType([import_prop_types72.default.oneOf(["auto"]), import_prop_types72.default.number]),
  /**
   * The spacing between items in `px`.
   * @deprecated Use gap instead.
   */
  spacing: deprecatedPropType(import_prop_types72.default.number, "Use the `gap` prop instead."),
  /**
   * @ignore
   */
  style: import_prop_types72.default.object
} : void 0;
var ImageList_default = withStyles_default(styles105, {
  name: "MuiImageList"
})(ImageList);

// node_modules/@material-ui/core/esm/ImageListItem/ImageListItem.js
init_extends();
var React90 = __toESM(require_react());
var import_prop_types73 = __toESM(require_prop_types());
init_clsx_m();
var styles106 = {
  /* Styles applied to the root element. */
  root: {
    boxSizing: "border-box",
    flexShrink: 0
  },
  /* Styles applied to the `div` element that wraps the children. */
  item: {
    position: "relative",
    display: "block",
    // In case it's not rendered with a div.
    height: "100%",
    overflow: "hidden"
  },
  /* Styles applied to an `img` element child, if needed to ensure it covers the item. */
  imgFullHeight: {
    height: "100%",
    transform: "translateX(-50%)",
    position: "relative",
    left: "50%"
  },
  /* Styles applied to an `img` element child, if needed to ensure it covers the item. */
  imgFullWidth: {
    width: "100%",
    position: "relative",
    transform: "translateY(-50%)",
    top: "50%"
  }
};
var fit3 = function fit4(imgEl, classes) {
  if (!imgEl || !imgEl.complete) {
    return;
  }
  if (imgEl.width / imgEl.height > imgEl.parentElement.offsetWidth / imgEl.parentElement.offsetHeight) {
    var _imgEl$classList, _imgEl$classList2;
    (_imgEl$classList = imgEl.classList).remove.apply(_imgEl$classList, _toConsumableArray(classes.imgFullWidth.split(" ")));
    (_imgEl$classList2 = imgEl.classList).add.apply(_imgEl$classList2, _toConsumableArray(classes.imgFullHeight.split(" ")));
  } else {
    var _imgEl$classList3, _imgEl$classList4;
    (_imgEl$classList3 = imgEl.classList).remove.apply(_imgEl$classList3, _toConsumableArray(classes.imgFullHeight.split(" ")));
    (_imgEl$classList4 = imgEl.classList).add.apply(_imgEl$classList4, _toConsumableArray(classes.imgFullWidth.split(" ")));
  }
};
function ensureImageCover2(imgEl, classes) {
  if (!imgEl) {
    return;
  }
  if (imgEl.complete) {
    fit3(imgEl, classes);
  } else {
    imgEl.addEventListener("load", function() {
      fit3(imgEl, classes);
    });
  }
}
var ImageListItem = React90.forwardRef(function ImageListItem2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$cols = props.cols, cols = _props$cols === void 0 ? 1 : _props$cols, _props$component = props.component, Component6 = _props$component === void 0 ? "li" : _props$component, _props$rows = props.rows, rows = _props$rows === void 0 ? 1 : _props$rows, other = _objectWithoutProperties(props, ["children", "classes", "className", "cols", "component", "rows"]);
  var imgRef = React90.useRef(null);
  React90.useEffect(function() {
    ensureImageCover2(imgRef.current, classes);
  });
  React90.useEffect(function() {
    var handleResize = debounce(function() {
      fit3(imgRef.current, classes);
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [classes]);
  return React90.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other), React90.createElement("div", {
    className: classes.item
  }, React90.Children.map(children, function(child) {
    if (!React90.isValidElement(child)) {
      return null;
    }
    if (child.type === "img" || isMuiElement(child, ["Image"])) {
      return React90.cloneElement(child, {
        ref: imgRef
      });
    }
    return child;
  })));
});
true ? ImageListItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * While you can pass any node as children, the main use case is for an img.
   */
  children: import_prop_types73.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types73.default.object,
  /**
   * @ignore
   */
  className: import_prop_types73.default.string,
  /**
   * Width of the item in number of grid columns.
   */
  cols: import_prop_types73.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types73.default.elementType,
  /**
   * Height of the item in number of grid rows.
   */
  rows: import_prop_types73.default.number
} : void 0;
var ImageListItem_default = withStyles_default(styles106, {
  name: "MuiImageListItem"
})(ImageListItem);

// node_modules/@material-ui/core/esm/ImageListItemBar/ImageListItemBar.js
init_extends();
var React91 = __toESM(require_react());
var import_prop_types74 = __toESM(require_prop_types());
init_clsx_m();
var styles107 = function styles108(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 48,
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily
    },
    /* Styles applied to the root element if `position="bottom"`. */
    positionBottom: {
      bottom: 0
    },
    /* Styles applied to the root element if `position="top"`. */
    positionTop: {
      top: 0
    },
    /* Styles applied to the root element if a `subtitle` is provided. */
    rootSubtitle: {
      height: 68
    },
    /* Styles applied to the title and subtitle container element. */
    titleWrap: {
      flexGrow: 1,
      marginLeft: 16,
      marginRight: 16,
      color: theme.palette.common.white,
      overflow: "hidden"
    },
    /* Styles applied to the container element if `actionPosition="left"`. */
    titleWrapActionPosLeft: {
      marginLeft: 0
    },
    /* Styles applied to the container element if `actionPosition="right"`. */
    titleWrapActionPosRight: {
      marginRight: 0
    },
    /* Styles applied to the title container element. */
    title: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: "24px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"
    },
    /* Styles applied to the subtitle container element. */
    subtitle: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1,
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"
    },
    /* Styles applied to the actionIcon if supplied. */
    actionIcon: {},
    /* Styles applied to the actionIcon if `actionPosition="left"`. */
    actionIconActionPosLeft: {
      order: -1
    }
  };
};
var ImageListItemBar = React91.forwardRef(function ImageListItemBar2(props, ref) {
  var actionIcon = props.actionIcon, _props$actionPosition = props.actionPosition, actionPosition = _props$actionPosition === void 0 ? "right" : _props$actionPosition, classes = props.classes, className = props.className, subtitle = props.subtitle, title = props.title, _props$position = props.position, positionProp = _props$position === void 0 ? "bottom" : _props$position, titlePosition = props.titlePosition, other = _objectWithoutProperties(props, ["actionIcon", "actionPosition", "classes", "className", "subtitle", "title", "position", "titlePosition"]);
  var position = titlePosition || positionProp;
  var actionPos = actionIcon && actionPosition;
  return React91.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, subtitle && classes.rootSubtitle, {
      "bottom": classes.positionBottom,
      "top": classes.positionTop
    }[position]),
    ref
  }, other), React91.createElement("div", {
    className: clsx_m_default(classes.titleWrap, {
      "left": classes.titleWrapActionPosLeft,
      "right": classes.titleWrapActionPosRight
    }[actionPos])
  }, React91.createElement("div", {
    className: classes.title
  }, title), subtitle ? React91.createElement("div", {
    className: classes.subtitle
  }, subtitle) : null), actionIcon ? React91.createElement("div", {
    className: clsx_m_default(classes.actionIcon, actionPos === "left" && classes.actionIconActionPosLeft)
  }, actionIcon) : null);
});
true ? ImageListItemBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the item itself).
   */
  actionIcon: import_prop_types74.default.node,
  /**
   * Position of secondary action IconButton.
   */
  actionPosition: import_prop_types74.default.oneOf(["left", "right"]),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types74.default.object,
  /**
   * @ignore
   */
  className: import_prop_types74.default.string,
  /**
   * Position of the title bar.
   */
  position: import_prop_types74.default.oneOf(["bottom", "top"]),
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle: import_prop_types74.default.node,
  /**
   * Title to be displayed on item.
   */
  title: import_prop_types74.default.node,
  /**
   * Position of the title bar.
   * @deprecated Use position instead.
   */
  titlePosition: deprecatedPropType(import_prop_types74.default.oneOf(["bottom", "top"]), "Use the `position` prop instead.")
} : void 0;
var ImageListItemBar_default = withStyles_default(styles107, {
  name: "MuiImageListItemBar"
})(ImageListItemBar);

// node_modules/@material-ui/core/esm/Input/Input.js
init_extends();
var React92 = __toESM(require_react());
var import_prop_types75 = __toESM(require_prop_types());
init_clsx_m();
var styles109 = function styles110(theme) {
  var light = theme.palette.type === "light";
  var bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative"
    },
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      "label + &": {
        marginTop: 16
      }
    },
    /* Styles applied to the root element if the component is focused. */
    focused: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      "&$underline:after": {
        borderBottomColor: theme.palette.secondary.main
      }
    },
    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      "&:after": {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: "absolute",
        right: 0,
        transform: "scaleX(0)",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: "none"
        // Transparent to the hover style.
      },
      "&$focused:after": {
        transform: "scaleX(1)"
      },
      "&$error:after": {
        borderBottomColor: theme.palette.error.main,
        transform: "scaleX(1)"
        // error is always underlined in red
      },
      "&:before": {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: "absolute",
        right: 0,
        transition: theme.transitions.create("border-bottom-color", {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: "none"
        // Transparent to the hover style.
      },
      "&:hover:not($disabled):before": {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      "&$disabled:before": {
        borderBottomStyle: "dotted"
      }
    },
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},
    /* Styles applied to the `input` element. */
    input: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},
    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = React92.forwardRef(function Input2(props, ref) {
  var disableUnderline = props.disableUnderline, classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);
  return React92.createElement(InputBase_default, _extends({
    classes: _extends({}, classes, {
      root: clsx_m_default(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types75.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types75.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types75.default.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types75.default.oneOf(["primary", "secondary"]),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types75.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types75.default.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: import_prop_types75.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types75.default.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: import_prop_types75.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types75.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types75.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: import_prop_types75.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types75.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types75.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types75.default.oneOfType([import_prop_types75.default.number, import_prop_types75.default.string]),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: import_prop_types75.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types75.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types75.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types75.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types75.default.bool,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types75.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types75.default.oneOfType([import_prop_types75.default.number, import_prop_types75.default.string]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types75.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types75.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types75.default.any
} : void 0;
Input.muiName = "Input";
var Input_default = withStyles_default(styles109, {
  name: "MuiInput"
})(Input);

// node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
init_extends();
var React93 = __toESM(require_react());
var import_prop_types76 = __toESM(require_prop_types());
init_clsx_m();
var styles111 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    height: "0.01em",
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap"
  },
  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    "&$positionStart:not($hiddenLabel)": {
      marginTop: 16
    }
  },
  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },
  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },
  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: "none"
  },
  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},
  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = React93.forwardRef(function InputAdornment2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$disablePointer = props.disablePointerEvents, disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer, _props$disableTypogra = props.disableTypography, disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra, position = props.position, variantProp = props.variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);
  var muiFormControl = useFormControl() || {};
  var variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (true) {
      if (variantProp === muiFormControl.variant) {
        console.error("Material-UI: The `InputAdornment` variant infers the variant prop you do not have to provide one.");
      }
    }
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  return React93.createElement(FormControlContext_default.Provider, {
    value: null
  }, React93.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, position === "end" ? classes.positionEnd : classes.positionStart, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === "filled" && classes.filled, muiFormControl.margin === "dense" && classes.marginDense),
    ref
  }, other), typeof children === "string" && !disableTypography ? React93.createElement(Typography_default, {
    color: "textSecondary"
  }, children) : children));
});
true ? InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: import_prop_types76.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types76.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types76.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types76.default.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the input on click.
   */
  disablePointerEvents: import_prop_types76.default.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: import_prop_types76.default.bool,
  /**
   * @ignore
   */
  muiFormControl: import_prop_types76.default.object,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: import_prop_types76.default.oneOf(["start", "end"]).isRequired,
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: import_prop_types76.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var InputAdornment_default = withStyles_default(styles111, {
  name: "MuiInputAdornment"
})(InputAdornment);

// node_modules/@material-ui/core/esm/InputLabel/InputLabel.js
init_extends();
var React94 = __toESM(require_react());
var import_prop_types77 = __toESM(require_prop_types());
init_clsx_m();
var styles112 = function styles113(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "block",
      transformOrigin: "top left"
    },
    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},
    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 24px) scale(1)"
    },
    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: "translate(0, 21px) scale(1)"
    },
    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: "translate(0, 1.5px) scale(0.75)",
      transformOrigin: "top left"
    },
    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(["color", "transform"], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },
    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 20px) scale(1)",
      "&$marginDense": {
        transform: "translate(12px, 17px) scale(1)"
      },
      "&$shrink": {
        transform: "translate(12px, 10px) scale(0.75)",
        "&$marginDense": {
          transform: "translate(12px, 7px) scale(0.75)"
        }
      }
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 20px) scale(1)",
      "&$marginDense": {
        transform: "translate(14px, 12px) scale(1)"
      },
      "&$shrink": {
        transform: "translate(14px, -6px) scale(0.75)"
      }
    }
  };
};
var InputLabel = React94.forwardRef(function InputLabel2(props, ref) {
  var classes = props.classes, className = props.className, _props$disableAnimati = props.disableAnimation, disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati, margin = props.margin, shrinkProp = props.shrink, variant = props.variant, other = _objectWithoutProperties(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);
  var muiFormControl = useFormControl2();
  var shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["margin", "variant"]
  });
  return React94.createElement(FormLabel_default, _extends({
    "data-shrink": shrink,
    className: clsx_m_default(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === "dense" && classes.marginDense, {
      "filled": classes.filled,
      "outlined": classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref
  }, other));
});
true ? InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The contents of the `InputLabel`.
   */
  children: import_prop_types77.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types77.default.object,
  /**
   * @ignore
   */
  className: import_prop_types77.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types77.default.oneOf(["primary", "secondary"]),
  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: import_prop_types77.default.bool,
  /**
   * If `true`, apply disabled class.
   */
  disabled: import_prop_types77.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: import_prop_types77.default.bool,
  /**
   * If `true`, the input of this label is focused.
   */
  focused: import_prop_types77.default.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types77.default.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: import_prop_types77.default.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: import_prop_types77.default.bool,
  /**
   * The variant to use.
   */
  variant: import_prop_types77.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var InputLabel_default = withStyles_default(styles112, {
  name: "MuiInputLabel"
})(InputLabel);

// node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js
init_extends();
var React95 = __toESM(require_react());
var import_prop_types78 = __toESM(require_prop_types());
init_clsx_m();
var TRANSITION_DURATION = 4;
var styles114 = function styles115(theme) {
  var getColor = function getColor2(color) {
    return theme.palette.type === "light" ? lighten(color, 0.62) : darken(color, 0.5);
  };
  var backgroundPrimary = getColor(theme.palette.primary.main);
  var backgroundSecondary = getColor(theme.palette.secondary.main);
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      overflow: "hidden",
      height: 4,
      "@media print": {
        colorAdjust: "exact"
      }
    },
    /* Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
    colorPrimary: {
      backgroundColor: backgroundPrimary
    },
    /* Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
    colorSecondary: {
      backgroundColor: backgroundSecondary
    },
    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {},
    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {},
    /* Styles applied to the root element if `variant="buffer"`. */
    buffer: {
      backgroundColor: "transparent"
    },
    /* Styles applied to the root element if `variant="query"`. */
    query: {
      transform: "rotate(180deg)"
    },
    /* Styles applied to the additional bar element if `variant="buffer"`. */
    dashed: {
      position: "absolute",
      marginTop: 0,
      height: "100%",
      width: "100%",
      animation: "$buffer 3s infinite linear"
    },
    /* Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
    dashedColorPrimary: {
      backgroundImage: "radial-gradient(".concat(backgroundPrimary, " 0%, ").concat(backgroundPrimary, " 16%, transparent 42%)"),
      backgroundSize: "10px 10px",
      backgroundPosition: "0 -23px"
    },
    /* Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
    dashedColorSecondary: {
      backgroundImage: "radial-gradient(".concat(backgroundSecondary, " 0%, ").concat(backgroundSecondary, " 16%, transparent 42%)"),
      backgroundSize: "10px 10px",
      backgroundPosition: "0 -23px"
    },
    /* Styles applied to the layered bar1 and bar2 elements. */
    bar: {
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left"
    },
    /* Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    /* Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
    barColorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    /* Styles applied to the bar1 element if `variant="indeterminate or query"`. */
    bar1Indeterminate: {
      width: "auto",
      animation: "$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"
    },
    /* Styles applied to the bar1 element if `variant="determinate"`. */
    bar1Determinate: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    /* Styles applied to the bar1 element if `variant="buffer"`. */
    bar1Buffer: {
      zIndex: 1,
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    /* Styles applied to the bar2 element if `variant="indeterminate or query"`. */
    bar2Indeterminate: {
      width: "auto",
      animation: "$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"
    },
    /* Styles applied to the bar2 element if `variant="buffer"`. */
    bar2Buffer: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    "@keyframes indeterminate1": {
      //  |-----|---x-||-----||-----|
      "0%": {
        left: "-35%",
        right: "100%"
      },
      //  |-----|-----||-----||xxxx-|
      "60%": {
        left: "100%",
        right: "-90%"
      },
      "100%": {
        left: "100%",
        right: "-90%"
      }
    },
    "@keyframes indeterminate2": {
      //  |xxxxx|xxxxx||-----||-----|
      "0%": {
        left: "-200%",
        right: "100%"
      },
      //  |-----|-----||-----||-x----|
      "60%": {
        left: "107%",
        right: "-8%"
      },
      "100%": {
        left: "107%",
        right: "-8%"
      }
    },
    "@keyframes buffer": {
      "0%": {
        opacity: 1,
        backgroundPosition: "0 -23px"
      },
      "50%": {
        opacity: 0,
        backgroundPosition: "0 -23px"
      },
      "100%": {
        opacity: 1,
        backgroundPosition: "-200px -23px"
      }
    }
  };
};
var LinearProgress = React95.forwardRef(function LinearProgress2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, value = props.value, valueBuffer = props.valueBuffer, _props$variant = props.variant, variant = _props$variant === void 0 ? "indeterminate" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);
  var theme = useTheme2();
  var rootProps = {};
  var inlineStyles = {
    bar1: {},
    bar2: {}
  };
  if (variant === "determinate" || variant === "buffer") {
    if (value !== void 0) {
      rootProps["aria-valuenow"] = Math.round(value);
      rootProps["aria-valuemin"] = 0;
      rootProps["aria-valuemax"] = 100;
      var transform = value - 100;
      if (theme.direction === "rtl") {
        transform = -transform;
      }
      inlineStyles.bar1.transform = "translateX(".concat(transform, "%)");
    } else if (true) {
      console.error("Material-UI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");
    }
  }
  if (variant === "buffer") {
    if (valueBuffer !== void 0) {
      var _transform = (valueBuffer || 0) - 100;
      if (theme.direction === "rtl") {
        _transform = -_transform;
      }
      inlineStyles.bar2.transform = "translateX(".concat(_transform, "%)");
    } else if (true) {
      console.error("Material-UI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
    }
  }
  return React95.createElement("div", _extends({
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(color))], className, {
      "determinate": classes.determinate,
      "indeterminate": classes.indeterminate,
      "buffer": classes.buffer,
      "query": classes.query
    }[variant]),
    role: "progressbar"
  }, rootProps, {
    ref
  }, other), variant === "buffer" ? React95.createElement("div", {
    className: clsx_m_default(classes.dashed, classes["dashedColor".concat(capitalize(color))])
  }) : null, React95.createElement("div", {
    className: clsx_m_default(classes.bar, classes["barColor".concat(capitalize(color))], (variant === "indeterminate" || variant === "query") && classes.bar1Indeterminate, {
      "determinate": classes.bar1Determinate,
      "buffer": classes.bar1Buffer
    }[variant]),
    style: inlineStyles.bar1
  }), variant === "determinate" ? null : React95.createElement("div", {
    className: clsx_m_default(classes.bar, (variant === "indeterminate" || variant === "query") && classes.bar2Indeterminate, variant === "buffer" ? [classes["color".concat(capitalize(color))], classes.bar2Buffer] : classes["barColor".concat(capitalize(color))]),
    style: inlineStyles.bar2
  }));
});
true ? LinearProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types78.default.object,
  /**
   * @ignore
   */
  className: import_prop_types78.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types78.default.oneOf(["primary", "secondary"]),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: import_prop_types78.default.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: import_prop_types78.default.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   */
  variant: import_prop_types78.default.oneOf(["buffer", "determinate", "indeterminate", "query"])
} : void 0;
var LinearProgress_default = withStyles_default(styles114, {
  name: "MuiLinearProgress"
})(LinearProgress);

// node_modules/@material-ui/core/esm/Link/Link.js
init_extends();
var React96 = __toESM(require_react());
var import_prop_types79 = __toESM(require_prop_types());
init_clsx_m();
var styles116 = {
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the root element if `underline="none"`. */
  underlineNone: {
    textDecoration: "none"
  },
  /* Styles applied to the root element if `underline="hover"`. */
  underlineHover: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  /* Styles applied to the root element if `underline="always"`. */
  underlineAlways: {
    textDecoration: "underline"
  },
  // Same reset as ButtonBase.root
  /* Styles applied to the root element if `component="button"`. */
  button: {
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    "-moz-appearance": "none",
    // Reset
    "-webkit-appearance": "none",
    // Reset
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    },
    "&$focusVisible": {
      outline: "auto"
    }
  },
  /* Pseudo-class applied to the root element if the link is keyboard focused. */
  focusVisible: {}
};
var Link = React96.forwardRef(function Link2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$component = props.component, component = _props$component === void 0 ? "a" : _props$component, onBlur = props.onBlur, onFocus = props.onFocus, TypographyClasses = props.TypographyClasses, _props$underline = props.underline, underline = _props$underline === void 0 ? "hover" : _props$underline, _props$variant = props.variant, variant = _props$variant === void 0 ? "inherit" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant"]);
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState = React96.useState(false), focusVisible = _React$useState[0], setFocusVisible = _React$useState[1];
  var handlerRef = useForkRef(ref, focusVisibleRef);
  var handleBlur = function handleBlur2(event) {
    if (focusVisible) {
      onBlurVisible();
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  var handleFocus = function handleFocus2(event) {
    if (isFocusVisible2(event)) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return React96.createElement(Typography_default, _extends({
    className: clsx_m_default(classes.root, classes["underline".concat(capitalize(underline))], className, focusVisible && classes.focusVisible, component === "button" && classes.button),
    classes: TypographyClasses,
    color,
    component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    variant
  }, other));
});
true ? Link.propTypes = {
  /**
   * The content of the link.
   */
  children: import_prop_types79.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types79.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types79.default.string,
  /**
   * The color of the link.
   */
  color: import_prop_types79.default.oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef_default,
  /**
   * @ignore
   */
  onBlur: import_prop_types79.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types79.default.func,
  /**
   * `classes` prop applied to the [`Typography`](/api/typography/) element.
   */
  TypographyClasses: import_prop_types79.default.object,
  /**
   * Controls when the link should have an underline.
   */
  underline: import_prop_types79.default.oneOf(["none", "hover", "always"]),
  /**
   * Applies the theme typography styles.
   */
  variant: import_prop_types79.default.string
} : void 0;
var Link_default = withStyles_default(styles116, {
  name: "MuiLink"
})(Link);

// node_modules/@material-ui/core/esm/List/List.js
init_extends();
var React98 = __toESM(require_react());
var import_prop_types80 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/List/ListContext.js
var React97 = __toESM(require_react());
var ListContext = React97.createContext({});
if (true) {
  ListContext.displayName = "ListContext";
}
var ListContext_default = ListContext;

// node_modules/@material-ui/core/esm/List/List.js
var styles117 = {
  /* Styles applied to the root element. */
  root: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative"
  },
  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },
  /* Styles applied to the root element if dense. */
  dense: {},
  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = React98.forwardRef(function List2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "ul" : _props$component, _props$dense = props.dense, dense = _props$dense === void 0 ? false : _props$dense, _props$disablePadding = props.disablePadding, disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding, subheader = props.subheader, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);
  var context = React98.useMemo(function() {
    return {
      dense
    };
  }, [dense]);
  return React98.createElement(ListContext_default.Provider, {
    value: context
  }, React98.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref
  }, other), subheader, children));
});
true ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types80.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types80.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types80.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types80.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense: import_prop_types80.default.bool,
  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: import_prop_types80.default.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types80.default.node
} : void 0;
var List_default = withStyles_default(styles117, {
  name: "MuiList"
})(List);

// node_modules/@material-ui/core/esm/ListItem/ListItem.js
init_extends();
var React99 = __toESM(require_react());
var import_prop_types81 = __toESM(require_prop_types());
init_clsx_m();
var ReactDOM8 = __toESM(require_react_dom());
var styles118 = function styles119(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      paddingTop: 8,
      paddingBottom: 8,
      "&$focusVisible": {
        backgroundColor: theme.palette.action.selected
      },
      "&$selected, &$selected:hover": {
        backgroundColor: theme.palette.action.selected
      },
      "&$disabled": {
        opacity: 0.5
      }
    },
    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: "relative"
    },
    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},
    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },
    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: "flex-start"
    },
    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: "padding-box"
    },
    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },
    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },
    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect7 = typeof window === "undefined" ? React99.useEffect : React99.useLayoutEffect;
var ListItem = React99.forwardRef(function ListItem2(props, ref) {
  var _props$alignItems = props.alignItems, alignItems = _props$alignItems === void 0 ? "center" : _props$alignItems, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, _props$button = props.button, button = _props$button === void 0 ? false : _props$button, childrenProp = props.children, classes = props.classes, className = props.className, componentProp = props.component, _props$ContainerCompo = props.ContainerComponent, ContainerComponent = _props$ContainerCompo === void 0 ? "li" : _props$ContainerCompo, _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;
  var ContainerClassName = _props$ContainerProps.className, ContainerProps = _objectWithoutProperties(_props$ContainerProps, ["className"]), _props$dense = props.dense, dense = _props$dense === void 0 ? false : _props$dense, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, _props$divider = props.divider, divider = _props$divider === void 0 ? false : _props$divider, focusVisibleClassName = props.focusVisibleClassName, _props$selected = props.selected, selected = _props$selected === void 0 ? false : _props$selected, other = _objectWithoutProperties(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);
  var context = React99.useContext(ListContext_default);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems
  };
  var listItemRef = React99.useRef(null);
  useEnhancedEffect7(function() {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (true) {
        console.error("Material-UI: Unable to set focus to a ListItem whose component has not been rendered.");
      }
    }
  }, [autoFocus]);
  var children = React99.Children.toArray(childrenProp);
  var hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ["ListItemSecondaryAction"]);
  var handleOwnRef = React99.useCallback(function(instance) {
    listItemRef.current = ReactDOM8.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(handleOwnRef, ref);
  var componentProps = _extends({
    className: clsx_m_default(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled
  }, other);
  var Component6 = componentProp || "li";
  if (button) {
    componentProps.component = componentProp || "div";
    componentProps.focusVisibleClassName = clsx_m_default(classes.focusVisible, focusVisibleClassName);
    Component6 = ButtonBase_default;
  }
  if (hasSecondaryAction) {
    Component6 = !componentProps.component && !componentProp ? "div" : Component6;
    if (ContainerComponent === "li") {
      if (Component6 === "li") {
        Component6 = "div";
      } else if (componentProps.component === "li") {
        componentProps.component = "div";
      }
    }
    return React99.createElement(ListContext_default.Provider, {
      value: childContext
    }, React99.createElement(ContainerComponent, _extends({
      className: clsx_m_default(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), React99.createElement(Component6, componentProps, children), children.pop()));
  }
  return React99.createElement(ListContext_default.Provider, {
    value: childContext
  }, React99.createElement(Component6, _extends({
    ref: handleRef
  }, componentProps), children));
});
true ? ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: import_prop_types81.default.oneOf(["flex-start", "center"]),
  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: import_prop_types81.default.bool,
  /**
   * If `true`, the list item will be a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   */
  button: import_prop_types81.default.bool,
  /**
   * The content of the component. If a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: chainPropTypes(import_prop_types81.default.node, function(props) {
    var children = React99.Children.toArray(props.children);
    var secondaryActionIndex = -1;
    for (var i = children.length - 1; i >= 0; i -= 1) {
      var child = children[i];
      if (isMuiElement(child, ["ListItemSecondaryAction"])) {
        secondaryActionIndex = i;
        break;
      }
    }
    if (secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1) {
      return new Error("Material-UI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.");
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types81.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types81.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: import_prop_types81.default.elementType,
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   */
  ContainerComponent: import_prop_types81.default.elementType,
  /**
   * Props applied to the container component if used.
   */
  ContainerProps: import_prop_types81.default.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: import_prop_types81.default.bool,
  /**
   * If `true`, the list item will be disabled.
   */
  disabled: import_prop_types81.default.bool,
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: import_prop_types81.default.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: import_prop_types81.default.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types81.default.string,
  /**
   * Use to apply selected styling.
   */
  selected: import_prop_types81.default.bool
} : void 0;
var ListItem_default = withStyles_default(styles118, {
  name: "MuiListItem"
})(ListItem);

// node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js
init_extends();
var React100 = __toESM(require_react());
var import_prop_types82 = __toESM(require_prop_types());
init_clsx_m();
var styles120 = {
  /* Styles applied to the root element. */
  root: {
    minWidth: 56,
    flexShrink: 0
  },
  /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
  alignItemsFlexStart: {
    marginTop: 8
  }
};
var ListItemAvatar = React100.forwardRef(function ListItemAvatar2(props, ref) {
  var classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["classes", "className"]);
  var context = React100.useContext(ListContext_default);
  return React100.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, context.alignItems === "flex-start" && classes.alignItemsFlexStart),
    ref
  }, other));
});
true ? ListItemAvatar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component – normally `Avatar`.
   */
  children: import_prop_types82.default.element.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types82.default.object,
  /**
   * @ignore
   */
  className: import_prop_types82.default.string
} : void 0;
var ListItemAvatar_default = withStyles_default(styles120, {
  name: "MuiListItemAvatar"
})(ListItemAvatar);

// node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
init_extends();
var React101 = __toESM(require_react());
var import_prop_types83 = __toESM(require_prop_types());
init_clsx_m();
var styles121 = function styles122(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: "inline-flex"
    },
    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
var ListItemIcon = React101.forwardRef(function ListItemIcon2(props, ref) {
  var classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["classes", "className"]);
  var context = React101.useContext(ListContext_default);
  return React101.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, context.alignItems === "flex-start" && classes.alignItemsFlexStart),
    ref
  }, other));
});
true ? ListItemIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@material-ui/icons` SVG icon element.
   */
  children: import_prop_types83.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types83.default.object,
  /**
   * @ignore
   */
  className: import_prop_types83.default.string
} : void 0;
var ListItemIcon_default = withStyles_default(styles121, {
  name: "MuiListItemIcon"
})(ListItemIcon);

// node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js
init_extends();
var React102 = __toESM(require_react());
var import_prop_types84 = __toESM(require_prop_types());
init_clsx_m();
var styles123 = {
  /* Styles applied to the root element. */
  root: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)"
  }
};
var ListItemSecondaryAction = React102.forwardRef(function ListItemSecondaryAction2(props, ref) {
  var classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["classes", "className"]);
  return React102.createElement("div", _extends({
    className: clsx_m_default(classes.root, className),
    ref
  }, other));
});
true ? ListItemSecondaryAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: import_prop_types84.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types84.default.object,
  /**
   * @ignore
   */
  className: import_prop_types84.default.string
} : void 0;
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";
var ListItemSecondaryAction_default = withStyles_default(styles123, {
  name: "MuiListItemSecondaryAction"
})(ListItemSecondaryAction);

// node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
init_extends();
var React103 = __toESM(require_react());
var import_prop_types85 = __toESM(require_prop_types());
init_clsx_m();
var styles124 = {
  /* Styles applied to the root element. */
  root: {
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },
  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },
  /* Styles applied to the `Typography` components if dense. */
  dense: {},
  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },
  /* Styles applied to the primary `Typography` component. */
  primary: {},
  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = React103.forwardRef(function ListItemText2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$disableTypogra = props.disableTypography, disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra, _props$inset = props.inset, inset = _props$inset === void 0 ? false : _props$inset, primaryProp = props.primary, primaryTypographyProps = props.primaryTypographyProps, secondaryProp = props.secondary, secondaryTypographyProps = props.secondaryTypographyProps, other = _objectWithoutProperties(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);
  var _React$useContext = React103.useContext(ListContext_default), dense = _React$useContext.dense;
  var primary = primaryProp != null ? primaryProp : children;
  if (primary != null && primary.type !== Typography_default && !disableTypography) {
    primary = React103.createElement(Typography_default, _extends({
      variant: dense ? "body2" : "body1",
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }
  var secondary = secondaryProp;
  if (secondary != null && secondary.type !== Typography_default && !disableTypography) {
    secondary = React103.createElement(Typography_default, _extends({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }
  return React103.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref
  }, other), primary, secondary);
});
true ? ListItemText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Alias for the `primary` prop.
   */
  children: import_prop_types85.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types85.default.object,
  /**
   * @ignore
   */
  className: import_prop_types85.default.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography: import_prop_types85.default.bool,
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: import_prop_types85.default.bool,
  /**
   * The main content element.
   */
  primary: import_prop_types85.default.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: import_prop_types85.default.object,
  /**
   * The secondary content element.
   */
  secondary: import_prop_types85.default.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: import_prop_types85.default.object
} : void 0;
var ListItemText_default = withStyles_default(styles124, {
  name: "MuiListItemText"
})(ListItemText);

// node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
init_extends();
var React104 = __toESM(require_react());
var import_prop_types86 = __toESM(require_prop_types());
init_clsx_m();
var styles125 = function styles126(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: "border-box",
      lineHeight: "48px",
      listStyle: "none",
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit"
    },
    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },
    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },
    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: "inherit"
    }
  };
};
var ListSubheader = React104.forwardRef(function ListSubheader2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, Component6 = _props$component === void 0 ? "li" : _props$component, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, _props$disableSticky = props.disableSticky, disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky, _props$inset = props.inset, inset = _props$inset === void 0 ? false : _props$inset, other = _objectWithoutProperties(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);
  return React104.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, color !== "default" && classes["color".concat(capitalize(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref
  }, other));
});
true ? ListSubheader.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types86.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types86.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types86.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types86.default.oneOf(["default", "primary", "inherit"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types86.default.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: import_prop_types86.default.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: import_prop_types86.default.bool,
  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: import_prop_types86.default.bool
} : void 0;
var ListSubheader_default = withStyles_default(styles125, {
  name: "MuiListSubheader"
})(ListSubheader);

// node_modules/@material-ui/core/esm/Menu/Menu.js
init_extends();
var React107 = __toESM(require_react());
var import_react_is9 = __toESM(require_react_is());
var import_prop_types89 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Popover/Popover.js
init_extends();
var React105 = __toESM(require_react());
var import_prop_types87 = __toESM(require_prop_types());
var ReactDOM9 = __toESM(require_react_dom());
init_clsx_m();
function getOffsetTop(rect, vertical) {
  var offset5 = 0;
  if (typeof vertical === "number") {
    offset5 = vertical;
  } else if (vertical === "center") {
    offset5 = rect.height / 2;
  } else if (vertical === "bottom") {
    offset5 = rect.height;
  }
  return offset5;
}
function getOffsetLeft(rect, horizontal) {
  var offset5 = 0;
  if (typeof horizontal === "number") {
    offset5 = horizontal;
  } else if (horizontal === "center") {
    offset5 = rect.width / 2;
  } else if (horizontal === "right") {
    offset5 = rect.width;
  }
  return offset5;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function(n) {
    return typeof n === "number" ? "".concat(n, "px") : n;
  }).join(" ");
}
function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;
  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }
  return scrollTop;
}
function getAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var styles127 = {
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the `Paper` component. */
  paper: {
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Popover = React105.forwardRef(function Popover2(props, ref) {
  var action = props.action, anchorEl = props.anchorEl, _props$anchorOrigin = props.anchorOrigin, anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: "top",
    horizontal: "left"
  } : _props$anchorOrigin, anchorPosition = props.anchorPosition, _props$anchorReferenc = props.anchorReference, anchorReference = _props$anchorReferenc === void 0 ? "anchorEl" : _props$anchorReferenc, children = props.children, classes = props.classes, className = props.className, containerProp = props.container, _props$elevation = props.elevation, elevation = _props$elevation === void 0 ? 8 : _props$elevation, getContentAnchorEl = props.getContentAnchorEl, _props$marginThreshol = props.marginThreshold, marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, open = props.open, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, _props$transformOrigi = props.transformOrigin, transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: "top",
    horizontal: "left"
  } : _props$transformOrigi, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow_default : _props$TransitionComp, _props$transitionDura = props.transitionDuration, transitionDurationProp = _props$transitionDura === void 0 ? "auto" : _props$transitionDura, _props$TransitionProp = props.TransitionProps, TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp, other = _objectWithoutProperties(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  var paperRef = React105.useRef();
  var getAnchorOffset = React105.useCallback(function(contentAnchorOffset) {
    if (anchorReference === "anchorPosition") {
      if (true) {
        if (!anchorPosition) {
          console.error('Material-UI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.');
        }
      }
      return anchorPosition;
    }
    var resolvedAnchorEl = getAnchorEl(anchorEl);
    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();
    if (true) {
      var box = anchorElement.getBoundingClientRect();
      if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
      }
    }
    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : "center";
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  var getContentAnchorOffset = React105.useCallback(function(element) {
    var contentAnchorOffset = 0;
    if (getContentAnchorEl && anchorReference === "anchorEl") {
      var contentAnchorEl = getContentAnchorEl(element);
      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      }
      if (true) {
        if (anchorOrigin.vertical !== "top") {
          console.error(["Material-UI: You can not change the default `anchorOrigin.vertical` value ", "when also providing the `getContentAnchorEl` prop to the popover component.", "Only use one of the two props.", "Set `getContentAnchorEl` to `null | undefined` or leave `anchorOrigin.vertical` unchanged."].join("\n"));
        }
      }
    }
    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]);
  var getTransformOrigin = React105.useCallback(function(elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = React105.useCallback(function(element) {
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    var anchorOffset = getAnchorOffset(contentAnchorOffset);
    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width;
    var containerWindow = ownerWindow(getAnchorEl(anchorEl));
    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;
      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }
    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(["Material-UI: The popover component is too tall.", "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), "Please consider adding a `max-height` to improve the user-experience."].join("\n"));
      }
    }
    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;
      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;
      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }
    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = React105.useCallback(function() {
    var element = paperRef.current;
    if (!element) {
      return;
    }
    var positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);
  var handleEntering = function handleEntering2(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  var handlePaperRef = React105.useCallback(function(instance) {
    paperRef.current = ReactDOM9.findDOMNode(instance);
  }, []);
  React105.useEffect(function() {
    if (open) {
      setPositioningStyles();
    }
  });
  React105.useImperativeHandle(action, function() {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  React105.useEffect(function() {
    if (!open) {
      return void 0;
    }
    var handleResize = debounce(function() {
      setPositioningStyles();
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : void 0);
  return React105.createElement(Modal_default, _extends({
    container,
    open,
    ref,
    BackdropProps: {
      invisible: true
    },
    className: clsx_m_default(classes.root, className)
  }, other), React105.createElement(TransitionComponent, _extends({
    appear: true,
    in: open,
    onEnter,
    onEntered,
    onExit,
    onExited,
    onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: createChainedFunction(handleEntering, TransitionProps.onEntering)
  }), React105.createElement(Paper_default, _extends({
    elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: clsx_m_default(classes.paper, PaperProps.className)
  }), children)));
});
true ? Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: refType_default,
  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes(import_prop_types87.default.oneOfType([HTMLElementType, import_prop_types87.default.func]), function(props) {
    if (props.open && (!props.anchorReference || props.anchorReference === "anchorEl")) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else {
        return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join("\n"));
      }
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: import_prop_types87.default.shape({
    horizontal: import_prop_types87.default.oneOfType([import_prop_types87.default.oneOf(["center", "left", "right"]), import_prop_types87.default.number]).isRequired,
    vertical: import_prop_types87.default.oneOfType([import_prop_types87.default.oneOf(["bottom", "center", "top"]), import_prop_types87.default.number]).isRequired
  }),
  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: import_prop_types87.default.shape({
    left: import_prop_types87.default.number.isRequired,
    top: import_prop_types87.default.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: import_prop_types87.default.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: import_prop_types87.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types87.default.object,
  /**
   * @ignore
   */
  className: import_prop_types87.default.string,
  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types87.default.oneOfType([HTMLElementType, import_prop_types87.default.instanceOf(React105.Component), import_prop_types87.default.func]),
  /**
   * The elevation of the popover.
   */
  elevation: import_prop_types87.default.number,
  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` prop.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: import_prop_types87.default.func,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: import_prop_types87.default.number,
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: import_prop_types87.default.func,
  /**
   * Callback fired before the component is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: deprecatedPropType(import_prop_types87.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the component has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: deprecatedPropType(import_prop_types87.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the component is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: deprecatedPropType(import_prop_types87.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired before the component is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: deprecatedPropType(import_prop_types87.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the component has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: deprecatedPropType(import_prop_types87.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the component is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: deprecatedPropType(import_prop_types87.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * If `true`, the popover is visible.
   */
  open: import_prop_types87.default.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: import_prop_types87.default.shape({
    component: elementTypeAcceptingRef_default
  }),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: import_prop_types87.default.shape({
    horizontal: import_prop_types87.default.oneOfType([import_prop_types87.default.oneOf(["center", "left", "right"]), import_prop_types87.default.number]).isRequired,
    vertical: import_prop_types87.default.oneOfType([import_prop_types87.default.oneOf(["bottom", "center", "top"]), import_prop_types87.default.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: import_prop_types87.default.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: import_prop_types87.default.oneOfType([import_prop_types87.default.oneOf(["auto"]), import_prop_types87.default.number, import_prop_types87.default.shape({
    appear: import_prop_types87.default.number,
    enter: import_prop_types87.default.number,
    exit: import_prop_types87.default.number
  })]),
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: import_prop_types87.default.object
} : void 0;
var Popover_default = withStyles_default(styles127, {
  name: "MuiPopover"
})(Popover);

// node_modules/@material-ui/core/esm/MenuList/MenuList.js
init_extends();
var React106 = __toESM(require_react());
var import_react_is8 = __toESM(require_react_is());
var import_prop_types88 = __toESM(require_prop_types());
var ReactDOM10 = __toESM(require_react_dom());
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  var text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}
var useEnhancedEffect8 = typeof window === "undefined" ? React106.useEffect : React106.useLayoutEffect;
var MenuList = React106.forwardRef(function MenuList2(props, ref) {
  var actions = props.actions, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, _props$autoFocusItem = props.autoFocusItem, autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem, children = props.children, className = props.className, _props$disabledItemsF = props.disabledItemsFocusable, disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF, _props$disableListWra = props.disableListWrap, disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra, onKeyDown = props.onKeyDown, _props$variant = props.variant, variant = _props$variant === void 0 ? "selectedMenu" : _props$variant, other = _objectWithoutProperties(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);
  var listRef = React106.useRef(null);
  var textCriteriaRef = React106.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect8(function() {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React106.useImperativeHandle(actions, function() {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        var noExplicitWidth = !listRef.current.style.width;
        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(getScrollbarSize(true), "px");
          listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }
        return listRef.current;
      }
    };
  }, []);
  var handleKeyDown2 = function handleKeyDown3(event) {
    var list = listRef.current;
    var key = event.key;
    var currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  var handleOwnRef = React106.useCallback(function(instance) {
    listRef.current = ReactDOM10.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(handleOwnRef, ref);
  var activeItemIndex = -1;
  React106.Children.forEach(children, function(child, index) {
    if (!React106.isValidElement(child)) {
      return;
    }
    if (true) {
      if ((0, import_react_is8.isFragment)(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = React106.Children.map(children, function(child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return React106.cloneElement(child, newChildProps);
    }
    return child;
  });
  return React106.createElement(List_default, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown2,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   */
  autoFocus: import_prop_types88.default.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   */
  autoFocusItem: import_prop_types88.default.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: import_prop_types88.default.node,
  /**
   * @ignore
   */
  className: import_prop_types88.default.string,
  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: import_prop_types88.default.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: import_prop_types88.default.bool,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types88.default.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: import_prop_types88.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var MenuList_default = MenuList;

// node_modules/@material-ui/core/esm/Menu/Menu.js
var ReactDOM11 = __toESM(require_react_dom());
var RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
var LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
var styles128 = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: "calc(100% - 96px)",
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: "touch"
  },
  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Menu = React107.forwardRef(function Menu2(props, ref) {
  var _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, children = props.children, classes = props.classes, _props$disableAutoFoc = props.disableAutoFocusItem, disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$MenuListProps = props.MenuListProps, MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps, onClose = props.onClose, onEnteringProp = props.onEntering, open = props.open, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, PopoverClasses = props.PopoverClasses, _props$transitionDura = props.transitionDuration, transitionDuration = _props$transitionDura === void 0 ? "auto" : _props$transitionDura, _props$TransitionProp = props.TransitionProps;
  _props$TransitionProp = _props$TransitionProp === void 0 ? {} : _props$TransitionProp;
  var onEntering = _props$TransitionProp.onEntering, TransitionProps = _objectWithoutProperties(_props$TransitionProp, ["onEntering"]), _props$variant = props.variant, variant = _props$variant === void 0 ? "selectedMenu" : _props$variant, other = _objectWithoutProperties(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"]);
  var theme = useTheme2();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = React107.useRef(null);
  var contentAnchorRef = React107.useRef(null);
  var getContentAnchorEl = function getContentAnchorEl2() {
    return contentAnchorRef.current;
  };
  var handleEntering = function handleEntering2(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }
    if (onEnteringProp) {
      onEnteringProp(element, isAppearing);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  var handleListKeyDown = function handleListKeyDown2(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  var activeItemIndex = -1;
  React107.Children.map(children, function(child, index) {
    if (!React107.isValidElement(child)) {
      return;
    }
    if (true) {
      if ((0, import_react_is9.isFragment)(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = React107.Children.map(children, function(child, index) {
    if (index === activeItemIndex) {
      return React107.cloneElement(child, {
        ref: function ref2(instance) {
          contentAnchorRef.current = ReactDOM11.findDOMNode(instance);
          setRef(child.ref, instance);
        }
      });
    }
    return child;
  });
  return React107.createElement(Popover_default, _extends({
    getContentAnchorEl,
    classes: PopoverClasses,
    onClose,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    anchorOrigin: theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: _extends({}, PaperProps, {
      classes: _extends({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open,
    ref,
    transitionDuration
  }, other), React107.createElement(MenuList_default, _extends({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem,
    variant
  }, MenuListProps, {
    className: clsx_m_default(classes.list, MenuListProps.className)
  }), items));
});
true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: import_prop_types89.default.oneOfType([HTMLElementType, import_prop_types89.default.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: import_prop_types89.default.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: import_prop_types89.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types89.default.object,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: import_prop_types89.default.bool,
  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: import_prop_types89.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: import_prop_types89.default.func,
  /**
   * Callback fired before the Menu enters.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: deprecatedPropType(import_prop_types89.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the Menu has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: deprecatedPropType(import_prop_types89.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the Menu is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: deprecatedPropType(import_prop_types89.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired before the Menu exits.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: deprecatedPropType(import_prop_types89.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the Menu has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: deprecatedPropType(import_prop_types89.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the Menu is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: deprecatedPropType(import_prop_types89.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * If `true`, the menu is visible.
   */
  open: import_prop_types89.default.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: import_prop_types89.default.object,
  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: import_prop_types89.default.object,
  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: import_prop_types89.default.oneOfType([import_prop_types89.default.oneOf(["auto"]), import_prop_types89.default.number, import_prop_types89.default.shape({
    appear: import_prop_types89.default.number,
    enter: import_prop_types89.default.number,
    exit: import_prop_types89.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition) component.
   */
  TransitionProps: import_prop_types89.default.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: import_prop_types89.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var Menu_default = withStyles_default(styles128, {
  name: "MuiMenu"
})(Menu);

// node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
init_extends();
var React108 = __toESM(require_react());
var import_prop_types90 = __toESM(require_prop_types());
init_clsx_m();
var styles129 = function styles130(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body1, _defineProperty({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      width: "auto",
      overflow: "hidden",
      whiteSpace: "nowrap"
    }, theme.breakpoints.up("sm"), {
      minHeight: "auto"
    })),
    // TODO v5: remove
    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},
    /* Styles applied to the root element if `selected={true}`. */
    selected: {},
    /* Styles applied to the root element if dense. */
    dense: _extends({}, theme.typography.body2, {
      minHeight: "auto"
    })
  };
};
var MenuItem = React108.forwardRef(function MenuItem2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, component = _props$component === void 0 ? "li" : _props$component, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, ListItemClasses = props.ListItemClasses, _props$role = props.role, role = _props$role === void 0 ? "menuitem" : _props$role, selected = props.selected, tabIndexProp = props.tabIndex, other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);
  var tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
  }
  return React108.createElement(ListItem_default, _extends({
    button: true,
    role,
    tabIndex,
    component,
    selected,
    disableGutters,
    classes: _extends({
      dense: classes.dense
    }, ListItemClasses),
    className: clsx_m_default(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref
  }, other));
});
true ? MenuItem.propTypes = {
  /**
   * Menu item contents.
   */
  children: import_prop_types90.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types90.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types90.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types90.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: import_prop_types90.default.bool,
  /**
   * @ignore
   */
  disabled: import_prop_types90.default.bool,
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: import_prop_types90.default.bool,
  /**
   * `classes` prop applied to the [`ListItem`](/api/list-item/) element.
   */
  ListItemClasses: import_prop_types90.default.object,
  /**
   * @ignore
   */
  role: import_prop_types90.default.string,
  /**
   * @ignore
   */
  selected: import_prop_types90.default.bool,
  /**
   * @ignore
   */
  tabIndex: import_prop_types90.default.number
} : void 0;
var MenuItem_default = withStyles_default(styles129, {
  name: "MuiMenuItem"
})(MenuItem);

// node_modules/@material-ui/core/esm/MobileStepper/MobileStepper.js
init_extends();
var React109 = __toESM(require_react());
var import_prop_types91 = __toESM(require_prop_types());
init_clsx_m();
var styles131 = function styles132(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      background: theme.palette.background.default,
      padding: 8
    },
    /* Styles applied to the root element if `position="bottom"`. */
    positionBottom: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },
    /* Styles applied to the root element if `position="top"`. */
    positionTop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },
    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {},
    /* Styles applied to the dots container if `variant="dots"`. */
    dots: {
      display: "flex",
      flexDirection: "row"
    },
    /* Styles applied to each dot if `variant="dots"`. */
    dot: {
      backgroundColor: theme.palette.action.disabled,
      borderRadius: "50%",
      width: 8,
      height: 8,
      margin: "0 2px"
    },
    /* Styles applied to a dot if `variant="dots"` and this is the active step. */
    dotActive: {
      backgroundColor: theme.palette.primary.main
    },
    /* Styles applied to the Linear Progress component if `variant="progress"`. */
    progress: {
      width: "50%"
    }
  };
};
var MobileStepper = React109.forwardRef(function MobileStepper2(props, ref) {
  var _props$activeStep = props.activeStep, activeStep = _props$activeStep === void 0 ? 0 : _props$activeStep, backButton = props.backButton, classes = props.classes, className = props.className, LinearProgressProps = props.LinearProgressProps, nextButton = props.nextButton, _props$position = props.position, position = _props$position === void 0 ? "bottom" : _props$position, steps = props.steps, _props$variant = props.variant, variant = _props$variant === void 0 ? "dots" : _props$variant, other = _objectWithoutProperties(props, ["activeStep", "backButton", "classes", "className", "LinearProgressProps", "nextButton", "position", "steps", "variant"]);
  return React109.createElement(Paper_default, _extends({
    square: true,
    elevation: 0,
    className: clsx_m_default(classes.root, classes["position".concat(capitalize(position))], className),
    ref
  }, other), backButton, variant === "text" && React109.createElement(React109.Fragment, null, activeStep + 1, " / ", steps), variant === "dots" && React109.createElement("div", {
    className: classes.dots
  }, _toConsumableArray(new Array(steps)).map(function(_, index) {
    return React109.createElement("div", {
      key: index,
      className: clsx_m_default(classes.dot, index === activeStep && classes.dotActive)
    });
  })), variant === "progress" && React109.createElement(LinearProgress_default, _extends({
    className: classes.progress,
    variant: "determinate",
    value: Math.ceil(activeStep / (steps - 1) * 100)
  }, LinearProgressProps)), nextButton);
});
true ? MobileStepper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the active step (zero based index).
   * Defines which dot is highlighted when the variant is 'dots'.
   */
  activeStep: import_prop_types91.default.number,
  /**
   * A back button element. For instance, it can be a `Button` or an `IconButton`.
   */
  backButton: import_prop_types91.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types91.default.object,
  /**
   * @ignore
   */
  className: import_prop_types91.default.string,
  /**
   * Props applied to the `LinearProgress` element.
   */
  LinearProgressProps: import_prop_types91.default.object,
  /**
   * A next button element. For instance, it can be a `Button` or an `IconButton`.
   */
  nextButton: import_prop_types91.default.node,
  /**
   * Set the positioning type.
   */
  position: import_prop_types91.default.oneOf(["bottom", "static", "top"]),
  /**
   * The total steps.
   */
  steps: import_prop_types91.default.number.isRequired,
  /**
   * The variant to use.
   */
  variant: import_prop_types91.default.oneOf(["dots", "progress", "text"])
} : void 0;
var MobileStepper_default = withStyles_default(styles131, {
  name: "MuiMobileStepper"
})(MobileStepper);

// node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js
init_extends();
var React112 = __toESM(require_react());
var import_prop_types93 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js
init_extends();
var React110 = __toESM(require_react());
var import_prop_types92 = __toESM(require_prop_types());
init_clsx_m();
var NativeSelectInput = React110.forwardRef(function NativeSelectInput2(props, ref) {
  var classes = props.classes, className = props.className, disabled = props.disabled, IconComponent = props.IconComponent, inputRef = props.inputRef, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);
  return React110.createElement(React110.Fragment, null, React110.createElement("select", _extends({
    className: clsx_m_default(
      classes.root,
      // TODO v5: merge root and select
      classes.select,
      classes[variant],
      className,
      disabled && classes.disabled
    ),
    disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : React110.createElement(IconComponent, {
    className: clsx_m_default(classes.icon, classes["icon".concat(capitalize(variant))], disabled && classes.disabled)
  }));
});
true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: import_prop_types92.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types92.default.object.isRequired,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types92.default.string,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: import_prop_types92.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types92.default.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType_default,
  /**
   * @ignore
   */
  multiple: import_prop_types92.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types92.default.string,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types92.default.func,
  /**
   * The input value.
   */
  value: import_prop_types92.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types92.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var NativeSelectInput_default = NativeSelectInput;

// node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js
var React111 = __toESM(require_react());
var ArrowDropDown_default = createSvgIcon(React111.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js
var styles133 = function styles134(theme) {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},
    /* Styles applied to the select component `select` class. */
    select: {
      "-moz-appearance": "none",
      // Reset
      "-webkit-appearance": "none",
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: "none",
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: "pointer",
      "&:focus": {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
        borderRadius: 0
        // Reset Chrome style
      },
      // Remove IE 11 arrow
      "&::-ms-expand": {
        display: "none"
      },
      "&$disabled": {
        cursor: "default"
      },
      "&[multiple]": {
        height: "auto"
      },
      "&:not([multiple]) option, &:not([multiple]) optgroup": {
        backgroundColor: theme.palette.background.paper
      },
      "&&": {
        paddingRight: 24
      }
    },
    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      "&&": {
        paddingRight: 32
      }
    },
    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      "&&": {
        paddingRight: 32
      }
    },
    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: "auto",
      // Resets for multpile select with chips
      minHeight: "1.1876em",
      // Required for select\text-field height consistency
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},
    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: "absolute",
      right: 0,
      top: "calc(50% - 12px)",
      // Center vertically
      pointerEvents: "none",
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    },
    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: "rotate(180deg)"
    },
    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },
    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },
    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
      width: "100%"
    }
  };
};
var defaultInput = React112.createElement(Input_default, null);
var NativeSelect = React112.forwardRef(function NativeSelect2(props, ref) {
  var children = props.children, classes = props.classes, _props$IconComponent = props.IconComponent, IconComponent = _props$IconComponent === void 0 ? ArrowDropDown_default : _props$IconComponent, _props$input = props.input, input = _props$input === void 0 ? defaultInput : _props$input, inputProps = props.inputProps, variant = props.variant, other = _objectWithoutProperties(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);
  var muiFormControl = useFormControl2();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  return React112.cloneElement(input, _extends({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: NativeSelectInput_default,
    inputProps: _extends({
      children,
      classes,
      IconComponent,
      variant: fcs.variant,
      type: void 0
    }, inputProps, input ? input.props.inputProps : {}),
    ref
  }, other));
});
true ? NativeSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: import_prop_types93.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types93.default.object,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types93.default.elementType,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: import_prop_types93.default.element,
  /**
   * Attributes applied to the `select` element.
   */
  inputProps: import_prop_types93.default.object,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types93.default.func,
  /**
   * The input value. The DOM API casts this to a string.
   */
  value: import_prop_types93.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types93.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
NativeSelect.muiName = "Select";
var NativeSelect_default = withStyles_default(styles133, {
  name: "MuiNativeSelect"
})(NativeSelect);

// node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var React113 = __toESM(require_react());
var import_prop_types94 = __toESM(require_prop_types());
var useEnhancedEffect9 = typeof window !== "undefined" && true ? React113.useLayoutEffect : React113.useEffect;
function NoSsr(props) {
  var children = props.children, _props$defer = props.defer, defer = _props$defer === void 0 ? false : _props$defer, _props$fallback = props.fallback, fallback = _props$fallback === void 0 ? null : _props$fallback;
  var _React$useState = React113.useState(false), mountedState = _React$useState[0], setMountedState = _React$useState[1];
  useEnhancedEffect9(function() {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React113.useEffect(function() {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return React113.createElement(React113.Fragment, null, mountedState ? children : fallback);
}
true ? NoSsr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: import_prop_types94.default.node,
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   */
  defer: import_prop_types94.default.bool,
  /**
   * The fallback content to display.
   */
  fallback: import_prop_types94.default.node
} : void 0;
if (true) {
  NoSsr["propTypes"] = exactProp(NoSsr.propTypes);
}
var NoSsr_default = NoSsr;

// node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js
init_extends();
var React115 = __toESM(require_react());
var import_prop_types96 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js
init_extends();
var React114 = __toESM(require_react());
var import_prop_types95 = __toESM(require_prop_types());
init_clsx_m();
var styles135 = function styles136(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "absolute",
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: "0 8px",
      pointerEvents: "none",
      borderRadius: "inherit",
      borderStyle: "solid",
      borderWidth: 1,
      overflow: "hidden"
    },
    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      textAlign: "left",
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },
    /* Styles applied to the legend element. */
    legendLabelled: {
      display: "block",
      width: "auto",
      textAlign: "left",
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block"
      }
    },
    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1e3,
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
var NotchedOutline = React114.forwardRef(function NotchedOutline2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, label = props.label, labelWidthProp = props.labelWidth, notched = props.notched, style = props.style, other = _objectWithoutProperties(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);
  var theme = useTheme2();
  var align = theme.direction === "rtl" ? "right" : "left";
  if (label !== void 0) {
    return React114.createElement("fieldset", _extends({
      "aria-hidden": true,
      className: clsx_m_default(classes.root, className),
      ref,
      style
    }, other), React114.createElement("legend", {
      className: clsx_m_default(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? React114.createElement("span", null, label) : React114.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "&#8203;"
      }
    })));
  }
  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return React114.createElement("fieldset", _extends({
    "aria-hidden": true,
    style: _extends(_defineProperty({}, "padding".concat(capitalize(align)), 8), style),
    className: clsx_m_default(classes.root, className),
    ref
  }, other), React114.createElement("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, React114.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "&#8203;"
    }
  })));
});
true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types95.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types95.default.object,
  /**
   * @ignore
   */
  className: import_prop_types95.default.string,
  /**
   * The label.
   */
  label: import_prop_types95.default.node,
  /**
   * The width of the label.
   */
  labelWidth: import_prop_types95.default.number.isRequired,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types95.default.bool.isRequired,
  /**
   * @ignore
   */
  style: import_prop_types95.default.object
} : void 0;
var NotchedOutline_default = withStyles_default(styles135, {
  name: "PrivateNotchedOutline"
})(NotchedOutline);

// node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js
var styles137 = function styles138(theme) {
  var borderColor = theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      "&:hover $notchedOutline": {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        "&:hover $notchedOutline": {
          borderColor
        }
      },
      "&$focused $notchedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      "&$error $notchedOutline": {
        borderColor: theme.palette.error.main
      },
      "&$disabled $notchedOutline": {
        borderColor: theme.palette.action.disabled
      }
    },
    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      "&$focused $notchedOutline": {
        borderColor: theme.palette.secondary.main
      }
    },
    /* Styles applied to the root element if the component is focused. */
    focused: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },
    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "18.5px 14px",
      "&$marginDense": {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },
    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor
    },
    /* Styles applied to the `input` element. */
    input: {
      padding: "18.5px 14px",
      "&:-webkit-autofill": {
        WebkitBoxShadow: theme.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.type === "light" ? null : "#fff",
        caretColor: theme.palette.type === "light" ? null : "#fff",
        borderRadius: "inherit"
      }
    },
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },
    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },
    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = React115.forwardRef(function OutlinedInput2(props, ref) {
  var classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, label = props.label, _props$labelWidth = props.labelWidth, labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, notched = props.notched, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);
  return React115.createElement(InputBase_default, _extends({
    renderSuffix: function renderSuffix(state) {
      return React115.createElement(NotchedOutline_default, {
        className: classes.notchedOutline,
        label,
        labelWidth,
        notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: _extends({}, classes, {
      root: clsx_m_default(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
true ? OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types96.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types96.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types96.default.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types96.default.oneOf(["primary", "secondary"]),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types96.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types96.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types96.default.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: import_prop_types96.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types96.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types96.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: import_prop_types96.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types96.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label of the input. It is only used for layout. The actual labelling
   * is handled by `InputLabel`. If specified `labelWidth` is ignored.
   */
  label: import_prop_types96.default.node,
  /**
   * The width of the label. Is ignored if `label` is provided. Prefer `label`
   * if the input label appears with a strike through.
   */
  labelWidth: import_prop_types96.default.number,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types96.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types96.default.oneOfType([import_prop_types96.default.number, import_prop_types96.default.string]),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: import_prop_types96.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types96.default.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types96.default.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types96.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types96.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types96.default.bool,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types96.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types96.default.oneOfType([import_prop_types96.default.number, import_prop_types96.default.string]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types96.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types96.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types96.default.any
} : void 0;
OutlinedInput.muiName = "Input";
var OutlinedInput_default = withStyles_default(styles137, {
  name: "MuiOutlinedInput"
})(OutlinedInput);

// node_modules/@material-ui/core/esm/Popper/Popper.js
init_extends();
var React116 = __toESM(require_react());
var import_prop_types97 = __toESM(require_prop_types());

// node_modules/popper.js/dist/esm/popper.js
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
var timeoutDuration = function() {
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();
function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser && window.Promise;
var debounce2 = supportsMicroTasks ? microtaskDebounce : taskDebounce;
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
}
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  var window2 = element.ownerDocument.defaultView;
  var css = window2.getComputedStyle(element, null);
  return property ? css[property] : css;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent2(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }
  var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent2(getParentNode(element));
}
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE(10) ? document.body : null;
  var offsetParent = element.offsetParent || null;
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }
  if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    var html2 = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html2;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
function getBordersSize(styles195, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles195["border" + sideA + "Width"]) + parseFloat(styles195["border" + sideB + "Width"]);
}
function getSize(axis, body3, html2, computedStyle) {
  return Math.max(body3["offset" + axis], body3["scroll" + axis], html2["client" + axis], html2["offset" + axis], html2["scroll" + axis], isIE(10) ? parseInt(html2["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
}
function getWindowSizes(document2) {
  var body3 = document2.body;
  var html2 = document2.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html2);
  return {
    height: getSize("Height", body3, html2, computedStyle),
    width: getSize("Width", body3, html2, computedStyle)
  };
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends2 = Object.assign || function(target) {
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
function getClientRect(offsets) {
  return _extends2({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
function getBoundingClientRect(element) {
  var rect = {};
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {
  }
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    var styles195 = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles195, "x");
    vertScrollbar -= getBordersSize(styles195, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isIE102 = isIE(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent2(children);
  var styles195 = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles195.borderTopWidth);
  var borderLeftWidth = parseFloat(styles195.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (!isIE102 && isHTML) {
    var marginTop = parseFloat(styles195.marginTop);
    var marginLeft = parseFloat(styles195.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var html2 = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html2);
  var width = Math.max(html2.clientWidth, window.innerWidth || 0);
  var height = Math.max(html2.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html2) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html2, "left") : 0;
  var offset5 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height
  };
  return getClientRect(offset5);
}
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent2(getParentNode(reference));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  padding = padding || 0;
  var isPaddingNumber = typeof padding === "number";
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}
function getArea(_ref6) {
  var width = _ref6.width, height = _ref6.height;
  return width * height;
}
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function(key) {
    return _extends2({
      key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function(a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function(_ref24) {
    var width = _ref24.width, height = _ref24.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split("-")[1];
  return computedPlacement + (variation ? "-" + variation : "");
}
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
function getOuterSizes(element) {
  var window2 = element.ownerDocument.defaultView;
  var styles195 = window2.getComputedStyle(element);
  var x = parseFloat(styles195.marginTop || 0) + parseFloat(styles195.marginBottom || 0);
  var y = parseFloat(styles195.marginLeft || 0) + parseFloat(styles195.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
function getOppositePlacement(placement) {
  var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split("-")[0];
  var popperRect = getOuterSizes(popper);
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };
  var isHoriz = ["right", "left"].indexOf(placement) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}
function find(arr, check) {
  if (Array.prototype.find) {
    return arr.find(check);
  }
  return arr.filter(check)[0];
}
function findIndex(arr, prop, value) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop] === value;
    });
  }
  var match = find(arr, function(obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
function runModifiers(modifiers2, data, ends) {
  var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
function update() {
  if (this.state.isDestroyed) {
    return;
  }
  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
  data = runModifiers(this.modifiers, data);
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
function isModifierEnabled(modifiers2, modifierName) {
  return modifiers2.some(function(_ref6) {
    var name = _ref6.name, enabled = _ref6.enabled;
    return enabled && name === modifierName;
  });
}
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? "" + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
function destroy() {
  this.state.isDestroyed = true;
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }
  this.disableEventListeners();
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}
function getWindow(element) {
  var ownerDocument2 = element.ownerDocument;
  return ownerDocument2 ? ownerDocument2.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });
  if (!isBody) {
    attachToScrollParents(getScrollParent2(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}
function setupEventListeners(reference, options, state, updateBound) {
  state.updateBound = updateBound;
  getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
  var scrollElement = getScrollParent2(reference);
  attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
function removeEventListeners(reference, state) {
  getWindow(reference).removeEventListener("resize", state.updateBound);
  state.scrollParents.forEach(function(target) {
    target.removeEventListener("scroll", state.updateBound);
  });
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
}
function setStyles(element, styles195) {
  Object.keys(styles195).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles195[prop])) {
      unit = "px";
    }
    element.style[prop] = styles195[prop] + unit;
  });
}
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
function applyStyle(data) {
  setStyles(data.instance.popper, data.styles);
  setAttributes(data.instance.popper, data.attributes);
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }
  return data;
}
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute("x-placement", placement);
  setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });
  return options;
}
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var round2 = Math.round, floor = Math.floor;
  var noRound = function noRound2(v) {
    return v;
  };
  var referenceWidth = round2(reference.width);
  var popperWidth = round2(popper.width);
  var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round2 : floor;
  var verticalToInteger = !shouldRound ? noRound : round2;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
function computeStyle(data, options) {
  var x = options.x, y = options.y;
  var popper = data.offsets.popper;
  var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== void 0) {
    console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);
  var styles195 = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === "bottom" ? "top" : "bottom";
  var sideB = y === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left = void 0, top = void 0;
  if (sideA === "bottom") {
    if (offsetParent.nodeName === "HTML") {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles195[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
    styles195[sideA] = 0;
    styles195[sideB] = 0;
    styles195.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles195[sideA] = top * invertTop;
    styles195[sideB] = left * invertLeft;
    styles195.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data.placement
  };
  data.attributes = _extends2({}, attributes, data.attributes);
  data.styles = _extends2({}, styles195, data.styles);
  data.arrowStyles = _extends2({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
function isModifierRequired(modifiers2, requestingName, requestedName) {
  var requesting = find(modifiers2, function(_ref6) {
    var name = _ref6.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers2.some(function(modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
  }
  return isRequired;
}
function arrow(data, options) {
  var _data$offsets$arrow;
  if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
    return data;
  }
  var arrowElement = options.element;
  if (typeof arrowElement === "string") {
    arrowElement = data.instance.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return data;
    }
  } else {
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn("WARNING: `arrow.element` must be child of its popper element!");
      return data;
    }
  }
  var placement = data.placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement) !== -1;
  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css["margin" + sideCapitalized]);
  var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
  return data;
}
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}
var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var validPlacements = placements.slice(3);
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function flip(data, options) {
  if (isModifierEnabled(data.instance.modifiers, "inner")) {
    return data;
  }
  if (data.flipped && data.placement === data.originalPlacement) {
    return data;
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";
  var flipOrder = [];
  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }
  flipOrder.forEach(function(step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }
    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;
    var floor = Math.floor;
    var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? "-" + variation : "");
      data.offsets.popper = _extends2({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, "flip");
    }
  });
  return data;
}
function keepTogether(data) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var placement = data.placement.split("-")[0];
  var floor = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";
  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }
  return data;
}
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];
  if (!value) {
    return str;
  }
  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }
    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === "vh" || unit === "vw") {
    var size = void 0;
    if (unit === "vh") {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    return value;
  }
}
function parseOffset(offset5, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
  var fragments = offset5.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });
  var divider = fragments.indexOf(find(fragments, function(frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  }
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
  ops = ops.map(function(op, index) {
    var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
    var mergeWithPrevious = false;
    return op.reduce(function(a, b) {
      if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []).map(function(str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });
  ops.forEach(function(op, index) {
    op.forEach(function(frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}
function offset(data, _ref6) {
  var offset5 = _ref6.offset;
  var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var basePlacement = placement.split("-")[0];
  var offsets = void 0;
  if (isNumeric(+offset5)) {
    offsets = [+offset5, 0];
  } else {
    offsets = parseOffset(offset5, popper, reference, basePlacement);
  }
  if (basePlacement === "left") {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === "top") {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }
  data.popper = popper;
  return data;
}
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }
  var transformProp = getSupportedPropertyName("transform");
  var popperStyles = data.instance.popper.style;
  var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === "right" ? "left" : "top";
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function(placement) {
    var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
    popper = _extends2({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftvariation = placement.split("-")[1];
  if (shiftvariation) {
    var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends2({}, popper, shiftOffsets[shiftvariation]);
  }
  return data;
}
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
    return data;
  }
  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    if (data.hide === true) {
      return data;
    }
    data.hide = true;
    data.attributes["x-out-of-boundaries"] = "";
  } else {
    if (data.hide === false) {
      return data;
    }
    data.hide = false;
    data.attributes["x-out-of-boundaries"] = false;
  }
  return data;
}
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
  popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent"
  },
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]"
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: "viewport",
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right"
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
};
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,
  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {
  },
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {
  },
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers
};
var Popper = function() {
  function Popper4(reference, popper) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    classCallCheck(this, Popper4);
    this.scheduleUpdate = function() {
      return requestAnimationFrame(_this.update);
    };
    this.update = debounce2(this.update.bind(this));
    this.options = _extends2({}, Popper4.Defaults, options);
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;
    this.options.modifiers = {};
    Object.keys(_extends2({}, Popper4.Defaults.modifiers, options.modifiers)).forEach(function(name) {
      _this.options.modifiers[name] = _extends2({}, Popper4.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });
    this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
      return _extends2({
        name
      }, _this.options.modifiers[name]);
    }).sort(function(a, b) {
      return a.order - b.order;
    });
    this.modifiers.forEach(function(modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }
  createClass(Popper4, [{
    key: "update",
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: "destroy",
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]);
  return Popper4;
}();
Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
var popper_default = Popper;

// node_modules/@material-ui/core/esm/Popper/Popper.js
function flipPlacement(placement, theme) {
  var direction = theme && theme.direction || "ltr";
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function getAnchorEl2(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var useEnhancedEffect10 = typeof window !== "undefined" ? React116.useLayoutEffect : React116.useEffect;
var defaultPopperOptions = {};
var Popper2 = React116.forwardRef(function Popper3(props, ref) {
  var anchorEl = props.anchorEl, children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, _props$keepMounted = props.keepMounted, keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted, modifiers2 = props.modifiers, open = props.open, _props$placement = props.placement, initialPlacement = _props$placement === void 0 ? "bottom" : _props$placement, _props$popperOptions = props.popperOptions, popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions, popperRefProp = props.popperRef, style = props.style, _props$transition = props.transition, transition = _props$transition === void 0 ? false : _props$transition, other = _objectWithoutProperties(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]);
  var tooltipRef = React116.useRef(null);
  var ownRef = useForkRef(tooltipRef, ref);
  var popperRef = React116.useRef(null);
  var handlePopperRef = useForkRef(popperRef, popperRefProp);
  var handlePopperRefRef = React116.useRef(handlePopperRef);
  useEnhancedEffect10(function() {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React116.useImperativeHandle(popperRefProp, function() {
    return popperRef.current;
  }, []);
  var _React$useState = React116.useState(true), exited = _React$useState[0], setExited = _React$useState[1];
  var theme = useTheme();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  var _React$useState2 = React116.useState(rtlPlacement), placement = _React$useState2[0], setPlacement = _React$useState2[1];
  React116.useEffect(function() {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  var handleOpen = React116.useCallback(function() {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }
    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }
    var handlePopperUpdate = function handlePopperUpdate2(data) {
      setPlacement(data.placement);
    };
    var resolvedAnchorEl = getAnchorEl2(anchorEl);
    if (true) {
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    var popper = new popper_default(getAnchorEl2(anchorEl), tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: _extends({}, disablePortal ? {} : {
        // It's using scrollParent by default, we can use the viewport when using a portal.
        preventOverflow: {
          boundariesElement: "window"
        }
      }, modifiers2, popperOptions.modifiers),
      // We could have been using a custom modifier like react-popper is doing.
      // But it seems this is the best public API for this use case.
      onCreate: createChainedFunction(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: createChainedFunction(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers2, open, rtlPlacement, popperOptions]);
  var handleRef = React116.useCallback(function(node) {
    setRef(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  var handleClose = function handleClose2() {
    if (!popperRef.current) {
      return;
    }
    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };
  var handleExited = function handleExited2() {
    setExited(true);
    handleClose();
  };
  React116.useEffect(function() {
    return function() {
      handleClose();
    };
  }, []);
  React116.useEffect(function() {
    if (!open && !transition) {
      handleClose();
    }
  }, [open, transition]);
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  var childProps = {
    placement
  };
  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }
  return React116.createElement(Portal_default, {
    disablePortal,
    container
  }, React116.createElement("div", _extends({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: _extends({
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: "fixed",
      // Fix Popper.js display issue
      top: 0,
      left: 0,
      display: !open && keepMounted && !transition ? "none" : null
    }, style)
  }), typeof children === "function" ? children(childProps) : children));
});
true ? Popper2.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A HTML element, [referenceObject](https://popper.js.org/docs/v1/#referenceObject),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(import_prop_types97.default.oneOfType([HTMLElementType, import_prop_types97.default.object, import_prop_types97.default.func]), function(props) {
    if (props.open) {
      var resolvedAnchorEl = getAnchorEl2(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.clientWidth !== "number" || typeof resolvedAnchorEl.clientHeight !== "number" || typeof resolvedAnchorEl.getBoundingClientRect !== "function") {
        return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a referenceObject ", "(https://popper.js.org/docs/v1/#referenceObject)."].join("\n"));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: import_prop_types97.default.oneOfType([import_prop_types97.default.node, import_prop_types97.default.func]).isRequired,
  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types97.default.oneOfType([HTMLElementType, import_prop_types97.default.instanceOf(React116.Component), import_prop_types97.default.func]),
  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: import_prop_types97.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   */
  keepMounted: import_prop_types97.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v1/#modifiers).
   */
  modifiers: import_prop_types97.default.object,
  /**
   * If `true`, the popper is visible.
   */
  open: import_prop_types97.default.bool.isRequired,
  /**
   * Popper placement.
   */
  placement: import_prop_types97.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`popper.js`](https://popper.js.org/docs/v1/) instance.
   */
  popperOptions: import_prop_types97.default.object,
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * @ignore
   */
  style: import_prop_types97.default.object,
  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition: import_prop_types97.default.bool
} : void 0;
var Popper_default = Popper2;

// node_modules/@material-ui/core/esm/Radio/Radio.js
init_extends();
var React122 = __toESM(require_react());
var import_prop_types99 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Radio/RadioButtonIcon.js
var React119 = __toESM(require_react());
var import_prop_types98 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/internal/svg-icons/RadioButtonUnchecked.js
var React117 = __toESM(require_react());
var RadioButtonUnchecked_default = createSvgIcon(React117.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked");

// node_modules/@material-ui/core/esm/internal/svg-icons/RadioButtonChecked.js
var React118 = __toESM(require_react());
var RadioButtonChecked_default = createSvgIcon(React118.createElement("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked");

// node_modules/@material-ui/core/esm/Radio/RadioButtonIcon.js
var styles139 = function styles140(theme) {
  return {
    root: {
      position: "relative",
      display: "flex",
      "&$checked $layer": {
        transform: "scale(1)",
        transition: theme.transitions.create("transform", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.shortest
        })
      }
    },
    layer: {
      left: 0,
      position: "absolute",
      transform: "scale(0)",
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest
      })
    },
    checked: {}
  };
};
function RadioButtonIcon(props) {
  var checked = props.checked, classes = props.classes, fontSize = props.fontSize;
  return React119.createElement("div", {
    className: clsx_m_default(classes.root, checked && classes.checked)
  }, React119.createElement(RadioButtonUnchecked_default, {
    fontSize
  }), React119.createElement(RadioButtonChecked_default, {
    fontSize,
    className: classes.layer
  }));
}
true ? RadioButtonIcon.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types98.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types98.default.object.isRequired,
  /**
   * The size of the radio.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: import_prop_types98.default.oneOf(["small", "medium"])
} : void 0;
var RadioButtonIcon_default = withStyles_default(styles139, {
  name: "PrivateRadioButtonIcon"
})(RadioButtonIcon);

// node_modules/@material-ui/core/esm/RadioGroup/useRadioGroup.js
var React121 = __toESM(require_react());

// node_modules/@material-ui/core/esm/RadioGroup/RadioGroupContext.js
var React120 = __toESM(require_react());
var RadioGroupContext = React120.createContext();
if (true) {
  RadioGroupContext.displayName = "RadioGroupContext";
}
var RadioGroupContext_default = RadioGroupContext;

// node_modules/@material-ui/core/esm/RadioGroup/useRadioGroup.js
function useRadioGroup() {
  return React121.useContext(RadioGroupContext_default);
}

// node_modules/@material-ui/core/esm/Radio/Radio.js
var styles141 = function styles142(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },
    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      "&$checked": {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      "&$checked": {
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon2 = React122.createElement(RadioButtonIcon_default, {
  checked: true
});
var defaultIcon2 = React122.createElement(RadioButtonIcon_default, null);
var Radio = React122.forwardRef(function Radio2(props, ref) {
  var checkedProp = props.checked, classes = props.classes, _props$color = props.color, color = _props$color === void 0 ? "secondary" : _props$color, nameProp = props.name, onChangeProp = props.onChange, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["checked", "classes", "color", "name", "onChange", "size"]);
  var radioGroup = useRadioGroup();
  var checked = checkedProp;
  var onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
  var name = nameProp;
  if (radioGroup) {
    if (typeof checked === "undefined") {
      checked = radioGroup.value === props.value;
    }
    if (typeof name === "undefined") {
      name = radioGroup.name;
    }
  }
  return React122.createElement(SwitchBase_default, _extends({
    color,
    type: "radio",
    icon: React122.cloneElement(defaultIcon2, {
      fontSize: size === "small" ? "small" : "medium"
    }),
    checkedIcon: React122.cloneElement(defaultCheckedIcon2, {
      fontSize: size === "small" ? "small" : "medium"
    }),
    classes: {
      root: clsx_m_default(classes.root, classes["color".concat(capitalize(color))]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    name,
    checked,
    onChange,
    ref
  }, other));
});
true ? Radio.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types99.default.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: import_prop_types99.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types99.default.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types99.default.oneOf(["default", "primary", "secondary"]),
  /**
   * If `true`, the radio will be disabled.
   */
  disabled: import_prop_types99.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: import_prop_types99.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: import_prop_types99.default.node,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types99.default.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types99.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types99.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types99.default.func,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types99.default.bool,
  /**
   * The size of the radio.
   * `small` is equivalent to the dense radio styling.
   */
  size: import_prop_types99.default.oneOf(["medium", "small"]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: import_prop_types99.default.any
} : void 0;
var Radio_default = withStyles_default(styles141, {
  name: "MuiRadio"
})(Radio);

// node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js
init_extends();
var React123 = __toESM(require_react());
var import_prop_types100 = __toESM(require_prop_types());
var RadioGroup = React123.forwardRef(function RadioGroup2(props, ref) {
  var actions = props.actions, children = props.children, nameProp = props.name, valueProp = props.value, onChange = props.onChange, other = _objectWithoutProperties(props, ["actions", "children", "name", "value", "onChange"]);
  var rootRef = React123.useRef(null);
  var _useControlled = useControlled({
    controlled: valueProp,
    default: props.defaultValue,
    name: "RadioGroup"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), value = _useControlled2[0], setValue = _useControlled2[1];
  React123.useImperativeHandle(actions, function() {
    return {
      focus: function focus() {
        var input = rootRef.current.querySelector("input:not(:disabled):checked");
        if (!input) {
          input = rootRef.current.querySelector("input:not(:disabled)");
        }
        if (input) {
          input.focus();
        }
      }
    };
  }, []);
  var handleRef = useForkRef(ref, rootRef);
  var handleChange = function handleChange2(event) {
    setValue(event.target.value);
    if (onChange) {
      onChange(event, event.target.value);
    }
  };
  var name = useId(nameProp);
  return React123.createElement(RadioGroupContext_default.Provider, {
    value: {
      name,
      onChange: handleChange,
      value
    }
  }, React123.createElement(FormGroup_default, _extends({
    role: "radiogroup",
    ref: handleRef
  }, other), children));
});
true ? RadioGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types100.default.node,
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types100.default.oneOfType([import_prop_types100.default.arrayOf(import_prop_types100.default.string), import_prop_types100.default.number, import_prop_types100.default.string]),
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: import_prop_types100.default.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types100.default.func,
  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: import_prop_types100.default.any
} : void 0;
var RadioGroup_default = RadioGroup;

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

// node_modules/@material-ui/core/esm/RootRef/RootRef.js
var React124 = __toESM(require_react());
var ReactDOM12 = __toESM(require_react_dom());
var import_prop_types101 = __toESM(require_prop_types());
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var warnedOnce8 = false;
var RootRef = function(_React$Component) {
  _inherits(RootRef2, _React$Component);
  var _super = _createSuper(RootRef2);
  function RootRef2() {
    _classCallCheck(this, RootRef2);
    return _super.apply(this, arguments);
  }
  _createClass(RootRef2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ref = ReactDOM12.findDOMNode(this);
      setRef(this.props.rootRef, this.ref);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var ref = ReactDOM12.findDOMNode(this);
      if (prevProps.rootRef !== this.props.rootRef || this.ref !== ref) {
        if (prevProps.rootRef !== this.props.rootRef) {
          setRef(prevProps.rootRef, null);
        }
        this.ref = ref;
        setRef(this.props.rootRef, this.ref);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.ref = null;
      setRef(this.props.rootRef, null);
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        if (!warnedOnce8) {
          warnedOnce8 = true;
          console.warn(["Material-UI: The RootRef component is deprecated.", "The component relies on the ReactDOM.findDOMNode API which is deprecated in React.StrictMode.", "Instead, you can get a reference to the underlying DOM node of the components via the `ref` prop."].join("/n"));
        }
      }
      return this.props.children;
    }
  }]);
  return RootRef2;
}(React124.Component);
true ? RootRef.propTypes = {
  /**
   * The wrapped element.
   */
  children: import_prop_types101.default.element.isRequired,
  /**
   * A ref that points to the first DOM node of the wrapped element.
   */
  rootRef: refType_default.isRequired
} : void 0;
if (true) {
  true ? RootRef.propTypes = exactProp(RootRef.propTypes) : void 0;
}
var RootRef_default = RootRef;

// node_modules/@material-ui/core/esm/Select/Select.js
init_extends();
var React126 = __toESM(require_react());
var import_prop_types103 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Select/SelectInput.js
init_extends();
var React125 = __toESM(require_react());
var import_react_is10 = __toESM(require_react_is());
var import_prop_types102 = __toESM(require_prop_types());
init_clsx_m();
function areEqualValues(a, b) {
  if (_typeof(b) === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
function isEmpty(display) {
  return display == null || typeof display === "string" && !display.trim();
}
var SelectInput = React125.forwardRef(function SelectInput2(props, ref) {
  var ariaLabel = props["aria-label"], autoFocus = props.autoFocus, autoWidth = props.autoWidth, children = props.children, classes = props.classes, className = props.className, defaultValue = props.defaultValue, disabled = props.disabled, displayEmpty = props.displayEmpty, IconComponent = props.IconComponent, inputRefProp = props.inputRef, labelId = props.labelId, _props$MenuProps = props.MenuProps, MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps, multiple = props.multiple, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onClose = props.onClose, onFocus = props.onFocus, onOpen = props.onOpen, openProp = props.open, readOnly = props.readOnly, renderValue = props.renderValue, _props$SelectDisplayP = props.SelectDisplayProps, SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP, tabIndexProp = props.tabIndex, type = props.type, valueProp = props.value, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);
  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), value = _useControlled2[0], setValue = _useControlled2[1];
  var inputRef = React125.useRef(null);
  var _React$useState = React125.useState(null), displayNode = _React$useState[0], setDisplayNode = _React$useState[1];
  var _React$useRef = React125.useRef(openProp != null), isOpenControlled = _React$useRef.current;
  var _React$useState2 = React125.useState(), menuMinWidthState = _React$useState2[0], setMenuMinWidthState = _React$useState2[1];
  var _React$useState3 = React125.useState(false), openState = _React$useState3[0], setOpenState = _React$useState3[1];
  var handleRef = useForkRef(ref, inputRefProp);
  React125.useImperativeHandle(handleRef, function() {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value
    };
  }, [displayNode, value]);
  React125.useEffect(function() {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  React125.useEffect(function() {
    if (displayNode) {
      var label = ownerDocument(displayNode).getElementById(labelId);
      if (label) {
        var handler = function handler2() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };
        label.addEventListener("click", handler);
        return function() {
          label.removeEventListener("click", handler);
        };
      }
    }
    return void 0;
  }, [labelId, displayNode]);
  var update2 = function update3(open2, event) {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open2);
    }
  };
  var handleMouseDown = function handleMouseDown2(event) {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayNode.focus();
    update2(true, event);
  };
  var handleClose = function handleClose2(event) {
    update2(false, event);
  };
  var childrenArray = React125.Children.toArray(children);
  var handleChange = function handleChange2(event) {
    var index = childrenArray.map(function(child2) {
      return child2.props.value;
    }).indexOf(event.target.value);
    if (index === -1) {
      return;
    }
    var child = childrenArray[index];
    setValue(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  var handleItemClick = function handleItemClick2(child) {
    return function(event) {
      if (!multiple) {
        update2(false, event);
      }
      var newValue;
      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);
        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }
      if (child.props.onClick) {
        child.props.onClick(event);
      }
      if (value === newValue) {
        return;
      }
      setValue(newValue);
      if (onChange) {
        event.persist();
        Object.defineProperty(event, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(event, child);
      }
    };
  };
  var handleKeyDown2 = function handleKeyDown3(event) {
    if (!readOnly) {
      var validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on MacOS, but it's recommended by
        // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update2(true, event);
      }
    }
  };
  var open = displayNode !== null && (isOpenControlled ? openProp : openState);
  var handleBlur = function handleBlur2(event) {
    if (!open && onBlur) {
      event.persist();
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  var display;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;
  var foundMatch = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  var items = childrenArray.map(function(child) {
    if (!React125.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is10.isFragment)(child)) {
        console.error(["Material-UI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    var selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(true ? "Material-UI: The `value` prop must be an array when using the `Select` component with `multiple`." : formatMuiErrorMessage(2));
      }
      selected = value.some(function(v) {
        return areEqualValues(v, child.props.value);
      });
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    if (selected) {
      foundMatch = true;
    }
    return React125.cloneElement(child, {
      "aria-selected": selected ? "true" : void 0,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (true) {
    React125.useEffect(function() {
      if (!foundMatch && !multiple && value !== "") {
        var values = childrenArray.map(function(child) {
          return child.props.value;
        });
        console.warn(["Material-UI: You have provided an out-of-range value `".concat(value, "` for the select ").concat(name ? '(name="'.concat(name, '") ') : "", "component."), "Consider providing a value that matches one of the available options or ''.", "The available values are ".concat(values.filter(function(x) {
          return x != null;
        }).map(function(x) {
          return "`".concat(x, "`");
        }).join(", ") || '""', ".")].join("\n"));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }
  if (computeDisplay) {
    display = multiple ? displayMultiple.join(", ") : displaySingle;
  }
  var menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }
  var tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : void 0);
  return React125.createElement(React125.Fragment, null, React125.createElement("div", _extends({
    className: clsx_m_default(
      classes.root,
      // TODO v5: merge root and select
      classes.select,
      classes.selectMenu,
      classes[variant],
      className,
      disabled && classes.disabled
    ),
    ref: setDisplayNode,
    tabIndex,
    role: "button",
    "aria-disabled": disabled ? "true" : void 0,
    "aria-expanded": open ? "true" : void 0,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
    onKeyDown: handleKeyDown2,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus
  }, SelectDisplayProps, {
    // The id is required for proper a11y
    id: buttonId
  }), isEmpty(display) ? (
    // eslint-disable-next-line react/no-danger
    React125.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "&#8203;"
      }
    })
  ) : display), React125.createElement("input", _extends({
    value: Array.isArray(value) ? value.join(",") : value,
    name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus
  }, other)), React125.createElement(IconComponent, {
    className: clsx_m_default(classes.icon, classes["icon".concat(capitalize(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), React125.createElement(Menu_default, _extends({
    id: "menu-".concat(name || ""),
    anchorEl: displayNode,
    open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: _extends({
      "aria-labelledby": labelId,
      role: "listbox",
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: _extends({}, MenuProps.PaperProps, {
      style: _extends({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  "aria-label": import_prop_types102.default.string,
  /**
   * @ignore
   */
  autoFocus: import_prop_types102.default.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: import_prop_types102.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: import_prop_types102.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types102.default.object.isRequired,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types102.default.string,
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types102.default.any,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: import_prop_types102.default.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: import_prop_types102.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types102.default.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: refType_default,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types102.default.string,
  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: import_prop_types102.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: import_prop_types102.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types102.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types102.default.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: import_prop_types102.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types102.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types102.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types102.default.func,
  /**
   * Control `select` open state.
   */
  open: import_prop_types102.default.bool,
  /**
   * @ignore
   */
  readOnly: import_prop_types102.default.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types102.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types102.default.object,
  /**
   * @ignore
   */
  tabIndex: import_prop_types102.default.oneOfType([import_prop_types102.default.number, import_prop_types102.default.string]),
  /**
   * @ignore
   */
  type: import_prop_types102.default.any,
  /**
   * The input value.
   */
  value: import_prop_types102.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types102.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var SelectInput_default = SelectInput;

// node_modules/@material-ui/core/esm/Select/Select.js
var styles143 = styles133;
var _ref = React126.createElement(Input_default, null);
var _ref2 = React126.createElement(FilledInput_default, null);
var Select = React126.forwardRef(function Select2(props, ref) {
  var _props$autoWidth = props.autoWidth, autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth, children = props.children, classes = props.classes, _props$displayEmpty = props.displayEmpty, displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty, _props$IconComponent = props.IconComponent, IconComponent = _props$IconComponent === void 0 ? ArrowDropDown_default : _props$IconComponent, id = props.id, input = props.input, inputProps = props.inputProps, label = props.label, labelId = props.labelId, _props$labelWidth = props.labelWidth, labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth, MenuProps = props.MenuProps, _props$multiple = props.multiple, multiple = _props$multiple === void 0 ? false : _props$multiple, _props$native = props.native, native = _props$native === void 0 ? false : _props$native, onClose = props.onClose, onOpen = props.onOpen, open = props.open, renderValue = props.renderValue, SelectDisplayProps = props.SelectDisplayProps, _props$variant = props.variant, variantProps = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);
  var inputComponent = native ? NativeSelectInput_default : SelectInput_default;
  var muiFormControl = useFormControl2();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: React126.createElement(OutlinedInput_default, {
      label,
      labelWidth
    }),
    filled: _ref2
  }[variant];
  return React126.cloneElement(InputComponent, _extends({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent,
    inputProps: _extends({
      children,
      IconComponent,
      variant,
      type: void 0,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple
    }, native ? {
      id
    } : {
      autoWidth,
      displayEmpty,
      labelId,
      MenuProps,
      onClose,
      onOpen,
      open,
      renderValue,
      SelectDisplayProps: _extends({
        id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? mergeClasses({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select2
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref
  }, other));
});
true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: import_prop_types103.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: import_prop_types103.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types103.default.object,
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types103.default.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   */
  displayEmpty: import_prop_types103.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types103.default.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: import_prop_types103.default.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: import_prop_types103.default.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: import_prop_types103.default.object,
  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: import_prop_types103.default.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types103.default.string,
  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  labelWidth: import_prop_types103.default.number,
  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: import_prop_types103.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: import_prop_types103.default.bool,
  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: import_prop_types103.default.bool,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: import_prop_types103.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types103.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types103.default.func,
  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: import_prop_types103.default.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types103.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types103.default.object,
  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: import_prop_types103.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types103.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
Select.muiName = "Select";
var Select_default = withStyles_default(styles143, {
  name: "MuiSelect"
})(Select);

// node_modules/@material-ui/core/esm/Slider/Slider.js
init_extends();
var React128 = __toESM(require_react());
var import_prop_types104 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Slider/ValueLabel.js
init_extends();
var React127 = __toESM(require_react());
init_clsx_m();
var styles144 = function styles145(theme) {
  return {
    thumb: {
      "&$open": {
        "& $offset": {
          transform: "scale(1) translateY(-10px)"
        }
      }
    },
    open: {},
    offset: _extends({
      zIndex: 1
    }, theme.typography.body2, {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.2,
      transition: theme.transitions.create(["transform"], {
        duration: theme.transitions.duration.shortest
      }),
      top: -34,
      transformOrigin: "bottom center",
      transform: "scale(0)",
      position: "absolute"
    }),
    circle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "currentColor",
      transform: "rotate(-45deg)"
    },
    label: {
      color: theme.palette.primary.contrastText,
      transform: "rotate(45deg)"
    }
  };
};
function ValueLabel(props) {
  var children = props.children, classes = props.classes, className = props.className, open = props.open, value = props.value, valueLabelDisplay = props.valueLabelDisplay;
  if (valueLabelDisplay === "off") {
    return children;
  }
  return React127.cloneElement(children, {
    className: clsx_m_default(children.props.className, (open || valueLabelDisplay === "on") && classes.open, classes.thumb)
  }, React127.createElement("span", {
    className: clsx_m_default(classes.offset, className)
  }, React127.createElement("span", {
    className: classes.circle
  }, React127.createElement("span", {
    className: classes.label
  }, value))));
}
var ValueLabel_default = withStyles_default(styles144, {
  name: "PrivateValueLabel"
})(ValueLabel);

// node_modules/@material-ui/core/esm/Slider/Slider.js
function asc(a, b) {
  return a - b;
}
function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}
function findClosest(values, currentValue) {
  var _values$reduce = values.reduce(function(acc, value, index) {
    var distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null), closestIndex = _values$reduce.index;
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split("e-");
    var matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  var decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  var nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex(_ref6) {
  var values = _ref6.values, source = _ref6.source, newValue = _ref6.newValue, index = _ref6.index;
  if (values[index] === newValue) {
    return source;
  }
  var output = values.slice();
  output[index] = newValue;
  return output;
}
function focusThumb(_ref24) {
  var sliderRef = _ref24.sliderRef, activeIndex = _ref24.activeIndex, setActive = _ref24.setActive;
  if (!sliderRef.current.contains(document.activeElement) || Number(document.activeElement.getAttribute("data-index")) !== activeIndex) {
    sliderRef.current.querySelector('[role="slider"][data-index="'.concat(activeIndex, '"]')).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
var axisProps = {
  horizontal: {
    offset: function offset2(percent) {
      return {
        left: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  "horizontal-reverse": {
    offset: function offset3(percent) {
      return {
        right: "".concat(percent, "%")
      };
    },
    leap: function leap2(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  vertical: {
    offset: function offset4(percent) {
      return {
        bottom: "".concat(percent, "%")
      };
    },
    leap: function leap3(percent) {
      return {
        height: "".concat(percent, "%")
      };
    }
  }
};
var Identity = function Identity2(x) {
  return x;
};
var styles146 = function styles147(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 2,
      width: "100%",
      boxSizing: "content-box",
      padding: "13px 0",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      touchAction: "none",
      color: theme.palette.primary.main,
      WebkitTapHighlightColor: "transparent",
      "&$disabled": {
        pointerEvents: "none",
        cursor: "default",
        color: theme.palette.grey[400]
      },
      "&$vertical": {
        width: 2,
        height: "100%",
        padding: "0 13px"
      },
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      "@media (pointer: coarse)": {
        // Reach 42px touch target, about ~8mm on screen.
        padding: "20px 0",
        "&$vertical": {
          padding: "0 20px"
        }
      },
      "@media print": {
        colorAdjust: "exact"
      }
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      // TODO v5: move the style here
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    /* Styles applied to the root element if `marks` is provided with at least one label. */
    marked: {
      marginBottom: 20,
      "&$vertical": {
        marginBottom: "auto",
        marginRight: 20
      }
    },
    /* Pseudo-class applied to the root element if `orientation="vertical"`. */
    vertical: {},
    /* Pseudo-class applied to the root and thumb element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the rail element. */
    rail: {
      display: "block",
      position: "absolute",
      width: "100%",
      height: 2,
      borderRadius: 1,
      backgroundColor: "currentColor",
      opacity: 0.38,
      "$vertical &": {
        height: "100%",
        width: 2
      }
    },
    /* Styles applied to the track element. */
    track: {
      display: "block",
      position: "absolute",
      height: 2,
      borderRadius: 1,
      backgroundColor: "currentColor",
      "$vertical &": {
        width: 2
      }
    },
    /* Styles applied to the track element if `track={false}`. */
    trackFalse: {
      "& $track": {
        display: "none"
      }
    },
    /* Styles applied to the track element if `track="inverted"`. */
    trackInverted: {
      "& $track": {
        backgroundColor: (
          // Same logic as the LinearProgress track color
          theme.palette.type === "light" ? lighten(theme.palette.primary.main, 0.62) : darken(theme.palette.primary.main, 0.5)
        )
      },
      "& $rail": {
        opacity: 1
      }
    },
    /* Styles applied to the thumb element. */
    thumb: {
      position: "absolute",
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -5,
      boxSizing: "border-box",
      borderRadius: "50%",
      outline: 0,
      backgroundColor: "currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: theme.transitions.create(["box-shadow"], {
        duration: theme.transitions.duration.shortest
      }),
      "&::after": {
        position: "absolute",
        content: '""',
        borderRadius: "50%",
        // reach 42px hit target (2 * 15 + thumb diameter)
        left: -15,
        top: -15,
        right: -15,
        bottom: -15
      },
      "&$focusVisible,&:hover": {
        boxShadow: "0px 0px 0px 8px ".concat(alpha(theme.palette.primary.main, 0.16)),
        "@media (hover: none)": {
          boxShadow: "none"
        }
      },
      "&$active": {
        boxShadow: "0px 0px 0px 14px ".concat(alpha(theme.palette.primary.main, 0.16))
      },
      "&$disabled": {
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -3,
        "&:hover": {
          boxShadow: "none"
        }
      },
      "$vertical &": {
        marginLeft: -5,
        marginBottom: -6
      },
      "$vertical &$disabled": {
        marginLeft: -3,
        marginBottom: -4
      }
    },
    /* Styles applied to the thumb element if `color="primary"`. */
    thumbColorPrimary: {
      // TODO v5: move the style here
    },
    /* Styles applied to the thumb element if `color="secondary"`. */
    thumbColorSecondary: {
      "&$focusVisible,&:hover": {
        boxShadow: "0px 0px 0px 8px ".concat(alpha(theme.palette.secondary.main, 0.16))
      },
      "&$active": {
        boxShadow: "0px 0px 0px 14px ".concat(alpha(theme.palette.secondary.main, 0.16))
      }
    },
    /* Pseudo-class applied to the thumb element if it's active. */
    active: {},
    /* Pseudo-class applied to the thumb element if keyboard focused. */
    focusVisible: {},
    /* Styles applied to the thumb label element. */
    valueLabel: {
      // IE 11 centering bug, to remove from the customization demos once no longer supported
      left: "calc(-50% - 4px)"
    },
    /* Styles applied to the mark element. */
    mark: {
      position: "absolute",
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: "currentColor"
    },
    /* Styles applied to the mark element if active (depending on the value). */
    markActive: {
      backgroundColor: theme.palette.background.paper,
      opacity: 0.8
    },
    /* Styles applied to the mark label element. */
    markLabel: _extends({}, theme.typography.body2, {
      color: theme.palette.text.secondary,
      position: "absolute",
      top: 26,
      transform: "translateX(-50%)",
      whiteSpace: "nowrap",
      "$vertical &": {
        top: "auto",
        left: 26,
        transform: "translateY(50%)"
      },
      "@media (pointer: coarse)": {
        top: 40,
        "$vertical &": {
          left: 31
        }
      }
    }),
    /* Styles applied to the mark label element if active (depending on the value). */
    markLabelActive: {
      color: theme.palette.text.primary
    }
  };
};
var Slider = React128.forwardRef(function Slider2(props, ref) {
  var ariaLabel = props["aria-label"], ariaLabelledby = props["aria-labelledby"], ariaValuetext = props["aria-valuetext"], classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$component = props.component, Component6 = _props$component === void 0 ? "span" : _props$component, defaultValue = props.defaultValue, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, getAriaLabel = props.getAriaLabel, getAriaValueText = props.getAriaValueText, _props$marks = props.marks, marksProp = _props$marks === void 0 ? false : _props$marks, _props$max = props.max, max = _props$max === void 0 ? 100 : _props$max, _props$min = props.min, min = _props$min === void 0 ? 0 : _props$min, name = props.name, onChange = props.onChange, onChangeCommitted = props.onChangeCommitted, onMouseDown = props.onMouseDown, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, _props$scale = props.scale, scale = _props$scale === void 0 ? Identity : _props$scale, _props$step = props.step, step = _props$step === void 0 ? 1 : _props$step, _props$ThumbComponent = props.ThumbComponent, ThumbComponent = _props$ThumbComponent === void 0 ? "span" : _props$ThumbComponent, _props$track = props.track, track = _props$track === void 0 ? "normal" : _props$track, valueProp = props.value, _props$ValueLabelComp = props.ValueLabelComponent, ValueLabelComponent = _props$ValueLabelComp === void 0 ? ValueLabel_default : _props$ValueLabelComp, _props$valueLabelDisp = props.valueLabelDisplay, valueLabelDisplay = _props$valueLabelDisp === void 0 ? "off" : _props$valueLabelDisp, _props$valueLabelForm = props.valueLabelFormat, valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm, other = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "aria-valuetext", "classes", "className", "color", "component", "defaultValue", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "ThumbComponent", "track", "value", "ValueLabelComponent", "valueLabelDisplay", "valueLabelFormat"]);
  var theme = useTheme2();
  var touchId = React128.useRef();
  var _React$useState = React128.useState(-1), active = _React$useState[0], setActive = _React$useState[1];
  var _React$useState2 = React128.useState(-1), open = _React$useState2[0], setOpen = _React$useState2[1];
  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Slider"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), valueDerived = _useControlled2[0], setValueState = _useControlled2[1];
  var range = Array.isArray(valueDerived);
  var values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(function(value) {
    return clamp(value, min, max);
  });
  var marks = marksProp === true && step !== null ? _toConsumableArray(Array(Math.floor((max - min) / step) + 1)).map(function(_, index) {
    return {
      value: min + step * index
    };
  }) : marksProp || [];
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState3 = React128.useState(-1), focusVisible = _React$useState3[0], setFocusVisible = _React$useState3[1];
  var sliderRef = React128.useRef();
  var handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  var handleRef = useForkRef(ref, handleFocusRef);
  var handleFocus = useEventCallback(function(event) {
    var index = Number(event.currentTarget.getAttribute("data-index"));
    if (isFocusVisible2(event)) {
      setFocusVisible(index);
    }
    setOpen(index);
  });
  var handleBlur = useEventCallback(function() {
    if (focusVisible !== -1) {
      setFocusVisible(-1);
      onBlurVisible();
    }
    setOpen(-1);
  });
  var handleMouseOver = useEventCallback(function(event) {
    var index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  });
  var handleMouseLeave = useEventCallback(function() {
    setOpen(-1);
  });
  var isRtl = theme.direction === "rtl";
  var handleKeyDown2 = useEventCallback(function(event) {
    var index = Number(event.currentTarget.getAttribute("data-index"));
    var value = values[index];
    var tenPercents = (max - min) / 10;
    var marksValues = marks.map(function(mark) {
      return mark.value;
    });
    var marksIndex = marksValues.indexOf(value);
    var newValue;
    var increaseKey = isRtl ? "ArrowLeft" : "ArrowRight";
    var decreaseKey = isRtl ? "ArrowRight" : "ArrowLeft";
    switch (event.key) {
      case "Home":
        newValue = min;
        break;
      case "End":
        newValue = max;
        break;
      case "PageUp":
        if (step) {
          newValue = value + tenPercents;
        }
        break;
      case "PageDown":
        if (step) {
          newValue = value - tenPercents;
        }
        break;
      case increaseKey:
      case "ArrowUp":
        if (step) {
          newValue = value + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }
        break;
      case decreaseKey:
      case "ArrowDown":
        if (step) {
          newValue = value - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }
        break;
      default:
        return;
    }
    event.preventDefault();
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    }
    newValue = clamp(newValue, min, max);
    if (range) {
      var previousValue = newValue;
      newValue = setValueIndex({
        values,
        source: valueDerived,
        newValue,
        index
      }).sort(asc);
      focusThumb({
        sliderRef,
        activeIndex: newValue.indexOf(previousValue)
      });
    }
    setValueState(newValue);
    setFocusVisible(index);
    if (onChange) {
      onChange(event, newValue);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });
  var previousIndex = React128.useRef();
  var axis = orientation;
  if (isRtl && orientation !== "vertical") {
    axis += "-reverse";
  }
  var getFingerNewValue = function getFingerNewValue2(_ref33) {
    var finger = _ref33.finger, _ref3$move = _ref33.move, move = _ref3$move === void 0 ? false : _ref3$move, values2 = _ref33.values, source = _ref33.source;
    var slider = sliderRef.current;
    var _slider$getBoundingCl = slider.getBoundingClientRect(), width = _slider$getBoundingCl.width, height = _slider$getBoundingCl.height, bottom = _slider$getBoundingCl.bottom, left = _slider$getBoundingCl.left;
    var percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    var newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      var marksValues = marks.map(function(mark) {
        return mark.value;
      });
      var closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    var activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      var previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source,
        newValue,
        index: activeIndex
      }).sort(asc);
      activeIndex = newValue.indexOf(previousValue);
      previousIndex.current = activeIndex;
    }
    return {
      newValue,
      activeIndex
    };
  };
  var handleTouchMove = useEventCallback(function(event) {
    var finger = trackFinger(event, touchId);
    if (!finger) {
      return;
    }
    var _getFingerNewValue = getFingerNewValue({
      finger,
      move: true,
      values,
      source: valueDerived
    }), newValue = _getFingerNewValue.newValue, activeIndex = _getFingerNewValue.activeIndex;
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  });
  var handleTouchEnd = useEventCallback(function(event) {
    var finger = trackFinger(event, touchId);
    if (!finger) {
      return;
    }
    var _getFingerNewValue2 = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    }), newValue = _getFingerNewValue2.newValue;
    setActive(-1);
    if (event.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
    touchId.current = void 0;
    var doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  });
  var handleTouchStart = useEventCallback(function(event) {
    event.preventDefault();
    var touch = event.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    var finger = trackFinger(event, touchId);
    var _getFingerNewValue3 = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    }), newValue = _getFingerNewValue3.newValue, activeIndex = _getFingerNewValue3.activeIndex;
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
    var doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  React128.useEffect(function() {
    var slider = sliderRef.current;
    slider.addEventListener("touchstart", handleTouchStart);
    var doc = ownerDocument(slider);
    return function() {
      slider.removeEventListener("touchstart", handleTouchStart);
      doc.removeEventListener("mousemove", handleTouchMove);
      doc.removeEventListener("mouseup", handleTouchEnd);
      doc.removeEventListener("touchmove", handleTouchMove);
      doc.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchEnd, handleTouchMove, handleTouchStart]);
  var handleMouseDown = useEventCallback(function(event) {
    if (onMouseDown) {
      onMouseDown(event);
    }
    event.preventDefault();
    var finger = trackFinger(event, touchId);
    var _getFingerNewValue4 = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    }), newValue = _getFingerNewValue4.newValue, activeIndex = _getFingerNewValue4.activeIndex;
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
    var doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove);
    doc.addEventListener("mouseup", handleTouchEnd);
  });
  var trackOffset = valueToPercent(range ? values[0] : min, min, max);
  var trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  var trackStyle = _extends({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));
  return React128.createElement(Component6, _extends({
    ref: handleRef,
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(color))], className, disabled && classes.disabled, marks.length > 0 && marks.some(function(mark) {
      return mark.label;
    }) && classes.marked, track === false && classes.trackFalse, orientation === "vertical" && classes.vertical, track === "inverted" && classes.trackInverted),
    onMouseDown: handleMouseDown
  }, other), React128.createElement("span", {
    className: classes.rail
  }), React128.createElement("span", {
    className: classes.track,
    style: trackStyle
  }), React128.createElement("input", {
    value: values.join(","),
    name,
    type: "hidden"
  }), marks.map(function(mark, index) {
    var percent = valueToPercent(mark.value, min, max);
    var style = axisProps[axis].offset(percent);
    var markActive;
    if (track === false) {
      markActive = values.indexOf(mark.value) !== -1;
    } else {
      markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
    }
    return React128.createElement(React128.Fragment, {
      key: mark.value
    }, React128.createElement("span", {
      style,
      "data-index": index,
      className: clsx_m_default(classes.mark, markActive && classes.markActive)
    }), mark.label != null ? React128.createElement("span", {
      "aria-hidden": true,
      "data-index": index,
      style,
      className: clsx_m_default(classes.markLabel, markActive && classes.markLabelActive)
    }, mark.label) : null);
  }), values.map(function(value, index) {
    var percent = valueToPercent(value, min, max);
    var style = axisProps[axis].offset(percent);
    return React128.createElement(ValueLabelComponent, {
      key: index,
      valueLabelFormat,
      valueLabelDisplay,
      className: classes.valueLabel,
      value: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat,
      index,
      open: open === index || active === index || valueLabelDisplay === "on",
      disabled
    }, React128.createElement(ThumbComponent, {
      className: clsx_m_default(classes.thumb, classes["thumbColor".concat(capitalize(color))], active === index && classes.active, disabled && classes.disabled, focusVisible === index && classes.focusVisible),
      tabIndex: disabled ? null : 0,
      role: "slider",
      style,
      "data-index": index,
      "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max),
      "aria-valuemin": scale(min),
      "aria-valuenow": scale(value),
      "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
      onKeyDown: handleKeyDown2,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave
    }));
  }));
});
true ? Slider.propTypes = {
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes(import_prop_types104.default.string, function(props) {
    var range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("Material-UI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types104.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes(import_prop_types104.default.string, function(props) {
    var range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("Material-UI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types104.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types104.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types104.default.oneOf(["primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types104.default.elementType,
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types104.default.oneOfType([import_prop_types104.default.number, import_prop_types104.default.arrayOf(import_prop_types104.default.number)]),
  /**
   * If `true`, the slider will be disabled.
   */
  disabled: import_prop_types104.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   *
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types104.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   *
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types104.default.func,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks will be spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   */
  marks: import_prop_types104.default.oneOfType([import_prop_types104.default.bool, import_prop_types104.default.array]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: import_prop_types104.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: import_prop_types104.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types104.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number | number[]} value The new value.
   */
  onChange: import_prop_types104.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {object} event The event source of the callback.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types104.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types104.default.func,
  /**
   * The slider orientation.
   */
  orientation: import_prop_types104.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   */
  scale: import_prop_types104.default.func,
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   */
  step: import_prop_types104.default.number,
  /**
   * The component used to display the value label.
   */
  ThumbComponent: import_prop_types104.default.elementType,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   */
  track: import_prop_types104.default.oneOf(["normal", false, "inverted"]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types104.default.oneOfType([import_prop_types104.default.number, import_prop_types104.default.arrayOf(import_prop_types104.default.number)]),
  /**
   * The value label component.
   */
  ValueLabelComponent: import_prop_types104.default.elementType,
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   */
  valueLabelDisplay: import_prop_types104.default.oneOf(["on", "auto", "off"]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   */
  valueLabelFormat: import_prop_types104.default.oneOfType([import_prop_types104.default.string, import_prop_types104.default.func])
} : void 0;
var Slider_default = withStyles_default(styles146, {
  name: "MuiSlider"
})(Slider);

// node_modules/@material-ui/core/esm/Snackbar/Snackbar.js
init_extends();
var React130 = __toESM(require_react());
var import_prop_types106 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js
init_extends();
var React129 = __toESM(require_react());
var import_prop_types105 = __toESM(require_prop_types());
init_clsx_m();
var styles148 = function styles149(theme) {
  var emphasis = theme.palette.type === "light" ? 0.8 : 0.98;
  var backgroundColor = emphasize(theme.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body2, _defineProperty({
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "6px 16px",
      borderRadius: theme.shape.borderRadius,
      flexGrow: 1
    }, theme.breakpoints.up("sm"), {
      flexGrow: "initial",
      minWidth: 288
    })),
    /* Styles applied to the message wrapper element. */
    message: {
      padding: "8px 0"
    },
    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var SnackbarContent = React129.forwardRef(function SnackbarContent2(props, ref) {
  var action = props.action, classes = props.classes, className = props.className, message = props.message, _props$role = props.role, role = _props$role === void 0 ? "alert" : _props$role, other = _objectWithoutProperties(props, ["action", "classes", "className", "message", "role"]);
  return React129.createElement(Paper_default, _extends({
    role,
    square: true,
    elevation: 6,
    className: clsx_m_default(classes.root, className),
    ref
  }, other), React129.createElement("div", {
    className: classes.message
  }, message), action ? React129.createElement("div", {
    className: classes.action
  }, action) : null);
});
true ? SnackbarContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: import_prop_types105.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types105.default.object,
  /**
   * @ignore
   */
  className: import_prop_types105.default.string,
  /**
   * The message to display.
   */
  message: import_prop_types105.default.node,
  /**
   * The ARIA role attribute of the element.
   */
  role: import_prop_types105.default.string
} : void 0;
var SnackbarContent_default = withStyles_default(styles148, {
  name: "MuiSnackbarContent"
})(SnackbarContent);

// node_modules/@material-ui/core/esm/Snackbar/Snackbar.js
var styles150 = function styles151(theme) {
  var top1 = {
    top: 8
  };
  var bottom1 = {
    bottom: 8
  };
  var right = {
    justifyContent: "flex-end"
  };
  var left = {
    justifyContent: "flex-start"
  };
  var top3 = {
    top: 24
  };
  var bottom3 = {
    bottom: 24
  };
  var right3 = {
    right: 24
  };
  var left3 = {
    left: 24
  };
  var center = {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  };
  return {
    /* Styles applied to the root element. */
    root: {
      zIndex: theme.zIndex.snackbar,
      position: "fixed",
      display: "flex",
      left: 8,
      right: 8,
      justifyContent: "center",
      alignItems: "center"
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
    anchorOriginTopCenter: _extends({}, top1, _defineProperty({}, theme.breakpoints.up("sm"), _extends({}, top3, center))),
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
    anchorOriginBottomCenter: _extends({}, bottom1, _defineProperty({}, theme.breakpoints.up("sm"), _extends({}, bottom3, center))),
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
    anchorOriginTopRight: _extends({}, top1, right, _defineProperty({}, theme.breakpoints.up("sm"), _extends({
      left: "auto"
    }, top3, right3))),
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
    anchorOriginBottomRight: _extends({}, bottom1, right, _defineProperty({}, theme.breakpoints.up("sm"), _extends({
      left: "auto"
    }, bottom3, right3))),
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
    anchorOriginTopLeft: _extends({}, top1, left, _defineProperty({}, theme.breakpoints.up("sm"), _extends({
      right: "auto"
    }, top3, left3))),
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
    anchorOriginBottomLeft: _extends({}, bottom1, left, _defineProperty({}, theme.breakpoints.up("sm"), _extends({
      right: "auto"
    }, bottom3, left3)))
  };
};
var Snackbar = React130.forwardRef(function Snackbar2(props, ref) {
  var action = props.action, _props$anchorOrigin = props.anchorOrigin;
  _props$anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: "bottom",
    horizontal: "center"
  } : _props$anchorOrigin;
  var vertical = _props$anchorOrigin.vertical, horizontal = _props$anchorOrigin.horizontal, _props$autoHideDurati = props.autoHideDuration, autoHideDuration = _props$autoHideDurati === void 0 ? null : _props$autoHideDurati, children = props.children, classes = props.classes, className = props.className, ClickAwayListenerProps = props.ClickAwayListenerProps, ContentProps = props.ContentProps, _props$disableWindowB = props.disableWindowBlurListener, disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB, message = props.message, onClose = props.onClose, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, open = props.open, resumeHideDuration = props.resumeHideDuration, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow_default : _props$TransitionComp, _props$transitionDura = props.transitionDuration, transitionDuration = _props$transitionDura === void 0 ? {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  } : _props$transitionDura, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["action", "anchorOrigin", "autoHideDuration", "children", "classes", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  var timerAutoHide = React130.useRef();
  var _React$useState = React130.useState(true), exited = _React$useState[0], setExited = _React$useState[1];
  var handleClose = useEventCallback(function() {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = useEventCallback(function(autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function() {
      handleClose(null, "timeout");
    }, autoHideDurationParam);
  });
  React130.useEffect(function() {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return function() {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  var handlePause = function handlePause2() {
    clearTimeout(timerAutoHide.current);
  };
  var handleResume = React130.useCallback(function() {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  var handleMouseEnter = function handleMouseEnter2(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }
    handlePause();
  };
  var handleMouseLeave = function handleMouseLeave2(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }
    handleResume();
  };
  var handleClickAway = function handleClickAway2(event) {
    if (onClose) {
      onClose(event, "clickaway");
    }
  };
  var handleExited = function handleExited2() {
    setExited(true);
  };
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  React130.useEffect(function() {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return function() {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, handleResume, open]);
  if (!open && exited) {
    return null;
  }
  return React130.createElement(ClickAwayListener_default, _extends({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), React130.createElement("div", _extends({
    className: clsx_m_default(classes.root, classes["anchorOrigin".concat(capitalize(vertical)).concat(capitalize(horizontal))], className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref
  }, other), React130.createElement(TransitionComponent, _extends({
    appear: true,
    in: open,
    onEnter: createChainedFunction(handleEnter, onEnter),
    onEntered,
    onEntering,
    onExit,
    onExited: createChainedFunction(handleExited, onExited),
    onExiting,
    timeout: transitionDuration,
    direction: vertical === "top" ? "down" : "up"
  }, TransitionProps), children || React130.createElement(SnackbarContent_default, _extends({
    message,
    action
  }, ContentProps)))));
});
true ? Snackbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: import_prop_types106.default.node,
  /**
   * The anchor of the `Snackbar`.
   */
  anchorOrigin: import_prop_types106.default.shape({
    horizontal: import_prop_types106.default.oneOf(["center", "left", "right"]).isRequired,
    vertical: import_prop_types106.default.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   */
  autoHideDuration: import_prop_types106.default.number,
  /**
   * Replace the `SnackbarContent` component.
   */
  children: import_prop_types106.default.element,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types106.default.object,
  /**
   * @ignore
   */
  className: import_prop_types106.default.string,
  /**
   * Props applied to the `ClickAwayListener` element.
   */
  ClickAwayListenerProps: import_prop_types106.default.object,
  /**
   * Props applied to the [`SnackbarContent`](/api/snackbar-content/) element.
   */
  ContentProps: import_prop_types106.default.object,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: import_prop_types106.default.bool,
  /**
   * When displaying multiple consecutive Snackbars from a parent rendering a single
   * <Snackbar/>, add the key prop to ensure independent treatment of each message.
   * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and
   * features such as autoHideDuration may be canceled.
   */
  key: import_prop_types106.default.any,
  /**
   * The message to display.
   */
  message: import_prop_types106.default.node,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`.
   */
  onClose: import_prop_types106.default.func,
  /**
   * Callback fired before the transition is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: deprecatedPropType(import_prop_types106.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the transition has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: deprecatedPropType(import_prop_types106.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the transition is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: deprecatedPropType(import_prop_types106.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired before the transition is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: deprecatedPropType(import_prop_types106.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the transition has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: deprecatedPropType(import_prop_types106.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the transition is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: deprecatedPropType(import_prop_types106.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * @ignore
   */
  onMouseEnter: import_prop_types106.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types106.default.func,
  /**
   * If `true`, `Snackbar` is open.
   */
  open: import_prop_types106.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: import_prop_types106.default.number,
  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: import_prop_types106.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: import_prop_types106.default.oneOfType([import_prop_types106.default.number, import_prop_types106.default.shape({
    appear: import_prop_types106.default.number,
    enter: import_prop_types106.default.number,
    exit: import_prop_types106.default.number
  })]),
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: import_prop_types106.default.object
} : void 0;
var Snackbar_default = withStyles_default(styles150, {
  flip: false,
  name: "MuiSnackbar"
})(Snackbar);

// node_modules/@material-ui/core/esm/Step/Step.js
init_extends();
var React131 = __toESM(require_react());
var import_react_is11 = __toESM(require_react_is());
var import_prop_types107 = __toESM(require_prop_types());
init_clsx_m();
var styles152 = {
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: "relative"
  },
  /* Pseudo-class applied to the root element if `completed={true}`. */
  completed: {}
};
var Step = React131.forwardRef(function Step2(props, ref) {
  var _props$active = props.active, active = _props$active === void 0 ? false : _props$active, alternativeLabel = props.alternativeLabel, children = props.children, classes = props.classes, className = props.className, _props$completed = props.completed, completed = _props$completed === void 0 ? false : _props$completed, connectorProp = props.connector, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$expanded = props.expanded, expanded = _props$expanded === void 0 ? false : _props$expanded, index = props.index, last = props.last, orientation = props.orientation, other = _objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "connector", "disabled", "expanded", "index", "last", "orientation"]);
  var connector = connectorProp ? React131.cloneElement(connectorProp, {
    orientation,
    alternativeLabel,
    index,
    active,
    completed,
    disabled
  }) : null;
  var newChildren = React131.createElement("div", _extends({
    className: clsx_m_default(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, completed && classes.completed),
    ref
  }, other), connector && alternativeLabel && index !== 0 ? connector : null, React131.Children.map(children, function(child) {
    if (!React131.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is11.isFragment)(child)) {
        console.error(["Material-UI: The Step component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    return React131.cloneElement(child, _extends({
      active,
      alternativeLabel,
      completed,
      disabled,
      expanded,
      last,
      icon: index + 1,
      orientation
    }, child.props));
  }));
  if (connector && !alternativeLabel && index !== 0) {
    return React131.createElement(React131.Fragment, null, connector, newChildren);
  }
  return newChildren;
});
true ? Step.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: import_prop_types107.default.bool,
  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
   */
  children: import_prop_types107.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types107.default.object,
  /**
   * @ignore
   */
  className: import_prop_types107.default.string,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: import_prop_types107.default.bool,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: import_prop_types107.default.bool,
  /**
   * Expand the step.
   */
  expanded: import_prop_types107.default.bool
} : void 0;
var Step_default = withStyles_default(styles152, {
  name: "MuiStep"
})(Step);

// node_modules/@material-ui/core/esm/StepButton/StepButton.js
init_extends();
var React136 = __toESM(require_react());
var import_prop_types110 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/StepLabel/StepLabel.js
init_extends();
var React135 = __toESM(require_react());
var import_prop_types109 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/StepIcon/StepIcon.js
var React134 = __toESM(require_react());
var import_prop_types108 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/internal/svg-icons/CheckCircle.js
var React132 = __toESM(require_react());
var CheckCircle_default = createSvgIcon(React132.createElement("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}), "CheckCircle");

// node_modules/@material-ui/core/esm/internal/svg-icons/Warning.js
var React133 = __toESM(require_react());
var Warning_default = createSvgIcon(React133.createElement("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), "Warning");

// node_modules/@material-ui/core/esm/StepIcon/StepIcon.js
var styles153 = function styles154(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "block",
      color: theme.palette.text.disabled,
      "&$completed": {
        color: theme.palette.primary.main
      },
      "&$active": {
        color: theme.palette.primary.main
      },
      "&$error": {
        color: theme.palette.error.main
      }
    },
    /* Styles applied to the SVG text element. */
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    },
    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {}
  };
};
var _ref3 = React134.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "12"
});
var StepIcon = React134.forwardRef(function StepIcon2(props, ref) {
  var _props$completed = props.completed, completed = _props$completed === void 0 ? false : _props$completed, icon = props.icon, _props$active = props.active, active = _props$active === void 0 ? false : _props$active, _props$error = props.error, error = _props$error === void 0 ? false : _props$error, classes = props.classes;
  if (typeof icon === "number" || typeof icon === "string") {
    var className = clsx_m_default(classes.root, active && classes.active, error && classes.error, completed && classes.completed);
    if (error) {
      return React134.createElement(Warning_default, {
        className,
        ref
      });
    }
    if (completed) {
      return React134.createElement(CheckCircle_default, {
        className,
        ref
      });
    }
    return React134.createElement(SvgIcon_default, {
      className,
      ref
    }, _ref3, React134.createElement("text", {
      className: classes.text,
      x: "12",
      y: "16",
      textAnchor: "middle"
    }, icon));
  }
  return icon;
});
true ? StepIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Whether this step is active.
   */
  active: import_prop_types108.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types108.default.object,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: import_prop_types108.default.bool,
  /**
   * Mark the step as failed.
   */
  error: import_prop_types108.default.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: import_prop_types108.default.node
} : void 0;
var StepIcon_default = withStyles_default(styles153, {
  name: "MuiStepIcon"
})(StepIcon);

// node_modules/@material-ui/core/esm/StepLabel/StepLabel.js
var styles155 = function styles156(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      alignItems: "center",
      "&$alternativeLabel": {
        flexDirection: "column"
      },
      "&$disabled": {
        cursor: "default"
      }
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {},
    /* Styles applied to the `Typography` component which wraps `children`. */
    label: {
      color: theme.palette.text.secondary,
      "&$active": {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      "&$completed": {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      "&$alternativeLabel": {
        textAlign: "center",
        marginTop: 16
      },
      "&$error": {
        color: theme.palette.error.main
      }
    },
    /* Pseudo-class applied to the `Typography` component if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the `Typography` component if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element and `Typography` component if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element and `Typography` component if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the `icon` container element. */
    iconContainer: {
      flexShrink: 0,
      // Fix IE 11 issue
      display: "flex",
      paddingRight: 8,
      "&$alternativeLabel": {
        paddingRight: 0
      }
    },
    /* Pseudo-class applied to the root and icon container and `Typography` if `alternativeLabel={true}`. */
    alternativeLabel: {},
    /* Styles applied to the container element which wraps `Typography` and `optional`. */
    labelContainer: {
      width: "100%"
    }
  };
};
var StepLabel = React135.forwardRef(function StepLabel2(props, ref) {
  var _props$active = props.active, active = _props$active === void 0 ? false : _props$active, _props$alternativeLab = props.alternativeLabel, alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab, children = props.children, classes = props.classes, className = props.className, _props$completed = props.completed, completed = _props$completed === void 0 ? false : _props$completed, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$error = props.error, error = _props$error === void 0 ? false : _props$error, expanded = props.expanded, icon = props.icon, last = props.last, optional = props.optional, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, StepIconComponentProp = props.StepIconComponent, StepIconProps = props.StepIconProps, other = _objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "error", "expanded", "icon", "last", "optional", "orientation", "StepIconComponent", "StepIconProps"]);
  var StepIconComponent = StepIconComponentProp;
  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon_default;
  }
  return React135.createElement("span", _extends({
    className: clsx_m_default(classes.root, classes[orientation], className, disabled && classes.disabled, alternativeLabel && classes.alternativeLabel, error && classes.error),
    ref
  }, other), icon || StepIconComponent ? React135.createElement("span", {
    className: clsx_m_default(classes.iconContainer, alternativeLabel && classes.alternativeLabel)
  }, React135.createElement(StepIconComponent, _extends({
    completed,
    active,
    error,
    icon
  }, StepIconProps))) : null, React135.createElement("span", {
    className: classes.labelContainer
  }, children ? React135.createElement(Typography_default, {
    variant: "body2",
    component: "span",
    display: "block",
    className: clsx_m_default(classes.label, alternativeLabel && classes.alternativeLabel, completed && classes.completed, active && classes.active, error && classes.error)
  }, children) : null, optional));
});
true ? StepLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children: import_prop_types109.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types109.default.object,
  /**
   * @ignore
   */
  className: import_prop_types109.default.string,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
   */
  disabled: import_prop_types109.default.bool,
  /**
   * Mark the step as failed.
   */
  error: import_prop_types109.default.bool,
  /**
   * Override the default label of the step icon.
   */
  icon: import_prop_types109.default.node,
  /**
   * The optional node to display.
   */
  optional: import_prop_types109.default.node,
  /**
   * The component to render in place of the [`StepIcon`](/api/step-icon/).
   */
  StepIconComponent: import_prop_types109.default.elementType,
  /**
   * Props applied to the [`StepIcon`](/api/step-icon/) element.
   */
  StepIconProps: import_prop_types109.default.object
} : void 0;
StepLabel.muiName = "StepLabel";
var StepLabel_default = withStyles_default(styles155, {
  name: "MuiStepLabel"
})(StepLabel);

// node_modules/@material-ui/core/esm/StepButton/StepButton.js
var styles157 = {
  /* Styles applied to the root element. */
  root: {
    width: "100%",
    padding: "24px 16px",
    margin: "-24px -16px",
    boxSizing: "content-box"
  },
  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {},
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    justifyContent: "flex-start",
    padding: "8px",
    margin: "-8px"
  },
  /* Styles applied to the `ButtonBase` touch-ripple. */
  touchRipple: {
    color: "rgba(0, 0, 0, 0.3)"
  }
};
var StepButton = React136.forwardRef(function StepButton2(props, ref) {
  var active = props.active, alternativeLabel = props.alternativeLabel, children = props.children, classes = props.classes, className = props.className, completed = props.completed, disabled = props.disabled, expanded = props.expanded, icon = props.icon, last = props.last, optional = props.optional, orientation = props.orientation, other = _objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "expanded", "icon", "last", "optional", "orientation"]);
  var childProps = {
    active,
    alternativeLabel,
    completed,
    disabled,
    icon,
    optional,
    orientation
  };
  var child = isMuiElement(children, ["StepLabel"]) ? React136.cloneElement(children, childProps) : React136.createElement(StepLabel_default, childProps, children);
  return React136.createElement(ButtonBase_default, _extends({
    focusRipple: true,
    disabled,
    TouchRippleProps: {
      className: classes.touchRipple
    },
    className: clsx_m_default(classes.root, classes[orientation], className),
    ref
  }, other), child);
});
true ? StepButton.propTypes = {
  /**
   * @ignore
   * Passed in via `Step` - passed through to `StepLabel`.
   */
  active: import_prop_types110.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: import_prop_types110.default.bool,
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
   */
  children: import_prop_types110.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types110.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types110.default.string,
  /**
   * @ignore
   * Sets completed styling. Is passed to StepLabel.
   */
  completed: import_prop_types110.default.bool,
  /**
   * @ignore
   * Disables the button and sets disabled styling. Is passed to StepLabel.
   */
  disabled: import_prop_types110.default.bool,
  /**
   * @ignore
   * potentially passed from parent `Step`
   */
  expanded: import_prop_types110.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: import_prop_types110.default.node,
  /**
   * @ignore
   */
  last: import_prop_types110.default.bool,
  /**
   * The optional node to display.
   */
  optional: import_prop_types110.default.node,
  /**
   * @ignore
   */
  orientation: import_prop_types110.default.oneOf(["horizontal", "vertical"])
} : void 0;
var StepButton_default = withStyles_default(styles157, {
  name: "MuiStepButton"
})(StepButton);

// node_modules/@material-ui/core/esm/StepConnector/StepConnector.js
init_extends();
var React137 = __toESM(require_react());
var import_prop_types111 = __toESM(require_prop_types());
init_clsx_m();
var styles158 = function styles159(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: "1 1 auto"
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      marginLeft: 12,
      // half icon
      padding: "0 0 8px"
    },
    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
      position: "absolute",
      top: 8 + 4,
      left: "calc(-50% + 20px)",
      right: "calc(50% + 20px)"
    },
    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the line element. */
    line: {
      display: "block",
      borderColor: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
      borderTopStyle: "solid",
      borderTopWidth: 1
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
      borderLeftStyle: "solid",
      borderLeftWidth: 1,
      minHeight: 24
    }
  };
};
var StepConnector = React137.forwardRef(function StepConnector2(props, ref) {
  var active = props.active, _props$alternativeLab = props.alternativeLabel, alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab, classes = props.classes, className = props.className, completed = props.completed, disabled = props.disabled, index = props.index, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, other = _objectWithoutProperties(props, ["active", "alternativeLabel", "classes", "className", "completed", "disabled", "index", "orientation"]);
  return React137.createElement("div", _extends({
    className: clsx_m_default(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, active && classes.active, completed && classes.completed, disabled && classes.disabled),
    ref
  }, other), React137.createElement("span", {
    className: clsx_m_default(classes.line, {
      "horizontal": classes.lineHorizontal,
      "vertical": classes.lineVertical
    }[orientation])
  }));
});
true ? StepConnector.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types111.default.object,
  /**
   * @ignore
   */
  className: import_prop_types111.default.string
} : void 0;
var StepConnector_default = withStyles_default(styles158, {
  name: "MuiStepConnector"
})(StepConnector);

// node_modules/@material-ui/core/esm/StepContent/StepContent.js
init_extends();
var React138 = __toESM(require_react());
var import_prop_types112 = __toESM(require_prop_types());
init_clsx_m();
var styles160 = function styles161(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      marginTop: 8,
      marginLeft: 12,
      // half icon
      paddingLeft: 8 + 12,
      // margin + half icon
      paddingRight: 8,
      borderLeft: "1px solid ".concat(theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[600])
    },
    /* Styles applied to the root element if `last={true}` (controlled by `Step`). */
    last: {
      borderLeft: "none"
    },
    /* Styles applied to the Transition component. */
    transition: {}
  };
};
var StepContent = React138.forwardRef(function StepContent2(props, ref) {
  var active = props.active, alternativeLabel = props.alternativeLabel, children = props.children, classes = props.classes, className = props.className, completed = props.completed, expanded = props.expanded, last = props.last, optional = props.optional, orientation = props.orientation, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Collapse_default : _props$TransitionComp, _props$transitionDura = props.transitionDuration, transitionDurationProp = _props$transitionDura === void 0 ? "auto" : _props$transitionDura, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "expanded", "last", "optional", "orientation", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  if (true) {
    if (orientation !== "vertical") {
      console.error("Material-UI: <StepContent /> is only designed for use with the vertical stepper.");
    }
  }
  var transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  return React138.createElement("div", _extends({
    className: clsx_m_default(classes.root, className, last && classes.last),
    ref
  }, other), React138.createElement(TransitionComponent, _extends({
    in: active || expanded,
    className: classes.transition,
    timeout: transitionDuration,
    unmountOnExit: true
  }, TransitionProps), children));
});
true ? StepContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Step content.
   */
  children: import_prop_types112.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types112.default.object,
  /**
   * @ignore
   */
  className: import_prop_types112.default.string,
  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: import_prop_types112.default.elementType,
  /**
   * Adjust the duration of the content expand transition.
   * Passed as a prop to the transition component.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: import_prop_types112.default.oneOfType([import_prop_types112.default.oneOf(["auto"]), import_prop_types112.default.number, import_prop_types112.default.shape({
    appear: import_prop_types112.default.number,
    enter: import_prop_types112.default.number,
    exit: import_prop_types112.default.number
  })]),
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: import_prop_types112.default.object
} : void 0;
var StepContent_default = withStyles_default(styles160, {
  name: "MuiStepContent"
})(StepContent);

// node_modules/@material-ui/core/esm/Stepper/Stepper.js
init_extends();
var React139 = __toESM(require_react());
var import_prop_types113 = __toESM(require_prop_types());
init_clsx_m();
var styles162 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    padding: 24
  },
  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    flexDirection: "row",
    alignItems: "center"
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: "column"
  },
  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    alignItems: "flex-start"
  }
};
var defaultConnector = React139.createElement(StepConnector_default, null);
var Stepper = React139.forwardRef(function Stepper2(props, ref) {
  var _props$activeStep = props.activeStep, activeStep = _props$activeStep === void 0 ? 0 : _props$activeStep, _props$alternativeLab = props.alternativeLabel, alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab, children = props.children, classes = props.classes, className = props.className, _props$connector = props.connector, connectorProp = _props$connector === void 0 ? defaultConnector : _props$connector, _props$nonLinear = props.nonLinear, nonLinear = _props$nonLinear === void 0 ? false : _props$nonLinear, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, other = _objectWithoutProperties(props, ["activeStep", "alternativeLabel", "children", "classes", "className", "connector", "nonLinear", "orientation"]);
  var connector = React139.isValidElement(connectorProp) ? React139.cloneElement(connectorProp, {
    orientation
  }) : null;
  var childrenArray = React139.Children.toArray(children);
  var steps = childrenArray.map(function(step, index) {
    var state = {
      index,
      active: false,
      completed: false,
      disabled: false
    };
    if (activeStep === index) {
      state.active = true;
    } else if (!nonLinear && activeStep > index) {
      state.completed = true;
    } else if (!nonLinear && activeStep < index) {
      state.disabled = true;
    }
    return React139.cloneElement(step, _extends({
      alternativeLabel,
      connector,
      last: index + 1 === childrenArray.length,
      orientation
    }, state, step.props));
  });
  return React139.createElement(Paper_default, _extends({
    square: true,
    elevation: 0,
    className: clsx_m_default(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel),
    ref
  }, other), steps);
});
true ? Stepper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the active step (zero based index).
   * Set to -1 to disable all the steps.
   */
  activeStep: import_prop_types113.default.number,
  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: import_prop_types113.default.bool,
  /**
   * Two or more `<Step />` components.
   */
  children: import_prop_types113.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types113.default.object,
  /**
   * @ignore
   */
  className: import_prop_types113.default.string,
  /**
   * An element to be placed between each step.
   */
  connector: import_prop_types113.default.element,
  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: import_prop_types113.default.bool,
  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: import_prop_types113.default.oneOf(["horizontal", "vertical"])
} : void 0;
var Stepper_default = withStyles_default(styles162, {
  name: "MuiStepper"
})(Stepper);

// node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js
init_extends();
var React141 = __toESM(require_react());
var import_prop_types115 = __toESM(require_prop_types());
var ReactDOM13 = __toESM(require_react_dom());

// node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeArea.js
init_extends();
var React140 = __toESM(require_react());
var import_prop_types114 = __toESM(require_prop_types());
init_clsx_m();
var styles163 = function styles164(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: theme.zIndex.drawer - 1
    },
    anchorLeft: {
      right: "auto"
    },
    anchorRight: {
      left: "auto",
      right: 0
    },
    anchorTop: {
      bottom: "auto",
      right: 0
    },
    anchorBottom: {
      top: "auto",
      bottom: 0,
      right: 0
    }
  };
};
var SwipeArea = React140.forwardRef(function SwipeArea2(props, ref) {
  var anchor = props.anchor, classes = props.classes, className = props.className, width = props.width, other = _objectWithoutProperties(props, ["anchor", "classes", "className", "width"]);
  return React140.createElement("div", _extends({
    className: clsx_m_default(classes.root, classes["anchor".concat(capitalize(anchor))], className),
    ref,
    style: _defineProperty({}, isHorizontal(anchor) ? "width" : "height", width)
  }, other));
});
true ? SwipeArea.propTypes = {
  /**
   * Side on which to attach the discovery area.
   */
  anchor: import_prop_types114.default.oneOf(["left", "top", "right", "bottom"]).isRequired,
  /**
   * @ignore
   */
  classes: import_prop_types114.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types114.default.string,
  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  width: import_prop_types114.default.number.isRequired
} : void 0;
var SwipeArea_default = withStyles_default(styles163, {
  name: "PrivateSwipeArea"
})(SwipeArea);

// node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js
var UNCERTAINTY_THRESHOLD = 3;
var nodeThatClaimedTheSwipe = null;
function calculateCurrentX(anchor, touches) {
  return anchor === "right" ? document.body.offsetWidth - touches[0].pageX : touches[0].pageX;
}
function calculateCurrentY(anchor, touches) {
  return anchor === "bottom" ? window.innerHeight - touches[0].clientY : touches[0].clientY;
}
function getMaxTranslate(horizontalSwipe, paperInstance) {
  return horizontalSwipe ? paperInstance.clientWidth : paperInstance.clientHeight;
}
function getTranslate(currentTranslate, startLocation, open, maxTranslate) {
  return Math.min(Math.max(open ? startLocation - currentTranslate : maxTranslate + startLocation - currentTranslate, 0), maxTranslate);
}
function getDomTreeShapes(element, rootNode) {
  var domTreeShapes = [];
  while (element && element !== rootNode) {
    var style = window.getComputedStyle(element);
    if (
      // Ignore the scroll children if the element is absolute positioned.
      style.getPropertyValue("position") === "absolute" || // Ignore the scroll children if the element has an overflowX hidden
      style.getPropertyValue("overflow-x") === "hidden"
    ) {
      domTreeShapes = [];
    } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
      domTreeShapes.push(element);
    }
    element = element.parentElement;
  }
  return domTreeShapes;
}
function findNativeHandler(_ref6) {
  var domTreeShapes = _ref6.domTreeShapes, start = _ref6.start, current = _ref6.current, anchor = _ref6.anchor;
  var axisProperties = {
    scrollPosition: {
      x: "scrollLeft",
      y: "scrollTop"
    },
    scrollLength: {
      x: "scrollWidth",
      y: "scrollHeight"
    },
    clientLength: {
      x: "clientWidth",
      y: "clientHeight"
    }
  };
  return domTreeShapes.some(function(shape) {
    var goingForward = current >= start;
    if (anchor === "top" || anchor === "left") {
      goingForward = !goingForward;
    }
    var axis = anchor === "left" || anchor === "right" ? "x" : "y";
    var scrollPosition = shape[axisProperties.scrollPosition[axis]];
    var areNotAtStart = scrollPosition > 0;
    var areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];
    if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
      return shape;
    }
    return null;
  });
}
var iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
var transitionDurationDefault = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
var useEnhancedEffect11 = typeof window !== "undefined" ? React141.useLayoutEffect : React141.useEffect;
var SwipeableDrawer = React141.forwardRef(function SwipeableDrawer2(inProps, ref) {
  var theme = useTheme2();
  var props = getThemeProps({
    name: "MuiSwipeableDrawer",
    props: _extends({}, inProps),
    theme
  });
  var _props$anchor = props.anchor, anchor = _props$anchor === void 0 ? "left" : _props$anchor, _props$disableBackdro = props.disableBackdropTransition, disableBackdropTransition = _props$disableBackdro === void 0 ? false : _props$disableBackdro, _props$disableDiscove = props.disableDiscovery, disableDiscovery = _props$disableDiscove === void 0 ? false : _props$disableDiscove, _props$disableSwipeTo = props.disableSwipeToOpen, disableSwipeToOpen = _props$disableSwipeTo === void 0 ? iOS : _props$disableSwipeTo, hideBackdrop = props.hideBackdrop, _props$hysteresis = props.hysteresis, hysteresis = _props$hysteresis === void 0 ? 0.52 : _props$hysteresis, _props$minFlingVeloci = props.minFlingVelocity, minFlingVelocity = _props$minFlingVeloci === void 0 ? 450 : _props$minFlingVeloci, _props$ModalProps = props.ModalProps;
  _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;
  var BackdropProps = _props$ModalProps.BackdropProps, ModalPropsProp = _objectWithoutProperties(_props$ModalProps, ["BackdropProps"]), onClose = props.onClose, onOpen = props.onOpen, open = props.open, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, SwipeAreaProps = props.SwipeAreaProps, _props$swipeAreaWidth = props.swipeAreaWidth, swipeAreaWidth = _props$swipeAreaWidth === void 0 ? 20 : _props$swipeAreaWidth, _props$transitionDura = props.transitionDuration, transitionDuration = _props$transitionDura === void 0 ? transitionDurationDefault : _props$transitionDura, _props$variant = props.variant, variant = _props$variant === void 0 ? "temporary" : _props$variant, other = _objectWithoutProperties(props, ["anchor", "disableBackdropTransition", "disableDiscovery", "disableSwipeToOpen", "hideBackdrop", "hysteresis", "minFlingVelocity", "ModalProps", "onClose", "onOpen", "open", "PaperProps", "SwipeAreaProps", "swipeAreaWidth", "transitionDuration", "variant"]);
  var _React$useState = React141.useState(false), maybeSwiping = _React$useState[0], setMaybeSwiping = _React$useState[1];
  var swipeInstance = React141.useRef({
    isSwiping: null
  });
  var swipeAreaRef = React141.useRef();
  var backdropRef = React141.useRef();
  var paperRef = React141.useRef();
  var touchDetected = React141.useRef(false);
  var calculatedDurationRef = React141.useRef();
  useEnhancedEffect11(function() {
    calculatedDurationRef.current = null;
  }, [open]);
  var setPosition = React141.useCallback(function(translate) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options$mode = options.mode, mode = _options$mode === void 0 ? null : _options$mode, _options$changeTransi = options.changeTransition, changeTransition = _options$changeTransi === void 0 ? true : _options$changeTransi;
    var anchorRtl = getAnchor(theme, anchor);
    var rtlTranslateMultiplier = ["right", "bottom"].indexOf(anchorRtl) !== -1 ? 1 : -1;
    var horizontalSwipe = isHorizontal(anchor);
    var transform = horizontalSwipe ? "translate(".concat(rtlTranslateMultiplier * translate, "px, 0)") : "translate(0, ".concat(rtlTranslateMultiplier * translate, "px)");
    var drawerStyle = paperRef.current.style;
    drawerStyle.webkitTransform = transform;
    drawerStyle.transform = transform;
    var transition = "";
    if (mode) {
      transition = theme.transitions.create("all", getTransitionProps({
        timeout: transitionDuration
      }, {
        mode
      }));
    }
    if (changeTransition) {
      drawerStyle.webkitTransition = transition;
      drawerStyle.transition = transition;
    }
    if (!disableBackdropTransition && !hideBackdrop) {
      var backdropStyle = backdropRef.current.style;
      backdropStyle.opacity = 1 - translate / getMaxTranslate(horizontalSwipe, paperRef.current);
      if (changeTransition) {
        backdropStyle.webkitTransition = transition;
        backdropStyle.transition = transition;
      }
    }
  }, [anchor, disableBackdropTransition, hideBackdrop, theme, transitionDuration]);
  var handleBodyTouchEnd = useEventCallback(function(event) {
    if (!touchDetected.current) {
      return;
    }
    nodeThatClaimedTheSwipe = null;
    touchDetected.current = false;
    setMaybeSwiping(false);
    if (!swipeInstance.current.isSwiping) {
      swipeInstance.current.isSwiping = null;
      return;
    }
    swipeInstance.current.isSwiping = null;
    var anchorRtl = getAnchor(theme, anchor);
    var horizontal = isHorizontal(anchor);
    var current;
    if (horizontal) {
      current = calculateCurrentX(anchorRtl, event.changedTouches);
    } else {
      current = calculateCurrentY(anchorRtl, event.changedTouches);
    }
    var startLocation = horizontal ? swipeInstance.current.startX : swipeInstance.current.startY;
    var maxTranslate = getMaxTranslate(horizontal, paperRef.current);
    var currentTranslate = getTranslate(current, startLocation, open, maxTranslate);
    var translateRatio = currentTranslate / maxTranslate;
    if (Math.abs(swipeInstance.current.velocity) > minFlingVelocity) {
      calculatedDurationRef.current = Math.abs((maxTranslate - currentTranslate) / swipeInstance.current.velocity) * 1e3;
    }
    if (open) {
      if (swipeInstance.current.velocity > minFlingVelocity || translateRatio > hysteresis) {
        onClose();
      } else {
        setPosition(0, {
          mode: "exit"
        });
      }
      return;
    }
    if (swipeInstance.current.velocity < -minFlingVelocity || 1 - translateRatio > hysteresis) {
      onOpen();
    } else {
      setPosition(getMaxTranslate(horizontal, paperRef.current), {
        mode: "enter"
      });
    }
  });
  var handleBodyTouchMove = useEventCallback(function(event) {
    if (!paperRef.current || !touchDetected.current) {
      return;
    }
    if (nodeThatClaimedTheSwipe != null && nodeThatClaimedTheSwipe !== swipeInstance.current) {
      return;
    }
    var anchorRtl = getAnchor(theme, anchor);
    var horizontalSwipe = isHorizontal(anchor);
    var currentX = calculateCurrentX(anchorRtl, event.touches);
    var currentY = calculateCurrentY(anchorRtl, event.touches);
    if (open && paperRef.current.contains(event.target) && nodeThatClaimedTheSwipe == null) {
      var domTreeShapes = getDomTreeShapes(event.target, paperRef.current);
      var nativeHandler = findNativeHandler({
        domTreeShapes,
        start: horizontalSwipe ? swipeInstance.current.startX : swipeInstance.current.startY,
        current: horizontalSwipe ? currentX : currentY,
        anchor
      });
      if (nativeHandler) {
        nodeThatClaimedTheSwipe = nativeHandler;
        return;
      }
      nodeThatClaimedTheSwipe = swipeInstance.current;
    }
    if (swipeInstance.current.isSwiping == null) {
      var dx = Math.abs(currentX - swipeInstance.current.startX);
      var dy = Math.abs(currentY - swipeInstance.current.startY);
      if (dx > dy) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
      var definitelySwiping = horizontalSwipe ? dx > dy && dx > UNCERTAINTY_THRESHOLD : dy > dx && dy > UNCERTAINTY_THRESHOLD;
      if (definitelySwiping === true || (horizontalSwipe ? dy > UNCERTAINTY_THRESHOLD : dx > UNCERTAINTY_THRESHOLD)) {
        swipeInstance.current.isSwiping = definitelySwiping;
        if (!definitelySwiping) {
          handleBodyTouchEnd(event);
          return;
        }
        swipeInstance.current.startX = currentX;
        swipeInstance.current.startY = currentY;
        if (!disableDiscovery && !open) {
          if (horizontalSwipe) {
            swipeInstance.current.startX -= swipeAreaWidth;
          } else {
            swipeInstance.current.startY -= swipeAreaWidth;
          }
        }
      }
    }
    if (!swipeInstance.current.isSwiping) {
      return;
    }
    var maxTranslate = getMaxTranslate(horizontalSwipe, paperRef.current);
    var startLocation = horizontalSwipe ? swipeInstance.current.startX : swipeInstance.current.startY;
    if (open && !swipeInstance.current.paperHit) {
      startLocation = Math.min(startLocation, maxTranslate);
    }
    var translate = getTranslate(horizontalSwipe ? currentX : currentY, startLocation, open, maxTranslate);
    if (open) {
      if (!swipeInstance.current.paperHit) {
        var paperHit = horizontalSwipe ? currentX < maxTranslate : currentY < maxTranslate;
        if (paperHit) {
          swipeInstance.current.paperHit = true;
          swipeInstance.current.startX = currentX;
          swipeInstance.current.startY = currentY;
        } else {
          return;
        }
      } else if (translate === 0) {
        swipeInstance.current.startX = currentX;
        swipeInstance.current.startY = currentY;
      }
    }
    if (swipeInstance.current.lastTranslate === null) {
      swipeInstance.current.lastTranslate = translate;
      swipeInstance.current.lastTime = performance.now() + 1;
    }
    var velocity = (translate - swipeInstance.current.lastTranslate) / (performance.now() - swipeInstance.current.lastTime) * 1e3;
    swipeInstance.current.velocity = swipeInstance.current.velocity * 0.4 + velocity * 0.6;
    swipeInstance.current.lastTranslate = translate;
    swipeInstance.current.lastTime = performance.now();
    if (event.cancelable) {
      event.preventDefault();
    }
    setPosition(translate);
  });
  var handleBodyTouchStart = useEventCallback(function(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.muiHandled) {
      return;
    }
    if (open && !backdropRef.current.contains(event.target) && !paperRef.current.contains(event.target)) {
      return;
    }
    var anchorRtl = getAnchor(theme, anchor);
    var horizontalSwipe = isHorizontal(anchor);
    var currentX = calculateCurrentX(anchorRtl, event.touches);
    var currentY = calculateCurrentY(anchorRtl, event.touches);
    if (!open) {
      if (disableSwipeToOpen || event.target !== swipeAreaRef.current) {
        return;
      }
      if (horizontalSwipe) {
        if (currentX > swipeAreaWidth) {
          return;
        }
      } else if (currentY > swipeAreaWidth) {
        return;
      }
    }
    event.muiHandled = true;
    nodeThatClaimedTheSwipe = null;
    swipeInstance.current.startX = currentX;
    swipeInstance.current.startY = currentY;
    setMaybeSwiping(true);
    if (!open && paperRef.current) {
      setPosition(getMaxTranslate(horizontalSwipe, paperRef.current) + (disableDiscovery ? 20 : -swipeAreaWidth), {
        changeTransition: false
      });
    }
    swipeInstance.current.velocity = 0;
    swipeInstance.current.lastTime = null;
    swipeInstance.current.lastTranslate = null;
    swipeInstance.current.paperHit = false;
    touchDetected.current = true;
  });
  React141.useEffect(function() {
    if (variant === "temporary") {
      var doc = ownerDocument(paperRef.current);
      doc.addEventListener("touchstart", handleBodyTouchStart);
      doc.addEventListener("touchmove", handleBodyTouchMove, {
        passive: false
      });
      doc.addEventListener("touchend", handleBodyTouchEnd);
      return function() {
        doc.removeEventListener("touchstart", handleBodyTouchStart);
        doc.removeEventListener("touchmove", handleBodyTouchMove, {
          passive: false
        });
        doc.removeEventListener("touchend", handleBodyTouchEnd);
      };
    }
    return void 0;
  }, [variant, handleBodyTouchStart, handleBodyTouchMove, handleBodyTouchEnd]);
  React141.useEffect(function() {
    return function() {
      if (nodeThatClaimedTheSwipe === swipeInstance.current) {
        nodeThatClaimedTheSwipe = null;
      }
    };
  }, []);
  React141.useEffect(function() {
    if (!open) {
      setMaybeSwiping(false);
    }
  }, [open]);
  var handleBackdropRef = React141.useCallback(function(instance) {
    backdropRef.current = ReactDOM13.findDOMNode(instance);
  }, []);
  return React141.createElement(React141.Fragment, null, React141.createElement(Drawer_default, _extends({
    open: variant === "temporary" && maybeSwiping ? true : open,
    variant,
    ModalProps: _extends({
      BackdropProps: _extends({}, BackdropProps, {
        ref: handleBackdropRef
      })
    }, ModalPropsProp),
    PaperProps: _extends({}, PaperProps, {
      style: _extends({
        pointerEvents: variant === "temporary" && !open ? "none" : ""
      }, PaperProps.style),
      ref: paperRef
    }),
    anchor,
    transitionDuration: calculatedDurationRef.current || transitionDuration,
    onClose,
    ref
  }, other)), !disableSwipeToOpen && variant === "temporary" && React141.createElement(NoSsr_default, null, React141.createElement(SwipeArea_default, _extends({
    anchor,
    ref: swipeAreaRef,
    width: swipeAreaWidth
  }, SwipeAreaProps))));
});
true ? SwipeableDrawer.propTypes = {
  /**
   * @ignore
   */
  anchor: import_prop_types115.default.oneOf(["left", "top", "right", "bottom"]),
  /**
   * The content of the component.
   */
  children: import_prop_types115.default.node,
  /**
   * Disable the backdrop transition.
   * This can improve the FPS on low-end devices.
   */
  disableBackdropTransition: import_prop_types115.default.bool,
  /**
   * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit
   * to promote accidental discovery of the swipe gesture.
   */
  disableDiscovery: import_prop_types115.default.bool,
  /**
   * If `true`, swipe to open is disabled. This is useful in browsers where swiping triggers
   * navigation actions. Swipe to open is disabled on iOS browsers by default.
   */
  disableSwipeToOpen: import_prop_types115.default.bool,
  /**
   * @ignore
   */
  hideBackdrop: import_prop_types115.default.bool,
  /**
   * Affects how far the drawer must be opened/closed to change his state.
   * Specified as percent (0-1) of the width of the drawer
   */
  hysteresis: import_prop_types115.default.number,
  /**
   * Defines, from which (average) velocity on, the swipe is
   * defined as complete although hysteresis isn't reached.
   * Good threshold is between 250 - 1000 px/s
   */
  minFlingVelocity: import_prop_types115.default.number,
  /**
   * @ignore
   */
  ModalProps: import_prop_types115.default.shape({
    BackdropProps: import_prop_types115.default.shape({
      component: elementTypeAcceptingRef_default
    })
  }),
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types115.default.func.isRequired,
  /**
   * Callback fired when the component requests to be opened.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types115.default.func.isRequired,
  /**
   * If `true`, the drawer is open.
   */
  open: import_prop_types115.default.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: import_prop_types115.default.shape({
    component: elementTypeAcceptingRef_default,
    style: import_prop_types115.default.object
  }),
  /**
   * The element is used to intercept the touch events on the edge.
   */
  SwipeAreaProps: import_prop_types115.default.object,
  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  swipeAreaWidth: import_prop_types115.default.number,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: import_prop_types115.default.oneOfType([import_prop_types115.default.number, import_prop_types115.default.shape({
    enter: import_prop_types115.default.number,
    exit: import_prop_types115.default.number
  })]),
  /**
   * @ignore
   */
  variant: import_prop_types115.default.oneOf(["permanent", "persistent", "temporary"])
} : void 0;
var SwipeableDrawer_default = SwipeableDrawer;

// node_modules/@material-ui/core/esm/Switch/Switch.js
init_extends();
var React142 = __toESM(require_react());
var import_prop_types116 = __toESM(require_prop_types());
init_clsx_m();
var styles165 = function styles166(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "inline-flex",
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: "hidden",
      padding: 12,
      boxSizing: "border-box",
      position: "relative",
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: "middle",
      // For correct alignment with the text.
      "@media print": {
        colorAdjust: "exact"
      }
    },
    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },
    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },
    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(["left", "transform"], {
        duration: theme.transitions.duration.shortest
      }),
      "&$checked": {
        transform: "translateX(20px)"
      },
      "&$disabled": {
        color: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      "&$checked + $track": {
        opacity: 0.5
      },
      "&$disabled + $track": {
        opacity: theme.palette.type === "light" ? 0.12 : 0.1
      }
    },
    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      "&$checked": {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      "&$checked + $track": {
        backgroundColor: theme.palette.primary.main
      },
      "&$disabled + $track": {
        backgroundColor: theme.palette.type === "light" ? theme.palette.common.black : theme.palette.common.white
      }
    },
    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      "&$checked": {
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      "&$checked + $track": {
        backgroundColor: theme.palette.secondary.main
      },
      "&$disabled + $track": {
        backgroundColor: theme.palette.type === "light" ? theme.palette.common.black : theme.palette.common.white
      }
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      "& $thumb": {
        width: 16,
        height: 16
      },
      "& $switchBase": {
        padding: 4,
        "&$checked": {
          transform: "translateX(16px)"
        }
      }
    },
    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},
    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},
    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: "-100%",
      width: "300%"
    },
    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: "currentColor",
      width: 20,
      height: 20,
      borderRadius: "50%"
    },
    /* Styles applied to the track element. */
    track: {
      height: "100%",
      width: "100%",
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(["opacity", "background-color"], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === "light" ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === "light" ? 0.38 : 0.3
    }
  };
};
var Switch = React142.forwardRef(function Switch2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "secondary" : _props$color, _props$edge = props.edge, edge = _props$edge === void 0 ? false : _props$edge, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["classes", "className", "color", "edge", "size"]);
  var icon = React142.createElement("span", {
    className: classes.thumb
  });
  return React142.createElement("span", {
    className: clsx_m_default(classes.root, className, {
      "start": classes.edgeStart,
      "end": classes.edgeEnd
    }[edge], size === "small" && classes["size".concat(capitalize(size))])
  }, React142.createElement(SwitchBase_default, _extends({
    type: "checkbox",
    icon,
    checkedIcon: icon,
    classes: {
      root: clsx_m_default(classes.switchBase, classes["color".concat(capitalize(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref
  }, other)), React142.createElement("span", {
    className: classes.track
  }));
});
true ? Switch.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types116.default.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: import_prop_types116.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types116.default.object,
  /**
   * @ignore
   */
  className: import_prop_types116.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types116.default.oneOf(["default", "primary", "secondary"]),
  /**
   * @ignore
   */
  defaultChecked: import_prop_types116.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: import_prop_types116.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: import_prop_types116.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   */
  edge: import_prop_types116.default.oneOf(["end", "start", false]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: import_prop_types116.default.node,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types116.default.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types116.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types116.default.func,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types116.default.bool,
  /**
   * The size of the switch.
   * `small` is equivalent to the dense switch styling.
   */
  size: import_prop_types116.default.oneOf(["medium", "small"]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: import_prop_types116.default.any
} : void 0;
var Switch_default = withStyles_default(styles165, {
  name: "MuiSwitch"
})(Switch);

// node_modules/@material-ui/core/esm/Tab/Tab.js
init_extends();
var React143 = __toESM(require_react());
var import_prop_types117 = __toESM(require_prop_types());
init_clsx_m();
var styles167 = function styles168(theme) {
  var _extends22;
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, (_extends22 = {
      maxWidth: 264,
      minWidth: 72,
      position: "relative",
      boxSizing: "border-box",
      minHeight: 48,
      flexShrink: 0,
      padding: "6px 12px"
    }, _defineProperty(_extends22, theme.breakpoints.up("sm"), {
      padding: "6px 24px"
    }), _defineProperty(_extends22, "overflow", "hidden"), _defineProperty(_extends22, "whiteSpace", "normal"), _defineProperty(_extends22, "textAlign", "center"), _defineProperty(_extends22, theme.breakpoints.up("sm"), {
      minWidth: 160
    }), _extends22)),
    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72,
      paddingTop: 9,
      "& $wrapper > *:first-child": {
        marginBottom: 6
      }
    },
    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
    textColorInherit: {
      color: "inherit",
      opacity: 0.7,
      "&$selected": {
        opacity: 1
      },
      "&$disabled": {
        opacity: 0.5
      }
    },
    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
    textColorPrimary: {
      color: theme.palette.text.secondary,
      "&$selected": {
        color: theme.palette.primary.main
      },
      "&$disabled": {
        color: theme.palette.text.disabled
      }
    },
    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
    textColorSecondary: {
      color: theme.palette.text.secondary,
      "&$selected": {
        color: theme.palette.secondary.main
      },
      "&$disabled": {
        color: theme.palette.text.disabled
      }
    },
    /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},
    /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},
    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    },
    /* Styles applied to the root element if `wrapped={true}`. */
    wrapped: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.5
    },
    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      flexDirection: "column"
    }
  };
};
var Tab = React143.forwardRef(function Tab2(props, ref) {
  var classes = props.classes, className = props.className, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, fullWidth = props.fullWidth, icon = props.icon, indicator = props.indicator, label = props.label, onChange = props.onChange, onClick = props.onClick, onFocus = props.onFocus, selected = props.selected, selectionFollowsFocus = props.selectionFollowsFocus, _props$textColor = props.textColor, textColor = _props$textColor === void 0 ? "inherit" : _props$textColor, value = props.value, _props$wrapped = props.wrapped, wrapped = _props$wrapped === void 0 ? false : _props$wrapped, other = _objectWithoutProperties(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]);
  var handleClick = function handleClick2(event) {
    if (onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  var handleFocus = function handleFocus2(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return React143.createElement(ButtonBase_default, _extends({
    focusRipple: !disableFocusRipple,
    className: clsx_m_default(classes.root, classes["textColor".concat(capitalize(textColor))], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
    ref,
    role: "tab",
    "aria-selected": selected,
    disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), React143.createElement("span", {
    className: classes.wrapper
  }, icon, label), indicator);
});
true ? Tab.propTypes = {
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types117.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types117.default.string,
  /**
   * If `true`, the tab will be disabled.
   */
  disabled: import_prop_types117.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: import_prop_types117.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: import_prop_types117.default.bool,
  /**
   * @ignore
   */
  fullWidth: import_prop_types117.default.bool,
  /**
   * The icon element.
   */
  icon: import_prop_types117.default.node,
  /**
   * @ignore
   * For server-side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: import_prop_types117.default.node,
  /**
   * The label element.
   */
  label: import_prop_types117.default.node,
  /**
   * @ignore
   */
  onChange: import_prop_types117.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types117.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types117.default.func,
  /**
   * @ignore
   */
  selected: import_prop_types117.default.bool,
  /**
   * @ignore
   */
  selectionFollowsFocus: import_prop_types117.default.bool,
  /**
   * @ignore
   */
  textColor: import_prop_types117.default.oneOf(["secondary", "primary", "inherit"]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: import_prop_types117.default.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   */
  wrapped: import_prop_types117.default.bool
} : void 0;
var Tab_default = withStyles_default(styles167, {
  name: "MuiTab"
})(Tab);

// node_modules/@material-ui/core/esm/Table/Table.js
init_extends();
var React145 = __toESM(require_react());
var import_prop_types118 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Table/TableContext.js
var React144 = __toESM(require_react());
var TableContext = React144.createContext();
if (true) {
  TableContext.displayName = "TableContext";
}
var TableContext_default = TableContext;

// node_modules/@material-ui/core/esm/Table/Table.js
var styles169 = function styles170(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "table",
      width: "100%",
      borderCollapse: "collapse",
      borderSpacing: 0,
      "& caption": _extends({}, theme.typography.body2, {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        textAlign: "left",
        captionSide: "bottom"
      })
    },
    /* Styles applied to the root element if `stickyHeader={true}`. */
    stickyHeader: {
      borderCollapse: "separate"
    }
  };
};
var defaultComponent = "table";
var Table = React145.forwardRef(function Table2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? defaultComponent : _props$component, _props$padding = props.padding, padding = _props$padding === void 0 ? "normal" : _props$padding, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, _props$stickyHeader = props.stickyHeader, stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader, other = _objectWithoutProperties(props, ["classes", "className", "component", "padding", "size", "stickyHeader"]);
  var table = React145.useMemo(function() {
    return {
      padding,
      size,
      stickyHeader
    };
  }, [padding, size, stickyHeader]);
  return React145.createElement(TableContext_default.Provider, {
    value: table
  }, React145.createElement(Component6, _extends({
    role: Component6 === defaultComponent ? null : "table",
    ref,
    className: clsx_m_default(classes.root, className, stickyHeader && classes.stickyHeader)
  }, other)));
});
true ? Table.propTypes = {
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
   */
  children: import_prop_types118.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types118.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types118.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types118.default.elementType,
  /**
   * Allows TableCells to inherit padding of the Table.
   * `default` is deprecated, use `normal` instead.
   */
  padding: chainPropTypes(import_prop_types118.default.oneOf(["normal", "checkbox", "none", "default"]), function(props) {
    if (props.padding === "default") {
      return new Error('Material-UI: padding="default" was renamed to padding="normal" for consistency.');
    }
    return null;
  }),
  /**
   * Allows TableCells to inherit size of the Table.
   */
  size: import_prop_types118.default.oneOf(["small", "medium"]),
  /**
   * Set the header sticky.
   *
   * ⚠️ It doesn't work with IE 11.
   */
  stickyHeader: import_prop_types118.default.bool
} : void 0;
var Table_default = withStyles_default(styles169, {
  name: "MuiTable"
})(Table);

// node_modules/@material-ui/core/esm/TableBody/TableBody.js
init_extends();
var React147 = __toESM(require_react());
var import_prop_types119 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Table/Tablelvl2Context.js
var React146 = __toESM(require_react());
var Tablelvl2Context = React146.createContext();
if (true) {
  Tablelvl2Context.displayName = "Tablelvl2Context";
}
var Tablelvl2Context_default = Tablelvl2Context;

// node_modules/@material-ui/core/esm/TableBody/TableBody.js
var styles171 = {
  /* Styles applied to the root element. */
  root: {
    display: "table-row-group"
  }
};
var tablelvl2 = {
  variant: "body"
};
var defaultComponent2 = "tbody";
var TableBody = React147.forwardRef(function TableBody2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? defaultComponent2 : _props$component, other = _objectWithoutProperties(props, ["classes", "className", "component"]);
  return React147.createElement(Tablelvl2Context_default.Provider, {
    value: tablelvl2
  }, React147.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref,
    role: Component6 === defaultComponent2 ? null : "rowgroup"
  }, other)));
});
true ? TableBody.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: import_prop_types119.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types119.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types119.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types119.default.elementType
} : void 0;
var TableBody_default = withStyles_default(styles171, {
  name: "MuiTableBody"
})(TableBody);

// node_modules/@material-ui/core/esm/TableCell/TableCell.js
init_extends();
var React148 = __toESM(require_react());
var import_prop_types120 = __toESM(require_prop_types());
init_clsx_m();
var styles172 = function styles173(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body2, {
      display: "table-cell",
      verticalAlign: "inherit",
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === "light" ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)),
      textAlign: "left",
      padding: 16
    }),
    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    },
    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary
    },
    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      color: theme.palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: "6px 24px 6px 16px",
      "&:last-child": {
        paddingRight: 16
      },
      "&$paddingCheckbox": {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "&:last-child": {
          paddingLeft: 12,
          paddingRight: 16
        },
        "& > *": {
          padding: 0
        }
      }
    },
    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px",
      "&:last-child": {
        paddingLeft: 0,
        paddingRight: 4
      }
    },
    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      "&:last-child": {
        padding: 0
      }
    },
    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: "left"
    },
    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: "center"
    },
    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: "right",
      flexDirection: "row-reverse"
    },
    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: "justify"
    },
    /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
    stickyHeader: {
      position: "sticky",
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default
    }
  };
};
var TableCell = React148.forwardRef(function TableCell2(props, ref) {
  var _props$align = props.align, align = _props$align === void 0 ? "inherit" : _props$align, classes = props.classes, className = props.className, component = props.component, paddingProp = props.padding, scopeProp = props.scope, sizeProp = props.size, sortDirection = props.sortDirection, variantProp = props.variant, other = _objectWithoutProperties(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);
  var table = React148.useContext(TableContext_default);
  var tablelvl24 = React148.useContext(Tablelvl2Context_default);
  var isHeadCell = tablelvl24 && tablelvl24.variant === "head";
  var role;
  var Component6;
  if (component) {
    Component6 = component;
    role = isHeadCell ? "columnheader" : "cell";
  } else {
    Component6 = isHeadCell ? "th" : "td";
  }
  var scope = scopeProp;
  if (!scope && isHeadCell) {
    scope = "col";
  }
  var padding = paddingProp || (table && table.padding ? table.padding : "normal");
  var size = sizeProp || (table && table.size ? table.size : "medium");
  var variant = variantProp || tablelvl24 && tablelvl24.variant;
  var ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === "asc" ? "ascending" : "descending";
  }
  return React148.createElement(Component6, _extends({
    ref,
    className: clsx_m_default(classes.root, classes[variant], className, align !== "inherit" && classes["align".concat(capitalize(align))], padding !== "normal" && classes["padding".concat(capitalize(padding))], size !== "medium" && classes["size".concat(capitalize(size))], variant === "head" && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role,
    scope
  }, other));
});
true ? TableCell.propTypes = {
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   */
  align: import_prop_types120.default.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The table cell contents.
   */
  children: import_prop_types120.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types120.default.object,
  /**
   * @ignore
   */
  className: import_prop_types120.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types120.default.elementType,
  /**
   * Sets the padding applied to the cell.
   * By default, the Table parent component set the value (`normal`).
   * `default` is deprecated, use `normal` instead.
   */
  padding: chainPropTypes(import_prop_types120.default.oneOf(["normal", "checkbox", "none", "default"]), function(props) {
    if (props.padding === "default") {
      return new Error('Material-UI: padding="default" was renamed to padding="normal" for consistency.');
    }
    return null;
  }),
  /**
   * Set scope attribute.
   */
  scope: import_prop_types120.default.string,
  /**
   * Specify the size of the cell.
   * By default, the Table parent component set the value (`medium`).
   */
  size: import_prop_types120.default.oneOf(["medium", "small"]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: import_prop_types120.default.oneOf(["asc", "desc", false]),
  /**
   * Specify the cell type.
   * By default, the TableHead, TableBody or TableFooter parent component set the value.
   */
  variant: import_prop_types120.default.oneOf(["body", "footer", "head"])
} : void 0;
var TableCell_default = withStyles_default(styles172, {
  name: "MuiTableCell"
})(TableCell);

// node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
init_extends();
var React149 = __toESM(require_react());
var import_prop_types121 = __toESM(require_prop_types());
init_clsx_m();
var styles174 = {
  /* Styles applied to the root element. */
  root: {
    width: "100%",
    overflowX: "auto"
  }
};
var TableContainer = React149.forwardRef(function TableContainer2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, other = _objectWithoutProperties(props, ["classes", "className", "component"]);
  return React149.createElement(Component6, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other));
});
true ? TableContainer.propTypes = {
  /**
   * The table itself, normally `<Table />`
   */
  children: import_prop_types121.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types121.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types121.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types121.default.elementType
} : void 0;
var TableContainer_default = withStyles_default(styles174, {
  name: "MuiTableContainer"
})(TableContainer);

// node_modules/@material-ui/core/esm/TableFooter/TableFooter.js
init_extends();
var React150 = __toESM(require_react());
var import_prop_types122 = __toESM(require_prop_types());
init_clsx_m();
var styles175 = {
  /* Styles applied to the root element. */
  root: {
    display: "table-footer-group"
  }
};
var tablelvl22 = {
  variant: "footer"
};
var defaultComponent3 = "tfoot";
var TableFooter = React150.forwardRef(function TableFooter2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? defaultComponent3 : _props$component, other = _objectWithoutProperties(props, ["classes", "className", "component"]);
  return React150.createElement(Tablelvl2Context_default.Provider, {
    value: tablelvl22
  }, React150.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref,
    role: Component6 === defaultComponent3 ? null : "rowgroup"
  }, other)));
});
true ? TableFooter.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: import_prop_types122.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types122.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types122.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types122.default.elementType
} : void 0;
var TableFooter_default = withStyles_default(styles175, {
  name: "MuiTableFooter"
})(TableFooter);

// node_modules/@material-ui/core/esm/TableHead/TableHead.js
init_extends();
var React151 = __toESM(require_react());
var import_prop_types123 = __toESM(require_prop_types());
init_clsx_m();
var styles176 = {
  /* Styles applied to the root element. */
  root: {
    display: "table-header-group"
  }
};
var tablelvl23 = {
  variant: "head"
};
var defaultComponent4 = "thead";
var TableHead = React151.forwardRef(function TableHead2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? defaultComponent4 : _props$component, other = _objectWithoutProperties(props, ["classes", "className", "component"]);
  return React151.createElement(Tablelvl2Context_default.Provider, {
    value: tablelvl23
  }, React151.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    ref,
    role: Component6 === defaultComponent4 ? null : "rowgroup"
  }, other)));
});
true ? TableHead.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: import_prop_types123.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types123.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types123.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types123.default.elementType
} : void 0;
var TableHead_default = withStyles_default(styles176, {
  name: "MuiTableHead"
})(TableHead);

// node_modules/@material-ui/core/esm/TablePagination/TablePagination.js
init_extends();
var React156 = __toESM(require_react());
var import_prop_types126 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
init_extends();
var React152 = __toESM(require_react());
var import_prop_types124 = __toESM(require_prop_types());
init_clsx_m();
var styles177 = function styles178(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: _defineProperty({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }, theme.breakpoints.up("sm"), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),
    /* Styles applied to the root element if `variant="regular"`. */
    regular: theme.mixins.toolbar,
    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
      minHeight: 48
    }
  };
};
var Toolbar = React152.forwardRef(function Toolbar2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, _props$variant = props.variant, variant = _props$variant === void 0 ? "regular" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "variant"]);
  return React152.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, classes[variant], className, !disableGutters && classes.gutters),
    ref
  }, other));
});
true ? Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: import_prop_types124.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types124.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types124.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types124.default.elementType,
  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: import_prop_types124.default.bool,
  /**
   * The variant to use.
   */
  variant: import_prop_types124.default.oneOf(["regular", "dense"])
} : void 0;
var Toolbar_default = withStyles_default(styles177, {
  name: "MuiToolbar"
})(Toolbar);

// node_modules/@material-ui/core/esm/TablePagination/TablePaginationActions.js
init_extends();
var React155 = __toESM(require_react());
var import_prop_types125 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js
var React153 = __toESM(require_react());
var KeyboardArrowLeft_default = createSvgIcon(React153.createElement("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft");

// node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js
var React154 = __toESM(require_react());
var KeyboardArrowRight_default = createSvgIcon(React154.createElement("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");

// node_modules/@material-ui/core/esm/TablePagination/TablePaginationActions.js
var _ref4 = React155.createElement(KeyboardArrowRight_default, null);
var _ref22 = React155.createElement(KeyboardArrowLeft_default, null);
var _ref32 = React155.createElement(KeyboardArrowLeft_default, null);
var _ref42 = React155.createElement(KeyboardArrowRight_default, null);
var TablePaginationActions = React155.forwardRef(function TablePaginationActions2(props, ref) {
  var backIconButtonProps = props.backIconButtonProps, count = props.count, nextIconButtonProps = props.nextIconButtonProps, _props$onChangePage = props.onChangePage, onChangePage = _props$onChangePage === void 0 ? function() {
  } : _props$onChangePage, _props$onPageChange = props.onPageChange, onPageChange = _props$onPageChange === void 0 ? function() {
  } : _props$onPageChange, page = props.page, rowsPerPage = props.rowsPerPage, other = _objectWithoutProperties(props, ["backIconButtonProps", "count", "nextIconButtonProps", "onChangePage", "onPageChange", "page", "rowsPerPage"]);
  var theme = useTheme2();
  var handleBackButtonClick = function handleBackButtonClick2(event) {
    onChangePage(event, page - 1);
    onPageChange(event, page - 1);
  };
  var handleNextButtonClick = function handleNextButtonClick2(event) {
    onChangePage(event, page + 1);
    onPageChange(event, page + 1);
  };
  return React155.createElement("div", _extends({
    ref
  }, other), React155.createElement(IconButton_default, _extends({
    onClick: handleBackButtonClick,
    disabled: page === 0,
    color: "inherit"
  }, backIconButtonProps), theme.direction === "rtl" ? _ref4 : _ref22), React155.createElement(IconButton_default, _extends({
    onClick: handleNextButtonClick,
    disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
    color: "inherit"
  }, nextIconButtonProps), theme.direction === "rtl" ? _ref32 : _ref42));
});
true ? TablePaginationActions.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) element.
   */
  backIconButtonProps: import_prop_types125.default.object,
  /**
   * The total number of rows.
   */
  count: import_prop_types125.default.number.isRequired,
  /**
   * Props applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: import_prop_types125.default.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChangePage: import_prop_types125.default.func,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: import_prop_types125.default.func,
  /**
   * The zero-based index of the current page.
   */
  page: import_prop_types125.default.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: import_prop_types125.default.number.isRequired
} : void 0;
var TablePaginationActions_default = TablePaginationActions;

// node_modules/@material-ui/core/esm/TablePagination/TablePagination.js
var styles179 = function styles180(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(14),
      overflow: "auto",
      // Increase the specificity to override TableCell.
      "&:last-child": {
        padding: 0
      }
    },
    /* Styles applied to the Toolbar component. */
    toolbar: {
      minHeight: 52,
      paddingRight: 2
    },
    /* Styles applied to the spacer element. */
    spacer: {
      flex: "1 1 100%"
    },
    /* Styles applied to the caption Typography components if `variant="caption"`. */
    caption: {
      flexShrink: 0
    },
    // TODO v5: `.selectRoot` should be merged with `.input`
    /* Styles applied to the Select component root element. */
    selectRoot: {
      marginRight: 32,
      marginLeft: 8
    },
    /* Styles applied to the Select component `select` class. */
    select: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
      // Align <select> on Chrome.
    },
    // TODO v5: remove
    /* Styles applied to the Select component `icon` class. */
    selectIcon: {},
    /* Styles applied to the `InputBase` component. */
    input: {
      color: "inherit",
      fontSize: "inherit",
      flexShrink: 0
    },
    /* Styles applied to the MenuItem component. */
    menuItem: {},
    /* Styles applied to the internal `TablePaginationActions` component. */
    actions: {
      flexShrink: 0,
      marginLeft: 20
    }
  };
};
var defaultLabelDisplayedRows = function defaultLabelDisplayedRows2(_ref6) {
  var from = _ref6.from, to = _ref6.to, count = _ref6.count;
  return "".concat(from, "-").concat(to, " of ").concat(count !== -1 ? count : "more than ".concat(to));
};
var defaultRowsPerPageOptions = [10, 25, 50, 100];
var TablePagination = React156.forwardRef(function TablePagination2(props, ref) {
  var _props$ActionsCompone = props.ActionsComponent, ActionsComponent = _props$ActionsCompone === void 0 ? TablePaginationActions_default : _props$ActionsCompone, backIconButtonProps = props.backIconButtonProps, _props$backIconButton = props.backIconButtonText, backIconButtonText = _props$backIconButton === void 0 ? "Previous page" : _props$backIconButton, classes = props.classes, className = props.className, colSpanProp = props.colSpan, _props$component = props.component, Component6 = _props$component === void 0 ? TableCell_default : _props$component, count = props.count, _props$labelDisplayed = props.labelDisplayedRows, labelDisplayedRows = _props$labelDisplayed === void 0 ? defaultLabelDisplayedRows : _props$labelDisplayed, _props$labelRowsPerPa = props.labelRowsPerPage, labelRowsPerPage = _props$labelRowsPerPa === void 0 ? "Rows per page:" : _props$labelRowsPerPa, nextIconButtonProps = props.nextIconButtonProps, _props$nextIconButton = props.nextIconButtonText, nextIconButtonText = _props$nextIconButton === void 0 ? "Next page" : _props$nextIconButton, onChangePage = props.onChangePage, onPageChange = props.onPageChange, onChangeRowsPerPageProp = props.onChangeRowsPerPage, onRowsPerPageChangeProp = props.onRowsPerPageChange, page = props.page, rowsPerPage = props.rowsPerPage, _props$rowsPerPageOpt = props.rowsPerPageOptions, rowsPerPageOptions = _props$rowsPerPageOpt === void 0 ? defaultRowsPerPageOptions : _props$rowsPerPageOpt, _props$SelectProps = props.SelectProps, SelectProps = _props$SelectProps === void 0 ? {} : _props$SelectProps, other = _objectWithoutProperties(props, ["ActionsComponent", "backIconButtonProps", "backIconButtonText", "classes", "className", "colSpan", "component", "count", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "nextIconButtonText", "onChangePage", "onPageChange", "onChangeRowsPerPage", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps"]);
  var onChangeRowsPerPage = onChangeRowsPerPageProp || onRowsPerPageChangeProp;
  var colSpan;
  if (Component6 === TableCell_default || Component6 === "td") {
    colSpan = colSpanProp || 1e3;
  }
  var selectId = useId();
  var labelId = useId();
  var MenuItemComponent = SelectProps.native ? "option" : MenuItem_default;
  return React156.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className),
    colSpan,
    ref
  }, other), React156.createElement(Toolbar_default, {
    className: classes.toolbar
  }, React156.createElement("div", {
    className: classes.spacer
  }), rowsPerPageOptions.length > 1 && React156.createElement(Typography_default, {
    color: "inherit",
    variant: "body2",
    className: classes.caption,
    id: labelId
  }, labelRowsPerPage), rowsPerPageOptions.length > 1 && React156.createElement(Select_default, _extends({
    classes: {
      select: classes.select,
      icon: classes.selectIcon
    },
    input: React156.createElement(InputBase_default, {
      className: clsx_m_default(classes.input, classes.selectRoot)
    }),
    value: rowsPerPage,
    onChange: onChangeRowsPerPage,
    id: selectId,
    labelId
  }, SelectProps), rowsPerPageOptions.map(function(rowsPerPageOption) {
    return React156.createElement(MenuItemComponent, {
      className: classes.menuItem,
      key: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption,
      value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
    }, rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption);
  })), React156.createElement(Typography_default, {
    color: "inherit",
    variant: "body2",
    className: classes.caption
  }, labelDisplayedRows({
    from: count === 0 ? 0 : page * rowsPerPage + 1,
    to: count !== -1 ? Math.min(count, (page + 1) * rowsPerPage) : (page + 1) * rowsPerPage,
    count: count === -1 ? -1 : count,
    page
  })), React156.createElement(ActionsComponent, {
    className: classes.actions,
    backIconButtonProps: _extends({
      title: backIconButtonText,
      "aria-label": backIconButtonText
    }, backIconButtonProps),
    count,
    nextIconButtonProps: _extends({
      title: nextIconButtonText,
      "aria-label": nextIconButtonText
    }, nextIconButtonProps),
    onChangePage,
    onPageChange,
    page,
    rowsPerPage
  })));
});
true ? TablePagination.propTypes = {
  /**
   * The component used for displaying the actions.
   * Either a string to use a HTML element or a component.
   */
  ActionsComponent: import_prop_types126.default.elementType,
  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) component.
   */
  backIconButtonProps: import_prop_types126.default.object,
  /**
   * Text label for the back arrow icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  backIconButtonText: import_prop_types126.default.string,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types126.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types126.default.string,
  /**
   * @ignore
   */
  colSpan: import_prop_types126.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types126.default.elementType,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: import_prop_types126.default.number.isRequired,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  labelDisplayedRows: import_prop_types126.default.func,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  labelRowsPerPage: import_prop_types126.default.node,
  /**
   * Props applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: import_prop_types126.default.object,
  /**
   * Text label for the next arrow icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  nextIconButtonText: import_prop_types126.default.string,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   * @deprecated Use the onPageChange prop instead.
   */
  onChangePage: deprecatedPropType(import_prop_types126.default.func, "Use the `onPageChange` prop instead."),
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {object} event The event source of the callback.
   * @deprecated Use the onRowsPerPageChange prop instead.
   */
  onChangeRowsPerPage: deprecatedPropType(import_prop_types126.default.func, "Use the `onRowsPerPageChange` prop instead."),
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: import_prop_types126.default.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {object} event The event source of the callback.
   */
  onRowsPerPageChange: import_prop_types126.default.func,
  /**
   * The zero-based index of the current page.
   */
  page: chainPropTypes(import_prop_types126.default.number.isRequired, function(props) {
    var count = props.count, page = props.page, rowsPerPage = props.rowsPerPage;
    if (count === -1) {
      return null;
    }
    var newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    if (page < 0 || page > newLastPage) {
      return new Error("Material-UI: The page prop of a TablePagination is out of range " + "(0 to ".concat(newLastPage, ", but page is ").concat(page, ")."));
    }
    return null;
  }),
  /**
   * The number of rows per page.
   */
  rowsPerPage: import_prop_types126.default.number.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   */
  rowsPerPageOptions: import_prop_types126.default.array,
  /**
   * Props applied to the rows per page [`Select`](/api/select/) element.
   */
  SelectProps: import_prop_types126.default.object
} : void 0;
var TablePagination_default = withStyles_default(styles179, {
  name: "MuiTablePagination"
})(TablePagination);

// node_modules/@material-ui/core/esm/TableRow/TableRow.js
init_extends();
var React157 = __toESM(require_react());
var import_prop_types127 = __toESM(require_prop_types());
init_clsx_m();
var styles181 = function styles182(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: "inherit",
      display: "table-row",
      verticalAlign: "middle",
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      "&$hover:hover": {
        backgroundColor: theme.palette.action.hover
      },
      "&$selected, &$selected:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.selectedOpacity)
      }
    },
    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {},
    /* Pseudo-class applied to the root element if `hover={true}`. */
    hover: {},
    /* Styles applied to the root element if table variant="head". */
    head: {},
    /* Styles applied to the root element if table variant="footer". */
    footer: {}
  };
};
var defaultComponent5 = "tr";
var TableRow = React157.forwardRef(function TableRow2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? defaultComponent5 : _props$component, _props$hover = props.hover, hover = _props$hover === void 0 ? false : _props$hover, _props$selected = props.selected, selected = _props$selected === void 0 ? false : _props$selected, other = _objectWithoutProperties(props, ["classes", "className", "component", "hover", "selected"]);
  var tablelvl24 = React157.useContext(Tablelvl2Context_default);
  return React157.createElement(Component6, _extends({
    ref,
    className: clsx_m_default(classes.root, className, tablelvl24 && {
      "head": classes.head,
      "footer": classes.footer
    }[tablelvl24.variant], hover && classes.hover, selected && classes.selected),
    role: Component6 === defaultComponent5 ? null : "row"
  }, other));
});
true ? TableRow.propTypes = {
  /**
   * Should be valid <tr> children such as `TableCell`.
   */
  children: import_prop_types127.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types127.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types127.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types127.default.elementType,
  /**
   * If `true`, the table row will shade on hover.
   */
  hover: import_prop_types127.default.bool,
  /**
   * If `true`, the table row will have the selected shading.
   */
  selected: import_prop_types127.default.bool
} : void 0;
var TableRow_default = withStyles_default(styles181, {
  name: "MuiTableRow"
})(TableRow);

// node_modules/@material-ui/core/esm/TableSortLabel/TableSortLabel.js
init_extends();
var React159 = __toESM(require_react());
var import_prop_types128 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDownward.js
var React158 = __toESM(require_react());
var ArrowDownward_default = createSvgIcon(React158.createElement("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), "ArrowDownward");

// node_modules/@material-ui/core/esm/TableSortLabel/TableSortLabel.js
var styles183 = function styles184(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "flex-start",
      flexDirection: "inherit",
      alignItems: "center",
      "&:focus": {
        color: theme.palette.text.secondary
      },
      "&:hover": {
        color: theme.palette.text.secondary,
        "& $icon": {
          opacity: 0.5
        }
      },
      "&$active": {
        color: theme.palette.text.primary,
        // && instead of & is a workaround for https://github.com/cssinjs/jss/issues/1045
        "&& $icon": {
          opacity: 1,
          color: theme.palette.text.secondary
        }
      }
    },
    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},
    /* Styles applied to the icon component. */
    icon: {
      fontSize: 18,
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: theme.transitions.create(["opacity", "transform"], {
        duration: theme.transitions.duration.shorter
      }),
      userSelect: "none"
    },
    /* Styles applied to the icon component if `direction="desc"`. */
    iconDirectionDesc: {
      transform: "rotate(0deg)"
    },
    /* Styles applied to the icon component if `direction="asc"`. */
    iconDirectionAsc: {
      transform: "rotate(180deg)"
    }
  };
};
var TableSortLabel = React159.forwardRef(function TableSortLabel2(props, ref) {
  var _props$active = props.active, active = _props$active === void 0 ? false : _props$active, children = props.children, classes = props.classes, className = props.className, _props$direction = props.direction, direction = _props$direction === void 0 ? "asc" : _props$direction, _props$hideSortIcon = props.hideSortIcon, hideSortIcon = _props$hideSortIcon === void 0 ? false : _props$hideSortIcon, _props$IconComponent = props.IconComponent, IconComponent = _props$IconComponent === void 0 ? ArrowDownward_default : _props$IconComponent, other = _objectWithoutProperties(props, ["active", "children", "classes", "className", "direction", "hideSortIcon", "IconComponent"]);
  return React159.createElement(ButtonBase_default, _extends({
    className: clsx_m_default(classes.root, className, active && classes.active),
    component: "span",
    disableRipple: true,
    ref
  }, other), children, hideSortIcon && !active ? null : React159.createElement(IconComponent, {
    className: clsx_m_default(classes.icon, classes["iconDirection".concat(capitalize(direction))])
  }));
});
true ? TableSortLabel.propTypes = {
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   */
  active: import_prop_types128.default.bool,
  /**
   * Label contents, the arrow will be appended automatically.
   */
  children: import_prop_types128.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types128.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types128.default.string,
  /**
   * The current sort direction.
   */
  direction: import_prop_types128.default.oneOf(["asc", "desc"]),
  /**
   * Hide sort icon when active is false.
   */
  hideSortIcon: import_prop_types128.default.bool,
  /**
   * Sort icon to use.
   */
  IconComponent: import_prop_types128.default.elementType
} : void 0;
var TableSortLabel_default = withStyles_default(styles183, {
  name: "MuiTableSortLabel"
})(TableSortLabel);

// node_modules/@material-ui/core/esm/Tabs/Tabs.js
init_extends();
var React163 = __toESM(require_react());
var import_react_is12 = __toESM(require_react_is());
var import_prop_types132 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@material-ui/core/esm/utils/scrollLeft.js
var cachedType;
function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }
  var dummy = document.createElement("div");
  var container = document.createElement("div");
  container.style.width = "10px";
  container.style.height = "1px";
  dummy.appendChild(container);
  dummy.dir = "rtl";
  dummy.style.fontSize = "14px";
  dummy.style.width = "4px";
  dummy.style.height = "1px";
  dummy.style.position = "absolute";
  dummy.style.top = "-1000px";
  dummy.style.overflow = "scroll";
  document.body.appendChild(dummy);
  cachedType = "reverse";
  if (dummy.scrollLeft > 0) {
    cachedType = "default";
  } else {
    dummy.scrollLeft = 1;
    if (dummy.scrollLeft === 0) {
      cachedType = "negative";
    }
  }
  document.body.removeChild(dummy);
  return cachedType;
}
function getNormalizedScrollLeft(element, direction) {
  var scrollLeft = element.scrollLeft;
  if (direction !== "rtl") {
    return scrollLeft;
  }
  var type = detectScrollType();
  switch (type) {
    case "negative":
      return element.scrollWidth - element.clientWidth + scrollLeft;
    case "reverse":
      return element.scrollWidth - element.clientWidth - scrollLeft;
    default:
      return scrollLeft;
  }
}

// node_modules/@material-ui/core/esm/internal/animate.js
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var cb = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : function() {
  };
  var _options$ease = options.ease, ease = _options$ease === void 0 ? easeInOutSin : _options$ease, _options$duration = options.duration, duration2 = _options$duration === void 0 ? 300 : _options$duration;
  var start = null;
  var from = element[property];
  var cancelled = false;
  var cancel = function cancel2() {
    cancelled = true;
  };
  var step = function step2(timestamp) {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    var time = Math.min(1, (timestamp - start) / duration2);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(function() {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step2);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}

// node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js
init_extends();
var React160 = __toESM(require_react());
var import_prop_types129 = __toESM(require_prop_types());
var styles185 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ScrollbarSize(props) {
  var onChange = props.onChange, other = _objectWithoutProperties(props, ["onChange"]);
  var scrollbarHeight = React160.useRef();
  var nodeRef = React160.useRef(null);
  var setMeasurements = function setMeasurements2() {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  React160.useEffect(function() {
    var handleResize = debounce(function() {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  React160.useEffect(function() {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return React160.createElement("div", _extends({
    style: styles185,
    ref: nodeRef
  }, other));
}
true ? ScrollbarSize.propTypes = {
  onChange: import_prop_types129.default.func.isRequired
} : void 0;

// node_modules/@material-ui/core/esm/Tabs/TabIndicator.js
init_extends();
var React161 = __toESM(require_react());
var import_prop_types130 = __toESM(require_prop_types());
init_clsx_m();
var styles186 = function styles187(theme) {
  return {
    root: {
      position: "absolute",
      height: 2,
      bottom: 0,
      width: "100%",
      transition: theme.transitions.create()
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    vertical: {
      height: "100%",
      width: 2,
      right: 0
    }
  };
};
var TabIndicator = React161.forwardRef(function TabIndicator2(props, ref) {
  var classes = props.classes, className = props.className, color = props.color, orientation = props.orientation, other = _objectWithoutProperties(props, ["classes", "className", "color", "orientation"]);
  return React161.createElement("span", _extends({
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(color))], className, orientation === "vertical" && classes.vertical),
    ref
  }, other));
});
true ? TabIndicator.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types130.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types130.default.string,
  /**
   * @ignore
   * The color of the tab indicator.
   */
  color: import_prop_types130.default.oneOf(["primary", "secondary"]).isRequired,
  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: import_prop_types130.default.oneOf(["horizontal", "vertical"]).isRequired
} : void 0;
var TabIndicator_default = withStyles_default(styles186, {
  name: "PrivateTabIndicator"
})(TabIndicator);

// node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js
init_extends();
var React162 = __toESM(require_react());
var import_prop_types131 = __toESM(require_prop_types());
init_clsx_m();
var styles188 = {
  /* Styles applied to the root element. */
  root: {
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    "&$disabled": {
      opacity: 0
    }
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    width: "100%",
    height: 40,
    "& svg": {
      transform: "rotate(90deg)"
    }
  },
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {}
};
var _ref5 = React162.createElement(KeyboardArrowLeft_default, {
  fontSize: "small"
});
var _ref23 = React162.createElement(KeyboardArrowRight_default, {
  fontSize: "small"
});
var TabScrollButton = React162.forwardRef(function TabScrollButton2(props, ref) {
  var classes = props.classes, classNameProp = props.className, direction = props.direction, orientation = props.orientation, disabled = props.disabled, other = _objectWithoutProperties(props, ["classes", "className", "direction", "orientation", "disabled"]);
  return React162.createElement(ButtonBase_default, _extends({
    component: "div",
    className: clsx_m_default(classes.root, classNameProp, disabled && classes.disabled, orientation === "vertical" && classes.vertical),
    ref,
    role: null,
    tabIndex: null
  }, other), direction === "left" ? _ref5 : _ref23);
});
true ? TabScrollButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types131.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types131.default.object,
  /**
   * @ignore
   */
  className: import_prop_types131.default.string,
  /**
   * Which direction should the button indicate?
   */
  direction: import_prop_types131.default.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the element will be disabled.
   */
  disabled: import_prop_types131.default.bool,
  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: import_prop_types131.default.oneOf(["horizontal", "vertical"]).isRequired
} : void 0;
var TabScrollButton_default = withStyles_default(styles188, {
  name: "MuiTabScrollButton"
})(TabScrollButton);

// node_modules/@material-ui/core/esm/Tabs/Tabs.js
var styles189 = function styles190(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: "hidden",
      minHeight: 48,
      WebkitOverflowScrolling: "touch",
      // Add iOS momentum scrolling.
      display: "flex"
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: "column"
    },
    /* Styles applied to the flex container element. */
    flexContainer: {
      display: "flex"
    },
    /* Styles applied to the flex container element if `orientation="vertical"`. */
    flexContainerVertical: {
      flexDirection: "column"
    },
    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
      justifyContent: "center"
    },
    /* Styles applied to the tablist element. */
    scroller: {
      position: "relative",
      display: "inline-block",
      flex: "1 1 auto",
      whiteSpace: "nowrap"
    },
    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
      overflowX: "hidden",
      width: "100%"
    },
    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
      overflowX: "scroll",
      // Hide dimensionless scrollbar on MacOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    },
    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},
    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: _defineProperty({}, theme.breakpoints.down("xs"), {
      display: "none"
    }),
    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};
var Tabs = React163.forwardRef(function Tabs2(props, ref) {
  var ariaLabel = props["aria-label"], ariaLabelledBy = props["aria-labelledby"], action = props.action, _props$centered = props.centered, centered = _props$centered === void 0 ? false : _props$centered, childrenProp = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component6 = _props$component === void 0 ? "div" : _props$component, _props$indicatorColor = props.indicatorColor, indicatorColor = _props$indicatorColor === void 0 ? "secondary" : _props$indicatorColor, onChange = props.onChange, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, _props$ScrollButtonCo = props.ScrollButtonComponent, ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? TabScrollButton_default : _props$ScrollButtonCo, _props$scrollButtons = props.scrollButtons, scrollButtons = _props$scrollButtons === void 0 ? "auto" : _props$scrollButtons, selectionFollowsFocus = props.selectionFollowsFocus, _props$TabIndicatorPr = props.TabIndicatorProps, TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr, TabScrollButtonProps = props.TabScrollButtonProps, _props$textColor = props.textColor, textColor = _props$textColor === void 0 ? "inherit" : _props$textColor, value = props.value, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant"]);
  var theme = useTheme2();
  var scrollable = variant === "scrollable";
  var isRtl = theme.direction === "rtl";
  var vertical = orientation === "vertical";
  var scrollStart = vertical ? "scrollTop" : "scrollLeft";
  var start = vertical ? "top" : "left";
  var end = vertical ? "bottom" : "right";
  var clientSize = vertical ? "clientHeight" : "clientWidth";
  var size = vertical ? "height" : "width";
  if (true) {
    if (centered && scrollable) {
      console.error('Material-UI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
    }
  }
  var _React$useState = React163.useState(false), mounted = _React$useState[0], setMounted = _React$useState[1];
  var _React$useState2 = React163.useState({}), indicatorStyle = _React$useState2[0], setIndicatorStyle = _React$useState2[1];
  var _React$useState3 = React163.useState({
    start: false,
    end: false
  }), displayScroll = _React$useState3[0], setDisplayScroll = _React$useState3[1];
  var _React$useState4 = React163.useState({
    overflow: "hidden",
    marginBottom: null
  }), scrollerStyle = _React$useState4[0], setScrollerStyle = _React$useState4[1];
  var valueToIndex = /* @__PURE__ */ new Map();
  var tabsRef = React163.useRef(null);
  var tabListRef = React163.useRef(null);
  var getTabsMeta = function getTabsMeta2() {
    var tabsNode = tabsRef.current;
    var tabsMeta;
    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    var tabMeta;
    if (tabsNode && value !== false) {
      var _children = tabListRef.current.children;
      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];
        if (true) {
          if (!tab) {
            console.error(["Material-UI: The value provided to the Tabs component is invalid.", "None of the Tabs' children match with `".concat(value, "`."), valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(valueToIndex.keys()).join(", "), ".") : null].join("\n"));
          }
        }
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  var updateIndicatorState = useEventCallback(function() {
    var _newIndicatorStyle;
    var _getTabsMeta = getTabsMeta(), tabsMeta = _getTabsMeta.tabsMeta, tabMeta = _getTabsMeta.tabMeta;
    var startValue = 0;
    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = tabMeta.left - tabsMeta.left + correction;
      }
    }
    var newIndicatorStyle = (_newIndicatorStyle = {}, _defineProperty(_newIndicatorStyle, start, startValue), _defineProperty(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);
    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  var scroll = function scroll2(scrollValue) {
    animate(scrollStart, tabsRef.current, scrollValue);
  };
  var moveTabsScroll = function moveTabsScroll2(delta) {
    var scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
      scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
    }
    scroll(scrollValue);
  };
  var handleStartScrollClick = function handleStartScrollClick2() {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };
  var handleEndScrollClick = function handleEndScrollClick2() {
    moveTabsScroll(tabsRef.current[clientSize]);
  };
  var handleScrollbarSizeChange = React163.useCallback(function(scrollbarHeight) {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight
    });
  }, []);
  var getConditionalElements = function getConditionalElements2() {
    var conditionalElements2 = {};
    conditionalElements2.scrollbarSizeListener = scrollable ? React163.createElement(ScrollbarSize, {
      className: classes.scrollable,
      onChange: handleScrollbarSizeChange
    }) : null;
    var scrollButtonsActive = displayScroll.start || displayScroll.end;
    var showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === "desktop" || scrollButtons === "on");
    conditionalElements2.scrollButtonStart = showScrollButtons ? React163.createElement(ScrollButtonComponent, _extends({
      orientation,
      direction: isRtl ? "right" : "left",
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start,
      className: clsx_m_default(classes.scrollButtons, scrollButtons !== "on" && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    conditionalElements2.scrollButtonEnd = showScrollButtons ? React163.createElement(ScrollButtonComponent, _extends({
      orientation,
      direction: isRtl ? "left" : "right",
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end,
      className: clsx_m_default(classes.scrollButtons, scrollButtons !== "on" && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    return conditionalElements2;
  };
  var scrollSelectedIntoView = useEventCallback(function() {
    var _getTabsMeta2 = getTabsMeta(), tabsMeta = _getTabsMeta2.tabsMeta, tabMeta = _getTabsMeta2.tabMeta;
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start] < tabsMeta[start]) {
      var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(_nextScrollStart);
    }
  });
  var updateScrollButtonState = useEventCallback(function() {
    if (scrollable && scrollButtons !== "off") {
      var _tabsRef$current = tabsRef.current, scrollTop = _tabsRef$current.scrollTop, scrollHeight = _tabsRef$current.scrollHeight, clientHeight = _tabsRef$current.clientHeight, scrollWidth = _tabsRef$current.scrollWidth, clientWidth = _tabsRef$current.clientWidth;
      var showStartScroll;
      var showEndScroll;
      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        var scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction);
        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }
      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  React163.useEffect(function() {
    var handleResize = debounce(function() {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = ownerWindow(tabsRef.current);
    win.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      win.removeEventListener("resize", handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = React163.useCallback(debounce(function() {
    updateScrollButtonState();
  }));
  React163.useEffect(function() {
    return function() {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  React163.useEffect(function() {
    setMounted(true);
  }, []);
  React163.useEffect(function() {
    updateIndicatorState();
    updateScrollButtonState();
  });
  React163.useEffect(function() {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);
  React163.useImperativeHandle(action, function() {
    return {
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var indicator = React163.createElement(TabIndicator_default, _extends({
    className: classes.indicator,
    orientation,
    color: indicatorColor
  }, TabIndicatorProps, {
    style: _extends({}, indicatorStyle, TabIndicatorProps.style)
  }));
  var childIndex = 0;
  var children = React163.Children.map(childrenProp, function(child) {
    if (!React163.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is12.isFragment)(child)) {
        console.error(["Material-UI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    var childValue = child.props.value === void 0 ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return React163.cloneElement(child, {
      fullWidth: variant === "fullWidth",
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue
    });
  });
  var handleKeyDown2 = function handleKeyDown3(event) {
    var target = event.target;
    var role = target.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    var newFocusTarget = null;
    var previousItemKey = orientation !== "vertical" ? "ArrowLeft" : "ArrowUp";
    var nextItemKey = orientation !== "vertical" ? "ArrowRight" : "ArrowDown";
    if (orientation !== "vertical" && theme.direction === "rtl") {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;
      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;
      case "Home":
        newFocusTarget = tabListRef.current.firstChild;
        break;
      case "End":
        newFocusTarget = tabListRef.current.lastChild;
        break;
      default:
        break;
    }
    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };
  var conditionalElements = getConditionalElements();
  return React163.createElement(Component6, _extends({
    className: clsx_m_default(classes.root, className, vertical && classes.vertical),
    ref
  }, other), conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, React163.createElement("div", {
    className: clsx_m_default(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
    style: scrollerStyle,
    ref: tabsRef,
    onScroll: handleTabsScroll
  }, React163.createElement("div", {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    className: clsx_m_default(classes.flexContainer, vertical && classes.flexContainerVertical, centered && !scrollable && classes.centered),
    onKeyDown: handleKeyDown2,
    ref: tabListRef,
    role: "tablist"
  }, children), mounted && indicator), conditionalElements.scrollButtonEnd);
});
true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: refType_default,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": import_prop_types132.default.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": import_prop_types132.default.string,
  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: import_prop_types132.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types132.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types132.default.object,
  /**
   * @ignore
   */
  className: import_prop_types132.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types132.default.elementType,
  /**
   * Determines the color of the indicator.
   */
  indicatorColor: import_prop_types132.default.oneOf(["primary", "secondary"]),
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child (number)
   */
  onChange: import_prop_types132.default.func,
  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: import_prop_types132.default.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: import_prop_types132.default.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `desktop` will only present them on medium and larger viewports.
   * - `on` will always present them.
   * - `off` will never present them.
   */
  scrollButtons: import_prop_types132.default.oneOf(["auto", "desktop", "off", "on"]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: import_prop_types132.default.bool,
  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps: import_prop_types132.default.object,
  /**
   * Props applied to the [`TabScrollButton`](/api/tab-scroll-button/) element.
   */
  TabScrollButtonProps: import_prop_types132.default.object,
  /**
   * Determines the color of the `Tab`.
   */
  textColor: import_prop_types132.default.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: import_prop_types132.default.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: import_prop_types132.default.oneOf(["fullWidth", "scrollable", "standard"])
} : void 0;
var Tabs_default = withStyles_default(styles189, {
  name: "MuiTabs"
})(Tabs);

// node_modules/@material-ui/core/esm/TextField/TextField.js
init_extends();
var React164 = __toESM(require_react());
var import_prop_types133 = __toESM(require_prop_types());
init_clsx_m();
var variantComponent = {
  standard: Input_default,
  filled: FilledInput_default,
  outlined: OutlinedInput_default
};
var styles191 = {
  /* Styles applied to the root element. */
  root: {}
};
var TextField = React164.forwardRef(function TextField2(props, ref) {
  var autoComplete = props.autoComplete, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, defaultValue = props.defaultValue, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$error = props.error, error = _props$error === void 0 ? false : _props$error, FormHelperTextProps = props.FormHelperTextProps, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, helperText = props.helperText, hiddenLabel = props.hiddenLabel, id = props.id, InputLabelProps = props.InputLabelProps, inputProps = props.inputProps, InputProps = props.InputProps, inputRef = props.inputRef, label = props.label, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, placeholder = props.placeholder, _props$required = props.required, required = _props$required === void 0 ? false : _props$required, rows = props.rows, rowsMax = props.rowsMax, maxRows = props.maxRows, minRows = props.minRows, _props$select = props.select, select = _props$select === void 0 ? false : _props$select, SelectProps = props.SelectProps, type = props.type, value = props.value, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "maxRows", "minRows", "select", "SelectProps", "type", "value", "variant"]);
  if (true) {
    if (select && !children) {
      console.error("Material-UI: `children` must be passed when using the `TextField` component with `select`.");
    }
  }
  var InputMore = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      InputMore.notched = InputLabelProps.shrink;
    }
    if (label) {
      var _InputLabelProps$requ;
      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = React164.createElement(React164.Fragment, null, label, displayRequired && " *");
    }
  }
  if (select) {
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = void 0;
    }
    InputMore["aria-describedby"] = void 0;
  }
  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : void 0;
  var inputLabelId = label && id ? "".concat(id, "-label") : void 0;
  var InputComponent = variantComponent[variant];
  var InputElement = React164.createElement(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    rowsMax,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return React164.createElement(FormControl_default, _extends({
    className: clsx_m_default(classes.root, className),
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    ref,
    required,
    color,
    variant
  }, other), label && React164.createElement(InputLabel_default, _extends({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? React164.createElement(Select_default, _extends({
    "aria-describedby": helperTextId,
    id,
    labelId: inputLabelId,
    value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && React164.createElement(FormHelperText_default, _extends({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
true ? TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types133.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types133.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types133.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types133.default.object,
  /**
   * @ignore
   */
  className: import_prop_types133.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types133.default.oneOf(["primary", "secondary"]),
  /**
   * The default value of the `input` element.
   */
  defaultValue: import_prop_types133.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types133.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: import_prop_types133.default.bool,
  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types133.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types133.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types133.default.node,
  /**
   * @ignore
   */
  hiddenLabel: import_prop_types133.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types133.default.string,
  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: import_prop_types133.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types133.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types133.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types133.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: import_prop_types133.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types133.default.oneOfType([import_prop_types133.default.number, import_prop_types133.default.string]),
  /**
   * Minimum number of rows to display.
   */
  minRows: import_prop_types133.default.oneOfType([import_prop_types133.default.number, import_prop_types133.default.string]),
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: import_prop_types133.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types133.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types133.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types133.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types133.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types133.default.string,
  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required: import_prop_types133.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   * @deprecated Use `minRows` instead.
   */
  rows: import_prop_types133.default.oneOfType([import_prop_types133.default.number, import_prop_types133.default.string]),
  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: import_prop_types133.default.oneOfType([import_prop_types133.default.number, import_prop_types133.default.string]),
  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: import_prop_types133.default.bool,
  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps: import_prop_types133.default.object,
  /**
   * The size of the text field.
   */
  size: import_prop_types133.default.oneOf(["medium", "small"]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types133.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types133.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types133.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var TextField_default = withStyles_default(styles191, {
  name: "MuiTextField"
})(TextField);

// node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
init_extends();
var React165 = __toESM(require_react());
var ReactDOM14 = __toESM(require_react_dom());
var import_prop_types134 = __toESM(require_prop_types());
init_clsx_m();
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "0 100%"
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "100% 0"
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "100% 100%"
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "0 0"
      }
    }
  };
}
var styles192 = function styles193(theme) {
  return {
    /* Styles applied to the Popper component. */
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: "none"
      // disable jss-rtl plugin
    },
    /* Styles applied to the Popper component if `interactive={true}`. */
    popperInteractive: {
      pointerEvents: "auto"
    },
    /* Styles applied to the Popper component if `arrow={true}`. */
    popperArrow: arrowGenerator(),
    /* Styles applied to the tooltip (label wrapper) element. */
    tooltip: {
      backgroundColor: alpha(theme.palette.grey[700], 0.9),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      padding: "4px 8px",
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(round(14 / 10), "em"),
      maxWidth: 300,
      wordWrap: "break-word",
      fontWeight: theme.typography.fontWeightMedium
    },
    /* Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
    tooltipArrow: {
      position: "relative",
      margin: "0"
    },
    /* Styles applied to the arrow element. */
    arrow: {
      overflow: "hidden",
      position: "absolute",
      width: "1em",
      height: "0.71em",
      boxSizing: "border-box",
      color: alpha(theme.palette.grey[700], 0.9),
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)"
      }
    },
    /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
    touch: {
      padding: "8px 16px",
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(round(16 / 14), "em"),
      fontWeight: theme.typography.fontWeightRegular
    },
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
    tooltipPlacementLeft: _defineProperty({
      transformOrigin: "right center",
      margin: "0 24px "
    }, theme.breakpoints.up("sm"), {
      margin: "0 14px"
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
    tooltipPlacementRight: _defineProperty({
      transformOrigin: "left center",
      margin: "0 24px"
    }, theme.breakpoints.up("sm"), {
      margin: "0 14px"
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
    tooltipPlacementTop: _defineProperty({
      transformOrigin: "center bottom",
      margin: "24px 0"
    }, theme.breakpoints.up("sm"), {
      margin: "14px 0"
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
    tooltipPlacementBottom: _defineProperty({
      transformOrigin: "center top",
      margin: "24px 0"
    }, theme.breakpoints.up("sm"), {
      margin: "14px 0"
    })
  };
};
var hystersisOpen = false;
var hystersisTimer = null;
var Tooltip = React165.forwardRef(function Tooltip2(props, ref) {
  var _props$arrow = props.arrow, arrow2 = _props$arrow === void 0 ? false : _props$arrow, children = props.children, classes = props.classes, _props$disableFocusLi = props.disableFocusListener, disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi, _props$disableHoverLi = props.disableHoverListener, disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi, _props$disableTouchLi = props.disableTouchListener, disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi, _props$enterDelay = props.enterDelay, enterDelay = _props$enterDelay === void 0 ? 100 : _props$enterDelay, _props$enterNextDelay = props.enterNextDelay, enterNextDelay = _props$enterNextDelay === void 0 ? 0 : _props$enterNextDelay, _props$enterTouchDela = props.enterTouchDelay, enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela, idProp = props.id, _props$interactive = props.interactive, interactive = _props$interactive === void 0 ? false : _props$interactive, _props$leaveDelay = props.leaveDelay, leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay, _props$leaveTouchDela = props.leaveTouchDelay, leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela, onClose = props.onClose, onOpen = props.onOpen, openProp = props.open, _props$placement = props.placement, placement = _props$placement === void 0 ? "bottom" : _props$placement, _props$PopperComponen = props.PopperComponent, PopperComponent = _props$PopperComponen === void 0 ? Popper_default : _props$PopperComponen, PopperProps = props.PopperProps, title = props.title, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow_default : _props$TransitionComp, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);
  var theme = useTheme2();
  var _React$useState = React165.useState(), childNode = _React$useState[0], setChildNode = _React$useState[1];
  var _React$useState2 = React165.useState(null), arrowRef = _React$useState2[0], setArrowRef = _React$useState2[1];
  var ignoreNonTouchEvents = React165.useRef(false);
  var closeTimer = React165.useRef();
  var enterTimer = React165.useRef();
  var leaveTimer = React165.useRef();
  var touchTimer = React165.useRef();
  var _useControlled = useControlled({
    controlled: openProp,
    default: false,
    name: "Tooltip",
    state: "open"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), openState = _useControlled2[0], setOpenState = _useControlled2[1];
  var open = openState;
  if (true) {
    var _React$useRef = React165.useRef(openProp !== void 0), isControlled = _React$useRef.current;
    React165.useEffect(function() {
      if (childNode && childNode.disabled && !isControlled && title !== "" && childNode.tagName.toLowerCase() === "button") {
        console.error(["Material-UI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join("\n"));
      }
    }, [title, childNode, isControlled]);
  }
  var id = useId(idProp);
  React165.useEffect(function() {
    return function() {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);
  var handleOpen = function handleOpen2(event) {
    clearTimeout(hystersisTimer);
    hystersisOpen = true;
    setOpenState(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  var handleEnter = function handleEnter2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      var childrenProps2 = children.props;
      if (event.type === "mouseover" && childrenProps2.onMouseOver && forward) {
        childrenProps2.onMouseOver(event);
      }
      if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
        return;
      }
      if (childNode) {
        childNode.removeAttribute("title");
      }
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      if (enterDelay || hystersisOpen && enterNextDelay) {
        event.persist();
        enterTimer.current = setTimeout(function() {
          handleOpen(event);
        }, hystersisOpen ? enterNextDelay : enterDelay);
      } else {
        handleOpen(event);
      }
    };
  };
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState3 = React165.useState(false), childIsFocusVisible = _React$useState3[0], setChildIsFocusVisible = _React$useState3[1];
  var handleBlur = function handleBlur2() {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };
  var handleFocus = function handleFocus2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      if (!childNode) {
        setChildNode(event.currentTarget);
      }
      if (isFocusVisible2(event)) {
        setChildIsFocusVisible(true);
        handleEnter()(event);
      }
      var childrenProps2 = children.props;
      if (childrenProps2.onFocus && forward) {
        childrenProps2.onFocus(event);
      }
    };
  };
  var handleClose = function handleClose2(event) {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(function() {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);
    if (onClose) {
      onClose(event);
    }
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function() {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  };
  var handleLeave = function handleLeave2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      var childrenProps2 = children.props;
      if (event.type === "blur") {
        if (childrenProps2.onBlur && forward) {
          childrenProps2.onBlur(event);
        }
        handleBlur();
      }
      if (event.type === "mouseleave" && childrenProps2.onMouseLeave && event.currentTarget === childNode) {
        childrenProps2.onMouseLeave(event);
      }
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      event.persist();
      leaveTimer.current = setTimeout(function() {
        handleClose(event);
      }, leaveDelay);
    };
  };
  var detectTouchStart = function detectTouchStart2(event) {
    ignoreNonTouchEvents.current = true;
    var childrenProps2 = children.props;
    if (childrenProps2.onTouchStart) {
      childrenProps2.onTouchStart(event);
    }
  };
  var handleTouchStart = function handleTouchStart2(event) {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(function() {
      handleEnter()(event);
    }, enterTouchDelay);
  };
  var handleTouchEnd = function handleTouchEnd2(event) {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function() {
      handleClose(event);
    }, leaveTouchDelay);
  };
  var handleUseRef = useForkRef(setChildNode, ref);
  var handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
  var handleOwnRef = React165.useCallback(function(instance) {
    setRef(handleFocusRef, ReactDOM14.findDOMNode(instance));
  }, [handleFocusRef]);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  if (title === "") {
    open = false;
  }
  var shouldShowNativeTitle = !open && !disableHoverListener;
  var childrenProps = _extends({
    "aria-describedby": open ? id : null,
    title: shouldShowNativeTitle && typeof title === "string" ? title : null
  }, other, children.props, {
    className: clsx_m_default(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  });
  var interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter();
    childrenProps.onMouseLeave = handleLeave();
    if (interactive) {
      interactiveWrapperListeners.onMouseOver = handleEnter(false);
      interactiveWrapperListeners.onMouseLeave = handleLeave(false);
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus();
    childrenProps.onBlur = handleLeave();
    if (interactive) {
      interactiveWrapperListeners.onFocus = handleFocus(false);
      interactiveWrapperListeners.onBlur = handleLeave(false);
    }
  }
  if (true) {
    if (children.props.title) {
      console.error(["Material-UI: You have provided a `title` prop to the child of <Tooltip />.", "Remove this title prop `".concat(children.props.title, "` or the Tooltip component.")].join("\n"));
    }
  }
  var mergedPopperProps = React165.useMemo(function() {
    return deepmerge({
      popperOptions: {
        modifiers: {
          arrow: {
            enabled: Boolean(arrowRef),
            element: arrowRef
          }
        }
      }
    }, PopperProps);
  }, [arrowRef, PopperProps]);
  return React165.createElement(React165.Fragment, null, React165.cloneElement(children, childrenProps), React165.createElement(PopperComponent, _extends({
    className: clsx_m_default(classes.popper, interactive && classes.popperInteractive, arrow2 && classes.popperArrow),
    placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps["aria-describedby"],
    transition: true
  }, interactiveWrapperListeners, mergedPopperProps), function(_ref6) {
    var placementInner = _ref6.placement, TransitionPropsInner = _ref6.TransitionProps;
    return React165.createElement(TransitionComponent, _extends({
      timeout: theme.transitions.duration.shorter
    }, TransitionPropsInner, TransitionProps), React165.createElement("div", {
      className: clsx_m_default(classes.tooltip, classes["tooltipPlacement".concat(capitalize(placementInner.split("-")[0]))], ignoreNonTouchEvents.current && classes.touch, arrow2 && classes.tooltipArrow)
    }, title, arrow2 ? React165.createElement("span", {
      className: classes.arrow,
      ref: setArrowRef
    }) : null));
  }));
});
true ? Tooltip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, adds an arrow to the tooltip.
   */
  arrow: import_prop_types134.default.bool,
  /**
   * Tooltip reference element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types134.default.object,
  /**
   * @ignore
   */
  className: import_prop_types134.default.string,
  /**
   * Do not respond to focus events.
   */
  disableFocusListener: import_prop_types134.default.bool,
  /**
   * Do not respond to hover events.
   */
  disableHoverListener: import_prop_types134.default.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: import_prop_types134.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: import_prop_types134.default.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   */
  enterNextDelay: import_prop_types134.default.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: import_prop_types134.default.number,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: import_prop_types134.default.string,
  /**
   * Makes a tooltip interactive, i.e. will not close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   */
  interactive: import_prop_types134.default.bool,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: import_prop_types134.default.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: import_prop_types134.default.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types134.default.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types134.default.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: import_prop_types134.default.bool,
  /**
   * Tooltip placement.
   */
  placement: import_prop_types134.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   */
  PopperComponent: import_prop_types134.default.elementType,
  /**
   * Props applied to the [`Popper`](/api/popper/) element.
   */
  PopperProps: import_prop_types134.default.object,
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: import_prop_types134.default.node.isRequired,
  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: import_prop_types134.default.elementType,
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: import_prop_types134.default.object
} : void 0;
var Tooltip_default = withStyles_default(styles192, {
  name: "MuiTooltip",
  flip: false
})(Tooltip);

// node_modules/@material-ui/core/esm/useScrollTrigger/useScrollTrigger.js
init_extends();
var React166 = __toESM(require_react());
function defaultTrigger(store, options) {
  var _options$disableHyste = options.disableHysteresis, disableHysteresis = _options$disableHyste === void 0 ? false : _options$disableHyste, _options$threshold = options.threshold, threshold = _options$threshold === void 0 ? 100 : _options$threshold, target = options.target;
  var previous = store.current;
  if (target) {
    store.current = target.pageYOffset !== void 0 ? target.pageYOffset : target.scrollTop;
  }
  if (!disableHysteresis && previous !== void 0) {
    if (store.current < previous) {
      return false;
    }
  }
  return store.current > threshold;
}
var defaultTarget = typeof window !== "undefined" ? window : null;
function useScrollTrigger() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$getTrigger = options.getTrigger, getTrigger = _options$getTrigger === void 0 ? defaultTrigger : _options$getTrigger, _options$target = options.target, target = _options$target === void 0 ? defaultTarget : _options$target, other = _objectWithoutProperties(options, ["getTrigger", "target"]);
  var store = React166.useRef();
  var _React$useState = React166.useState(function() {
    return getTrigger(store, other);
  }), trigger = _React$useState[0], setTrigger = _React$useState[1];
  React166.useEffect(function() {
    var handleScroll = function handleScroll2() {
      setTrigger(getTrigger(store, _extends({
        target
      }, other)));
    };
    handleScroll();
    target.addEventListener("scroll", handleScroll);
    return function() {
      target.removeEventListener("scroll", handleScroll);
    };
  }, [target, getTrigger, JSON.stringify(other)]);
  return trigger;
}

// node_modules/@material-ui/core/esm/withMobileDialog/withMobileDialog.js
init_extends();
var React167 = __toESM(require_react());
var import_prop_types135 = __toESM(require_prop_types());
var warnedOnce9 = false;
var withMobileDialog = function withMobileDialog2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return function(Component6) {
    if (true) {
      if (!warnedOnce9) {
        console.warn(["Material-UI: The `withMobileDialog` function is deprecated.", "Head to https://material-ui.com/r/migration-v4/#dialog for a migration path."].join("\n"));
        warnedOnce9 = true;
      }
    }
    var _options$breakpoint = options.breakpoint, breakpoint = _options$breakpoint === void 0 ? "sm" : _options$breakpoint;
    function WithMobileDialog(props) {
      return React167.createElement(Component6, _extends({
        fullScreen: isWidthDown(breakpoint, props.width)
      }, props));
    }
    true ? WithMobileDialog.propTypes = {
      width: import_prop_types135.default.oneOf(["xs", "sm", "md", "lg", "xl"]).isRequired
    } : void 0;
    return withWidth_default()(WithMobileDialog);
  };
};
var withMobileDialog_default = withMobileDialog;

// node_modules/@material-ui/core/esm/Zoom/Zoom.js
init_extends();
var React168 = __toESM(require_react());
var import_prop_types136 = __toESM(require_prop_types());
var styles194 = {
  entering: {
    transform: "none"
  },
  entered: {
    transform: "none"
  }
};
var defaultTimeout3 = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
var Zoom = React168.forwardRef(function Zoom2(props, ref) {
  var children = props.children, _props$disableStrictM = props.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style = props.style, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? defaultTimeout3 : _props$timeout, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition_default : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var theme = useTheme2();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = React168.useRef(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : void 0, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref6 = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref24 = _slicedToArray(_ref6, 2), node = _ref24[0], isAppearing = _ref24[1];
        if (isAppearing === void 0) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    reflow(node);
    var transitionProps = getTransitionProps({
      style,
      timeout
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("transform", transitionProps);
    node.style.transition = theme.transitions.create("transform", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node) {
    var transitionProps = getTransitionProps({
      style,
      timeout
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("transform", transitionProps);
    node.style.transition = theme.transitions.create("transform", transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return React168.createElement(TransitionComponent, _extends({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout
  }, other), function(state, childProps) {
    return React168.cloneElement(children, _extends({
      style: _extends({
        transform: "scale(0)",
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles194[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
true ? Zoom.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: import_prop_types136.default.element,
  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: import_prop_types136.default.bool,
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types136.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types136.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types136.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types136.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types136.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types136.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types136.default.func,
  /**
   * @ignore
   */
  style: import_prop_types136.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: import_prop_types136.default.oneOfType([import_prop_types136.default.number, import_prop_types136.default.shape({
    appear: import_prop_types136.default.number,
    enter: import_prop_types136.default.number,
    exit: import_prop_types136.default.number
  })])
} : void 0;
var Zoom_default = Zoom;
export {
  Accordion_default as Accordion,
  AccordionActions_default as AccordionActions,
  AccordionDetails_default as AccordionDetails,
  AccordionSummary_default as AccordionSummary,
  AppBar_default as AppBar,
  Avatar_default as Avatar,
  Backdrop_default as Backdrop,
  Badge_default as Badge,
  BottomNavigation_default as BottomNavigation,
  BottomNavigationAction_default as BottomNavigationAction,
  Box_default as Box,
  Breadcrumbs_default as Breadcrumbs,
  Button_default as Button,
  ButtonBase_default as ButtonBase,
  ButtonGroup_default as ButtonGroup,
  Card_default as Card,
  CardActionArea_default as CardActionArea,
  CardActions_default as CardActions,
  CardContent_default as CardContent,
  CardHeader_default as CardHeader,
  CardMedia_default as CardMedia,
  Checkbox_default as Checkbox,
  Chip_default as Chip,
  CircularProgress_default as CircularProgress,
  ClickAwayListener_default as ClickAwayListener,
  Collapse_default as Collapse,
  Container_default as Container,
  CssBaseline_default as CssBaseline,
  Dialog_default as Dialog,
  DialogActions_default as DialogActions,
  DialogContent_default as DialogContent,
  DialogContentText_default as DialogContentText,
  DialogTitle_default as DialogTitle,
  Divider_default as Divider,
  Drawer_default as Drawer,
  ExpansionPanel_default as ExpansionPanel,
  ExpansionPanelActions_default as ExpansionPanelActions,
  ExpansionPanelDetails_default as ExpansionPanelDetails,
  ExpansionPanelSummary_default as ExpansionPanelSummary,
  Fab_default as Fab,
  Fade_default as Fade,
  FilledInput_default as FilledInput,
  FormControl_default as FormControl,
  FormControlLabel_default as FormControlLabel,
  FormGroup_default as FormGroup,
  FormHelperText_default as FormHelperText,
  FormLabel_default as FormLabel,
  Grid_default as Grid,
  GridList_default as GridList,
  GridListTile_default as GridListTile,
  GridListTileBar_default as GridListTileBar,
  Grow_default as Grow,
  Hidden_default as Hidden,
  Icon_default as Icon,
  IconButton_default as IconButton,
  ImageList_default as ImageList,
  ImageListItem_default as ImageListItem,
  ImageListItemBar_default as ImageListItemBar,
  Input_default as Input,
  InputAdornment_default as InputAdornment,
  InputBase_default as InputBase,
  InputLabel_default as InputLabel,
  LinearProgress_default as LinearProgress,
  Link_default as Link,
  List_default as List,
  ListItem_default as ListItem,
  ListItemAvatar_default as ListItemAvatar,
  ListItemIcon_default as ListItemIcon,
  ListItemSecondaryAction_default as ListItemSecondaryAction,
  ListItemText_default as ListItemText,
  ListSubheader_default as ListSubheader,
  Menu_default as Menu,
  MenuItem_default as MenuItem,
  MenuList_default as MenuList,
  MobileStepper_default as MobileStepper,
  Modal_default as Modal,
  ModalManager,
  ThemeProvider_default as MuiThemeProvider,
  NativeSelect_default as NativeSelect,
  NoSsr_default as NoSsr,
  OutlinedInput_default as OutlinedInput,
  Paper_default as Paper,
  Popover_default as Popover,
  Popper_default as Popper,
  Portal_default as Portal,
  Radio_default as Radio,
  RadioGroup_default as RadioGroup,
  RootRef_default as RootRef,
  Select_default as Select,
  ServerStyleSheets,
  Slide_default as Slide,
  Slider_default as Slider,
  Snackbar_default as Snackbar,
  SnackbarContent_default as SnackbarContent,
  Step_default as Step,
  StepButton_default as StepButton,
  StepConnector_default as StepConnector,
  StepContent_default as StepContent,
  StepIcon_default as StepIcon,
  StepLabel_default as StepLabel,
  Stepper_default as Stepper,
  StylesProvider,
  SvgIcon_default as SvgIcon,
  SwipeableDrawer_default as SwipeableDrawer,
  Switch_default as Switch,
  Tab_default as Tab,
  TabScrollButton_default as TabScrollButton,
  Table_default as Table,
  TableBody_default as TableBody,
  TableCell_default as TableCell,
  TableContainer_default as TableContainer,
  TableFooter_default as TableFooter,
  TableHead_default as TableHead,
  TablePagination_default as TablePagination,
  TableRow_default as TableRow,
  TableSortLabel_default as TableSortLabel,
  Tabs_default as Tabs,
  TextField_default as TextField,
  TextareaAutosize_default as TextareaAutosize,
  ThemeProvider_default as ThemeProvider,
  Toolbar_default as Toolbar,
  Tooltip_default as Tooltip,
  Typography_default as Typography,
  Unstable_TrapFocus_default as Unstable_TrapFocus,
  Zoom_default as Zoom,
  alpha,
  capitalize,
  colors_exports as colors,
  createChainedFunction,
  createGenerateClassName,
  createMuiTheme,
  createStyles,
  createSvgIcon,
  createTheme_default as createTheme,
  darken,
  debounce,
  decomposeColor,
  deprecatedPropType,
  duration,
  easing,
  emphasize,
  fade,
  getContrastRatio,
  getLuminance,
  hexToRgb,
  hslToRgb,
  isMuiElement,
  isWidthDown,
  isWidthUp,
  jssPreset,
  lighten,
  makeStyles_default as makeStyles,
  ownerDocument,
  ownerWindow,
  recomposeColor,
  requirePropFactory,
  responsiveFontSizes,
  rgbToHex,
  setRef,
  styleFunction,
  styled_default as styled,
  createMuiStrictModeTheme as unstable_createMuiStrictModeTheme,
  useId as unstable_useId,
  unsupportedProp,
  useControlled,
  useEventCallback,
  useForkRef,
  useFormControl2 as useFormControl,
  useIsFocusVisible,
  useMediaQuery,
  useRadioGroup,
  useScrollTrigger,
  useTheme2 as useTheme,
  withMobileDialog_default as withMobileDialog,
  withStyles_default as withStyles,
  withTheme_default as withTheme,
  withWidth_default as withWidth
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v17.0.2
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

popper.js/dist/esm/popper.js:
  (**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1-lts
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)

@material-ui/core/esm/index.js:
  (** @license Material-UI v4.12.3
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@material-ui_core.js.map
