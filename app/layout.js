import "./globals.css";

import StyledComponentsRegistry from "./lib/registry";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* This is to remove the 404 error from there not being a favicon. Is valid but indicates empty icon. */}
      <link rel="icon" href="data:;base64,iVBORw0KGgo="></link>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
