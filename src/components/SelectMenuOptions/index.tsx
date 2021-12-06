import { useRef, useEffect } from 'react';
import { useGlobalData } from '../../../contexts/GlobalDataContext';

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
                    <label htmlFor={key} key={key} className='text-sm'>
                        <input
                            id={key}
                            type='checkbox'
                            value={key}
                            checked={value}
                            onChange={(e) => toggleSecurityInformationAttributes(key)}
                            className='mr-2 form-checkbox text-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
                        />
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                );
            })}
        </>
    );
}
