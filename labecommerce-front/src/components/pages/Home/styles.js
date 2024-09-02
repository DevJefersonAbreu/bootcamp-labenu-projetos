import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0 7rem;

  @media (max-width: 600px){
  padding: inherit;
  }
`;