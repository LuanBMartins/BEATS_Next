import Image from 'next/image';
import { LoginButton } from '../LoginButton';
import { useRouter } from 'next/router';
import { SearchBar } from '../SearchBar';
import { RadioSelector } from '../RadioSelector';
import { SelectMenu } from '../SelectMenu';
import { useGlobalData } from '../../../contexts/GlobalDataContext';

export function Header() {
    const { isSelectMenuOpen, resetFormData, isTermToSearchEmpty, generateRoute } = useGlobalData();

    const router = useRouter();
    const currentPage = router.pathname.split('/')[1];
    const isHomePage = currentPage == '' ? true : false;

    const navigateHome = () => {
        router.push('/');
    };

    function navigateOnSearchClicked(e: any) {
        e.preventDefault();

        if (isTermToSearchEmpty() == false) {
            const URLtoSearch = generateRoute();
            router.push(URLtoSearch);
        }
    }

    return (
        <header className='bg-beatsBlack-700 font-Montserrat flex justify-between h-32 py-6 px-32'>
            <Image src='/Logo/Logo.svg' width={180} height={100} alt='Project Logo' onClick={navigateHome} />
            {!isHomePage && (
                <form
                    action='/strategies'
                    method='GET'
                    role='search'
                    onSubmit={navigateOnSearchClicked}
                    className='flex flex-col'
                >
                    <SearchBar receivedHeight='small' />
                    <div className='flex justify-between items-center mt-4'>
                        <RadioSelector extraCSSClass={`${isSelectMenuOpen ? 'self-start mt-2.5' : ''}`} />
                        <SelectMenu />
                    </div>
                </form>
            )}
            <LoginButton />
        </header>
    );
}
