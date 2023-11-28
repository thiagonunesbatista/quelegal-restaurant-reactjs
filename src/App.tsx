import { Hero, Footer, Navbar } from './Components';
import { Offers, Statistics } from './Components/sections';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Statistics />
      <Footer />
    </>
  );
};

export default App;
