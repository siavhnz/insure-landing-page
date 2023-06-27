const FooterMenuItems = ({ items }) => {
  return (
    <ul className="flex flex-col gap-y-7">
      {items.map((item) => {
        return (
          <li key={item} className="text-center lg:text-left">
            <a
              href="#"
              className="font-karla text-12 uppercase leading-18 tracking-20 text-dark-violet"
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterMenuItems;
