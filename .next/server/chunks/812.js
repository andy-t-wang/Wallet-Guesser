exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(982);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
;// CONCATENATED MODULE: ./scripts/core.js
const { utils , providers , Wallet  } = __webpack_require__(982);
const bip39 = __webpack_require__(176);

//
const provider = new providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${"hYjwmxiSMYUOBBydUrde2nEO7BlPL2eP"}`);
const guess = async ()=>{
    const mnemonic = bip39.generateMnemonic();
    const hdNode = utils.HDNode.fromMnemonic(mnemonic);
    const wallet = new Wallet(hdNode, provider);
    return wallet;
};
const deriveRest = async (mnemonic)=>{
    const node = utils.HDNode.fromMnemonic(mnemonic);
    for(var i = 1; i < 7; i++){
        try {
            const hdNode = node.derivePath(`m/44'/60'/0'/0/` + i); // This returns a new HDNode
            const wallet = new Wallet(hdNode, provider);
            const balance = await wallet.getBalance();
            if (balance > 0) {
                wallets.push(wallet);
            }
        } catch (e) {}
    }
};
const checkBalance = async (address, axios)=>{
    const postsResponse = await fetch(`/api/balance?address=${address}`);
    return await postsResponse.json();
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./scripts/pepepicker.js

const one = __webpack_require__(874);
const two = __webpack_require__(120);
const three = __webpack_require__(537);
const four = __webpack_require__(34);
const five = __webpack_require__(452);
const six = __webpack_require__(25);
const seven = __webpack_require__(353);
const eight = __webpack_require__(756);

const pepePicker = ()=>{
    const pepePaths = [
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight
    ];
    const pepe = pepePaths[Math.floor(Math.random() * pepePaths.length)];
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: pepe,
        height: 128,
        width: 148
    });
};

;// CONCATENATED MODULE: ./pages/main.js






const solanaRPC = "https://rpc.ankr.com/solana";
function MainPage() {
    const { 0: clicked , 1: setClicked  } = (0,external_react_.useState)(false);
    const { 0: wallet , 1: setWallet  } = (0,external_react_.useState)(false);
    const { 0: showSecrets , 1: setShowSecrets  } = (0,external_react_.useState)(false);
    const { 0: history , 1: updateHistory  } = (0,external_react_.useState)([]);
    const { 0: pepe , 1: setPepe  } = (0,external_react_.useState)(false);
    const { 0: pepe2 , 1: setPepe2  } = (0,external_react_.useState)(false);
    const onFeelingLucky = async ()=>{
        const guessData = await guess();
        const deepbalance = await checkBalance(guessData.address);
        const balance = await guessData.getBalance();
        const result = {
            address: guessData.address,
            balance: deepbalance.totalBalanceUsd,
            mnemonic: guessData.mnemonic.phrase,
            pk: guessData.privateKey,
            tokens: deepbalance.assets
        };
        setPepe(pepePicker());
        setPepe2(pepePicker());
        if (balance > 0) {
            alert("POG you found some money");
        }
        updateHistory([
            result,
            ...history.slice(0, 2)
        ]);
        setWallet(result);
    };
    const setOld = async (i)=>{
        setWallet(history[i]);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Generate a random secret phrase:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We check Eth, Ftm, Bsc, Matic, Arb, and Avax just to be sure!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: onFeelingLucky,
                children: "Feeling Lucky?"
            }),
            wallet && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "walletItem",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            wallet.address,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "spacer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "spacer"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "$",
                            wallet.balance
                        ]
                    })
                ]
            }),
            wallet && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "extraInfo",
                onClick: ()=>setShowSecrets(!showSecrets),
                children: "Show Secrets"
            }),
            showSecrets && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Secret Phrase: ",
                            wallet.mnemonic,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Private Key: ",
                            wallet.pk,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Tokens Held: ",
                            wallet.tokens,
                            " "
                        ]
                    })
                ]
            }),
            history.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "historyDiv",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "History"
                    }),
                    history.map((wallet, i)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "walletItem clickable",
                            onClick: ()=>setOld(i),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        i + 1,
                                        "."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "spacer"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        wallet.address,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "spacer"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "spacer"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "$",
                                        wallet.balance
                                    ]
                                })
                            ]
                        }, i);
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pepeDiv",
                children: pepe
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pepeDiv2",
                children: pepe2
            })
        ]
    });
};


/***/ }),

/***/ 874:
/***/ ((module) => {

module.exports = "/_next/static/images/bork-5a724d0ff5d22936516a7f85474c69cf.png";

/***/ }),

/***/ 120:
/***/ ((module) => {

module.exports = "/_next/static/images/pepe 1-7a934ca4ff592154ab6534d5ae6e7d8b.png";

/***/ }),

/***/ 537:
/***/ ((module) => {

module.exports = "/_next/static/images/pepe frog-1ed1f1804680c3c227bb84c269dbcb83.png";

/***/ }),

/***/ 34:
/***/ ((module) => {

module.exports = "/_next/static/images/pepe-loser-forehead-thumbnail-e17684b21dc9524024dc74393ce1b33b.jpeg";

/***/ }),

/***/ 756:
/***/ ((module) => {

module.exports = "/_next/static/images/pepe-2756330b70ce1e26b1f501e5e81aee8c.png";

/***/ }),

/***/ 452:
/***/ ((module) => {

module.exports = "/_next/static/images/pepe2-88e719bb51a6ca290a5934afb9f0e92f.png";

/***/ }),

/***/ 353:
/***/ ((module) => {

module.exports = "/_next/static/images/pepe3-ccc93f0cfe2d2fd7292f967ade51ae9d.jpeg";

/***/ }),

/***/ 25:
/***/ ((module) => {

module.exports = "/_next/static/images/pepenobg-f2b5e13e2b973913022384965a1a9f35.png";

/***/ })

};
;