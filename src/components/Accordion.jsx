import React, { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

const Accordion = ({ title, items}) => {

    const [isActive, setIsActive] = useState(false)

    const toogleAccordion = () => {
        setIsActive(!isActive)
    }

   
    return (
        <div className='w-60 font-roboto text-sm'>
            <div className='p-4 cursor-pointer flex justify-between items-center' onClick={toogleAccordion}>
                <h2 className='hover:text-orange-500'>{title}</h2>
                <IconChevronDown size={20} className={`hover:text-orange-500${isActive ? 'transform rotate-180 text-orange-500' : ''}`} />
            </div>

            {isActive && (
                <div className='py-2 pl-10'>
                    {items.map((item) => (
                        <ul>
                            <li key={item.id} className='py-1 hover:text-orange-500'><a href="/">{item.page}</a></li>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Accordion