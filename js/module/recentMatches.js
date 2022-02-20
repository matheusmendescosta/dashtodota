export default function recentMatches(){
    
    async function myrecentmatches(url){
        const matchesResponse = await fetch(url);
        const matchesJSON = await matchesResponse.json();
        const table_recente_matches_grid = document.querySelector('.table_recente_matches');

        matchesJSON.forEach(matches => {
            const divMatches =  createMatches(matches);
            table_recente_matches_grid.appendChild(divMatches);
        //    console.log(table_recente_matches_grid);
        });
    }

    function createMatches(matches){
        const div = document.createElement('div');
        div.classList.add('table_recente_matches');

        div.innerHTML = 
        `
        <div>
            <table>
                <tbody>
                   <tr>
                        <th>Id partida</th>
                        <th>K</th>
                        <th>D</th>
                        <th>A</th>
                        <th>XP por Minuto</th>
                        <th>Ouro por Minuto</th>
                        <th>Dano em Heroi</th>
                        <th>Dano em torre</th> 
                    </tr>
                    
                    <tr>
                        <td class="esquerda centro direita">${matches.match_id}</td>
                        <td class="esquerda centro direita">${matches.kills}</td>
                        <td class="esquerda centro direita">${matches.deaths}</td>
                        <td class="esquerda centro direita">${matches.assists}</td>
                        <td class="esquerda centro direita">${matches.xp_per_min}</td>
                        <td class="esquerda centro direita">${matches.gold_per_min}</td>
                        <td class="esquerda centro direita">${matches.hero_damage}</td>
                        <td class="esquerda centro direita">${matches.tower_damage}</td>
                    </tr>
                </tbody>
            </table>
        <div>
        `;
        return div;
    }

    myrecentmatches('https://api.opendota.com/api/players/159992731/recentMatches');
}
