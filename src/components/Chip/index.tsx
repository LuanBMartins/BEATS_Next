import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useGlobalData } from '../../../contexts/GlobalDataContext';

interface ChipProps {
    iconName: string;
    attributeName: string;
    isChipSelectable: boolean;
}

export function Chip({ iconName, attributeName, isChipSelectable }: ChipProps) {
    const { securityInformationAttributes, toggleSecurityInformationAttributes } = useGlobalData();

    const [chipSelected, setChipSelected] = useState(false);

    const initialBorder = isChipSelectable ? 'hover:opacity-80 hover:scale-95' : 'border-beatsWhite-900';
    const [borderColor, setBorderColor] = useState(initialBorder);

    useEffect(() => {
        const currentBorder =
            (!isChipSelectable && 'border-beatsWhite-900') ||
            (!chipSelected && 'border-beatsWhite-900 hover:opacity-80 hover:scale-95') ||
            'border-beatsGreen-700';
        /*
        This short circuit evaluates in the order:
        1st line - Is the chip selectable? If it doesnt, no hovers only the border is white
        2nd line - If the chip is selectable, is its state currently selected? If not, make it hoverable
        3rd line - If the chip is selectable and its state is currently selected, make the border green
        */

        setBorderColor(currentBorder);
    }, [chipSelected, isChipSelectable]);

    function alterSelectedState() {
        const nameInGlobalDataFormat = attributeName.charAt(0).toLowerCase() + attributeName.slice(1);
        // console.log(nameInGlobalDataFormat);
        isChipSelectable
            ? (setChipSelected(!chipSelected), toggleSecurityInformationAttributes(nameInGlobalDataFormat))
            : null;
    }

    return (
        <div
            className={`rounded border ${borderColor} flex justify-between items-center p-1`}
            onClick={alterSelectedState}
        >
            <Image
                src={`/Material Icons/${iconName}.svg`}
                width={16}
                height={16}
                alt=''
                aria-hidden='true'
                className='mx-1'
            />
            <span className='mx-1.5 text-sm font-SourceSans'>{attributeName}</span>
        </div>
    );
}
