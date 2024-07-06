import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AuthType } from '@particle-network/auth-core';
import { Base } from '@particle-network/chains';
import { AuthCoreContextProvider, PromptSettingType } from '@particle-network/auth-core-modal';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthCoreContextProvider
      options={{
        projectId: 'd62710ee-82d2-4399-81c5-a057d0424004',
        clientKey: 'cZgJnecHZAyXRewgy3NWtMGEdgrUnxcfah6lI6qe',
        appId: 'b7c71a71-997e-4765-a56a-62c7e4c0214d',
        authTypes: [AuthType.email, AuthType.google, AuthType.twitter],
        themeType: 'dark',
        fiatCoin: 'USD',
        language: 'en',
        erc4337: {
          name: 'SIMPLE',
          version: '1.0.0',
        },
        promptSettingConfig: {
          promptPaymentPasswordSettingWhenSign: PromptSettingType.first,
          promptMasterPasswordSettingWhenLogin: PromptSettingType.first,
        },
        wallet: {
          visible: true,
          customStyle: {
            supportChains: [Base],
          }
        },
      }}
    >
            <Component {...pageProps} />
        </AuthCoreContextProvider>
    );
}

export default MyApp;
