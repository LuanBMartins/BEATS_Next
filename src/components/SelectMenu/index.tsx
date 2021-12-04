import { useRef, useState, useEffect } from 'react';
import { SelectMenuOptions } from '../SelectMenuOptions';
import { GlobalDataContext, useGlobalData } from '../../../contexts/GlobalDataContext';

export function SelectMenu() {
    const { isSelectMenuOpen, showSelectOptions, hideSelectOptions } = useGlobalData();

    const ref: any = useRef();

    useEffect(() => {
        if (ref.current) {
            const checkIfClickedOutside = (e: any) => {
                // If the menu is open and the clicked target is not within the menu,
                // then close the menu
                if (ref.current && !ref.current.contains(e.target)) {
                    hideSelectOptions();
                }
            };

            document.addEventListener('mousedown', checkIfClickedOutside);

            return () => {
                // Cleanup the event listener
                document.removeEventListener('mousedown', checkIfClickedOutside);
            };
        }
    });

    return (
        <div
            className={`relative flex flex-col z-10 w-3/6 p-2 border border-beatsWhite-900 rounded-xl overflow-y-visible ${
                isSelectMenuOpen ? 'bg-beatsBlack-100' : ''
            }`}
            onClick={showSelectOptions}
            ref={ref}
        >
            {!isSelectMenuOpen && <span>Attributes</span>}
            {isSelectMenuOpen && <SelectMenuOptions closingFunction={hideSelectOptions} />}
        </div>
    );
}
