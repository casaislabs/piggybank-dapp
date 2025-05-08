import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getBlockchain } from "../utils/blockchain";

const Balance = ({ refreshTrigger }) => {
  const [contractBalance, setContractBalance] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const { piggyBank, signer, provider } = await getBlockchain();
        const address = await signer.getAddress();

        // Fetch balance in the contract
        const userContractBalance = await piggyBank.getBalanceOf(address);
        setContractBalance(ethers.formatEther(userContractBalance));

        // Fetch balance in the wallet
        const userWalletBalance = await provider.getBalance(address);
        setWalletBalance(ethers.formatEther(userWalletBalance));
      } catch (error) {
        console.error("Error fetching balances:", error);
        setContractBalance("Error");
        setWalletBalance("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchBalances();
  }, [refreshTrigger]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-lg font-bold text-primary-dark">Your Balances</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-medium">Contract Balance:</span>{" "}
            {contractBalance !== "Error" ? `${contractBalance} ETH` : "Error loading balance"}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Wallet Balance:</span>{" "}
            {walletBalance !== "Error" ? `${walletBalance} ETH` : "Error loading balance"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Balance;