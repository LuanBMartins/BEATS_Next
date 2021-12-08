import { ImageContainer } from '../ImageContainer';
import { useGlobalData } from '../../../contexts/GlobalDataContext';

type SearchProps = {
    receivedHeight: string;
};

export function SearchBar({ receivedHeight }: SearchProps) {
    const { termToSearch, setTermToSearch, isTermToSearchEmpty } = useGlobalData();

    const searchBarHeight = receivedHeight == 'large' ? 'h-12' : 'h-10 max-width-033';
    const searchIconHeight = 32;
    const textHeight = receivedHeight == 'large' ? 'h-full py-2 px-6 text-2xl' : 'h-full py-1 px-6 text-lg';
    const buttonDisabled = isTermToSearchEmpty();

    // console.log(`Search bar height = ${searchBarHeight}`);
    // console.log(`Search Icon height = ${searchIconHeight}`);

    return (
        <div className={`search-grid rounded-r-3xl w-7/12 ${searchBarHeight}`}>
            <input
                className={`bg-beatsGreen-100 font-Montserrat
                border-l border-t border-b border-beatsGreen-300 rounded-l-3xl
                ${textHeight}
                focus:outline-none focus:border-beatsGreen-900 focus:ring-1 focus:ring-beatsGreen-900`}
                value={termToSearch || ''}
                onChange={(e) => setTermToSearch(e.target.value)}
                placeholder='Search for a term...'
                type='search'
            />

            <button
                className='border-r border-t border-b rounded-r-3xl border-beatsGreen-700
                bg-beatsGreen-700 transition duration-400 ease-in hover:border-beatsGreen-900 hover:bg-beatsGreen-900
                flex justify-center items-center h-full cursor-pointer disabled:cursor-not-allowed'
                type='submit'
                disabled={buttonDisabled}
            >
                <ImageContainer
                    vertical=''
                    horizontal=''
                    width={searchIconHeight}
                    height={searchIconHeight}
                    localization='/Material Icons/search.svg'
                    alt=''
                    position=''
                    background='flex justify-center items-center -ml-0.5'
                />
            </button>
        </div>
    );
}
