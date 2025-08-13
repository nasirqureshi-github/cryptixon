import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import About from "./About";
import Marketoverview from "../dashboard/Marketoverview";
import { tabs } from "../constants";

const Cointab = () => {
  return (
    <div>
      <Tabs defaultValue={tabs[0].value} className="w-full">
        {/* Heading + Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-2 gap-4">
          <h2 className="text-4xl  font-semibold">Coin Details</h2>
          <TabsList className="bg-[#2258BF] gap-2  flex ">
            {tabs.map((tab) => {
              return (
                <TabsTrigger
                  value={tab.value}
                  key={tab.value}
                  className="rounded-lg border text-base -mx-2 md:-mx-0 md:px-2"
                >
                  <div className=" items-center gap-2 md:gap-3 flex  ">
                    <div className={tab.iconbg}>
                      <Icon icon={tab.icon} className="w-8 h-8" />
                    </div>
                    {tab.title}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* Full-width tab content */}
        {tabs.map((tab) => {
          return (
            <TabsContent key={tab.value} value={tab.value} className="w-full">
              <div className="flex flex-col md:flex-row gap-6">
                <About
                  bitCoinType={tab.bitCoinType}
                  discription={tab.discription}
                  icon={tab.icon}
                  Iconbg={tab.iconbg}
                />
                <Marketoverview />
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Cointab;
