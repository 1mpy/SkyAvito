import styled, { css } from "styled-components";

const label = css`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const font_t = css`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const Backdrop = styled.div`
  background-color: black;
  opacity: 0.5;
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Container__bg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const Modal__block = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px / 2));
  top: 60px;
  opacity: 1;
  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 5;
    left: 0px;
    top: 55px;
    opacity: 1;
  }
`;

export const Modal__content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 800px;
  height: auto;
  padding: 20px 92px 57px 50px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 600px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`;

export const Modal__title = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 15px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
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

export const Modal__btn_close = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`;

export const Modal__btn_close_line = styled.div`
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }
  &::before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &::after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Modal__scroll = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 0px;
  }
`;

export const Modal__form_newArt = styled.form`
  ${label}
  margin-top: 5px;
  margin-bottom: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 22px;
  }
`;

export const Modal__reviews = styled.div`
  width: 100%;
  height: 495px;
`;

export const Form__newArt_block = styled.div`
  ${label}
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 14px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 16px;
  }
`;

export const Form__newArt_area = styled.textarea`
  font-family: "Roboto", sans-serif;
  padding: 10px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 100px;
  max-height: 100px;
  &::-webkit-input-placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  ::-ms-input-placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  ::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 600px) {
    font-family: "Roboto", sans-serif;
    width: 100%;
    max-height: 107px;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const Loading = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
  color: #ffffff;
  font-size: 10px;
  margin-top: -14px;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &::before,
  &::after {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    content: "";
    position: absolute;
    top: 0;
  }

  &::before {
    left: -14px;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &::after {
    left: 14px;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 10px 0 -5px;
    }
    40% {
      box-shadow: 0 10px 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 10px 0 -5px;
    }
    40% {
      box-shadow: 0 10px 0 0;
    }
  }
`;

export const Button_text = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
`;

export const Form__newArt__btn_pub = styled.button`
  cursor: pointer;
  width: 181px;
  height: 50px;
  background: #009ee4;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  :hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #0080c1;
  }
  &:disabled {
    background-color: #d9d9d9;
  }
  @media screen and (max-width: 600px) {
    margin-top: 0px;
    width: 100%;
    height: 46px;
    background-color: #009ee4;
  }
`;

export const Reviews__review = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 15px 0;
  flex-direction: column;
`;

export const Review__item = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const Review__left = styled.div`
  margin-right: 12px;
`;

export const Review__img = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  img {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const Review__right = styled.div`
  display: block;
`;

export const Review__name = styled.p`
  ${font_t}
  margin-bottom: 12px;
  font-weight: 600;
  span {
    margin-left: 10px;
    color: #5f5f5f;
  }
`;

export const Review__title = styled.h5`
  ${font_t}
  font-weight: 600;
`;

export const Review__text = styled.p`
  ${font_t}
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;
