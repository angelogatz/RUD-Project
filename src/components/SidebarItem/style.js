import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100&display=swap');

  display: flex;
  align-items: center;
  background-color: #1A202C;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin: 0 15px 20px;
  
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`;

export const FooterLink = styled.a`
  color: white;
  
`