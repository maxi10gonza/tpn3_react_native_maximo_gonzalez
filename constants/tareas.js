// constants/tareas.js
export const TAREAS = [
    {
        id: '1',
        titulo: 'Comprar víveres',
        subtareas: [
        { id: '1-1', titulo: 'Comprar pan', descripcion: 'Ir a la panadería del barrio', estado: 'pendiente' },
        { id: '1-2', titulo: 'Comprar leche', descripcion: 'Leche deslactosada', estado: 'completo' },
        ],
    },
    {
        id: '2',
        titulo: 'Estudiar',
        subtareas: [
        { id: '2-1', titulo: 'Leer capítulo 4', descripcion: 'Capítulo de React Navigation', estado: 'pendiente' },
        { id: '2-2', titulo: 'Practicar ejercicios', descripcion: 'Ejercicios de navegación anidada', estado: 'pendiente' },
        ],
    },
];
