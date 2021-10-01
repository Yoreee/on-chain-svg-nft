// const { ethers } = require("hardhat")
const fs = require("fs")
let { networkConfig } = require('../helper-hardhat-config')
// const { hrtime } = require("process")

module.exports = async({
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const {deploy, log} = deployments
    const {deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    log("------------------------------------------------")
    const SVGNFT = await deploy("SVGNFT", {
        from: deployer,
        log: true
    })

    log(`YOU HAVE DEPLOYED an NFT CONTRACT TO ${SVGNFT.address}`)

    let filePath = "./img/circle.svg"
    let svg = fs.readFileSync(filePath, {encoding: "utf8"})

    const svgNFTContract = await ethers.getContractFactory("SVGNFT");
    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];
    const svgNFT = new ethers.Contract(SVGNFT.address, svgNFTContract.interface, signer);
    const networkName = networkConfig[chainId]['name'];
    log(`Verify with: \n npx hardhat verify --network ${networkName} ${svgNFT.address}`)

    let transactionResponse = await svgNFT.create(svg);
    let receipt = await transactionResponse.wait(1);
    log(`ya made an NFT!!`)
    // log(`${svg}`)
    log(`${receipt.events[1].args[1]}`)
    
    let tokenuri = svgNFT.tokenURI(0);
    log(`you can view the tokenURI here ${await tokenuri}`)
    // log(`${JSON.stringify(signer)}`)
    
}