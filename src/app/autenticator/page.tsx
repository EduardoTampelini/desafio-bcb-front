"use client";
import AutthInput from "@/components/Auth/AuthInput";
import useAuth from "@/data/hook/useAuth";
import { IconGoogle, IconWarning } from "@/icons";
import { useState } from "react";

export default function Autenticator(){
    const { register, login, loginGoogle} = useAuth()
    const [mode, setMode] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState(null)

    function showErro(msg, time = 5){
        setErro(msg)
        setTimeout(() => setErro(null), time*1000)
    }

     async function submit(){
        try{
            if(mode ==='login'){
                await login(email, password)
            }else{
                await register(email, password)
            }
        }catch(ex){
            var msg = JSON.stringify(ex.message)
            showErro(msg ?? "Erro desconhecido")
            
        }
        
    }

    return(
        <div className="flex  h-screen items-center justify-center ">
            <div className="hidden md:block  w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/random" alt="Imagem da tela de autenticacao" className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-xl font-bold mb-5">{mode === 'login' ? 'Entre com sua conta': 'Cadastra-se na plataforma'}</h1>
            {erro ? (<div className="bg-red-500 text-white py-3 px-5 my-2 flex items-center gap-3 border-red-800 rounded-lg">
              {IconWarning("h-8 w-8")}
                <span>{erro}</span>
            </div>): false}
            
            <AutthInput label="Email" value={email} valueChange={setEmail} type="email" requireValue/>
            <AutthInput label="Senha" value={password} valueChange={setPassword} type="password" requireValue/>
            
            <button onClick={submit} className=" w-full bg-indigo-300 hover:bg-indigo-500 text-white rounded-lg px-3 py-5 mt-4">
            {mode === 'login' ? 'Entrar': 'CadastCadastrar'}
            </button>
           <hr className="my-6 border-gray-600 w-full"/>
           <button onClick={loginGoogle} className=" w-full bg-gray-300 hover:bg-gray-500 text-white rounded-lg px-3 py-5 flex iten-center justify-center gap-2">
           {IconGoogle()}Entrar com o google
            </button>

            {mode === 'login'? (
                <p className="mt-3">
                    Novo por aqui ?
                    <a onClick={()=> setMode('cadastro')} className="text-blue-600 hover:text-blue-300 outline-none cursor-pointer"> Cria uma conta gratuitamente</a>
                </p>
            ):(
                <p className="mt-3">
                    Já possui uma conta?
                    <a onClick={() => setMode("login")} className="text-blue-600 hover:text-blue-300 outline-none cursor-pointer"> Entre com suas credenciais</a>
                </p>
            )}
            </div>
        </div>
    )
}