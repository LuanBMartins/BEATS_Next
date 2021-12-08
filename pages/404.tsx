import Head from 'next/head';
import { Container } from '../src/components/Container';
import Image from 'next/image';

export default function Error404Page() {
    return (
        <>
            <Head>
                <title>BEATS | Error - Page not found</title>
            </Head>
            <Container
                containerType='main'
                containerClasses='items-center justify-around gap-12 my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px'
            >
                <h1 className='font-Montserrat text-4xl text-left underline green-underline-title'>Error!</h1>

                <div className='flex gap-16 items-between justify-center'>
                    <div className='flex flex-col items-center'>
                        <Image src={`/404.svg`} width={400} height={400} alt='' aria-hidden='true' className='' />
                        <p className='text-xs'>
                            Illustration by{' '}
                            <a
                                className='underline hover:cursor-pointer hover:text-beatsGreen-900'
                                href='https://storyset.com/web'
                                target='_blank'
                                rel='noreferrer'
                            >
                                StorySet
                            </a>
                        </p>
                    </div>
                    <div className='flex justify-center py-12 px-12'>
                        <p className='font-Montserrat text-2xl'>Oops! We couldn’t find the page you’re looking for.</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
