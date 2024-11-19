import useAuth from "@/data/hook/useAuth"
import Link from "next/link"

interface AvatarUserProps{
    className?: string

}

export default function AvatarUser(props: AvatarUserProps){
    const {user} = useAuth()
    return(
        <Link href="profile">
            <img src={user?.imageUrl ?? '/img/avatar.svg'} alt="Avatar do usuario" className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}/>
        </Link>
    )
}