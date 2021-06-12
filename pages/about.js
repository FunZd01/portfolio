import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {exp} from '../skills';

const About = () => (
    <Layout>
        <div className={styles.main}>
            <Container className={"mb-2"}>
                <Row className={"bg-info p-2 justify-content-center rounded"}>
                    <Col className={""} xs={10} md={3}>
                        <Image src={"profile.jpg"} alt={"foto de perfil"} roundedCircle={true} thumbnail={true}
                               width={"200"} >
                        </Image>
                    </Col>
                    <Col xs={12} md={5}>
                        <h4>
                            Domingo Funez,<span className={"lead"}> backend developer</span>
                        </h4>
                    </Col>
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
