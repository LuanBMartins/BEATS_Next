import Image from 'next/image';
import { Commentaries } from '../../components/Commentaries';
import { urlApi } from '../../hooks/environments';
import { useFetch } from '../../hooks/useFetch';
import { InfoSecAttributesOnSearchResult, TextAreaFormField, TextFormField } from '../Formfields';
import { RadioSelectorInStrategyDetails } from '../RadioSelector';

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
    const { a, acc, aliases, authn, authz, c, i, nr, type, 'complementary references': references } = strategyData;
    const attributesObject = { a, acc, authn, authz, c, i, nr };
    const formatedDate = new Date(strategyData.publish_date).toLocaleString('en-US');

    const routeToCheckImages = `/strategies/${strategyData.name}/images`;
    const { data: imageData, error } = useFetch(routeToCheckImages);
    // console.log(imageData, error && error.message);

    const routesToObtainImages: Array<string> = [];
    imageData &&
        imageData.images_name.forEach((image_link: string) => {
            // console.log(image_link);
            routesToObtainImages.push(`${urlApi}/strategies/${strategyData.name}/images/${image_link}`);
        });
    // console.log(routesToObtainImages);
    // if (imageData && imageData.images_name.length > 0) {

    // const routeToObtainImages = []
    // imageData.images_name.forEach(() => {
    //     { data: imageData, error } = useFetch(routeToCheckImages)
    // })
    // }

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
    // const [references, setReferences] = useState('');
    // console.log(strategyData);

    return (
        <>
            <main className='my-20 mx-32 p-16 bg-beatsBlack-700 rounded-10px grid grid-cols-4 gap-16'>
                <div className='flex flex-col gap-8 justify-between col-span-3'>
                    <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-12'>
                        {strategyData.name}
                    </h1>

                    <p
                        className='font-bold relative block ml-4
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

                    <RadioSelectorInStrategyDetails receivedType={type.toLowerCase()} />

                    <InfoSecAttributesOnSearchResult
                        fieldName='Attributes'
                        searchResultAttributesObject={attributesObject}
                    />

                    <TextAreaFormField disabled={true} fieldName='Problem' fieldValue={strategyData.problem} />

                    <TextAreaFormField disabled={true} fieldName='Forces' fieldValue={strategyData.forces} />

                    <TextAreaFormField disabled={true} fieldName='Solution' fieldValue={strategyData.solution} />

                    {/* If there are images (length > 0), insert a div container to the images. Map through images generating subdivs for each image */}
                    {routesToObtainImages.length > 0 ? (
                        <div className='images-container flex h-80max-h-80 gap-12 flex-wrap'>
                            {routesToObtainImages.map((imageLink, index) => {
                                return (
                                    <div key={index} className='w-2/5 h-80 relative'>
                                        <Image src={imageLink} alt='' layout='fill' placeholder='empty' />
                                    </div>
                                );
                            })}
                        </div>
                    ) : null}

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
                <div className='border border-beatsGreen-700 rounded-10px p-6 col-start-4 col-span-1 w-3/4 mx-auto h-60'>
                    <button
                        type='submit'
                        className='h-12 w-full rounded-md bg-beatsGreen-500 text-beatsWhite-full font-bold mb-4
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

            <Commentaries strategyName={strategyData.name} commentaries={commentaries} />
        </>
    );
}
