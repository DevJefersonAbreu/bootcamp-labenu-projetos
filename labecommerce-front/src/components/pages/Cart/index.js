import React from 'react'
import { FiX } from 'react-icons/fi';
import * as S from './styles';
import { Navbar } from '../../components/Navbar';
import { ProductContext } from '../../hooks/useProductContext'
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { object, string } from 'yup'

const schema = object({
  name: string().required('Campo obrigatório')
    .min(3, 'Você precisa inserir pelo menos 3 caracteres'),
  cardNumber: string().required('Campo obrigatório')
    .min(16, 'Seu cartão precisa ter 16 números'),
  validityDay: string().required(),
  validityYear: string().required(),
  validityNumber: string().required(),
})

export const Cart = () => {

  const {
    productsAdded,
    removeProductsById,
    increaseAmount,
    decreaseAmount,
    total } = useContext(ProductContext)

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(schema) })

  const handleSubmit = () => {
    alert('Compras realizadas com sucesso')
  }

  return (
    <>
      <Navbar />
      <S.CartContainer>
        <S.CartProductList>
          {productsAdded.map((item) => (
            <S.CartFigure>
              <div>
                <img src={`${item.url}`} />
              </div>
              <S.CartText>
                <p>
                  {item.name}</p>
                <p>Valor: {item.price.toLocaleString('pt-BR',
                  { style: 'currency', currency: 'BRL' }
                )}
                </p>
                <p>{item.portion}</p>
                <S.ContainerQuantitie>
                  <span>Quantidade: {item.amount}</span>
                  <button onClick={() => decreaseAmount(item.id)}>-</button>
                  <button onClick={() => increaseAmount(item.id)}>+</button>
                </S.ContainerQuantitie>
              </S.CartText>
              <S.ContainerBtn>
                <FiX onClick={() => removeProductsById(item.id)} />
              </S.ContainerBtn>
            </S.CartFigure>
          ))}
        </S.CartProductList>
        <S.ContainerCheckout>
          <form onSubmit={onSubmit(handleSubmit)}>
            <div>
              <h1>Pagamento</h1>
            </div>
            <div>
              <p>Método de pagamento</p>
              <div>
                <input
                  type="radio"
                  name='opcao'
                />Crédito
              </div>
              <div>
                <input
                  type="radio"
                  name='opcao'
                />Débito
              </div>
              <div>
                <p>Nome no cartão</p>
                <input
                  type='text'
                  placeholder='Digite o nome do cartão'
                  id='name'
                  {...register('name')}
                />
                <span>{errors?.name?.message}</span>
              </div>
              <div>
                <p>Número do seu cartão</p>
                <input
                  type="number"
                  placeholder='0000 0000 0000 0000'
                  id='cardNumber'
                  {...register('cardNumber')}
                />
                <span>{errors?.cardNumber?.message}</span>
              </div>
              <p>Data de validade</p>
              <S.ContainerCredit>
                <input
                  type="number"
                  placeholder='00'
                  id='validityDay'
                  {...register('validityDay')}
                />
                <input
                  type="number"
                  placeholder='2023'
                  id='validityYear'
                  {...register('validityYear')}
                />
                <input
                  type="number"
                  placeholder='CVV'
                  id='validityNumber'
                  {...register('validityNumber')}
                />
              </S.ContainerCredit>
            </div>
            <S.Total>
              <h2>Total: {total.toLocaleString('pt-BR',
                { style: 'currency', currency: 'BRL' }
              )}</h2>
            </S.Total>
            <button type='submit'
            >Comprar
            </button>
          </form>
        </S.ContainerCheckout>
      </S.CartContainer>
    </>
  );
};