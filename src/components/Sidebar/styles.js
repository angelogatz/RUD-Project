import styled from 'styled-components';

export const Container = styled.div`
  background-color: #171923;
  height: 100%;
  position: fixed;
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

export const Title = styled.h1 `
  padding: 1em;
  color: white;
  font-size: 30px;
`