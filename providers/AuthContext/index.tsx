import {createContext, useContext, useState, ReactNode} from "react"


interface ChildrenProps {
    children: ReactNode
}

interface LoginProps {
    email: string
    password: string
}

interface ContextData {
    loginStudent: (data: LoginProps) => void
}


const AuthContext = createContext<ContextData>({} as ContextData)


export const AuthProvider = ({children}: ChildrenProps) => {

    const loginStudent = (data: LoginProps) => {
        console.log(data)
    }

    return (
        <AuthContext.Provider value={{loginStudent}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)