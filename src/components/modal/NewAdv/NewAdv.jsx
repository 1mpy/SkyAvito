import { useMemo, useState } from "react";
import * as S from "./NewAdv.styles";
import { newAd } from "../../../api/apiAds";

function NewAdv({ modal, handleModal }) {
  //Данные о объявлении
  const [newAdData, setnewAdData] = useState({
    title: "",
    description: "",
    price: "",
  });

  //Состояние на момент запроса на создание объявления
  const [requestProcess, setRequestProcess] = useState({
    loading: false,
    error: false,
  });

  //Блокирование кнопки
  const buttonDisabled = useMemo(() => {
    if (
      newAdData.title === "" ||
      newAdData.description === "" ||
      newAdData.price === ""
    )
      return true;
    return false;
  }, [newAdData.title, newAdData.description, newAdData.price]);

  const handleTitle = (e) =>
    setnewAdData((prev) => ({ ...prev, title: e.target.value }));
  const handleDescription = (e) =>
    setnewAdData((prev) => ({ ...prev, description: e.target.value }));
  const handlePrice = (e) =>
    setnewAdData((prev) => ({ ...prev, price: e.target.value }));

  //Создание объявления
  const makeNewAd = () => {
    setRequestProcess({ loading: true, error: false });
    newAd({
      title: newAdData.title,
      description: newAdData.description,
      price: newAdData.price,
    })
      .then(() => {
        setRequestProcess({ loading: false, error: false });
        handleModal();
      })
      .catch((error) => {
        setRequestProcess({ loading: false, error: error.message });
      });
  };

  return (
    <S.Wrapper style={{ visibility: modal ? "visible" : "hidden" }}>
      <S.Backdrop onClick={handleModal} />
      {/* <S.Container__bg> */}
      <S.Modal__block>
        <S.Modal__content>
          <S.Modal__title>Новое объявление</S.Modal__title>
          <S.Modal__btn_close onClick={handleModal}>
            <S.Modal__btn_close_line></S.Modal__btn_close_line>
          </S.Modal__btn_close>
          <S.Modal__form_newArt onSubmit={(e) => e.preventDefault()}>
            <S.Form__newArt_block>
              <label for="text">Название</label>
              <S.Form__newArt_input
                placeholder="Введите название"
                value={newAdData.title}
                onInput={handleTitle}
              ></S.Form__newArt_input>
            </S.Form__newArt_block>
            <S.Form__newArt_block>
              <label for="text">Описание</label>
              <S.Form__newArt_area
                placeholder="Введите описание"
                value={newAdData.description}
                onInput={handleDescription}
              ></S.Form__newArt_area>
            </S.Form__newArt_block>
            <S.Form__newArt_block>
              <S.Form__newArt_p>
                Фотографии товара<span>не более 5 фотографий</span>
              </S.Form__newArt_p>
              <S.Form__newArt_bar_img>
                <S.Form__newArt_img>
                  <img src="" alt="" />
                  <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                </S.Form__newArt_img>
                <S.Form__newArt_img>
                  <img src="" alt="" />
                  <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                </S.Form__newArt_img>
                <S.Form__newArt_img>
                  <img src="" alt="" />
                  <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                </S.Form__newArt_img>
                <S.Form__newArt_img>
                  <img src="" alt="" />
                  <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                </S.Form__newArt_img>
                <S.Form__newArt_img>
                  <img src="" alt="" />
                  <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                </S.Form__newArt_img>
              </S.Form__newArt_bar_img>
            </S.Form__newArt_block>
            <S.Form__newArt_block>
              <label for="price">Цена</label>
              <S.Form__newArt_input_price
                placeholder="₽"
                value={newAdData.price}
                onInput={handlePrice}
              ></S.Form__newArt_input_price>
              <S.Form__newArt_input_price_cover></S.Form__newArt_input_price_cover>
            </S.Form__newArt_block>
            <S.Form__newArt__btn_pub
              onClick={makeNewAd}
              disabled={buttonDisabled || requestProcess.loading}
            >
              <S.Button_text>
                {requestProcess.loading ? <S.Loading /> : "Опубликовать"}
              </S.Button_text>
            </S.Form__newArt__btn_pub>
          </S.Modal__form_newArt>
        </S.Modal__content>
      </S.Modal__block>
      {/* </S.Container__bg> */}
    </S.Wrapper>
  );
}

export default NewAdv;
