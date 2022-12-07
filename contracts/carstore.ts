export type Carstore = {
  "version": "0.1.0",
  "name": "carstore",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "carTypeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carStoreAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "carTypeAccountBump",
          "type": "u8"
        },
        {
          "name": "carAccountBump",
          "type": "u8"
        },
        {
          "name": "userAccountBump",
          "type": "u8"
        },
        {
          "name": "carStoreInfoBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addCarType",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "carTypeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "carTypeName",
          "type": "string"
        },
        {
          "name": "carTypeDescription",
          "type": "string"
        },
        {
          "name": "carBrandName",
          "type": "string"
        },
        {
          "name": "carTypePrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addCar",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "carAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carStoreAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "carTypeId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userName",
          "type": "string"
        },
        {
          "name": "userAddress",
          "type": "string"
        }
      ]
    },
    {
      "name": "buyCar",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "reciverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carTypeAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "carStoreAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "carId",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "carStoreAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "carTypeAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "list",
            "type": {
              "vec": {
                "defined": "CarType"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "carAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "list",
            "type": {
              "vec": {
                "defined": "Car"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "list",
            "type": {
              "vec": {
                "defined": "User"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CarType",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "carTypeId",
            "type": "u64"
          },
          {
            "name": "carTypeName",
            "type": "string"
          },
          {
            "name": "carTypeDescription",
            "type": "string"
          },
          {
            "name": "carBrandName",
            "type": "string"
          },
          {
            "name": "carTypePrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Car",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "carId",
            "type": "u64"
          },
          {
            "name": "carTypeId",
            "type": "u64"
          },
          {
            "name": "carAvailable",
            "type": "bool"
          },
          {
            "name": "carOwner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "User",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userId",
            "type": "u64"
          },
          {
            "name": "userName",
            "type": "string"
          },
          {
            "name": "userAddress",
            "type": "string"
          },
          {
            "name": "userOwner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "MyEvent",
      "fields": [
        {
          "name": "data",
          "type": "u64",
          "index": false
        },
        {
          "name": "label",
          "type": {
            "array": [
              "u8",
              5
            ]
          },
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "RequireUser",
      "msg": "buy_car: require user"
    },
    {
      "code": 6001,
      "name": "NotSigner",
      "msg": "buy_car: not signer"
    },
    {
      "code": 6002,
      "name": "ReciverAccountNotowner",
      "msg": "buy_car: rerciver account not owner"
    }
  ]
};

export const IDL: Carstore = {
  "version": "0.1.0",
  "name": "carstore",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "carTypeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carStoreAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "carTypeAccountBump",
          "type": "u8"
        },
        {
          "name": "carAccountBump",
          "type": "u8"
        },
        {
          "name": "userAccountBump",
          "type": "u8"
        },
        {
          "name": "carStoreInfoBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addCarType",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "carTypeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "carTypeName",
          "type": "string"
        },
        {
          "name": "carTypeDescription",
          "type": "string"
        },
        {
          "name": "carBrandName",
          "type": "string"
        },
        {
          "name": "carTypePrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addCar",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "carAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carStoreAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "carTypeId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addUser",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userName",
          "type": "string"
        },
        {
          "name": "userAddress",
          "type": "string"
        }
      ]
    },
    {
      "name": "buyCar",
      "accounts": [
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "reciverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "carTypeAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "carStoreAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "carId",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "carStoreAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "carTypeAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "list",
            "type": {
              "vec": {
                "defined": "CarType"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "carAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "list",
            "type": {
              "vec": {
                "defined": "Car"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "list",
            "type": {
              "vec": {
                "defined": "User"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CarType",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "carTypeId",
            "type": "u64"
          },
          {
            "name": "carTypeName",
            "type": "string"
          },
          {
            "name": "carTypeDescription",
            "type": "string"
          },
          {
            "name": "carBrandName",
            "type": "string"
          },
          {
            "name": "carTypePrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Car",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "carId",
            "type": "u64"
          },
          {
            "name": "carTypeId",
            "type": "u64"
          },
          {
            "name": "carAvailable",
            "type": "bool"
          },
          {
            "name": "carOwner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "User",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userId",
            "type": "u64"
          },
          {
            "name": "userName",
            "type": "string"
          },
          {
            "name": "userAddress",
            "type": "string"
          },
          {
            "name": "userOwner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "MyEvent",
      "fields": [
        {
          "name": "data",
          "type": "u64",
          "index": false
        },
        {
          "name": "label",
          "type": {
            "array": [
              "u8",
              5
            ]
          },
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "RequireUser",
      "msg": "buy_car: require user"
    },
    {
      "code": 6001,
      "name": "NotSigner",
      "msg": "buy_car: not signer"
    },
    {
      "code": 6002,
      "name": "ReciverAccountNotowner",
      "msg": "buy_car: rerciver account not owner"
    }
  ]
};
