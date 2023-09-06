// server/controllers/contractInteraction.js

const Web3 = require('web3');
const MyContract = require('../contracts/MyContract.json'); // Replace with your contract ABI
const web3 = new Web3('http://localhost:8545'); // Connect to your Ethereum node

// Example function to interact with the contract
exports.interactWithContract = async (req, res) => {
  try {
    const contractAddress = '0xYourContractAddress';
    const contract = new web3.eth.Contract(MyContract.abi, contractAddress);

    // Call contract methods or send transactions here
    // Example: const result = await contract.methods.someMethod().call();

    res.status(200).json({ message: 'Contract interaction successful', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interacting with contract', error: error.message });
  }
};
