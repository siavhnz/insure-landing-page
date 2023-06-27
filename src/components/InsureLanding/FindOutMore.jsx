import ActionLink from "../ui/ActionLink";

const FindOutMore = () => {
  return (
    <section className="mx-24 mt-145 flex max-w-screen-1.5lg flex-col gap-y-38 bg-dark-violet bg-mobile-how-we-work bg-contain bg-right bg-no-repeat px-24 py-72 1.5lg:mt-160 1.5lg:flex-row 1.5lg:items-center 1.5lg:justify-between 1.5lg:bg-desktop-how-we-work 1.5lg:px-82 1.5lg:py-68 1.5lg:ml-auto 1.5lg:mr-auto">
      <h2 className="text-center font-dm-serif-display text-38 leading-40 text-very-light-gray 1.5lg:max-w-480 1.5lg:text-left 1.5lg:text-55 1.5lg:leading-58">
        Find out more about how we work
      </h2>
      <div className="self-center">
        <ActionLink theme="white" size="small">
          how we work
        </ActionLink>
      </div>
    </section>
  );
};

export default FindOutMore;
