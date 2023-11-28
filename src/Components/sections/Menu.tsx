import { MenuItems } from '../../modules.d.ts';

type MenuProps = {
  items: MenuItems[];
};
export const Menu = ({ items }: MenuProps) => {
  return (
    <section>
      {items.map((current: MenuItems, index) => (
        <div key={index}>
          <img src={current.image} />

          <div>{current.title}</div>
        </div>
      ))}
    </section>
  );
};
