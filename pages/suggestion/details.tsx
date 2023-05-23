import { Container } from '../../src/components/Container';
import { useFetch } from '../../src/hooks/useFetch';
import Head from 'next/head';
import {
    WaitingForAdmApprovalStrategyContext
} from '../../src/components/StrategyVoting';
import { SuggestionInterface } from '../../src/interfaces/suggestion'
import { SuggestionContext } from '../../src/components/suggestion';


export default function MyStrategies() {
    const { data: strategiesBy } = useFetch('requests/waiting/approval')
    const { data: suggestions } = useFetch('suggestion/list')
    

    if (!suggestions) {
        return (
            <>
                <Head>
                    <title>BEATS | Result</title>
                </Head>
            </>
        );
    }

    return (
        <Container
            containerType='main'
            containerClasses='my-20 mx-32 p-16 bg-beatsBlack-700 rounded-10px container-height'
        >
            <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-16'>Suggestions</h1>
            <div className='strategies-container grid grid-cols-4 gap-16'>
                {
                    suggestions.data && suggestions.data.length > 0 ? (
                        suggestions.data.map((suggestion: SuggestionInterface, i: number) => 
                            {
                                return (<SuggestionContext key={i} suggestion={suggestion}/>)
                            }
                        )
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </Container>
    );
}
