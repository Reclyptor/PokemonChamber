import React, { CSSProperties } from "react";
import Card from "../component/Card";
import Main from "../layout/Main";
import clsx from "clsx";
import { AutoSizer, Grid, GridCellProps } from "react-virtualized";
import { useNavigate } from "react-router-dom";
import "../tailwind.css";

type PokedexProps = {
  total?: number;
  className?: string;
  style?: CSSProperties;
};

const Pokedex = (props: PokedexProps) => {
  const navigate = useNavigate();
  const total = props.total || 1010;
  const cardWidth = 148 + 4;
  const cardHeight = 266 + 4;

  return (
    <Main className={ clsx("background-animate bg-gradient-to-r from-background to-primary/[.15]", props.className) } style={ props.style }>
      <AutoSizer>
        { ({ width, height }) => {
          const rowCount = Math.floor(total / Math.floor(width / cardWidth)) + (Math.floor(total % Math.floor(width / cardWidth)) > 0 ? 1 : 0);
          const colCount = Math.floor(width / cardWidth);
          return (
            // @ts-ignore
            <Grid
              width={ width }
              height={ height }
              rowHeight={ cardHeight }
              columnWidth={ cardWidth }
              rowCount={ rowCount }
              columnCount={ colCount }
              className="flex justify-center no-scrollbar"
              cellRenderer={ ({ rowIndex, columnIndex, style }: GridCellProps) => {
                const pokedexID = rowIndex * colCount + columnIndex + 1;
                return pokedexID > total ? null : (
                  <div key={ pokedexID } style={ style }>
                    <Card pokedexID={ pokedexID } onClick={ () => navigate(`/${ pokedexID }`) } />
                  </div>
                )
              }}
            />
          );
        }}
      </AutoSizer>
    </Main>
  );
};

export default Pokedex;
