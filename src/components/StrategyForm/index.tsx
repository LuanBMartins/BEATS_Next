import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container } from '../Container';
import {
    AliasesFormField,
    ImageFormField,
    InfoSecAttributesBoxInForm,
    TextAreaFormField,
    TextFormField,
} from '../Formfields';
import { FormSendingButton } from '../FormSendingButton';
import { RadioSelectorInRegisterStrategy } from '../RadioSelector';

interface attObjectType {
    c: boolean;
    i: boolean;
    a: boolean;
    authn: boolean;
    authz: boolean;
    acc: boolean;
    nr: boolean;
}

type StrategyFormProps = {
    APIToken: string;
};
export function StrategyForm({ APIToken }: StrategyFormProps) {
    const [sendingStatus, setSendingStatus] = useState('stale');
    const [strategyName, setStrategyName] = useState('');
    const [aliases, setAliases] = useState([]);
    const [problem, setProblem] = useState('');
    const [type, setType] = useState('tactic');
    const [forces, setForces] = useState('');
    const [images, setImages] = useState([] as Array<File>);
    const [solution, setSolution] = useState('');
    const [rationale, setRationale] = useState('');
    const [consequences, setConsequences] = useState('');
    const [examples, setExamples] = useState('');
    const [relatedPatterns, setRelatedPatterns] = useState('');
    const [references, setReferences] = useState('');
    const [attributesObject, setAttributesObject] = useState({
        c: false,
        i: false,
        a: false,
        authn: false,
        authz: false,
        acc: false,
        nr: false,
    });
    const router = useRouter();

    // useEffect(() => {
    //     console.log(attributesObject);
    // }, [attributesObject]);

    function toggleAttributesObject(attributeName: string) {
        const conversion = {
            confidentiality: 'c',
            integrity: 'i',
            availability: 'a',
            authentication: 'authn',
            authorization: 'authz',
            accountability: 'acc',
            'non-Repudiation': 'nr',
        };
        const keyValuePairInConversionObject = Object.entries(conversion).find(([key, value]) => key == attributeName);
        const newStateKey = keyValuePairInConversionObject && keyValuePairInConversionObject[1];

        const keyValuePairInAttributesObject = Object.entries(attributesObject).find(
            ([key, value]) => key == newStateKey
        );
        const stateValue = keyValuePairInAttributesObject && keyValuePairInAttributesObject[1];
        const newStateValue = !stateValue;

        const newState = { ...attributesObject, [newStateKey as keyof attObjectType]: newStateValue };
        // console.log(newState);
        setAttributesObject(newState);
    }

    function resetStatus(e: any) {
        e.preventDefault();
        setSendingStatus('stale');
    }

    function navigate() {
        router.push('/');
    }

    function sendData(e: any) {
        e.preventDefault();
        setSendingStatus('loading');

        const fd = new FormData();
        // let concatenetadAliases: string = '';

        images.forEach((image) => {
            fd.append('image', image, image.name);
        });
        // fd.append('image', images[0], images[0].name);

        const sendingObject = {
            name: strategyName,
            aliases: aliases,
            problem: problem,
            forces: forces,
            solution: solution,
            rationale: rationale,
            consequences: consequences,
            examples: examples,
            'related strategies': relatedPatterns,
            'complementary references': references,
            type: type,
            ...attributesObject,
        };
        // console.log(sendingObject);
        // fd.append('strategyName', strategyName);
        // aliases.forEach((alias) => {
        //     concatenetadAliases = concatenetadAliases + '^$22' + alias;
        // });
        // fd.append('aliases', concatenetadAliases);
        // fd.append('problem', problem);
        // fd.append('forces', forces);
        // fd.append('solution', solution);
        // fd.append('rationale', rationale);
        // fd.append('consequences', consequences);
        // fd.append('examples', examples);
        // fd.append('relatedPatterns', relatedPatterns);
        // fd.append('references', references);
        // Object.entries(attributesObject).forEach(([attribute, value]) => {
        // console.log(attribute, value);
        // fd.append(`${attribute}`, value);
        // });

        console.log({ ...sendingObject, images: fd });
        axios
            .post(
                'https://beats-tau.vercel.app/api/hello',
                // 'http://localhost:3000/api/hello',
                // 'https://beats.loca.lt/requests/addition',
                { ...sendingObject, images: fd },
                //Header do tunnel
                {
                    headers: { 'Bypass-Tunnel-Reminder': 'ablabluble', Authorization: `Bearer ${APIToken}` },
                    onUploadProgress: (event) => {
                        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
                    },
                }
            )
            .then(() => {
                setSendingStatus('sent');
                console.log('Terminou de mandar');
            })
            .catch(() => {
                setSendingStatus('error');
                console.log('Erro no upload');
            });
        // const xhr = new XMLHttpRequest();
        // xhr.open('POST', 'https://beats.loca.lt/requests/addition');
        // xhr.upload.addEventListener('loadend', () => console.log('Terminou de mandar'), false);
        // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        // xhr.send(fd);
        // for (let pair of fd.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
    }
    // useEffect(() => {
    //     console.log(relatedPatterns);
    // }, [relatedPatterns]);
    return (
        <Container
            containerType='main'
            containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative container-height'
        >
            <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-12'>
                Register Strategy
            </h1>

            <form onSubmit={sendData} className='w-4/6 flex flex-col gap-8 justify-between'>
                <TextFormField
                    fieldName='Strategy Name'
                    name='strategyName'
                    fieldValue={strategyName}
                    settingFunction={setStrategyName}
                    isRequired={true}
                />

                <AliasesFormField
                    fieldName='Aliases (Maximum of 5 aliases)'
                    name='aliases'
                    aliasesValues={aliases}
                    settingFunction={setAliases}
                />

                <RadioSelectorInRegisterStrategy type={type} changeType={setType} />

                <InfoSecAttributesBoxInForm
                    fieldName='InfoSec Attributes'
                    attributesObjectSettingFunction={toggleAttributesObject}
                    attributesObject={attributesObject}
                />

                <TextAreaFormField
                    fieldName='Problem'
                    name='problem'
                    fieldValue={problem}
                    settingFunction={setProblem}
                />

                <TextAreaFormField fieldName='Forces' name='forces' fieldValue={forces} settingFunction={setForces} />

                <TextAreaFormField
                    fieldName='Solution'
                    name='solution'
                    fieldValue={solution}
                    settingFunction={setSolution}
                />

                <ImageFormField
                    fieldName='Optional - upload 1 or more images that show your solution'
                    settingFunction={setImages}
                />

                <TextFormField
                    fieldName='Rationale'
                    name='rationale'
                    fieldValue={rationale}
                    settingFunction={setRationale}
                />

                <TextAreaFormField
                    fieldName='Consequences'
                    name='consequences'
                    fieldValue={consequences}
                    settingFunction={setConsequences}
                />

                <TextAreaFormField
                    fieldName='Examples'
                    name='examples'
                    fieldValue={examples}
                    settingFunction={setExamples}
                />

                <TextFormField
                    fieldName='Related Patterns'
                    name='relatedPatterns'
                    fieldValue={relatedPatterns}
                    settingFunction={setRelatedPatterns}
                />

                <TextAreaFormField
                    fieldName='References'
                    name='references'
                    fieldValue={references}
                    settingFunction={setReferences}
                />

                {/* <button
                    type='submit'
                    className='h-12 w-6/12 rounded-md bg-beatsGreen-500 text-beatsWhite-full font-bold
                transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                >
                    Register Strategy
                </button> */}
                <FormSendingButton
                    navigate={navigate}
                    resetStatus={resetStatus}
                    sendForm={sendData}
                    sendingStatus={sendingStatus}
                />
            </form>
        </Container>
    );
}
