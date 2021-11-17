type ContainerProps = {
    children?: React.ReactChild | React.ReactChild[];
    containerClasses?: string;
};

export function Container({ children, containerClasses }: ContainerProps) {
    return (
        <main
            className={`container-height
            flex flex-col items-center justify-around
            ${containerClasses}`}
        >
            {children}
        </main>
    );
}
