import React from "react";
import { Type } from "../../types/Pokemon";
import BugBadge from "../badges/BugBadge";
import DarkBadge from "../badges/DarkBadge";
import DragonBadge from "../badges/DragonBadge";
import ElectricBadge from "../badges/ElectricBadge";
import FairyBadge from "../badges/FairyBadge";
import FightingBadge from "../badges/FightingBadge";
import FireBadge from "../badges/FireBadge";
import FlyingBadge from "../badges/FlyingBadge";
import GhostBadge from "../badges/GhostBadge";
import GrassBadge from "../badges/GrassBadge";
import GroundBadge from "../badges/GroundBadge";
import IceBadge from "../badges/IceBadge";
import NormalBadge from "../badges/NormalBadge";
import PoisonBadge from "../badges/PoisonBadge";
import PsychicBadge from "../badges/PsychicBadge";
import RockBadge from "../badges/RockBadge";
import SteelBadge from "../badges/SteelBadge";
import WaterBadge from "../badges/WaterBadge";

type TypeBadgeProps = {
  type: Type;
};

const TypeBadge = (props: TypeBadgeProps) => {
  switch (props.type) {
  case "Bug": return <BugBadge/>;
  case "Dark": return <DarkBadge/>;
  case "Dragon": return <DragonBadge/>;
  case "Electric": return <ElectricBadge/>;
  case "Fairy": return <FairyBadge/>;
  case "Fighting": return <FightingBadge/>;
  case "Fire": return <FireBadge/>;
  case "Flying": return <FlyingBadge/>;
  case "Ghost": return <GhostBadge/>;
  case "Grass": return <GrassBadge/>;
  case "Ground": return <GroundBadge/>;
  case "Ice": return <IceBadge/>;
  case "Normal": return <NormalBadge/>;
  case "Poison": return <PoisonBadge/>;
  case "Psychic": return <PsychicBadge/>;
  case "Rock": return <RockBadge/>;
  case "Steel": return <SteelBadge/>;
  case "Water": return <WaterBadge/>;
  default: return null;
  }
};

export default TypeBadge;