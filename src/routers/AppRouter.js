import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page404 } from '../components/page404/Page404';
import { VideosCarrousel } from '../components/video/VideosCarrousel';
import { VideoScreen } from '../components/video/VideoScreen';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    return (
        <div className="animacionFade">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <PublicRouter /> } >
                        <Route path="" element={ <VideosCarrousel /> } />
                        <Route path=":nombreURL" element={ <VideoScreen /> } />
                    </Route>

                    <Route path="/404-page" element={ <Page404 /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
