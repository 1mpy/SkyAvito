import { Link } from "react-router-dom";

import { Footer } from "../../components/FooterMobile/FooterMobile.styles";
import * as S from "./Wrapper.styles";
import { useState } from "react";
import NewAdv from "../modal/NewAdv/NewAdv";

export function Wrapper({ children }) {
  const isAuth = localStorage.getItem("access_token");

  const [modal, setModal] = useState(false);
  const handleModal = () => setModal((prev) => !prev);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Header__nav>
            {isAuth ? (
              <>
                <S.Header__logo>
                  <S.Logo__mob_link>
                    <S.Logo__mob_img />
                  </S.Logo__mob_link>
                </S.Header__logo>
                <S.Header__btn_putAd onClick={handleModal}>
                  Разместить объявление
                </S.Header__btn_putAd>
                <Link to="/profile">
                  <S.Header__btn_lk>Личный кабинет</S.Header__btn_lk>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <S.Header__btn_main_enter>
                  Вход в личный кабинет
                </S.Header__btn_main_enter>
              </Link>
            )}
          </S.Header__nav>
        </S.Header>
        {children}
        <Footer />
      </S.Container>
      <NewAdv modal={modal} handleModal={handleModal} />
    </S.Wrapper>
  );
}
