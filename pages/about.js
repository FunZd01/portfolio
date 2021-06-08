import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import {exp} from '../skills'

console.log(exp);

const About = () => (
    <Layout>
        <div className={styles.main}>
            <Container className={"mb-5"}>
                <Row>
                    <Col xs={12} md={3}>
                        <h1>Habilidades</h1>

                        {
                            exp.map(({skill, percentage}, i) => (
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                                <div className="progress">
                                    <div className={"progress-bar-striped progress-bar-animated bg-info"} role={"progressbar"} style={{width: `${percentage}%`}}>
                                    </div>
                                </div>
                            </div>
                        ))
                        }

                    </Col>
                    <Col xs={12} md={6}>
                        experience
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur debitis est
                            impedit iure magnam numquam reprehenderit ullam. Architecto deleniti doloribus enim illum in
                            numquam omnis quasi qui sapiente sunt.</div>
                        <div>Accusamus animi at commodi cupiditate ea earum, exercitationem facere, magnam nihil nobis
                            officia praesentium quod, ut. Animi corporis culpa dolorum et ipsum magnam maxime, mollitia
                            necessitatibus provident quia quos sequi.
                        </div>
                        <div>Beatae culpa, dolor excepturi ipsum labore laudantium nisi odio perspiciatis quaerat rerum
                            sed ut! Ad commodi corporis doloribus, facilis laborum modi quae quaerat quos tenetur
                            voluptatem? Doloribus facere harum rerum.
                        </div>
                        <div>Corporis facere iste necessitatibus possimus, sapiente veritatis. Adipisci cum ea, eaque
                            enim est et expedita harum illum inventore minima modi neque perferendis perspiciatis quae
                            quas qui ut veniam, voluptatem, voluptatum.
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        intereses

                    </Col>
                </Row>
            </Container>
        </div>

    </Layout>
)

export default About
