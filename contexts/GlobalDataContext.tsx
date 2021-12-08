import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface securityInformationItems {
    confidentiality: boolean;
    integrity: boolean;
    availability: boolean;
    authentication: boolean;
    authorization: boolean;
    accountability: boolean;
    'non-repudiation': boolean;
}

export type StringKeys = keyof securityInformationItems & string;

interface loginData {
    status: 'logged-in' | 'logged-off';
    userType: 'visitor' | 'standardUser' | 'council' | 'administrator';
}

type GlobalContextData = {
    loginData: loginData;
    setLoginData: (userInfo: loginData) => void;
    termToSearch: string | string[];
    setTermToSearch: (term: string) => void;
    searchedType: string;
    setSearchedType: (type: string) => void;
    securityInformationAttributes: securityInformationItems;
    toggleSecurityInformationAttributes: (securityInformationAttributes: string) => void;
    isSelectMenuOpen: boolean;
    hideSelectOptions: () => void;
    showSelectOptions: () => void;
    toggleOffAllSecurityInformationAttributes: () => void;
    generateRoute: () => string;
    resetFormData: () => void;
    isTermToSearchEmpty: () => boolean;
};

export const GlobalDataContext = createContext({} as GlobalContextData);

type GlobalDataContextProviderProps = {
    children: ReactNode;
};

export function GlobalDataContextProvider({ children }: GlobalDataContextProviderProps) {
    const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);
    const [termToSearch, setTermToSearch] = useState('');
    const [searchedType, setSearchedType] = useState('tactic');
    const [securityInformationAttributes, setSecurityInformationAttributes] = useState<securityInformationItems>({
        confidentiality: false,
        integrity: false,
        availability: false,
        authentication: false,
        authorization: false,
        accountability: false,
        'non-repudiation': false,
    });
    const [loginData, setLoginData] = useState({ status: 'logged-off', userType: 'visitor' } as loginData);

    // useEffect(() => {
    //     console.log(termToSearch);
    // console.log(searchedType);
    // console.log(securityInformationAttributes);
    // }, [securityInformationAttributes]);
    // }, [searchedType]);
    // }, [termToSearch]);

    function toggleSecurityInformationAttributes(receivedAttribute: string) {
        const newState = {} as securityInformationItems;

        Object.entries(securityInformationAttributes).map(([key, value]) => {
            return receivedAttribute.toLocaleLowerCase() == key
                ? (newState[key as keyof securityInformationItems] = !value)
                : (newState[key as keyof securityInformationItems] = value);
        });

        setSecurityInformationAttributes(newState);
    }

    function toggleOffAllSecurityInformationAttributes() {
        const newState = {} as securityInformationItems;

        Object.keys(securityInformationAttributes).map((key) => {
            return (newState[key as keyof securityInformationItems] = false);
        });
        setSecurityInformationAttributes(newState);
    }

    function showSelectOptions() {
        setIsSelectMenuOpen(true);
    }

    function hideSelectOptions() {
        setIsSelectMenuOpen(false);
    }

    function generateRoute(): string {
        // Any amount of whitespace is replaced by '+'. And if there are spaces in the first or the last portion of the query
        // It is swapped by '' in order not to send a query starting or ending with '+'
        const strategyNameForURL = termToSearch.replaceAll(/\s+/g, '+').replace(/[+]$/g, '').replace(/^[+]/g, '');

        const typeForURL = searchedType;

        // Converting the keys of the attributes marked as true to a string concateneted with '+'
        const secInfoAttributesMarked = Object.entries(securityInformationAttributes).map(([key, value]) => {
            return value == true ? key : ''; // making an array with the keys that were selected
        });
        const secInfoAttributesForURL = secInfoAttributesMarked.reduce((previous, current) => {
            return current != '' ? previous + `${current} ` : previous + '';
        }, '');

        // console.log(secInfoAttributesForURL.length);

        const areAllAttributesFalse = allAttributesFalse();
        const URLtoSearch = `strategies?name=${strategyNameForURL}&type=${typeForURL}${
            areAllAttributesFalse ? '' : `&attr=${secInfoAttributesForURL.replace(/[\s](?!$)/g, '+')}`
        }`;

        // console.log(URLtoSearch);
        return URLtoSearch;
    }

    function resetFormData() {
        setTermToSearch('');
        toggleOffAllSecurityInformationAttributes();
        setSearchedType('tactic');
    }

    function isTermToSearchEmpty() {
        // console.log(termToSearch);
        // console.log(termToSearch.match(/^\s+$/) !== null);
        // console.log(termToSearch == '');
        return !termToSearch || termToSearch === '' || termToSearch.match(/^\s+$/) !== null ? true : false;
        // return false;
    }

    function allAttributesFalse() {
        let result = true;

        Object.values(securityInformationAttributes).forEach((value) => {
            value == true ? (result = false) : null;
        });

        return result;
    }

    return (
        <GlobalDataContext.Provider
            value={{
                isSelectMenuOpen,
                loginData,
                searchedType,
                securityInformationAttributes,
                termToSearch,
                showSelectOptions,
                hideSelectOptions,
                setLoginData,
                setSearchedType,
                toggleSecurityInformationAttributes,
                setTermToSearch,
                toggleOffAllSecurityInformationAttributes,
                generateRoute,
                resetFormData,
                isTermToSearchEmpty,
            }}
        >
            {children}
        </GlobalDataContext.Provider>
    );
}

export const useGlobalData = () => {
    return useContext(GlobalDataContext);
};
