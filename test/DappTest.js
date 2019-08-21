const DappToken = artifacts.require("DappToken");

contract("DappToken", function(accounts) {
  it("sets the total supply upon deployment", async function() {
    var tokenInstance = await DappToken.deployed();
    var totalSupply = await tokenInstance.totalSupply();
    assert.equal(
      totalSupply.toNumber(),
      1000000,
      "sets the total supply to 1,000,000"
    );
  });
});
