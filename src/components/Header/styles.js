import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100&display=swap');

  font-family: roboto sans-serif;
  background-color: #171923;
  height: 70px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #454d5c;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px #999;
  float: right;
  margin-right: 30px;
  margin-top: 17px;

  &:hover {
    background-color: #535d6e
  }

  &:active {
    background-color: #535d6e;
    box-shadow: 0 2px #666;
    transform: translateY(2px);
  }
`