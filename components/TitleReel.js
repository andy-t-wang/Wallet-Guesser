import theme from "./TitleReel.module.css";

import Reel from "react-reel";

export function TitleReel() {
  return (
    <Reel
      duration={700}
      delay={85}
      text="Generate a random secret phrase:"
      theme={theme}
    ></Reel>
  );
}
