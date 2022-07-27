import { useEffect, useState } from "react";
import { checkBalance, guess } from "../scripts/core";
import { pepePicker } from "../scripts/pepepicker";
import ClipLoader from "react-spinners/ClipLoader";

const solanaRPC = "https://rpc.ankr.com/solana";
const mobileSize = 680;

export default function MainPage() {
  const [wallet, setWallet] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);
  const [history, updateHistory] = useState([]);
  const [pepe, setPepe] = useState(false);
  const [pepe2, setPepe2] = useState(false);
  const [loading, setLoading] = useState(false);

  const size = useWindowSize();

  const onFeelingLucky = async () => {
    setLoading(true);
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
    setLoading(false);
  };
  const setOld = async (i) => {
    setWallet(history[i]);
  };

  return (
    <div>
      <h2>Find a wallet collision:</h2>
      <p className="centerP">
        We check Eth, Ftm, Bsc, Matic, Arb, and Avax just to be sure!
      </p>
      <button onClick={onFeelingLucky}>
        {!loading ? (
          "Feeling Lucky?"
        ) : (
          <ClipLoader color={"black"} loading={loading} size={11}></ClipLoader>
        )}
      </button>
      {wallet && (
        <div className="walletItem">
          <p>{wallet.address} </p>
          <span className="spacer"></span>
          <span className="spacer"></span>
          <p className={wallet.balance > 0 ? "balancefound" : "balance"}>
            ${wallet.balance}
          </p>
        </div>
      )}
      {wallet && (
        <a className="extraInfo" onClick={() => setShowSecrets(!showSecrets)}>
          Show Secrets
        </a>
      )}
      {showSecrets && (
        <div className="secrets">
          <p>Secret Phrase: {wallet.mnemonic} </p>
          <p className="wordBreak">Private Key: {wallet.pk} </p>
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
                <p className={wallet.balance > 0 ? "balancefound" : "balance"}>
                  ${wallet.balance}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {size.width > mobileSize && <div className="pepeDiv">{pepe}</div>}
      {size.width > mobileSize && <div className="pepeDiv2">{pepe2}</div>}
      {size.width < mobileSize && <div className="pepeDivMobile">{pepe2}</div>}
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
