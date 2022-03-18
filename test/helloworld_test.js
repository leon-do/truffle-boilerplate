const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", accounts => {
    it("should have the correct initial state", async () => {
        const helloWorld = await HelloWorld.deployed();
        const message = await helloWorld.hello.call();
        assert.equal(message, "world");
    });
})