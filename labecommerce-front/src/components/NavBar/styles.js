import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 150px;
  border-bottom: 0.5px solid #cfa031;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000200;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

img {
  width: 200px;
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 868px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#cfa031' : '#cfa031')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;


export const Ul = styled.ul`

list-style: none;
display: flex;
flex-flow: row nowrap;

li {
padding: 18px;
font-size: 1.6rem;
color: #cfa031;
cursor: pointer;
transition: all .5s ease;
}

li:hover {
  color: #ffff;
}

svg {
color: #fff;
}

@media (max-width: 930px) {
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
flex-flow: column nowrap;
background: #000;
position: fixed;
top: 0;
right: 0;
height: 100vh;
width: 300px;
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
z-index: 1;

li{
color: #cfa031;
}
}
`

export const Search = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

p {

  color: #cfa031;
  font-size: 1.2rem;
  margin-right: .5rem;
}

input {
  width: 60%;
  padding:8px;
  border-radius: 20px;
  outline: 0;
  border: none;
  background-color: #eee;
}

svg {
  margin-left: 1rem;
  color: #cfa031;
  font-size: 30px;
  cursor: pointer;
}

@media (max-width: 930px){
  svg {
  margin-right: 2rem;
  color: #cfa031;
  font-size: 30px;
  cursor: pointer;
  }

  p, input{
  display: none;
  }
}

`

export const FilterValue = styled.div`
  position: absolute;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 8px;
  gap: 4px;

  p{
  color: #cfa031;
  font-size: 1rem;
  margin-right: 2px;
  }

  input {
  width: 80px;
  padding: 6px;
  border-radius: 20px;
  outline: 0;
  border: none;
  margin-right: 3px;
  }
`