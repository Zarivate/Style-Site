import "./globals.css";

import StyledComponentsRegistry from "./lib/registry";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
