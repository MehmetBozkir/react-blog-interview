import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left max-w-screen-xl">
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-7">
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Five</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Solutions</h4>
          <ul className="space-y-7">
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Design</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-7">
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
            <li>Reports</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Get the App</h4>
          <div className="flex flex-col items-center md:items-start gap-2 mb-6">
            <button className="flex items-center">
              <img
                src="/SectionFooterItem/Apple.svg"
                alt="App Store Logo"
                className="w-full h-auto"
              />
            </button>
            <button className="flex items-center">
              <img
                src="/SectionFooterItem/Google.svg"
                alt="Google Play Logo"
                className="w-full h-auto"
              />
            </button>
          </div>
          <h4 className="text-lg font-semibold mb-4 pt-12">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <button>
              <FaYoutube />
            </button>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="border-t border-[#2B2F48] mt-8 pt-4 text-sm flex flex-col md:flex-row items-center justify-between text-center">
          <p className="mb-4 md:mb-0 py-12 lg:py-6 ">
            Collers © 2023. All rights reserved.
          </p>
          <div className="flex space-x-8 md:space-x-6">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Contact</span>
            <span className="flex items-center gap-1">
              <HiOutlineGlobeAlt className="text-xl" /> EN
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
