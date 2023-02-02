import React, { useEffect, useState } from "react";
import Api from "../../Api";

import styled from "styled-components";

export const Container = styled.div``;

const ContentInfo = () => {
  const [heroes, setHeroes] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSugestion] = useState([]);

  async function initApi() {
    let getHero = await Api.getHeroes();
    let getHeroStats = await Api.getHeroStats();

    const playersWithHeros = getHero.map((hero) => {
      const nameHero = getHeroStats.filter((nameHero) => {
        return hero.hero_id == nameHero.hero_id;
      });
      hero.hero_id = nameHero[0].localized_name;
      hero.img = nameHero[0].img;

      return hero;
    });

    setHeroes(playersWithHeros);
  }

  useEffect(() => {
    initApi();
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = heroes.filter((hero) => {
        const regex = new RegExp(`${text}`, "gi");
        return hero.hero_id.match(regex);
      });
    }
    setSugestion(matches);
    setText(text);
  };

  const suggestionHandler = (text) => {
    setText(text);
    setSugestion([]);
  };

  return (
    <>
      <div className="container">
        <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700">
          Busque por um Herói
        </label>
        <input
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleText0"
          placeholder="Digite o nome do Herói"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />
      </div>

      {suggestion &&
        suggestion.map((sug, idx) => (
          <div className="container" key={idx} onClick={() => suggestionHandler(sug.hero_id)}>
            {sug.hero_id && sug.hero_id.length < 10 ? sug.hero_id : ""}
          </div>
        ))}
    </>
  );
};

export default ContentInfo;
