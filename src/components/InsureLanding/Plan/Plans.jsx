import { plans } from "../../../store/plans";
import PlanItem from "./PLanItem";

const Plans = () => {
  return (
    <section className="mt-141 flex max-w-screen-1.5lg flex-col 1.5lg:ml-auto 1.5lg:mr-auto 1.5lg:mt-149">
      <div className="h-1 w-150 self-center bg-dark-violet 1.5lg:self-start" />
      <h2 className="mt-39 text-center font-dm-serif-display text-46 leading-50 text-very-dark-violet 1.5lg:mt-55 1.5lg:text-70 1.5lg:leading-80 xl:text-left">
        We’re different
      </h2>
      <div className="mt-80 1.5lg:mt-89 flex flex-col gap-y-58 1.5lg:flex-row 1.5lg:gap-x-30">
        {plans.map((item) => {
          return <PlanItem key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Plans;
