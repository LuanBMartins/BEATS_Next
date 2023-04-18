/*

https://nextjs.org/docs/basic-features/pages
https://swr.vercel.app/
https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side
*/
import Head from 'next/head';
import { Skeleton } from '../../src/components/Skeleton';
import { Container } from '../../src/components/Container';
import { ResultBox } from '../../src/components/ResultBox';
import { useFetch } from '../../src/hooks/useFetch';
import { resultsItemProps } from '../../src/components/ResultBox';
import { useGlobalData } from '../../contexts/GlobalDataContext';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';

// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [],
//         fallback: true,
//     };
// };

// export const getStaticProps: GetStaticProps = async () => {
//     return {
//         props: {},
//         revalidate: 600, // In seconds -> Trying to regenerate the page if there's difference to the cache every access after 24h 60 * 60 * 24
//     };
// };

interface SearchResultType {
    strategies: resultsItemProps[];
}

export default function StrategyDetailsPage() {
    const router = useRouter();

    // Splitting the mounted URL, taking off the / character to get just the query to send to the API
    const route = router.asPath.split('/')[1];
    const { data, error } = useFetch(route);

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
    /*
    If the page is accessed directly through the URL, not coming from the home page
    there is achance that the parameters were read and:
    - The page accessed isnt strategies;
    - There is no name parameter (meaning that is an invalid search)
    In these cases redirect to the home page
    */
    if (router.query) {
        if (router.query.strategies != 'strategies') router.replace('/');
    }

    return (
        <>
            <Head>
                <title>BEATS | Result</title>
            </Head>
            {data.strategies.rows.length > 0 ? (
                data.strategies.rows.map((resultItem: resultsItemProps) => {
                    return <ResultBox key={resultItem.id} strategy={resultItem} />;
                })
                
            ) : (
                <Container
                    containerType='main'
                    containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px container-height'
                >
                    <h1 className='mt-8 font-Montserrat text-2xl text-center'>No strategies were found</h1>
                </Container>
            )}
        </>
    );
}
