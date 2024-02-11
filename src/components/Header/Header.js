import React, { useEffect, useMemo, useState } from 'react'
import { Button, Container, Title } from './styles'


const Header = ({type}) => {
  let url = window.location.pathname;

  return (
    <Container>
      <Title>
        Register User Dashboard
      </Title>
      {type == 'user'
        ? <Button>Novo usuário</Button>
        : null
      }
    </Container>
  )
}

export default Header