import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import { Container } from '../src/components/Container';
import { ImageContainer } from '../src/components/ImageContainer';
import { SearchBar } from '../src/components/SearchBar';
import { StrategiesBox } from '../src/components/StrategiesBox';
import { RadioSelector } from '../src/components/RadioSelector';

const Home: NextPage = () => {
    return (
        <div className='min-h-screen bg-beatsBlack-900 text-beatsWhite-900'>
            <Head>
                <title>BEATS</title>
            </Head>
            <Header />
            <Container
                containerClasses={`my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative
                                    before:bg-before-decorator
                                    before:bg-no-repeat before:bg-cover before:bg-center
                                    before:absolute
                                    before:-top-8 before:-left-8 
                                    before:block
                                    before:w-20 before:h-20
                                    
                                    after:bg-after-decorator
                                    after:bg-no-repeat after:bg-cover after:bg-center
                                    after:absolute
                                    after:-bottom-8 after:-right-8 
                                    after:block
                                    after:w-20 after:h-20`}
            >
                <ImageContainer
                    vertical='top-6'
                    horizontal='left-6'
                    width={90}
                    height={90}
                    localization='/decorative_balls_before.svg'
                    alt=''
                    position='absolute'
                />

                <h1 className='font-Montserrat text-4xl text-center'>Architectural Strategies in Security</h1>

                <SearchBar receivedHeight={40} />

                <RadioSelector />

                <StrategiesBox />

                <ImageContainer
                    vertical='bottom-6'
                    horizontal='right-6'
                    width={70}
                    height={70}
                    localization='/decorative_balls_after.svg'
                    alt=''
                    position='absolute'
                />
            </Container>
        </div>
    );
};

export default Home;
