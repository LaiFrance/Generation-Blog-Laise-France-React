import {
  require_createSvgIcon,
  require_interopRequireDefault
} from "./chunk-YC65DOQZ.js";
import "./chunk-HS6HKE2L.js";
import "./chunk-LRRCGXLC.js";
import "./chunk-YYX7X3JZ.js";
import "./chunk-KDDSKKNL.js";
import "./chunk-W5R4BLYK.js";
import "./chunk-45TRGAMM.js";
import "./chunk-FCC3OKLB.js";
import "./chunk-Q3FUGNM7.js";
import "./chunk-P5HM2BJK.js";
import "./chunk-3EGLH6BF.js";
import "./chunk-YV4R5YFF.js";
import "./chunk-XKNVU4QH.js";
import "./chunk-5COBNNV3.js";
import {
  require_jsx_runtime
} from "./chunk-J5VRWYBN.js";
import "./chunk-4VVCZ6SK.js";
import "./chunk-4XWBUGSW.js";
import "./chunk-VTW7HO3H.js";
import {
  require_react
} from "./chunk-4YX5GLBJ.js";
import {
  __commonJS
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/icons-material/Facebook.js
var require_Facebook = __commonJS({
  "node_modules/@mui/icons-material/Facebook.js"(exports) {
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var _default = (0, _createSvgIcon.default)((0, _jsxRuntime.jsx)("path", {
      d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
    }), "Facebook");
    exports.default = _default;
  }
});
export default require_Facebook();
//# sourceMappingURL=@mui_icons-material_Facebook.js.map
