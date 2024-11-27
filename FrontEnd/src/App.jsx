import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import CriarForm from "./Pages/CriarForm.jsx";
import HomeAdm from "./Pages/HomeAdm.jsx";
import Cadastro from "./Pages/Cadastro.jsx";


const App = () => {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/CriarForm' element={<CriarForm />} />
          <Route path='/HomeAdm' element={<HomeAdm/>} />
          <Route path='/Cadastro' element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;