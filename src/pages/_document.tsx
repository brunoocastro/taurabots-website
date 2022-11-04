import { Html, Head, Main, NextScript } from "next/document";
import { RecoilRoot } from "recoil";

export default function Document() {
  return (
    <Html>
      <Head title="Taura Bots">
        <meta name="description" content="Robótica diretamente da UFSM" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <body className="bg-ui-blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
