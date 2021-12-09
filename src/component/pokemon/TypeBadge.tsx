import React from "react";
import { Type } from "../../types/Pokemon";
import BugBadge from "../badges/type/BugBadge";
import DarkBadge from "../badges/type/DarkBadge";
import DragonBadge from "../badges/type/DragonBadge";
import ElectricBadge from "../badges/type/ElectricBadge";
import FairyBadge from "../badges/type/FairyBadge";
import FightingBadge from "../badges/type/FightingBadge";
import FireBadge from "../badges/type/FireBadge";
import FlyingBadge from "../badges/type/FlyingBadge";
import GhostBadge from "../badges/type/GhostBadge";
import GrassBadge from "../badges/type/GrassBadge";
import GroundBadge from "../badges/type/GroundBadge";
import IceBadge from "../badges/type/IceBadge";
import NormalBadge from "../badges/type/NormalBadge";
import PoisonBadge from "../badges/type/PoisonBadge";
import PsychicBadge from "../badges/type/PsychicBadge";
import RockBadge from "../badges/type/RockBadge";
import SteelBadge from "../badges/type/SteelBadge";
import WaterBadge from "../badges/type/WaterBadge";

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