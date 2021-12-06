import { useRef, useState, useEffect } from 'react';
import { ImageContainer } from '../ImageContainer';
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
            className={`relative flex z-10 w-3/6 p-4 border border-beatsWhite-900 rounded-xl overflow-y-visible ${
                isSelectMenuOpen ? 'bg-beatsBlack-100 flex-col' : 'h-10 justify-between items-center'
            }`}
            onClick={showSelectOptions}
            ref={ref}
        >
            {!isSelectMenuOpen && (
                <>
                    <span>Attributes</span>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={16}
                        height={16}
                        localization='/add_button.png'
                        alt=''
                        position=''
                        background='flex justify-center items-center '
                    />
                </>
            )}
            {isSelectMenuOpen && <SelectMenuOptions closingFunction={hideSelectOptions} />}
        </div>
    );
}
