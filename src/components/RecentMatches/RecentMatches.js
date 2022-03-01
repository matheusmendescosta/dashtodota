import React, { useEffect, useState } from "react";
import Api from "../../Api";

const RecentMatches = () => {

    const [matches, setMatches] = useState([]);

    async function initApi() {
        let getMatche = await Api.getRecentMatches();
        let getHeroStats = await Api.getHeroStats();
        
        const heroimg = getMatche.map(element => {
            const heroHeros = getHeroStats.filter(heroStats =>{
                return element.hero_id == heroStats.id;
            })
            element.img = heroHeros[0].img;
            return element;
        });
        setMatches(heroimg);
        //console.log(heroimg[0].img);
    }

    useEffect(() => {
        initApi();
    }, [])

    return (
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">ID Partida</th>
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
                        {
                            matches.map(function (data) {
                                return (
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{data.match_id}</td>
                                        <td>{(data.duration/60).toFixed(2)+"m"}</td>    
                                        <td><img src={"https://api.opendota.com"+data.img} width={50}/></td>
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
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentMatches;