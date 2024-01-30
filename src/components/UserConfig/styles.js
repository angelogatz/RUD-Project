import styled from 'styled-components';


export const Container = styled.div`
  background-color: rgb(230, 237, 250);
  display: flex;
  float: right;
  width: 76.6%;
`;

export const Content = styled.div`
  margin-top: 10px;
`

export const Title = styled.h1 `
  color: #404040;
  margin-top: -32px;
  margin-left: 40px;
  font-size: 30px;
`

export const Paragraph = styled.p`
  color: #636363;
  margin: 40px 0 0 35px;
  font-size: 18px;
`

export const UserCard = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100&display=swap');

  background-color: white;
  width: 320px;
  height: 200px;
  margin-top: 35px;
  margin-left: 30px;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 1px rgb(147, 155, 168);
  padding: 20px;
  font-family: 'Roboto', sans-serif;

  > svg {
    font-size: 30px;
  }
`

export const UserImageBubble = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  background-image: ${(prop) => URL(prop.image)};
`