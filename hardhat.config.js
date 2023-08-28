require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	etherscan: {},
	networks: {
		mantle: {
			url: ""
		}
	},
	solidity: {
		compilers: [
			{
				version: "0.8.20",
				settings: {
					optimizer: {enabled: true, runs: 200},
				},
			},
		],
	}
};
