const PrivateKeyProvider = require("@truffle/hdwallet-provider");

// insert the private key of the account used in metamask eg: Account 1 (Miner Coinbase Account)
const privateKey = ["8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",
 		    "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",
	            "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f"];


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:8545",0,3),
      network_id: "*", // Match any network id
      gas: 100000000
    },
    develop: {
      port: 8545
    },
    sampleNetworkWallet: {
      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:8545"),
      network_id: "*"
    }
  },
  plugins: ['oneclick']
};
