import { ModuleLayout } from '../ModuleLayout';

interface EnergyData{
    img: string[];
    title: string;
    description: string;
}

const energydata : EnergyData[] = [
    {
        img: ['https://via.placeholder.com/150'],
        title: 'Consumo energético',
        description: 'Datos históricos de consumo energético de la organización.',
    },
    {
        img: ['https://via.placeholder.com/150'],
        title: 'Emisiones de CO2',
        description: 'Datos históricos de las emisiones de gases de efecto invernadero.',
    },
    {
        img: ['https://via.placeholder.com/150'],
        title: 'Materias Primas',
        description: 'Conjunto de datos de consumo y precios de materias primas.',
    },

];

export const Datos=() => {
    return (
        <ModuleLayout>
            <div className="w-full max-w-md grid grid-cols-2 gap-4 items-center mx-auto">
                {energydata.map((energydata, index) => (
                    <div
                        key={index}
                        className="w-50 h-50 border border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white shadow-md"
                    >
                        <div className="text-center">
                            <img src={energydata.img[0]} alt="icon" className="w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-sm font-semibold text-gray-800">{energydata.title}</h2>
                            <p className="text-s text-gray-600 line-clamp-2x">{energydata.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ModuleLayout>
    );
};
