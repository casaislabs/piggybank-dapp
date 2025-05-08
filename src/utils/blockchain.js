import { ethers } from "ethers";
import PiggyBankABI from "../artifacts/PiggyBank.json"; // Asegúrate de que el archivo esté en esta ruta

const CONTRACT_ADDRESS = "0xc810bf49064D3eC2e1583a143948eD35f11d3E30"; // Dirección del contrato desplegado

export const getBlockchain = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const piggyBank = new ethers.Contract(CONTRACT_ADDRESS, PiggyBankABI.abi, signer);

  return { provider, signer, piggyBank };
};