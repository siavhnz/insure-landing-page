import MenuAction from "./MenuAction";
import NavigationItem from "./NavigationItem";

const Navigation = ({ items }) => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-x-24">
        {items.map((item) => {
          return <NavigationItem item={item} key={item} />;
        })}
        <MenuAction />
      </ul>
    </nav>
  );
};

export default Navigation;
