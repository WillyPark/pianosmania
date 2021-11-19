import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { useNavigate } from 'react-router-dom';

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import { data } from '../../data/data';

SwiperCore.use([EffectCoverflow, Pagination]);

export const VideosCarrousel = () => {

    let navigate = useNavigate();

    const handleClick = ( nombre ) => {
        navigate( "/" + nombre );
    }

    return (
        <main className="seccion animacionFade">
            <div className="contenedor">
                <h2 className="carrousel__titulo">Seleccione de nuestra exclusiva colección el vídeo de su mayor Agrado</h2>
            </div>

            <Swiper
                effect={ "coverflow" }
                grabCursor={ true }
                centeredSlides={ true }
                slidesPerView={ "2" }
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                loop={ true }
                pagination={ true }
                className="mySwiper"
            >
                {
                    data.map( dato => (
                        <SwiperSlide key={ dato.id }>
                            <picture onClick={ () => { handleClick( dato.nombreURL ) } }>
                                <source srcSet={`./assets/piano${ dato.imagen }.webp`} type="image/webp" />
                                <img loading="lazy" width="200" height="300" src={`./assets/piano${ dato.imagen }.jpg`} alt="Imagen Vídeo Piano" />
                            </picture>
                            
                            <p className="swiper__titulo">{ dato.nombre }</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </main>
    )
}
