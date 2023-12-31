import { plans } from "../../../store/plans";
import PlanItem from "./PlanItem";

const Plans = () => {
  return (
    <section className="relative z-10 -mt-78 flex max-w-screen-1.5lg flex-col md:mt-141 md:px-24 1.5lg:ml-auto 1.5lg:mr-auto 1.5lg:mt-149 xl:px-0">
      <div className="h-1 w-150 self-center bg-grayish-blue 1.5lg:self-start" />
      <h2 className="mt-39 text-center font-dm-serif-display text-46 leading-50 text-very-dark-violet 1.5lg:mt-55 1.5lg:text-left 1.5lg:text-70 1.5lg:leading-80">
        We’re different
      </h2>
      <div className="mt-80 flex flex-col gap-y-58 1.5lg:mt-89 1.5lg:flex-row 1.5lg:gap-x-30">
        {plans.map((item) => {
          return <PlanItem key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Plans;
