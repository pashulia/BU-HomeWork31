const Web3 = require('web3')

async function main() {
    let web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9')

    let entropy = "12345678901234567890123456789012"
    //если не указать ентропию она сама сгенерирует строку из 32 символов
    let account1 = web3.eth.accounts.create(entropy)
    console.log(account1);
}

main()

.then(() => process.exit(0))

.catch((error) => {
    console.error(error);
    process.exit(1);
})
