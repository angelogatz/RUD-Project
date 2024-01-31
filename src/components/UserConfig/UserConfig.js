import React from 'react'
import { Container, Paragraph, StyledTable, TableCell, TableRow, Title, UserCard, UserImageBubble } from './styles'
import { FaUser, FaUserEdit } from 'react-icons/fa'
import defaultUserAvatar from '../../images/focaDefault.jpg'
import { MdDeleteForever } from "react-icons/md";

const USERS_MOCK_DATA = [
  {
      name: 'Claudio',
      id: 1,
      permission: 'Admin',
      avatar: defaultUserAvatar,
  },
  {
      name: 'Fernando',
      id: 2,
      permission: 'Gerente',
      avatar: defaultUserAvatar,
  },
  {
      name: 'Natália',
      id: 3,
      permission: 'Admin',
      avatar: defaultUserAvatar,
  },
  {
      name: 'Samira',
      id: 4,
      permission: 'Proprietário',
      avatar: defaultUserAvatar,
  },
  {
      name: 'Stephany',
      id: 5,
      permission: 'Padrão',
      avatar: defaultUserAvatar,
  },
  {
      name: 'Jonatan',
      id: 6,
      permission: 'Gerente',
      avatar: defaultUserAvatar,
  },
  {
      name: 'Angelo',
      id: 7,
      permission: 'Admin',
      avatar: defaultUserAvatar,
  },
  {
      name: 'Vanessa',
      id: 8,
      permission: 'Padrão',
      avatar: defaultUserAvatar,
  },
];

const UserConfig = () => {

  console.log(USERS_MOCK_DATA)

  return (
    <>
      <Container>
        {USERS_MOCK_DATA 
           ? <StyledTable>
              {USERS_MOCK_DATA.map((data) => {
                return (
                  <TableRow key={data.id}>
                    <TableCell backgroundColor="#f7faff">
                      <UserImageBubble avatar={data.avatar}/>
                    </TableCell>
                    <TableCell backgroundColor="#f7faff">
                      <Title style={{width: "0px"}}>{data.name}</Title>
                    </TableCell>
                    <TableCell backgroundColor="#f7faff">
                      <Title style={{margin: "0px"}}>{data.permission}</Title>
                    </TableCell>
                    <TableCell backgroundColor="#f7faff" style={{border: "none"}}>
                      <MdDeleteForever style={{color: "#a33b36"}}/>
                      <FaUserEdit style={{color: "#4270a8"}} />
                    </TableCell>
                  </TableRow>
                )
              })}
            </StyledTable>
          : <>
              <FaUser />
              <Title>Sem usuários</Title>
              <Paragraph>
                Você não possui usuários cadastrados ainda.
              </Paragraph>
            </>
        }
      </Container>
    </>
  )
}

export default UserConfig