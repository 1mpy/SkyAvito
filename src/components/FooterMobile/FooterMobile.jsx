import * as S from "./FooterMobile.styles";

function Footer() {
  const links = [
    { img: '', path: '/' },
    { img: ' ', path: '/' },
    { img: '',  path: '/'},
  ]
  return (
    <S.Footer__box>
      <S.Footer>
        <S.Footer__container>
          <S.Footer__img>
            <a href="" target="_self">
              <img src="img/icon_01.png" alt="home" />
            </a>
          </S.Footer__img>
          <S.Footer__img>
            <a href="" target="_self">
              <img src="img/icon_02.png" alt="home" />
            </a>
          </S.Footer__img>
          <S.Footer__img>
            <a href="" target="_self">
              <img src="img/icon_03.png" alt="home" />
            </a>
          </S.Footer__img>
        </S.Footer__container>
      </S.Footer>
    </S.Footer__box>
  );
}

export default Footer;
