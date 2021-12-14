export function Commentaries() {
    return (
        <section className='mb-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative overflow-hidden'>
            <div
                className='skeleton-item
                        before:absolute before:bg-beatsGreen-700 before:h-12 before:w-4 before:block before:top-0 before:left-0 before:
                        flex flex-col w-full'
            >
                <h2 className='font-Montserrat font-bold text-2xl mb-10'>Commentaries</h2>
                <BaseCommentary />
                <ResponseCommentary />
            </div>
        </section>
    );
}

function BaseCommentary() {
    return (
        <>
            <p
                className='text-base mb-2 relative ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                <span className='font-bold inline-block text-base'>Name:</span> o nome
            </p>
            <p className='text-base mb-2'>- 00/00/2025, time:time</p>
        </>
    );
}

function ResponseCommentary() {
    return (
        <>
            <p
                className='text-base mb-2 ml-14 relative
            before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                <span className='font-bold inline-block text-base'>SubCommentName:</span> o nome
            </p>
            <p className='text-base ml-10 mb-2'>- 00/00/2025, time:time</p>
        </>
    );
}
