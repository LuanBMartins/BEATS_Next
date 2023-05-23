import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container } from '../../src/components/Container';
import { TextFormFieldNoDecorator, TextAreaFormField } from '../../src/components/Formfields';
import { ImageContainer } from '../../src/components/ImageContainer';
import { customApi } from '../../src/hooks/useFetch';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const options = {
    pauseOnFocusLoss: true,
    delay: 2000
}

export default function SuggestionForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [reference, setReference] = useState('');

    function sendDataOnClick(e: any) {
        e.preventDefault();
        customApi.methodPost('suggestion/create', 
            {title, description, reference}, (
            () => {            
                toast.dark('Suggestion sent successfully! 👋', options);
                setTitle('')
                setDescription('')
                setReference('')
            }
        ), ( error => {
                if(error.response?.data.message){
                    toast.dark('Error creating suggestion: ' + error.response?.data.message + '! ❌');    
                }else {
                    toast.dark('Error creating suggestion! ❌');
                }
        } ))

        
    }

    return (
        <>
            <Head>
                <title>BEATS | Suggestion</title>
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
                <h1 className='font-Montserrat text-4xl'>Suggestion</h1>

                <div className='w-2/5 flex flex-col gap-8 justify-between mb-10'>
                    <TextFormFieldNoDecorator
                        fieldName='Title'
                        fieldValue={title}
                        settingFunction={setTitle}
                    />
                    <TextAreaFormField
                        fieldName='Description'
                        name='description'
                        fieldValue={description}
                        settingFunction={setDescription}
                    />
                    <TextAreaFormField
                        fieldName='Description'
                        name='description'
                        fieldValue={reference}
                        settingFunction={setReference}
                    />
                </div>

                <button
                    type='submit'
                    onClick={sendDataOnClick}
                    className='h-12 w-2/5 rounded-md bg-beatsGreen-500 text-beatsWhite-full
                        transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                >
                    Send
                </button>
            </Container>
            <ToastContainer 
 
            />
        </>
    );
}
