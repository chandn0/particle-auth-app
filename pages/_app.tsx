import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthCoreContextProvider
            options={{
                projectId: 'd62710ee-82d2-4399-81c5-a057d0424004',
                clientKey: 'cZgJnecHZAyXRewgy3NWtMGEdgrUnxcfah6lI6qe',
                appId: 'b7c71a71-997e-4765-a56a-62c7e4c0214d',
            }}
        >
            <Component {...pageProps} />
        </AuthCoreContextProvider>
    );
}

export default MyApp;
