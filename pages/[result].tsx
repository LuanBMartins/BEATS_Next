/*

https://nextjs.org/docs/basic-features/pages
https://swr.vercel.app/
https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side
*/
import Head from 'next/head';
import { Skeleton } from '../src/components/Skeleton';
import { ResultBox } from '../src/components/ResultBox';
import { useFetch } from '../src/hooks/useFetch';
import { useGlobalData } from '../contexts/GlobalDataContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HomePage() {
    const route = 'people/1';

    const { data, error } = useFetch(route);

    const router = useRouter();
    const queryData = router.query;

    const { termToSearch, setTermToSearch, securityInformationAttributes } = useGlobalData();
    // console.log(queryData.a);

    // This effect covers the case where the page was accessed through inserting the URL and not by using the website search
    useEffect(() => {
        if (!router.isReady) return;

        termToSearch == '' && queryData ? setTermToSearch(queryData.a! as string) : '';
    }, [router.isReady, queryData, setTermToSearch, termToSearch]);

    if (!data) {
        return (
            <>
                <Head>
                    <title>BEATS | Result</title>
                </Head>
                <Skeleton />
            </>
        );
    }

    return (
        <>
            <Head>
                <title>BEATS | Result</title>
            </Head>
            <ResultBox attributes={data} routingData={queryData} />
        </>
    );
}
