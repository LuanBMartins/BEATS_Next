import { ImageContainer } from '../ImageContainer';

type SearchProps = {
    receivedHeight: number;
};

export function SearchBar({ receivedHeight }: SearchProps) {
    const searchBarHeight = receivedHeight >= 40 ? 'h-10' : 'h-32';
    const searchIconHeigh = receivedHeight >= 40 ? 24 : 16;
    return (
        <div className='search-grid rounded-r-3xl w-7/12'>
            <input
                className={`bg-beatsGreen-100
                border-l border-t border-b border-beatsGreen-300 rounded-l-3xl
                ${searchBarHeight} py-2 px-6 
                focus:outline-none focus:border-beatsGreen-900 focus:ring-1 focus:ring-beatsGreen-900
                text-2xl`}
                placeholder='Search for a term...'
            />

            <button
                className='border-r border-t border-b rounded-r-3xl border-beatsGreen-700
                bg-beatsGreen-700 transition duration-400 ease-in hover:border-beatsGreen-900 hover:bg-beatsGreen-900'
            >
                <ImageContainer
                    vertical=''
                    horizontal=''
                    width={searchIconHeigh}
                    height={searchIconHeigh}
                    localization='/Material Icons/search.svg'
                    alt=''
                    position=''
                    background='block ml-2 mr-auto w-2/4 pt-1 scale-150'
                />
            </button>
        </div>
    );
}
