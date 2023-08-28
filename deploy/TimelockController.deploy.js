// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {ethers} = require("hardhat");
const { LedgerSigner } = require("@anders-t/ethers-ledger");

async function main() {
    const provider = ethers.getDefaultProvider("");
    const ledger = await new LedgerSigner(provider, "");
    
    let TimelockController = await ethers.getContractFactory("TimelockController");
    TimelockController = TimelockController.connect(ledger);
    const MIN_DELAY = 86400;
    const PROPOSERS = [
      "0xb5020eC695b256b0F813547189B523c267737d46"
    ];
    const EXECUTORS = [];
    const admin = "0x0000000000000000000000000000000000000000";
    const timelockController = await TimelockController.deploy(
      MIN_DELAY,
      PROPOSERS,
      EXECUTORS,
      admin
    );
    console.log(timelockController.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
