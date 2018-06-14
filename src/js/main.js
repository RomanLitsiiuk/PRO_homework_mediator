var blocksMediator = {
  blocks: [],
  addBlock: function (block) {
    this.blocks.push(block);
  },
  sendSize: function (block) {
    for (var i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i] !== block) {
        this.blocks[i].shrink();
      }
    }
  }
};

var block1 = new Block(blocksMediator, document.querySelector('#firstAction'));
var block2 = new Block(blocksMediator, document.querySelector('#secondAction'));
var block3 = new Block(blocksMediator, document.querySelector('#thirdAction'));

blocksMediator.addBlock(block1);
blocksMediator.addBlock(block2);
blocksMediator.addBlock(block3);
