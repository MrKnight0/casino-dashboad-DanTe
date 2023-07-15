import React from 'react';

const Card = ( {data} ) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={data.imgPremio}
        className="w-50 h-56 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.nombreSorteo}</div>
        <p className="text-gray-700 text-base mb-2">
          {data.precioSorteo} | Cantidad Participantes : {data.cantidadParticipantes}
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Participar
        </button>
      </div>
    </div>
  );
};

export default Card;
