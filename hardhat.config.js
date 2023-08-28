require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	etherscan: {
		apiKey: {
			"mantle": "abc", //random value
		},
		customChains: [
			{
				network: "mantle",
				chainId: 5000,
				urls: {
					apiURL: "https://explorer.mantle.xyz/api",
					browserURL: "https://explorer.mantle.xyz",
				},
			},
		],
	},
	networks: {
		mantle: {
			url: "https://rpc.mantle.xyz",
			chainId: 5000,
		}
	},
	solidity: {
		compilers: [
			{
				version: "0.8.19",
				settings: {
					optimizer: {enabled: true, runs: 200},
				},
			},
		],
	}
};
