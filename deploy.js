const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_CLIENT);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying the contract..");
  const contract = await contractFactory.deploy();
  await contract.deployTransaction.wait(1);
  // Get Number
  const number = await contract.retrieve("Jatt");
  console.log(`The old number is ${number}`);
  const txnResponse = await contract.store("Jatt", 98);
  await txnResponse.wait(1);
  const newNumber = await contract.retrieve("Jatt");
  console.log(`The new number is ${newNumber}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
