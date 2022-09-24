"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/colorMode";
exports.ids = ["pages/colorMode"];
exports.modules = {

/***/ "./src/pages/api/lib/api.ts":
/*!**********************************!*\
  !*** ./src/pages/api/lib/api.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2xpYi9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLEdBQUcsR0FBR0QsbURBQVksQ0FBQztJQUM5QkcsT0FBTyxFQUFFLE1BQU07Q0FDaEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JpZS10ZW1wbGF0ZS1uZXh0anMtY2hha3JhdWkvLi9zcmMvcGFnZXMvYXBpL2xpYi9hcGkudHM/YjhjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcIi9hcGlcIixcbn0pO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/lib/api.ts\n");

/***/ }),

/***/ "./src/pages/colorMode.tsx":
/*!*********************************!*\
  !*** ./src/pages/colorMode.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ColorMode)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ \"@chakra-ui/button\");\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"@chakra-ui/color-mode\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"@chakra-ui/layout\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/lib/api */ \"./src/pages/api/lib/api.ts\");\n\n\n\n\n\n\n\nfunction ColorMode() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"Email n\\xe3o confirmado\");\n    const { colorMode , toggleColorMode  } = (0,_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const token = router.query.token;\n        const confirmEmail = async ()=>{\n            console.log(token);\n            try {\n                await _api_lib_api__WEBPACK_IMPORTED_MODULE_6__.api.patch(`/emailConfirm?token=${token}`);\n                setMessage(\"Email confirmado!\");\n            } catch (error) {\n                console.log(error);\n                setMessage(\"Erro ao confirmar email\");\n            }\n        };\n        confirmEmail();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        w: \"100vw\",\n        h: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n            onClick: toggleColorMode,\n            children: message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" \",\n                    message\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucaseverest/projects/emailSender/src/pages/colorMode.tsx\",\n                lineNumber: 35,\n                columnNumber: 20\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        }, void 0, false, {\n            fileName: \"/Users/lucaseverest/projects/emailSender/src/pages/colorMode.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lucaseverest/projects/emailSender/src/pages/colorMode.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29sb3JNb2RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBQ1U7QUFDWjtBQUNEO0FBQ0k7QUFDUjtBQUVyQixTQUFTTyxTQUFTLEdBQUc7SUFDbEMsTUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBRTFCLE1BQU0sS0FBQ00sT0FBTyxNQUFFQyxVQUFVLE1BQUlMLCtDQUFRLENBQUMseUJBQXNCLENBQUM7SUFDOUQsTUFBTSxFQUFFTSxTQUFTLEdBQUVDLGVBQWUsR0FBRSxHQUFHWCxtRUFBWSxFQUFFO0lBRXJERyxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNUyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sS0FBSyxDQUFDRCxLQUFLO1FBQ2hDLE1BQU1FLFlBQVksR0FBRyxVQUFZO1lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBSyxDQUFDLENBQUM7WUFFbkIsSUFBSTtnQkFDRixNQUFNUCxtREFBUyxDQUFDLENBQUMsb0JBQW9CLEVBQUVPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFaERILFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsT0FBT1MsS0FBSyxFQUFFO2dCQUNkSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7Z0JBQ25CVCxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQztRQUVESyxZQUFZLEVBQUUsQ0FBQztJQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ2IsbURBQUk7UUFBQ2tCLENBQUMsRUFBQyxPQUFPO1FBQUNDLENBQUMsRUFBQyxPQUFPO1FBQUNDLFVBQVUsRUFBQyxRQUFRO1FBQUNDLGNBQWMsRUFBQyxRQUFRO2tCQUNuRSw0RUFBQ3ZCLHFEQUFNO1lBQUN3QixPQUFPLEVBQUVaLGVBQWU7c0JBQzdCSCxPQUFPLGlCQUFHLDhEQUFDZ0IsS0FBRzs7b0JBQUMsR0FBQztvQkFBQ2hCLE9BQU87Ozs7OztvQkFBTyxpQkFBRyw2SUFBSzs7Ozs7Z0JBQ2pDOzs7OztZQUNKLENBQ1A7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JpZS10ZW1wbGF0ZS1uZXh0anMtY2hha3JhdWkvLi9zcmMvcGFnZXMvY29sb3JNb2RlLnRzeD9hMGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29sb3ItbW9kZVwiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi9hcGkvbGliL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xvck1vZGUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiRW1haWwgbsOjbyBjb25maXJtYWRvXCIpO1xuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcm91dGVyLnF1ZXJ5LnRva2VuIGFzIHN0cmluZztcbiAgICBjb25zdCBjb25maXJtRW1haWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwaS5wYXRjaChgL2VtYWlsQ29uZmlybT90b2tlbj0ke3Rva2VufWApO1xuXG4gICAgICAgIHNldE1lc3NhZ2UoXCJFbWFpbCBjb25maXJtYWRvIVwiKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgc2V0TWVzc2FnZShcIkVycm8gYW8gY29uZmlybWFyIGVtYWlsXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25maXJtRW1haWwoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggdz1cIjEwMHZ3XCIgaD1cIjEwMHZoXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX0+XG4gICAgICAgIHttZXNzYWdlID8gPGRpdj4ge21lc3NhZ2V9PC9kaXY+IDogPD48Lz59XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwiRmxleCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwiQ29sb3JNb2RlIiwicm91dGVyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJjb2xvck1vZGUiLCJ0b2dnbGVDb2xvck1vZGUiLCJ0b2tlbiIsInF1ZXJ5IiwiY29uZmlybUVtYWlsIiwiY29uc29sZSIsImxvZyIsInBhdGNoIiwiZXJyb3IiLCJ3IiwiaCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm9uQ2xpY2siLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/colorMode.tsx\n");

/***/ }),

/***/ "@chakra-ui/button":
/*!************************************!*\
  !*** external "@chakra-ui/button" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/button");

/***/ }),

/***/ "@chakra-ui/color-mode":
/*!****************************************!*\
  !*** external "@chakra-ui/color-mode" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/color-mode");

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/colorMode.tsx"));
module.exports = __webpack_exports__;

})();