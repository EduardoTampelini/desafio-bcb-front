import Link from "next/link"

interface SideBarItemprops{
    url?: string,
    text: string,
    icons: any,
    className?: string,
    click?: (event:any) => void
}
export default function SideBarItem(props:SideBarItemprops){
    function render(){
        return(
           <div className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 dark:text-gray-200 ${props.className}`}>
           {props.icons}
         <span className="text-xs font-light ">
             {props.text}
         </span></div> 
        )
    }
    return(
       

        <li onClick={props.click} className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800`}>
            {props.url ? (
            <Link  href={props.url}>
             {render()}
            </Link>)
            :(render())}
 
        </li>
    )
}