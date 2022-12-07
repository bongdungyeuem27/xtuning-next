import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import "./global.css";
import { WalletKitProvider } from "@gokiprotocol/walletkit";
import Web3ContextProvider from "./Web3Context";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <WalletKitProvider
      app={{
        name: "Car store",
      }}
    >
      <Web3ContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </Web3ContextProvider>
    </WalletKitProvider>
  );
}
