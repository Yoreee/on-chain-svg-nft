// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "base64-sol/base64.sol";

contract SVGNFT is ERC721URIStorage {
    uint256 public tokenCounter;
    event createdSVGNFT(uint256 indexed tokenID, string tokenURI);
    constructor() ERC721("SVGNFT", "svgNFt") {
        tokenCounter = 0;
    }

    function create(string memory svg) public {
        _safeMint(msg.sender, tokenCounter);
        string memory imageURI = svgToImageUri(svg);
        string memory tokenURI = formatTokenURI(imageURI);
        _setTokenURI(tokenCounter, tokenURI);
        //tokenuri?
        //imageuri?
        emit createdSVGNFT(tokenCounter, tokenURI);
        
        tokenCounter = tokenCounter + 1;
        // return tokenURI;
    }

    function svgToImageUri(string memory svg) public pure returns (string memory) {
        // SVG <svg> </svg> 
        // into this
        // data: image/svg+xml;base64,<Base64-encoding>
        // So we need to turn the SVG xml code string into a Base64 encoded string

        string memory baseURL = "data: image/svg+xml;base64,";
        string memory svgBase64Encoded = Base64.encode(bytes(string(abi.encodePacked(svg))));
        string memory imageURI = string(abi.encodePacked(baseURL, svgBase64Encoded));

        return imageURI;
    }

    function formatTokenURI(string memory imageURI) public pure returns (string memory)
    {
        string memory baseURL = "data:application/json;base64,";
        return string(abi.encodePacked(
                baseURL,
                Base64.encode(
                    bytes(abi.encodePacked(
                        '{"name": "SVG NFT",', 
                        '"description: NFT made with SVG",', 
                        '"attributes: "", image: "', 
                            imageURI, 
                        '"}'
                        )
                    )
                )
        ));
    }

}