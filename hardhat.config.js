require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

module.exports = {
  solidity: "0.8.24",
  networks: {
    zg: {
      url: "https://rpc-testnet.0g.ai",
      accounts: [PRIVATE_KEY],
    }
  },
};
