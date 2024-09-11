import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-100 text-gray-800 flex flex-col">
            {/* Logo */}
            <div className="flex items-center justify-center h-20 my-5">
                <div className="w-50 h-50 flex items-center justify-center">
                    <img src="src\Images\Logo.png" alt="Logo" className="w-48 h-48" draggable="false" />
                </div>
            </div>

            {/* Menú */}
            <nav className="flex-1 px-4 py-8">
                <ul className="space-y-4">
                    {/* Inicio */}
                    <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <span className="text-2xl">🏠</span>
                        <Link to="/inicio" className="text-gray-800 hover:text-gray-400">Inicio</Link>
                    </li>

                    {/* Banco de datos */}
                    <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <span className="text-2xl">💾</span>
                        <Link to="/database" className="text-gray-800 hover:text-gray-400">Banco de datos</Link>
                    </li>

                    {/* Pronósticos */}
                    <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <span className="text-2xl">📊</span>
                        <Link to="/forecast" className="text-gray-800 hover:text-gray-400">Pronósticos</Link>
                    </li>

                    {/* Análisis de costos */}
                    <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <span className="text-2xl">💰</span>
                        <Link to="/cost-analysis" className="text-gray-800 hover:text-gray-400">Análisis de costos</Link>
                    </li>

                    {/* Análisis de escenario */}
                    <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <span className="text-2xl">⚙️</span>
                        <Link to="/scenario-analysis" className="text-gray-800 hover:text-gray-400">Análisis de escenario</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
