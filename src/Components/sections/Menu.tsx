import { useState } from "react";
import { MenuItems } from "../../modules.d.ts";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";

type MenuProps = {
  items: MenuItems[];
};
export const Menu = ({ items }: MenuProps) => {
  // const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  return (
    <section className="grid grid-cols-3 my-10 gap-10">
      {items.map((current: MenuItems, index) => (
        <div
          key={index}
          className="flex justify-center border border-black gap-5 rounded-xl w-96 h-48 items-center"
        >
          <img
            src={current.image}
            width={150}
            height={200}
            className="rounded-3xl"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium">{current.title}</h2>

            <h2 className="font-medium">Preço: {current.price}</h2>

            <h2 className="text-slate-600">
              <a onClick={onOpenModal} href="#">
                Ver Descrição
              </a>
            </h2>
          </div>
          {/* <Modal open={open} onClose={onCloseModal} center>
            <h2>{current.description}</h2>
          </Modal> */}
        </div>
      ))}
    </section>
  );
};
