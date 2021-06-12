import Navbar from './Navbar';
import Head from "next/head";
import styles from '../styles/Home.module.css'

//obteniendo anio
let year = new Date().getUTCFullYear();

const Layout = ({children}) => (
    <>
        <Head>
            <title>portfolio</title>
            <meta name="description" content="Domingo Funez: backend developer (programador),
             autodidacta, responsable y amante de los desafios que requieran usar el ingenio!"/>
        </Head>
        <div className={styles.container}>
            <Navbar/>
            {children}
            <footer className={styles.footer}>
                    &copy; Domingo funez, {year}
            </footer>
        </div>
    </>
)

export default Layout;
