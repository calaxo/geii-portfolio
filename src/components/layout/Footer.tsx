import {  NavLink} from "react-router-dom";

import geii from "@assets/geii.gif";
import iut from "@assets/iut.png";

const Footer = () => {
  return (
    <footer className="relative bottom-0 z-50 mt-auto bg-gray-800 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="mb-2 text-white">Calendreau Axel © 2023</p>
        <NavLink className="mb-2 text-blue-600 font-bold hover:underline" to="/Condition">
          Conditions légales
        </NavLink>
        <div className="flex items-center justify-center">
          <img
            className="mx-2 h-20 w-20 rounded-lg bg-white"
            src={geii}
            alt="geii"
          />
          <img
            className="mx-2 h-20 w-20 rounded-lg bg-white"
            src={iut}
            alt="iut"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
