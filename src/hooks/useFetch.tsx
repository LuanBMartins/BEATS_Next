import axios from 'axios';
import useSWR from 'swr';
import { urlApi } from './environments';

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

// export const useFetch = (receivedURL: string) => {
//     const baseURL = 'https://swapi.dev/api/';
//     const finalURL = baseURL + receivedURL;

//     const { data, error } = useSWR(finalURL, async (finalURL) => {
//         await timeout(2000);
//         const response = await fetch(finalURL);
//         const data = await response.json();

//         return data;
//     });

//     return { data, error };
//     // const { data } = useSWR('api', async () => {
//     //     await timeout(2000);
//     //     return APIDataMocked;
//     // }) as APIDataType;

//     // return data;
// };

export const useFetch = (receivedURL: string, refreshInterval = 0) => {
    const api = axios.create({
        baseURL: urlApi,
        //Header do tunnel
        headers: { 'Bypass-Tunnel-Reminder': 'ablabluble' },
    });
    // const finalURL = baseURL + receivedURL;

    const { data, error } = useSWR(
        receivedURL,
        async (receivedURL) => {
            const response = await api.get(receivedURL);
            const data = response.data;

            return data;
        },
        {
            refreshInterval: refreshInterval,
        }
    );

    return { data, error };
    // const { data } = useSWR('api', async () => {
    //     await timeout(2000);
    //     return APIDataMocked;
    // }) as APIDataType;

    // return data;
};
