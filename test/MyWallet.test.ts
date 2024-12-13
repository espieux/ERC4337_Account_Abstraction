import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyWallet", function () {
  it("Should deploy the contract and set the owner", async function () {
    const [owner] = await ethers.getSigners();

    const MyWallet = await ethers.getContractFactory("MyWallet");
    const wallet = await MyWallet.deploy(owner.address, owner.address);

    await wallet.deployed();

    expect(await wallet.owner()).to.equal(owner.address);
  });
});
