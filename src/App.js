import React, { useState } from "react";
import Layout from "./components/layout";
import "./App.css";
import Hero from "./components/hero";
import MailModal from "./components/modal";
import VideoSection from "./sections/videosection";
import WhatWeDoSection from "./sections/whatwedo";
import Le1Section from "./sections/le1section";
import PartnersSection from "./sections/partners";
import FooterSection from "./sections/footerSection";
import Banner from "./components/banner";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Layout>
      <div className="App">
        <Banner />
        <MailModal show={show} onHide={handleClose} />
        <Hero></Hero>
        <VideoSection />
        <WhatWeDoSection />
        <Le1Section />
        <PartnersSection />
        <FooterSection />
      </div>
    </Layout>
  );
}

export default App;
