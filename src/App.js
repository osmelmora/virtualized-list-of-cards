import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Board } from "./Board";

export default function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Board />
    </ThemeProvider>
  );
}
