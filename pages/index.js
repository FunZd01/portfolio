import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const index = () => (
    <Layout>
        <main className={styles.main}>
            <div className="col-6">
                <h1 className={styles.title}>
                    DOMINGO FUNEZ!
                </h1>
            </div>
        </main>
    </Layout>
)

export default index;
