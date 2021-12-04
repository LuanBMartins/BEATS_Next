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
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: 60 * 60 * 24, // In seconds -> Trying to regenerate the page if there's difference to the cache every access after 24h
    };
};

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

    if (router.isFallback || !data) {
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
