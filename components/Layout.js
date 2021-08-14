import Navbar from './Navbar';
import Head from "next/head";

//obteniendo anio
let year = new Date().getUTCFullYear();

const Layout = ({children}) => (
    <>
        <Head>
            <title>portfolio</title>
            <meta name="description" content="Domingo Funez: backend developer (programador),
             autodidacta, responsable y amante de los desafios que requieran usar el ingenio!"/>
        </Head>
        <div style={{height:'90vh'}}>
            <Navbar/>
            {children}
            <footer className={"bg-info text-center"} style={{height:'5vh',color:'#000'}}>
                   <p> &copy; Domingo funez, {year}</p>
            </footer>
        </div>
    </>
)

export default Layout;
