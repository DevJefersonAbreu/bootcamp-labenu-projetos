import { useState } from 'react';
import { RightNav } from './RightNav';
import * as S from './styles';

export const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNav
        open={open}
      />
    </>
  );
};