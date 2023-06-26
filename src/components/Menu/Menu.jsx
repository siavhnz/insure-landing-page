import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import MobileNavigation from "./MobileNavigation";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

const Menu = () => {
  const menu = ["How we work", "Blog", "Account"];
  const [openMenu, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button aria-label="open menu" onClick={handleOpenMenu} className="md:hidden">
        <HamburgerIcon focusable={false} aria-hidden={true} />
      </button>

      <AnimatePresence>
        {openMenu && (
          <MobileNavigation items={menu} handleCloseMenu={handleCloseMenu} />
        )}
      </AnimatePresence>

      <Navigation items={menu}/>
    </>
  );
};

export default Menu;
