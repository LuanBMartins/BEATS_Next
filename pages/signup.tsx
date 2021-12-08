import Head from 'next/head';
import { Container } from '../src/components/Container';
import { ImageContainer } from '../src/components/ImageContainer';
import { TextFormFieldNoDecorator } from '../src/components/Formfields';

export default function SignUpPage() {
    return (
        <>
            <Head>
                <title>BEATS | Sign Up</title>
            </Head>
            <Container
                containerType='form'
                role='register'
                containerClasses='items-center justify-around gap-8 container-height
                faded-bg-login
                my-20 mx-28 p-12 bg-beatsBlack-700 rounded-10px relative
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
                after:w-20 after:h-20'
            >
                <ImageContainer
                    vertical='top-6'
                    horizontal='left-6'
                    width={70}
                    height={70}
                    localization='/decorative_balls_after.svg'
                    alt=''
                    position='absolute rotate-180   '
                />
                <h1 className='font-Montserrat text-4xl'>Sign Up</h1>

                <div className='w-2/5 flex flex-col gap-8 justify-between mb-10'>
                    <TextFormFieldNoDecorator fieldName='Full Name' />
                    <TextFormFieldNoDecorator fieldName='E-mail' />
                    <TextFormFieldNoDecorator fieldName='Password' />
                </div>

                <button
                    className='h-12 w-2/5 rounded-md bg-beatsGreen-500 text-beatsWhite-full
                        transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                >
                    Register
                </button>
                <p className=''>OR</p>
                <button
                    className='h-12 w-2/5 text-beatsWhite-full bg-beatsBlack-100 rounded-md relative
                        transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsWhite-700 active:ring-brightness-125'
                >
                    Register with GitHub
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={32}
                        height={30}
                        localization='/github.svg'
                        alt=''
                        position='absolute'
                        background='flex justify-center items-center right-8 top-2'
                    />
                </button>
            </Container>
        </>
    );
}
