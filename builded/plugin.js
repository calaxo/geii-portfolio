import{r as p,a as v,N as t,H as g,R as f,b as r,c as N}from"./chunk.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();var b={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=p,B=Symbol.for("react.element"),S=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,C=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function m(l,i,o){var a,s={},n=null,c=null;o!==void 0&&(n=""+o),i.key!==void 0&&(n=""+i.key),i.ref!==void 0&&(c=i.ref);for(a in i)_.call(i,a)&&!w.hasOwnProperty(a)&&(s[a]=i[a]);if(l&&l.defaultProps)for(a in i=l.defaultProps,i)s[a]===void 0&&(s[a]=i[a]);return{$$typeof:B,type:l,key:n,ref:c,props:s,_owner:C.current}}x.Fragment=S;x.jsx=m;x.jsxs=m;b.exports=x;var e=b.exports,h,j=v;h=j.createRoot,j.hydrateRoot;const E="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/perdu.jpg",k=()=>e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"error-code",children:"404"}),e.jsx("p",{className:"error-message",children:"Page introuvable"}),e.jsx("p",{className:"error-message",children:"Désolé, la page que vous recherchez n'existe pas."}),e.jsx("img",{className:"error-img",src:E,alt:"Page introuvable",width:"300"}),e.jsxs("p",{className:"error-message",children:["Retournez à ",e.jsx("a",{href:"/",children:"l'accueil"}),"."]})]}),A=()=>e.jsxs("div",{children:["Lorem",e.jsx("br",{}),"ipsum",e.jsx("br",{}),"dolor",e.jsx("br",{}),"sit",e.jsx("br",{}),"amet,",e.jsx("br",{}),"consectetur",e.jsx("br",{}),"adipiscing",e.jsx("br",{}),"elit.",e.jsx("br",{}),"Maecenas",e.jsx("br",{}),"vel",e.jsx("br",{}),"nisi",e.jsx("br",{}),"ut",e.jsx("br",{}),"sapien",e.jsx("br",{}),"dictum",e.jsx("br",{}),"condimentum.",e.jsx("br",{}),"Proin",e.jsx("br",{}),"eget",e.jsx("br",{}),"nulla",e.jsx("br",{}),"vel",e.jsx("br",{}),"quam",e.jsx("br",{}),"tristique",e.jsx("br",{}),"consectetur.",e.jsx("br",{}),"Vestibulum",e.jsx("br",{}),"ante",e.jsx("br",{}),"ipsum",e.jsx("br",{}),"primis",e.jsx("br",{}),"in",e.jsx("br",{}),"faucibus",e.jsx("br",{}),"orci",e.jsx("br",{}),"luctus",e.jsx("br",{}),"et",e.jsx("br",{}),"ultrices",e.jsx("br",{}),"posuere",e.jsx("br",{}),"cubilia",e.jsx("br",{}),"curae;",e.jsx("br",{}),"Duis",e.jsx("br",{}),"quis",e.jsx("br",{}),"varius",e.jsx("br",{}),"metus,",e.jsx("br",{}),"vitae",e.jsx("br",{}),"aliquet",e.jsx("br",{}),"justo.",e.jsx("br",{}),"Quisque",e.jsx("br",{}),"aliquam",e.jsx("br",{}),"euismod",e.jsx("br",{}),"tincidunt.",e.jsx("br",{}),"Sed",e.jsx("br",{}),"in",e.jsx("br",{}),"tristique",e.jsx("br",{}),"nunc.",e.jsx("br",{}),"Nullam",e.jsx("br",{}),"id",e.jsx("br",{}),"lacinia",e.jsx("br",{}),"dui,",e.jsx("br",{}),"at",e.jsx("br",{}),"luctus",e.jsx("br",{}),"est.",e.jsx("br",{}),"Sed",e.jsx("br",{}),"feugiat",e.jsx("br",{}),"arcu",e.jsx("br",{}),"ut",e.jsx("br",{}),"justo",e.jsx("br",{}),"consectetur,",e.jsx("br",{}),"eu",e.jsx("br",{}),"scelerisque",e.jsx("br",{}),"sem",e.jsx("br",{}),"dapibus.",e.jsx("br",{}),"Vivamus",e.jsx("br",{}),"posuere",e.jsx("br",{}),"quam",e.jsx("br",{}),"at",e.jsx("br",{}),"ligula",e.jsx("br",{}),"fermentum,",e.jsx("br",{}),"ac",e.jsx("br",{}),"malesuada",e.jsx("br",{}),"libero",e.jsx("br",{}),"varius.",e.jsx("br",{}),"Ut",e.jsx("br",{}),"nec",e.jsx("br",{}),"nunc",e.jsx("br",{}),"eu",e.jsx("br",{}),"velit",e.jsx("br",{}),"tincidunt",e.jsx("br",{}),"tristique.",e.jsx("br",{}),"Praesent",e.jsx("br",{}),"vestibulum,",e.jsx("br",{}),"ligula",e.jsx("br",{}),"id",e.jsx("br",{}),"luctus",e.jsx("br",{}),"vehicula,",e.jsx("br",{}),"justo",e.jsx("br",{}),"turpis",e.jsx("br",{}),"posuere",e.jsx("br",{}),"felis,",e.jsx("br",{}),"nec",e.jsx("br",{}),"bibendum",e.jsx("br",{}),"justo",e.jsx("br",{}),"metus",e.jsx("br",{}),"ut",e.jsx("br",{}),"odio.",e.jsx("br",{}),"Nulla",e.jsx("br",{}),"facilisi.",e.jsx("br",{}),"Nullam",e.jsx("br",{}),"volutpat",e.jsx("br",{}),"turpis",e.jsx("br",{}),"vitae",e.jsx("br",{}),"lectus",e.jsx("br",{}),"pellentesque,",e.jsx("br",{}),"vel",e.jsx("br",{}),"cursus",e.jsx("br",{}),"justo",e.jsx("br",{}),"pharetra.",e.jsx("br",{}),"Integer",e.jsx("br",{}),"id",e.jsx("br",{}),"dictum",e.jsx("br",{}),"sapien.",e.jsx("br",{}),"Etiam",e.jsx("br",{}),"hendrerit",e.jsx("br",{}),"scelerisque",e.jsx("br",{}),"tortor,",e.jsx("br",{}),"vel",e.jsx("br",{}),"tristique",e.jsx("br",{}),"justo",e.jsx("br",{}),"condimentum",e.jsx("br",{}),"non.",e.jsx("br",{}),"Sed",e.jsx("br",{}),"ut",e.jsx("br",{}),"elit",e.jsx("br",{}),"eu",e.jsx("br",{}),"justo",e.jsx("br",{}),"congue",e.jsx("br",{}),"feugiat.",e.jsx("br",{}),"Sed",e.jsx("br",{}),"vitae",e.jsx("br",{}),"hendrerit",e.jsx("br",{}),"purus.",e.jsx("br",{}),"Cras",e.jsx("br",{}),"vulputate",e.jsx("br",{}),"risus",e.jsx("br",{}),"ac",e.jsx("br",{}),"semper",e.jsx("br",{}),"laoreet.",e.jsx("br",{}),"Nunc",e.jsx("br",{}),"in",e.jsx("br",{}),"libero",e.jsx("br",{}),"ut",e.jsx("br",{}),"neque",e.jsx("br",{}),"varius",e.jsx("br",{}),"ullamcorper.",e.jsx("br",{}),"Vestibulum",e.jsx("br",{}),"auctor",e.jsx("br",{}),"feugiat",e.jsx("br",{}),"venenatis.",e.jsx("br",{}),"Etiam",e.jsx("br",{}),"id",e.jsx("br",{}),"tortor",e.jsx("br",{}),"eu",e.jsx("br",{}),"libero",e.jsx("br",{}),"volutpat",e.jsx("br",{}),"iaculis.",e.jsx("br",{}),"Nulla",e.jsx("br",{}),"facilisi.",e.jsx("br",{}),"Nullam",e.jsx("br",{}),"pulvinar,",e.jsx("br",{}),"dolor",e.jsx("br",{}),"eu",e.jsx("br",{}),"tristique",e.jsx("br",{}),"feugiat,",e.jsx("br",{}),"velit",e.jsx("br",{}),"nisi",e.jsx("br",{}),"ultricies",e.jsx("br",{}),"dui,",e.jsx("br",{}),"id",e.jsx("br",{}),"iaculis",e.jsx("br",{}),"eros",e.jsx("br",{}),"dolor",e.jsx("br",{}),"eget",e.jsx("br",{}),"lacus.",e.jsx("br",{}),"Nullam",e.jsx("br",{}),"euismod",e.jsx("br",{}),"efficitur",e.jsx("br",{}),"orci,",e.jsx("br",{}),"ut",e.jsx("br",{}),"bibendum",e.jsx("br",{}),"ligula",e.jsx("br",{}),"congue",e.jsx("br",{}),"in.",e.jsx("br",{}),"Phasell"]}),R=()=>e.jsxs("div",{children:[e.jsx(t,{to:"/But1_sae1",className:"boutondepagegeii",children:"vers la premiere sae"},"But1_sae1"),e.jsx(t,{to:"/But1_sae2",className:"boutondepagegeii",children:"vers la deuxieme sae"},"But1_sae2"),e.jsx(t,{to:"/But1_sae3",className:"boutondepagegeii",children:"vers la troisiémé sae"},"But1_sae3")]}),u=()=>e.jsx("div",{children:"verifier moteur"}),d=()=>e.jsx("div",{children:"Sonometre"}),P=()=>e.jsx("div",{children:"trieur de dechet"}),q=()=>e.jsxs("div",{children:[e.jsx(t,{to:"/But2_sae1",className:"boutondepagegeii",children:"vers la premiere sae"},"But2_sae1"),e.jsx(t,{to:"/But2_sae2",className:"boutondepagegeii",children:"vers la deuxime sae"},"But2_sae2")]}),L=()=>e.jsx("div",{children:"stylo voltmetre avec fils"}),F=()=>e.jsx("div",{children:"stylo voltmetre sans fils"}),D=()=>e.jsx("div",{children:e.jsx(t,{to:"/But3_sae1",className:"boutondepagegeii",children:"vers ma page NFC"},"But3_sae1")}),O="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/geii.gif",H="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/iut.png",T=()=>{const l={border:"solid",width:"100%"},i={backgroundColor:"#FFCC33",fontSize:"28px",color:"darkred",textAlign:"center"};return e.jsxs("div",{children:[e.jsxs("table",{style:l,children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"5",style:i,children:"SAE Badgeuse RFID"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",children:[e.jsx("p",{style:{color:"darkred"},children:e.jsx("b",{children:e.jsx("u",{children:"Objectifs:"})})}),e.jsx("p",{children:e.jsx("a",{href:"https://bv.univ-poitiers.fr/access/content/group/7d0bd2dd-1dd5-42d4-b5b7-501daecddf3f/Enseignants/Michel%20Garcier/SAE2/Sonometre/SAE1_S1_C1_presentation.pdf",children:"MGA Sujet 2021/2022"})})]})}),e.jsxs("tr",{style:{backgroundColor:"yellow"},align:"center",children:[e.jsx("td",{width:"25%",children:"Activités réalisées"}),e.jsx("td",{width:"25%",children:"Ressources utilisées"}),e.jsx("td",{width:"25%",children:"Traces"}),e.jsx("td",{width:"25%",children:"Autoévaluation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"case1"}),e.jsx("td",{children:"case2"}),e.jsx("td",{children:"case3"}),e.jsx("td",{children:"case5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"case1"}),e.jsx("td",{children:"case2"}),e.jsx("td",{children:"case3"}),e.jsx("td",{children:"case5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"case1"}),e.jsx("td",{children:"case2"}),e.jsx("td",{children:"case3"}),e.jsx("td",{children:"case5"})]}),e.jsx("tr",{children:e.jsx("td",{colSpan:"5",style:i,children:"ANALYSE REFLEXIVE"})}),e.jsx("tr",{children:e.jsx("td",{colSpan:"5",children:e.jsxs("p",{children:["Réflexions sur les traces conservées, sur les raisons qui justifient leur choix, sur les apprentissages qu’elles démontrent, sur la construction de connaissances qu’elles révèlent, sur les liens entre théorie et pratique, sur les apprentissages à réaliser… Vous décrivez ce que vous avez appris depuis le début de la SAE et ce qu’il vous reste à apprendre. Vous portez un jugement global sur votre progression (degré de satisfaction, perception).",e.jsx("br",{}),"Comment ai-je appris ?",e.jsx("br",{}),"Qu’ai-je réussi à accomplir ? Ai-je rencontré des difficultés ?",e.jsx("br",{}),"Quels savoirs ai-je acquis ? Quels savoirs ai-je démontrés ?",e.jsx("br",{}),"À quelles compétences visées par le programme du BUT ces savoirs se rattachent-ils ?",e.jsx("br",{}),"Quelles connaissances, habiletés, attitudes … aurais-je dû mobiliser pour mieux faire face aux situations rencontrées ?",e.jsx("br",{}),"Que dois-je apprendre pour continuer à développer mes compétences ??",e.jsx("br",{}),"Comment vais-je m’y prendre pour accomplir ces apprentissages ?"]})})})]})]}),e.jsx("img",{className:"imggeii",src:O,alt:"geii"}),e.jsx("img",{className:"imgiut",src:H,alt:"iut"})]})},G=()=>e.jsx("div",{children:"Montage de PC"}),I=()=>e.jsxs("div",{children:[e.jsx(t,{to:"/Back",className:"boutondepageperso",children:"vers le back"},"Back"),e.jsx(t,{to:"/Front",className:"boutondepageperso",children:"vers le front"},"Front"),e.jsx(t,{to:"/Git",className:"boutondepageperso",children:"vers git"},"Git"),e.jsx(t,{to:"/Hebergement",className:"boutondepageperso",children:"vers l'Hebergement"},"Hebergement")]}),V=()=>e.jsx("div",{children:"develeopment web back"}),z=()=>e.jsx("div",{children:"develeopment web Front"}),U=()=>e.jsx("div",{children:"develeopment avec git"}),M=()=>e.jsx("div",{children:"Hebergement o2switch"}),Q=()=>e.jsxs("div",{children:[e.jsx(t,{to:"/DGAC",className:"boutondepagetravail",children:"cybersecurite"},"DGAC"),e.jsx(t,{to:"/Formation",className:"boutondepagetravail",children:"formation"},"Formation"),e.jsx(t,{to:"/Veille",className:"boutondepagetravail",children:"veille"},"Veille")]}),W=()=>e.jsx("div",{children:"develeopment web back"}),$=()=>e.jsx("div",{children:"Formation des employés"}),Y=()=>e.jsx("div",{children:"Veille info"}),J=()=>e.jsxs("div",{children:[e.jsx(t,{to:"/Simu",className:"boutondepagetravail",children:"simulateur"},"Simu"),e.jsx(t,{to:"/Aero",className:"boutondepagetravail",children:"aeronautique"},"Aero")]}),K=()=>e.jsx("div",{children:"aeronautique"}),X=()=>e.jsx("div",{children:"les simulateur"}),Z=()=>e.jsxs("div",{children:[e.jsx(t,{to:"/Cable",className:"boutondepagetravail",children:"cable"},"Cable"),e.jsx(t,{to:"/Firewall",className:"boutondepagetravail",children:"firewall"},"Firewall"),e.jsx(t,{to:"/Switch",className:"boutondepagetravail",children:"switch reseaux"},"Switch")]}),ee=()=>e.jsx("div",{children:"Cable management"}),se=()=>e.jsx("div",{children:"Firewall regle et tout"}),re=()=>e.jsx("div",{children:"Switch reseaux"}),te=()=>e.jsxs("div",{children:[e.jsx(t,{to:"/AD",className:"boutondepagetravail",children:"active directory"},"AD"),e.jsx(t,{to:"/Docker",className:"boutondepagetravail",children:"docker"},"Docker"),e.jsx(t,{to:"/Learning",className:"boutondepagetravail",children:"learning"},"Learning"),e.jsx(t,{to:"/Linux",className:"boutondepagetravail",children:"linux"},"Linux"),e.jsx(t,{to:"/Proxy",className:"boutondepagetravail",children:"proxy"},"Proxy")]}),ie=()=>e.jsx("div",{children:"AD droit admin etc"}),ne=()=>e.jsx("div",{children:"Docker"}),ae=()=>e.jsx("div",{children:"Learning moodle"}),le=()=>e.jsx("div",{children:"linux"}),oe=()=>e.jsx("div",{children:"reverse procy nginx ptet traefik"}),ce=()=>e.jsx("div",{children:e.jsxs("div",{className:"textecontact",children:[e.jsx("h1",{children:"Condition légales"}),e.jsx("h2",{children:"Webmaster"}),e.jsx("p",{children:"Coordonnées du webmaster:"}),"Axel Calendreau",e.jsx("br",{}),"mail : contact@faury-lionel.fr",e.jsx("p",{children:"entreprise FY"}),e.jsx("p",{children:"Numéro de SIREN: 530.283.639"}),"eurl ou entreprise individuelle representée par Lionel Faury code APE 43.91B (Travaux de couverture par éléments)",e.jsx("br",{}),"RESPONSABLE DU SITE : société FY société de travaux de couverture et d'étanchéité",e.jsx("br",{}),e.jsx("br",{}),"Les images présentes sur le site sont notre propriété et ne peuvent être utilisé sans notre accord.",e.jsx("br",{}),e.jsx("br",{}),"SITE HÉBERGÉ PAR",e.jsx("br",{}),"o2switch",e.jsx("br",{}),"Chemin des Pardiaux",e.jsx("br",{}),"63000 Clermont-Ferrand",e.jsx("br",{}),"Capital de 100000€",e.jsx("br",{}),"Siret 510 909 80700024",e.jsx("br",{})]})}),xe="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/github.png",je="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/linkedin.png";function ue(){const l=({isActive:s})=>({color:s?"#black":"#2f343d",fontSize:s?"1.2em":"1em",background:s?"white":"#05f140",borderRadius:"10px"}),i=({isActive:s})=>({color:s?"#black":"#2f343d",fontSize:s?"1.2em":"1em",background:s?"white":"brown",borderRadius:"10px"}),o=({isActive:s})=>({color:s?"#black":"#2f343d",fontSize:s?"1.2em":"1em",background:s?"white":"#006EB3",borderRadius:"10px"}),a=[{to:"/Accueil",text:"Accueil"},{to:"/But1",text:"BUT1",class:"but3",style:l},{to:"/But2",text:"BUT2",class:"but3",style:l},{to:"/But3",text:"BUT3",class:"but3",style:l},{to:"/Cyber",text:"Cyber",class:"but3",style:o},{to:"/Helico",text:"Helico",class:"but3",style:o},{to:"/Reseaux",text:"Reseaux",class:"but3",style:o},{to:"/Serveur",text:"Serveur",class:"but3",style:o},{to:"/WEB",text:"WEB",class:"but3",style:i},{to:"/PC",text:"PC",class:"but3",style:i}];return e.jsxs(g,{children:[e.jsxs("div",{className:"header",children:[e.jsx(t,{to:"/Accueil",className:"logo",children:e.jsx("div",{className:"titre",children:"Mon Portfolio"})}),e.jsx("div",{className:"header-right",children:e.jsxs("div",{className:"nav-links",children:[e.jsx("a",{className:"imggithubdiv",href:"https://github.com/calaxo/geii-portfolio",children:e.jsx("img",{className:"imggithub",src:xe,alt:"github"})}),e.jsx("a",{className:"imglinkedindiv ",href:"https://www.linkedin.com/in/calendreau-axel",children:e.jsx("img",{className:"imglinkedin",src:je,alt:"linkedin"})}),a.map(s=>e.jsx(t,{to:s.to,className:"b-".concat(s.class," rounded-button"),style:s.style,children:s.text},s.to))]})})]}),e.jsx("div",{className:"content",children:e.jsxs(f,{children:[e.jsx(r,{path:"/",element:e.jsx(N,{to:"/Accueil"})}),e.jsx(r,{path:"/Accueil",element:e.jsx(A,{})}),e.jsx(r,{path:"/But1",element:e.jsx(R,{})}),e.jsx(r,{path:"/But1_sae1",element:e.jsx(u,{})}),e.jsx(r,{path:"/But1_sae2",element:e.jsx(d,{})}),e.jsx(r,{path:"/But1_sae3",element:e.jsx(P,{})}),e.jsx(r,{path:"/But2",element:e.jsx(q,{})}),e.jsx(r,{path:"/But2_sae1",element:e.jsx(L,{})}),e.jsx(r,{path:"/But2_sae2",element:e.jsx(F,{})}),e.jsx(r,{path:"/But3",element:e.jsx(D,{})}),e.jsx(r,{path:"/But3_sae1",element:e.jsx(T,{})}),e.jsx(r,{path:"/But1_sae1",element:e.jsx(u,{})}),e.jsx(r,{path:"/But1_sae2",element:e.jsx(d,{})}),e.jsx(r,{path:"/WEB",element:e.jsx(I,{})}),e.jsx(r,{path:"/Back",element:e.jsx(V,{})}),e.jsx(r,{path:"/Front",element:e.jsx(z,{})}),e.jsx(r,{path:"/Git",element:e.jsx(U,{})}),e.jsx(r,{path:"/Hebergement",element:e.jsx(M,{})}),e.jsx(r,{path:"/PC",element:e.jsx(G,{})}),e.jsx(r,{path:"/Cyber",element:e.jsx(Q,{})}),e.jsx(r,{path:"/DGAC",element:e.jsx(W,{})}),e.jsx(r,{path:"/Formation",element:e.jsx($,{})}),e.jsx(r,{path:"/Veille",element:e.jsx(Y,{})}),e.jsx(r,{path:"/Helico",element:e.jsx(J,{})}),e.jsx(r,{path:"/Aero",element:e.jsx(K,{})}),e.jsx(r,{path:"/Simu",element:e.jsx(X,{})}),e.jsx(r,{path:"/Reseaux",element:e.jsx(Z,{})}),e.jsx(r,{path:"/Cable",element:e.jsx(ee,{})}),e.jsx(r,{path:"/Firewall",element:e.jsx(se,{})}),e.jsx(r,{path:"/Switch",element:e.jsx(re,{})}),e.jsx(r,{path:"/Serveur",element:e.jsx(te,{})}),e.jsx(r,{path:"/AD",element:e.jsx(ie,{})}),e.jsx(r,{path:"/Docker",element:e.jsx(ne,{})}),e.jsx(r,{path:"/Learning",element:e.jsx(ae,{})}),e.jsx(r,{path:"/Linux",element:e.jsx(le,{})}),e.jsx(r,{path:"/Proxy",element:e.jsx(oe,{})}),e.jsx(r,{path:"/Condition",element:e.jsx(ce,{})}),e.jsx(r,{path:"*",element:e.jsx(k,{})})]})}),e.jsxs("footer",{className:"footer",children:[e.jsx("p",{children:"Site © 2023"}),e.jsx(t,{to:"/Condition",children:"Condition légales"})]})]})}const de=h(document.getElementById("root"));de.render(e.jsx(ue,{}));
