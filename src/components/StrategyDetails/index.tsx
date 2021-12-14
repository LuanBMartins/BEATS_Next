import { useEffect, useState } from 'react';
import { Commentaries } from '../../components/Commentaries';
import { InfoSecAttributesBox, ImageFormField, TextAreaFormField, TextFormField } from '../Formfields';

export function StrategyDetails() {
    const [strategyName, setStrategyName] = useState('');
    const [aliases, setAliases] = useState('');
    const [problem, setProblem] = useState('');
    const [forces, setForces] = useState('');
    const [images, setImages] = useState([] as Array<File>);
    const [solution, setSolution] = useState('');
    const [rationale, setRationale] = useState('');
    const [consequences, setConsequences] = useState('');
    const [examples, setExamples] = useState('');
    const [relatedPatterns, setRelatedPatterns] = useState('');
    const [references, setReferences] = useState('');

    return (
        <>
            <main className='my-20 mx-32 p-16 bg-beatsBlack-700 rounded-10px grid grid-cols-4 gap-16'>
                <div className='flex flex-col gap-8 justify-between col-span-3'>
                    <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-12'>
                        Name Received as Parameter
                    </h1>
                    <TextFormField fieldName='Strategy Name' fieldValue={strategyName} />

                    <TextFormField fieldName='Aliases' fieldValue={aliases} />

                    <InfoSecAttributesBox fieldName='InfoSec Attributes' />

                    <TextAreaFormField fieldName='Problem' fieldValue={problem} />

                    <TextAreaFormField fieldName='Forces' fieldValue={forces} />

                    <TextAreaFormField fieldName='Solution' fieldValue={solution} />

                    <ImageFormField fieldName='Optional - upload 1 or more images that show your solution' />

                    <TextFormField fieldName='Rationale' fieldValue={rationale} />

                    <TextAreaFormField fieldName='Consequences' fieldValue={consequences} />

                    <TextAreaFormField fieldName='Examples' fieldValue={examples} />

                    <TextFormField fieldName='Related Patterns' fieldValue={relatedPatterns} />

                    <TextAreaFormField fieldName='References' fieldValue={references} />
                </div>
                <div className='border border-beatsGreen-700 rounded-10px p-6 col-start-4 col-span-1 h-60'>
                    <button
                        type='submit'
                        className='h-12 w-6/12 rounded-md bg-beatsGreen-500 text-beatsWhite-full font-bold mb-4
                transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                    >
                        Request Changes
                    </button>
                    <div className='mb-4'>
                        <p className='font-bold'>Author:</p>
                        <p className=''>AuthorReceived</p>
                    </div>
                    <div>
                        <p className='font-bold'>Published on:</p>
                        <p className=''>DateReceived</p>
                    </div>
                </div>
            </main>
            <Commentaries />
        </>
    );
}
