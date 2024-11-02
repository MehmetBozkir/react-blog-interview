import Navbar from "./components/layout/Navbar";
import Section1 from "./components/layout/Section1";
import Section2 from "./components/layout/Section2";
import Section3 from "./components/layout/Section3";
import Section4 from "./components/layout/Section4";

function page() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default page;
