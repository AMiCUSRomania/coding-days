import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>ACD - AMiCUS Coding Days</title>
        <meta
          name="description"
          content="Timp de o săptămâna descoperim, în mod practic, tainele unor tehnologii ce au aplicații directă în viața cotidiană."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Vrei sa inveti ceva nou?"
        title=" Te asteptam">
          Evenimentul se adresează atât persoanelor non-tehnice (dar curioase) cât și celor care vor să aprofundeze un anumit domeniu.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="PROMO"
        title="Vrei sa vezi cum a fost in alti ani?">
        Cod, tehnologie, sport si voie buna
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Ce zic participantii?">
        Cateva pareri de la cei care au participat la editiile trecute de AMiCUS Coding Days
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Intrebari puse frecvent">
        Aici poti gasi raspunsul la posibilele intrebari pe care le ai
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;