export default function profile() {
    fetch('https://api.opendota.com/api/players/159992731')
    .then(res => res.json())
    .then(json => {
        
        for (const key in json.profile) {
            console.log(json.profile[key]);
        } 
    })
    
    function createProfile(key){

    }
}
