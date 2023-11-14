import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardsItemBox = styled.div``;
export const Cards__item = styled(NavLink)`
  margin: 0;
  @media screen and (max-width: 620px) {
    margin: 0;
  }
`;

export const Cards__card = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  @media screen and (max-width: 620px) {
    width: 137px;
    height: 293px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const Card__image = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
  @media screen and (max-width: 620px) {
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;

    img {
      width: 100%;
      height: 100%;
      display: block;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
`;

export const Link = styled.a``;

export const Photo = styled.img``;

export const Card__content = styled.div``;

export const Card__title = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: #0080c1;
  }
  @media screen and (max-width: 620px) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const Card__price = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Card__place = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  @media screen and (max-width: 620px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;

export const Card__date = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  @media screen and (max-width: 620px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;
