const one = require("../assets/pepe/bork.png");
const two = require("../assets/pepe/pepe 1.png");
const three = require("../assets/pepe/pepe frog.png");
const four = require("../assets/pepe/pepe-loser-forehead-thumbnail.jpeg");
const five = require("../assets/pepe/pepe2.png");
const six = require("../assets/pepe/pepenobg.png");
const seven = require("../assets/pepe/pepe3.jpeg");
const eight = require("../assets/pepe/pepe.png");

import Image from "next/image";

export const pepePicker = () => {
  const pepePaths = [one, two, three, four, five, six, seven, eight];
  const pepe = pepePaths[Math.floor(Math.random() * pepePaths.length)];
  return <Image src={pepe} height={128} width={148}></Image>;
};
