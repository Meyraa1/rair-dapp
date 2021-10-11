const ethers = require('ethers');

const {
  BINANCE_URL,
  BINANCE_CHAIN_ID,
  BINANCE_SYMBOL,
  BINANCE_NAME,
  BINANCE_FACTORY_ADDRESS,
  BINANCE_MINTER_ADDRESS,
  GOERLI_URL,
  GOERLI_CHAIN_ID,
  GOERLI_SYMBOL,
  GOERLI_NAME,
  GOERLI_FACTORY_ADDRESS,
  GOERLI_MINTER_ADDRESS,
  MATIC_MUMBAI_URL,
  MATIC_MUMBAI_CHAIN_ID,
  MATIC_MUMBAI_SYMBOL,
  MATIC_MUMBAI_NAME,
  MATIC_MUMBAI_FACTORY_ADDRESS,
  MATIC_MUMBAI_MINTER_ADDRESS
} = process.env;

module.exports = [
  {
    provider: new ethers.providers.JsonRpcProvider(BINANCE_URL, {
      chainId: Number(BINANCE_CHAIN_ID),
      symbol: BINANCE_SYMBOL,
      name: BINANCE_NAME
    }),
    factoryAddress: BINANCE_FACTORY_ADDRESS,
    minterAddress: BINANCE_MINTER_ADDRESS,
    network: BINANCE_SYMBOL,
    name: BINANCE_NAME
  },
  {
    provider: new ethers.providers.JsonRpcProvider(GOERLI_URL, {
      chainId: Number(GOERLI_CHAIN_ID),
      symbol: GOERLI_SYMBOL,
      name: GOERLI_NAME
    }),
    factoryAddress: GOERLI_FACTORY_ADDRESS,
    minterAddress: GOERLI_MINTER_ADDRESS,
    network: GOERLI_SYMBOL,
    name: GOERLI_NAME
  },
  {
    provider: new ethers.providers.JsonRpcProvider(MATIC_MUMBAI_URL, {
      chainId: Number(MATIC_MUMBAI_CHAIN_ID),
      symbol: MATIC_MUMBAI_SYMBOL,
      name: MATIC_MUMBAI_NAME
    }),
    factoryAddress: MATIC_MUMBAI_FACTORY_ADDRESS,
    minterAddress: MATIC_MUMBAI_MINTER_ADDRESS,
    network: MATIC_MUMBAI_SYMBOL,
    name: MATIC_MUMBAI_NAME
  }
];
