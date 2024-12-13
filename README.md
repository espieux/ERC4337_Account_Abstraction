# Account Abstraction on Ethereum

npx hardhat compile
npx hardhat test

npx hardhat run scripts/deploy.ts --network holesky

### **Part 1: Analysis**

#### **EOAs vs Smart Contract Accounts Security Implications**
1. **Externally Owned Accounts (EOAs):**
   - Controlled by private keys.
   - Single point of failure (if the private key is lost or compromised, funds are lost).
   - No flexibility in custom logic (e.g., multisig, recovery mechanisms).

2. **Smart Contract Accounts:**
   - Programmable: Supports custom logic for ownership, recovery, transaction batching, etc.
   - Social recovery mechanisms: Allows other trusted accounts to unlock.
   - Session keys: Can grant temporary access without revealing the main private key.
   - Risk of bugs in the smart contract that can lead to exploits.
   - Higher gas costs for deployment and execution.

#### **Role of EntryPoint Contracts in ERC-4337**
- **EntryPoint contracts** are central to the ERC-4337 architecture:
  - They abstract the complexities of transaction processing.
  - Validate `UserOperation` structs, ensuring the wallet's signature and nonce are valid.
  - Facilitate gas management through paymasters.
  - Act as a secure entry for user interactions with their smart contract wallets.

---

### **Part 2: Smart Contract Implementation**

#### **Requirements and Steps**

1. **Simple Factory to Deploy Smart Contract Wallets**
   - Factory design pattern to deploy wallets with deterministic addresses.
   - Include initialization parameters (e.g., owner addresses).

2. **Smart Contract Wallet Features**
   - **Multiple Owners (Multisig):**
     - Requires N-of-M signatures for transaction approval.
   - **Transaction Batching:**
     - Allow multiple operations (e.g., ERC20 transfers, NFT minting) in a single call.
   - **Session Keys:**
     - Temporary keys with limited permissions and expiration.
   - **Social Recovery Mechanism:**
     - Define trusted friends who can reset access in case of loss.

3. **Simple Paymaster**
   - Approve all `UserOperation`s blindly for demonstration purposes.

#### **Libraries and Tools**
- Use **EntryPoint v0.7** from the [eip4337 contracts repo](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.7/contracts).
- Optional: Libraries like **viem** or **ethers.js** for integration.

---

### **Part 3: Integration Testing**

#### **Deployment**
- Deploy contracts to the Holesky testnet.
- Use a bundler for account abstraction (ensure access to a node with `debug_traceCall`).

#### **Frontend and Testing**
- Create a simple frontend using TypeScript or JavaScript.
- Showcase the following:
  - Basic transaction execution: Mint a dummy NFT.
  - Multisig validation: Require multiple signatures.
  - Session keys: Demonstrate temporary access.
  - Social recovery mechanism: Unlock the account with a friend’s help.

#### **Display Requirements**
- Display the account address, even before deployment (using deterministic address calculation).
---
---
---
---
---
---
---


### Part 1: analysis
1. Compare and contrast the security implications of EOAs versus Smart Contract Accounts
2. Explain the role of EntryPoint contracts in ERC-4337

### Part 2: Smart Contract Implementation
Implement a simple factory to deploy your smart contract wallets
Implement a Smart Contract Wallet that:
- Supports multiple owners (optional: set it up as a multisig wallet)
- Implement transaction batching
- Implements session keys for temporary access
- Includes a simple social recovery mechanism (ask a friend to unlock your contract for you)
- In a another contract, write a simple paymaster which approve all the userOps blindly 


Notes: 
Only use the entryPoint V0.7
If you want to use libraries such as viem for account abstraction, be careful, you are going to need a bundler (with an access to a node with “debug_traceCall”)

You can find the eip4337 contracts and interfaces here: ​​https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.7/contracts

### Part 3: Integration Testing
1. Deploy your Smart Contract Wallet to a testnet (holesky is preferred)
2. Write a simple frontEnd to script using TypeScript (preferred) or JavaScript to test through the entrypoint:
   - Basic transaction execution (mint a dummy nft for instance)
   - Multiple signature validation
   - Session key use (1 time keys are a good way to showcase but you can also approve a key for x minutes)
  - all the other features you want to showcase

Do not forget to display the account address (even before its deployment)

PLEASE TAKE SOME TIME TO CAREFULLY READ THE ACCOUNT / PAYMASTER / USEROP_INTERFACE BEFORE STARTING TO CODE




[see next page]
## Evaluation Criteria
- Code quality and documentation (45%)
- Security considerations (10%)
- Gas optimization (10%)
- Working app (35%)

## Resources
- ERC-4337 Specification: https://eips.ethereum.org/EIPS/eip-4337
- EntryPoint contract reference implementation: https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.7


