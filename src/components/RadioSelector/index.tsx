import { Dispatch, SetStateAction } from 'react';
import { useGlobalData } from '../../../contexts/GlobalDataContext';

interface RadioSelectorProps {
    extraCSSClass?: string;
}

interface RadioSelectorInStrategyDetailsProps {
    receivedType: string;
}

interface RadioSelectorInRegisterStrategy {
    type: string;
    changeType: Dispatch<SetStateAction<any>>;
}

export function RadioSelector({ extraCSSClass }: RadioSelectorProps) {
    const { searchedType, setSearchedType } = useGlobalData();

    function changeCheck(e: any) {
        setSearchedType(e.target.value);
    }

    return (
        <div className={`flex justify-between items-center ${extraCSSClass}`}>
            <h3 className='text-sm font-SourceSans'>Type:</h3>
            <label className='text-sm font-SourceSans inline-flex items-center'>
                <input
                    type='radio'
                    value='tactic'
                    checked={'tactic' === searchedType}
                    onChange={(e) => changeCheck(e)}
                    className='mx-1.5 form-radio text-beatsGreen-900 focus:ring-1 focus:ring-beatsGreen-700'
                />
                <span>Tactic</span>
            </label>

            <label className='text-sm font-SourceSans inline-flex items-center'>
                <input
                    type='radio'
                    value='pattern'
                    checked={'pattern' === searchedType}
                    onChange={(e) => changeCheck(e)}
                    className='mx-1.5 form-radio text-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
                />
                <span>Pattern</span>
            </label>
        </div>
    );
}
export function RadioSelectorInStrategyDetails({ receivedType }: RadioSelectorInStrategyDetailsProps) {
    return (
        <div className='flex items-center'>
            <h3 className='text-sm font-SourceSans'>Type:</h3>
            {receivedType == 'tactic' ? (
                <label className='text-sm font-SourceSans inline-flex items-center'>
                    <input
                        type='radio'
                        value='tactic'
                        checked={'tactic' === receivedType}
                        className='mx-1.5 form-radio text-beatsGreen-900 focus:ring-1 focus:ring-beatsGreen-700'
                    />
                    <span>Tactic</span>
                </label>
            ) : null}

            {receivedType == 'pattern' ? (
                <label className='text-sm font-SourceSans inline-flex items-center'>
                    <input
                        type='radio'
                        value='pattern'
                        checked={'pattern' === receivedType}
                        className='mx-1.5 form-radio text-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
                    />
                    <span>Pattern</span>
                </label>
            ) : null}
        </div>
    );
}
export function RadioSelectorInRegisterStrategy({ type, changeType }: RadioSelectorInRegisterStrategy) {
    function changeCheck(e: any) {
        changeType(e.target.value);
    }

    return (
        <div className='flex items-center'>
            <h3 className='text-sm font-SourceSans'>Type:</h3>
            <label className='text-sm font-SourceSans inline-flex items-center'>
                <input
                    type='radio'
                    value='tactic'
                    checked={'tactic' === type}
                    onChange={(e) => changeCheck(e)}
                    className='mx-1.5 form-radio text-beatsGreen-900 focus:ring-1 focus:ring-beatsGreen-700'
                />
                <span>Tactic</span>
            </label>

            <label className='text-sm font-SourceSans inline-flex items-center'>
                <input
                    type='radio'
                    value='pattern'
                    checked={'pattern' === type}
                    onChange={(e) => changeCheck(e)}
                    className='mx-1.5 form-radio text-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
                />
                <span>Pattern</span>
            </label>
        </div>
    );
}
