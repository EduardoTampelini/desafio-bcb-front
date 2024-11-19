"use client"

import Image from "next/image"
import Loading from "../../../public/img/loading.gif"
import useAuth from "@/data/hook/useAuth"
import { useRouter } from 'next/navigation'
export default function ForceAuth (props){
    const router = useRouter()
    const{ user, load} = useAuth()
    function renderContent(){
        return(
            <> 
            {props.children}
            </>
        )
    }
    function renderLoad(){
        return(
            <div className=" flex justify-center items-center h-screen">
                <Image src= {Loading} alt="loading"></Image>
            </div>
        )
    }
    
    if(!load && user?.email){
        return renderContent()
    }else if(load){
        return renderLoad()
    }else{
        router.push("/autenticator")
        return null
    }
}