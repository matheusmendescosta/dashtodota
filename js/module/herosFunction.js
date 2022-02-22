export default function herosFunctions(){

    async function principalHeroes(url){
        try {
            const heroesResponse = await fetch(url);
            const heroesJSON = await heroesResponse.json();
            const heroesID = ["30", "50", "16"];
            const heroesSelect = heroesJSON.filter((hero) => {
                const test = heroesID.indexOf(hero.hero_id);

                if(test != -1){
                    return true;
                }
        
            })
            console.log(heroesSelect);
        
            createHero(heroesSelect[0], "TOP");
            createHero(heroesSelect[1], "MID");
            createHero(heroesSelect[2], "BOT");
            
            // heroesJSON.forEach(heroes => {
            //     console.log(heroes)
            // });    
        } catch (error) {
            console.log(error.message);
        }
        
    }
    
    function createHero(hero, title){
        
        const container_funcao_hero_grid = document.querySelector(".container_funcao_hero");

        const div = document.createElement('div');
        div.classList.add('card_hero');

        div.innerHTML = `
            <div class="card_hero_title">
                <div class="card_title">
                    <h3>${title}</h3>
                </div>
                <div class="space_card_title"></div>
            </div>
            <div class="card_hero_img_text">
                <div class="img_hero">
                    
                </div>
                <div class="text_hero">
                    <p>Herói ${hero.hero_id}</p>
                    <p>ID da Partida ${hero.last_played}</p>
                    <p>Partidas total ${hero.games}</p>
                    <p>Vitorias ${hero.win}</p>
                    <p>with_games ${hero.with_games}</p>
                    <p>with_win ${hero.with_win}</p>
                    <p>against_games ${hero.against_games}</p>
                    <p>against_win ${hero.against_win}</p>
                </div>
            </div>
        `
        container_funcao_hero_grid.appendChild(div);
    }

principalHeroes('https://api.opendota.com/api/players/159992731/heroes');

}