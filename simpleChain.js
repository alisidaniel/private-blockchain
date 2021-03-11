const SHA256 = require("crypto-js/sha256");
/* ======= Block Class ===============
   Class with a constructor for block 
   =================================== */

class Block {
  constructor(data) {
    this.hash = "",
    this.height = 0,
    this.body = data,
    this.time = 0,
    this.previousBlockHash = ""
  }
}

class Blockchain {
  chain = [];
  constructor() {
    this.chain;
    this.addBlock(new Block("First block in chain - Genesis block"));
  }

  addBlock(newBlock) {
    // reference block height 
    newBlock.height = this.chain.length;

    //timestamp
    newBlock.time = new Date().getTime().toString().slice(0, -3);

    // reference to previous block hash
    if (this.chain.length > 0) {
      newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}
