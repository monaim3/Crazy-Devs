import React from "react";
import ServiceHero from "../../../components/Sections/Services/ServiceHero";
import ServiceCard from "../../../components/Sections/Services/ServiceCard";
import Business from "../../../components/Sections/Services/Business";

const page = () => {
  return (
    <div className="bg-[#FEF4EA]">
      <ServiceHero></ServiceHero>
      <ServiceCard></ServiceCard>
      <Business></Business>
    </div>
  );
};

export default page;
