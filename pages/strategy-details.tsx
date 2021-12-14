import Head from 'next/head';
import { StrategyDetails } from '../src/components/StrategyDetails';

export default function StrategyDetailsPage() {
    return (
        <>
            <Head>
                <title>BEATS | Strategy Details</title>
            </Head>
            <StrategyDetails />
        </>
    );
}
