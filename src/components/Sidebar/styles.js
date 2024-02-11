import styled from 'styled-components';

export const Container = styled.div`
  background-color: #171923;
  height: 100%;
  position: fixed;
  padding: 190px 0 0 0;
  width: 23.4%;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  @keyframes showSidebar {
    from {
      width: 0;
    }
    to {
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 10px;
`

export const LogosContainer = styled.div`
  display: flex;
  margin: -120px 0 25px 20%;
  > svg {
    color: white;
    font-size: 60px;
    cursor: pointer;

    &:hover {
      color: ;
    }
  }
`

export const Title = styled.h1 `
  padding: 1em;
  color: white;
  font-size: 30px;
`

export const Footer = styled.div`
  margin-top: 58vh;
  bottom: 0;
`

export const FooterLink = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100&display=swap');

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: white;
  padding: 1em;
`