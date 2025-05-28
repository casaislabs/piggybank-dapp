# PiggyBank DApp

PiggyBank is a decentralized application (DApp) that allows users to securely deposit and withdraw Ether (ETH) using a smart contract deployed on the Ethereum blockchain. This DApp is designed to be intuitive, secure, and efficient, with a modern frontend developed in React.js and a backend powered by Solidity.

## 📂 Project Structure

This repository contains the frontend of the PiggyBank DApp. The associated smart contract is hosted in a separate repository:

- Smart Contract Repository: [PiggyBank Smart Contract](https://github.com/casaislabs/piggybank-contract)

---

## 🚀 Features

### Frontend

- **MetaMask Integration**: Users can easily connect their MetaMask wallet to interact with the DApp.
- **ETH Deposit**: Users can deposit ETH into the smart contract.
- **ETH Withdrawal**: Users can withdraw all available funds from the smart contract.
- **Balance Check**: Users can check both their balance on the contract and their wallet balance. Additionally, they can check the balance of any address on the contract.
- **Responsive Design**: The frontend utilizes Tailwind CSS for a modern, mobile-friendly, and attractive user interface.

### Backend (Smart Contract)

The smart contract is deployed on the Ethereum Sepolia Testnet and provides the following functionalities:

- ETH Deposit and Withdrawal.
- Balance Queries.
- Protection against re-entrancy attacks using OpenZeppelin's ReentrancyGuard.

---

## 📍 Smart Contract Address

The smart contract is deployed on the Sepolia Testnet at the following address:

- **Contract Address**: `0xc810bf49064D3eC2e1583a143948eD35f11d3E30`

---

## 🛠️ Technologies Used

### Frontend

- **React.js**: Framework for building the user interface.
- **Tailwind CSS**: A utility-first CSS framework for responsive design.
- **ethers.js**: A library to interact with the Ethereum blockchain.
- **MetaMask**: Browser extension for managing the user's wallet.

### Backend

- **Solidity**: Programming language for Ethereum smart contracts.
- **Hardhat**: Development environment for Ethereum.
- **OpenZeppelin**: A library to implement secure smart contracts.

---

## 📦 Prerequisites

- **Node.js** (v16 or higher recommended).
- **MetaMask** browser extension installed.
- **Smart Contract Deployment**: Ensure the contract is deployed on the Sepolia network.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/casaislabs/piggybank-frontend.git
cd piggybank-frontend
```

### 2. Install Dependencies

Run the following command to install the project's dependencies:

```bash
npm install
```

Create a `.env` file in the root of the project directory with the following content:

```bash
REACT_APP_CONTRACT_ADDRESS=0xc810bf49064D3eC2e1583a143948eD35f11d3E30
REACT_APP_NETWORK=sepolia
```

### 3. Start the Development Server

Run the following command to start the app in development mode:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🚀 Deploying to Production

### 1. Build the Application

Run the following command to generate an optimized build of the frontend:

```bash
npm run build
```

### 2. Deploy on Vercel

Connect this repository to Vercel. Set up the following environment variables in the Vercel dashboard:

- `REACT_APP_CONTRACT_ADDRESS`
- `REACT_APP_NETWORK`

Deploy the application to production.

---

## 🧪 Testing

### Frontend

To run frontend tests, use the following command:

```bash
npm test
```

### Backend

Automated tests for the smart contract are available in the contract repository. Refer to the smart contract's README for more information on running tests.

---

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## 🔍 Technical Details of the PiggyBank Project

### 1. Smart Contract

- **Language**: Solidity  
- **Compiler Version**: 0.8.28  
- **Development Framework**: Hardhat  
- **Dependencies**:  
    - OpenZeppelin (for ReentrancyGuard and other security utilities).  
- **Deployment Network**: Ethereum (Sepolia Testnet)  
- **Contract Address**: `0xc810bf49064D3eC2e1583a143948eD35f11d3E30`  

#### Key Functions:

- `deposit()`: Allows users to deposit ETH.  
- `withdraw()`: Allows users to withdraw all their funds.  
- `getBalanceOf(address user)`: Returns the balance of a specific user.  

#### Events:

- `Deposited(address indexed user, uint256 amount)`  
- `Withdrawn(address indexed user, uint256 amount)`  

#### Security:

- Protection against re-entrancy attacks with `ReentrancyGuard`.

---

### 2. Frontend

- **Framework**: React.js  
- **Styling**: Tailwind CSS  
- **Blockchain Interaction**: ethers.js  
- **MetaMask Integration**: Uses `window.ethereum` for wallet connection.  

#### Key Components:

- `ConnectWallet`: Manages wallet connection with MetaMask.  
- `Deposit`: Allows users to deposit ETH.  
- `Withdraw`: Allows users to withdraw funds.  
- `Balance`: Displays the user’s balance.  
- `CheckBalance`: Allows checking the balance of any address on the contract.  

#### Environment Variables:

- `REACT_APP_CONTRACT_ADDRESS`: Smart contract address.  
- `REACT_APP_NETWORK`: Deployment network (Sepolia).

---

### 3. Backend Configuration

#### `.env` File:

- `PRIVATE_KEY`: Private key for signing transactions.  
- `ALCHEMY_API_URL`: URL for Alchemy to interact with the Ethereum network.  
- `ETHERSCAN_API_KEY`: API key for contract verification on Etherscan.

---

### 4. Deployment

#### Frontend:

- **Deployed on**: Vercel  
- **Root directory configuration**: `frontend`  
- **Build command**: `npm run build`  
- **Output directory**: `build`

#### Backend:

- **Deployed on**: Sepolia using Hardhat  
- **Verified on**: Etherscan with the provided API key.

---

### 5. Testing

#### Frontend:

- Unit tests with Jest. Available scripts in `package.json`.

#### Backend:

- Automated tests with Hardhat. Covers cases such as deposits, withdrawals, and security validations.

---

### 6. Key Dependencies

#### Frontend:

- React.js  
- ethers.js  
- Tailwind CSS  

#### Backend:

- Hardhat  
- OpenZeppelin  
- dotenv (for environment variable management)

---

### 7. Workflow

1. The user connects their MetaMask wallet.  
2. The frontend interacts with the smart contract using ethers.js.  
3. Contract functions (`deposit`, `withdraw`, `getBalanceOf`) are invoked based on user actions.  
4. Events emitted by the contract (`Deposited`, `Withdrawn`) update the UI in real-time.  
