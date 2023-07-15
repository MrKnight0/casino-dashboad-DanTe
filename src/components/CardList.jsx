import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'


export default function CardList() {
    

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('http://localhost:3006/getAllLottery')

                /**
                 * Datos recuperados correctamente
                 */
                setData(response.data.data)
            } catch (error) {
                console.log('Error al obtener datos', error)
            }
        }

        fetchData()
    }, [])
    return (
        /**
         * Mapeo de datos para su renderizacion jeje
         */
        <div className='m-10 mt-32'>
            {data.map((item) =>(
                <Card key={item.id} data={item}/>
            ))}
        </div>
    )
}