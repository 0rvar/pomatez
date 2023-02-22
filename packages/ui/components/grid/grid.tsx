import {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import GridContainer, { GridContainerProps } from "./grid-container";
import GridItem from "./grid-item";

export type GridProps = GridContainerProps;

type GridComponent<T, P = {}> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {
  Item: typeof GridItem;
};

const Grid = GridContainer as GridComponent<HTMLDivElement, GridProps>;

Grid.displayName = "Grid";
GridItem.displayName = "Grid.Item";

Grid.Item = GridItem;

export default Grid;
