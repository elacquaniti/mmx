const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  // artifact
  deployer.deploy(Migrations);
};
