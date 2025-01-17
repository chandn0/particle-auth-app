import { useConnect, useEthereum, useSolana } from '@particle-network/auth-core-modal';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const { connect, disconnect, connectionStatus } = useConnect();

    // use for evm chains
    const { address, chainId, provider, sendTransaction, signMessage, signTypedData } = useEthereum();

    // use for solana chains
    const { address: solanaAddress, signAndSendTransaction } = useSolana();

    const handleConnect = async () => {
        try {
            await connect();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDisconnect = async () => {
        try {
            await disconnect();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Particle Auth Core App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {connectionStatus !== 'connected' && (
                    <>
                        <button className={styles.btn} onClick={handleConnect}>
                            {connectionStatus === 'disconnected' ? 'CONNECT' : connectionStatus.toUpperCase()}
                        </button>
                    </>
                )}

                {connectionStatus === 'connected' && (
                    <>
                        <button className={styles.btn} onClick={handleDisconnect}>
                            DISCONNECT
                        </button>
                    </>
                )}
<address/>
                
            </main>

            <footer className={styles.footer}>
                <span>
                in beta 
                </span>
            </footer>
        </div>
    );
};

export default Home;
