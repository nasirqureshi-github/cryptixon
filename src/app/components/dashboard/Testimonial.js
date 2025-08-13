import Carousels from "./Carousal"
import { clients } from "../constants"
import Dropdown from "./Dropdown"
import Link from "next/link";

const options = [
  { value: "Weekely (2024)", label: "Weekely (2024)" },
  { value: "Daily (2024)", label: "Daily (2024)" },
  { value: "Yearly (2024)", label: "Yearly (2024)" },
];

const Testimonial = () => {
  return (
    <div className="bg-white p-6 rounded-4xl  w-full gap-3 mt-2 shadow flex-grow flex-shrink basis-[100%] transition-all duration-300 py-8 dark:bg-neutral-900">

     <h1 className="text-xl font-semibold mb-2 block w-full">Quick Transfer</h1>
     
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-gray-500 text-sm">Easily send and receive funds in seconds with Quick Transfer.</p>
         <Dropdown placeholder="Weekely (2024)" options={options} />
      </div>

      <div className="flex justify-between flex-wrap mt-4">
         <h1 className="text-xl font-semibold ">Recent Contacts</h1>
         <Link href="#" className="text-[#30599B] text-base font-semibold">View more</Link>
      </div>
       
      <div className="p-10">
      <Carousels
          data={clients}
          orientation="horizontal"
          showSpan={true}
          carouselItemClass="basis-1/2 md:basis-1/2 lg:basis-1/5"
         carouselImgClass="rounded-full"
        />
    </div>
    <div className="flex justify-between items-center flex-wrap gap-4">
    <p className="text-sm text-gray-500">Send and receive funds in seconds with Quick Transfer Now.</p>
    <button type="button" class="text-white bg-[#2258BF] hover:bg-blue-800  font-medium rounded-full text-2xl px-4 py-2 md:px-25 md:py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer focus:ring-4 focus:ring-blue-300">Transfer Now</button>
    </div>
    </div>
  )
}

export default Testimonial