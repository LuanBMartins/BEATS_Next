export const TOKEN_KEY        = "@wf-Token";
export const TOKEN_KEY_USER   = "@wf-User";
export const isAuthenticated  = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken         = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        return localStorage.getItem(TOKEN_KEY);
    }    
}



export const login = (token: string, user: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_KEY_USER, JSON.stringify(user));
};