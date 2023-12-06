

import {Intro,  Tableau,  Conclu} from  "@pages/Base";


import data from "@data/Learning";


const Learning = () => {





  return (
    <div>



<Intro titre={data.titre} intro={data.intro} ></Intro>


      <Tableau data={data.content} stile="tableautravail" />
      <Conclu conclu={data.conclu}></Conclu>



    </div>
  );
};

export default Learning;
