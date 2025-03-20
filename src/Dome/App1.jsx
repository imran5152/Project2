import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App1() {
    <>
        <BrowserRouter>
            <Routes >


                 <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact/>}></Route>


            </Routes>
        </BrowserRouter>
    </>
}
export default App1;