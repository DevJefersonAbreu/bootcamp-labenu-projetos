import styled from 'styled-components';

export const ContainerFooter = styled.div`
  
  width: 100%;
  height: 300px;
  background-color: #000200;

  ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-top: 8rem;
  }

  li {
  margin-right: 4rem;
  color: #cfa031;
  cursor: pointer;
  transition: all .5s ease;
  }

  li:hover {
  color: white;
  }

  address {
  font-size: 1rem;
  color: white;
  text-align: center;
  padding-top: 4rem;
  }
`