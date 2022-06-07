import { Container } from '../Container';

export function GuardedRoute() {
    return (
        <Container
            containerType='main'
            containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative container-height'
        >
            <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-12'>
                Register Strategy
            </h1>
            <div className='flex justify-center py-12 px-12'>
                <p className='font-Montserrat text-2xl'>Oops! You have to be logged-in to access this page.</p>
            </div>
        </Container>
    );
}
