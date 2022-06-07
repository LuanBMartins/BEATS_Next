import Head from 'next/head';
import { useGlobalData } from '../contexts/GlobalDataContext';
import { GuardedRoute } from '../src/components/GuardedRoute';
import { StrategyForm } from '../src/components/StrategyForm';

export default function RegisterStrategyPage() {
    const { loginData } = useGlobalData();

    return (
        <>
            <Head>
                <title>BEATS | Register Strategy</title>
            </Head>
            {loginData.status == 'logged-in' ? <StrategyForm /> : <GuardedRoute />}
        </>
    );
}
