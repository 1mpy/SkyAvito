import { Link, useParams } from "react-router-dom";
import CardsItem from "../../components/CardsItem/CardsItem";
import { Footer } from "../../components/FooterMobile/FooterMobile.styles";
import * as S from "./Main.styles";
import { useEffect, useState } from "react";
import { getAds } from "../../api/apiAds";
import logo from "../../assets/icons/logo.png";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { selectorAdsList } from "../../store/selectors/adsSelector";
import { setAdsList } from "../../store/slices/adsSlice";

function Main() {
  const dispatch = useDispatch();
  const ads = useSelector(selectorAdsList);
  const setAds = (value) => dispatch(setAdsList(value || []));
  useEffect(() => {
    getAds().then((data) => {
      console.log("data", data);
      setAds(data);
      setAdsFiltered(data);
    });
  }, []);
  // console.log("ads", ads);

  // ПОИСК...

  const [searchData, setSearchData] = useState("");

  const handleSearchData = (e) => setSearchData(e.target.value);

  const [adsFiltered, setAdsFiltered] = useState([]);

  const searchAds = () => {
    if (!searchData) {
      setAdsFiltered(ads);
      return;
    }
    const tmp = ads.filter((el) => {
      if (el.title.toLowerCase().includes(searchData.toLowerCase()))
        return true;
      else return false;
    });
    setAdsFiltered(tmp);
  };
  // ///////

  return (
    <Wrapper>
      <S.Main>
        <S.Main__search>
          <S.Search__logo_link>
            <S.Search__logo_img src={logo} />
          </S.Search__logo_link>
          <S.Search__logo_mob_link>
            <S.Search__logo_mob_img />
          </S.Search__logo_mob_link>
          <S.Search__form onSubmit={(e) => e.preventDefault()}>
            <S.Search__text
              placeholder="Поиск по объявлениям"
              onInput={handleSearchData}
              value={searchData}
            ></S.Search__text>
            <S.Search__text_mob />
            <S.Search__btn onClick={searchAds}>Найти</S.Search__btn>
          </S.Search__form>
        </S.Main__search>
        <S.Main__container>
          <S.Main__header>Объявления</S.Main__header>
          <S.Main__content>
            <S.Content__cards>
              {adsFiltered?.map((el) => (
                <CardsItem element={el} />
              ))}
            </S.Content__cards>
          </S.Main__content>
        </S.Main__container>
      </S.Main>
    </Wrapper>
  );
}

export default Main;
