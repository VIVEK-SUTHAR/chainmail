import { useState } from "preact/hooks";
import React from "react";
import { ethers } from "ethers";
import Dashboard from "./Dashboard";
import useStore from "../utils/store";

export default function Landing() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const store = useStore();
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please Install Metamask");
      } else {
        const getAccount = await ethereum.request({
          method: "eth_requestAccounts",
        });
        let provider = new ethers.providers.Web3Provider(ethereum, "any");
        let signer = provider.getSigner();
        let chaindId = await signer.getChainId();
        if (chaindId !== 80001) {
          setWalletConnected(false);
          signer.getChainId().then(async (res) => {
            if (res !== 80001) {
              const polygon = await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x13881" }],
              });
              const accounts = await ethereum.request({
                method: "eth_requestAccounts",
              });
              signer = provider.getSigner();
              setCurrentAccount(accounts[0]);
              setWalletConnected(true);
              store.setCurrentAccount(accounts[0]);
              console.log(currentAccount);
            }
          });
        }
        if (chaindId === 80001) {
          setWalletConnected(true);
          setCurrentAccount(getAccount[0]);
        }
        console.log(walletConnected);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return !walletConnected ? (
    <div className="h-screen w-screen">
      <div className="text-center pt-36 justify-center items-center">
        <h1 className="font-Inter font-extrabold text-7xl mb-12">
          🔗Chain-Mail
        </h1>
        <div className="h-36 w-36 text-center justify-center m-auto">
          <img src="./blueGuy.svg" alt="" />
        </div>
        <button
          className="mt-24 py-4 text-2xl bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 border-b-8 border-blue-700 hover:border-blue-500 rounded"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  ) : (
    <Dashboard />
  );
}
