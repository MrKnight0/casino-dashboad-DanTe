import React from 'react';
import Accordion from '../Accordion';
import ChartComponent from '../ChartComponent';

const Sidebar = () => {

    const sectores = [
        {
            id: 1,
            page: 'Hotel'
        },
        {
            id: 2,
            page: 'Casino'
        },
        {
            id: 3,
            page: 'Sala de juegos'
        },
        {
            id: 4,
            page: 'Bar'
        },
        {
            id: 5,
            page: 'Restaurant'
        },
        {
            id: 6,
            page: 'Estacionamiento'
        },
        {
            id: 7,
            page: 'Sala de administracion'
        },
        {
            id: 8,
            page: 'Cine'
        },
        {
            id: 9,
            page: 'Salon de eventos'
        },
        {
            id: 10,
            page: 'AABB'
        }
    ]

    const informes = [{ id: 1, page: 'Redaccion' }, { id: 2, page: 'Comprobar' }, { id: 3, page: 'xd' }]
    const style = 'block p-4 hover:text-orange-500'
    return (
        // <aside className="bg-white min-h-screen text-black text-sm font-roboto w-56  flex flex-col border-r">
        //     <nav className="flex-grow">
        //         <Accordion title={'Sectores'} items={sectores}/>
        //         <Accordion title={'Informes'} items={informes}/>
        //         <a href="#" className={style}>Opciones</a>
        //         <a href="#" className={style}>Opciones</a>
        //         <a href="#" className={style}>Opciones</a>
        //         <a href="#" className={style}>Opciones</a>             
        //     </nav>
        //     <div className="p-4 border-t">Usuario: Inserte usuario</div>
        // </aside>
        <div className="flex h-screen font-roboto text-black text-sm">
            <div className="w-64 bg-white p-2 border-r">
                <h2 className="text-xl  mb-4">Dashboard</h2>
                <ul>
                    <li className="mb-2">
                        <Accordion title={'Sector'} items={sectores} />
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                {/* Se ingresan los datos genericos aca*/}

                <h2>Ingreso de formularios aqui abajo</h2>
                <ChartComponent />
            </div>
        </div>
    );
};

export default Sidebar;


