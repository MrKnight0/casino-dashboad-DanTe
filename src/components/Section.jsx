import React from 'react';
import Button from './common/Button';
import ScrollSnapContainer from './ScrollSnapContainer';


export default function Section() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-6xl font-semibold mb-6">Participa</h2>
        <br />
        <h2 className="text-4xl sm:text-6xl font-semibold mb-6 text-blue-800">Ayuda a la comunidad</h2>
        <br />
        <h2 className="text-4xl sm:text-6xl font-semibold mb-6">Gana</h2>
        <p className="text-lg mt-10 text-justify">
          Cytus te permite participar por increibles figuras de coleccion a un precio bajo <br /> que a su vez te permite ayudar a  <br /> organizaciones de apoyo
        </p>
        <div className="mt-5">
            <button className='bg-blue-700 text-white font-medium px-8 py-3 text-center rounded hover:shadow-lg hover:bg-blue-800 transition duration-300'>Registrate ya</button>
        </div>
        <div className="flex flex-col-reverse mt-10 sm:flex-row">
          <div className="sm:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">¿Cómo funciona Cytus?</h3>
            <ul className="list-disc ml-6">
              <li>Explora nuestros sorteos activos</li>
              <li>Selecciona el sorteo en el que deseas participar</li>
              <li>Usa tu ticket de compra en un numero disponible</li>
              <li>¡Cruza los dedos y espera los resultados!</li>
            </ul>
          </div>
          <div className="sm:w-1/2">
            <h2 className=" mt-1 text-2xl font-semibold">Marcas dentro de Cytus</h2>
            {/* <img src="/images/lottery-image.jpg" alt="Imagen de Sorteos" className="rounded-lg" /> */}
            <ScrollSnapContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
