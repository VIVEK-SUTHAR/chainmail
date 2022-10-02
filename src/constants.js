const CONTRACT_ADDRESS = "0x401b8D4CE9E941763b572B9c81B1c06b410E58aA";

const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "reciever",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
    ],
    name: "MailSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reciever_",
        type: "address",
      },
      {
        internalType: "string",
        name: "subject",
        type: "string",
      },
      {
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "hash",
        type: "string",
      },
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "sendMail",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMyInBox",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "reciever",
            type: "address",
          },
          {
            internalType: "string",
            name: "subject",
            type: "string",
          },
          {
            internalType: "string",
            name: "body",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timeStamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ipfshash",
            type: "string",
          },
          {
            internalType: "string",
            name: "filename",
            type: "string",
          },
        ],
        internalType: "struct ChainMail.Mail[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSentEmails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "reciever",
            type: "address",
          },
          {
            internalType: "string",
            name: "subject",
            type: "string",
          },
          {
            internalType: "string",
            name: "body",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timeStamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ipfshash",
            type: "string",
          },
          {
            internalType: "string",
            name: "filename",
            type: "string",
          },
        ],
        internalType: "struct ChainMail.Mail[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "inbox",
    outputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "reciever",
        type: "address",
      },
      {
        internalType: "string",
        name: "subject",
        type: "string",
      },
      {
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ipfshash",
        type: "string",
      },
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sentMails",
    outputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "reciever",
        type: "address",
      },
      {
        internalType: "string",
        name: "subject",
        type: "string",
      },
      {
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ipfshash",
        type: "string",
      },
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export { CONTRACT_ADDRESS, ABI };
