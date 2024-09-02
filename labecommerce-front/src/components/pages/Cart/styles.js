import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  margin-top: 150px;
  
  p {
    margin: 0.50rem;
    font-size: 18px;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const CartProductList = styled.div`
  flex: 2;
  width: 100%;
  height: 100vh;
  padding: 2rem 1rem;
`

export const CartFigure = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  background: #fafafa;
  margin-bottom: 2rem;

  img {
    width: 200px;
    height: 250px;
    padding: 20px;
    background: #f0f0f0;
    object-fit: contain;
    max-width: none;
  }
`;

export const CartText = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 1rem;

    button {
      color: rgb(183, 183, 183);
      border: 0px;
      background-color: rgb(0, 0, 0);
      width: 25px;
      height: 25px;
      margin-left: 1rem;
      font-size: 16px;
    }

@media (max-width: 600px){
  width: 100%;
  display: flex;
  flex-direction: column;
}
`

export const ContainerQuantitie = styled.div`
  width: 100%;
`

export const ContainerBtn = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    position: absolute;
    font-size: 26px;
    cursor: pointer;
    right: 6px;
    top: 8px;
  }
`

export const ContainerCheckout = styled.div`
  flex: 1;
  width: 100%;
  height: 800px;
  padding: 4rem;
  margin-top: 2rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  background: #fafafa;
  margin-right: 0.5rem;
  margin-left:0.5rem ;

  form {
    width: 100%;
  }

  input {
    margin: 1rem;
    padding: 10px;
    border: 10px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #43B02A;
    text-align: center;
    color: #fff;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
    border-radius: 15px;
    margin-top: 1.5rem;
    transition: all .2s ease-out;
  }

  button:hover {
    background: #86d700;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    display: flex;
    margin-left: 0.5rem;
    color: red;
  }
`

export const ContainerCredit = styled.div`
  input {
    width: 80px;
  }`

export const Total = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 1rem;
`