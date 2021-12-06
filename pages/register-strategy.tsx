import Head from 'next/head';
import { StrategyForm } from '../src/components/StrategyForm';

export default function strategy() {
    return (
        <>
            <Head>
                <title>BEATS | NameOfStrategy</title>
            </Head>
            <StrategyForm />
        </>
    );
}
