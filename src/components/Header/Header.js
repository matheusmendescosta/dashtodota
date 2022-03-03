//import axios from "axios";
import React, { useEffect, useState } from "react";
import Api from '../../Api'
import "./Header.css";

const Header = () => {

    const [profile, setProfile] = useState("");

    async function initApi(){
        let getProfile = await Api.getProfile();
        setProfile(getProfile);
    }

    useEffect(() => {
        initApi();
    }, [])

    return (<div className="">
        <div className="header-container">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={profile && profile.profile.avatarfull} />
                    </div>
                    <div className="col-10">
                        <h4>Nickname: {profile && profile.profile.personaname}</h4>
                        <h4>ID Dota: {profile && profile.profile.account_id}</h4>
                        <h4>Localização: {profile && profile.profile.loccountrycode}</h4>
                        <h4>MMR: {profile && profile.mmr_estimate.estimate}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Header;