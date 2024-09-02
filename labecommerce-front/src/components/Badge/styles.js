import styled from 'styled-components';

const BadgeStyle = styled.span`
  width:20px;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: rgb(234, 191, 0);
  border-radius: 10px;
  color: black;
  position: absolute;
  top: 45px;
  right: 35px;

  @media (max-width: 930px){
  
    right: 60px;
  }  
`;

export default BadgeStyle