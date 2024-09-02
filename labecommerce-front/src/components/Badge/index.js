import React, { useContext } from 'react';
import BadgeStyle from './styles';
import { ProductContext } from '../../hooks/useProductContext';

export const Badge = () => {

  const { productsAdded } = useContext(ProductContext);

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    productsAdded.forEach((item) => {
      totalQuantity += item.amount;
    });
    return totalQuantity;
  };

  return (
    <BadgeStyle>
      {getTotalQuantity()}
    </BadgeStyle>
  );
};