import styled from 'styled-components';

export const FilterValue = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  p{
  color: black;
  font-size: 1rem;
  }

  input {
  width: 100px;
  padding: 6px;
  border-radius: 10px;
  outline: 0;
  border: none;
  margin-right: 3px;
  background-color: #fafafa;
  }

  select {
  padding: 6px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: rgb(250, 250, 250);
  }

  @media (max-width: 930px){
  display: flex;
  justify-content: center;
  align-items: center;
}
`