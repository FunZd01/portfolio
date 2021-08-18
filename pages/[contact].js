import Layout from '../components/Layout';
import emailjs from 'emailjs-com';

const Contact = () => {
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
            <div className={"container"} style={{ height: '85vh' }}>
                <div className={"row justify-content-center"}>
                    <div className={"col-md-6 bg-dark p-3 mt-5 rounded text-light text-center"}
                        style={{ boxShadow: "-1px 3px 4px 5px darkorchid" }}>
                        <div className={"border border-info"}>
                            <h3>
                                Contacto
                            </h3>
                            {/*formulario*/}
                            <form className={"p-3 rounded-pill mb-2 text-center"} onSubmit={sendEmail}>
                                <input className={"p-2 rounded-pill mb-3 text-center text-uppercase form-control"} type="text"
                                    name={"name"} required={true} placeholder={"Nombre"} />
                                <input className={"p-2 rounded-pill mb-3 text-center form-control"} type="email"
                                    name={"user_email"} placeholder={"ej: miEmail@gmail.com"} required={true} />
                                <textarea className={"p-2 rounded mb-3 text-center form-control"} name="message"
                                    placeholder={"Mensaje"} rows={5} required={true}>
                                </textarea>
                                <button type={"submit"}
                                    className={"btn btn-outline-info border border-info rounded-pill m-2"}>
                                    Solicitar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Contact;
