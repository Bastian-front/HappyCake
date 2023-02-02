import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home.jsx"
import Contacto from "./Componentes/Contacto.jsx"
import Header from "./Componentes/Header.jsx";
import NotFound from "./Componentes/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="*" element={<NotFound/>}/>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
