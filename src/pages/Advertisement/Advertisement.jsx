import { Link, useParams } from "react-router-dom";
import * as S from "./Advertisement.styles";
import logo from "../../assets/icons/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorAdsComments,
  selectorAdsList,
} from "../../store/selectors/adsSelector";
import { useEffect, useMemo, useState } from "react";
import img from "../../assets/images/no_img.png";
import { setAdsComments } from "../../store/slices/adsSlice";
import { getAdComments } from "../../api/apiAds";
import Reviews from "../../components/modal/Reviews/Reviews";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { selectorUser } from "../../store/selectors/userSelector";

function Adv() {
  const params = useParams();
  console.log("params", params);

  const ads = useSelector(selectorAdsList);
  const currentAd = useMemo(() => {
    return ads.find((el) => {
      if (el.id === Number(params.id)) return true;
      else return false;
    });
  }, [ads, params.id]);
  const mainImageUrl =
    currentAd?.images?.length > 0
      ? `http://127.0.0.1:8090/${currentAd?.images[0]?.url}`
      : img;

  // КОММЕНТАРИИ
  const dispatch = useDispatch();
  const adsComments = useSelector(selectorAdsComments);
  const user = useSelector(selectorUser);
  const setComments = (value) => dispatch(setAdsComments(value || []));
  const updateComments = () => {
    getAdComments(params, currentAd.id).then((comments) => {
      setComments(comments);
    });
  };

  useEffect(() => {
    updateComments();
  }, []);
  console.log("user", user);

  //МОДАЛКА
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal((prev) => !prev);

  // Скрыть/показать телефон
  const [showPhone, setShowPhone] = useState(false);
  const handleShowPhone = () => {
    setShowPhone(true);
  };

  return (
    <>
      <S.Main>
        <Wrapper />
        <S.Main__container>
          <S.Main__menu>
            <S.Menu__logo_link>
              <S.Menu__logo_img src={logo} />
            </S.Menu__logo_link>
            <S.Menu__form>
              <Link to="/">
                <S.Menu__btn>Вернуться на&nbsp;главную</S.Menu__btn>
              </Link>
            </S.Menu__form>
          </S.Main__menu>
          <S.Main__article>
            <S.Article__content>
              <S.Article__left>
                <S.Article__fill_img>
                  <S.Article__img>
                    <S.Main__photo src={mainImageUrl} />
                  </S.Article__img>
                  {currentAd?.images.length > 0 && (
                    <S.Article__img_bar>
                      {currentAd?.images.map((el) => (
                        <S.Article__img_bar_div>
                          <S.Photo src={`http://127.0.0.1:8090/${el.url}`} />
                        </S.Article__img_bar_div>
                      ))}
                    </S.Article__img_bar>
                  )}
                  <S.Article__img_bar_mob>
                    <S.Img_bar_mob__circle></S.Img_bar_mob__circle>
                    <S.Img_bar_mob__circle></S.Img_bar_mob__circle>
                    <S.Img_bar_mob__circle></S.Img_bar_mob__circle>
                    <S.Img_bar_mob__circle></S.Img_bar_mob__circle>
                    <S.Img_bar_mob__circle></S.Img_bar_mob__circle>
                  </S.Article__img_bar_mob>
                </S.Article__fill_img>
              </S.Article__left>
              <S.Article__right>
                <S.Article__block>
                  <S.Article__title>{currentAd?.title}</S.Article__title>
                  <S.Article__info>
                    <S.Article__date>{currentAd?.created_on}</S.Article__date>
                    <S.Article__city>{currentAd?.user?.city}</S.Article__city>
                    <S.Article__link onClick={handleModal}>
                      {adsComments.length} отзывов
                    </S.Article__link>
                  </S.Article__info>
                  <S.Article__price>{currentAd?.price}₽</S.Article__price>
                  <S.Article__btn onClick={handleShowPhone}>
                    {currentAd?.user?.phone === null ? (
                      <S.Article__btn_span>
                        Телефон не указан
                      </S.Article__btn_span>
                    ) : (
                      <S.Article__btn_span>
                        Показать&nbsp;телефон
                        <br />
                        {!showPhone
                          ? `${currentAd?.user?.phone.substring(
                              0,
                              1
                            )}${currentAd?.user?.phone.substring(
                              1,
                              4
                            )} XXX XX XX`
                          : currentAd?.user?.phone}
                      </S.Article__btn_span>
                    )}
                  </S.Article__btn>
                  <S.Article__author>
                    <S.Author__img>
                      <S.Photo
                        src={`http://127.0.0.1:8090/${currentAd?.user?.avatar}`}
                      ></S.Photo>
                    </S.Author__img>
                    <S.Author__cont>
                      <S.Author__name
                        to={
                          currentAd.user.id === user.id
                            ? `/profile`
                            : `/seller/${currentAd.user.id}`
                        }
                      >
                        {currentAd?.user?.name}
                      </S.Author__name>
                      <S.Author__about>
                        Продает с {currentAd?.user?.sells_from}
                      </S.Author__about>
                    </S.Author__cont>
                  </S.Article__author>
                </S.Article__block>
              </S.Article__right>
            </S.Article__content>
          </S.Main__article>
          <S.Main__container>
            <S.Main__title>Описание товара </S.Main__title>
            <S.Main__content>
              <S.Main__text>{currentAd?.description}</S.Main__text>
            </S.Main__content>
          </S.Main__container>
        </S.Main__container>
        <Reviews
          currentAd={currentAd}
          modal={modal}
          handleModal={handleModal}
          updateComments={updateComments}
        />
      </S.Main>
    </>
  );
}

export default Adv;
