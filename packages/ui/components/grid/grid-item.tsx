import { forwardRef, HTMLAttributes, memo, ReactNode } from "react";
import { GridItemVariantProps, StyledGridItem } from "./grid.styled";
import { withDefaults } from "../../utils/with-defaults";
import { cx } from "../../utils/string";
import { SxProps } from "../../theme";

type Props = {
  /**
   * Shorthand for `grid-column` style property
   */
  column?: SxProps["gridColumn"];
  /**
   * Shorthand for `grid-row` style property
   */
  row?: SxProps["gridRow"];
  /**
   * Shorthand for `align-self` style property
   * @default "center"
   */
  align?: SxProps["alignSelf"];
  /**
   * Shorthand for `justify-self` style property
   * @default "start"
   */
  justify?: SxProps["justifySelf"];
  /**
   * For additional styles
   */
  sx?: SxProps;
  /**
   * The HTML element to render
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * The content of the component
   */
  children?: ReactNode;
};

const defaultProps: Props = {
  align: "center",
  justify: "start",
};

type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>;

export type GridItemProps = Props & NativeAttrs & GridItemVariantProps;

const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    { children, className, align, justify, column, row, sx, ...rest },
    ref
  ) => {
    const _className = cx("pomatez-grid-item", className);

    return (
      <StyledGridItem
        className={_className}
        css={{
          alignSelf: align,
          justifySelf: justify,
          gridColumn: column,
          gridRow: row,
          ...sx,
        }}
        {...rest}
        ref={ref}
      >
        {children}
      </StyledGridItem>
    );
  }
);

const MemoGridItem = memo(GridItem);

export default withDefaults(MemoGridItem, defaultProps);
