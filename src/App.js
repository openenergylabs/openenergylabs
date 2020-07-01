import React, { useState } from "react";
import Layout from "./components/layout";
import "./App.css";
import "./styles/components.css";
import MailModal from "./components/modal";
import VideoSection from "./sections/videosection";
import WhatWeDoSection from "./sections/whatwedo";
import Le1Section from "./sections/le1section";
import PartnersSection from "./sections/partners";
import FooterSection from "./sections/footerSection";
import Banner from "./components/banner";
import Hero from "./sections/hero";
import TopNav from "./components/topNav";
import NewsLetter from "./sections/newsletter";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Layout>
      <div className="App">
        {/* <Banner /> */}
        <TopNav />
        <MailModal show={show} onHide={handleClose} />
        <Hero />
        <VideoSection />
        <WhatWeDoSection />
        <Le1Section />
        <NewsLetter />
        <PartnersSection />
        <FooterSection />
      </div>
    </Layout>
  );
}

export default App;
