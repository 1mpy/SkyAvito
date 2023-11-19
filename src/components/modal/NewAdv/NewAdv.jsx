import { useEffect, useMemo, useState } from "react";
import * as S from "./NewAdv.styles";
import { getAds, newAd, patchAd, postNewAdPhoto } from "../../../api/apiAds";
import { useDispatch } from "react-redux";
import { setAdsList, setShouldUpdate } from "../../../store/slices/adsSlice";

function NewAdv({ modal, handleModal, currentAd }) {
  //Данные о объявлении
  const [newAdData, setnewAdData] = useState({
    title: currentAd ? currentAd.title : "",
    description: currentAd ? currentAd.description : "",
    price: currentAd ? currentAd.price : "",
  });

  //Состояние на момент запроса при создании объявления
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
    if (currentAd) {
      if (
        newAdData.title === currentAd.title &&
        newAdData.description === currentAd.description &&
        newAdData.price === currentAd.price
      )
        return true;
    }
    return false;
  }, [newAdData.title, newAdData.description, newAdData.price]);

  const handleTitle = (e) =>
    setnewAdData((prev) => ({ ...prev, title: e.target.value }));
  const handleDescription = (e) =>
    setnewAdData((prev) => ({ ...prev, description: e.target.value }));
  const handlePrice = (e) =>
    setnewAdData((prev) => ({ ...prev, price: e.target.value }));

  //Создание объявления и Добавление фото

  const [images, setImages] = useState({});
  const handleAdPhoto = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];
    console.log("selectedFile", selectedFile);
    // console.log("images", images);

    // console.log("event.target.id", event.target.id);

    if (!selectedFile) {
      // console.log("Файл не выбран");
    } else {
      setImages((prev) => ({ ...prev, [event.target.id]: selectedFile }));
    }
  };

  const getImgSrc = (key) => {
    if (images[key]) {
      if (typeof images[key] === "string")
        return `http://127.0.0.1:8090/${images[key]}`;
      else return URL.createObjectURL(images[key]);
    }
    return " ";
  };
  // console.log("images", images);

  useEffect(() => {
    if (currentAd) {
      const imgObject = {};
      currentAd.images.forEach((img, index) => {
        const key = `fileupload${index + 1}`;
        imgObject[key] = img.url;
      });
      setImages(imgObject);
    }
  }, [currentAd?.id]);

  const makeNewAd = async () => {
    setRequestProcess({ loading: true, error: false });
    try {
      const adv = await newAd({
        title: newAdData.title,
        description: newAdData.description,
        price: newAdData.price,
      });

      const keys = Object.keys(images);
      if (keys.length > 0) {
        for (const key in images) {
          const formData = new FormData();
          formData.append("file", images[key]);
          await postNewAdPhoto(formData, adv.id);
        }
      }
      getAds().then((data) => {
        setAds(data);
      });
      setRequestProcess({ loading: false, error: false });
      dispatch(setShouldUpdate(true));
      handleModal();
    } catch (error) {
      setRequestProcess({ loading: false, error: error.message });
    }
  };

  // Редактирование объявления
  const dispatch = useDispatch();
  const setAds = (value) => dispatch(setAdsList(value || []));

  const changeAd = () => {
    patchAd(
      {
        title: newAdData.title,
        description: newAdData.description,
        price: newAdData.price,
      },
      currentAd.id
    )
      .then(() => {
        setRequestProcess({ loading: false, error: false });
        getAds().then((data) => {
          setAds(data);
        });
        dispatch(setShouldUpdate(true));
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
          <S.Modal__title>
            {currentAd ? "Редактировать объявление" : "Новое объявление"}
          </S.Modal__title>
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
                <S.Form__newArt_img for="fileupload1">
                  <S.Form__newArt_img_cover>
                    <img src={getImgSrc("fileupload1")} alt="" />
                  </S.Form__newArt_img_cover>
                  <S.inputChange
                    id="fileupload1"
                    name="photo"
                    type="file"
                    placeholder=""
                    onChange={handleAdPhoto}
                  />
                </S.Form__newArt_img>
                <S.Form__newArt_img for="fileupload2">
                  <S.Form__newArt_img_cover>
                    <img src={getImgSrc("fileupload2")} alt="" />
                  </S.Form__newArt_img_cover>
                  <S.inputChange
                    id="fileupload2"
                    name="photo"
                    type="file"
                    placeholder=""
                    onChange={handleAdPhoto}
                  />
                </S.Form__newArt_img>
                <S.Form__newArt_img for="fileupload3">
                  <S.Form__newArt_img_cover>
                    <img src={getImgSrc("fileupload3")} alt="" />
                  </S.Form__newArt_img_cover>
                  <S.inputChange
                    id="fileupload3"
                    name="photo"
                    type="file"
                    placeholder=""
                    onChange={handleAdPhoto}
                  />
                </S.Form__newArt_img>
                <S.Form__newArt_img for="fileupload4">
                  <S.Form__newArt_img_cover>
                    <img src={getImgSrc("fileupload4")} alt="" />
                  </S.Form__newArt_img_cover>
                  <S.inputChange
                    id="fileupload4"
                    name="photo"
                    type="file"
                    placeholder=""
                    onChange={handleAdPhoto}
                  />
                </S.Form__newArt_img>
                <S.Form__newArt_img for="fileupload5">
                  <S.Form__newArt_img_cover>
                    <img src={getImgSrc("fileupload5")} alt="" />
                  </S.Form__newArt_img_cover>
                  <S.inputChange
                    id="fileupload5"
                    name="photo"
                    type="file"
                    placeholder=""
                    onChange={handleAdPhoto}
                  />
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
              onClick={currentAd ? changeAd : makeNewAd}
              disabled={buttonDisabled || requestProcess.loading}
            >
              <S.Button_text>
                {requestProcess.loading ? (
                  <S.Loading />
                ) : currentAd ? (
                  "Cохранить"
                ) : (
                  "Опубликовать"
                )}
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
