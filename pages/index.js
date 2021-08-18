import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'react-bootstrap/Image';

const index = () => (
    <Layout>
        <div className={"container"}>
            <div className={"row justify-content-center"} style={{ height: '85vh' }}>
                <div className="col-12 col-md-10 bg-light p-2" style={{ boxShadow: "4px 0px 10px" }}>
                    <div className={"border border-info rounded h3 p-3 b-3"}>
                        <h1 className={"display-2"}>
                            Domingo funez
                        </h1>
                    </div>
                    <iframe name="easyXDM_default2387_provider"
                        id="game-player" width="70%" height="70%"
                        allowFullScreen="" frameBorder="0" scrolling="no"
                        allow="autoplay; fullscreen; camera"
                        src="https://wayou.github.io/t-rex-runner/?mp_api_as3_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fas3%2Flatest.swf&amp;mp_api_as3_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-as%2F&amp;mp_api_id=3446&amp;mp_api_js_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fjs%2Flatest.js&amp;mp_api_js_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-js%2F&amp;mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&amp;mp_embed=0&amp;mp_game_id=223278&amp;mp_game_uid=chrome-dino&amp;mp_game_url=https%3A%2F%2Fwww.minijuegos.com%2Fembed%2Fchrome-dino&amp;mp_int=1&amp;mp_locale=es_ES&amp;mp_player_type=IFRAME&amp;mp_site_https_url=https%3A%2F%2Fwww.minijuegos.com%2F&amp;mp_site_name=minijuegos.com&amp;mp_site_url=https%3A%2F%2Fwww.minijuegos.com%2F&amp;mp_timezone=America%2FManagua&amp;mp_view_type=&amp;mini_signature=73b9742d19f0114c053fdf8496614e56&amp;xdm_e=https%3A%2F%2Fwww.minijuegos.com&amp;xdm_c=default2387&amp;xdm_p=1"></iframe>
                </div>
            </div>
        </div>
    </Layout>
)

export default index;
