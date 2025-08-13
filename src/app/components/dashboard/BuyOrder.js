import React from 'react'
import Ordertable from '@/app/Tables/Ordertable'
import Dropdown from './Dropdown'
import { Icon } from "@iconify/react";

 const options=[
    {value:"Dash coin", label:"Dash coin"},
    {value:"ETH coin", label:"ETH coin"}
 ]
const BuyOrder = () => {
  return (
 <div className="bg-white p-6 rounded-4xl w-full gap-3 mt-4 shadow flex-grow flex-shrink basis-[60%]  transition-all duration-300 py-8 justify-center mb-6 dark:bg-neutral-900 ">
 <div className='flex items-center flex-wrap justify-between gap-4'>
   <h1 className='text-xl font-semibold'>Buy Order</h1>
    <Dropdown
        icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFD7A8]">
        <Icon icon="cryptocurrency:xmr" className='text-black' /></div>}
        options={options}
        placeholder="Monero"
    />
   </div>

    <Ordertable/>
   
 

 </div>
  )
}

export default BuyOrder