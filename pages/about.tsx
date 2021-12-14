import Head from 'next/head';
import { Container } from '../src/components/Container';
import { ImageContainer } from '../src/components/ImageContainer';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>BEATS | About Us</title>
            </Head>
            <Container
                containerType='section'
                containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative gap-16
                after:bg-after-decorator
                after:bg-no-repeat after:bg-cover after:bg-center
                after:absolute
                after:-bottom-8 after:-right-8 
                after:block
                after:w-20 after:h-20'
            >
                <h1 className='font-Montserrat text-4xl text-left underline green-underline-title'>About Us</h1>

                <div className='w-4/5 flex gap-12'>
                    <div className='w-2/4 flex flex-col justify-center items-center'>
                        <ImageContainer
                            vertical=''
                            horizontal=''
                            width={400}
                            height={220}
                            localization='/Logo/Logo.svg'
                            alt=''
                            position=''
                            background=''
                        />

                        <div className='flex items-center justify-center gap-4'>
                            <ImageContainer
                                vertical=''
                                horizontal=''
                                width={215}
                                height={100}
                                localization='/logo_icmc.png'
                                alt=''
                                position=''
                                background=''
                            />
                            <ImageContainer
                                vertical=''
                                horizontal=''
                                width={215}
                                height={215}
                                localization='/logo_unifei.svg'
                                alt=''
                                position=''
                                background=''
                            />
                        </div>
                    </div>
                    <div className='w-2/4 flex justify-center py-16 px-8'>
                        <p className='font-Montserrat text-2xl font-bold'>Here would go some description</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
