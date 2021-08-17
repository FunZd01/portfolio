import Layout from '../components/Layout'
import Link from 'next/link'

const index = () => (
    <Layout>
            <main style={{height:'85vh'}}>
                <div className="col-6">
                    <h1>
                        <Link href="/contactaME">
                            <a>DOMINGO FUNEZ!</a>
                        </Link>
                    </h1>
                </div>
            </main>
    </Layout>
)

export default index;
