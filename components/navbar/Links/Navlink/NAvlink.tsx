"use client"

import Link from "next/link";
import Style from "./navlink.module.css"
import { usePathname } from "next/navigation";


interface NavLinkProps {
    item: {
      path: string;
      title: string;
    };
  }


const NAvlink= ({item }:NavLinkProps) => {
    const pathname = usePathname();
  return (
    <Link href={item.path} className={`${Style.container} ${pathname === item.path && Style.active}`}>{item.title}</Link>
  )
}

export default NAvlink