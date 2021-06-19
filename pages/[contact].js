import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
// import 'email-js' from 'email-com';
import {useForm} from 'react-hook-form';

const Contact = () => {

    return (
        <Layout>
            <div className={styles.main}>
                <Container className={"mb-2"}>
                    <Row className={"justify-content-center"}>
                        <Col className={"bg-dark m-2 p-2 rounded text-center"}>
                            <div className={"border border-info"}>
                                <h3>
                                    Contacto
                                </h3>
                                {/*formulario*/}
                                <form className={"p-3 rounded-pill mb-2 text-center"} action="POST" id="contact-form"
                                      style={{height: '65vh'}}>
                                    <input className={"p-3 rounded-pill mb-3 text-center"} type="text"
                                           name={"user_name"}
                                           placeholder={"Nombre"} style={{width: '65vw'}} required={true}/>
                                    <br/>
                                    <input className={"p-3 rounded-pill mb-3 text-center input"} type="email"
                                           name={"user_email"}
                                           placeholder={"Email"} style={{width: '65vw'}} required={true}/>
                                    <br/>
                                    <textarea className={"p-3 rounded mb-3 text-center"} name="message"
                                              placeholder={"mensaje de solicitud"} style={{width: '65vw'}}
                                              rows={5} required={true}></textarea>
                                    <br/>
                                    <button type={"submit"}
                                            className={"btn btn-outline-info border border-dark rounded-pill m-2"}>
                                        Solicitar
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>)
}

export default Contact;
