"use client";

import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const params = usePathname();
  console.log(params);
  const isAuthed = () => {
    if (params === "/" || params === "/login") {
      return false;
    }
    return true;
  };

  return isAuthed() ? <div>SIDEBAR</div> : null;
}
