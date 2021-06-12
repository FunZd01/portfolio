import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {exp} from '../skills';
import {data} from '../experience';

const About = () => (
    <Layout>
        <div className={styles.main}>
            <Container className={"mb-2"}>
                <Row className={"bg-info p-2 justify-content-center rounded"}>
                    <Col className={"mb-2"} xs={10} md={3}>
                        <Image className={"border border-dark"} src={"profile.jpg"} alt={"foto de perfil"}
                               roundedCircle={true} thumbnail={true}
                               width={"200"}>
                        </Image>
                    </Col>
                    <Col className={"text-center"} xs={12} md={5}>
                        <h3>BACKEND DEVELOPER</h3>
                        autodidacta, responsable y amante de los desafios que requieran usar el ingenio!<br/>
                        <button type={"button"} className={"btn btn-dark rounded-pill p-2 mt-5"}
                                style={{width: '100%'}}>
                            CONTRATAR!
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} className={"rounded p-2 border border-info bg-light"}>
                        <h1 className={"text-center"}>Habilidades</h1>
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
                    <Col xs={12} md={6} className={"rounded p-2 bg-dark  text-light"}>
                        <h1 className={"text-center"}>Experiencia</h1>
                        {
                            data.map(({cargo, company, duration, year, yearf, desc}, i) => (
                                <div className={"py-3 border border-info rounded m-2"} key={i}>
                                    <div className={"blockquote"}>
                                        <h5>{cargo}
                                            <span className={"text-muted"}> at {company}</span>
                                        </h5>
                                        <footer className={"blockquote-footer"}>
                                            {duration}, ({year} - {yearf})
                                        </footer>
                                    </div>
                                    <h6>
                                        {desc}
                                    </h6>
                                </div>
                            ))
                        }
                    </Col>
                    <Col xs={12} md={3} className={"rounded p-2 border border-info bg-light"}>
                        <h1 className={"text-center"}>Estudios</h1>

                    </Col>
                </Row>
            </Container>
        </div>

    </Layout>
)
export default About
