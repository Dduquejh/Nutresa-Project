import { ModuleLayout } from '../ModuleLayout';

interface EnergyData{
    img: string;
    title: string;
    description: string;
}

const energydata : EnergyData[] = [
    {
        img: 'placeholder_image_url',
        title: 'Consumo Energético',
        description: 'Datos históricos de consumo energético de la organización.',
    }
];

export const Datos=() => {
    return (
        <ModuleLayout>
            <h1 className="text-2xl font-bold">Banco de Datos</h1>
            <p></p>
        </ModuleLayout>
    );
};
