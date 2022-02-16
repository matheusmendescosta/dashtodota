export default function profile() {

}
fetch('https://api.opendota.com/api/players/159992731')
.then(res => res.json())
.then(json => {
    const myavatar = document.querySelector('.avatar');
    myavatar.innerHTML = 
    `<img align="left" height="250" src="${json.profile.avatarfull}" />` + 
    `<h3>
        <span>NickName</span> <br>
        ${json.profile.personaname}
    </h3>` +
    `<h4>
        <span>Id Dota2</span> <br>
        ${json.profile.account_id}
    </h4>` +
    `<h4>
        <span>Localidade</span> <br>
        ${json.profile.loccountrycode}
    </h4>` +
    `<h4>
        <span>mmr estimado</span> <br>
        ${json.mmr_estimate.estimate}
    </h4>`
    console.log(json.mmr_estimate.estimate); 
})
