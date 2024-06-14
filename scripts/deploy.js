const { ethers } = require("hardhat");

async function main() {
  const greeterABI = await ethers.getContractFactory("Greeter");
  const greeter = await greeterABI.deploy("Hello, Hardhat!");
  console.log("Greeter deployed at:", greeter.address);

  const greet = await greeter.greet();
  console.log("Greet value:", greet);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
