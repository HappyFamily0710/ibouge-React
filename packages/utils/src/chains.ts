export const chains = [
  {
    name: 'Ethereum Mainnet',
    chain: 'ETH',
    network: 'mainnet',
    icon: 'ethereum',
    rpc: [
      'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
      'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}',
      'https://api.mycryptoapi.com/eth',
      'https://cloudflare-eth.com'
    ],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://ethereum.org',
    chainId: 1,
    slip44: 60,
    ens: { registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
    explorers: [{ name: 'etherscan', url: 'https://etherscan.io', standard: 'EIP3091' }],
    aliases: ['ethereum', 'mainnet']
  },
  {
    name: 'Ethereum Testnet Ropsten',
    chain: 'ETH',
    network: 'ropsten',
    rpc: ['https://ropsten.infura.io/v3/${INFURA_API_KEY}', 'wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}'],
    faucets: ['https://faucet.ropsten.be?${ADDRESS}'],
    nativeCurrency: { name: 'Ropsten Ether', symbol: 'ROP', decimals: 18 },
    infoURL: 'https://github.com/ethereum/ropsten',
    chainId: 3,
    ens: { registry: '0x112234455c3a32fd11230c42e7bccd4a84e02010' },
    aliases: ['ropsten']
  },
  {
    name: 'Ethereum Testnet Rinkeby',
    chain: 'ETH',
    network: 'rinkeby',
    rpc: ['https://rinkeby.infura.io/v3/${INFURA_API_KEY}', 'wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}'],
    faucets: ['https://faucet.rinkeby.io'],
    nativeCurrency: { name: 'Rinkeby Ether', symbol: 'RIN', decimals: 18 },
    infoURL: 'https://www.rinkeby.io',
    chainId: 4,
    ens: { registry: '0xe7410170f87102df0055eb195163a03b7f2bff4a' },
    explorers: [{ name: 'etherscan-rinkeby', url: 'https://rinkeby.etherscan.io', standard: 'EIP3091' }],
    aliases: ['rinkeby']
  },
  {
    name: 'Ethereum Testnet Görli',
    chain: 'ETH',
    network: 'goerli',
    rpc: ['https://rpc.goerli.mudit.blog/', 'https://rpc.slock.it/goerli ', 'https://goerli.prylabs.net/'],
    faucets: ['https://goerli-faucet.slock.it/?address=${ADDRESS}', 'https://faucet.goerli.mudit.blog'],
    nativeCurrency: { name: 'Görli Ether', symbol: 'GOR', decimals: 18 },
    infoURL: 'https://goerli.net/#about',
    chainId: 5,
    ens: { registry: '0x112234455c3a32fd11230c42e7bccd4a84e02010' },
    aliases: ['goerli']
  },
  {
    name: 'Optimistic Ethereum',
    chain: 'ETH',
    network: 'mainnet',
    rpc: ['https://mainnet.optimism.io/'],
    nativeCurrency: { name: 'Ether', symbol: 'OETH', decimals: 18 },
    infoURL: 'https://optimism.io',
    chainId: 10,
    aliases: ['optimism']
  },
  {
    name: 'Ethereum Testnet Kovan',
    chain: 'ETH',
    network: 'kovan',
    rpc: [
      'https://kovan.poa.network',
      'http://kovan.poa.network:8545',
      'https://kovan.infura.io/v3/${INFURA_API_KEY}',
      'wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}',
      'ws://kovan.poa.network:8546'
    ],
    faucets: ['https://faucet.kovan.network', 'https://gitter.im/kovan-testnet/faucet'],
    nativeCurrency: { name: 'Kovan Ether', symbol: 'KOV', decimals: 18 },
    infoURL: 'https://kovan-testnet.github.io/website',
    chainId: 42,
    aliases: ['kovan']
  },
  {
    name: 'Binance Smart Chain Mainnet',
    chain: 'BSC',
    network: 'mainnet',
    rpc: [
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'wss://bsc-ws-node.nariox.org'
    ],
    nativeCurrency: { name: 'Binance Chain Native Token', symbol: 'BNB', decimals: 18 },
    infoURL: 'https://www.binance.org',
    chainId: 56,
    explorers: [{ name: 'bscscan', url: 'https://bscscan.com', standard: 'EIP3091' }],
    aliases: ['bsc', 'binance']
  },
  {
    name: 'Ontology Mainnet',
    chain: 'Ontology',
    network: 'mainnet',
    rpc: [
      'https://dappnode1.ont.io:20339',
      'https://dappnode2.ont.io:20339',
      'https://dappnode3.ont.io:20339',
      'https://dappnode4.ont.io:20339'
    ],
    nativeCurrency: { name: 'ONG', symbol: 'ONG', decimals: 9 },
    infoURL: 'https://ont.io/',
    shortName: 'Ontology Mainnet',
    chainId: 58,
    explorers: [{ name: 'explorer', url: 'https://explorer.ont.io/', standard: 'EIP3091' }],
    aliases: ['ont', 'ontology']
  },
  {
    name: 'OKExChain Testnet',
    chain: 'okexchain',
    network: 'testnet',
    rpc: ['https://exchaintestrpc.okex.org'],
    faucets: ['https://www.okex.com/drawdex'],
    nativeCurrency: { name: 'OKExChain Global Utility Token in testnet', symbol: 'OKT', decimals: 18 },
    infoURL: 'https://www.okex.com/okexchain',
    chainId: 65,
    explorers: [{ name: 'OKLink', url: 'https://www.oklink.com/okexchain-test', standard: 'EIP3091' }],
    aliases: ['okex testnet']
  },
  {
    name: 'OKExChain Mainnet',
    chain: 'okexchain',
    network: 'mainnet',
    rpc: ['https://exchainrpc.okex.org'],
    nativeCurrency: { name: 'OKExChain Global Utility Token', symbol: 'OKT', decimals: 18 },
    infoURL: 'https://www.okex.com/okexchain',
    chainId: 66,
    explorers: [{ name: 'OKLink', url: 'https://www.oklink.com/okexchain', standard: 'EIP3091' }],
    aliases: ['okex']
  },
  {
    name: 'Optimistic Ethereum Testnet Kovan',
    chain: 'ETH',
    network: 'kovan',
    rpc: ['https://kovan.optimism.io/'],
    nativeCurrency: { name: 'Kovan Ether', symbol: 'KOR', decimals: 18 },
    infoURL: 'https://optimism.io',
    chainId: 69,
    aliases: ['optimism kovan']
  },
  {
    name: 'TomoChain',
    chain: 'TOMO',
    network: 'mainnet',
    rpc: ['https://rpc.tomochain.com'],
    nativeCurrency: { name: 'TomoChain Ether', symbol: 'TOMO', decimals: 18 },
    infoURL: 'https://tomocoin.io',
    chainId: 88,
    aliases: ['tomochain', 'tomo']
  },
  {
    name: 'Binance Smart Chain Testnet',
    chain: 'BSC',
    network: 'Chapel',
    rpc: [
      'https://data-seed-prebsc-1-s1.binance.org:8545',
      'https://data-seed-prebsc-2-s1.binance.org:8545',
      'https://data-seed-prebsc-1-s2.binance.org:8545',
      'https://data-seed-prebsc-2-s2.binance.org:8545',
      'https://data-seed-prebsc-1-s3.binance.org:8545',
      'https://data-seed-prebsc-2-s3.binance.org:8545'
    ],
    faucets: ['https://testnet.binance.org/faucet-smart'],
    nativeCurrency: { name: 'Binance Chain Native Token', symbol: 'tBNB', decimals: 18 },
    infoURL: 'https://testnet.binance.org/',
    chainId: 97,
    explorers: [{ name: 'bscscan-testnet', url: 'https://testnet.bscscan.com', standard: 'EIP3091' }],
    aliases: ['bsc testnet', 'chapel', 'binance testnet']
  },
  {
    name: 'xDAI Chain',
    chain: 'XDAI',
    network: 'mainnet',
    rpc: [
      'https://rpc.xdaichain.com',
      'https://xdai.poanetwork.dev',
      'wss://rpc.xdaichain.com/wss',
      'wss://xdai.poanetwork.dev/wss',
      'http://xdai.poanetwork.dev',
      'https://dai.poa.network',
      'ws://xdai.poanetwork.dev:8546'
    ],
    nativeCurrency: { name: 'xDAI', symbol: 'xDAI', decimals: 18 },
    infoURL: 'https://forum.poa.network/c/xdai-chain',
    chainId: 100,
    slip44: 700,
    aliases: ['xdai']
  },
  {
    name: 'Fuse Mainnet',
    chain: 'FUSE',
    network: 'mainnet',
    rpc: ['https://rpc.fuse.io'],
    nativeCurrency: { name: 'Fuse', symbol: 'FUSE', decimals: 18 },
    infoURL: 'https://fuse.io/',
    chainId: 122,
    aliases: ['fuse']
  },
  {
    name: 'Huobi ECO Chain Mainnet',
    chain: 'Heco',
    network: 'mainnet',
    rpc: ['https://http-mainnet.hecochain.com', 'wss://ws-mainnet.hecochain.com'],
    nativeCurrency: { name: 'Huobi ECO Chain Native Token', symbol: 'HT', decimals: 18 },
    infoURL: 'https://www.hecochain.com',
    chainId: 128,
    explorers: [{ name: 'hecoinfo', url: 'https://hecoinfo.com', standard: 'EIP3091' }],
    aliases: ['huobi', 'eco']
  },
  {
    name: 'Polygon Mainnet',
    chain: 'Polygon',
    network: 'mainnet',
    rpc: [
      'https://rpc-mainnet.matic.network',
      'wss://ws-mainnet.matic.network',
      'https://rpc-mainnet.matic.quiknode.pro',
      'https://matic-mainnet.chainstacklabs.com'
    ],
    nativeCurrency: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
    infoURL: 'https://matic.network/',
    chainId: 137,
    explorers: [{ name: 'polygonscan', url: 'https://polygonscan.com', standard: 'EIP3091' }],
    aliases: ['polygon', 'matic']
  },
  {
    name: 'Arbitrum on xDai',
    chain: 'AOX',
    network: 'xdai',
    rpc: ['https://arbitrum.xdaichain.com/'],
    nativeCurrency: { name: 'xDAI', symbol: 'xDAI', decimals: 18 },
    infoURL: 'https://xdaichain.com',
    chainId: 200,
    explorers: [{ name: 'blockscout', url: 'https://blockscout.com/xdai/arbitrum', standard: 'EIP3091' }],
    parent: { chain: 'eip155-100', type: 'L2' },
    aliases: ['xdai arbitrum']
  },
  {
    name: 'Fantom Opera',
    chain: 'FTM',
    network: 'mainnet',
    rpc: ['https://rpc.ftm.tools'],
    nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
    infoURL: 'https://fantom.foundation',
    chainId: 250,
    icon: 'fantom',
    explorers: [{ name: 'ftmscan', url: 'https://ftmscan.com', icon: 'ftmscan', standard: 'EIP3091' }],
    aliases: ['fantom', 'ftm']
  },
  {
    name: 'Huobi ECO Chain Testnet',
    chain: 'Heco',
    network: 'testnet',
    rpc: ['https://http-testnet.hecochain.com', 'wss://ws-testnet.hecochain.com'],
    faucets: ['https://scan-testnet.hecochain.com/faucet'],
    nativeCurrency: { name: 'Huobi ECO Chain Test Native Token', symbol: 'htt', decimals: 18 },
    infoURL: 'https://testnet.hecoinfo.com',
    chainId: 256,
    aliases: ['eco testnet', 'huobi testnet']
  },
  {
    name: 'Optimistic Ethereum Testnet Goerli',
    chain: 'ETH',
    network: 'goerli',
    rpc: ['https://goerli.optimism.io/'],
    nativeCurrency: { name: 'Görli Ether', symbol: 'GOR', decimals: 18 },
    infoURL: 'https://optimism.io',
    chainId: 420,
    aliases: ['optimism goerli']
  },
  {
    name: 'Callisto Mainnet',
    chain: 'CLO',
    network: 'mainnet',
    rpc: ['https://clo-geth.0xinfra.com'],
    nativeCurrency: { name: 'Callisto Mainnet Ether', symbol: 'CLO', decimals: 18 },
    infoURL: 'https://callisto.network',
    chainId: 820,
    slip44: 820,
    aliases: ['callisto']
  },
  {
    name: 'Klaytn Testnet Baobab',
    chain: 'KLAY',
    network: 'baobab',
    rpc: ['https://node-api.klaytnapi.com/v1/klaytn'],
    faucets: ['https://baobab.wallet.klaytn.com/access?next=faucet'],
    nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
    infoURL: 'https://www.klaytn.com/',
    chainId: 1001,
    aliases: ['klaytn testnet', 'klaytn baobab']
  },
  {
    name: 'Clover Mainnet',
    chain: 'Clover',
    network: 'clover mainnet',
    rpc: ['https://rpc-ivy.clover.finance', 'https://rpc-ivy-2.clover.finance', 'https://rpc-ivy-3.clover.finance'],
    nativeCurrency: { name: 'Clover', symbol: 'CLV', decimals: 18 },
    infoURL: 'https://clover.finance',
    chainId: 1024,
    aliases: ['clover']
  },
  {
    name: 'Edgeware Mainnet',
    chain: 'EDG',
    network: 'mainnet',
    rpc: ['https://mainnet1.edgewa.re'],
    nativeCurrency: { name: 'Edge', symbol: 'EDG', decimals: 18 },
    infoURL: 'http://edgewa.re',
    chainId: 2021,
    aliases: ['edgeware']
  },
  {
    name: 'Ontology Testnet',
    chain: 'Ontology',
    network: 'testnet',
    rpc: [
      'https://polaris1.ont.io:20339',
      'https://polaris2.ont.io:20339',
      'https://polaris3.ont.io:20339',
      'https://polaris4.ont.io:20339'
    ],
    faucets: ['https://developer.ont.io/'],
    nativeCurrency: { name: 'ONG', symbol: 'ONG', decimals: 9 },
    infoURL: 'https://ont.io/',
    shortName: 'Ontology Testnet',
    chainId: 5851,
    explorers: [{ name: 'explorer', url: 'https://explorer.ont.io/testnet', standard: 'EIP3091' }],
    aliases: ['ontology testnet']
  },
  {
    name: 'Klaytn Mainnet Cypress',
    chain: 'KLAY',
    network: 'cypress',
    rpc: ['https://node-api.klaytnapi.com/v1/klaytn'],
    nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
    infoURL: 'https://www.klaytn.com/',
    chainId: 8217,
    slip44: 8217,
    aliases: ['klaytn', 'klaytn cypress']
  },
  {
    name: 'Arbitrum One',
    chainId: 42161,
    chain: 'ETH',
    network: 'mainnet',
    nativeCurrency: { name: 'Ether', symbol: 'AETH', decimals: 18 },
    rpc: [
      'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
      'https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}',
      'https://arb1.arbitrum.io/rpc',
      'wss://arb1.arbitrum.io/ws'
    ],
    explorers: [
      { name: 'Arbiscan', url: 'https://arbiscan.io', standard: 'EIP3091' },
      { name: 'Arbitrum Explorer', url: 'https://explorer.arbitrum.io', standard: 'EIP3091' }
    ],
    infoURL: 'https://arbitrum.io',
    aliases: ['arb', 'arbitrum']
  },
  {
    name: 'Celo Mainnet',
    chainId: 42220,
    chain: 'CELO',
    network: 'Mainnet',
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: ['https://forno.celo.org', 'wss://forno.celo.org/ws'],
    infoURL: 'https://docs.celo.org/',
    aliases: ['celo']
  },
  {
    name: 'Avalanche Fuji Testnet',
    chain: 'AVAX',
    network: 'testnet',
    rpc: ['https://api.avax-test.network/ext/bc/C/rpc'],
    faucets: ['https://faucet.avax-test.network/'],
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    infoURL: 'https://cchain.explorer.avax-test.network',
    chainId: 43113,
    aliases: ['avax testnet', 'avalanche testnet', 'avax fuji', 'avalanche fuji']
  },
  {
    name: 'Avalanche Mainnet',
    chain: 'AVAX',
    network: 'mainnet',
    rpc: ['https://api.avax.network/ext/bc/C/rpc'],
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    infoURL: 'https://cchain.explorer.avax.network/',
    chainId: 43114,
    aliases: ['avax', 'avalanche']
  },
  {
    name: 'Celo Alfajores Testnet',
    chainId: 44787,
    chain: 'CELO',
    network: 'Alfajores',
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: ['https://alfajores-forno.celo-testnet.org', 'wss://alfajores-forno.celo-testnet.org/ws'],
    faucets: ['https://celo.org/developers/faucet', 'https://cauldron.pretoriaresearchlab.io/alfajores-faucet'],
    infoURL: 'https://docs.celo.org/',
    aliases: ['celo testnet', 'celo alfajores']
  },
  {
    name: 'Celo Baklava Testnet',
    chainId: 62320,
    chain: 'CELO',
    network: 'Baklava',
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: ['https://baklava-forno.celo-testnet.org'],
    faucets: [
      'https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform',
      'https://cauldron.pretoriaresearchlab.io/baklava-faucet'
    ],
    infoURL: 'https://docs.celo.org/',
    aliases: ['celo testnet', 'celo baklava']
  },
  {
    name: 'Polygon Testnet Mumbai',
    chain: 'Polygon',
    network: 'testnet',
    rpc: ['https://rpc-mumbai.matic.today', 'wss://ws-mumbai.matic.today'],
    faucets: ['https://faucet.matic.network/'],
    nativeCurrency: { name: 'Matic', symbol: 'tMATIC', decimals: 18 },
    infoURL: 'https://matic.network/',
    chainId: 80001,
    explorers: [{ name: 'polygonscan', url: 'https://mumbai.polygonscan.com/', standard: 'EIP3091' }],
    aliases: ['matic testnet', 'polygon testnet']
  },
  {
    name: 'Arbitrum Testnet Rinkeby',
    chainId: 421611,
    chain: 'ETH',
    network: 'rinkeby',
    nativeCurrency: { name: 'Arbitrum Rinkeby Ether', symbol: 'ARETH', decimals: 18 },
    rpc: ['https://rinkeby.arbitrum.io/rpc', 'wss://rinkeby.arbitrum.io/ws'],
    infoURL: 'https://arbitrum.io',
    explorers: [{ name: 'arbitrum-rinkeby', url: 'https://rinkeby-explorer.arbitrum.io', standard: 'EIP3091' }],
    aliases: ['arb testnet', 'arbitrum testnet', 'arb rinkeby', 'arbitrum rinkeby']
  },
  {
    name: 'Aurora MainNet',
    chain: 'NEAR',
    network: 'mainnet',
    rpc: ['https://rpc.mainnet.aurora.dev:8545'],
    nativeCurrency: { name: 'Ether', symbol: 'aETH', decimals: 18 },
    infoURL: 'https://aurora.dev',
    chainId: 1313161554,
    aliases: ['near', 'aurora']
  },
  {
    name: 'Aurora TestNet',
    chain: 'NEAR',
    network: 'testnet',
    rpc: ['https://rpc.testnet.aurora.dev:8545'],
    nativeCurrency: { name: 'Ether', symbol: 'aETH', decimals: 18 },
    infoURL: 'https://aurora.dev',
    chainId: 1313161555,
    aliases: ['near testnet', 'aurora testnet']
  }
]
