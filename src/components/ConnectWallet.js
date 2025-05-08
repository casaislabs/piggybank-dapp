import { useState, useEffect } from "react";
import { FaWallet, FaSignOutAlt } from "react-icons/fa"; // Importamos iconos

const ConnectWallet = ({ onConnect }) => {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAddress(accounts[0]);
      onConnect(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    onConnect(null);
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            setAddress(accounts[0]);
            onConnect(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };

    checkWalletConnection();
  }, [onConnect]);

  return (
    <div className="flex items-center space-x-4">
      {address ? (
        <div className="flex items-center space-x-3 bg-white shadow-lg rounded-lg px-4 py-2 border border-gray-200">
          <FaWallet className="text-primary text-lg" />
          <span className="text-gray-700 font-medium text-sm">
            Connected: <span className="font-bold">{address.slice(0, 6)}...{address.slice(-4)}</span>
          </span>
          <button
            onClick={disconnectWallet}
            className="flex items-center bg-red-500 text-white font-bold text-sm py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
          >
            <FaSignOutAlt className="mr-2" />
            Disconnect
          </button>
        </div>
      ) : (
<button
  onClick={connectWallet}
  className="flex items-center bg-blue-500 text-white font-bold text-sm py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
>
  <FaWallet className="mr-2" />
  Connect Wallet
</button>
      )}
    </div>
  );
};

export default ConnectWallet;