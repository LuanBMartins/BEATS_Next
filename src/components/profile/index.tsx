import axios, { AxiosError, AxiosResponse } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useGlobalData } from '../../../contexts/GlobalDataContext';
import { Container } from '../../../src/components/Container';
import { TextFormFieldNoDecorator, TextFormField } from '../../../src/components/Formfields';
import { ImageContainer } from '../../../src/components/ImageContainer';
import { customApi } from '../../hooks/useFetch'

import MessageBox from '../messageBox';

export default function ProfileDetails() {

    const [username, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [perfil_github, setGithub] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        customApi.methodGet(`profile/${loginData.username}`,
            {},
            (response: AxiosResponse<any>) => {
                const data = response.data
                setFullname(data.data.username)
                setEmail(data.data.email)
                setGithub(data.data.perfil_github)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function handleCloseMessage(): void {
        setErrorMessage('');
    }
    
    const router = useRouter();
    const { loginData } = useGlobalData();

    function sendDataOnClick(event: any) {
        event.preventDefault();
        const dataToSend = { username, email, senha, perfil_github };
        customApi.methodPut(`profile/update/${loginData.username}`, {
            ...dataToSend
        }, () => {
            router.push(router.pathname)
        }, (response: AxiosError<any>) => {
            if(response.response?.data.message){
                setErrorMessage(response.response.data.message);
            }
        })
    }

    return (
        <>
            {errorMessage && (
                <MessageBox message={errorMessage} onClose={handleCloseMessage} />
            )}
            <Head>
                <title>BEATS | Profile</title>
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
                <h1 className='font-Montserrat text-4xl'>Profile</h1>

                <div className='w-2/5 flex flex-col gap-8 justify-between mb-10'>
                    <TextFormField
                        fieldName='Full Name'
                        disabled={true}
                        fieldValue={username}
                        settingFunction={setFullname}
                    />
                    <TextFormField
                        fieldName='E-mail'
                        fieldType='email'
                        fieldValue={email}
                        settingFunction={setEmail}
                    />
                    <TextFormField
                        fieldValue={senha}
                        settingFunction={setPassword}
                        fieldName='Password (Should contain exactly 12 characters)'
                    />
                    <TextFormField
                        fieldValue={perfil_github}
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
                    Update
                </button>
            </Container>
        </>
    );
}
