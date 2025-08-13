"use client";

import Link from "next/link";
import { Collapsible } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export function NavMain({ items }) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu >
        {items.map((item) => {
          const isActive = pathname === item.url;
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible "
            >
              <SidebarMenuItem>
                <Link href={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={`cursor-pointer  hover:text-[#2258BF]
                      ${
                        isActive
                          ? "text-[#2258BF]"
                          : "hover:bg-gray-100 text-gray-800 dark:hover:bg-neutral-700 "
                      }`}
                  >
                    <div>{item.icon && <item.icon/>}</div>
                    <span className="text-[15px] font-medium dark:text-white">{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
