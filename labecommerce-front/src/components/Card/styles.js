
import styled from 'styled-components';

export const CardFigure = styled.div`

    width: 300px;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    background: #fafafa;
    text-align: end;
    transition: box-shadow .2s;

    :hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
}

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    padding: 20px;
    background: #f0f0f0;
    object-fit: contain;
  }

  span {
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0.5rem;
  }

  span p {
    margin: 4px 0; 
  }

  svg {
    margin:0 1rem;
  }

  button {
  width: 100%;
  padding: 8px;
  background-color: rgb(27, 26, 32);;
  color: #fff;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.2s ease 0s;
  }

  button:hover {
  
  background-color: rgb(234, 191, 0);
  }
`;