"use client"

import SideBar from "./SideBar"
import Header from "./Header"
import Content from "./Content"
import useAppData from "@/data/hook/useAppdata"
import ForceAuth from "../Auth/ForceAuth"
interface LayoutProps{
    title:string,
    subtitle:string,
    children?:any
}
export default function Layout(props: LayoutProps){
    const {theme, alterTheme} = useAppData()
    return(
        <ForceAuth>
        <div className={`${theme} flex h-screen w-screen`}>
            <SideBar></SideBar>
            <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
            <Header title={props.title} subtitle={props.subtitle}></Header>
            <Content children={props.children}></Content>
            </div>
        </div>
        </ForceAuth>
    )
}