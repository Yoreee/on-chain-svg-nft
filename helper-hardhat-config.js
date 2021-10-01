const networkConfig = {
    31337: {
        name: 'localhost'
    },
    4: {
        name: 'rinkeby'
    },
    // 5: {
    //     name: 'goerli'
    // }

}

module.exports = {
    networkConfig
}

// 0: Olympic, Ethereum public pre-release PoW testnet
// 1: Frontier, Homestead, Metropolis, the Ethereum public PoW main network
// 1: Classic, the (un)forked public Ethereum Classic PoW main network, chain ID 61
// 1: Expanse, an alternative Ethereum implementation, chain ID 2
// 2: Morden Classic, the public Ethereum Classic PoW testnet, now retired
// 3: Ropsten, the public proof-of-work Ethereum testnet
// 4: Rinkeby, the public Geth-only PoA testnet
// 5: Goerli, the public cross-client PoA testnet
// 6: Kotti Classic, the public cross-client PoA testnet for Classic
// 7: Mordor Classic, the public cross-client PoW testnet for Classic
// 8: Ubiq, the public Gubiq main network with flux difficulty chain ID 8
// 10: Quorum, the JP Morgan network
// 42: Kovan, the public Parity-only PoA testnet
// 56: Binance, the public Binance mainnet
// 60: GoChain, the GoChain networks mainnet
// 77: Sokol, the public POA Network testnet
// 97: Binance, the public Binance testnet
// 99: Core, the public POA Network main network
// 100: xDai, the public MakerDAO/POA Network main network
// 128: HECO, Huobi ECO Chain main network
// 256: HECO, Huobi ECO Chain test network
// 31337: GoChain testnet, the GoChain networks public testnet
// 401697: Tobalaba, the public Energy Web Foundation testnet
// 7762959: Musicoin, the music blockchain
// 61717561: Aquachain, ASIC resistant chain
// [Other]: Could indicate that your connected to a local development test network.