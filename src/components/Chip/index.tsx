import Image from 'next/image';
import { useState } from 'react';

interface ChipProp {
    iconName: string;
    attributeName: string;
    selectedChip?: string;
    margin?: string;
}

export function Chip({ iconName, attributeName, selectedChip, margin }: ChipProp) {
    const [chipSelected, setChipSelected] = useState(false);

    const borderColor = chipSelected
        ? 'border-beatsGreen-700'
        : 'border-beatsWhite-900 hover:opacity-80 hover:scale-95';
    const receivedMargin = margin ? `mx-${margin}` : '';

    return (
        <div
            className={`rounded ${borderColor} border flex justify-between items-center p-1 ${receivedMargin}`}
            onClick={() => setChipSelected(!chipSelected)}
        >
            <Image
                src={`/Material Icons/${iconName}.svg`}
                width={16}
                height={16}
                alt=''
                aria-hidden='true'
                className='mx-1'
            />
            <p className='mx-1.5 text-sm font-SourceSans'>{attributeName}</p>
        </div>
    );
}
