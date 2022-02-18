export default function recentMatches(){
    async function myrecentmatches(url){
        const matchesResponse = await fetch(url);
        const matchesJSON = await matchesResponse.json();

        matchesJSON.forEach(matches => {
            console.log(matches)
        });
    }

    myrecentmatches('https://api.opendota.com/api/players/159992731/recentMatches');
}