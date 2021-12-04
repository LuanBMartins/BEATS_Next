import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../src/components/Header';
import { GlobalDataContextProvider } from '../contexts/GlobalDataContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalDataContextProvider>
            <div className='min-h-screen bg-beatsBlack-900 text-beatsWhite-900'>
                <Header />
                <Component {...pageProps} />
            </div>
        </GlobalDataContextProvider>
    );
}

export default MyApp;
