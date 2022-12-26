import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import AreaLogada from "../componentes/AreaLogada"
import Pedidos from "../componentes/AreaLogada/Pedidos"


const Rotas = () => {
  return (<Routes>
    <Route path='/' element={<PaginaBase />}>
      <Route path='/' element={<Home />} />
      <Route path="/area-logada" element={<AreaLogada />}>
        <Route path="pedidos" element={<Pedidos />}/>
      </Route>
      </Route>
  </Routes>)
}

export default Rotas