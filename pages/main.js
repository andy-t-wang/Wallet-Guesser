import { ethers } from "ethers";
import Document from "next/document";
import { useState } from "react";
import { checkBalance, guess } from "../scripts/core";
import { pepePicker } from "../scripts/pepepicker";

const solanaRPC = "https://rpc.ankr.com/solana";

export default function MainPage() {
  const [clicked, setClicked] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);
  const [history, updateHistory] = useState([]);
  const [pepe, setPepe] = useState(false);
  const [pepe2, setPepe2] = useState(false);

  const onFeelingLucky = async () => {
    const guessData = await guess();
    const deepbalance = await checkBalance(guessData.address);
    const balance = await guessData.getBalance();
    const result = {
      address: guessData.address,
      balance: deepbalance.totalBalanceUsd,
      mnemonic: guessData.mnemonic.phrase,
      pk: guessData.privateKey,
      tokens: deepbalance.assets,
    };
    setPepe(pepePicker());
    setPepe2(pepePicker());
    if (balance > 0) {
      alert("POG you found some money");
    }
    updateHistory([result, ...history.slice(0, 2)]);
    setWallet(result);
  };
  const setOld = async (i) => {
    setWallet(history[i]);
  };

  return (
    <div>
      <h2>Generate a random secret phrase:</h2>
      <p>We check Eth, Ftm, Bsc, Matic, Arb, and Avax just to be sure!</p>
      <button onClick={onFeelingLucky}>Feeling Lucky?</button>
      {wallet && (
        <div className="walletItem">
          <p>{wallet.address} </p>
          <span className="spacer"></span>
          <span className="spacer"></span>
          <p>${wallet.balance}</p>
        </div>
      )}
      {wallet && (
        <a className="extraInfo" onClick={() => setShowSecrets(!showSecrets)}>
          Show Secrets
        </a>
      )}
      {showSecrets && (
        <div>
          <p>Secret Phrase: {wallet.mnemonic} </p>
          <p>Private Key: {wallet.pk} </p>
          <p>Tokens Held: {wallet.tokens} </p>
        </div>
      )}
      {history.length > 0 && (
        <div className="historyDiv">
          <h3>History</h3>
          {history.map((wallet, i) => {
            return (
              <div
                key={i}
                className="walletItem clickable"
                onClick={() => setOld(i)}
              >
                <p>{i + 1}.</p>
                <span className="spacer"></span>
                <p>{wallet.address} </p>
                <span className="spacer"></span>
                <span className="spacer"></span>
                <p>${wallet.balance}</p>
              </div>
            );
          })}
        </div>
      )}
      <div className="pepeDiv">{pepe}</div>
      <div className="pepeDiv2">{pepe2}</div>
    </div>
  );
}
