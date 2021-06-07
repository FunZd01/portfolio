import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

const index = () => (
    <Layout>
        <main className={styles.main}>
            <div className="col-6">
                <h1 className={styles.title}>
                    <Link href="#">
                        <a>DOMINGO FUNEZ!</a>
                    </Link>

                </h1>
            </div>
        </main>
    </Layout>
)

export default index;
