"use client"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import { Tabs, TabsList ,TabsContent, TabsTrigger} from "@/components/ui/tabs"
import { Pencil, Trash2 } from "lucide-react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
const notes=[
    { text: "Payment processed successfully..", date: "12 Sep 2021" },
  { text: "Instagram post scheduled for tomorrow..", date: "05 Nov 2021" },
  { text: "Nasir just subscribed to your plan..", date: "22 Jan 2022" },
  { text: "Saleh sheikh", date: "14 Mar 2022" },
]

const alerts=[
    { status:"Server Status", title:"Nasir Hussain Birthday", icon:"streamline-kameleon-color:man-12", text:"Today" },
    { status:"Social", title:"Uamir qureshi", icon:"streamline-kameleon-color:man-15", text:"uamir is online" }
]

export default function RightSideDrawer({ toggleDrawer, opendrawer }) {
    const { theme } = useTheme(); 
  const list = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
    >
    </Box>
  )

  return (
    <div>
      <Drawer
        anchor="right"
        open={opendrawer}
      onClose={toggleDrawer}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
      }}

      >
        {list}
         <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="Notes">
      <div className="bg-[#FF6803] px-4 py-4 dark:bg-black">
        <TabsList className="flex gap-15 w-full bg-transparent ">
          <TabsTrigger value="Notes" className='text-base text-black uppercase font-semibold cursor-pointer'>Notes</TabsTrigger>
          <TabsTrigger value="Alerts"  className='text-base text-black uppercase font-semibold cursor-pointer'>Alerts</TabsTrigger>
        </TabsList>
        </div>

        <TabsContent value="Notes">
        <div className="pt-2 pb-4 border-b-1 border-gray-200">
         <h2 className="text-xl font-medium text-center">Notes</h2>
        </div>
        
  <ul>
  {notes.map((note)=>{
    return(
<li key={note.text} className="flex justify-between px-4 py-3 border-b-1 border-gray-200 my-2 hover:bg-blue-50 cursor-pointer dark:hover:bg-black ">
     <div>
    <p className="text-base font-semibold truncate overflow-hidden whitespace-nowrap w-56">{note.text}</p>
    <time datetime="2020-08-10" className="font-normal text-sm text-gray-500">{note.date}</time>
    </div>
       <div className="space-x-4 ">
            <button className="p-1 text-white bg-blue-600 hover:bg-blue-800 rounded-full cursor-pointer">
              <Pencil size={18} />
            </button>
            <button className="p-1 text-white bg-red-600 hover:bg-red-800 rounded-full cursor-pointer">
              <Trash2 size={18} />
            </button>
   </div>

  </li>
    )
  })}
</ul>



        </TabsContent>
        <TabsContent value="Alerts">
        <div className="pt-2 pb-4 border-b-1 border-gray-200">
         <h2 className="text-xl font-medium text-center">Notications</h2>
          <p className="text-center text-sm text-gray-500">Show All</p>
        </div>
         {alerts.map((alert)=>{
            return(
            <div key={alert.title}>
  <div className="px-4 py-2 bg-[#F4F7FF] dark:bg-black ">
           <h1 className="text-base font-semibold">{alert.status}</h1>
        </div>
           <ul>
           <li className="px-4 py-2  hover:bg-blue-100 dark:hover:bg-black cursor-pointer">
          <div className="flex gap-4 items-center ">
          <Icon icon={alert.icon} width="48" height="48"/>
              <div>
            <h3 className="text-base font-medium">{alert.title}</h3>
            <p className="text-sm text-green-500">{alert.text}</p>
            </div>
            </div>
           
           </li>
           </ul>
             </div>
            )
         })}
  
        </TabsContent>
      </Tabs>
    </div>
      </Drawer>
    </div>
  )
}
