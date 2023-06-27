import ActionLink from "../ui/ActionLink";

const Hero = () => {
  return (
    <div className="bg-dark-violet md:grid md:grid-cols-[auto_1fr_auto] md:grid-rows-[6.5rem_1fr_9.75rem] md:bg-transparent">
      <div className="md:col-span-full md:row-start-1 md:row-end-3 md:bg-dark-violet" />
      <div className="w-screen max-w-screen-2xl md:col-span-full md:row-start-1 md:row-end-3 md:grid md:grid-cols-2 xl:ml-auto xl:mr-auto">
        <div className="z-10 md:col-start-2 md:bg-desktop-intor-right md:bg-[top_-5rem_right_-3rem]  md:bg-no-repeat xl:bg-[top_-6.25rem_right] 2xl:bg-[left_36%_top_-6.25rem]"></div>
      </div>
      <div className="max-w-screen-1.5lg md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-2 md:grid md:grid-cols-2 md:grid-rows-[auto_9.75rem] md:px-16 1.5lg:ml-auto 1.5lg:mr-auto xl:px-0">
        <div className="md:col-start-2 md:col-end-3 md:row-span-full md:pl-14">
          <picture className="">
            <source
              media="(max-width:767px)"
              srcSet="/images/image-intro-mobile.jpg"
            />
            <source
              media="(min-width:768px)"
              srcSet="/images/image-intro-desktop.jpg"
            />
            <img
              className="ml-auto mr-auto w-full"
              src="/images/image-intro-mobile.jpg"
              alt="Humanizing your insurance"
            />
          </picture>
        </div>
        <div className="bg-cotain flex flex-col bg-mobile-intor-left bg-no-repeat py-92 md:col-start-1 md:col-end-2 md:row-span-1 md:bg-transparent md:bg-none md:pt-0">
          <div className="hidden h-1 w-150 bg-very-light-gray xl:block" />
          <h1 className="px-24 text-center font-dm-serif-display text-46 leading-48 text-very-light-gray md:pl-0 md:text-left xl:pr-30 xl:pt-65 xl:text-70 xl:leading-65">
            Humanizing your insurance.
          </h1>
          <p className="mt-18 px-24 text-center font-Karla text-15 leading-25 tracking-6 text-very-light-gray md:pl-0 md:text-left xl:mt-24 xl:pr-10">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <div className="mt-35 flex justify-center md:justify-start">
            <ActionLink size="small">view plans</ActionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
