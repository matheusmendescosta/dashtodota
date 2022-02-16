export default function profile() {
    fetch('https://api.opendota.com/api/players/159992731')
        .then(res => res.json())
        .then(profile => {
            const myname = document.querySelector('.id');
            const divProfile = createProfile(profile);
            myname.appendChild(divProfile);
            // myname.innerText = profile;
            // console.log(profile);
        })
}

function createProfile(profile) {
    const div = document.createElement('div');
    div.classList.add('.id');
    div.innerHTML = `<h3>${profile}</h3>`;
    return div;
}