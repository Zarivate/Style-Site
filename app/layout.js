import "./globals.css";
import Provider from "../components/Provider";

import StyledComponentsRegistry from "./lib/registry";
import React from "react";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
