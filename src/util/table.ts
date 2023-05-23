import { Column, ColumnDef, ColumnGroupDef } from '../../../meui/src/molecule/Table/Table.types';

export const isColumn = <T,>(column: Column<T>): column is ColumnDef<T> => !!(column as ColumnDef<T>).value;

export const isColumnGroup = <T,>(column: Column<T>): column is ColumnGroupDef<T> => !!(column as ColumnGroupDef<T>).columns;

export const columnDepth = <T,>(columns: Column<T> | Column<T>[]): number => {
  if (!Array.isArray(columns)) {
    return columnDepth([columns]);
  }
  return columns.map((column) => isColumn(column) ? 0 : 1 + columnDepth(column.columns))
    .reduce((x, y) => Math.max(x, y), 0);
};

export const columnSpan = <T,>(columns: Column<T> | Column<T>[]): number => {
  if (!Array.isArray(columns)) {
    return columnSpan([columns]);
  }
  return columns.map((column) => isColumn(column) ? 1 : columnSpan(column.columns))
    .reduce((x, y) => x + y);
};

export const columnsByDepth = <T,>(columns: Column<T>[], depth: number = 0): [Column<T> | undefined, number][] => {
  return columns.flatMap((col) => {
    const colDepth = columnDepth(col);
    if (colDepth < depth) {
      return [[undefined, columnSpan(col)]];
    } else if (colDepth === depth) {
      return [[col, columnSpan(col)]];
    }
    return columnsByDepth(((col as ColumnGroupDef<T>).columns), depth);
  });
};