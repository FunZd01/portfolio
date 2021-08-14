import Layout from '../components/Layout';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {exp} from '../skills';
import {data} from '../experience';
import {est} from '../Estudios';
import Link from 'next/link';

const About = () => (
    <Layout>
        <div>
            <Container className={"mb-2"}>
                <Row className={"bg-info p-2 justify-content-center text-center rounded"}>
                    <Col className={"m-2"} xs={10} md={3}>
                        <Image className={"border border-dark"} src={"profile.jpg"} alt={"foto de perfil"}
                               roundedCircle={true} thumbnail={true}
                               width={"200"}>
                        </Image>
                    </Col>
                    {/*presentacion*/}
                    <Col className={"text-center mt-md-4"} xs={12} md={5}>
                        <h3>BACKEND DEVELOPER</h3>
                        autodidacta, responsable y amante de los desafios que requieran usar el ingenio!<br/>
                        <Link href={"/contactaME"}>
                            <button type={"button"} className={"btn btn-dark rounded-pill p-2 mt-3 mb-2"}
                                    style={{width: '100%'}}>
                                CONTRATAR!
                            </button>
                        </Link>
                    </Col>
                </Row>
                {/*agregando habilidades*/}
                <Row>
                    <Col xs={12} md={3} className={"rounded p-2 border border-info bg-light"}>
                        <h1 className={"text-center"}>Habilidades</h1>
                        <div className="border border-info rounded p-2">
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
                        </div>
                    </Col>
                    {/*agregando experiencia*/}
                    <Col xs={12} md={6} className={"rounded p-2 bg-dark  text-light"}>
                        <h1 className={"text-center"}>Experiencia</h1>
                        {
                            data.map(({cargo, company, duration, year, yearf, desc}, i) => (
                                <div className={"p-2 border border-info rounded m-2"} key={i}>
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
                    {/*agregando estudios*/}
                    <Col xs={12} md={3} className={"rounded p-2 border border-info bg-light"}>
                        <h1 className={"text-center"}>Estudios</h1>
                        {
                            est.map(({duration, place, estudio}, i) => (
                                <div key={i}>
                                    <div className={"blockquote border border-info rounded p-2 mb-2"}>
                                        <h5>{place}
                                            <span className={"text-muted"}> {duration}</span>
                                        </h5>
                                        <footer className={"blockquote-footer"}>
                                            {estudio}
                                        </footer>
                                    </div>
                                </div>
                            ))
                        }
                        <hr/>
                        {/*    agregando intereses */}
                        <div className="rounded border border-info p-2 text-center">
                            <h1>
                                Intereses
                            </h1>
                            <h5 className={"h5"}>
                                <pre>
                                    
                                    lectura   musica <br/>
                                <span className={"h4"}>breaking</span><br/>
                                ajedrez   gastronomia
                                </pre>
                            </h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    </Layout>
)
export default About
