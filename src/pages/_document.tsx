import { Html, Head, Main, NextScript } from "next/document";

// components
import Header from "@/components/header/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
