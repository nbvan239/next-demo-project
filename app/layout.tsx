import Image from "next/image";
import type { ReactNode } from "react";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
