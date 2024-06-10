# 0g-contract-example

This repo is to demonstrate a simple example to deploy a contract on [0G chain](https://0g.ai/).

In order to run, execute the following to install dependencies
```bash
npm install --save-dev hardhat
npm install
```

Then run the following code to compile the contract
```bash
npx hardhat compile
```

Before deploying, setup the environment variable with your own private key by creating a `.env` file and put
```bash
PRIVATE_KEY=<your_private_key>
```

Finally, run the deploy script to deploy the contract
```bash
npx run scripts/deploy.js --network zg
```
