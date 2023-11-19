import { Link } from "react-router-dom";
import CardsItem from "../../components/CardsItem/CardsItem";
import * as S from "./Profile.styles";
import { getAds, getUser, patchUser, postNewUserPhoto } from "../../api/apiAds";
import { useEffect, useMemo, useState } from "react";
import { setUser } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorUser } from "../../store/selectors/userSelector";
import img from "../../assets/images/no_img.png";
import logo from "../../assets/icons/logo.png";
import { selectorShouldUpdate } from "../../store/selectors/adsSelector";
import { setShouldUpdate } from "../../store/slices/adsSlice";
import { validatePhone, validateReg } from "../../utils/validate";

function Profile() {
  const [userAds, setUserAds] = useState();
  const shouldUpdate = useSelector(selectorShouldUpdate);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectorUser);
  const setCurrentUser = (value) => dispatch(setUser(value));
  const user = useSelector(selectorUser);
  const updateAds = () => {
    getAds({ user_id: user.id }).then((userAdsData) => {
      if (userAdsData) {
        setUserAds(userAdsData);
        dispatch(setShouldUpdate(false));
      }
    });
  };
  useEffect(() => {
    if (shouldUpdate) updateAds();
  }, [shouldUpdate]);

  useEffect(() => {
    if (!shouldUpdate) updateAds();
  }, []);

  // Изменение данных...

  const [userData, setUserData] = useState({
    name: currentUser.name,
    surname: currentUser.surname,
    city: currentUser.city,
    phone: currentUser.phone,
  });

  const buttonDisabled = useMemo(() => {
    if (
      userData.name !== currentUser.name ||
      userData.surname !== currentUser.surname ||
      userData.city !== currentUser.city ||
      userData.phone !== currentUser.phone
    )
      return false;
    else return true;
  }, [
    currentUser.city,
    currentUser.name,
    currentUser.phone,
    currentUser.surname,
    userData.city,
    userData.name,
    userData.phone,
    userData.surname,
  ]);

  const handleName = (e) =>
    setUserData((prev) => ({ ...prev, name: e.target.value }));
  const handleSurname = (e) =>
    setUserData((prev) => ({ ...prev, surname: e.target.value }));
  const handleCity = (e) =>
    setUserData((prev) => ({ ...prev, city: e.target.value }));
  const handlePhone = (e) =>
    setUserData((prev) => ({ ...prev, phone: e.target.value }));

  const changeUserInfo = async () => {
    if (!validatePhone(userData.phone)) {
      setUserData((prev) => ({ ...prev, error: "Телефон неверного формата" }));
      return;
    }
    if (
      !validateReg(userData.name) ||
      !validateReg(userData.surname) ||
      !validateReg(userData.city)
    ) {
      setUserData((prev) => ({
        ...prev,
        error: "Имя/Фамилия/Город должны быть с большой буквы и не содержать цифр",
      }));
      return;
    }
    const updatedUserInfo = await patchUser({
      name: userData.name,
      surname: userData.surname,
      city: userData.city,
      phone: userData.phone,
      error: false,
    });
    if (updatedUserInfo) {
      setCurrentUser(updatedUserInfo);
      setUserData({
        name: updatedUserInfo.name,
        surname: updatedUserInfo.surname,
        city: updatedUserInfo.city,
        phone: updatedUserInfo.phone,
      });
      localStorage.setItem("user", JSON.stringify(updatedUserInfo));
    }
  };

  //Аватар

  const handleUserPhoto = async (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
    } else {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const userPhoto = await postNewUserPhoto(formData);
      setCurrentUser(userPhoto);
      localStorage.setItem("user", JSON.stringify(userPhoto));
    }
  };

  return (
    <S.Main>
      <S.Main__container>
        <S.Main__center_block>
          <S.Main__menu>
            <S.Menu__logo_link href="" target="_blank">
              <S.Menu__logo_img src={logo} alt="logo" />
            </S.Menu__logo_link>
            <S.Menu__form>
              <Link to="/">
                <S.Menu__btn>Вернуться на&nbsp;главную</S.Menu__btn>
              </Link>
            </S.Menu__form>
          </S.Main__menu>
          <S.Main__header>Здравствуйте, {currentUser.name}!</S.Main__header>
          <S.Main__profile>
            <S.Profile__content>
              <S.Profile__title>Настройки профиля</S.Profile__title>
              <S.Profile__settings>
                <S.Settings__left>
                  <S.Settings__img>
                    <Link to="">
                      <S.Photo
                        src={
                          currentUser?.avatar === null
                            ? img
                            : `http://127.0.0.1:8090/${currentUser?.avatar}`
                        }
                      />
                    </Link>
                  </S.Settings__img>
                  <S.Settings__change_photo for="file-upload">
                    Заменить
                  </S.Settings__change_photo>
                  <S.inputChange
                    id="file-upload"
                    name="photo"
                    type="file"
                    placeholder=""
                    onChange={handleUserPhoto}
                  />
                </S.Settings__left>
                <S.Settings__right>
                  <S.Settings__form>
                    <S.Settings__div>
                      <S.Fname>Имя</S.Fname>
                      <S.Settings__f_name
                        placeholder="Антон"
                        value={userData.name}
                        onInput={handleName}
                      />
                    </S.Settings__div>
                    <S.Settings__div>
                      <S.Lname>Фамилия</S.Lname>
                      <S.Settings__l_name
                        placeholder="Городецкий"
                        value={userData.surname}
                        onInput={handleSurname}
                      />
                    </S.Settings__div>
                    <S.Settings__div>
                      <S.City>Город</S.City>
                      <S.Settings__city
                        placeholder="Санкт-Петербург"
                        value={userData.city}
                        onInput={handleCity}
                      />
                    </S.Settings__div>
                    <S.Settings__div>
                      <S.Phone>Телефон</S.Phone>
                      <S.Settings__phone
                        placeholder="+79161234567"
                        value={userData.phone}
                        onInput={handlePhone}
                      />
                      <p style={{ color: "red" }}>
                        {userData.error ? userData.error : ""}
                      </p>
                    </S.Settings__div>
                  </S.Settings__form>
                  <S.Settings__btn
                    onClick={changeUserInfo}
                    disabled={buttonDisabled}
                  >
                    Сохранить
                  </S.Settings__btn>
                </S.Settings__right>
              </S.Profile__settings>
            </S.Profile__content>
          </S.Main__profile>
          <S.Main__title>Мои товары</S.Main__title>
        </S.Main__center_block>
        <S.Main__content>
          <S.Content__cards>
            {!userAds
              ? "Загрузка..."
              : userAds?.map((el) => <CardsItem element={el} />)}
          </S.Content__cards>
        </S.Main__content>
      </S.Main__container>
    </S.Main>
  );
}

export default Profile;
