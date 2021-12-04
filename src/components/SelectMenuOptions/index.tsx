import { useRef, useEffect } from 'react';
import { securityInformationItems, useGlobalData } from '../../../contexts/GlobalDataContext';

interface SelectMenuOptionsProps {
    closingFunction: () => void;
}

export function SelectMenuOptions({ closingFunction }: SelectMenuOptionsProps) {
    const { securityInformationAttributes, toggleSecurityInformationAttributes } = useGlobalData();

    return (
        <>
            {Object.entries(securityInformationAttributes).map(([key, value]) => {
                // console.log(key, value);
                return (
                    <label htmlFor={key} key={key}>
                        <input
                            id={key}
                            type='checkbox'
                            value={value}
                            onChange={(e) => toggleSecurityInformationAttributes(key)}
                            className='mr-2 form-checkbox text-beatsGreen-700  focus:ring-1 focus:ring-beatsGreen-700'
                        />
                        {key}
                    </label>
                );
            })}
        </>
    );
}
