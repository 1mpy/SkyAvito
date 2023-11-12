import Logo from "../../components/Logo/Logo";
import * as S from "./Auth.styles";
import { Footer } from "../../components/FooterMobile/FooterMobile.styles";
import { regUser } from "../../api/apiAuth";
import { useMemo, useState } from "react";

function Reg() {
  const [regdata, setRegdata] = useState({
    password: "",
    checkPassword: "",
    email: "",
    name: "",
    surname: "",
    city: "",
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

  const registerUser = () => {
    regUser({
      password: regdata.password,
      email: regdata.email,
      name: regdata.name,
      surname: regdata.surname,
      phone: "",
      city: regdata.city,
    });
  };
  return (
    <S.Wrapper>
      <S.Container__enter>
        <S.SignIn__block>
          <S.SignIn__form_login onSubmit={(e) => e.preventDefault()}>
            <S.SignIn__logo>
              <Logo />
            </S.SignIn__logo>
            <S.SignIn__Input
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
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
