import {ReactNode} from "react"

import {AuthProvider} from "./AuthContext/index"


interface ChildrenProps {
    children: ReactNode
}


export const Provider = ({children}: ChildrenProps) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
