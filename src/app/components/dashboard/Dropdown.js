import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Dropdown = ({numberText, icon, placeholder, options=[]}) => {
  return (
    <Select>
      <SelectTrigger className="w-[200px] py-5 text-black bg-white dark:text-white">
    
     {icon} 
      <h3 className="text-black font-semibold text-2xl dark:text-white">{numberText}</h3>
        <SelectValue placeholder={placeholder}/>
      </SelectTrigger>
      <SelectContent className="font-semibold">
        <SelectGroup>
         {options.map((option)=>{
            return(
                <SelectItem value={option.value} key={option.value} className="cursor-pointer">{option.label}</SelectItem>
            )
          
         })}
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Dropdown