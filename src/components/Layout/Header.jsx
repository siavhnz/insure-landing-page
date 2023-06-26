import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header className="flex max-w-screen-1.5lg items-center justify-between bg-white px-24 pb-19 md:pb-20 pt-24 md:pt-20 1.5lg:ml-auto 1.5lg:mr-auto 1.5lg:px-0">
      <div className="-mt-4 md:mt-0 md:pl-3">
        <Logo />
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
