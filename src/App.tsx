import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ErrorComponent } from './components/ErrorComponent';
import { Inicio } from './components/pages/Inicio';

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
