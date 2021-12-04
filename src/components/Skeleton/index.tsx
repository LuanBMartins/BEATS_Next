import { Container } from '../Container';

export function Skeleton() {
    return (
        <Container
            containerType='section'
            containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative overflow-hidden'
        >
            <div
                className='skeleton-item
            before:absolute before:bg-beatsGreen-700 before:h-12 before:w-4 before:block before:top-0 before:left-0 before:
            animate-pulse flex flex-col w-full'
            >
                <div className='skeleton-title bg-beatsWhite-700 mb-4 h-8 w-3/4 mx-12' />

                <div className='skeleton-infos flex-1 space-y-4 py-1 px-12 w-3/4'>
                    <p className='skeleton-type bg-beatsWhite-700 h-4 w-4/5' />
                    <p className='skeleton-alias bg-beatsWhite-700 h-4 w-4/5' />
                    <p className='skeleton-attribute1 bg-beatsWhite-700 h-4 w-3/5' />
                    <p className='skeleton-attribute2 bg-beatsWhite-700 h-4 w-3/5' />
                </div>
            </div>
        </Container>
    );
}
