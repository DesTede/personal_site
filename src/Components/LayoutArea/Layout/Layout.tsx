import {BrowserRouter} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Routing from "../Routing/Routing";
import Footer from "../Footer/Footer";

function Layout(): JSX.Element{
    return (
        <div className="Layout">
            <BrowserRouter>
                <Navbar/>
                <main>
                    <Routing/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </BrowserRouter>
        </div>
    );
    
    
}

export default Layout