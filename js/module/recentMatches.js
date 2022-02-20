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
        div.classList.add('number-matches');

        div.innerHTML = 
        `
        <tbody>
            <tr>
                <td>${matches.match_id}</td>
                <td colspan="1">${matches.kills}</td>
                <td colspan="1">${matches.deaths}</td>
                <td colspan="1">${matches.assists}</td>
                <td>${matches.xp_per_min}</td>
                <td>${matches.gold_per_min}</td>
                <td>${matches.hero_damage}</td>
                <td>${matches.tower_damage}</td>
            </tr>
        </tbody>
        </table>
        `;
        return div;
    }

    myrecentmatches('https://api.opendota.com/api/players/159992731/recentMatches');
}
