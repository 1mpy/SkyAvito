import { useSelector } from "react-redux";
import * as S from "./Reviews.styles";
import { selectorAdsComments } from "../../../store/selectors/adsSelector";
import { useMemo, useState } from "react";
import { newComment } from "../../../api/apiAds";

function Reviews({ modal, handleModal, currentAd, updateComments }) {
  const adReviews = useSelector(selectorAdsComments);
  // console.log("adReviews", adReviews);

  //Данные о комментарии
  const [reviewData, setReviewData] = useState({
    text: "",
  });

  //Состояние на момент запроса на создание объявления
  const [requestProcess, setRequestProcess] = useState({
    loading: false,
    error: false,
  });

  //Блокирование кнопки
  const buttonDisabled = useMemo(() => {
    if (reviewData.text === "") return true;
    return false;
  }, [reviewData.text]);

  const handleText = (e) =>
    setReviewData((prev) => ({ ...prev, text: e.target.value }));

  //Создание комментария
  const makeNewComment = () => {
    setRequestProcess({ loading: false, error: false });
    newComment(
      {
        text: reviewData.text,
      },
      currentAd.id
    )
      .then(() => {
        setRequestProcess({ loading: false, error: false });
        setReviewData((prev) => ({ ...prev, text: "" }));
        updateComments();
      })

      .catch((error) => {
        setRequestProcess({ loading: false, error: error.message });
      });
  };
  // Отключение комментариев незарегистрированным пользователям
  const user = localStorage.getItem("access_token");



  return (
    <S.Wrapper style={{ visibility: modal ? "visible" : "hidden" }}>
      <S.Backdrop onClick={handleModal} />
      <S.Modal__block>
        <S.Modal__content>
          <S.Modal__title>Отзывы о товаре</S.Modal__title>
          <S.Modal__btn_close onClick={handleModal}>
            <S.Modal__btn_close_line></S.Modal__btn_close_line>
          </S.Modal__btn_close>
          <S.Modal__scroll>
            {user ? (
              <>
                <S.Modal__form_newArt onSubmit={(e) => e.preventDefault()}>
                  <S.Form__newArt_block>
                    <label for="text">Добавить отзыв</label>
                    <S.Form__newArt_area
                      placeholder="Введите описание"
                      value={reviewData.text}
                      onInput={handleText}
                    ></S.Form__newArt_area>
                  </S.Form__newArt_block>
                  <S.Form__newArt__btn_pub
                    onClick={makeNewComment}
                    disabled={buttonDisabled || requestProcess.loading}
                  >
                    <S.Button_text>
                      {requestProcess.loading ? <S.Loading /> : "Опубликовать"}
                    </S.Button_text>
                  </S.Form__newArt__btn_pub>
                </S.Modal__form_newArt>
              </>
            ) : (
              <></>
            )}

            <S.Modal__reviews>
              <S.Reviews__review>
                {adReviews?.map((el) => (
                  <S.Review__item element={el}>
                    <S.Review__left>
                      <S.Review__img>
                        <img src="" alt="" />
                      </S.Review__img>
                    </S.Review__left>
                    <S.Review__right>
                      <S.Review__name>
                        {el.author?.name}
                        <span>{el.created_on}</span>
                      </S.Review__name>
                      <S.Review__title>Комментарий</S.Review__title>
                      <S.Review__text>{el.text}</S.Review__text>
                    </S.Review__right>
                  </S.Review__item>
                ))}
              </S.Reviews__review>
            </S.Modal__reviews>
          </S.Modal__scroll>
        </S.Modal__content>
      </S.Modal__block>
    </S.Wrapper>
  );
}

export default Reviews;
