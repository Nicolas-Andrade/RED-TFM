// 1_initial_migration.js

const Migrations = artifacts.require('./Barco.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations,'IMO 8814275','Pesquera',20,30,'Diesel',1234,12345678,'España',500);
};

