import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useGlobalData } from '../contexts/GlobalDataContext';
import { Container } from '../src/components/Container';
import { TextFormFieldNoDecorator } from '../src/components/Formfields';
import { ImageContainer } from '../src/components/ImageContainer';
import { urlApi } from '../src/hooks/environments';

interface dataFromAPIType {
    access_token: string;
    message: string;
    user_type: 'Visitor' | 'Regular User' | 'Council Member' | 'Administrator';
    username: string;
}

export default function SignUpPage() {
    const [username, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [github, setGithub] = useState('');

    const router = useRouter();

    const { setLoginData } = useGlobalData();

    function sendDataOnClick(e: any) {
        e.preventDefault();
        const dataToSend = { username, email, password, github };
        const headers = {
            'content-type': 'application/json',
            //Header do tunnel
            'Bypass-Tunnel-Reminder': 'ablabluble',
        };
        // console.log({ ...dataToSend });
        const finalURL = `${urlApi}/register`;

        // console.log(dataToSend, headers, finalURL);
        axios
            .post(finalURL, dataToSend, { headers })
            .then((dataReceivedFromAPI) => {
                const rawData: dataFromAPIType = dataReceivedFromAPI.data;
                // console.log(dataReceivedFromAPI);
                setLoginData({
                    status: 'logged-in',
                    token: rawData.access_token,
                    userType: rawData.user_type,
                    username: rawData.username,
                });
                router.push('/');
            })
            .catch((errorReturnedFromAPI) => console.log(errorReturnedFromAPI.response));
        router.push('/signup');
    }

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
                    <TextFormFieldNoDecorator
                        fieldName='Full Name'
                        fieldValue={username}
                        settingFunction={setFullname}
                    />
                    <TextFormFieldNoDecorator
                        fieldName='E-mail'
                        fieldType='email'
                        fieldValue={email}
                        settingFunction={setEmail}
                    />
                    <TextFormFieldNoDecorator
                        fieldValue={password}
                        settingFunction={setPassword}
                        fieldName='Password (Should contain exactly 12 characters)'
                    />
                    <TextFormFieldNoDecorator
                        fieldValue={github}
                        settingFunction={setGithub}
                        fieldName='GitHub Account'
                    />
                </div>

                <button
                    type='submit'
                    onClick={sendDataOnClick}
                    className='h-12 w-2/5 rounded-md bg-beatsGreen-500 text-beatsWhite-full
                        transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                >
                    Register
                </button>
            </Container>
        </>
    );
}
