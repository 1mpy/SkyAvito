import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import * as S from "./Auth.styles";
import { Footer } from "../../components/FooterMobile/FooterMobile.styles";
import { useMemo, useState } from "react";
import { login } from "../../api/apiAuth";
import { getUser } from "../../api/apiAds";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import namelogo from "../../assets/icons/logo_modal.png";
import { validateEmail } from "../../utils/validate";

function Auth() {
  const dispatch = useDispatch();

  const setCurrentUser = (value) => dispatch(setUser(value));

  const navigate = useNavigate();
  const [logindata, setLogindata] = useState({
    password: "",
    email: "",
    error: false,
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
    if (!validateEmail(logindata.email)) {
      setLogindata((prev) => ({ ...prev, error: "Некорректный e-mail" }));
      return;
    }

    login({
      email: logindata.email,
      password: logindata.password,
    })
      .then(() => {
        getUser().then((data) => {
          if (data) {
            setCurrentUser(data);
            localStorage.setItem("user", JSON.stringify(data));
          }
        });
      })
      .then(() => navigate(`/`));
  };
  return (
    <S.Wrapper>
      <S.Container__enter>
        <S.SignIn__block>
          <S.SignIn__form_login onSubmit={(e) => e.preventDefault()}>
            <S.SignIn__logo>
              <S.SignIn__logo_img src={namelogo} />
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
            <p style={{ color: "red" }}>
              {logindata.error ? logindata.error : ""}
            </p>
            <S.Btn__enter onClick={loginUser} disabled={buttonDisabled}>
              Войти
            </S.Btn__enter>
            <Link to="/reg" style={{ textDecoration: "none" }}>
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
