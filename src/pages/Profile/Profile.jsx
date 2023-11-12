import { Link } from "react-router-dom";
import CardsItem from "../../components/CardsItem/CardsItem";
import * as S from "./Profile.styles";

function Profile() {
  return (
    <S.Main>
      <S.Main__container>
        <S.Main__center_block>
          <S.Main__menu>
            <S.Menu__logo_link href="" target="_blank">
              <S.Menu__logo_img src="../../assets/icons/logo.png" alt="logo" />
            </S.Menu__logo_link>
            <S.Menu__form>
              <Link to="/">
                <S.Menu__btn>Вернуться на&nbsp;главную</S.Menu__btn>
              </Link>
            </S.Menu__form>
          </S.Main__menu>
          <S.Main__header>Здравствуйте, Антон!</S.Main__header>
          <S.Main__profile>
            <S.Profile__content>
              <S.Profile__title>Настройки профиля</S.Profile__title>
              <S.Profile__settings>
                <S.Settings__left>
                  <S.Settings__img>
                    <S.Link>
                      <S.Photo />
                    </S.Link>
                  </S.Settings__img>
                  <S.Settings__change_photo>Заменить</S.Settings__change_photo>
                </S.Settings__left>
                <S.Settings__right>
                  <S.Settings__form>
                    <S.Settings__div>
                      <S.Fname>Имя</S.Fname>
                      <S.Settings__f_name placeholder="Антон" />
                    </S.Settings__div>
                    <S.Settings__div>
                      <S.Lname>Фамилия</S.Lname>
                      <S.Settings__l_name placeholder="Городецкий" />
                    </S.Settings__div>
                    <S.Settings__div>
                      <S.City>Город</S.City>
                      <S.Settings__city placeholder="Санкт-Петербург" />
                    </S.Settings__div>
                    <S.Settings__div>
                      <S.Phone>Телефон</S.Phone>
                      <S.Settings__phone placeholder="+79161234567" />
                    </S.Settings__div>
                  </S.Settings__form>
                  <S.Settings__btn>Сохранить</S.Settings__btn>
                </S.Settings__right>
              </S.Profile__settings>
            </S.Profile__content>
          </S.Main__profile>
          <S.Main__title>Мои товары</S.Main__title>
        </S.Main__center_block>
        <S.Main__content>
          <S.Content__cards>
            <CardsItem />
            <CardsItem />
            <CardsItem />
            <CardsItem />
            <CardsItem />
            <CardsItem />
          </S.Content__cards>
        </S.Main__content>
      </S.Main__container>
    </S.Main>
  );
}

export default Profile;
