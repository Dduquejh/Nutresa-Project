import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ErrorComponent } from './components/ErrorComponent';
import { Inicio } from './components/pages/Inicio';
import { LogIn } from './components/pages/LogIn';
import { Datos } from './components/pages/Datos';
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
