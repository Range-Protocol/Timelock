// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");

async function main() {
	const target = ""; // to be updated.
	const calldata = ""; // to be updated.
	
	const timeLockInterface = new ethers.utils.Interface([
		"function execute(address,uint256,bytes,bytes32,bytes32) external"
	]);
	const data = timeLockInterface.encodeFunctionData("execute", [
		target,
		0,
		calldata,
		ethers.utils.zeroPad("0x", 32),
		ethers.utils.zeroPad("0x", 32),
	]);
	
	console.log("Timelock execute data: ", data);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
