import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LoginMenuItem } from '../LoginMenuItem';

interface LoginMenuModalProps {
    closingFunction: Function;
}

export function LoginMenuModal({ closingFunction }: LoginMenuModalProps) {
    const ref: any = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (ref.current && !ref.current.contains(e.target)) {
                closingFunction();
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    });

    return (
        <motion.div
            ref={ref}
            className='rounded-20px bg-beatsBlack-800 border border-beatsWhite-900 flex flex-col w-60 h-40 p-6 z-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h4 className='font-SourceSans text-sm mb-4 relative inline-block underline green-underline'>Usuário</h4>

            <ul>
                <LoginMenuItem iconName='person' optionName='Perfil' />
                <LoginMenuItem iconName='ballot' optionName='Acompanhar Solicitacoes' />
                <LoginMenuItem iconName='add' optionName='Solicitar Nova estrategia' />
            </ul>
        </motion.div>
    );
}
