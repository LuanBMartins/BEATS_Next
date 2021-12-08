import { useGlobalData } from '../../../contexts/GlobalDataContext';
import { useRouter } from 'next/router';

type ContainerProps = {
    children?: React.ReactChild | React.ReactChild[];
    containerClasses?: string;
    containerType: string;
    role?: string;
};

export function Container({ children, containerClasses, containerType, role }: ContainerProps) {
    const { generateRoute, isTermToSearchEmpty } = useGlobalData();
    const router = useRouter();

    function navigateOnSearchClicked(e: any) {
        e.preventDefault();

        // console.log('alo porra');
        // console.log(isTermToSearchEmpty());
        if (isTermToSearchEmpty() == false) {
            const URLtoSearch = generateRoute();

            // console.log(URLtoSearch);
            router.push(URLtoSearch);
        }
    }

    return (
        <>
            {(containerType == 'main' && <main className={`flex flex-col ${containerClasses}`}>{children}</main>) ||
                (containerType == 'section' && (
                    <section className={`flex flex-col items-center justify-around ${containerClasses}`}>
                        {children}
                    </section>
                )) ||
                (containerType == 'form' && (
                    <form
                        role={role}
                        className={`flex flex-col items-center justify-around ${containerClasses}`}
                        onSubmit={navigateOnSearchClicked}
                    >
                        {children}
                    </form>
                ))}
        </>
    );
}
