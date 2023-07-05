import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import {createContext, ReactNode, useMemo, useEffect, useState } from "react"
import { auth } from "src/firebase";
import { useAuth } from "src/hooks/useAuth";


interface AuthContextState {
    user: User | null;
    error: string;
    isLoading: boolean;
    signUp: (email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextState>({
    user: null,
    error: '',
    isLoading: false,
    signUp: async () => {},
    signIn: async () => {},
    logOut: async () => {},
})

const AuthContextProvider = ({children} : {children: ReactNode}) => {

    const [initialLoader, setIntialLoader] = useState<boolean>(true)

    const {isLoading, error, user, signUp, signIn, logOut, setUser, setIsLoading} = useAuth()

    const router = useRouter()

    const value = useMemo(
        () => ({
            user, isLoading, error, signUp, signIn, logOut
        }),
        
        [user, isLoading, error]
    )

    useEffect(() => onAuthStateChanged(auth, user => {
        if(user){
            setIsLoading(false)
            setUser(user)
        } else {
            setUser(null)
            setIsLoading(true)
            router.push('/auth')
        }
        setIsLoading(false)
        setIntialLoader(false)
    }), [])
    

    return <AuthContext.Provider value={value}>{!initialLoader ? children : 'Loading...'}</AuthContext.Provider>
}

export default AuthContextProvider