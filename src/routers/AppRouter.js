import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from '../components/ui/Footer';
import { Header } from '../components/ui/Header';
import { VideosCarrousel } from '../components/video/VideosCarrousel';
import { VideoScreen } from '../components/video/VideoScreen';

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
        </>
    )
}
