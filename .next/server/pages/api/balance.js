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
exports.id = "pages/api/balance";
exports.ids = ["pages/api/balance"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "(api)/./pages/api/balance.ts":
/*!******************************!*\
  !*** ./pages/api/balance.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Initializing the cors middleware\n// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options\nconst cors = cors__WEBPACK_IMPORTED_MODULE_1___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\n// Helper method to wait for a middleware to execute before continuing\n// And to throw an error when an error happens in a middleware\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function handler(req, res) {\n    const { address  } = req.query;\n    // Run the middleware\n    await runMiddleware(req, res, cors);\n    var data = JSON.stringify({\n        jsonrpc: \"2.0\",\n        method: \"ankr_getAccountBalance\",\n        params: {\n            blockchain: [\n                \"eth\",\n                \"bsc\",\n                \"fantom\",\n                \"avalanche\",\n                \"polygon\",\n                \"arbitrum\"\n            ],\n            walletAddress: address\n        },\n        id: 1\n    });\n    var config = {\n        method: \"post\",\n        url: \"https://rpc.ankr.com/multichain\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"X-API-KEY\": \"22e282df02e47a6dc906c48db9830304e93e9f12bb74a179152c747c01d4e7b7\"\n        },\n        data: data\n    };\n    const call = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n    // Rest of the API logic\n    res.status(200).json(call.data.result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFsYW5jZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQjtBQUNGO0FBRXhCLG1DQUFtQztBQUNuQyw4R0FBOEc7QUFDOUcsTUFBTUUsSUFBSSxHQUFHRCwyQ0FBSSxDQUFDO0lBQ2hCRSxPQUFPLEVBQUU7UUFBQyxNQUFNO1FBQUUsS0FBSztRQUFFLE1BQU07S0FBQztDQUNqQyxDQUFDO0FBRUYsc0VBQXNFO0FBQ3RFLDhEQUE4RDtBQUM5RCxTQUFTQyxhQUFhLENBQ3BCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEJDLEVBQVksRUFDWjtJQUNBLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxHQUFLO1FBQ3RDSCxFQUFFLENBQUNGLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUNLLE1BQVcsR0FBSztZQUM1QixJQUFJQSxNQUFNLFlBQVlDLEtBQUssRUFBRTtnQkFDM0IsT0FBT0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQzthQUN2QjtZQUVELE9BQU9GLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFDO0NBQ0o7QUFFYyxlQUFlRSxPQUFPLENBQ25DUixHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVRLE9BQU8sR0FBRSxHQUFHVCxHQUFHLENBQUNVLEtBQUs7SUFDN0IscUJBQXFCO0lBQ3JCLE1BQU1YLGFBQWEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVKLElBQUksQ0FBQyxDQUFDO0lBRXBDLElBQUljLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUM7UUFDeEJDLE9BQU8sRUFBRSxLQUFLO1FBQ2RDLE1BQU0sRUFBRSx3QkFBd0I7UUFDaENDLE1BQU0sRUFBRTtZQUNOQyxVQUFVLEVBQUU7Z0JBQUMsS0FBSztnQkFBRSxLQUFLO2dCQUFFLFFBQVE7Z0JBQUUsV0FBVztnQkFBRSxTQUFTO2dCQUFFLFVBQVU7YUFBQztZQUN4RUMsYUFBYSxFQUFFVCxPQUFPO1NBQ3ZCO1FBQ0RVLEVBQUUsRUFBRSxDQUFDO0tBQ04sQ0FBQztJQUNGLElBQUlDLE1BQU0sR0FBRztRQUNYTCxNQUFNLEVBQUUsTUFBTTtRQUNkTSxHQUFHLEVBQUUsaUNBQWlDO1FBQ3RDQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLFdBQVcsRUFDVCxrRUFBa0U7U0FDckU7UUFDRFgsSUFBSSxFQUFFQSxJQUFJO0tBQ1g7SUFDRCxNQUFNWSxJQUFJLEdBQUcsTUFBTTVCLDRDQUFLLENBQUN5QixNQUFNLENBQUM7SUFFaEMsd0JBQXdCO0lBQ3hCbkIsR0FBRyxDQUFDdUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQ1osSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQztDQUN4QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9iYWxhbmNlLnRzPzRjYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDb3JzIGZyb20gXCJjb3JzXCI7XG5cbi8vIEluaXRpYWxpemluZyB0aGUgY29ycyBtaWRkbGV3YXJlXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xuY29uc3QgY29ycyA9IENvcnMoe1xuICBtZXRob2RzOiBbXCJQT1NUXCIsIFwiR0VUXCIsIFwiSEVBRFwiXSxcbn0pO1xuXG4vLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuZnVuY3Rpb24gcnVuTWlkZGxld2FyZShcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4gIGZuOiBGdW5jdGlvblxuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZm4ocmVxLCByZXMsIChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSByZXEucXVlcnk7XG4gIC8vIFJ1biB0aGUgbWlkZGxld2FyZVxuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKTtcblxuICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgIG1ldGhvZDogXCJhbmtyX2dldEFjY291bnRCYWxhbmNlXCIsXG4gICAgcGFyYW1zOiB7XG4gICAgICBibG9ja2NoYWluOiBbXCJldGhcIiwgXCJic2NcIiwgXCJmYW50b21cIiwgXCJhdmFsYW5jaGVcIiwgXCJwb2x5Z29uXCIsIFwiYXJiaXRydW1cIl0sXG4gICAgICB3YWxsZXRBZGRyZXNzOiBhZGRyZXNzLFxuICAgIH0sXG4gICAgaWQ6IDEsXG4gIH0pO1xuICB2YXIgY29uZmlnID0ge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vcnBjLmFua3IuY29tL211bHRpY2hhaW5cIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiWC1BUEktS0VZXCI6XG4gICAgICAgIFwiMjJlMjgyZGYwMmU0N2E2ZGM5MDZjNDhkYjk4MzAzMDRlOTNlOWYxMmJiNzRhMTc5MTUyYzc0N2MwMWQ0ZTdiN1wiLFxuICAgIH0sXG4gICAgZGF0YTogZGF0YSxcbiAgfTtcbiAgY29uc3QgY2FsbCA9IGF3YWl0IGF4aW9zKGNvbmZpZyk7XG5cbiAgLy8gUmVzdCBvZiB0aGUgQVBJIGxvZ2ljXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNhbGwuZGF0YS5yZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQ29ycyIsImNvcnMiLCJtZXRob2RzIiwicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImhhbmRsZXIiLCJhZGRyZXNzIiwicXVlcnkiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb25ycGMiLCJtZXRob2QiLCJwYXJhbXMiLCJibG9ja2NoYWluIiwid2FsbGV0QWRkcmVzcyIsImlkIiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsImNhbGwiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/balance.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/balance.ts"));
module.exports = __webpack_exports__;

})();