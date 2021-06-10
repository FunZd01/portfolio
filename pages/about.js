import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import {exp} from '../skills'

const About = () => (
    <Layout>
        <div className={styles.main}>
            <Container className={"mb-2"}>
                <Row>
                </Row>
                <Row>
                    <Col xs={12} md={3} className={"border-bottom border-top border-info"}>
                        <h1>Habilidades</h1>

                        {
                            exp.map(({skill, percentage}, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className={"progress-bar-striped progress-bar-animated bg-info"}
                                             role={"progressbar"} style={{width: `${percentage}%`}}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Col>
                    <Col xs={12} md={6} className={"border-bottom border-top border-info"}>
                        <h1>Experiencia</h1>

                    </Col>
                    <Col xs={12} md={3} className={"border-bottom border-top border-info"}>
                        <h1>intereses</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet debitis dolore earum
                            error excepturi impedit magnam odit suscipit tenetur totam vitae, voluptate voluptatibus?
                            Esse iste quas rem repellat voluptas.</div>
                        <div>Alias, aspernatur aut dicta doloremque nesciunt odio omnis quas sed similique ut. A ad
                            consequuntur, culpa cumque doloremque enim eos facere ipsam itaque nisi nostrum officia quam
                            temporibus unde velit?
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    </Layout>
)
export default About
