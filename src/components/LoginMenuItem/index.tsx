import Image from 'next/image';

interface LoginMenuItemsProps {
    optionName: string;
    iconName: string;
}

export function LoginMenuItem({ optionName, iconName }: LoginMenuItemsProps) {
    return (
        <li className='flex items-center mb-2'>
            <Image src={`/Material Icons/${iconName}.svg`} width={18} height={18} alt='' aria-hidden='true' />
            <span className='font-SourceSans text-sm ml-2'>{`${optionName}`}</span>
        </li>
    );
}
