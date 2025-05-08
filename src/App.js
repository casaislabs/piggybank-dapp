import { useState } from "react";
import Balance from "./components/Balance";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import ConnectWallet from "./components/ConnectWallet";
import CheckBalance from "./components/CheckBalance";

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [connectedAddress, setConnectedAddress] = useState(null);

  const refreshBalance = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-neutral text-gray-800 font-sans flex flex-col items-center">
      <header className="bg-primary text-white w-full py-4 px-6 shadow-md flex items-center justify-between">
        <h1 className="text-3xl font-bold">PiggyBank DApp</h1>
        <ConnectWallet onConnect={setConnectedAddress} />
      </header>
      <main className="p-6 w-full max-w-md flex flex-col items-center space-y-6">
        {connectedAddress ? (
          <>
            {/* Balance Section */}
            <div className="bg-neutral-light shadow-lg rounded-lg p-6 w-full border border-neutral-dark">
              <Balance refreshTrigger={refreshTrigger} />
            </div>

            {/* Deposit Section */}
            <div className="bg-neutral-light shadow-lg rounded-lg p-6 w-full border border-neutral-dark">
              <Deposit onDeposit={refreshBalance} />
            </div>

            {/* Withdraw Section */}
            <div className="bg-neutral-light shadow-lg rounded-lg p-6 w-full border border-neutral-dark">
              <Withdraw onWithdraw={refreshBalance} />
            </div>

            {/* Check Balance Section */}
            <div className="bg-neutral-light shadow-lg rounded-lg p-6 w-full border border-neutral-dark">
              <CheckBalance />
            </div>
          </>
        ) : (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow-md">
            <p className="font-medium text-lg">Wallet Not Connected</p>
            <p className="text-sm">Please connect your wallet to use the DApp.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;