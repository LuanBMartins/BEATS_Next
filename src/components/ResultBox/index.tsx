import { Container } from '../Container';
import { Chip } from '../Chip';
import { InfoSecAttributesOnSearchResult } from '../Formfields';
import { useRouter } from 'next/router';

export interface resultsItemProps {
    id: number;
    a: boolean;
    acc: boolean;
    aliases: Array<string> | [];
    authn: boolean;
    authz: boolean;
    c: boolean;
    i: boolean;
    name: string;
    nr: boolean;
    type: string;
}

interface routingDataProps {
    strategy: resultsItemProps;
}
export function ResultBox({ strategy }: routingDataProps) {
    const router = useRouter();

    const { a, acc, aliases, authn, authz, c, i, name, nr, type, id } = strategy;
    const attributesObject = { a, acc, authn, authz, c, i, nr };

    function click() {
        router.push(`/strategies/${id}`);
    }
    // console.log(currentURL);

    return (
        <Container
            containerType='section'
            containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative overflow-hidden'
            onClickFunction={click}
        >
            <div
                className='skeleton-item
            before:absolute before:bg-beatsGreen-700 before:h-12 before:w-4 before:block before:top-0 before:left-0 before:
            flex flex-col w-full'
            >
                <h3 className='font-Montserrat text-2xl text-left px-12 mb-4'>{name}</h3>

                <div className='skeleton-infos flex-1 space-y-4 px-12'>
                    <p className='text-base font-SourceSans'>
                        <span className='font-bold'>Type: </span>
                        {type == '1' ? 'Pattern': 'Tactic'}
                    </p>
                    <p className='font-bold'>
                      
                        {/* {aliases.map((alias: string) => {
                            return (
                                <span key={alias} className='text-base font-SourceSans italic font-normal'>
                                    {alias}{' '}
                                </span>
                            );
                        })} */}
                    </p>
                    <InfoSecAttributesOnSearchResult fieldName='A' searchResultAttributesObject={attributesObject} />
                </div>
            </div>
        </Container>
    );
}
