import React, { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

const Accordion = ({ title, items}) => {

    const [isActive, setIsActive] = useState(false)

    const toogleAccordion = () => {
        setIsActive(!isActive)
    }

   
    return (
        <div className='w-54 font-roboto text-sm '>
            <div className='p-4 cursor-pointer flex justify-between items-center' onClick={toogleAccordion}>
                <h2>{title}</h2>
                <IconChevronDown size={20} className={`${isActive ? 'transform rotate-180' : ''}`} />
            </div>

            {isActive && (
                <div className='py-2 pl-10'>
                    {items.map((item) => (
                        <ul>
                            <li key={item.id} className='py-2'>{item.page}</li>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Accordion