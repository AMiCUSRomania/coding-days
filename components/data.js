import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/WorkshopCodingDays.jpg";
import benefitTwoImg from "../public/img/tshirt.jpg";

const benefitOne = {
  title: "Ce beneficii ai daca vii",
  desc: "Cateva zile pentru a trece la urmatorul nivel de dezvoltare",
  image: benefitOneImg,
  bullets: [
    {
      title: "Vei cunoaste oameni faini",
      desc: "Cei mai...",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Tehnologii noi",
      desc: "Cele mai...",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Seminarii interesante",
      desc: "Nu ai mai auzit asa ceva",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Ateliere",
  desc: "Vino la workshop-urile noastre ca sa inveti ceva interesant",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Development",
      desc: "implementarea unei aplicații de mobil în care se are în vedere înțelegerea conceptelor de layout și media, acomodarea cu limbajul de programare Dart (framework Flutter) și extragerea de conținut din internet folosind un API extern",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Introducere în programare",
      desc: "acesta va fi un workshop destinat începătorilor, cu scopul înțelegerii noțiunilor de bază din programare prin acomodarea cu linia de comandă, limbajul Python și versionarea Git",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Front-end Development",
      desc: "crearea unei aplicații Web folosind framework-ul React împreună cu un API extern",
      icon: <SunIcon />,
    },
    {
      title: "Sisteme embedded",
      desc: "cunoasterea principiilor de bază din electronică și programare prin creerea unor aplicații sugestive cu ajutorul celor mai uzuali senzori și actuatoare. Workshopul vizează în final implementarea controlului unei mașini utilizând mișcarea mâinii",
      icon: <SunIcon />,
    },
    {
      title: "Hacking 101 with Burp",
      desc: "workshopul te va introduce în domeniul securității informatice, oferindu-ți cunoștințe și instrumente pentru identificarea și exploatarea vulnerabilităților aplicațiilor web. Veți învăța tehnici de testare a securității și cum sa utilizezi Burp Suite pentru a evalua și îmbunătăți securitatea aplicațiilor.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
