import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";
import NavigationItem from "./NavigationItem";
import MenuAction from "./MenuAction";
import { motion } from "framer-motion";

const MobileNavigation = ({ items, handleCloseMenu }) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 top-0 right-0 flex flex-col md:hidden"
    >
      <div className="flex justify-between items-center p-24 bg-white">
        <div className="pt-1">
          <Logo />
        </div>
        <button aria-label="close menu" onClick={handleCloseMenu}>
          <CloseIcon focusable={false} aria-hidden={true} />
        </button>
      </div>
      <div className="bg-very-dark-violet bg-mobile-nav bg-no-repeat bg-contain bg-bottom flex-grow">
        <ul className="flex flex-col items-center pt-46 gap-y-38">
          {items.map((item) => {
            return <NavigationItem item={item} key={item} />;
          })}
          <MenuAction />
        </ul>
      </div>
    </motion.nav>
  );
};

export default MobileNavigation;
