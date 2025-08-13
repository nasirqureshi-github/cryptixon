
import RadialbarChart from "@/app/charts/radialBarchart";

const staticData = [
  {

    income: "Income (66%)",
    amount: "$167,884.21",
    color: "bg-[#EB8153]",
  },
  {
    income: "Spends (50%)",
    amount: "$56,411.33",
    color: "bg-[#4441DE]",
  },
  {
    income: " Installment (11%)",
    amount: "$81,981.22",
    color: "bg-[#60C695]",
  },
  {
    income: "Invest (23%)",
    amount: "$12,432.51",
    color: "bg-[#F34F80]",
  },
];

const Statistic = () => {
  return (
    <div className="bg-white p-6 rounded-4xl flex gap-3 mt-8 shadow  flex-grow flex-shrink basis-[40%] transition-all duration-300  py-8 justify-center dark:bg-neutral-900 ">
      <div className="inline-block ">
        <h1 className="text-xl font-semibold mb-10">Current Statistic</h1>

        <RadialbarChart />
        {staticData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex gap-16 mb-2 items-center justify-between"
            >
              <p className="text-gray-500 flex items-center gap-2">
                <span
                  className={`inline-block w-[15px] h-[15px] rounded-full ${data.color}`}
                ></span>
                {data.income}
              </p>
              <p className="font-semibold">{data.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistic;
