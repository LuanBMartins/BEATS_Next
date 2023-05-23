import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { customApi } from '../../src/hooks/useFetch';
import { AxiosResponse } from 'axios';
import { SuggestionContext, SuggestionDetailsContext } from '../../src/components/suggestion';

export default function StrategyDetailsPage() {
    const [suggestion, setSuggestion] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const { index: param } = router.query
        customApi.methodGet(`suggestion/read/${param}`,
            {},
            (response: AxiosResponse<any>) => {
                setSuggestion(response.data.data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            ({
                suggestion 
                    ? <SuggestionDetailsContext suggestion={suggestion}/> 
                    : <div> </div>
            })
        </div>
    );
}
