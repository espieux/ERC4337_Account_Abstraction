// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@account-abstraction/contracts/interfaces/IPaymaster.sol";

contract BlindPaymaster is IPaymaster {
    function validatePaymasterUserOp(
        UserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 maxCost
    ) external override returns (bytes memory context, uint256 validationData) {
        return ("", 0); // Approve all operations
    }
}
