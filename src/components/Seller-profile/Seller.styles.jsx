import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
`;

export const Sellers__container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
  /* margin: 0 auto;
  @media screen and (max-width: 580px) {
    padding: 85px 0px 84px;
  } */
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

export const Main__center_block = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 580px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;
export const Main__header = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
  @media screen and (max-width: 580px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    }
  }
`;
export const Main__profile_sell = styled.div`
  width: 100%;
  padding: 0 0 70px;
  width: 100%;
  @media screen and (max-width: 580px) {
    padding: 0 0 40px;
  }
`;
export const Profile__sell_content = styled.div`
  width: 100%;
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    max-width: 100%;
    width: 100%;
  }
`;
export const Profile__sell_seller = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  @media screen and (max-width: 890px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 580px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;
export const Seller__left = styled.div`
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
  margin-right: 50px;
  @media screen and (max-width: 580px) {
    display: none;
    margin-right: 0px;
  }
`;
export const Seller__img = styled.div`
  border-radius: 50%;
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
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const Link = styled.a``;
export const Photo = styled.img`
  border-radius: 50%;
`;
export const Seller__right = styled.div`
  width: auto;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const Seller__title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
  @media screen and (max-width: 580px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`;
export const Seller__city = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`;
export const Seller__inf = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`;
export const Seller__img_mob_block = styled.div`
  display: none;
  @media screen and (max-width: 580px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 20px 0;
  }
`;
export const Seller__img_mob = styled.div`
  @media screen and (max-width: 580px) {
    display: block;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #f0f0f0;
    img {
      width: 100%;
      height: auto;
      display: block;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
`;

export const Seller__btn = styled.button`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 57px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    span {
      font-size: 12px;
    }
  }
`;

export const Seller__btn_span = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
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
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;
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
export const Main__title = styled.h3`
  margin-bottom: 20px;
`;
export const Main__content = styled.div`
  width: 100%;
  margin: 0 auto;
`;
