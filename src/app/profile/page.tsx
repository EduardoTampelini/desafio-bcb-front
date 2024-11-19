"use client"
import Layout from "@/components/template/Layout.tsx";
import useAppData from "@/data/hook/useAppdata";


export default function Home() {
     const{alterTheme} = useAppData()
  return (
     
      <div >
        <Layout title="Perfil" subtitle="Perfil do usuario" >
         <p>Perfil</p>
         
        </Layout>
      </div>
   
  );
}
