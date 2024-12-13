import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MyWallet = await ethers.getContractFactory("MyWallet");
  const wallet = await MyWallet.deploy(deployer.address, deployer.address);

  await wallet.deployed();
  console.log("Wallet deployed to:", wallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
