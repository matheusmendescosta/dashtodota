import React, { useEffect, useState } from "react";
import Api from "../../Api";

const RecentMatches = () => {
  const [matches, setMatches] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestion, setSugestion] = useState([]);

  async function initApi() {
    let getMatche = await Api.getRecentMatches();
    let getHeroStats = await Api.getHeroStats();
    const heroimg = getMatche.map((element) => {
      const heroHeros = getHeroStats.filter((heroStats) => {
        return element.hero_id === heroStats.id;
      });
      element.hero_id = heroHeros[0].localized_name;
      element.img = heroHeros[0].img;
      return element;
    });
    setMatches(heroimg);
  }

  useEffect(() => {
    initApi();
  }, []);

  const onChangeHandler = (search) => {
    let matchesArr = [];
    if (search.length > 0) {
      matchesArr = matches.filter((hero) => {
        const regex = new RegExp(`${search}`, "gi");
        return hero.game_mode.match(regex);
      });
    }
    setSugestion(matches);
    setSearch(search);
  };

  const suggestionHandler = (search) => {
    setSearch(search);
    setSugestion([]);
  };

  console.log("search", suggestion);
  return (
    <div className="container px-4 px-lg-5">
      <div className="">
        <h3 className="">Partidas Recentes</h3>
      </div>
      {/* <label for="exampleText0" className="form-label inline-block mb-2 text-gray-700">
        Busque por uma partida
      </label>
      <input
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleText0"
        placeholder="Digite o nome do Herói para encontrar as últimas partidas"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={search}
      /> */}
      <div className="row gx-4 gx-lg-5 overflow-scroll">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Herói</th>
              <th scope="col">Vitoria Derrota</th>
              <th scope="col">Duração</th>
              <th scope="col">Hero</th>
              <th scope="col">kills</th>
              <th scope="col">deaths</th>
              <th scope="col">assists</th>
              <th scope="col">XP por Minuto</th>
              <th scope="col">Ouro por Minuto</th>
              <th scope="col">Dano em Hero</th>
              <th scope="col">Dano em Torre</th>
              <th scope="col">Cura em Hero</th>
              <th scope="col">Last Hits</th>
              <th scope="col">Lane</th>
            </tr>
          </thead>
          <tbody>
            {matches.map(function (data) {
              return (
                <tr>
                  <th scope="row"></th>
                  <td>{data.hero_id}</td>
                  <td>{data.radiant_win ? "Vitoria" : "Derrota"}</td>
                  <td>{(data.duration / 60).toFixed(2) + "m"}</td>
                  <td>
                    <img src={"https://api.opendota.com" + data.img} width={50} />
                  </td>
                  <td>{data.kills}</td>
                  <td>{data.deaths}</td>
                  <td>{data.assists}</td>
                  <td>{data.xp_per_min}</td>
                  <td>{data.gold_per_min}</td>
                  <td>{data.hero_damage}</td>
                  <td>{data.tower_damage}</td>
                  <td>{data.hero_healing}</td>
                  <td>{data.last_hits}</td>
                  <td>{data.lane_role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentMatches;
