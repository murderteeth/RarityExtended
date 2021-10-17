/******************************************************************************
**	@Author:				Rarity Extended
**	@Twitter:				@RXtended
**	@Date:					October 17th 2021
**	@Filename:				dungeonTheForest.abi.js
******************************************************************************/

const	ABI = [
  {
      "inputs":
      [
          {
              "internalType": "address",
              "name": "_rarity",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_attributes",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_skills",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_codex_base_random",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_forest",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": false,
      "inputs":
      [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "owner",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "approved",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs":
      [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "owner",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "operator",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
          }
      ],
      "name": "ApprovalForAll",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs":
      [
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "summoner",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "int256",
              "name": "check",
              "type": "int256"
          },
          {
              "indexed": false,
              "internalType": "bool",
              "name": "success",
              "type": "bool"
          },
          {
              "indexed": false,
              "internalType": "bool",
              "name": "crit",
              "type": "bool"
          }
      ],
      "name": "Perform",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs":
      [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "summoner",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "PrizeAwarded",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs":
      [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "from",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "to",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "from",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "to",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "attributes",
      "outputs":
      [
          {
              "internalType": "contract iAttributes",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "owner",
              "type": "uint256"
          }
      ],
      "name": "balanceOf",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "difficultyClass",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "doorPrizes",
      "outputs":
      [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "forest",
      "outputs":
      [
          {
              "internalType": "contract iForest",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "getApproved",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getDoorPrizes",
      "outputs":
      [
          {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "summoner",
              "type": "uint256"
          }
      ],
      "name": "getPerformance",
      "outputs":
      [
          {
              "components":
              [
                  {
                      "internalType": "uint256",
                      "name": "blockTime",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bool",
                      "name": "success",
                      "type": "bool"
                  }
              ],
              "internalType": "struct RarityOpenMic.Performance",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "summoner",
              "type": "uint256"
          }
      ],
      "name": "getPrizes",
      "outputs":
      [
          {
              "components":
              [
                  {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bool",
                      "name": "rare",
                      "type": "bool"
                  },
                  {
                      "internalType": "uint256",
                      "name": "index",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                  }
              ],
              "internalType": "struct RarityOpenMic.PrizeView[]",
              "name": "",
              "type": "tuple[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getRarePrizes",
      "outputs":
      [
          {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "intermission",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "owner",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "operator",
              "type": "uint256"
          }
      ],
      "name": "isApprovedForAll",
      "outputs":
      [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "name",
      "outputs":
      [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "ownerOf",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "summoner",
              "type": "uint256"
          }
      ],
      "name": "perform",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "perform_skill",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "random",
      "outputs":
      [
          {
              "internalType": "contract iCodexBaseRandom",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "rarePrizes",
      "outputs":
      [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "rarity",
      "outputs":
      [
          {
              "internalType": "contract iRarity",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "rm",
      "outputs":
      [
          {
              "internalType": "contract IRarity",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "from",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "to",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
          }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "from",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "to",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "from",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "operator",
              "type": "uint256"
          },
          {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
          }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "skills",
      "outputs":
      [
          {
              "internalType": "contract iSkills",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "symbol",
      "outputs":
      [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "summoner",
              "type": "uint256"
          }
      ],
      "name": "timeToNextPerformance",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
          }
      ],
      "name": "tokenByIndex",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "tokenCounter",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "owner",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
          }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "tokenURI",
      "outputs":
      [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "totalSupply",
      "outputs":
      [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs":
      [
          {
              "internalType": "uint256",
              "name": "from",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "to",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }
];

export default ABI;
