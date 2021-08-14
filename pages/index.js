import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

const index = () => (
    <Layout>
        {/*<div className="bg">*/}
            <main style={{height:'85vh'}}>
                <div className="col-6">
                    <h1 className={styles.title}>
                        <Link href="/contactaME">
                            <a>DOMINGO FUNEZ!</a>
                        </Link>
                    </h1>
                </div>
            </main>
        {/*</div>*/}
    </Layout>
)

export default index;
