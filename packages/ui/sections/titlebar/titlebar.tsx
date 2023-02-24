import { memo } from "react";
import { Button, HStack, Logo, LogoProps } from "../../components";
import { withDefaults } from "../../utils/with-defaults";

type Props = {
  /**
   * The current state of the app
   * @default "stay-focused"
   * @options "stay-focused", "short-break", "long-break", "special-break"
   */
  appState?: LogoProps["appState"];
  /**
   * The current version of the app
   * @default 0.0.0
   */
  appVersion?: LogoProps["appVersion"];
  /**
   * Function to call when the minimize button is clicked
   */
  onMinimize?: () => void;
  /**
   * Function to call when the close button is clicked
   */
  onClose?: () => void;
};

const defaultProps: Props = {
  appState: "stay-focused",
  appVersion: "0.0.0",
};

export function Titlebar({
  appState,
  appVersion,
  onMinimize,
  onClose,
}: Props) {
  return (
    <HStack
      justify="space-between"
      sx={{
        width: "100%",
        height: "4rem",
        "-webkit-app-region": "drag",
        cursor: "pointer",
        userSelect: "none",
        pl: "$3",
      }}
    >
      <Logo size="1.6rem" appState={appState} appVersion={appVersion} />

      <HStack
        sx={{
          height: "100%",
          "-webkit-app-region": "no-drag",
        }}
      >
        <Button
          aria-label="Minimize Button"
          sx={{
            width: "4rem",
            height: "100%",
            bg: "transparent",
            color: "$gray11",
            transition: "all ease 160ms",

            "&:hover, &:focus": {
              bg: "$gray4",
            },

            "&::before": {
              content: "''",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              width: "1.2rem",
              height: "0.2rem",

              borderRadius: "$xl",
              bg: "currentColor",
            },
          }}
          onClick={onMinimize}
        />

        <Button
          aria-label="Close Button"
          sx={{
            width: "4rem",
            height: "100%",
            bg: "transparent",
            color: "$gray11",
            transition: "all ease 160ms",

            "&:hover, &:focus": {
              bg: "$gray4",
              color: "$red9",
            },

            "&::before, &::after": {
              content: "''",
              position: "absolute",
              top: "50%",
              left: "50%",

              marginLeft: "-0.7rem",
              marginTop: "-0.1rem",

              width: "1.4rem",
              height: "0.2rem",

              borderRadius: "$xl",
              bg: "currentColor",
            },

            "&::before": {
              transform: "rotate(45deg)",
            },

            "&::after": {
              transform: "rotate(-45deg)",
            },
          }}
          onClick={onClose}
        />
      </HStack>
    </HStack>
  );
}

const MemoTitlebar = memo(Titlebar);

export default withDefaults(MemoTitlebar, defaultProps);
