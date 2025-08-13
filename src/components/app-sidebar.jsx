"use client"
import Link from "next/link"
import * as React from "react"
import {
  LayoutDashboard,
  Coins,
  Wallet,
  LineChart,
 DollarSign,

} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "Hello, Nasir",
    email: "nasirq206@gmail.com",
    avatar: "/assets/images/profile.png",
  },
 
  
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon:LayoutDashboard ,
      isActive: true,
    },
    {
      title: "Coins Details",
      url: "/coindetails",
      icon: Coins,
    
    },
    {
      title: "My Wallet",
      url: "/mywallet",
      icon: Wallet,
     
    },
    {
      title: "Tranasactions",
      url: "/tranasaction",
      icon:  DollarSign,
      
    },
    {
      title: "Market Captital",
      url: "/marketcaptital",
      icon: LineChart,
      
    },
  ],
 
}

const logos = [
  {
    id: 1,
    name: "cryptxion",
    src: "/assets/images/cryptxion_logo.png",
    alt: "cryptxion",
    url:"/"
  }
];


export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
     
      <SidebarHeader>
       {logos.map((item,index)=>{
        return(
         <div key={index}>
      <div>
      <Link href={item.url}>
       <Image
       src={item.src}
      alt={item.alt}
       width={150}
      height={150}
       className="cursor-pointer"/>
       </Link>
       </div>
         </div>
        )
       })}

       
</SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
         
      </SidebarContent>
      <SidebarFooter>
       <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
