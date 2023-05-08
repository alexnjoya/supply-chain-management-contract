const Shipping = artifacts.require("Shipping");

module.exports = function (deployer) {
  deployer.deploy(Shipping);
};