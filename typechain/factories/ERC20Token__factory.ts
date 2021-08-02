/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20Token } from "../ERC20Token";

export class ERC20Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ERC20Token> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<ERC20Token>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): ERC20Token {
    return super.attach(address) as ERC20Token;
  }
  connect(signer: Signer): ERC20Token__factory {
    return super.connect(signer) as ERC20Token__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Token {
    return new Contract(address, _abi, signerOrProvider) as ERC20Token;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015cb380380620015cb8339810160408190526200003491620002c7565b8151829082906200004d90600490602085019062000176565b5080516200006390600590602084019062000176565b505050620000a76040516020016200007b906200032e565b60405160208183030381529060405280519060200120620000a1620000af60201b60201c565b620000b3565b505062000398565b3390565b620000bf8282620000c3565b5050565b620000cf82826200014d565b620000bf576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905562000109620000af565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b828054620001849062000345565b90600052602060002090601f016020900481019282620001a85760008555620001f3565b82601f10620001c357805160ff1916838001178555620001f3565b82800160010185558215620001f3579182015b82811115620001f3578251825591602001919060010190620001d6565b506200020192915062000205565b5090565b5b8082111562000201576000815560010162000206565b600082601f8301126200022d578081fd5b81516001600160401b03808211156200024a576200024a62000382565b6040516020601f8401601f191682018101838111838210171562000272576200027262000382565b604052838252858401810187101562000289578485fd5b8492505b83831015620002ac57858301810151828401820152918201916200028d565b83831115620002bd57848185840101525b5095945050505050565b60008060408385031215620002da578182fd5b82516001600160401b0380821115620002f1578384fd5b620002ff868387016200021c565b9350602085015191508082111562000315578283fd5b5062000324858286016200021c565b9150509250929050565b6a4d494e5445525f524f4c4560a81b8152600b0190565b6002810460018216806200035a57607f821691505b602082108114156200037c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61122380620003a86000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806340c10f19116100ad578063a457c2d711610071578063a457c2d714610256578063a9059cbb14610269578063d53913931461027c578063d547741f14610284578063dd62ed3e146102975761012c565b806340c10f191461020d57806370a082311461022057806391d148541461023357806395d89b4114610246578063a217fddf1461024e5761012c565b8063248a9ca3116100f4578063248a9ca3146101aa5780632f2ff15d146101bd578063313ce567146101d257806336568abe146101e757806339509351146101fa5761012c565b806301ffc9a71461013157806306fdde031461015a578063095ea7b31461016f57806318160ddd1461018257806323b872dd14610197575b600080fd5b61014461013f366004610d7d565b6102aa565b6040516101519190610e31565b60405180910390f35b6101626102d7565b6040516101519190610e45565b61014461017d366004610d1a565b610369565b61018a610386565b6040516101519190610e3c565b6101446101a5366004610cdf565b61038c565b61018a6101b8366004610d43565b610425565b6101d06101cb366004610d5b565b61043a565b005b6101da610463565b6040516101519190611114565b6101d06101f5366004610d5b565b610468565b610144610208366004610d1a565b6104ae565b6101d061021b366004610d1a565b610502565b61018a61022e366004610c93565b61053d565b610144610241366004610d5b565b610558565b610162610581565b61018a610590565b610144610264366004610d1a565b610595565b610144610277366004610d1a565b61060e565b61018a610622565b6101d0610292366004610d5b565b61064a565b61018a6102a5366004610cad565b610669565b60006001600160e01b03198216637965db0b60e01b14806102cf57506102cf82610694565b90505b919050565b6060600480546102e69061119c565b80601f01602080910402602001604051908101604052809291908181526020018280546103129061119c565b801561035f5780601f106103345761010080835404028352916020019161035f565b820191906000526020600020905b81548152906001019060200180831161034257829003601f168201915b5050505050905090565b600061037d6103766106ad565b84846106b1565b50600192915050565b60035490565b6000610399848484610765565b6001600160a01b0384166000908152600260205260408120816103ba6106ad565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156104065760405162461bcd60e51b81526004016103fd90610f78565b60405180910390fd5b61041a856104126106ad565b8584036106b1565b506001949350505050565b60009081526020819052604090206001015490565b61044382610425565b6104548161044f6106ad565b61088f565b61045e83836108f3565b505050565b601290565b6104706106ad565b6001600160a01b0316816001600160a01b0316146104a05760405162461bcd60e51b81526004016103fd9061108e565b6104aa8282610978565b5050565b600061037d6104bb6106ad565b8484600260006104c96106ad565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546104fd9190611122565b6106b1565b60405160200161051190610da5565b604051602081830303815290604052805190602001206105338161044f6106ad565b61045e83836109fb565b6001600160a01b031660009081526001602052604090205490565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600580546102e69061119c565b600081565b600080600260006105a46106ad565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156105f05760405162461bcd60e51b81526004016103fd90611049565b6106046105fb6106ad565b858584036106b1565b5060019392505050565b600061037d61061b6106ad565b8484610765565b60405160200161063190610da5565b6040516020818303038152906040528051906020012081565b61065382610425565b61065f8161044f6106ad565b61045e8383610978565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6001600160e01b031981166301ffc9a760e01b14919050565b3390565b6001600160a01b0383166106d75760405162461bcd60e51b81526004016103fd90611005565b6001600160a01b0382166106fd5760405162461bcd60e51b81526004016103fd90610ef0565b6001600160a01b0380841660008181526002602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610758908590610e3c565b60405180910390a3505050565b6001600160a01b03831661078b5760405162461bcd60e51b81526004016103fd90610fc0565b6001600160a01b0382166107b15760405162461bcd60e51b81526004016103fd90610ead565b6107bc83838361045e565b6001600160a01b038316600090815260016020526040902054818110156107f55760405162461bcd60e51b81526004016103fd90610f32565b6001600160a01b0380851660009081526001602052604080822085850390559185168152908120805484929061082c908490611122565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108769190610e3c565b60405180910390a361088984848461045e565b50505050565b6108998282610558565b6104aa576108b1816001600160a01b03166014610ac3565b6108bc836020610ac3565b6040516020016108cd929190610dbc565b60408051601f198184030181529082905262461bcd60e51b82526103fd91600401610e45565b6108fd8282610558565b6104aa576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556109346106ad565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6109828282610558565b156104aa576000828152602081815260408083206001600160a01b03851684529091529020805460ff191690556109b76106ad565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6001600160a01b038216610a215760405162461bcd60e51b81526004016103fd906110dd565b610a2d6000838361045e565b8060036000828254610a3f9190611122565b90915550506001600160a01b03821660009081526001602052604081208054839290610a6c908490611122565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610aaf908590610e3c565b60405180910390a36104aa6000838361045e565b60606000610ad283600261113a565b610add906002611122565b67ffffffffffffffff811115610b0357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610b2d576020820181803683370190505b509050600360fc1b81600081518110610b5657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610b9357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610bb784600261113a565b610bc2906001611122565b90505b6001811115610c56576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610c0457634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610c2857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610c4f81611185565b9050610bc5565b508315610c755760405162461bcd60e51b81526004016103fd90610e78565b9392505050565b80356001600160a01b03811681146102d257600080fd5b600060208284031215610ca4578081fd5b610c7582610c7c565b60008060408385031215610cbf578081fd5b610cc883610c7c565b9150610cd660208401610c7c565b90509250929050565b600080600060608486031215610cf3578081fd5b610cfc84610c7c565b9250610d0a60208501610c7c565b9150604084013590509250925092565b60008060408385031215610d2c578182fd5b610d3583610c7c565b946020939093013593505050565b600060208284031215610d54578081fd5b5035919050565b60008060408385031215610d6d578182fd5b82359150610cd660208401610c7c565b600060208284031215610d8e578081fd5b81356001600160e01b031981168114610c75578182fd5b6a4d494e5445525f524f4c4560a81b8152600b0190565b60007f416363657373436f6e74726f6c3a206163636f756e742000000000000000000082528351610df4816017850160208801611159565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610e25816028840160208801611159565b01602801949350505050565b901515815260200190565b90815260200190565b6000602082528251806020840152610e64816040850160208701611159565b601f01601f19169190910160400192915050565b6020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252602f908201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560408201526e103937b632b9903337b91039b2b63360891b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b60008219821115611135576111356111d7565b500190565b6000816000190483118215151615611154576111546111d7565b500290565b60005b8381101561117457818101518382015260200161115c565b838111156108895750506000910152565b600081611194576111946111d7565b506000190190565b6002810460018216806111b057607f821691505b602082108114156111d157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220cf28fa469d0c90b8279eb6fc299018c9115fa63b441794ee1ed6f7927d0b7a6b64736f6c63430008000033";