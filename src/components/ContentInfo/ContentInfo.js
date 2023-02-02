import React, { useEffect, useState } from "react";
import Api from "../../Api";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
`;

export const BoxImage = styled.div`
  margin: 2rem;
`;

export const BoxText = styled.div`
  margin: 2rem;
`;

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

  console.log(suggestion);

  return (
    <div className="container">
      <label for="exampleText0" className="form-label inline-block mb-2 text-gray-700">
        Busque por um Herói
      </label>
      <input
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleText0"
        placeholder="Digite o nome do Herói"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      />

      {suggestion &&
        suggestion.map((sug, idx) => (
          <>
            <div className="container">
              <div className="p-2 " key={idx} onClick={() => suggestionHandler(sug.hero_id)}>
                {sug.hero_id && sug.hero_id.length < 20 ? sug.hero_id : ""}
              </div>
            </div>
          </>
        ))}
      <p>
        Busque informações específicas de cada herói, número de partidas, vitórias, derrotas entre outras informações
      </p>

      <Container>
        <BoxImage>
          {suggestion.map((hero) => (
            <div>
              <img src={"https://api.opendota.com" + hero.img} width={300} />
            </div>
          ))}
        </BoxImage>
        <BoxText>
          {suggestion.map((hero) => (
            <div>
              <p>Total de jogos: {hero.games}</p>
              <p>vitorias: {hero.against_games}</p>
              <p>Derrotas: {hero.against_win}</p>
              <p>Total de jogos: {hero.games}</p>
            </div>
          ))}{" "}
        </BoxText>
      </Container>
    </div>
  );
};

export default ContentInfo;
