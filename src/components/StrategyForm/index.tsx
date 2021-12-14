import { useEffect, useState } from 'react';
import { Container } from '../Container';
import {
    InfoSecAttributesBox,
    ImageFormField,
    TextAreaFormField,
    TextFormField,
    AliasesFormField,
} from '../Formfields';

export function StrategyForm() {
    const [strategyName, setStrategyName] = useState('');
    const [aliases, setAliases] = useState([]);
    const [problem, setProblem] = useState('');
    const [forces, setForces] = useState('');
    const [images, setImages] = useState([] as Array<File>);
    const [solution, setSolution] = useState('');
    const [rationale, setRationale] = useState('');
    const [consequences, setConsequences] = useState('');
    const [examples, setExamples] = useState('');
    const [relatedPatterns, setRelatedPatterns] = useState('');
    const [references, setReferences] = useState('');

    useEffect(() => {
        console.log(aliases);
    }, [aliases]);
    function sendData(e: any) {
        e.preventDefault();

        const fd = new FormData();
        fd.append('image', images[0], images[0].name);
        fd.append('strategyName', strategyName);
        // fd.append('aliases', aliases);
        fd.append('problem', problem);
        fd.append('forces', forces);
        fd.append('solution', solution);
        fd.append('rationale', rationale);
        fd.append('consequences', consequences);
        fd.append('examples', examples);
        fd.append('relatedPatterns', relatedPatterns);
        fd.append('references', references);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/api/hello');
        xhr.upload.addEventListener('loadend', () => console.log('Terminou de mandar'), false);
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send(fd);
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

                <InfoSecAttributesBox fieldName='InfoSec Attributes' />

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

                <button
                    type='submit'
                    className='h-12 w-6/12 rounded-md bg-beatsGreen-500 text-beatsWhite-full font-bold
                transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                >
                    Register Strategy
                </button>
            </form>
        </Container>
    );
}
