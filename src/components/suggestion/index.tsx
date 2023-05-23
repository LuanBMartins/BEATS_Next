import { ImageContainer } from '../ImageContainer';
import { useRouter } from 'next/router'
import { TextAreaFormField } from '../Formfields';
import { customApi } from '../../hooks/useFetch';


interface Suggestion {
    id: number,
    username: string,
    title: string,
    description: string,
    reference: string
}

export function SuggestionContext(props: any) {
    const suggestion: Suggestion = props.suggestion
    const router = useRouter()

    const visualizeOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push('/suggestion/' + suggestion.id)
    };
      
    return (
        <>
            <div className='strategy-description col-span-3 border-b'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    {suggestion.title} 
                </h3>
            </div>

            <div className='strategy-buttons col-span-1'>
                <button
                    type='button'
                    value={suggestion.id}
                    onClick={visualizeOnClick}
                    className='font-Montserrat border px-8 py-2 rounded-10px w-full flex gap-2 '
                    
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/search.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    Visualize
                </button>
            </div>
        </>
    );
}

export function SuggestionDetailsContext(props: any) {
    const suggestion: Suggestion = props.suggestion
    const router = useRouter()

    const deleteOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        customApi.methodDelete('suggestion/delete/' + suggestion.id, {}, (response) => {
            router.push('/suggestion/details')
        })
    };

    return (
        <>
            <main className='my-20 mx-32 p-16 bg-beatsBlack-700 rounded-10px grid grid-cols-4 gap-16'>
                <div className='flex flex-col gap-8 justify-between col-span-3'>
                    <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-12'>
                        {suggestion.title}
                    </h1>

                    <TextAreaFormField disabled={true} fieldName='Description' fieldValue={suggestion.description} />
                    <TextAreaFormField disabled={true} fieldName='References' fieldValue={suggestion.reference} />
                    <button
                        type='submit'
                        onClick={deleteOnClick}
                        className='h-10 w-full rounded-md bg-beatsGreen-500 text-beatsWhite-full font-bold mb-4
                transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                    >
                        Delete
                    </button>
                </div>
            </main>
        </>
    );
}