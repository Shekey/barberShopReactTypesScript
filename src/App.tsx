import * as React from 'react';
import './scss/_all.scss';
import Hero from './components/hero';
import Form from './components/form';

const App: React.FunctionComponent = () => {
  return <div>
    <Hero title="book your barber!" subtitle="Great Hair Doesn't Happend By Chance. It Happens By Appointment" subtitleSecondPart="So Don't Wait And Book Your Appointment Now!" />
    <div className="main-content">
      <figure>
        <img src="./img/image.jpg" alt="Barber" />
      </figure>
      <Form title="book your appointment" />
      </div>
  </div>;
};

export default App;
