var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};

var FoodCoin = artifacts.require("./contracts/FoodCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(FoodCoin);
};
