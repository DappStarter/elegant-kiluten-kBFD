require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth pumpkin collect install permit fortune gas'; 
let testAccounts = [
"0x0a24e749e839dbcf740de0867c568b17c2d639b05251a83299b155d3a4072683",
"0x22d2312165d495968104db096929c5de010b7905f16cecdc0648a6ff98736391",
"0x1ecc70c806fe740e564823d4974b9de5b78fbb33c127a82e875df8ac46a1861a",
"0xc1377314d1f5748b43ce8ded89a8cc1525de9df6d2bed3c728b5c2cca19fb300",
"0x04cf59f331dfe9488a6c57422b8fa58a1d66c4c487bc023883389632e529b2a2",
"0xa0b7c03fca84790bc16679ab3525e5c8585442851554e3f67afc33efe2c10d42",
"0x0d0ff0de7b38e679c03938213c425ce5733bbbdf4a0ea856044213deb2efb38d",
"0x65c6ef6560424203b8831829eae9f7b51447518859e91c155e264b51deb060e6",
"0x698b36141348bd4fa40154bd3c0715ac40c0472ef1c7ea08c5db26cc545eec3d",
"0x0f8bc8b051fb233ceeefa12bb8419a5593a463df3ad36a19d19794a299e11b0c"
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
            version: '^0.8.0'
        }
    }
};

