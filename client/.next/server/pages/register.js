"use strict";
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Node Js\\Nexthero\\pages\\register.js";





const register = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        span: 24,
        className: "mt-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
          name: "basic",
          labelCol: {
            span: 8
          },
          wrapperCol: {
            span: 8
          },
          initialValues: {
            remember: true
          },
          onFinish: onFinish,
          onFinishFailed: onFinishFailed,
          autoComplete: "off",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
            label: "Name",
            name: "name",
            rules: [{
              required: true,
              message: 'Please input your name!'
            }],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 4
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
            label: "Email",
            name: "eamil",
            rules: [{
              required: true,
              message: 'Please input your email!'
            }],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 6
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
            label: "Password",
            name: "password",
            rules: [{
              required: true,
              message: 'Please input your password!'
            }],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input.Password, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 6
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
            wrapperCol: {
              offset: 8,
              span: 16
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
              type: "primary",
              htmlType: "submit",
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 6
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7Ozs7QUFFQSxNQUFNTSxRQUFRLEdBQUcsTUFBTTtBQUNwQixRQUFNQyxRQUFRLEdBQUlDLE1BQUQsSUFBWTtBQUN6QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsTUFBeEI7QUFDRCxHQUZIOztBQUlFLFFBQU1HLGNBQWMsR0FBSUMsU0FBRCxJQUFlO0FBQ3BDSCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRSxTQUF2QjtBQUNELEdBRkQ7O0FBSUYsc0JBQ0k7QUFBQSwyQkFDQSw4REFBQyxxQ0FBRDtBQUFBLDZCQUNGLDhEQUFDLHFDQUFEO0FBQUssWUFBSSxFQUFFLEVBQVg7QUFBZSxpQkFBUyxFQUFDLE1BQXpCO0FBQUEsK0JBQ0csOERBQUMsc0NBQUQ7QUFDSCxjQUFJLEVBQUMsT0FERjtBQUVILGtCQUFRLEVBQUU7QUFDUkMsWUFBQUEsSUFBSSxFQUFFO0FBREUsV0FGUDtBQUtILG9CQUFVLEVBQUU7QUFDVkEsWUFBQUEsSUFBSSxFQUFFO0FBREksV0FMVDtBQVFILHVCQUFhLEVBQUU7QUFDYkMsWUFBQUEsUUFBUSxFQUFFO0FBREcsV0FSWjtBQVdILGtCQUFRLEVBQUVQLFFBWFA7QUFZSCx3QkFBYyxFQUFFSSxjQVpiO0FBYUgsc0JBQVksRUFBQyxLQWJWO0FBQUEsa0NBZUwsOERBQUMsMkNBQUQ7QUFDSSxpQkFBSyxFQUFDLE1BRFY7QUFFSSxnQkFBSSxFQUFDLE1BRlQ7QUFHSSxpQkFBSyxFQUFFLENBQ0w7QUFDRUksY0FBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsY0FBQUEsT0FBTyxFQUFFO0FBRlgsYUFESyxDQUhYO0FBQUEsbUNBVUksOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZkssZUEyQkgsOERBQUMsMkNBQUQ7QUFDRSxpQkFBSyxFQUFDLE9BRFI7QUFFRSxnQkFBSSxFQUFDLE9BRlA7QUFHRSxpQkFBSyxFQUFFLENBQ0w7QUFDRUQsY0FBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsY0FBQUEsT0FBTyxFQUFFO0FBRlgsYUFESyxDQUhUO0FBQUEsbUNBVUUsOERBQUMsdUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBM0JHLGVBd0NILDhEQUFDLDJDQUFEO0FBQ0UsaUJBQUssRUFBQyxVQURSO0FBRUUsZ0JBQUksRUFBQyxVQUZQO0FBR0UsaUJBQUssRUFBRSxDQUNMO0FBQ0VELGNBQUFBLFFBQVEsRUFBRSxJQURaO0FBRUVDLGNBQUFBLE9BQU8sRUFBRTtBQUZYLGFBREssQ0FIVDtBQUFBLG1DQVVFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhDRyxlQXFESCw4REFBQywyQ0FBRDtBQUNFLHNCQUFVLEVBQUU7QUFDVkMsY0FBQUEsTUFBTSxFQUFFLENBREU7QUFFVkosY0FBQUEsSUFBSSxFQUFFO0FBRkksYUFEZDtBQUFBLG1DQU1FLDhEQUFDLHdDQUFEO0FBQVEsa0JBQUksRUFBQyxTQUFiO0FBQXVCLHNCQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBeUVGLENBbEZEOztBQW9GQSxpRUFBZVAsUUFBZjs7Ozs7Ozs7OztBQzFGQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV4dGhlcm8vLi9wYWdlcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9OZXh0aGVyby9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9OZXh0aGVyby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCByZWdpc3RlciA9ICgpID0+IHtcclxuICAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCB2YWx1ZXMpO1xyXG4gICAgIH07XHJcbiAgIFxyXG4gICAgIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xyXG4gICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZDonLCBlcnJvckluZm8pO1xyXG4gICAgIH07XHJcbiAgIFxyXG4gICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgIDxSb3c+XHJcbiAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgc3BhbjogOCxcclxuICAgICB9fVxyXG4gICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgIHNwYW46IDgsXHJcbiAgICAgfX1cclxuICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICByZW1lbWJlcjogdHJ1ZSxcclxuICAgICB9fVxyXG4gICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgPlxyXG4gICA8Rm9ybS5JdGVtXHJcbiAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgcnVsZXM9e1tcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBuYW1lIScsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICBdfVxyXG4gICAgID5cclxuICAgICAgIDxJbnB1dCAvPlxyXG4gICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgIDxGb3JtLkl0ZW1cclxuICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgbmFtZT1cImVhbWlsXCJcclxuICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgZW1haWwhJyxcclxuICAgICAgICAgfSxcclxuICAgICAgIF19XHJcbiAgICAgPlxyXG4gICAgICAgPElucHV0IC8+XHJcbiAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgIDxGb3JtLkl0ZW1cclxuICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyxcclxuICAgICAgICAgfSxcclxuICAgICAgIF19XHJcbiAgICAgPlxyXG4gICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgIDxGb3JtLkl0ZW1cclxuICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgb2Zmc2V0OiA4LFxyXG4gICAgICAgICBzcGFuOiAxNixcclxuICAgICAgIH19XHJcbiAgICAgPlxyXG4gICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICBSZWdpc3RlclxyXG4gICAgICAgPC9CdXR0b24+XHJcbiAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgIDwvRm9ybT5cclxuICAgPC9Db2w+XHJcbiAgIDwvUm93PlxyXG4gIFxyXG4gICAgICAgPC8+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiUm93IiwiQ29sIiwicmVnaXN0ZXIiLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsInNwYW4iLCJyZW1lbWJlciIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm9mZnNldCJdLCJzb3VyY2VSb290IjoiIn0=