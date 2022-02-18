export default function herosFunctions(){
    fetch('https://api.opendota.com/api/players/159992731/heroes')
    .then(res => res.json())
    .then(json => { 
        console.log(json)
    })
}