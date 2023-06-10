import { ethers } from "hardhat";

async function main() {
  //   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  //   const unlockTime = currentTimestampInSeconds + 60;

  //   const lockedAmount = ethers.utils.parseEther("0.001");

  //   const Lock = await ethers.getContractFactory("Lock");
  //   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  //   await lock.deployed();

  //   console.log(
  //     `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  //   );

  const Token = await ethers.getContractFactory("Floppy");
  const token = await Token.deploy();
  console.log("token: " + (await token.getAddress()));

  const USDT = await ethers.getContractFactory("USDT");
  const usdt = await USDT.deploy();
  console.log("usdt: " + (await usdt.getAddress()));

  const FLPCrownSale = await ethers.getContractFactory("FLPCrownSale");
  const flpCrownSale = await FLPCrownSale.deploy(
    1000,
    2000,
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    await token.getAddress()
  );
  console.log("flpCrownSale: " + (await flpCrownSale.getAddress()));

  // const Token = await ethers.getContractFactory("Floppy");
  // const token =await Token.deploy();
  // console.log("token: "+ await token.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
