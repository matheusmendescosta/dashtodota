//import axios from "axios";
import React, { useEffect, useState } from "react";
import Api from "../../Api";
import "./Header.css";

const Header = () => {
  const [profile, setProfile] = useState("");
  const [win, setWin] = useState();

  async function initApi() {
    let getProfile = await Api.getProfile();
    let getWinLoser = await Api.getWinLoser();
    setWin(getWinLoser);
    setProfile(getProfile);
  }

  useEffect(() => {
    initApi();
  }, []);

  return (
    <div className="">
      <div className="header-container">
        <div className="container flex justify-between">
          <div className="col-2 pb-4">
            <img src={profile && profile.profile.avatarfull} />
          </div>

          <div>
            <h4>Nickname: {profile && profile.profile.personaname}</h4>
            <h4>ID Dota: {profile && profile.profile.account_id}</h4>
            <h4>Localização: {profile && profile.profile.loccountrycode}</h4>
            <h4>MMR: {profile && profile.mmr_estimate.estimate}</h4>
            {/* <h4>
              <span className="text-lime-500">Total de vitorias: </span>
              {win && win.win}
            </h4> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
