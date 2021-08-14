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
        <div style={{height:'87vh',top:'3.5px'}}>
            <Navbar/>
            {children}
            <footer className={"bg-info text-center text-dark"} style={{height:'2em'}}>
                    &copy; Domingo funez, {year}
            </footer>
        </div>
    </>
)

export default Layout;
