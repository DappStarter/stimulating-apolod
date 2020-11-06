require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin argue bridge suffer'; 
let testAccounts = [
"0xf00fad64c50710182a5043044f3c303a239d30f3aae91954bbbcdb0422683854",
"0xfb89cb7df1601996b381a4eb33b568f4b41e3a808762438ebba8102dd00ffba3",
"0x1cb64f274895b51fc13d325835c859dfb6e3a6e918a735fa6b3d621152ce1a88",
"0xeec98de8ed0917498993b89c49f176144a5c6c43168e76703fda5cd3dc7884c3",
"0x98c42cd74ac545dcb553f73a1bfa81ea209682b96a9218062f1310a7b10c8e0d",
"0x3fda86d9f29e026806e35318ffc0828dc76f92ee795c557e8a0f1fe5cef94ecd",
"0x38fe8fd90d241de2e2ddd663a0210ba3ee2d08ee12d4bbae06c5ce4e5beb95e8",
"0x12cc06f3da9c63ab48c72239ccbeb88cc3ac7d61541c16631054f5a6f3bd3947",
"0x4eff11014e3c8451750e45737a84bceeac1de19c6c436dae93cb24604db61aea",
"0x6866f88e4e7dd11bd9b84364d5d15c8afa43f147408d8d696adcec7e9c5d5493"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
