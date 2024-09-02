import React from 'react'

import * as S from './styles'

export const Footer = () => {
  return (
    <S.ContainerFooter>
      <ul id='contatos'>
        <li>Sobre</li>
        <li>Preços</li>
        <li>Termos de uso</li>
        <li>Política de privacidade</li>
        <li>Redes socias</li>
        <li>Contate-nos</li>
      </ul>
      <address>&copy; Feito em 2023, por Anderson Ribeiro Nunes</address>
    </S.ContainerFooter>
  )
}