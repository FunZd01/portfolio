import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';

const Contact = () => (
    <Layout>
        <div className={styles.main}>
            <Container>
                <Row>
                    <Col xs={12} className={"bg-dark m-2 p-2 rounded"}>
                        <div>
                            <InputGroup className="mb-3" v-model={"from_name"}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="name">empleador </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="username@gmail.com"
                                    aria-label="from"
                                    aria-describedby="name"
                                    type={"email"}
                                    required={true}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>solicitud: </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" aria-label="solicitud"/>
                            </InputGroup>

                            <div className="h3 text-end">
                                <button className={"btn btn-outline-danger m-2 p-2 rounded ml-auto"}>
                                    cancelar
                                </button>
                                <button className={"btn btn-outline-info m-2 p-2 rounded"}>
                                    Solicitar!
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Layout>
)

export default Contact;
