import Head from 'next/head';
import { useRouter } from 'next/router';
import { Skeleton } from '../../src/components/Skeleton';
import WaitingStrategyDetails from '../../src/components/StrategyDetails/waiting';
import { useFetch } from '../../src/hooks/useFetch';

export default function StrategyDetailsPage() {
    const router = useRouter()
    const { index: param } = router.query
    const { data, error } = useFetch(`requests/${param}`);
    
    console.log("🚀 ~ file: [index].tsx:12 ~ StrategyDetailsPage ~ data:", data)
    return (
            <div>
               <WaitingStrategyDetails strategyData={data}/>
            </div>
    );
}
