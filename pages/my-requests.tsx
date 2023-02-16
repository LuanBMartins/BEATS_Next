import { Container } from '../src/components/Container';
import { useFetch } from '../src/hooks/useFetch';
import Head from 'next/head';
import {
    ApprovedStrategy,
    CouncilVotingStrategy,
    RejectedByAdminStrategy,
    ReviewSuggestedStrategy,
    WaitingForAdmApprovalStrategy,
} from '../src/components/StrategyVoting';
import { strategy } from '../src/interfaces/strategy'


export default function MyStrategies() {
    const { data: strategiesByUser, error } = useFetch('requests')

    if (!strategiesByUser) {
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
            <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-16'>My Strategies</h1>
            <div className='strategies-container grid grid-cols-4 gap-16'>
                {
                    strategiesByUser.requests.length > 0 ? (
                        strategiesByUser.requests.map((strategy: strategy, i: number) => 
                            {
                                
                                if(strategy.state === 0)
                                    return (<WaitingForAdmApprovalStrategy key={i} strategy={strategy}/>)
                                else if(strategy.state === 1)
                                   return (<RejectedByAdminStrategy key={i} strategy={strategy}/>)
                                else if(strategy.state === 2)
                                   return (<CouncilVotingStrategy key={i} strategy={strategy}/>)
                                else if(strategy.state === 3)
                                   return (<ReviewSuggestedStrategy key={i} strategy={strategy}/>)
                                else if(strategy.state === 4)
                                   return (<ApprovedStrategy key={i} strategy={strategy}/>)
                            }
                        )
                    ) : (
                        <div></div>
                    )
                }
                {/* <WaitingForAdmApprovalStrategy />
                <RejectedByAdminStrategy />
                <CouncilVotingStrategy />
                <ReviewSuggestedStrategy />
                <ApprovedStrategy /> */}
            </div>
        </Container>
    );
}
