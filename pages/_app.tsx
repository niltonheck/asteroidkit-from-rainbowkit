import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, WagmiConfig } from 'wagmi';
import { AsteroidKitProvider, createClient } from 'asteroidkit';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const wagmiClient = createClient({
  appId: "YOUR_APP_ID",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <AsteroidKitProvider>
        <Component {...pageProps} />
      </AsteroidKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
