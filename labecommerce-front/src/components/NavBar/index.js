import React from 'react';
import logoStar from '../../assets/logoStar.png'
import { Burger } from './Burger';
import * as S from './styles';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.NavbarContainer>
      <Link to="/">
        <img onClick={scrollToTop} src={logoStar} alt="" />
      </Link>
      <Burger />
    </S.NavbarContainer>
  );
};