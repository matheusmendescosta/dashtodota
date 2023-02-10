import React, { useEffect } from "react";
import ContentInfo from "./components/ContentInfo/ContentInfo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import RecentMatches from "./components/RecentMatches/RecentMatches";

const App = () => {
  useEffect(() => {
    alert("Página em desenvolvimento click em OK para acessar");
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <Header />
      <ContentInfo />
      <RecentMatches />
      <Footer />
    </div>
  );
};

export default App;
