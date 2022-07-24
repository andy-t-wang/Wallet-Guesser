"use strict";
(() => {
var exports = {};
exports.id = 528;
exports.ids = [528];
exports.modules = {

/***/ 483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/balance.ts


// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = external_cors_default()({
    methods: [
        "POST",
        "GET",
        "HEAD"
    ]
});
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}
async function handler(req, res) {
    const { address  } = req.query;
    // Run the middleware
    await runMiddleware(req, res, cors);
    var data = JSON.stringify({
        jsonrpc: "2.0",
        method: "ankr_getAccountBalance",
        params: {
            blockchain: [
                "eth",
                "bsc",
                "fantom",
                "avalanche",
                "polygon",
                "arbitrum"
            ],
            walletAddress: address
        },
        id: 1
    });
    var config = {
        method: "post",
        url: "https://rpc.ankr.com/multichain",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "22e282df02e47a6dc906c48db9830304e93e9f12bb74a179152c747c01d4e7b7"
        },
        data: data
    };
    const call = await external_axios_default()(config);
    // Rest of the API logic
    res.status(200).json(call.data.result);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(483));
module.exports = __webpack_exports__;

})();