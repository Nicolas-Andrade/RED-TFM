const Migrations = artifacts.require("Viaje");

module.exports = function(deployer) {
  deployer.deploy(Migrations,1,'COsta brava','España','Pesca','0x2ed622769Bf53dC4E52c659Ca0E140651716e9e3');
};          
