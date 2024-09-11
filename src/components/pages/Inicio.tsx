import { useNavigate } from 'react-router-dom';

interface Module {
    title: string;
    description: string;
    bgColor: string;
    icon: string;
    url: string;
}

export const modules: Module[] = [
    {
        title: 'Banco de datos',
        description: 'Visualiza aquí los datos que tienes cargados en la plataforma.',
        bgColor: 'bg-cyan-100',
        icon: '🗄️',
        url: '/datos'
    },
    {
        title: 'Pronósticos',
        description: 'Descripción. Lorem ipsum dolor sit amet.',
        bgColor: 'bg-green-100',
        icon: '📊',
        url: '/pronosticos'
    },
    {
        title: 'Análisis de costos',
        description: 'Descripción. Lorem ipsum dolor sit amet.',
        bgColor: 'bg-purple-100',
        icon: '💰',
        url: '/costos'
    },
    {
        title: 'Análisis de escenarios',
        description: 'Descripción. Lorem ipsum dolor sit amet.',
        bgColor: 'bg-pink-100',
        icon: '📋',
        url: '/escenarios'
    },
];

export const Inicio: React.FC = () => {
    const navigate = useNavigate();  // Usa useNavigate para redirigir

    const handleModuleClick = (module: Module) => {
        navigate(module.url);  // Redirige a la URL del módulo
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <img src="src/Images/Logo2.png" alt="logo" className="w-40 mx-auto mb-8" draggable="false" />
            <h4 className="text-2xl font-bold mb-8">Visualización de sus módulos</h4>
            <p className="mb-8">
                En esta sección podrás visualizar todos los módulos que tiene activos para el análisis del impacto financiero de los riesgos climáticos de
                transición en su organización. Podrá visualizar los conjuntos de datos, los pronósticos de las variables, los costos asociados a cada variable y
                los costos en cada una de las trayectorias climáticas.
            </p>

            <div className={`grid grid-cols-1 text-center items-center`}>
                <h2 className="text-align-center mb-8 font-bold text-2xl">Mis Módulos</h2>
            </div>

            <div className="w-full max-w-md grid grid-cols-1 gap-4 items-center mx-auto">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow-md flex items-center cursor-pointer ${module.bgColor}`}
                        onClick={() => handleModuleClick(module)}  // Llama a la función de redirección al hacer clic
                    >
                        <div className="text-3xl mr-4">{module.icon}</div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">{module.title}</h2>
                            <p className="text-gray-600">{module.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
