export default function profile() {
    
    fetch('https://api.opendota.com/api/players/159992731')
    .then(res => res.json())
    .then(json => {

        const container_text_head_grid = document.querySelector(".container_text_head");
        
        const div = document.createElement('div');

        div.innerHTML =  
        `
        <p class="content_text_head">NickName<br>${json.profile.personaname}</p> 
        <p class="content_text_head">MyDotaID<br>${json.profile.account_id}</p>
        <p class="content_text_head">Localidade<br>${json.profile.loccountrycode}</p>
        <p class="content_text_head">mmr estimado<br>${json.mmr_estimate.estimate}</p>
        `;

        container_text_head_grid.appendChild(div);
    })

}
