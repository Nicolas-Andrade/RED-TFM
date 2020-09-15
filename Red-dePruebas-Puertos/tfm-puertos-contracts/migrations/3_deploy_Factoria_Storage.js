const Migrations = artifacts.require("FactoriaStorage");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
