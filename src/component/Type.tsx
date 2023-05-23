import React from "react";
import { ReactComponent as BugIcon } from "../resource/icon/type/bug.svg";
import { ReactComponent as DarkIcon } from "../resource/icon/type/dark.svg";
import { ReactComponent as DragonIcon } from "../resource/icon/type/dragon.svg";
import { ReactComponent as ElectricIcon } from "../resource/icon/type/electric.svg";
import { ReactComponent as FairyIcon } from "../resource/icon/type/fairy.svg";
import { ReactComponent as FightingIcon } from "../resource/icon/type/fighting.svg";
import { ReactComponent as FireIcon } from "../resource/icon/type/fire.svg";
import { ReactComponent as FlyingIcon } from "../resource/icon/type/flying.svg";
import { ReactComponent as GhostIcon } from "../resource/icon/type/ghost.svg";
import { ReactComponent as GrassIcon } from "../resource/icon/type/grass.svg";
import { ReactComponent as GroundIcon } from "../resource/icon/type/ground.svg";
import { ReactComponent as IceIcon } from "../resource/icon/type/ice.svg";
import { ReactComponent as NormalIcon } from "../resource/icon/type/normal.svg";
import { ReactComponent as PoisonIcon } from "../resource/icon/type/poison.svg";
import { ReactComponent as PsychicIcon } from "../resource/icon/type/psychic.svg";
import { ReactComponent as RockIcon } from "../resource/icon/type/rock.svg";
import { ReactComponent as SteelIcon } from "../resource/icon/type/steel.svg";
import { ReactComponent as WaterIcon } from "../resource/icon/type/water.svg";
import { color } from "../color";
import "../tailwind.css";

export type TypeProps = {
  type: "bug" | "dark" | "dragon" | "electric" | "fairy" | "fighting" | "fire" | "flying" | "ghost" | "grass" | "ground" | "ice" | "normal" | "poison" | "psychic" | "rock" | "steel" | "water";
  size?: string;
  className?: string;
}

const Type = (props: TypeProps) => {
  switch (props.type) {
    case "bug": return <BugIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("bug") }} className={ props.className } />;
    case "dark": return <DarkIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("dark") }} className={ props.className } />;
    case "dragon": return <DragonIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("dragon") }} className={ props.className } />;
    case "electric": return <ElectricIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("electric") }} className={ props.className } />;
    case "fairy": return <FairyIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("fairy") }} className={ props.className } />;
    case "fighting": return <FightingIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("fighting") }} className={ props.className } />;
    case "fire": return <FireIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("fire") }} className={ props.className } />;
    case "flying": return <FlyingIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("flying") }} className={ props.className } />;
    case "ghost": return <GhostIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("ghost") }} className={ props.className } />;
    case "grass": return <GrassIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("grass") }} className={ props.className } />;
    case "ground": return <GroundIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("ground") }} className={ props.className } />;
    case "ice": return <IceIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("ice") }} className={ props.className } />;
    case "normal": return <NormalIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("normal") }} className={ props.className } />;
    case "poison": return <PoisonIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("poison") }} className={ props.className } />;
    case "psychic": return <PsychicIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("psychic") }} className={ props.className } />;
    case "rock": return <RockIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("rock") }} className={ props.className } />;
    case "steel": return <SteelIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("steel") }} className={ props.className } />;
    case "water": return <WaterIcon width={ props.size || "20px" } height={ props.size || "20px" } style={{ fill: color("water") }} className={ props.className } />;
    default: return null;
  }
};

export default Type;