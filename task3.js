const Web3 = require('web3')
let web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9')

async function main() {
    let password = "password"
    // создание кошелька
    let wallet = web3.eth.accounts.wallet.create(3)
    let encodeWallet = web3.eth.accounts.wallet.encrypt(password)
    console.log(encodeWallet);
}

main()

.then(() => process.exit(0))

.catch((error) => {
    console.error(error);
    process.exit(1);
})