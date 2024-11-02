import React from "react";
import { SurgeBottom, SurgeMid, SurgeTop } from "./Surge";

function SurgePatterns() {
  return (
    <div className="w-full mt-[96px] md:mt-[172px] relative -z-10 -mb-1">
      <div className="h-[684px] w-[1440px] md:w-full absolute bottom-0">
        <SurgeTop />
      </div>
      <div className="h-[564px] w-[1440px] md:w-full  absolute bottom-0">
        <SurgeMid />
      </div>
      <div className="h-[372px] w-[1440px] md:w-full  absolute bottom-0">
        <SurgeBottom />
      </div>
    </div>
  );
}

export default SurgePatterns;
