import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LoginMenuItem } from '../LoginMenuItem';
import { useGlobalData } from '../../../contexts/GlobalDataContext';

interface LoginMenuModalProps {
    closingFunction: Function;
}

interface loggedUserProps {
    username: string;
}

export function LoginMenuModal({ closingFunction }: LoginMenuModalProps) {
    const { loginData } = useGlobalData();
    const { username, userType } = loginData;

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
            className='rounded-20px bg-beatsBlack-800 border border-beatsWhite-900 flex flex-col w-60 h-auto p-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {(userType == 'Visitor' && <VisitorTypeList />) ||
                (userType == 'Regular User' && <StandardUserTypeList username={username} />) ||
                (userType == 'Council Member' && <CouncilTypeList username={username} />) ||
                (userType == 'Administrator' && <AdministratorTypeList username={username} />)}
        </motion.div>
    );
}

function VisitorTypeList() {
    return (
        <>
            <h4 className='font-SourceSans font-bold mb-4 relative inline-block underline green-underline'>Visitor</h4>

            <h5 className='font-SourceSans text-sm mb-2'>Actions</h5>
            <ul>
                <LoginMenuItem iconName='login' optionName='Log In' />
                <LoginMenuItem iconName='register' optionName='Sign Up' />
            </ul>
            <h5 className='font-SourceSans text-sm mb-2'>Info</h5>
            <ul>
                <LoginMenuItem iconName='about' optionName='About Us' />
            </ul>
        </>
    );
}

function StandardUserTypeList({ username }: loggedUserProps) {
    return (
        <>
            <h4 className='font-SourceSans text-sm mb-4 relative inline-block underline green-underline'>{username}</h4>

            <h5 className='font-SourceSans text-sm mb-2'>Actions</h5>
            <ul>
                <LoginMenuItem iconName='person_outline' optionName='Profile' />
                <LoginMenuItem iconName='ballot' optionName='My Requests Status' />
                <LoginMenuItem iconName='add' optionName='Request New Strategy' />
                <LoginMenuItem iconName='logout' optionName='Logout' />
            </ul>
            <h5 className='font-SourceSans text-sm mb-2'>Info</h5>
            <ul>
                <LoginMenuItem iconName='about' optionName='About Us' />
            </ul>
        </>
    );
}

function CouncilTypeList({ username }: loggedUserProps) {
    return (
        <>
            <h4 className='font-SourceSans text-sm mb-4 relative inline-block underline green-underline'>{username}</h4>

            <h5 className='font-SourceSans text-sm mb-2'>Actions</h5>
            <ul>
                <LoginMenuItem iconName='person_outline' optionName='Profile' />
                <LoginMenuItem iconName='council' optionName='Council' />
                <LoginMenuItem iconName='ballot' optionName='Check Requests Status' />
                <LoginMenuItem iconName='add' optionName='Request New Strategy' />
                <LoginMenuItem iconName='logout' optionName='Logout' />
            </ul>
            <h5 className='font-SourceSans text-sm mb-2'>Info</h5>
            <ul>
                <LoginMenuItem iconName='about' optionName='About Us' />
            </ul>
        </>
    );
}

function AdministratorTypeList({ username }: loggedUserProps) {
    return (
        <>
            <h4 className='font-SourceSans text-sm mb-4 relative inline-block underline green-underline'>{username}</h4>

            <h5 className='font-SourceSans text-sm mb-2'>Actions</h5>
            <ul>
                <LoginMenuItem iconName='person_outline' optionName='Profile' />
                <LoginMenuItem iconName='person_search' optionName='Search Users' />
                <LoginMenuItem iconName='info' optionName='strategy requests'/>
                <LoginMenuItem iconName='add' optionName='Add New Strategy' />
                <LoginMenuItem iconName='logout' optionName='Logout' />
            </ul>
            <h5 className='font-SourceSans text-sm mb-2'>Info</h5>
            <ul>
                <LoginMenuItem iconName='about' optionName='About Us' />
            </ul>
        </>
    );
}
