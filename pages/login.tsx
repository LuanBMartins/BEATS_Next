import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from '../src/components/Container';
import { ImageContainer } from '../src/components/ImageContainer';
import { TextFormFieldNoDecorator } from '../src/components/Formfields';

export default function LoginPage() {
    const router = useRouter();

    function navigateOnClick() {
        router.push('/signup');
    }

    return (
        <>
            <Head>
                <title>BEATS | Log In</title>
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
                <h1 className='font-Montserrat text-4xl'>Log In</h1>

                <div className='w-2/4 flex flex-col gap-8 justify-between'>
                    <TextFormFieldNoDecorator fieldName='E-mail' />
                    <TextFormFieldNoDecorator fieldName='Password' fieldType='email' />
                </div>

                <div className='w-2/4 flex gap-8 justify-between'>
                    <button
                        className='h-12 w-6/12 rounded-md bg-beatsGreen-500 text-beatsWhite-full
                        transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                    >
                        Log In
                    </button>
                    <button
                        className='h-12 w-6/12 text-beatsWhite-full border border-beatsWhite-100 rounded-md
                        transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsWhite-700 active:ring-brightness-125'
                    >
                        Forgot My Password
                    </button>
                </div>
                <p className=''>
                    Not Registered?{' '}
                    <span
                        className='underline hover:cursor-pointer hover:text-beatsGreen-900'
                        onClick={navigateOnClick}
                    >
                        Sign Up
                    </span>{' '}
                    now!
                </p>
            </Container>
        </>
    );
}
