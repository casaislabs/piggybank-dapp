import { useState } from "react";
import { ethers } from "ethers";
import { getBlockchain } from "../utils/blockchain";

const Deposit = ({ onDeposit }) => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDeposit = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const { piggyBank } = await getBlockchain();
      const tx = await piggyBank.deposit({ value: ethers.parseEther(amount) });
      await tx.wait();
      alert("Deposit successful!");
      onDeposit();
    } catch (error) {
      console.error("Error depositing:", error);
      setError("Error processing the deposit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="amount" className="block text-gray-700 font-medium">
          Amount in ETH
        </label>
        <input
          id="amount"
          type="number"
          placeholder="Enter the amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
  onClick={handleDeposit}
  disabled={loading}
  className={`w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-light ${
    loading ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {loading ? "Processing..." : "Deposit"}
</button>
    </div>
  );
};

export default Deposit;