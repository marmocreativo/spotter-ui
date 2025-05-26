// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e0fafa",
      100: "#b3efef",
      200: "#80e3e3",
      300: "#4dd7d7",
      400: "#26cccc",
      500: "#008080", // color principal
      600: "#006666",
      700: "#004d4d",
      800: "#003333",
      900: "#001a1a",
    },
    brand_b: {
      50: "#ffe4e9",
      100: "#fbb9c4",
      200: "#f38da0",
      300: "#ec627c",
      400: "#e63765",
      500: "#F84960", // color principal
      600: "#cf3b57",
      700: "#b02e48",
      800: "#90213a",
      900: "#70142b",
    },
  },
});

export default theme;
