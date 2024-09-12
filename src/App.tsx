import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ErrorComponent } from './components/ErrorComponent';
import { Inicio } from './components/pages/Inicio';
import { Datos } from './components/pages/Datos';
import { HelpButton } from './components/Help';

import {Pronosticos} from './components/pages/Pronosticos';
import {Costos} from './components/pages/Costos';
import {Escenarios} from './components/pages/Escenarios';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas con la Sidebar */}
        <Route 
          path="/inicio" 
          element={
            <div className="flex">
              <Sidebar />
              <Inicio />
              <HelpButton />
            </div>
          }
        />
        <Route 
          path="/datos" 
          element={
            <div className="flex">
              <Sidebar />
              <Datos />
              <HelpButton />
            </div>
          }
        />
        <Route 
          path="/pronosticos" 
          element={
            <div className="flex">
              <Sidebar />
              <Pronosticos />
              <HelpButton />
            </div>
          }
        />
        <Route 
          path="/costos" 
          element={
            <div className="flex">
              <Sidebar />
              <Costos />
              <HelpButton />
            </div>
          }
        />
        <Route 
          path="/escenarios" 
          element={
            <div className="flex">
              <Sidebar />
              <Escenarios />
              <HelpButton />
            </div>
          }
        />
        {/* Página de error sin Sidebar */}
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
