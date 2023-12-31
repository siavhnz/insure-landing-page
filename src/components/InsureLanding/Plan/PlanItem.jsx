const PlanItem = ({ title, desc, icon }) => {
  return (
    <div className="flex flex-col items-center 1.5lg:flex-1 1.5lg:items-start">
      <img src={icon} alt={title} className="h-86 w-86" />
      <h3 className="mt-35 font-dm-serif-display text-27 leading-32 text-very-dark-violet">
        {title}
      </h3>
      <p className="mt-19 px-26 text-center font-Karla text-16 leading-25 text-dark-grayish-violet 1.5lg:px-0 1.5lg:text-left">
        {desc}
      </p>
    </div>
  );
};

export default PlanItem;
