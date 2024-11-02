import Navbar from "./components/layout/Navbar";
import Section1 from "./components/layout/Section1";
import Section2 from "./components/layout/Section2";
import Section3 from "./components/layout/Section3";

function page() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default page;
