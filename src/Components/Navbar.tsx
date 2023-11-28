import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Container } from "./Container";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [navbarLinks] = useState([
    {
      title: "Pedidos",
      url: "#",
    },
    {
      title: "Cardápio",
      url: "#",
    },
    {
      title: "Cadastrar Prato",
      url: "#",
    },
  ]);

  const HandleMenu = () => {
    SetIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#292E36]">
      <Container className="grid grid-cols-3 h-20 items-center sticky top-0 max-md:grid-cols-2">
        <h1 className="text-white font-roadrage text-5xl ml-5 max-sm:text-4xl">
          QUE <span className="text-[#edd05f]">LEGAL!</span>
        </h1>
        <ul className="text-[#EDD05F] font-extrabold text-xl flex gap-14 col-span-2 max-md:hidden">
          {navbarLinks.map((currentLink, index) => (
            <li key={index} className="hover:underline">
              <a href={currentLink.url}>{currentLink.title}</a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden justify-self-end mr-10"
          onClick={HandleMenu}
        >
          {isOpen == true ? (
            <FaXmark size={40} color="#fff" />
          ) : (
            <FaBarsStaggered size={40} color="#fff" />
          )}
        </button>
        <div className="md:hidden">
          {isOpen ? (
            <div className="md:hidden bg-[#292E36] w-screen absolute">
              <ul className="text-[#EDD05F] font-extrabold text-3xl grid grid-rows-4 justify-center text-center gap-5">
                {navbarLinks.map((currentLink, index) => (
                  <li key={index} className="hover:underline">
                    <a href={currentLink.url}>{currentLink.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Container>
    </nav>
  );
};
