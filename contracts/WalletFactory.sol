// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Wallet.sol";

contract WalletFactory {
    event WalletCreated(address indexed walletAddress, address indexed owner);

    function createWallet(address entryPoint, address owner) external returns (address) {
        Wallet wallet = new Wallet(entryPoint, owner);
        emit WalletCreated(address(wallet), owner);
        return address(wallet);
    }
}
