import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useSelector } from "@xstate/react";
import { runOnElectron } from "@renderer/utils";
import { useAppMachine } from "./app.context";

type ElectronContextProps = {
  onMinimizeWindow?: () => void;
  onCloseWindow?: () => void;
};

const ElectronContext = createContext<ElectronContextProps>({});

const ElectronProvider = ({ children }: { children: ReactNode }) => {
  const machineActor = useAppMachine();

  const settings = useSelector(
    machineActor,
    (state) => state.context.settings
  );

  const onMinimizeWindow = useCallback(() => {
    runOnElectron(() => {
      window.api.send("minimize-window");
    });
  }, []);

  const onCloseWindow = useCallback(() => {
    runOnElectron(() => {
      window.api.send("close-window");
    });
  }, []);

  useEffect(() => {
    runOnElectron(() => {
      window.api.send("set-always-on-top", {
        alwaysOnTop: settings.alwaysOnTop,
      });
    });
  }, [settings.alwaysOnTop]);

  useEffect(() => {
    runOnElectron(() => {
      window.api.send("set-fullscreen-break", {
        fullscreenBreak: settings.fullscreenBreak,
        alwaysOnTop: settings.alwaysOnTop,
      });
    });
  }, [settings.alwaysOnTop, settings.fullscreenBreak]);

  return (
    <ElectronContext.Provider
      value={{ onMinimizeWindow, onCloseWindow }}
    >
      {children}
    </ElectronContext.Provider>
  );
};

const useElectron = () => useContext(ElectronContext);

export { ElectronProvider, useElectron };
