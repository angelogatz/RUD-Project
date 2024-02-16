import styled from 'styled-components';


export const Container = styled.div`
  background-color: #f7faff;
  display: flex;
  float: right;
  width: 76.6%;
  margin-top: 65px;
`;

export const Content = styled.div`
  margin-top: 10px;
`

export const Title = styled.h1 `
  color: #404040;
  margin-right: 520px;
  font-size: 20px;
  font-weight: 300;
  font-weight: bold;
`

export const Paragraph = styled.p`
  color: #636363;
  margin: 40px 0 0 35px;
  font-size: 18px;
`

export const StyledTable = styled.table`
  box-shadow: 3px 3px 5px 1px #bac5d9;
  background-color: rgb(230, 237, 250);
  padding: 10px;
  border-radius: 8px;
  width: 90%;
  margin: 45px;
`;

export const TableRow = styled.tr`
  border: 1px solid #707070;
  border-radius: 5px;
`;

export const TableCell = styled.td`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100&display=swap');
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  background-color: ${(prop) => prop.backgroundColor};

  > svg {
    font-size: 31px;
    margin-top: 5px;
    margin-left: 15px;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

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

export const UserImageBubble = styled.img.attrs((props) => ({
  src: props.avatar,
}))`
  width: 50px;
  height: 50px;
  margin-top: 5px;
  background-color: ${(prop) => console.log(prop.avatar)};
  border-radius: 50%;
`