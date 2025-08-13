'use client'
import { Dialogs } from "@/app/components/profile/Dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useDialogStore } from "@/app/store/store"

const Profile = () => {
    const { openDialog } = useDialogStore();
  return (
  <div className="mx-5 md:mx-10 my-36">
  <h1 className=" font-semibold text-2xl">Profile</h1>
   <div className="bg-white p-6 rounded-4xl  w-full gap-3 mt-8 shadow  py-8 justify-center dark:bg-neutral-900">
  <Image  src="/assets/images/cryptxion-bg.jpg" width={750} height={450}
    alt="Cryptxion"
    className="w-full h-60 object-cover rounded-2xl" draggable={false}/>

   <div className="flex gap-6 items-center">
  <Image  src="/assets/images/profile.png" width={50} height={50}
    alt="Cryptxion"
    className="w-30 h-30 rounded-full -mt-10" draggable={false}/>
    <div>
    <h1 className="text-blue-500 text-2xl font-semibold">Nasir Hussain</h1>
    <h1 className="text-base text-gray-500">software Engineer / Web Developer</h1>
    </div>
    
    <Button onClick={openDialog}  className="ml-auto cursor-pointer bg-blue-900 text-white hover:bg-amber-500" >Send Message</Button>
   </div>

   </div> 
   </div>
  )
}

export default Profile