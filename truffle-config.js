var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    develop: {
      port: 8545,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};
