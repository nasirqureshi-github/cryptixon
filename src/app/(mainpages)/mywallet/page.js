"use client"
import Carousels from "@/app/components/dashboard/Carousal";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { cards } from "@/app/components/constants";
import TransactionTabs from "@/app/Tables/transactionTable";
import Testimonial from "@/app/components/dashboard/Testimonial";
import OverviewBalance from "@/app/components/mywallet/OverviewBalance";
const mywallet = () => {
  return (
    <div className="mx-5 md:mx-10 my-36">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <p className="text-4xl font-semibold">Wallets</p>
        <div className="flex justify-between gap-6">
          <Button className="bg-[#2258BF] text-sm p-5 rounded-4xl hover:bg-[#1A4494] cursor-pointer dark:text-white">
            <Icon icon="solar:calendar-bold-duotone " width="24" height="24" />{" "}
            Filter Period
          </Button>
        </div>

        </div>

        <div className="flex flex-col md:flex-row md:gap-6 mb-4 md:mb-8 ">
          <Carousels
          data={cards}
          orientation="vertical"
          showSpan={true}
          carouselItemClass="basis-full md:basis-1/2 lg:basis-1/3"
        />
            <OverviewBalance/>
        </div>
       
       <TransactionTabs/>
       <Testimonial/>
</div>
  )
}

export default  mywallet