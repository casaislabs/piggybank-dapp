import { useState } from "react";
import { ethers } from "ethers";
import { getBlockchain } from "../utils/blockchain";

const CheckBalance = () => {
  const [address, setAddress] = useState("");
  const [addressBalance, setAddressBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckBalance = async () => {
    if (!ethers.isAddress(address)) {
      setError("Please enter a valid address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const { piggyBank } = await getBlockchain();
      const balance = await piggyBank.getBalanceOf(address);
      setAddressBalance(ethers.formatEther(balance));
    } catch (error) {
      console.error("Error checking balance:", error);
      setError("Error checking the balance.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <label htmlFor="address" className="block text-gray-700 font-medium">
        Address to check balance
      </label>
      <input
  id="address"
  type="text"
  placeholder="Enter the address"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="mt-1 block w-full border-neutral-dark rounded-md shadow-sm focus:ring-primary focus:border-primary"
/>
      <button
        onClick={handleCheckBalance}
        disabled={loading}
        className={`mt-2 w-full bg-secondary text-white font-bold py-2 px-4 rounded-md hover:bg-secondary/90 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Checking..." : "Check Balance"}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {addressBalance !== null && (
        <p className="mt-2 text-gray-600">
          Address balance: {addressBalance} ETH
        </p>
      )}
    </div>
  );
};

export default CheckBalance;