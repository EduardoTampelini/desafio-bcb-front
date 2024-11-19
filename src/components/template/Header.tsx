import Title from "./Title.tsx"
import ButtomAlterTheme from "./ButtonAlterTheme.tsx"
import useAppData from "@/data/hook/useAppdata.ts"
import AvatarUser from "./AvatarUser.tsx"
interface HeaderProps{
    title:string,
    subtitle: string
}
export default function Header (props: HeaderProps){
    const {theme, alterTheme} = useAppData()
    return(
        <div className="flex">
            <Title title ={props.title} subtitle= {props.subtitle} ></Title>
            <div className="flex flex-grow justify-end items-center">
                <ButtomAlterTheme theme={theme} alterytheme={alterTheme}></ButtomAlterTheme>
                <AvatarUser className="ml-3"></AvatarUser>
            </div>
        </div>
    )
}