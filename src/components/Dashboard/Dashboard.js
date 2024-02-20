import React, { useEffect, useState } from 'react'
import { Container, Content, Title } from './style'
import DashBoardCard from './DashboardCards/DashBoardCard'
import { apiGetAllUsers } from '../../services/users';
import AnnotationsList from './AnnotationsList/AnnotationsList';

const Dashboard = () => {

  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    apiGetAllUsers().then(({data}) => {
      setUsers(data)
    })
    .catch((error) => {
      console.error(error.message);
    })
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Container>
      <Content>
        <DashBoardCard users={users}/>
      </Content>
      <Content>
        <AnnotationsList users={users}/>
      </Content>
    </Container>
  )
}

export default Dashboard