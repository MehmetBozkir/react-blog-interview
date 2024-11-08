import Navbar from "./components/layout/Navbar";
import Section1 from "./components/layout/Section1";
import Section2 from "./components/layout/Section2";
import Section3 from "./components/layout/Section3";
import Section4 from "./components/layout/Section4";
import Section5 from "./components/layout/Section5";
import Section6 from "./components/layout/Section6";
import Footer from "./components/layout/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default page;
