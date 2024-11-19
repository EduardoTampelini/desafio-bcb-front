import { IconMoon, IconSun } from "@/icons";

interface ButtomAlterThemeProps{
    theme: string | undefined
    alterytheme: (() => void) | undefined
}
export default function ButtomAlterTheme(props: ButtomAlterThemeProps){
    return props.theme === 'dark' ?(
            <div onClick={props.alterytheme} className="cursor-pointer p-1 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 w-14   lg:w-24 h-9 flex items-center content-center ">
                <div className="flex items-center justify-center bg-white text-yellow-600  rounded-full">
                    {IconSun("h-8 w-8")}
                </div>
                <div className=" hidden lg:flex items-center ml-3 text-white ">
                <span className="text-sm">Claro</span>
                </div>
            </div>
    ):(
        <div onClick={props.alterytheme} className="cursor-pointer p-1 rounded-full bg-gradient-to-r from-gray-700 to-gray-950 w-14   lg:w-24 h-9 flex items-center justify-end">
                <div className=" hidden lg:flex items-center mr-2 text-white ">
                    <span className="text-sm">Escuro</span>
                </div>
                <div className="flex items-center justify-center bg-gray-700 text-yellow-200  rounded-full">
                    {IconMoon("h-8 w-8")}
                </div>
                
            </div>
    );
}