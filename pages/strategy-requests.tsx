import { Container } from '../src/components/Container';
import { useFetch } from '../src/hooks/useFetch';
import Head from 'next/head';
import {
    WaitingForAdmApprovalStrategyContext
} from '../src/components/StrategyVoting';
import { strategy } from '../src/interfaces/strategy'


export default function MyStrategies() {
    const { data: strategiesBy } = useFetch('requests/waiting/approval')
    

    if (!strategiesBy) {
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
            <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-16'>Strategies</h1>
            <div className='strategies-container grid grid-cols-4 gap-16'>
                {
                    strategiesBy.requests.length > 0 ? (
                        strategiesBy.requests.map((strategy: strategy, i: number) => 
                            {
                                return (<WaitingForAdmApprovalStrategyContext key={i} strategy={strategy}/>)
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
