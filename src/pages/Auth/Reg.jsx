import * as S from "./Auth.styles";
import { Footer } from "../../components/FooterMobile/FooterMobile.styles";
import { login, regUser } from "../../api/apiAuth";
import { useMemo, useState } from "react";
import namelogo from "../../assets/icons/logo_modal.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { validateEmail, validateReg } from "../../utils/validate";

function Reg() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setCurrentUser = (value) => dispatch(setUser(value));

  const [regdata, setRegdata] = useState({
    password: "",
    checkPassword: "",
    email: "",
    name: "",
    surname: "",
    city: "",
    error: false,
  });

  const buttonDisabled = useMemo(() => {
    if (regdata.password !== regdata.checkPassword) return true;
    if (regdata.password === "" || regdata.email === "") return true;
    return false;
  }, [regdata.checkPassword, regdata.email, regdata.password]);

  const handlePassword = (e) =>
    setRegdata((prev) => ({ ...prev, password: e.target.value }));
  const handleCheckPassword = (e) =>
    setRegdata((prev) => ({ ...prev, checkPassword: e.target.value }));
  const handleEmail = (e) =>
    setRegdata((prev) => ({ ...prev, email: e.target.value }));
  const handleName = (e) =>
    setRegdata((prev) => ({ ...prev, name: e.target.value }));
  const handleSurname = (e) =>
    setRegdata((prev) => ({ ...prev, surname: e.target.value }));
  const handleCity = (e) =>
    setRegdata((prev) => ({ ...prev, city: e.target.value }));

  const registerUser = async () => {
    if (!validateEmail(regdata.email)) {
      setRegdata((prev) => ({ ...prev, error: "Некорректный e-mail" }));
      return;
    }

    if (

      !validateReg(regdata.name) ||
      !validateReg(regdata.surname) ||
      !validateReg(regdata.city)
    ) {
      setRegdata((prev) => ({
        ...prev,
        error: "Имя/Фамилия должны быть с большой буквы",
      }));
      return;
    }
    try {
      const data = await regUser({
        password: regdata.password,
        email: regdata.email,
        name: regdata.name,
        surname: regdata.surname,
        phone: "",
        city: regdata.city,
      });

      await login({
        email: regdata.email,
        password: regdata.password,
      });
      setCurrentUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate(`/`);
    } catch (error) {
      setRegdata((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };
  return (
    <S.Wrapper>
      <S.Container__enter>
        <S.SignIn__block style={{ top: "calc(50% - (647px / 2))" }}>
          <S.SignIn__form_login
            style={{ height: "647px" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <S.SignIn__logo>
              <S.SignIn__logo_img src={namelogo} />
            </S.SignIn__logo>
            <S.SignIn__Input
              type="text"
              name="login"
              id="formlogin"
              placeholder="e-mail"
              value={regdata.email}
              onInput={handleEmail}
            ></S.SignIn__Input>
            <S.SignIn__Input
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={regdata.password}
              onInput={handlePassword}
            ></S.SignIn__Input>
            <S.SignIn__Input
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
              value={regdata.checkPassword}
              onInput={handleCheckPassword}
            ></S.SignIn__Input>
            <S.SignIn__Input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              value={regdata.name}
              onInput={handleName}
            ></S.SignIn__Input>
            <S.SignIn__Input
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              value={regdata.surname}
              onInput={handleSurname}
            ></S.SignIn__Input>
            <S.SignIn__Input
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              value={regdata.city}
              onInput={handleCity}
            ></S.SignIn__Input>
            <p style={{ color: "red" }}>{regdata.error ? regdata.error : ""}</p>
            <S.Btn__signup_ent onClick={registerUser} disabled={buttonDisabled}>
              Зарегистрироваться
            </S.Btn__signup_ent>
          </S.SignIn__form_login>
        </S.SignIn__block>
        <Footer />
      </S.Container__enter>
    </S.Wrapper>
  );
}

export default Reg;
