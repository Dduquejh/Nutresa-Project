import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ErrorComponent } from './components/ErrorComponent';
import { Inicio } from './components/pages/Inicio';
import { LogIn } from './components/pages/LogIn';
import { Datos } from './components/pages/Datos';
import { HelpButton } from './components/Help';

import {Pronosticos} from './components/pages/Pronosticos';
import {Costos} from './components/pages/Costos';
import {Escenarios} from './components/pages/Escenarios';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
              <LogIn/>
          }
        />
        {/* Rutas con la Sidebar y Navbar */}
        <Route 
          path="/inicio" 
          element={
            <div className="flex h-screen">
              <Sidebar />
              <HelpButton />
              <div className="flex flex-col flex-1">
                <Navbar /> 
                <div className="flex-1 p-4">
                  <Inicio />
                </div>
              </div>
            </div>
          }
        />
        <Route 
          path="/datos" 
          element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex flex-col flex-1">
                <Navbar />
                <div className="flex-1 p-4">
                  <Datos />
            </div>
          </div>
          <HelpButton />
        </div>
          }
        />
        <Route 
          path="/pronosticos" 
          element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex flex-col flex-1">
                <Navbar />
                <div className="flex-1 p-4">
                  <Pronosticos />
            </div>
          </div>
          <HelpButton />
        </div>
          }
        />
        <Route 
          path="/costos" 
          element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex flex-col flex-1">
                <Navbar />
                <div className="flex-1 p-4">
                  <Costos />
            </div>
          </div>
          <HelpButton />
        </div>
          }
        />
        <Route 
          path="/escenarios" 
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex flex-col flex-1">
                <Navbar /> 
                <div className="flex-1 p-4">
                  <Escenarios />
                </div>
              </div>
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
