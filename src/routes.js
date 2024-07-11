import Base from "./pages/Base/Base"
import NewVideo from "./pages/NewVideo/NewVideo";
import NotFound from "./pages/NotFound/NotFound"

const { default: Home } = require("./pages/Home/Home");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/NewVideo" element={<NewVideo/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes