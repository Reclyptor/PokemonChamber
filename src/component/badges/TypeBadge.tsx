import * as React from "react";
import { Type } from "../../types/Pokemon";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Icon } from "@material-ui/core";
import { ReactComponent as GrassIcon } from "../../resources/badges/grass.svg";
import { ReactComponent as FireIcon } from "../../resources/badges/fire.svg";
import { ReactComponent as WaterIcon } from "../../resources/badges/water.svg";
import { ReactComponent as BugIcon } from "../../resources/badges/bug.svg";
import { ReactComponent as NormalIcon } from "../../resources/badges/normal.svg";
import { ReactComponent as DarkIcon } from "../../resources/badges/dark.svg";
import { ReactComponent as PoisonIcon } from "../../resources/badges/poison.svg";
import { ReactComponent as ElectricIcon } from "../../resources/badges/electric.svg";
import { ReactComponent as GroundIcon } from "../../resources/badges/ground.svg";
import { ReactComponent as IceIcon } from "../../resources/badges/ice.svg";
import { ReactComponent as FairyIcon } from "../../resources/badges/fairy.svg";
import { ReactComponent as SteelIcon } from "../../resources/badges/steel.svg";
import { ReactComponent as FightingIcon } from "../../resources/badges/fighting.svg";
import { ReactComponent as PsychicIcon } from "../../resources/badges/psychic.svg";
import { ReactComponent as RockIcon } from "../../resources/badges/rock.svg";
import { ReactComponent as GhostIcon } from "../../resources/badges/ghost.svg";
import { ReactComponent as DragonIcon } from "../../resources/badges/dragon.svg";
import { ReactComponent as FlyingIcon } from "../../resources/badges/flying.svg";

type TypeBadgeProps = {
  type: Type
};

const TypeBadge = (props: TypeBadgeProps) => {
  const getColor = (type: Type) => {
    switch (type) {
    case "Grass":    return "#60BD58";
    case "Fire":     return "#FBA64C";
    case "Water":    return "#539DDF";
    case "Bug":      return "#92BD2D";
    case "Normal":   return "#A0A29F";
    case "Dark":     return "#595761";
    case "Poison":   return "#B763FF";
    case "Electric": return "#F2D94E";
    case "Ground":   return "#DA7C4D";
    case "Ice":      return "#76D1C1";
    case "Fairy":    return "#EF90E6";
    case "Steel":    return "#5795A3";
    case "Fighting": return "#D3425F";
    case "Psychic":  return "#FA8582";
    case "Rock":     return "#C9BC8A";
    case "Ghost":    return "#5F6DBC";
    case "Dragon":   return "#0C6AC8";
    case "Flying":   return "#A1BBEC";
    default: return "#FFFFFF";
    }
  };

  const getIcon = (type: Type) => {
    switch (type) {
    case "Grass":    return <GrassIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Fire":     return <FireIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Water":    return <WaterIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Bug":      return <BugIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Normal":   return <NormalIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Dark":     return <DarkIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Poison":   return <PoisonIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Electric": return <ElectricIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Ground":   return <GroundIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Ice":      return <IceIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Fairy":    return <FairyIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Steel":    return <SteelIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Fighting": return <FightingIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Psychic":  return <PsychicIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Rock":     return <RockIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Ghost":    return <GhostIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Dragon":   return <DragonIcon width="20px" height="20px" fill={getColor(type)}/>;
    case "Flying":   return <FlyingIcon width="20px" height="20px" fill={getColor(type)}/>;
    default: return <Icon/>;
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip size="medium" icon={getIcon(props.type)} label={props.type} style={{color: getColor(props.type as Type)}}/>
    </Stack>
  );
};

export default TypeBadge;