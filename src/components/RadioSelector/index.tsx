import { useState } from 'react';

export function RadioSelector() {
    const [selectedOption, setSelectedOption] = useState('tactic');

    function changeCheck(e: any) {
        setSelectedOption(e.target.value);
    }

    return (
        <div className='flex justify-between items-center'>
            <h2 className='text-sm font-SourceSans'>Type:</h2>

            <label className='text-sm font-SourceSans inline-flex items-center'>
                <input
                    type='radio'
                    value='tactic'
                    checked={'tactic' === selectedOption}
                    onChange={(e) => changeCheck(e)}
                    className='mx-1.5 form-radio text-beatsGreen-900 ring-0'
                />
                <span>Tactic</span>
            </label>

            <label className='text-sm font-SourceSans inline-flex items-center'>
                <input
                    type='radio'
                    value='pattern'
                    checked={'pattern' === selectedOption}
                    onChange={(e) => changeCheck(e)}
                    className='mx-1.5 form-radio text-beatsGreen-700'
                />
                <span>Pattern</span>
            </label>
        </div>
    );
}
