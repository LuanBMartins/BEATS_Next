import { Container } from '../src/components/Container';
import {
    ApprovedStrategy,
    CouncilVotingStrategy,
    RejectedByAdminStrategy,
    ReviewSuggestedStrategy,
    WaitingForAdmApprovalStrategy,
} from '../src/components/StrategyVoting';

export default function MyStrategies() {
    return (
        <Container
            containerType='main'
            containerClasses='my-20 mx-32 p-16 bg-beatsBlack-700 rounded-10px container-height'
        >
            <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-16'>My Strategies</h1>
            <div className='strategies-container grid grid-cols-4 gap-16'>
                <WaitingForAdmApprovalStrategy />
                <RejectedByAdminStrategy />
                <CouncilVotingStrategy />
                <ReviewSuggestedStrategy />
                <ApprovedStrategy />
            </div>
        </Container>
    );
}
