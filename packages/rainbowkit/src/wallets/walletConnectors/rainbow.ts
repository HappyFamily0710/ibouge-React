import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { Chain } from '../../components/RainbowKitProvider/RainbowKitChainContext';
import { isAndroid, isIOS } from '../../utils/isMobile';
import { Wallet } from '../Wallet';

export interface RainbowOptions {
  chains: Chain[];
  infuraId?: string;
}

export const rainbow = ({ chains, infuraId }: RainbowOptions): Wallet => {
  return () => {
    const connector = new WalletConnectConnector({
      chains,
      options: {
        infuraId,
        qrcode: false,
      },
    });

    return {
      connector,
      downloadUrls: {
        mobile: isAndroid()
          ? 'https://play.google.com/store/apps/details?id=me.rainbow'
          : isIOS()
          ? 'https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021'
          : 'https://rainbow.download',
      },
      iconUrl:
        'https://cloudflare-ipfs.com/ipfs/QmPuPcm6g1dkyUUfLsFnP5ukxdRfR1c8MuBHCHwbk57Tov',
      id: 'rainbow',
      mobile: {
        getUri: () => {
          const { uri } = connector.getProvider().connector;

          return isAndroid()
            ? uri
            : `https://rnbwapp.com/wc?uri=${encodeURIComponent(uri)}`;
        },
      },
      name: 'Rainbow',
      qrCode: {
        getUri: () => connector.getProvider().connector.uri,
        instructions: {
          learnMoreUrl:
            'https://learn.rainbow.me/connect-your-wallet-to-a-website-or-app',
          steps: [
            {
              description:
                'We recommend putting Rainbow on your home screen for faster access to your wallet.',
              step: 'install',
              title: 'Open the Rainbow app',
            },
            {
              description:
                'You can easily backup your wallet using our backup feature on your phone.',
              step: 'create',
              title: 'Create or Import a Wallet',
            },
            {
              description:
                'After you scan, a connection prompt will appear for you to connect your wallet.',
              step: 'scan',
              title: 'Tap the scan button',
            },
          ],
        },
      },
    };
  };
};
