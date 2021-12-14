import Head from 'next/head';
import { StrategyDetails } from '../../src/components/StrategyDetails';
import { Skeleton } from '../../src/components/Skeleton';
import { useFetch } from '../../src/hooks/useFetch';
import { useRouter } from 'next/router';

interface dataRetrievedType {
    a: boolean;
    acc: boolean;
    aliases: Array<string>;
    authn: boolean;
    authz: boolean;
    c: boolean;
    'complementary references': string;
    consequences: string;
    context: string;
    examples: string;
    forces: string;
    i: false;
    name: string;
    nr: false;
    problem: string;
    publish_date: Date;
    rationale: string;
    'related strategies': string;
    solution: string;
    type: string;
    username_creator: string;
}

export default function StrategyDetailsPage() {
    const router = useRouter();

    const routeToFetch = router.asPath.slice(1);
    const { data, error } = useFetch(routeToFetch);
    // console.log(data, error);

    const { data: commentaryData, error: commentaryError } = useFetch(routeToFetch + '/comments');
    // console.log(commentaryData.comments, commentaryError);

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
                <title>BEATS | Strategy Details</title>
            </Head>
            <StrategyDetails strategyData={data} commentaries={commentaryData} />
        </>
    );
}
