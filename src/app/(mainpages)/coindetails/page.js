"use client";
import Cointab from "@/app/components/coindetails/Cointab";
import BuyOrder from "@/app/components/dashboard/BuyOrder";
import SellOrder from "@/app/components/dashboard/SellOrder";
const Coindetails = () => {
  return (
  
     <div className="mx-5 md:mx-10 my-36 ">
      <Cointab/>
        <div className="flex flex-col md:flex-row gap-6">
      <SellOrder/>
      <BuyOrder/>
</div>
    </div>
    
  )
}

export default Coindetails
