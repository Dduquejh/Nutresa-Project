import GlobeGraphic from "../../Images/PlanetLogin.png";
import EIALogo from "../../Images/Logo.png";
import CriskAi from "../../Images/Logo2.png";
import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <div className="flex h-screen items-center">
      {/* Contenedor de la parte izquierda: Formulario de inicio de sesión */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <img src={EIALogo} alt="EIA Logo" className="mb-8 w-32" />
        <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
        
        <div className="flex gap-4 mb-6">
          <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="w-5 h-5 mr-2" />
            LinkedIn
          </button>
        </div>

        <div className="flex items-center mb-6 w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Link
          to = "/inicio">
          <button className="bg-teal-800 text-white px-4 py-2 rounded-md w-full hover:bg-teal-900 transition">
            Inicia sesión
          </button>
        </Link>
      </div>
      
      {/* Contenedor de la parte derecha: Imagen */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <img src={GlobeGraphic} alt="Planet Graphic" className="w-4/5 mb-12" />
        <img src={CriskAi} alt="CriskAI Logo" className="w-1/3" />
      </div>
    </div>
  );
};
