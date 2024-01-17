
import { useRef, useState, useEffect  } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'

import cvfr from "@assets/cvfr.pdf";
import cven from "@assets/cvfr.pdf";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";
import imgmoi from "@assets/imgmoi.jpg"

import { Modelhelico } from '@components/Modelhelico'

// import { TextureLoader } from 'three/src/loaders/TextureLoader'



// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const meshRef = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
  
//   // Subscribe this component to the render-loop, rotate the mesh every frame

//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[20, 20, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// const Scene = () => {
//   useThree(({ camera }) => {
//     camera.rotation.set(THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0));
//     //                                                    tourne      droite gauche            de haut en bas         

//   });
//   const materials = useLoader(MTLLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.mtl");
//   const obj2 = useLoader(OBJLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.obj")

//   console.log(obj2);
//   return <primitive object={obj2} position={[200, -10, 0]}  scale={0.4}  />;
// };

const Accueil = () => {
  // const materials = useLoader(MTLLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.mtl");
  // const obj2 = useLoader(OBJLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.obj", (loader) => {
  //   materials.preload();
  //   loader.setMaterials(materials);
  // });


  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

 let x = 0;
  let y = mousePos.x/200;
  let z = 0;
  let helicox = 0;
  let helicoy = -10+mousePos.y/20;
  let helicoz = 0;

  return (
    <div className="accueil">
  <div className="lecanvas">
    <Canvas camera={{ position: [-20, 5,2] }}>
      {/* <Box position={[-2.5, 0, 0]} /> */}
    {/* <SpotLight  position={[10, 10, 10]} angle={1} focus={1} color={"red"} penumbra={0} intensity={500} target-position={[0, 0,0]} /> */}
    <directionalLight position={[3.3, 1.0, 4.4]} intensity={10} />
    <directionalLight position={[-3.3, 1.0, -4.4]} intensity={2} />

    <Modelhelico position={[helicox, helicoy, helicoz]} rotation={[x, y, z]} scale={0.005} />



    {/* <Box position={[-5, 0, 0]} />
    <Box position={[-2.5, 0, 0]} />
    <Box position={[0, 0, 0]} />
    <Box position={[2.5, 0, 0]} />
    <Box position={[5, 0, 0]} /> */}

    {/* <Environment preset="warehouse" background /> */}
  </Canvas>
  </div>
  <div className='texte-acceuil'>
        <h1>francais</h1>
<h1>MON PORTFOLIO</h1>

<img className="imgmoi" src={imgmoi} alt="github" />

Un Portfolio est un receuil de documents et d'exemples pratiques  
         L'objectif de ce portfolio est de mettre en lumière des compétences,
        Il permet notamment de montrer a des recruteur ou des enseignant de prouver  ce dont je suis capable

        <br></br>
        <br></br>
        <br></br>

        Je m'appelle Axel Calendreau et je suis actuellement étudiant en Génie électrique et informatique industrielle à l'IUT d'Angoulême.
         Je suis en dernière année de mon cursus, me préparant à obtenir mon Bachelor Universitaire de Technologie.

Depuis ma deuxième année d'études, je suis également alternant au Heli Union Training Center, une école de pilotage d'hélicoptère située à l'aéroport de Champniers.
qui forme théoriquement et pratiquement des pilotes de monde entier d'armée ou de secteur publique trés varié

 Durant mes études, j'ai exploré de nombreuses facettes de l'électronique, et au cours de mon alternance,
  j'ai acquis et mis en pratique diverses connaissances liées à l'informatique, telles que le développement, la gestion de serveurs, les réseaux internet et la cybersécurité.

Mon amour initial pour l'électronique s'est élargi au fil du temps pour inclure une passion croissante pour l'informatique. Ce domaine me permet d'apprendre de manière autodidacte,
 ce que j'apprécie particulièrement.




En tant que projet concret réalisé au cours de mon alternance, j'ai développé un site web affichant des informations aéronautiques telles que la météo et le planning des vols.
 Cette expérience m'a introduit au développement web professionnel et m'a inspiré à créer ce portfolio, ainsi qu'un site pour un artisan, et divers petits sites de test.

pour mon futur professionnel je souahite etre embauché dans l'entreprise dans lequel je suis actuellement et recevori des formation professionnel sur la cybersécrutié,
je sais que si j'en ai l'envie et que je trouve des études passionante je pourrait les rejoindre grace a ma rigueur

En dehors de mes activités académiques et professionnelles, j'aime profiter de la vie en compagnie de mes amis, nourrir ma curiosité,
 explorer le monde et engager des conversations enrichissantes avec les personnes que je rencontre. Par ailleurs, démonter et réparer des objets pour mes amis est l'une de mes activités préférées dans ma vie personnelle.


<div className='contactdiv'>
      <a className='cvlien' href={cvfr} >afficher mon CV en français</a>

      <p></p>
      Calendreau Axel
      <p></p>
      06-16-75-16-50
      <p></p>
      cal.axel2@gmail.com
      <p></p>

      <a className="imggithubdiv" href="https://github.com/calaxo/geii-portfolio">
              <img className="imggithub" src={github} alt="github" />
            </a>
            <p></p>

            <a className="imglinkedindiv " href="https://www.linkedin.com/in/calendreau-axel">
              <img className="imglinkedin" src={linkedin} alt="linkedin" />
            </a>
            </div>


      <h1>english</h1>
<h1>MY PORTFOLIO</h1>



        A Portfolio is a collection of documents and practical examples. The purpose of this portfolio is to showcase skills, particularly to demonstrate to recruiters or educators what I am capable of.

<br></br>
<br></br>
<br></br>

My name is Axel Calendreau, and I am currently a student in Electrical Engineering and Industrial Computing at the IUT of Angoulême. I am in the final year of my program, preparing to obtain my University Bachelor of Technology.

Since my second year of studies, I have also been working as an intern at Heli Union Training Center, a helicopter flight school located at Champniers Airport. The school provides theoretical and practical training for pilots from around the world, including those in the military or various public sectors.

Throughout my studies, I have explored various aspects of electronics. During my internship, I have gained and applied diverse knowledge related to computer science, including development, server management, internet networks, and cybersecurity.

My initial love for electronics has expanded over time to include a growing passion for computer science. This field allows me to learn independently, which I particularly appreciate.

As a concrete project during my internship, I developed a website displaying aeronautical information such as weather and flight schedules. This experience introduced me to professional web development and inspired me to create this portfolio, as well as a website for a craftsman and various small test sites.

For my future professional endeavors, I aspire to be employed in the company where I am currently interning and receive professional training in cybersecurity. I know that if I have the desire and find exciting studies, I could join them through my dedication.

Outside of my academic and professional activities, I enjoy life with friends, feeding my curiosity, exploring the world, and engaging in enriching conversations with people I meet. Additionally, disassembling and repairing objects for my friends is one of my favorite activities in my personal life.

      
      <div className='contactdiv'>
      <a className='cvlien' href={cven} >display my resumee in english</a>

      <p></p>
      Calendreau Axel
      <p></p>
      06-16-75-16-50
      <p></p>
      cal.axel2@gmail.com
      <p></p>

      <a className="imggithubdiv" href="https://github.com/calaxo/geii-portfolio">
              <img className="imggithub" src={github} alt="github" />
            </a>
            <p></p>

            <a className="imglinkedindiv " href="https://www.linkedin.com/in/calendreau-axel">
              <img className="imglinkedin" src={linkedin} alt="linkedin" />
            </a>
            </div>

     

  </div>
  </div>
  
)
  }
export default Accueil;