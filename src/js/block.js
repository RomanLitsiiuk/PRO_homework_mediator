var Block = function (mediator, rootElement) {
  this.rootElement = rootElement;
  this.mediator = mediator;
};

Block.classNames = {
  active: 'isActive'
};

Block.prototype.grow = function () {
  this.rootElement.classList.add(Block.classNames.active);
  this.mediator.sendSize(this);
};

Block.prototype.shrink = function () {
  this.rootElement.classList.remove(Block.classNames.active);
};