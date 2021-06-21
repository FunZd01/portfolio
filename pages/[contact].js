import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import emailjs from 'emailjs-com';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_jys0nea', 'template_5lpp8v7', e.target, 'user_suS7WoO1lcQvmFgl1JtfL')
            .then((result) => {
                alert("enviado con exito");
                console.log(result.status, result.text);
            }, (error) => {
                alert("error al enviar!");
                console.log('ERROR> ' + error);
            });
        e.target.reset();
    }

    return (
        <Layout>
            <div className={styles.main}>
                <div className={"bg-dark p-3 rounded  text-light text-center"}>
                    <div className={"border border-info "}>
                        <h3>
                            Contacto
                        </h3>
                        {/*formulario*/}
                        <form className={"p-3 rounded-pill mb-2 text-center"} onSubmit={sendEmail}>
                            <input className={"p-3 rounded-pill mb-3 text-center text-uppercase"} type="text"
                                   name={"name"} required={true} placeholder={"Nombre"}/>
                            <br/>
                            <input className={"p-3 rounded-pill mb-3 text-center input"} type="email"
                                   name={"user_email"} placeholder={"ej: miEmail@gmail.com"} required={true}/>
                            <br/>
                            <textarea className={"p-3 rounded mb-3 text-center"} name="message"
                                      placeholder={"Mensaje"} rows={5} required={true}>

                            </textarea>
                            <br/>
                            <button type={"submit"}
                                    className={"btn btn-outline-info border border-info rounded-pill m-2"}>
                                Solicitar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
