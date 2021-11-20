import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VideosCarrousel } from '../components/video/VideosCarrousel';
import { VideoScreen } from '../components/video/VideoScreen';
// import { PublicRouter } from './PublicRouter';
// import { Page404 } from '../components/page404/Page404';

import { Footer } from '../components/ui/Footer';
import { Header } from '../components/ui/Header';

export const AppRouter = () => {
    return (
        <>
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <VideosCarrousel /> } />
                    <Route path="/:nombreURL" element={ <VideoScreen /> } />
                </Routes>
            </BrowserRouter>
            
            <Footer />


                    {/* <Route path="/" element={ <PublicRouter /> } >
                        <Route path="" element={ <VideosCarrousel /> } />
                        <Route path=":nombreURL" element={ <VideoScreen /> } />
                    </Route>

                    <Route path="/404-page" element={ <Page404 /> } /> */}
        </>
    )
}
