
import Image from "next/image";

const Card = ({icon, amount,percentage,label, lineChart,labelColor}) => {
  return (
    
    <div className="bg-white p-6 rounded-4xl flex w-full gap-3 mt-8 shadow flex-shrink flex-grow basis-0 transition-all duration-300  py-8  dark:bg-neutral-900">
      <div>
      <Image src={icon} height={60} width={60} alt="Bitcoin"/>
      </div>
      <div>
        <h1 className="ml-3 text-3xl font-bold ">{amount}</h1>
        <p className="ml-auto text-sm text-gray-500 mt-4 inline-flex gap-2">
          <span className={`inline-flex  gap-2 ${labelColor}`}>

           <span className="inline-flex">{lineChart}</span> 
           {percentage}
          </span>{"  "}
          {label}
        </p>
      </div>
    </div>


  );
};
export default Card;
