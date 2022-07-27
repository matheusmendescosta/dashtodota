import React, { useEffect, useState } from "react";
import Api from "../../Api";

const ContentInfo = () => {
  const [heroes, setHeroes] = useState([]);

  async function initApi() {
    let getHero = await Api.getHeroes();
    setHeroes(getHero);
  }

  useEffect(() => {
    initApi();
  }, []);

  return (
    <div className="px-4 px-lg-5">
      <p></p>
    </div>
  );
};

export default ContentInfo;
