import React from 'react'
import { Button } from '@/components/ui/button'
import { options } from '@/app/components/constants'
import Dropdown from '@/app/components/dashboard/Dropdown'
import { Icon } from '@iconify/react'
import CryptoTable from '@/app/Tables/Cryptotable'
const MarketCaptital = () => {
  return (
     <div className="mx-5 md:mx-10 my-36">
    
     <div className="flex flex-col md:flex-row gap-4 justify-between">
        <p className="text-4xl font-semibold">Market Capital</p>
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
      <div className='mt-4 md:mt-8'>
        <CryptoTable/>
      </div>
      

    </div>
  )
}

export default MarketCaptital