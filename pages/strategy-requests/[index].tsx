import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import WaitingStrategyDetails, { dataRetrievedType, StrategyDetailsWaiting } from '../../src/components/StrategyDetails/waiting';
import { customApi } from '../../src/hooks/useFetch';
import { AxiosResponse } from 'axios';

export default function StrategyDetailsPage() {
    const [strategy, setStrategy]: [dataRetrievedType | null, Dispatch<SetStateAction<dataRetrievedType | null>>] = useState<dataRetrievedType | null>(null);
    const router = useRouter();

    useEffect(() => {
        const { index: param } = router.query;
        customApi.methodGet(`requests/${param}`,
            {},
            (response: AxiosResponse<any>) => {
                setStrategy(response.data.request);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {
                strategy 
                    ? <StrategyDetailsWaiting strategyData={strategy}/> 
                    : <div> </div>
            }
        </div>
    );
}


