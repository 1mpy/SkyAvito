import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  @media screen and (max-width: 590px) {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #ffffff;
  }
`;

export const Header = styled.header`
  background-color: #009ee4;
  @media screen and (max-width: 590px) {
    display: none;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    height: 55px;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`;

export const Header__nav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
  @media screen and (max-width: 620px) {
    height: 55px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 0 20px;
  }
`;

export const Header__btn_main_enter = styled.button`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
`;

export const HeaderButton = styled.button`
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const Header__logo = styled.div`
  display: none;
  @media screen and (max-width: 620px) {
    display: block;
  }
`;
export const Logo__mob_link = styled.a``;
export const Logo__mob_img = styled.img`
  background-image:;
`;
export const Header__btn_putAd = styled(HeaderButton)`
  cursor: pointer;
  width: 232px;
  height: 40px;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
export const Header__btn_lk = styled(HeaderButton)`
  cursor: pointer;
  width: 173px;
  height: 40px;
  margin-left: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const Header__btn_logout = styled(HeaderButton)`
  cursor: pointer;
  width: 173px;
  height: 40px;
  margin-left: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
