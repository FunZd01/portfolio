import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import {Container,Row,Col} from 'react-bootstrap';

const About = () => (
    <Layout>
        <div className={styles.main}>
            <Container className={"mb-5"}>
                <Row>
                    <Col xs={12} md={4}>
                        columns
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, labore quidem!
                            Accusamus atque deserunt enim laboriosam magni modi, omnis quam repellat reprehenderit rerum
                            tempore ut, vitae voluptate? At, consequuntur cupiditate.</div>
                        <div>Aspernatur atque aut, consectetur, culpa cupiditate dolor ea esse et eum eveniet explicabo
                            facilis fuga libero magnam mollitia nam necessitatibus nulla officia perferendis porro quas
                            quisquam, quod rem tempore voluptas.
                        </div>
                        <div>Amet, consectetur consequatur dolore dolorum est et, eveniet laboriosam maiores obcaecati
                            provident repellendus, reprehenderit tempore tenetur voluptates voluptatibus? Adipisci dicta
                            dolore doloribus expedita fuga harum molestiae qui reprehenderit sit voluptates.
                        </div>
                        <div>Atque, consectetur debitis dolore ea eaque enim explicabo neque non quae qui repellat
                            tempore voluptas? Autem blanditiis deserunt eveniet, illum magnam quidem rerum! At dolores
                            magni possimus temporibus ut, veniam.
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        columns
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
                    <Col xs={12} md={4}>
                        columns
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet at delectus
                            eligendi expedita, illo inventore, itaque iure magnam minus necessitatibus nesciunt omnis
                            possimus provident quis, quo rem soluta voluptatum.</div>
                        <div>Facere, fuga natus? A amet architecto atque consequuntur deleniti eius ex explicabo omnis
                            perspiciatis placeat repellendus suscipit, ullam voluptatem. At cupiditate eos illo maxime
                            molestias nobis quae recusandae sint vero.
                        </div>
                        <div>A alias aliquam animi consectetur culpa eaque enim est illum, laborum nesciunt obcaecati
                            officia praesentium quasi rem totam voluptate voluptatibus. Blanditiis deserunt ea expedita
                            recusandae sequi sint sit suscipit tempore?
                        </div>
                        <div>Corporis earum nam ratione. Consequatur cupiditate debitis eius iste praesentium quam velit
                            vitae voluptatibus. Earum eum molestias placeat praesentium rem! Beatae eaque esse eum illum
                            ipsa molestiae omnis perferendis soluta.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    </Layout>
)

export default About
