import { Container } from '../src/components/Container';
import { StrategyInAdminPage } from '../src/components/StrategyVoting';

export default function AdministratorStrategies() {
    return (
        <Container
            containerType='main'
            containerClasses='my-20 mx-32 p-16 bg-beatsBlack-700 rounded-10px container-height'
        >
            <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-16'>New Strategies</h1>
            <div className='strategies-container grid grid-cols-4 gap-16'>
                <StrategyInAdminPage />
            </div>
        </Container>
    );
}
