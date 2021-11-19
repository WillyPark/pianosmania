export const Header = () => {
    return (
        <header className="header--site animacionFade">
            <div className="contenedor header__menu">
                <div className="header__menu--logo">
                    <h1><span>Pianos</span>Mania</h1>
                    <p>La mejor página de vídeos <span>pianísticos</span></p>
                </div>

                <div className="header__menuRedes--contenedor">
                    <ul className="header__menuRedes">
                        <li>
                            <a rel="noreferrer" href="https://www.facebook.com" target="_blank">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.instagram.com" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://web.whatsapp.com/" target="_blank">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
