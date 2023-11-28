import { Container } from "./Container";

export const Hero = () => {
  return (
    <header className="bg-[#292E36]">
      <Container className="h-[31.25rem] grid grid-cols-2 items-center max-lg:flex max-lg:flex-col max-lg:h-[37.5rem] max-sm:h-[36.5rem] max-[430px]:h-[31.5rem] ">
        <div className="max-xl:mx-auto max-lg:text-center ">
          <h1 className="font-roadrage text-white text-8xl max-xl:text-7xl max-sm:text-6xl">
            BEM VINDO AO <span className="text-[#edd05f]">QUELEGAL</span>
          </h1>
          <h2 className="font-roadrage text-white text-5xl max-xl:text-4xl max-sm:text-3xl">
            O MELHOR RESTAURANTE EXÓTICO DE
            <span className="text-[#edd05f]"> HERVAL</span>
          </h2>
        </div>

        <img
          src="../../src/assets/Hero/Image.png"
          className="lg:mt-8 max-lg:mt-5 mx-auto"
        />
      </Container>
    </header>
  );
};
