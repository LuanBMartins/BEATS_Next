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

export interface StrategyData {
    
        request: {
            username: string,
            data_solicitacao: string,
            tipo_solicitacao: number,
            nro_protocolo: string,
            estado: number,
            administrador: number,
            voto_admin: number,
            texto_rejeicao: string,
            texto_edicao: string,
            estrategia_referente: string,
            architecture_strategy: {
                id: number,
                name: string,
                type: number,
                c: true | false,
                i: true | false,
                a: true | false,
                authn: true | false,
                authz: true | false,
                acc: true | false,
                nr: true | false,
                username_creator: string,
                publish_date: string,
                problem: string,
                context?: string,
                forces?: string,
                solution?: string,
                rationale?: string,
                consequences?: string,
                examples?: string,
                related_strategies?: string,
                complementary_references?: string,
                accepted: number
            }
        };
    
}

export default function WaitingStrategyDetails({ strategyData }: any) {

    const { request }: StrategyData = strategyData
    const attributesObject = { 
        a: request.architecture_strategy.a, 
        acc: request.architecture_strategy.acc, 
        authn: request.architecture_strategy.authn, 
        authz: request.architecture_strategy.authz,
        c: request.architecture_strategy.c, 
        i: request.architecture_strategy.i, 
        nr: request.architecture_strategy.nr 
    };
    const formatedDate = new Date().toLocaleString('en-US');

    const routesToObtainImages: Array<string> = [];

    return (
        <>
            <main className='my-20 mx-32 p-16 bg-beatsBlack-700 rounded-10px grid grid-cols-4 gap-16'>
                <div className='flex flex-col gap-8 justify-between col-span-3'>
                    <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-12'>
                        {request.architecture_strategy.name}
                    </h1>

                    <p
                        className='font-bold relative block ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
                    >
                        Aliases:{'  '}
                        {/* {aliases.map((alias: string) => {
                            return (
                                <span key={alias} className='text-base font-SourceSans italic font-normal'>
                                    {alias}{' '}
                                </span>
                            );
                        })} */}
                    </p>

                    <RadioSelectorInStrategyDetails receivedType={'type.toLowerCase()'} />

                    <InfoSecAttributesOnSearchResult
                        fieldName='Attributes'
                        searchResultAttributesObject={attributesObject}
                    />

                    <TextAreaFormField disabled={true} fieldName='Problem' fieldValue={request.architecture_strategy.problem} />

                    <TextAreaFormField disabled={true} fieldName='Forces' fieldValue={request.architecture_strategy.forces} />

                    <TextAreaFormField disabled={true} fieldName='Solution' fieldValue={request.architecture_strategy.solution} />

                    {/* If there are images (length > 0), insert a div container to the images. Map through images generating subdivs for each image */}
                    {/* {routesToObtainImages.length > 0 ? (
                        <div className='images-container flex h-80max-h-80 gap-12 flex-wrap'>
                            {routesToObtainImages.map((imageLink, index) => {
                                return (
                                    <div key={index} className='w-2/5 h-80 relative'>
                                        <Image src={imageLink} alt='' layout='fill' placeholder='empty' />
                                    </div>
                                );
                            })}
                        </div>
                    ) : null} */}

                    <TextFormField disabled={true} fieldName='Rationale' fieldValue={request.architecture_strategy.rationale} />

                    <TextAreaFormField
                        disabled={true}
                        fieldName='Consequences'
                        fieldValue={request.architecture_strategy.consequences}
                    />

                    <TextAreaFormField disabled={true} fieldName='Examples' fieldValue={request.architecture_strategy.examples} />

                    <TextFormField
                        disabled={true}
                        fieldName='Related Patterns'
                        fieldValue={request.architecture_strategy.related_strategies}
                    />

                    <TextAreaFormField disabled={true} fieldName='References' fieldValue={request.architecture_strategy.complementary_references} />
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
                        <p className=''>{request.architecture_strategy.username_creator}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Published on:</p>
                        <p className=''>{formatedDate}</p>
                    </div>
                </div>
            </main>
        </>
    );
}
