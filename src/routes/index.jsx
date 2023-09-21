import { Routes,Route } from "react-router-dom";
import Creatingmeme from "../components/creatingmem";
import Uploadmeme from "../components/creatinguploadedmeme";
import Form12 from "../pages/login";
import Main from "../pages/main";

export default function Routing(){
    return(
    <>
    <Routes>
        <Route  path="/" element={<Form12 />} />
        <Route path="main" element={<Main />}>
            <Route index element={<Creatingmeme />} />
            <Route path="creatememe" element={<Creatingmeme />} />
            <Route path="uploadmeme"  element={<Uploadmeme/>} />
        </Route>
    </Routes>
    </>
    );
}