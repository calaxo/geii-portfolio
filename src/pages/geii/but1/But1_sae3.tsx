import { Intro, Collaborateurs, Tableau, Conclu } from "@/Base";

import { collaborateurs_But1_sae3 } from "@data/Colabo";
import data from "@data/But1_sae3";

const But1_sae3 = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>
      <Collaborateurs colabo={collaborateurs_But1_sae3}></Collaborateurs>

      <Tableau data={data.content}  />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default But1_sae3;
