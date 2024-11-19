'use client';

import { IconLogout, IconPerson, Iconhome, Iconsettings } from "@/icons"
import SideBarItem from "./SideBarItem"
import Logo from "./Logo"
import useAuth from "@/data/hook/useAuth";
export default function SideBar(){
    const {logout} = useAuth()
    return(
        <aside className="flex flex-col bg-gray-200 text-gray-900 dark:bg-gray-900 ">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-400 h-20 w-20">
                <Logo></Logo>
            </div>
            <ul className="flex-grow">
                <SideBarItem url="/" text="Inicio" icons={Iconhome}/>
                <SideBarItem url="/settings" text="settings" icons={Iconsettings}/>
                <SideBarItem url="/person" text="person" icons={IconPerson}/>    
            </ul>
            <ul>
                <SideBarItem  text="Sair" icons={IconLogout} click={logout} className="text-red-600 dark:text-red-600 hover:bg-red-500 hover:text-white dark:hover:text-white"/>
            </ul>
        </aside>
    )
}