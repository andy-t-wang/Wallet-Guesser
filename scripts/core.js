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
  const postsResponse = await fetch(`/api/balance?address=${address}`);
  return await postsResponse.json();
};
