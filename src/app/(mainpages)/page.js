// import Card from "../components/dashboard/Card";
import Card from "../components/dashboard/Card";
import Dropdown from "../components/dashboard/Dropdown";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { cardData, options, cards } from "../components/constants";
import Statistic from "../components/dashboard/Statistic";
import Marketoverview from "../components/dashboard/Marketoverview";
import Carousels from "../components/dashboard/Carousal";
import Testimonial from "../components/dashboard/Testimonial";
import TransactionTabs from "../Tables/transactionTable";
import SellOrder from "../components/dashboard/SellOrder";
import BuyOrder from "../components/dashboard/BuyOrder";


const Home = () => {
  return (
    <div className="mx-5 md:mx-10 my-36">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <p className="text-4xl font-semibold">Dashboard</p>
        <div className="flex justify-between gap-6">
          <Dropdown
            numberText="21"
            icon={
              <Icon
                icon="tdesign:cloud-filled"
                className="text-black w-8 h-8 dark:text-white"
              />
            }
            placeholder="Medan,IDN"
            options={options}
          />
          <Button className="bg-[#2258BF] text-sm p-5 rounded-4xl hover:bg-[#1A4494] cursor-pointer dark:text-white">
            <Icon icon="solar:calendar-bold-duotone" width="24" height="24" />{" "}
            Filter Period
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1]">
        {cardData.map((card, index) => {
          return (
            <Card
              key={index}
              icon={card.icon}
              amount={card.amount}
              percentage={card.percentage}
              lineChart={card.lineChart}
              label={card.label}
              labelColor={card.labelcolor}
            />
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Statistic />
        <Marketoverview />
      </div>
        <Carousels
          data={cards}
          orientation="horizontal"
          showSpan={false}
          carouselItemClass="basis-full md:basis-1/2 lg:basis-1/3"
        />
   <TransactionTabs/>
   <div className="flex flex-col md:flex-row gap-6">
   <SellOrder/>
 <BuyOrder/>
</div>
<Testimonial/>
    </div>
  );
};

export default Home;
