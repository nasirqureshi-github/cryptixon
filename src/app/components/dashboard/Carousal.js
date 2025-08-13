"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

const Carousels=({ orientation, carouselItemClass,carouselImgClass, data=[], showSpan = false})=> {
  return (
    // w-full
    <div className="overflow-hidden my-4">
    <Carousel
      opts={{
        align: "start",
      }}
    orientation={orientation}

      className={`${orientation==="vertical"? "max-w-sm":"max-w-full"} w- full overflow-y-auto `}>
      <CarouselContent className={`${orientation==="vertical"? "h-[300px]   md:h-[750px]": ""}`}>
       {data.map((item, index)=>{
        return(
          <CarouselItem key={index} className={carouselItemClass}>
            <div className="p-1 select-none draggable={false}">
                   <Image src={item.image} height={650} width={650} alt="cards" className={`w-full ${carouselImgClass}`} />
                   
                 {showSpan && (
                <div className="flex flex-col items-center justify-center mt-4 ">
       <span className="text-xl ">{item.name}</span>
          <span className="text-gray-500 text-sm">{item.label}</span>
               </div>
              )}


            </div>
          </CarouselItem>
        )
       })}
      </CarouselContent>
    </Carousel>
    </div>
  )
}
export default Carousels
