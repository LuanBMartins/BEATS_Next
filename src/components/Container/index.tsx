type ContainerProps = {
    children?: React.ReactChild | React.ReactChild[];
    containerClasses?: string;
    containerType: string;
};

export function Container({ children, containerClasses, containerType }: ContainerProps) {
    const isContainerMainDiv = containerType == 'main' ? true : false;

    return (
        <>
            {isContainerMainDiv ? (
                <main className={`flex flex-col items-center justify-around ${containerClasses}`}>{children}</main>
            ) : (
                <section className={`flex flex-col items-center justify-around ${containerClasses}`}>
                    {children}
                </section>
            )}
        </>
    );
}
