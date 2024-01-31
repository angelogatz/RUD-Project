import React, { useEffect, useMemo, useState } from 'react'
import { Button, Container, Title } from './styles'


const Header = () => {
  let url = window.location.pathname;

  console.log(url)
  return (
    <Container>
      <Title>
        Register User Dashboard
      </Title>
      {url == '/user'
        ? <Button>Novo usuário</Button>
        : null
      }
    </Container>
  )
}

export default Header