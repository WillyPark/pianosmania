import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";

import { Outlet } from 'react-router-dom';

export const PublicRouter = () => {
    return (
       <div className="animacionFade"> 
            <Header />

                <div className="animacionFade">
                    <Outlet />
                </div>

            <Footer />
        </div>
    )
}
