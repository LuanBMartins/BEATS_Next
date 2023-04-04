import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import WaitingStrategyDetails, { StrategyData } from '../../src/components/StrategyDetails/waiting';
import { customApi } from '../../src/hooks/useFetch';
import { AxiosResponse } from 'axios';

export default function StrategyDetailsPage() {
    const [strategy, setStrategy] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const { index: param } = router.query
        customApi.methodGet(`requests/${param}`,
            {},
            (response: AxiosResponse<any>) => {
                setStrategy(response.data)
            })
    }, [])

    return (
        <div>
            ({
                strategy 
                    ? <WaitingStrategyDetails strategyData={strategy}/> 
                    : <div> </div>
            })
        </div>
    );
}
