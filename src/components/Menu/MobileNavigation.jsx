import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";
import NavigationItem from "./NavigationItem";
import { motion } from "framer-motion";
import ActionLink from "../ui/ActionLink";

const MobileNavigation = ({ items, handleCloseMenu }) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 top-0 flex flex-col md:hidden"
    >
      <div className="flex items-center justify-between bg-white p-24">
        <div className="pt-1">
          <Logo />
        </div>
        <button aria-label="close menu" onClick={handleCloseMenu}>
          <CloseIcon focusable={false} aria-hidden={true} />
        </button>
      </div>
      <div className="flex-grow bg-very-dark-violet bg-mobile-nav bg-contain bg-bottom bg-no-repeat">
        <ul className="flex flex-col items-center gap-y-38 pt-46">
          {items.map((item) => {
            return <NavigationItem item={item} key={item} />;
          })}
          <li className="-mt-9 w-full px-24">
            <ActionLink size="medium">view plans</ActionLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default MobileNavigation;
