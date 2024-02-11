import React from 'react'
import { Container, Paragraph, Title } from './DashBoardCardStyle'

const CURRENT_USER_MOCK_DATA = {
  name: 'Claudio',
  id: 1,
  email: 'claudio@gmail.com',
  permission: 'Admin',
  created_at: '06/02/2023'
};

const DashBoardCard = () => {
  return (
    <Container>
      <Title>
        Olá {CURRENT_USER_MOCK_DATA.name} <br />
      </Title>
      <Paragraph>
        Seu email é {CURRENT_USER_MOCK_DATA.email} <br />
        Sua permissão é de {CURRENT_USER_MOCK_DATA.permission} <br /> <br /> <br />
        Este usuário foi criado em: <strong>{CURRENT_USER_MOCK_DATA.created_at}</strong>
      </Paragraph>
    </Container>
  )
}

export default DashBoardCard