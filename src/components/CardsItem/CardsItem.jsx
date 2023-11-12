import React from "react";
import * as S from "./CardsItem.styles";
import img from "../../assets/images/no_img.png";

function CardsItem({ element }) {
  return (
    <S.CardsItemBox>
      <S.Cards__item
        to={`/adv/${element.id}`}
        style={{ textDecoration: "none" }}
      >
        <S.Cards__card>
          <S.Card__image>
            <S.Link>
              {element?.images.length !== 0 ? (
                <S.Photo
                  src={`http://127.0.0.1:8090/${element?.images[0]?.url}`}
                />
              ) : (
                <S.Photo src={img} />
              )}
            </S.Link>
          </S.Card__image>
          <S.Card__content>
            <S.Link>
              <S.Card__title>{element?.title}</S.Card__title>
            </S.Link>
            <S.Card__price>{element?.price}</S.Card__price>
            <S.Card__place>{element?.user?.city}</S.Card__place>
            <S.Card__date>{element?.created_on}</S.Card__date>
          </S.Card__content>
        </S.Cards__card>
      </S.Cards__item>
    </S.CardsItemBox>
  );
}

export default CardsItem;
