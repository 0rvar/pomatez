import { useAtomValue } from "jotai";
import { Outlet } from "react-router-dom";
import { Box, Navbar, Titlebar, VStack } from "@pomatez/ui";

import { CounterProgress } from "@renderer/components";
import { timerAtom } from "@renderer/@data/atoms";
import { routes } from "@renderer/route.config";
import { useElectron } from "@renderer/hooks";

export function RootLayout() {
  const timer = useAtomValue(timerAtom);

  const { onMinimizeWindow, onCloseWindow } = useElectron();

  const links = Object.values(routes).map(
    ({ icon, label, path, as }) => ({
      as,
      icon,
      label,
      to: path,
    })
  );

  if (timer.shouldFullScreenBreak) {
    return <CounterProgress />;
  }

  return (
    <VStack
      justify="flex-start"
      sx={{
        width: "34rem",
        height: "48rem",
        boxSizing: "content-box",
        border: "1px solid $gray6",
        borderRadius: "$sm",
        boxShadow: "$md",
        bg: "$white",
      }}
    >
      <Titlebar
        appState={timer.sessionType}
        onMinimize={onMinimizeWindow}
        onClose={onCloseWindow}
      />

      <Navbar links={links} appState={timer.sessionType} />

      <Box
        as="main"
        sx={{
          width: "100%",
          height: "40rem",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </VStack>
  );
}
