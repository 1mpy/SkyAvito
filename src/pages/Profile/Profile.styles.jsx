import styled from "styled-components";

export const SettingsInputsPlaceholders = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const SettingsLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
  @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;

export const Main = styled.main``;

export const Main__container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
  @media screen and (max-width: 890px) {
    padding: 85px 0px 84px;
  }
  @media screen and (max-width: 620px) {
    padding: 85px 0px 84px;
  }
`;

export const Main__center_block = styled.div`
  @media screen and (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }
  @media screen and (max-width: 620px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const Main__menu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const Menu__logo_link = styled.a`
  width: 54;
  height: 50px;
`;

export const Menu__logo_img = styled.img`
  width: 54px;
  height: auto;
`;
export const Menu__form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`;
export const Menu__btn = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
`;
export const Main__header = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  @media screen and (max-width: 620px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`;
export const Main__profile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 620px) {
    width: 100%;
    padding: 0 0 40px;
  }
`;
export const Profile__content = styled.div`
  max-width: 834px;
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`;
export const Profile__title = styled.h3`
  margin-bottom: 20px;
`;
export const Profile__settings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  @media screen and (max-width: 890px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

export const Settings__left = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 43px;
  @media screen and (max-width: 620px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 0;
  }
`;
export const Settings__img = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
  @media screen and (max-width: 620px) {
    width: 132px;
    height: 132px;
  }
`;
export const Link = styled.a``;
export const Photo = styled.img`
  border-radius: 50%;
`;
export const Settings__change_photo = styled.label`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;

export const inputChange = styled.input`
  display: none;
`;

export const Settings__right = styled.div`
  width: 630px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;
export const Settings__form = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media screen and (max-width: 620px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;
export const Settings__div = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  @media screen and (max-width: 620px) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;
export const Fname = styled(SettingsLabel)``;

export const Settings__f_name = styled(SettingsInputsPlaceholders)`
  width: 300px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const Lname = styled(SettingsLabel)``;

export const Settings__l_name = styled(SettingsInputsPlaceholders)`
  width: 300px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const City = styled(SettingsLabel)``;

export const Settings__city = styled(SettingsInputsPlaceholders)`
  width: 300px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const Phone = styled(SettingsLabel)``;

export const Settings__phone = styled(SettingsInputsPlaceholders)`
  width: 614px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const Settings__btn = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  border-radius: 6px;
  background: #009ee4;
  border: 1px solid #d9d9d9;
  &:active {
    background: #009ee4;
  }
  &:enabled {
    :hover {
      background: #0080c1;
    }
  }
  &:disabled {
    background-color: #d9d9d9;
  }
  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`;
export const Main__title = styled.h3`
  margin-bottom: 20px;
`;
export const Main__content = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Content__cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px) [4];
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /* overflow-y: auto; */
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
  @media screen and (max-width: 1158px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px) [3];
    grid-template-columns: repeat(3, 270px);
  }
  @media screen and (max-width: 890px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px) [2];
    grid-template-columns: repeat(2, 270px);
  }
  @media screen and (max-width: 620px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (137px) [2];
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 596px;
  }
`;
