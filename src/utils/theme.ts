import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
  }, 
  secondary: {
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    950: "#172554"
  },
  tertiary: "#836FFF",
  background: "#CBD5E1",
  foreground: "#FFFFFF",
};

const theme = extendTheme({ colors });

export default theme;