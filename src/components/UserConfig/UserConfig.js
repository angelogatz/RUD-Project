import React, { useEffect, useState } from 'react'
import { Container, Paragraph, StyledTable, TableCell, TableRow, Title } from './styles'
import { FaUser, FaUserEdit } from 'react-icons/fa'
import { MdDeleteForever } from "react-icons/md";
import { apiGetAllUsers } from '../../services/users';

const UserConfig = () => {

  const [user, setUser] = useState();

  const fetchUserData = () => {
    apiGetAllUsers().then(({data}) => {
      setUser(data)
    })
    .catch((error) => {
      console.error(error.message);
    })
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Container>
        {user 
           ? <StyledTable>
              {user.map((data) => {
                return (
                  <TableRow key={data.id}>
                    <TableCell backgroundColor="#f7faff">
                      <Title style={{margin: "10px", transform: "translateX(4px)"}}>{data.age}</Title>
                    </TableCell>
                    <TableCell backgroundColor="#f7faff">
                      <Title style={{width: "0px", whiteSpace: "nowrap", marginLeft: '20px'}}>{data.username}</Title>
                    </TableCell>
                    <TableCell backgroundColor="#f7faff">
                      <Title style={{margin: "0px", transform: "translateX(5px)"}}>{data.permission}</Title>
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