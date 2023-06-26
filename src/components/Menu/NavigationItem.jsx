const NavigationItem = ({ item }) => {
  return (
    <li className="md:shrink-0">
      <a
        href="#"
        className="font-karla text-18 font-normal uppercase tracking-27 text-white md:text-12 md:tracking-17 md:text-dark-grayish-violet"
      >
        {item}
      </a>
    </li>
  );
};

export default NavigationItem;
