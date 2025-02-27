
import { NavLink } from "react-router-dom";

import voltmetre from "@assets/voltmetre.jpg";
import onde from "@assets/onde.jpg";
const But1 = () => {
  return (
    <div>
      <div className=" text-center pt-6	 text-lg font-bold">
        Cette année fut très intéressante, nous avons appris beaucoup de choses et nous avons pu mettre en pratique nos connaissances dans des projets.
      </div>

      <div className="mt-8 flex-row justify-center lg:flex">
        <NavLink to="/geii/but2/But2_sae1" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={voltmetre}
              alt="SAE2"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Premier projet de cette année
            </span>
          </div>
        </NavLink>

        <NavLink to="/geii/but2/But2_sae2" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={onde}
              alt="SAE3"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Deuxième projet de cette année
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
