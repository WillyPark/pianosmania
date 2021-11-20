import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VideosCarrousel } from '../components/video/VideosCarrousel';
import { VideoScreen } from '../components/video/VideoScreen';
import { PublicRouter } from './PublicRouter';
import { Page404 } from '../components/page404/Page404';

export const AppRouter = () => {
    return (
        <div>
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
