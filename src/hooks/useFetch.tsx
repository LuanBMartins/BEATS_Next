import useSWR from 'swr';

function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

type strategyType = {
    aliases: string;
    type: string;
    infoSecAttributes: string;
    problem: string;
    context: string;
    solution: string;
    rationale: string;
    consequences: string;
    examples: string;
    relatedPatterns: string;
    references: string;
};

type APIDataType = {
    data: strategyType;
};

const APIDataMocked = {
    aliases: 'test123',
    type: 'test123',
    infoSecAttributes: 'test123',
    problem: 'test123',
    context: 'test123',
    solution: 'test123',
    rationale: 'test123',
    consequences: 'test123',
    examples: 'test123',
    relatedPatterns: 'test123',
    references: 'test123',
};

export const useFetch = (receivedURL: string) => {
    const baseURL = 'https://swapi.dev/api/';
    const finalURL = baseURL + receivedURL;

    const { data, error } = useSWR(finalURL, async (finalURL) => {
        await timeout(2000);
        const response = await fetch(finalURL);
        const data = await response.json();

        return data;
    });

    return { data, error };
    // const { data } = useSWR('api', async () => {
    //     await timeout(2000);
    //     return APIDataMocked;
    // }) as APIDataType;

    // return data;
};
