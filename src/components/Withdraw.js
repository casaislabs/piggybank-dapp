import { useState } from "react";
import { getBlockchain } from "../utils/blockchain";

const Withdraw = ({ onWithdraw }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleWithdrawAll = async () => {
    setError("");
    setLoading(true);

    try {
      const { piggyBank } = await getBlockchain();
      const tx = await piggyBank.withdraw();
      await tx.wait();
      alert("Withdrawal of all funds successful!");
      onWithdraw();
    } catch (error) {
      console.error("Error withdrawing all funds:", error);
      setError("Error processing the withdrawal of all funds.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleWithdrawAll}
        disabled={loading}
        className={`w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-200 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Processing..." : "Withdraw All"}
      </button>
    </div>
  );
};

export default Withdraw;