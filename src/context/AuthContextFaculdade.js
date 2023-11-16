import { useContext } from "react";
import { userContext, createContext } from "react";

const AuthContextFaculdade = createContext();

export function AuthProviderFac ({children,value}){
    return <AuthContextFaculdade.Provider value={value}>{children}</AuthContextFaculdade.Provider>
}

export function useAuthValueFac(){
    return useContext(AuthContextFaculdade);
}