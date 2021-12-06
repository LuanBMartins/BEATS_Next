import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface securityInformationItems {
    confidentiality: boolean;
    integrity: boolean;
    availability: boolean;
    authentication: boolean;
    authorization: boolean;
    accountability: boolean;
    'non-repudiation': boolean;
}

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

    useEffect(() => {
        // console.log(termToSearch);
        // console.log(searchedType);
        console.log(securityInformationAttributes);
    }, [securityInformationAttributes]);

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
            }}
        >
            {children}
        </GlobalDataContext.Provider>
    );
}

export const useGlobalData = () => {
    return useContext(GlobalDataContext);
};
