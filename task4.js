const Web3 = require('web3')
let web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9')

async function main() {
    let account1 = web3.eth.accounts.create()
    let key = "0x503f810e79ace98fffe967053f790a99699bc2f5168f24949c365be6bb784f68"
    let account2 = web3.eth.accounts.privateKeyToAccount(key)
     // создание и подпись транзакции 
    let transaction = await web3.eth.accounts.signTransaction({
        to: account2.address,
        gas: 21000,
        value: 1000000
    }, account1.privateKey)
    
    console.log(transaction);
}

main()

.then(() => process.exit(0))

.catch((error) => {
    console.error(error);
    process.exit(1);
})