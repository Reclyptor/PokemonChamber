import React, { CSSProperties } from "react";
import { ReactComponent as AttackIcon } from "../resource/icon/stat/attack.svg";
import { ReactComponent as DefenseIcon } from "../resource/icon/stat/defense.svg";
import { ReactComponent as HPIcon } from "../resource/icon/stat/hp.svg";
import { ReactComponent as SpecialAttackIcon } from "../resource/icon/stat/specialattack.svg";
import { ReactComponent as SpecialDefenseIcon } from "../resource/icon/stat/specialdefense.svg";
import { ReactComponent as SpeedIcon } from "../resource/icon/stat/speed.svg";
import { ReactComponent as TotalIcon } from "../resource/icon/stat/total.svg";
import { color } from "../color";
import "../tailwind.css";

export type StatProps = {
  stat: "attack" | "defense" | "hp" | "special-attack" | "special-defense" | "speed" | "total";
  size?: string;
  className?: string;
  style?: CSSProperties;
}

const Stat = (props: StatProps) => {
  switch (props.stat) {
    case "attack": return <AttackIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("attack"), ...props.style }} className={ props.className } />;
    case "defense": return <DefenseIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("defense"), ...props.style }} className={ props.className } />;
    case "hp": return <HPIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("hp"), ...props.style }} className={ props.className } />;
    case "special-attack": return <SpecialAttackIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("special-attack"), ...props.style }} className={ props.className } />;
    case "special-defense": return <SpecialDefenseIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("special-defense"), ...props.style }} className={ props.className } />;
    case "speed": return <SpeedIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("speed"), ...props.style }} className={ props.className } />;
    case "total": return <TotalIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("total"), ...props.style }} className={ props.className } />;
    default: return null;
  }
};

export default Stat;