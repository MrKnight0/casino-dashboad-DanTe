import React from 'react';
import Accordion from '../Accordion';
const Sidebar = () => {

    const data = [
        {
            id: 1,
            page: 'Hotel'
        },
        {
            id: 2,
            page: 'Casino'
        }
    ]
    const style = 'block p-4 hover:text-orange-500'
    return (
        <aside className="bg-white  h-screen text-black text-sm font-roboto w-56  flex flex-col border-r">
            <nav className="flex-grow">
                <Accordion title={'Sectores'} items={data}/>
                <a href="#" className={style}>Opciones</a>
                <a href="#" className={style}>Opciones</a>
                <a href="#" className={style}>Opciones</a>
                <a href="#" className={style}>Opciones</a>             \
            </nav>
            <div className="p-4 border-t">Usuario: Inserte usuario</div>
        </aside>
    );
};

export default Sidebar;


