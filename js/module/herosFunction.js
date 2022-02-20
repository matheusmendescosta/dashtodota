export default function herosFunctions(){

    async function principalHeroes(url){
        const heroesResponse = await fetch(url);
        const heroesJSON = await heroesResponse.json();

        heroesJSON.forEach(heroes => {
            console.log(heroes)
        });
    }
    
principalHeroes('https://api.opendota.com/api/players/159992731/heroes');

}