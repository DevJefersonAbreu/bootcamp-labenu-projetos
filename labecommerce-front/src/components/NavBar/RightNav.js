import { FiShoppingCart } from 'react-icons/fi';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Badge } from '../Badge'
import { ProductContext } from '../../hooks/useProductContext'


export const RightNav = ({ open }) => {

  const { searchProducts, setSearchProducts, productsAdded } = useContext(ProductContext)

  return (
    <>
      <S.Ul open={open}>
        <li>
          <a href="#brinquedos">Brinquedos</a>
        </li>
        <li>Lançamentos</li>
        <li>Promoções</li>
        <li>
          <a href="#contatos">Contato</a>
        </li>
      </S.Ul>
      <S.Search>
        <p>Busca</p>
        <input
          value={searchProducts}
          onChange={(e) => setSearchProducts(e.target.value)}
          type="text"
          placeholder='Star Wors Brinquedos' />
        <Link to="/cart">
          {!!productsAdded.length && <Badge>{productsAdded.length}</Badge>}
          <FiShoppingCart />
        </Link>
      </S.Search>
    </>
  )
}