import Image from 'next/image';

type ContainerProps = {
    vertical: string;
    horizontal: string;
    localization: string;
    height: number;
    width: number;
    alt: string;
    position: string;
    background?: string;
};

export function ImageContainer({
    vertical,
    horizontal,
    localization,
    height,
    width,
    alt,
    position,
    background,
}: ContainerProps) {
    return (
        <div className={`${position} ${vertical} ${horizontal} ${background || ''}`}>
            <Image src={`${localization}`} width={height} height={width} alt={alt} aria-hidden='true' />
        </div>
    );
}
