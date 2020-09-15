const Migrations = artifacts.require("FactoriaViaje");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
