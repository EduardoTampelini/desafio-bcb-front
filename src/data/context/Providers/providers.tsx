"use client"

import { AppProvider } from "../AppContext";
import { AuthProvider } from "../AuthContext";

export const Provider = ({children}: {children: React.ReactNode}) =>{
    return <AuthProvider><AppProvider>{children}</AppProvider></AuthProvider>
}