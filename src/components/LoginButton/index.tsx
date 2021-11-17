import Image from 'next/image';
import { useState } from 'react';
import { LoginMenuModal } from '../LoginMenuModal';
import { AnimatePresence, usePresence, motion } from 'framer-motion';

export function LoginButton() {
    const [isModalOpen, setModalOpen] = useState(false);

    function controlModal() {
        setModalOpen(!isModalOpen);
    }

    const isPresent = usePresence();

    return (
        <>
            <AnimatePresence initial={false}>
                {!isModalOpen && (
                    <motion.button
                        className='rounded-20px border-whiteBeats-900 border flex w-28 justify-center items-center faded-bg hover:opacity-40 outline-none'
                        onClick={controlModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ opacity: 0.8 }}
                        whileTap={{ opacity: 0.8 }}
                    >
                        <Image src='/Material Icons/person.svg' width={32} height={32} alt='Project Logo' />
                    </motion.button>
                )}
                {isModalOpen && <LoginMenuModal closingFunction={controlModal} />}
            </AnimatePresence>
        </>
    );
}
