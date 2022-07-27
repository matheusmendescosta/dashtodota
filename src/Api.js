import axios from "axios";

const Api = {
  getProfile: async function () {
    let res = await axios.get("https://api.opendota.com/api/players/159992731");
    let { data } = await res;

    return data;
  },

  getHeroes: async function () {
    let res = await axios.get("https://api.opendota.com/api/players/159992731/heroes");
    let { data } = await res;

    return data;
  },

  getHeroStats: async function () {
    let res = await axios.get("https://api.opendota.com/api/heroStats");
    let { data } = await res;

    return data;
  },

  getRecentMatches: async function () {
    let res = await axios.get("https://api.opendota.com/api/players/159992731/recentMatches");
    let { data } = await res;

    return data;
  },

  getWinLoser: async function () {
    let res = await axios.get("https://api.opendota.com/api/players/159992731/wl");
    let { data } = await res;

    return data;
  },
};

export default Api;
