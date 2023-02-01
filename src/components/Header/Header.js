//import axios from "axios";
import React, { useEffect, useState } from "react";
import Api from "../../Api";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: flex-start;
`;

export const BoxImage = styled.div`
  margin: 2rem;
`;

export const BoxText = styled.div`
  margin: 2rem 5px;
`;

const Header = () => {
  const [profile, setProfile] = useState("");

  async function initApi() {
    let getProfile = await Api.getProfile();
    setProfile(getProfile);
  }

  useEffect(() => {
    initApi();
  }, []);

  return (
    <Container>
      <BoxImage>
        <img src={profile && profile.profile.avatarfull} />
      </BoxImage>
      <BoxText>
        <h4>Nickname: {profile && profile.profile.personaname}</h4>
        <h4>ID Dota: {profile && profile.profile.account_id}</h4>
        <h4>Localização: {profile && profile.profile.loccountrycode}</h4>
        <h4>MMR: {profile && profile.mmr_estimate.estimate}</h4>
      </BoxText>
    </Container>
  );
};

export default Header;
