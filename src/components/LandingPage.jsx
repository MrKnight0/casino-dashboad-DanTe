import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import AddButton from './common/AddButton';


const LandingPage = () => {
  return (
    <div>
      <Header />
      <hr />
      <Section/>

      <hr />
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6">Beneficios de participar en nuestros sorteos:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-4">Coleccionables Emocionantes</h3>
              <p>Ten la oportunidad de ganar figuras emocionantes y de alto valor a un bajo costo.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-4">Fácil participación</h3>
              <p>Usa tus tickets para participar en el sorteo que mas te atraiga.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-4">Transparencia y equidad</h3>
              <p>Nuestros sorteos se llevan a cabo de manera transparente y justa para todos los participantes.</p>
            </div>
          </div>
        </div>
      </section>
      <AddButton/>
      <hr />
      <Footer />
    </div>

  );
};

export default LandingPage;
