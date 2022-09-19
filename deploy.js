const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  const provider = new ethers.provider.JsonRpcProvider(
    "https://127.0.0.1:7545"
  );
  const wallet = new ethers.wallet(
    "22634690fbed64ff2ef6c07101d619e8b83c2d1f3b7aaf32f6341d7ff01f1f0b",
    provider
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
