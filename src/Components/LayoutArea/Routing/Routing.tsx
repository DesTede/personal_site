import {Route, Routes} from "react-router-dom";
import IndexPage from "../../MainArea/IndexPAge/IndexPage";


function Routing(): JSX.Element{
    
    return (
        <div className="Routing">
            <Routes>
                        {/* Discovery */}
                <Route path={"/discovery"} element={<IndexPage/>} />
                
            </Routes>
        </div>
             
    )
}
export default Routing;

