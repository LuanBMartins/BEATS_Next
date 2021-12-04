import Head from 'next/head';
import { Container } from '../src/components/Container';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>BEATS | About Us</title>
            </Head>
            <Container
                containerType='section'
                containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative'
            >
                <h1>Nois</h1>
            </Container>
        </>
    );
}
