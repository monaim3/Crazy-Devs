"use client";

import { InlineWidget } from "react-calendly";

export default function Schedule() {
  return (
    <div className=" px-4 sm:px-6 lg:px-16  bg-[#FEF4EA] ">
      <InlineWidget
        url="https://calendly.com/tazahmedsoft/30min"
        styles={{
          height: "700px",
          width: "100%",
        }}
        pageSettings={{
          primaryColor: "#fb923c", // This changes the overall selection color
        }}
      />
    </div>
  );
}
