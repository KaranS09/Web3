// https://eth-goerli.g.alchemy.com/v2/3pUYKNz3DFjBOR7lk4EGwmxYhFozmJCv
// https://eth-goerli.g.alchemy.com/v2/3pUYKNz3DFjBOR7lk4EGwmxYhFozmJCv

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    shardeum: {
      url: "https://liberty20.shardeum.org",
      accounts: [
        "5eda4d398f3313afab47865efda06ed692bb68e02aa21d47a25ade22be3f8c5d",
      ],
      chainId: 8081,
    },
  },
};
