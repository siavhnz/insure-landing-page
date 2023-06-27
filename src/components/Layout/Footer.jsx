import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Facebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/images/icon-instagram.svg";
import FooterMenu from "../Menu/FooterMenu";

const Footer = () => {
  return (
    <footer className="mt-140 bg-light-gray lg:mt-148">
      {/* max-w-screen-2xl  2xl:ml-auto 2xl:mr-auto  2xl:bg-[length:50rem] 2xl:bg-[top_-10rem_left]*/}
      <div className="bg-mobile-footer bg-contain bg-top bg-no-repeat py-88 md:bg-desktop-footer md:bg-[length:24rem] md:bg-left-top lg:bg-[length:33rem] lg:pt-65">
        <div className="max-w-screen-1.5lg 1.5lg:ml-auto 1.5lg:mr-auto">
          <div className="mx-24 flex flex-col items-center gap-y-32 border-b border-b-grayish-blue pb-40 md:flex-row md:justify-between lg:pb-30 xl:mx-0">
            <Logo />
            <div className="flex gap-x-15">
              <a href="#" aria-label="go to our facebook">
                <Facebook
                  aria-hidden={true}
                  focusable={false}
                  className="text-dark-grayish-violet transition-all duration-700 hover:text-very-dark-violet"
                />
              </a>
              <a href="#" aria-label="go to our twitter">
                <Twitter
                  aria-hidden={true}
                  focusable={false}
                  className="text-dark-grayish-violet transition-all duration-700 hover:text-very-dark-violet"
                />
              </a>
              <a href="#" aria-label="go to our pinterest">
                <Pinterest
                  aria-hidden={true}
                  focusable={false}
                  className="text-dark-grayish-violet transition-all duration-700 hover:text-very-dark-violet"
                />
              </a>
              <a href="#" aria-label="go to our instagram">
                <Instagram
                  aria-hidden={true}
                  focusable={false}
                  className="text-dark-grayish-violet transition-all duration-700 hover:text-very-dark-violet"
                />
              </a>
            </div>
          </div>
          <div className="mt-39 lg:mt-49">
            <FooterMenu />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
