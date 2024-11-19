"use client"
interface AutthInputProps{
    label: string
    value: any
    requireValue?: boolean
    notRender?: boolean
    type?: "text" | "email" | "password"
    valueChange: (newValue: any) => void
}

export default function AutthInput(props:AutthInputProps){
    return props.notRender? null :(
        <div className="flex flex-col mt-4">
            <label >{props.label}</label>
            <input type={props.type ?? "text"} required={props.requireValue} value={props.value} onChange={e => props.valueChange?.(e.target.value)} className="py-4 px-2 rounded-lg bg-gray-200 mt-2 focus:bg-white border focus:border-blue-400 outline-none"/>
        </div>
    )
}