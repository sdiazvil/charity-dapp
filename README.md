# Charity DApp  
  
This project is a decentralized application (DApp) for charity based on Ethereum. It allows users to make donations using the Ethereum network.  
  
## Prerequisites  
  
Make sure you have the following tools installed before you start:  
  
- [Node.js](https://nodejs.org/)  
- [Truffle](https://www.trufflesuite.com/truffle)  
- [Ganache](https://www.trufflesuite.com/ganache)  
- [MetaMask](https://metamask.io/)  
  
## Setup and Running the Project  
  
Follow these steps to set up and run the project on your local machine.  
  
### 1. Clone the Repository  
  
Clone the GitHub repository:  
  
```bash  
git clone https://github.com/sdiazvil/charity-dapp.git  
cd charity-dapp  
 

2. Install Dependencies
 
Install Node.js dependencies:


npm install  
 

3. Configure Truffle
 
Ensure your truffle-config.js is set up to use Ganache. Open truffle-config.js and configure it as follows:


module.exports = {  
  networks: {  
    development: {  
      host: "127.0.0.1",     // Localhost (default: none)  
      port: 7545,            // Standard Ethereum port (default: none)  
      network_id: "*",       // Any network (default: none)  
    },  
  },  
  compilers: {  
    solc: {  
      version: "0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)  
    },  
  },  
};  
 

4. Compile and Migrate Contracts
 
Use Truffle to compile and migrate the contracts to the Ganache development network:


truffle compile  
truffle migrate --network development  
 

5. Set Up Ganache
 
If you are using Ganache CLI, start it with the following command:


ganache-cli  
 
If you are using the Ganache GUI, ensure it is running on http://127.0.0.1:7545.

6. Configure MetaMask
 

Open MetaMask in your browser.
Add a custom network:
RPC URL: http://127.0.0.1:7545
Network Name: Ganache
Connect to the Ganache network.
7. Start the Application
 
Start the React application:


npm start  
 
Open your browser and go to http://localhost:3000 to interact with the DApp.

Project Structure
 

contracts/: Contains the smart contracts written in Solidity.
migrations/: Migration scripts to deploy the smart contracts.
src/: Contains the React application source code.
truffle-config.js: Truffle configuration for deploying the contracts.
Troubleshooting