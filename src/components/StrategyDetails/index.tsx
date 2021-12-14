import { useEffect, useState } from 'react';
import { Commentaries } from '../../components/Commentaries';
import { InfoSecAttributesOnSearchResult, ImageFormField, TextAreaFormField, TextFormField } from '../Formfields';

interface dataRetrievedType {
    a: boolean;
    acc: boolean;
    aliases: Array<string>;
    authn: boolean;
    authz: boolean;
    c: boolean;
    'complementary references': string;
    consequences: string;
    context: string;
    examples: string;
    forces: string;
    i: false;
    name: string;
    nr: false;
    problem: string;
    publish_date: Date;
    rationale: string;
    'related strategies': string;
    solution: string;
    type: string;
    username_creator: string;
}

interface strategyDataProp {
    strategyData: dataRetrievedType;
    commentaries: any;
}
export function StrategyDetails({ strategyData, commentaries }: strategyDataProp) {
    const { a, acc, aliases, authn, authz, c, i, nr } = strategyData;
    const attributesObject = { a, acc, authn, authz, c, i, nr };
    const formatedDate = new Date(strategyData.publish_date).toLocaleString('en-US');

    // const [strategyName, setStrategyName] = useState('');
    // const [aliases, setAliases] = useState('');
    // const [problem, setProblem] = useState('');
    // const [forces, setForces] = useState('');
    // const [images, setImages] = useState([] as Array<File>);
    // const [solution, setSolution] = useState('');
    // const [rationale, setRationale] = useState('');
    // const [consequences, setConsequences] = useState('');
    // const [examples, setExamples] = useState('');
    // const [relatedPatterns, setRelatedPatterns] = useState('');
    const [references, setReferences] = useState('');

    return (
        <>
            <main className='my-20 mx-32 p-16 bg-beatsBlack-700 rounded-10px grid grid-cols-4 gap-16'>
                <div className='flex flex-col gap-8 justify-between col-span-3'>
                    <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-12'>
                        {strategyData.name}
                    </h1>

                    <p
                        className='font-bold relative block mb-4 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
                    >
                        Aliases:{'  '}
                        {aliases.map((alias: string) => {
                            return (
                                <span key={alias} className='text-base font-SourceSans italic font-normal'>
                                    {alias}{' '}
                                </span>
                            );
                        })}
                    </p>

                    <InfoSecAttributesOnSearchResult
                        fieldName='Attributes'
                        searchResultAttributesObject={attributesObject}
                    />

                    <TextAreaFormField disabled={true} fieldName='Problem' fieldValue={strategyData.problem} />

                    <TextAreaFormField disabled={true} fieldName='Forces' fieldValue={strategyData.forces} />

                    <TextAreaFormField disabled={true} fieldName='Solution' fieldValue={strategyData.solution} />

                    {/* <ImageFormField fieldName='Optional - upload 1 or more images that show your solution' /> */}

                    <TextFormField disabled={true} fieldName='Rationale' fieldValue={strategyData.rationale} />

                    <TextAreaFormField
                        disabled={true}
                        fieldName='Consequences'
                        fieldValue={strategyData.consequences}
                    />

                    <TextAreaFormField disabled={true} fieldName='Examples' fieldValue={strategyData.examples} />

                    <TextFormField
                        disabled={true}
                        fieldName='Related Patterns'
                        fieldValue={strategyData['related strategies']}
                    />

                    <TextAreaFormField disabled={true} fieldName='References' fieldValue={references} />
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
                        <p className=''>{strategyData.username_creator}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Published on:</p>
                        <p className=''>{formatedDate}</p>
                    </div>
                </div>
            </main>

            <Commentaries commentaries={commentaries} />
        </>
    );
}
