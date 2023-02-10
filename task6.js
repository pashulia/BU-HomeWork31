const Web3 = require('web3')
let web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9')

async function main() {
    let slot = web3.utils.keccak256('0x0000000000000000000000000000000000000000000000000000000000000002')

    let size = web3.utils.hexToNumber(await web3.eth.getStorageAt(
        '0x12f428dfb80BA48e4F373681D237E00660dEEea1',
        2
    ))

    for (let i = 0; i < size; i++) {
        let res = await web3.eth.getStorageAt(
            '0x12f428dfb80BA48e4F373681D237E00660dEEea1',
            web3.utils.toBN(slot).add(web3.utils.toBN(i))
        )
        console.log('index' + i + ': ' + web3.extend.utils.toDecimal(res));
    }
}

main()

.then(() => process.exit(0))

.catch((error) => {
    console.error(error);
    process.exit(1);
})

