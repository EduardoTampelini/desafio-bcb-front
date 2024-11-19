"use client"
import Layout from "@/components/template/Layout.tsx";
import useAppData from "@/data/hook/useAppdata";


export default function Home() {
     const{alterTheme} = useAppData()
  return (
     
      <div >
        <Layout title="Opções" subtitle="parte de opções" >
         <p>Opçõe</p>
         <button onClick={alterTheme}>Alterar</button>
        </Layout>
      </div>
   
  );
}
