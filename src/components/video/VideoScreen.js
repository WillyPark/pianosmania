import { useNavigate, useParams, Navigate } from "react-router-dom";
import { data } from "../../data/data";

export const VideoScreen = () => {

    let navigate = useNavigate();

    const { nombreURL } = useParams();
    const video = data.find( dato => ( dato.nombreURL === nombreURL ));

    if ( !video ) {
        return <Navigate to="/404-page" />;
    }

    const handleBack = () => {
        navigate("/");
    }

    const loader = () => {
        document.querySelector(".loading").remove();
    }

    return (
        <section className="contenedor animacionFade mb-3" >
            <div className="video__titulo">
                <button onClick={ handleBack }>Volver</button>
                <h2>{ video.nombre }</h2>
            </div>

            <div className="video__contenedor">
                <div className="loading" />

                <iframe
                    onLoad={ loader }
                    title={ video.nombreURL }
                    src={ video.url }
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    referrerPolicy="strict-origin"
                    allow="autoplay"
                />
            </div>
        </section>
    )
}
