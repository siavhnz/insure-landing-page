import { footerMenu } from "../../store/footer-menu";
import FooterMenuItems from "./FooterMenuItems";

const FooterMenu = () => {
  return (
    <div className="flex flex-col gap-y-35 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-32 1.5lg:px-24 xl:px-0">
      {footerMenu.map((item) => {
        return (
          <div
            key={item.title}
            className="flex flex-col items-center gap-y-29 lg:mx-24 lg:items-start 1.5lg:mx-0"
          >
            <h3 className="font-Karla text-14 uppercase leading-18 tracking-16 text-dark-grayish-violet">
              {item.title}
            </h3>
            <FooterMenuItems items={item.items} />
          </div>
        );
      })}
    </div>
  );
};

export default FooterMenu;
