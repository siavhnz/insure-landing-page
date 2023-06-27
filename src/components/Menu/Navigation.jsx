import ActionLink from "../ui/ActionLink";
import NavigationItem from "./NavigationItem";

const Navigation = ({ items }) => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-x-24">
        {items.map((item) => {
          return <NavigationItem item={item} key={item} />;
        })}
        <li className="md:ml-8">
          <ActionLink size="small" theme="violet">
            view plans
          </ActionLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
