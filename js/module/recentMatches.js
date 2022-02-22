export default function recentMatches(){
    
    async function myrecentmatches(url){
        const matchesResponse = await fetch(url);
        const matchesJSON = await matchesResponse.json();
        const table_recente_matches_grid = document.querySelector('.table_recente_macthe_tbody');

        matchesJSON.forEach(matches => {
            const divMatches =  createMatches(matches);
            table_recente_matches_grid.appendChild(divMatches);
        });
    }

    function createMatches(matches){
        const tr = document.createElement('tr');

        tr.innerHTML = 
        `
            <td class="esquerda centro direita">${matches.match_id}</td>
            <td class="esquerda centro direita">${matches.kills}</td>
            <td class="esquerda centro direita">${matches.deaths}</td>
            <td class="esquerda centro direita">${matches.assists}</td>
            <td class="esquerda centro direita">${matches.xp_per_min}</td>
            <td class="esquerda centro direita">${matches.gold_per_min}</td>
            <td class="esquerda centro direita">${matches.hero_damage}</td>
            <td class="esquerda centro direita">${matches.tower_damage}</td>
        `;
        return tr;
    }

    myrecentmatches('https://api.opendota.com/api/players/159992731/recentMatches');
}
