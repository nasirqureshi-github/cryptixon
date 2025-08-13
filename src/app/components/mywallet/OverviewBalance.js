import BarChart from "@/app/charts/BarChart"
import Dropdown from "../dashboard/Dropdown"

const options = [
  { value: "Weekely (2024)", label: "Weekely (2024)" },
  { value: "Daily (2024)", label: "Daily (2024)" },
  { value: "Yearly (2024)", label: "Yearly (2024)" },
];

const OverviewBalance = () => {
  return (
    <div className="bg-white p-6 rounded-4xl  w-full gap-3 mt-8 shadow flex-grow flex-shrink basis-[60%]  transition-all duration-300 py-8 justify-center dark:bg-neutral-900">
<div className="flex justify-between">
<h1 className="text-xl font-semibold mb-2">Balance overview</h1>
  <Dropdown  placeholder="Weekely (2024)" options={options} />
</div>
<div className="my-4">
<h1 className="text-3xl font-bold">$557,235.31 <span className="text-orange-400 text-base">7%</span></h1>
<p>Last Week <span className="text-orange-400">$563,443</span></p>
</div>
   <BarChart/>
    </div>
  )
}

export default OverviewBalance