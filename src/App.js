import React, { useContext } from 'react';
import { context } from './context';
import * as S from './styled';

export default function App() {

  const { srcImg } = useContext(context);

  return (
    <S.Container>
      <h1>Personalidades</h1>
      {
        srcImg.map((link, index) => (
          <S.Card key={ index }>
            <S.Thumbnail src={ link } />
          </S.Card>
        ))
      }
    </S.Container>
  );
}
