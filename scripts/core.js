const { utils, providers, Wallet } = require("ethers");
const bip39 = require("bip39");
import axios, * as others from "axios";

//
const provider = new providers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.alchemykey}`
);

export const guess = async () => {
  const mnemonic = bip39.generateMnemonic();
  const hdNode = utils.HDNode.fromMnemonic(mnemonic);
  const wallet = new Wallet(hdNode, provider);
  return wallet;
};

export const deriveRest = async (mnemonic) => {
  const node = utils.HDNode.fromMnemonic(mnemonic);
  for (var i = 1; i < 7; i++) {
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

export const checkBalance = async (address, axios) => {
  var data = JSON.stringify({
    jsonrpc: "2.0",
    method: "ankr_getAccountBalance",
    params: {
      blockchain: ["eth", "bsc", "fantom", "avalanche", "polygon", "arbitrum"],
      walletAddress: address,
    },
    id: 1,
  });
  var query = {
    method: "post",
    url: "https://rpc.ankr.com/multichain",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY":
        "22e282df02e47a6dc906c48db9830304e93e9f12bb74a179152c747c01d4e7b7",
      "Access-Control-Allow-Origin": "https://rpc.ankr.com/multichain",
      "Access-Control-Allow-Headers": [
        "Access-Control-Allow-Origin",
        "X-API-KEY",
      ],
    },
    data: data,
  };
  try {
    const call = await others(query);
    return call.data.result;
  } catch (e) {
    console.log(e);
  }
};
