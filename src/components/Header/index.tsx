import Image from 'next/image';
import { LoginButton } from '../LoginButton';

export function Header() {
    return (
        <header className='bg-beatsBlack-700 font-Montserrat flex justify-between h-32 py-6 px-32'>
            <Image src='/Logo/Logo.svg' width={180} height={100} alt='Project Logo' />
            <LoginButton />
        </header>
    );
}
