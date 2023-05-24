import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGlobalData } from '../../../contexts/GlobalDataContext';

interface LoginMenuItemsProps {
    optionName: string;
    iconName: string;
    // closingFunction: () => void;
}

export function LoginMenuItem({ optionName, iconName }: LoginMenuItemsProps) {
    const router = useRouter();
    const { toggleOffAllSecurityInformationAttributes: toggleOffAttributes, setLoginData } = useGlobalData();
    
    function navigateOnClick(e: any) {
        
        const pageToNavigate =
            (optionName == 'Log In' && '/login') ||
            (optionName == 'strategy requests' && '/strategy-requests') ||
            (optionName == 'Sign Up' && '/signup') ||
            (optionName == 'Request New Strategy' && '/register-strategy') ||
            (optionName == 'Add New Strategy' && '/register-strategy') ||
            (optionName == 'My Requests Status' && '/my-requests') ||
            (optionName == 'Suggestion' && '/suggestion/form') ||
            (optionName == 'Suggestions' && '/suggestion/details') ||
            (optionName == 'Profile' && '/profile') ||
            (optionName == 'About Us' && '/about') ||
            (optionName == 'Logout' && '/') ||
            '404';

        optionName == 'Logout'
            ? setLoginData({
                  status: 'logged-off',
                  token: '',
                  userType: 'Visitor',
                  username: '',
              })
            : null;
        router.push(pageToNavigate);
    }

    return (
        <li
            className='flex items-center ml-2 mb-2 w-max hover:border-l-2 hover:border-beatsWhite-900 hover:cursor-pointer hover:pl-1'
            onClick={navigateOnClick}
        >
            <Image src={`/Material Icons/${iconName}.svg`} width={18} height={18} alt='' aria-hidden='true' />
            <span className='font-SourceSans text-sm ml-2'>{`${optionName} `}</span>
        </li>
    );
}
