import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '@/model/Usuario'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
interface AuthContextProps{
    user?: Usuario
    load?: boolean
    login?: (email?:string, password?:string) => Promise<void>
    register?: (email?:string, password?:string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>


}

const AuthContext = createContext<AuthContextProps>({})
async function userNormalize(userFirebase: firebase.User): Promise<Usuario>{
    const token = await userFirebase.getIdToken()
    return{
        uid: userFirebase.uid,
        email: userFirebase.email,
        name: userFirebase.displayName,
        token,
        provider: userFirebase.providerData[0]?.providerId,
        imageUrl: userFirebase.photoURL
    }
}
function gerenceCookie(logged:boolean){
    if(logged){
        Cookies.set('style-craft-erp-auth', logged,{
            expires: 7
        })
    }else{
        Cookies.remove('style-craft-erp-auth')
    }
}
export function AuthProvider(props){
    const [load, setLoad] = useState(true)
    const [user, setUser] = useState<Usuario>()
    const router = useRouter()
    async function configSession(userFirebase){
        if(userFirebase?.email){
            const user = await userNormalize(userFirebase)
            setUser(user)
            gerenceCookie(true)
            setLoad(false)
            return user.email
        }else{
            setUser(undefined)
            gerenceCookie(false)
            setLoad(false)
            return false
        }
    }
    async function login(email, password){
        try{
            setLoad(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email,password)
            await configSession(resp.user) 
           router.push('/')
        
        }finally{
            setLoad(false)
        }
        
    }
    async function register(email, password){
        try{
            setLoad(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email,password)
           await configSession(resp.user) 
           router.push('/')
        
        }finally{
            setLoad(false)
        }
        
    }
    async function loginGoogle(){
        try{
            setLoad(true)
            const resp = await firebase.auth().signInWithPopup( new firebase.auth.GoogleAuthProvider())
            await configSession(resp.user) 
           router.push('/')
        
        }finally{
            setLoad(false)
        }
        
    }
    async function logout(){
        try{
            setLoad(true)
            await firebase.auth().signOut()
            await configSession(null)
        }finally{
            setLoad(false)
        }
        
        
    }
    useEffect(()=>{
        if(Cookies.get('style-craft-erp-auth')){
            const cancel = firebase.auth().onIdTokenChanged(configSession)
            return () => cancel()
        }else if(user?.email == undefined){
            setLoad(false)
        }else{
            setLoad(false)
        }
        
    },[])
    return(
        <AuthContext.Provider value ={{user,load,login,register ,loginGoogle, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext