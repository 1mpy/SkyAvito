import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import * as S from "./Auth.styles";
import { Footer } from "../../components/FooterMobile/FooterMobile.styles";
import { useMemo, useState } from "react";
import { login } from "../../api/apiAuth";

function Auth() {
  const navigate = useNavigate();
  const [logindata, setLogindata] = useState({
    password: "",
    email: "",
  });

  const buttonDisabled = useMemo(() => {
    if (logindata.password === "" || logindata.email === "") return true;
    return false;
  }, [logindata.email, logindata.password]);

  const handleEmail = (e) =>
    setLogindata((prev) => ({ ...prev, email: e.target.value }));
  const handlePassword = (e) =>
    setLogindata((prev) => ({ ...prev, password: e.target.value }));

  const loginUser = () => {
    login({
      email: logindata.email,
      password: logindata.password,
    }).then(() => navigate(`/`));
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
              value={logindata.email}
              onInput={handleEmail}
            ></S.SignIn__Input>
            <S.SignIn__Input
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={logindata.password}
              onInput={handlePassword}
            ></S.SignIn__Input>
            <S.Btn__enter onClick={loginUser} disabled={buttonDisabled}>
              Войти
            </S.Btn__enter>
            <Link to="/reg">
              <S.Btn__signup>Зарегистрироваться</S.Btn__signup>
            </Link>
          </S.SignIn__form_login>
        </S.SignIn__block>
        <Footer />
      </S.Container__enter>
    </S.Wrapper>
  );
}

export default Auth;
